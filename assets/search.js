(async function () {
  const box = document.getElementById("searchBox");
  const results = document.getElementById("results");
  if (!box || !results) return;

  // ---- Stop words (básicas, ampliables) ----
  const STOP_ES = new Set([
    "a","al","algo","algunos","ante","antes","aquí","así","aunque","bajo","bien","cada","casi","como","con","contra",
    "cual","cuando","de","del","desde","donde","dos","el","ella","ellas","ello","ellos","en","entre","era","es","esa",
    "esas","ese","eso","esos","esta","está","estas","este","esto","estos","ha","han","hasta","hay","la","las","le",
    "les","lo","los","más","me","mi","mis","mucho","muy","no","nos","o","otra","otro","para","pero","poco","por",
    "porque","que","qué","quien","se","sea","ser","si","sí","sin","sobre","son","su","sus","también","tan","te","tiene",
    "todo","todos","tu","tus","un","una","uno","unos","y","ya"
  ]);

  const STOP_EN = new Set([
    "a","an","and","are","as","at","be","but","by","can","could","do","does","for","from","had","has","have","he","her",
    "here","him","his","how","i","if","in","into","is","it","its","just","like","may","me","more","most","my","no","not",
    "of","on","one","or","our","out","she","so","some","such","than","that","the","their","them","then","there","these",
    "they","this","to","up","us","was","we","were","what","when","where","which","who","will","with","you","your"
  ]);

  const isES = location.pathname.startsWith("/es/");
  const STOP = isES ? STOP_ES : STOP_EN;

  // ---- Cargar índice ----
  const res = await fetch("/search.json", { cache: "no-store" });
  const data = await res.json();

  // Filtrar por idioma según la colección
  const items = data.filter(x => isES ? x.collection === "es_posts" : x.collection === "en_posts");

  // ---- Utilidades ----
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => ({
      "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
    }[m]));
  }

  function normalizeText(s) {
    // quita tildes/diacríticos para matching robusto
    return String(s)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function tokenize(query) {
    const raw = normalizeText(query)
      .split(/[^a-z0-9]+/i)
      .map(t => t.trim())
      .filter(Boolean);

    // elimina stop-words y tokens muy cortos
    const tokens = raw.filter(t => t.length >= 2 && !STOP.has(t));
    // dedupe
    return Array.from(new Set(tokens));
  }

  function scoreItem(item, tokens) {
    // scoring simple: título pesa más que excerpt, excerpt más que content
    const title = normalizeText(item.title || "");
    const excerpt = normalizeText(item.excerpt || "");
    const content = normalizeText(item.content || "");

    let score = 0;
    for (const t of tokens) {
      if (title.includes(t)) score += 8;
      if (excerpt.includes(t)) score += 4;
      if (content.includes(t)) score += 1;
    }
    return score;
  }

  function highlight(text, tokens) {
    // resaltado sobre el texto original (escapado)
    if (!text) return "";
    const safe = escapeHtml(text);

    // Resaltado conservador: busca términos sin diacríticos, pero pinta sobre HTML escapado.
    // Para evitar líos de acentos, hacemos reemplazo por regex simple en el texto escapado
    // (no perfecto al 100% con diacríticos, pero suficientemente bueno).
    let out = safe;
    for (const t of tokens) {
      const re = new RegExp(`(${escapeRegExp(t)})`, "ig");
      out = out.replace(re, `<mark>$1</mark>`);
    }
    return out;
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function formatCategory(cat) {
    if (!cat) return isES ? "Sin categoría" : "Uncategorised";
    // si es array, usa la primera; si es string, úsala
    const c = Array.isArray(cat) ? (cat[0] || "") : String(cat);
    return c || (isES ? "Sin categoría" : "Uncategorised");
  }

  function groupResults(list) {
    // Agrupa por YYYY-MM y luego por categoría
    // item.date llega como "YYYY-MM-DD"
    const byYM = new Map();

    for (const it of list) {
      const ym = (it.date || "").slice(0, 7) || "unknown";
      const cat = formatCategory(it.categories || it.category); // por si algún día lo añades
      if (!byYM.has(ym)) byYM.set(ym, new Map());
      const byCat = byYM.get(ym);
      if (!byCat.has(cat)) byCat.set(cat, []);
      byCat.get(cat).push(it);
    }

    // orden: ym desc
    const ymKeys = Array.from(byYM.keys()).sort((a, b) => b.localeCompare(a));

    // dentro de cada cat: más reciente primero
    for (const ym of ymKeys) {
      const byCat = byYM.get(ym);
      for (const [cat, arr] of byCat.entries()) {
        arr.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      }
    }

    return { byYM, ymKeys };
  }

  function renderGrouped(list, tokens) {
    if (!list.length) {
      results.innerHTML = "";
      return;
    }

    const { byYM, ymKeys } = groupResults(list);

    let html = "";
    for (const ym of ymKeys) {
      const byCat = byYM.get(ym);
      const cats = Array.from(byCat.keys()).sort((a, b) => a.localeCompare(b));

      html += `<li style="list-style:none;margin:1.2rem 0 .4rem 0;"><strong>${escapeHtml(ym)}</strong></li>`;

      for (const cat of cats) {
        const items = byCat.get(cat);

        html += `<li style="list-style:none;margin:.4rem 0 0 0;"><em>${escapeHtml(cat)}</em></li>`;
        html += `<ul style="margin:.4rem 0 1rem 1.2rem;">`;

        for (const it of items.slice(0, 50)) { // límite por grupo
          const titleH = highlight(it.title || "", tokens);
          const excerptH = highlight(it.excerpt || "", tokens);

          html += `
            <li style="margin:.35rem 0;">
              <a href="${it.url}">${escapeHtml(it.date)} — ${titleH}</a>
              ${excerptH ? `<br><small>${excerptH}</small>` : ""}
            </li>
          `;
        }

        html += `</ul>`;
      }
    }

    // results es un <ul>, así que metemos <li> contenedores + <ul> internos
    results.innerHTML = html;
  }

  // ---- Nota: para agrupar por categoría necesitamos "categories" en search.json ----
  // Si no existe, no pasa nada: quedará "Sin categoría" / "Uncategorised".
  // Te dejo abajo el ajuste recomendado para search.json.

  function search(query) {
    const tokens = tokenize(query);

    // si tras stop-words no queda nada, no mostramos resultados (o puedes mostrar "usa más términos")
    if (!tokens.length) {
      results.innerHTML = "";
      return;
    }

    // calcular score y filtrar
    const ranked = items
      .map(it => ({ ...it, _score: scoreItem(it, tokens) }))
      .filter(it => it._score > 0)
      .sort((a, b) => b._score - a._score || (b.date || "").localeCompare(a.date || ""));

    // render agrupado (top N global para no pintar demasiado)
    renderGrouped(ranked.slice(0, 60), tokens);
  }

  // ---- UI events ----
  box.addEventListener("input", () => {
    const q = box.value.trim();
    if (!q) {
      results.innerHTML = "";
      return;
    }
    search(q);
  });

})();
