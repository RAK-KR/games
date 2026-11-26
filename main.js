// 카드 그리기 — 평소에는 건드릴 필요 없습니다.
(function () {
  const grid = document.getElementById("grid");

  GAMES.forEach(g => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = g.url;
    a.style.setProperty("--c", g.color || "#888");

    // 화면 사진 (없으면 제목 글자로 대신 채움)
    const thumb = document.createElement("div");
    thumb.className = "thumb";
    if (g.image) {
      const img = document.createElement("img");
      img.src = g.image;
      img.alt = g.title + " 화면";
      img.loading = "lazy";
      img.onerror = () => { img.remove(); thumb.classList.add("empty"); thumb.textContent = g.title; };
      thumb.appendChild(img);
    } else {
      thumb.classList.add("empty");
      thumb.textContent = g.title;
    }

    const body = document.createElement("div");
    body.className = "body";

    const h = document.createElement("h2");
    h.textContent = g.title;

    const p = document.createElement("p");
    p.textContent = g.desc;

    const row = document.createElement("div");
    row.className = "row";

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

    row.append(tags, play);
    body.append(h, p, row);
    a.append(thumb, body);
    grid.appendChild(a);
  });
})();
