// 게임 목록 — 새 게임을 올리면 여기에 한 덩어리만 추가하면 됩니다.
// url은 브라우저 주소창에 뜨는 주소를 그대로 복사해서 넣어 주세요.
// tags는 위쪽 필터 버튼에 자동으로 나타납니다.
// color는 카드 강조 색입니다.

const GAMES = [
  {
    title: "MARGIN",
    url: "https://rak-kr.github.io/margin/",
    desc: "기계 적의 부위를 부숴 부품을 회수하고 탈출하는 3D FPS",
    tags: ["3D", "FPS", "싱글"],
    color: "#e5484d"
  },
  {
    title: "체커드 CHECKERED",
    url: "https://rak-kr.github.io/checkered/",
    desc: "타임어택과 방 코드 친구 대결을 지원하는 카트 레이싱",
    tags: ["3D", "레이싱", "멀티"],
    color: "#f5a524"
  },
  {
    title: "LIVE ROUND",
    url: "https://rak-kr.github.io/live-round/",
    desc: "장전된 탄을 두고 벌이는 음산한 테이블 심리전",
    tags: ["3D", "심리전", "멀티"],
    color: "#8e4ec6"
  },
  {
    title: "EMBERHIDE",
    url: "https://rak-kr.github.io/EMBERHIDE/",
    desc: "태도 한 자루로 거대 몬스터를 사냥하는 3D 수렵 액션",
    tags: ["3D", "액션", "싱글"],
    color: "#f76b15"
  },
  {
    title: "TWIN RIFT",
    url: "https://rak-kr.github.io/twin-rift/",
    desc: "두 세계를 간섭 구역으로 겹쳐 탈출하는 2인 협동 퍼즐",
    tags: ["2D", "협동", "멀티"],
    color: "#3e93de"
  },
  {
    title: "와글와글 파티",
    url: "https://rak-kr.github.io/wagle_party/",
    desc: "미니게임 20개를 연달아 겨루는 파티 게임",
    tags: ["2D", "파티", "멀티"],
    color: "#46a758"
  },
  {
    title: "한탕",
    url: "https://rak-kr.github.io/hantang/",
    desc: "잠입하다 들키면 총격전이 되는 레트로 1인칭 강도 게임",
    tags: ["3D", "잠입", "멀티"],
    color: "#ffc53d"
  },
  {
    title: "빛나 사진관",
    url: "https://rak-kr.github.io/best-seat/",
    desc: "한 동네를 배경으로 한 5편 연작 1인칭 방탈출",
    tags: ["3D", "방탈출", "싱글"],
    color: "#d6409f"
  },
  {
    title: "THE LAST KEY",
    url: "https://rak-kr.github.io/Last-Key/",
    desc: "한 번 쓴 키는 영영 사라지는 키보드 퍼즐 플랫포머",
    tags: ["2D", "퍼즐", "싱글"],
    color: "#12a594"
  }

  // 예시) KICKBACK, BACKBLAST 등은 주소 확인 후 아래처럼 추가
  // ,{
  //   title: "KICKBACK",
  //   url: "https://rak-kr.github.io/저장소이름/",
  //   desc: "총 반동으로만 올라가는 등반 게임",
  //   tags: ["2D", "플랫포머", "싱글"],
  //   color: "#a1a1aa"
  // }

  {
    title: "KICKBACK",
    url: "https://rak-kr.github.io/KICBACK/",
    desc: "총 반동으로만 올라가는 등반 게임",
    tags: ["2D", "플랫포머", "싱글"],
    color: "#a1a1aa"
  // }

  {
    title: "KICKBACK",
    url: "https://rak-kr.github.io/KICBACK/",
    desc: "총 반동으로만 올라가는 등반 게임",
    tags: ["2D", "플랫포머", "싱글"],
    color: "Grean"
  // }
];
