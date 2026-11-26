// 카드 그리기와 태그 필터 — 평소에는 건드릴 필요 없습니다.
(function () {
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  let current = "전체";

  const allTags = ["전체"];
  GAMES.forEach(g => g.tags.forEach(t => { if (!allTags.includes(t)) allTags.push(t); }));

  function renderFilters() {
    filters.innerHTML = "";
    allTags.forEach(tag => {
      const b = document.createElement("button");
      b.textContent = tag;
      b.className = "chip" + (tag === current ? " on" : "");
      b.onclick = () => { current = tag; renderFilters(); renderGrid(); };
      filters.appendChild(b);
    });
  }

  function renderGrid() {
    grid.innerHTML = "";
    GAMES.filter(g => current === "전체" || g.tags.includes(current)).forEach(g => {
      const a = document.createElement("a");
      a.className = "card";
      a.href = g.url;
      a.style.setProperty("--c", g.color || "#888");

      const h = document.createElement("h2");
      h.textContent = g.title;

      const p = document.createElement("p");
      p.textContent = g.desc;

      const tags = document.createElement("div");
      tags.className = "tags";
      g.tags.forEach(t => {
        const s = document.createElement("span");
        s.textContent = t;
        tags.appendChild(s);
      });

      const play = document.createElement("div");
      play.className = "play";
      play.textContent = "PLAY ▶";

      a.append(h, p, tags, play);
      grid.appendChild(a);
    });
  }

  renderFilters();
  renderGrid();
})();
