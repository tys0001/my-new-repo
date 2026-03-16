const overviewStats = [
  { label: "旅行日期", value: "2026/03/28 - 04/04" },
  { label: "同行成員", value: "2 位大人 + 2 位小帥哥" },
  { label: "航班方式", value: "台中直飛富國島" },
  { label: "旅遊節奏", value: "樂園、按摩、夜景慢玩" },
];

const flightCards = [
  {
    title: "去程 JX333",
    detail: "03/28（六） 台中 07:25 → 富國島 10:05",
    note: "一早出發，建議至少 05:30 前抵達機場報到。",
  },
  {
    title: "回程 JX334",
    detail: "04/04（六） 富國島 10:40 → 台中 15:25",
    note: "回程一早退房，早餐後即需出發前往機場。",
  },
  {
    title: "行李額度",
    detail: "每人 2 件 23kg，全家共可帶 8 件",
    note: "採買空間很大，但液體與易碎品仍建議優先托運。",
  },
];

const photoMoments = [
  {
    title: "海島放空的起手式",
    label: "Beach Mood",
    image:
      "https://images.unsplash.com/photo-1732243395944-cb3ff9311091?auto=format&fit=crop&w=1200&q=80",
    desc: "前段住北島時，把海邊與飯店泳池當作調整節奏的主場。",
  },
  {
    title: "Grand World 夜景氛圍",
    label: "Night Walk",
    image:
      "https://images.unsplash.com/photo-1693282814784-649be45a459b?auto=format&fit=crop&w=1200&q=80",
    desc: "運河、燈光與散步節奏很適合家族旅行，不需要硬排太多點。",
  },
  {
    title: "煙火秀的旅行高潮",
    label: "Show Time",
    image:
      "https://images.unsplash.com/photo-1704765707896-f0aaab64d7b2?auto=format&fit=crop&w=1200&q=80",
    desc: "把跨海纜車、日落小鎮和海洋之吻煙火秀串成南島代表日。",
  },
];

const familyNotes = [
  "北島前半段主打樂園與動物園，移動集中、孩子比較不累。",
  "南島後半段改成夜市、煙火、採買與泳池，節奏更像度假收尾。",
  "每天保留按摩或飯店休息，這次網站設計也以慢玩和清爽閱讀為主。",
];

const accommodations = [
  {
    name: "Crowne Plaza Phu Quoc Starbay",
    nights: "03/28 - 04/01",
    area: "北島 Starbay",
    highlights: [
      "靠近 Grand World、Safari、VinWonders",
      "環境安靜，適合前半段集中玩北島",
      "需提前 12 小時預約機場接駁",
    ],
    map: "https://maps.google.com/?q=Crowne+Plaza+Phu+Quoc+Starbay",
  },
  {
    name: "Pullman Phu Quoc Beach Resort",
    nights: "04/01 - 04/04",
    area: "南島長灘",
    highlights: [
      "無邊際泳池與兒童設施完整",
      "適合安排夜市、纜車與日落小鎮",
      "旅程後段以放鬆與採買收尾很順",
    ],
    map: "https://maps.google.com/?q=Pullman+Phu+Quoc+Beach+Resort",
  },
];

const budgets = [
  ["機票", "已訂 / 待統計", "依企劃稿採 JX333 / JX334 直飛台中來回"],
  ["住宿", "待回填", "北島 Crowne Plaza 4 晚 + 南島 Pullman 3 晚"],
  ["北島門票", "待回填", "Safari、VinWonders 可依套票一起計算"],
  ["南島門票", "待回填", "跨海纜車、香島水樂園、海洋之吻秀"],
  ["交通與 Grab", "待回填", "機場接送、夜市往返、日落小鎮移動"],
  ["按摩與採買", "彈性準備", "每天都有按摩安排，另預留 Kingkong Mart 採買額度"],
];

const checklistGroups = [
  {
    title: "出發前要確認",
    items: [
      "護照效期至少 6 個月",
      "Crowne Plaza 機場接駁提前 12 小時預約",
      "Grab App 全員註冊並綁定信用卡",
      "Safari、VinWonders、纜車門票先比價",
    ],
  },
  {
    title: "親子打包重點",
    items: [
      "泳衣、防曬衣、泳鏡、拖鞋",
      "小朋友換洗衣物與常備藥",
      "推車或輕便背帶擇一攜帶",
      "空行李箱空間留給回程採買",
    ],
  },
  {
    title: "旅途常用口訣",
    items: [
      "謝謝：Cảm ơn",
      "按摩大力：Mạnh lên",
      "按摩輕點：Nhẹ lại",
      "Google Maps 離線地圖提前下載",
    ],
  },
];

const tripDays = [
  {
    day: "Day 1",
    date: "03/28（六）",
    title: "抵達富國島，晚上去富國大世界看水舞",
    theme: "抵達日 + 北島夜景",
    summary: "落地後以飯店放空、調整節奏為主，晚上輕鬆逛 Grand World，看威尼斯水舞。",
    map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
    timeline: [
      {
        time: "07:25",
        title: "JX333 台中出發",
        desc: "一家四口搭乘早班機直飛富國島，建議機上先讓孩子補眠。",
        map: "https://maps.google.com/?q=Taichung+International+Airport",
      },
      {
        time: "10:05",
        title: "抵達富國島並前往 Crowne Plaza",
        desc: "使用預約好的飯店接駁前往北島，先把移動體力省下來。",
        map: "https://maps.google.com/?q=Crowne+Plaza+Phu+Quoc+Starbay",
      },
      {
        time: "15:30",
        title: "飯店放空 + Hoa Sim Spa",
        desc: "下午保留給泳池、海邊與飯店內按摩，讓全家順順切進渡假模式。",
        map: "https://maps.google.com/?q=Hoa+Sim+Spa+Phu+Quoc",
      },
      {
        time: "19:00",
        title: "富國大世界夜遊與威尼斯水舞",
        desc: "晚上散步看燈光與運河氛圍，第一天不排太滿最剛好。",
        map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 2",
    date: "03/29（日）",
    title: "Safari 野生動物園與長頸鹿餵食",
    theme: "動物互動日",
    summary: "以 Safari 為主角，孩子有足夠時間搭遊園車、看動物、餵長頸鹿。",
    map: "https://maps.google.com/?q=Vinpearl+Safari+Phu+Quoc",
    timeline: [
      {
        time: "09:00",
        title: "出發前往 Vinpearl Safari",
        desc: "建議早餐後提早出門，避開中午最熱的時段。",
        map: "https://maps.google.com/?q=Vinpearl+Safari+Phu+Quoc",
      },
      {
        time: "10:00",
        title: "搭 Safari 車看野生動物",
        desc: "安排孩子先搭重點路線，再視狀況安排步行區。",
        map: "https://maps.google.com/?q=Vinpearl+Safari+Phu+Quoc",
      },
      {
        time: "12:00",
        title: "長頸鹿餵食與園區午餐",
        desc: "這是企劃稿中的重點體驗，記得先找遮陰位置休息。",
        map: "https://maps.google.com/?q=Giraffe+Restaurant+Phu+Quoc",
      },
      {
        time: "18:00",
        title: "回 Grand World 晚餐 + Spa",
        desc: "晚上回大世界區慢慢吃，再安排 Spa 中心按腳放鬆。",
        map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 3",
    date: "03/30（一）",
    title: "VinWonders 城堡樂園全日遊",
    theme: "樂園衝刺日",
    summary: "整天留給 VinWonders，重點放在城堡樂園、水族館與親子友善設施。",
    map: "https://maps.google.com/?q=VinWonders+Phu+Quoc",
    timeline: [
      {
        time: "09:00",
        title: "入園 VinWonders",
        desc: "一開園先玩熱門區域，推車與補水要先安排好。",
        map: "https://maps.google.com/?q=VinWonders+Phu+Quoc",
      },
      {
        time: "11:00",
        title: "水族館行程",
        desc: "中段移到室內看魚群與海洋展示，順便避熱。",
        map: "https://maps.google.com/?q=Sea+Shell+Aquarium+Phu+Quoc",
      },
      {
        time: "14:00",
        title: "親子設施與午后緩衝",
        desc: "以孩子喜歡的區域為主，不追求全制霸，保留彈性最舒服。",
        map: "https://maps.google.com/?q=VinWonders+Phu+Quoc",
      },
      {
        time: "19:00",
        title: "回飯店內按摩與休息",
        desc: "玩累後直接在飯店內按摩，企劃稿指定這天回飯店徹底放鬆。",
        map: "https://maps.google.com/?q=Crowne+Plaza+Phu+Quoc+Starbay",
      },
    ],
  },
  {
    day: "Day 4",
    date: "03/31（二）",
    title: "大世界深度探索與竹之傳奇",
    theme: "建築散步日",
    summary: "不強求泰迪熊博物館，改成慢慢走逛竹之傳奇、藝術公園與運河區。",
    map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
    timeline: [
      {
        time: "10:00",
        title: "竹之傳奇巨型竹建築",
        desc: "先看 Grand World 地標建築，白天拍照畫面很乾淨。",
        map: "https://maps.google.com/?q=Grand+World+Phu+Quoc+Bamboo+Legend",
      },
      {
        time: "12:00",
        title: "藝術公園與周邊午餐",
        desc: "中午在園區附近找餐廳，讓孩子也能有坐下來休息的空檔。",
        map: "https://maps.google.com/?q=Urban+Park+Grand+World+Phu+Quoc",
      },
      {
        time: "15:30",
        title: "威尼斯運河貢多拉",
        desc: "下午搭貢多拉剛好，接著就自由散步看建築與商店。",
        map: "https://maps.google.com/?q=Venice+Canal+Grand+World+Phu+Quoc",
      },
      {
        time: "18:30",
        title: "Camy Spa 收尾",
        desc: "依企劃稿安排到大世界出口旁的 Camy Spa，讓大人好好按一輪。",
        map: "https://maps.google.com/?q=Camy+Spa+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 5",
    date: "04/01（三）",
    title: "移動到南島 Pullman，晚上逛陽東夜市",
    theme: "換宿日 + 美食夜市",
    summary: "上午從北島移防南島，下午入住 Pullman，晚上到陽東夜市吃東西。",
    map: "https://maps.google.com/?q=Duong+Dong+Night+Market+Phu+Quoc",
    timeline: [
      {
        time: "09:30",
        title: "Crowne Plaza 退房",
        desc: "整理行李往南島移動，這天建議以包車或飯店安排接送為主。",
        map: "https://maps.google.com/?q=Crowne+Plaza+Phu+Quoc+Starbay",
      },
      {
        time: "12:30",
        title: "入住 Pullman Phu Quoc",
        desc: "下午先熟悉飯店泳池、兒童設施與沙灘動線。",
        map: "https://maps.google.com/?q=Pullman+Phu+Quoc+Beach+Resort",
      },
      {
        time: "18:00",
        title: "陽東夜市晚餐",
        desc: "換到南島後的第一個晚上，最適合用夜市來銜接氛圍。",
        map: "https://maps.google.com/?q=Duong+Dong+Night+Market+Phu+Quoc",
      },
      {
        time: "20:00",
        title: "Heart & Soul Spa 按腳",
        desc: "企劃稿指定的夜市後按摩點，適合逛完直接按腳放鬆。",
        map: "https://maps.google.com/?q=Heart+%26+Soul+Spa+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 6",
    date: "04/02（四）",
    title: "跨海纜車、香島水樂園與海洋之吻煙火秀",
    theme: "南島重點大日",
    summary: "這天是整趟最滿的一天，把纜車、水樂園、日落小鎮與煙火秀排在一起。",
    map: "https://maps.google.com/?q=Sunset+Town+Phu+Quoc",
    timeline: [
      {
        time: "10:00",
        title: "前往跨海纜車站",
        desc: "搭世界級跨海纜車到香島，沿途風景很值得拍全家照。",
        map: "https://maps.google.com/?q=Hon+Thom+Cable+Car+Phu+Quoc",
      },
      {
        time: "11:30",
        title: "香島水樂園",
        desc: "中午前後在水樂園玩水，孩子放電效果最好。",
        map: "https://maps.google.com/?q=Aquatopia+Water+Park+Phu+Quoc",
      },
      {
        time: "17:00",
        title: "日落小鎮散步",
        desc: "回到 Sunset Town 後吃點心、看夕陽，為晚上的秀暖身。",
        map: "https://maps.google.com/?q=Sunset+Town+Phu+Quoc",
      },
      {
        time: "20:00",
        title: "海洋之吻煙火秀 + Sona Spa",
        desc: "先看秀再按摩，這天以視覺高潮作為旅程亮點。",
        map: "https://maps.google.com/?q=Kiss+of+the+Sea+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 7",
    date: "04/03（五）",
    title: "Kingkong Mart 採買、飯店泳池與沙灘火舞",
    theme: "採買收尾日",
    summary: "把最後一天留給補貨、伴手禮與飯店內享受，節奏最輕鬆。",
    map: "https://maps.google.com/?q=Kingkong+Mart+Phu+Quoc",
    timeline: [
      {
        time: "10:30",
        title: "Kingkong Mart 大採買",
        desc: "回程行李額度很大，這天就是補齊零食、伴手禮與日用品。",
        map: "https://maps.google.com/?q=Kingkong+Mart+Phu+Quoc",
      },
      {
        time: "14:00",
        title: "Pullman 泳池與孩子放電",
        desc: "採買完回飯店慢慢游泳，讓前幾天的緊湊節奏完全放掉。",
        map: "https://maps.google.com/?q=Pullman+Phu+Quoc+Beach+Resort",
      },
      {
        time: "18:30",
        title: "沙灘火舞表演",
        desc: "最後一晚就留在飯店享受，讓整趟旅行用輕鬆節奏收尾。",
        map: "https://maps.google.com/?q=Pullman+Phu+Quoc+Beach+Resort",
      },
      {
        time: "20:00",
        title: "Pullman Spa 頂級享受",
        desc: "企劃稿指定最後一晚安排飯店內 Spa，適合大人好好休息。",
        map: "https://maps.google.com/?q=Pullman+Spa+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 8",
    date: "04/04（六）",
    title: "早餐後退房，回台中",
    theme: "回程日",
    summary: "因為航班偏早，這天只安排早餐、退房與前往機場，節奏乾淨俐落。",
    map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
    timeline: [
      {
        time: "07:00",
        title: "Pullman 早餐與最後整理",
        desc: "清點護照、托運件數與採買戰利品，液體類集中處理。",
        map: "https://maps.google.com/?q=Pullman+Phu+Quoc+Beach+Resort",
      },
      {
        time: "08:00",
        title: "退房出發機場",
        desc: "回程班機 10:40，建議保留足夠時間做國際線報到。",
        map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
      },
      {
        time: "10:40",
        title: "JX334 富國島起飛",
        desc: "回程是早班機，不建議再排任何採買或景點。",
        map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
      },
      {
        time: "15:25",
        title: "抵達台中",
        desc: "完成 8 天 7 夜家族旅行，回家後再慢慢整理戰利品與照片。",
        map: "https://maps.google.com/?q=Taichung+International+Airport",
      },
    ],
  },
];

const navItems = [
  ["行程總覽", "#overview"],
  ["每日行程", "#itinerary"],
  ["住宿資訊", "#stay"],
  ["預算表", "#budget"],
  ["行前準備", "#checklist"],
];

function App() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="fixed inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(127,212,218,0.35),_transparent_58%),linear-gradient(180deg,_#fff9f3_0%,_#f6efe6_100%)]" />

      <header className="px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="glass sticky top-4 z-20 mb-8 flex flex-wrap items-center justify-between gap-3 rounded-full px-4 py-3">
            <a href="#top" className="font-display text-xl tracking-wide text-sea-800">
              Phu Quoc Family Trip
            </a>
            <div className="flex flex-wrap gap-2 text-sm text-sea-900">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} className="rounded-full px-3 py-1.5 transition hover:bg-white/70">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <section
            id="top"
            className="grid gap-6 overflow-hidden rounded-[2.2rem] bg-white/75 p-6 shadow-float backdrop-blur md:grid-cols-[1.02fr_0.98fr] md:p-10"
          >
            <div className="space-y-5">
              <p className="inline-flex rounded-full bg-sea-100 px-4 py-1 text-sm font-medium text-sea-800">
                2026 富國島 8 天 7 夜家族旅行企劃
              </p>
              <div className="space-y-3">
                <h1 className="font-display text-4xl leading-tight text-sea-900 md:text-6xl">
                  北島玩樂園
                  <br />
                  南島看煙火的家族版假期
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  依照討論稿重整為正式網站版：前半段住 Crowne Plaza Starbay，後半段轉移到 Pullman，
                  以 Safari、VinWonders、Grand World、夜市與纜車煙火秀組成一趟適合兩大兩小的富國島旅行。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#itinerary" className="btn-primary">
                  查看每日行程
                </a>
                <a href="#stay" className="btn-secondary">
                  先看住宿安排
                </a>
              </div>
            </div>

            <div className="relative grid gap-4 md:pl-6">
              <div className="absolute -left-6 top-0 hidden h-20 w-20 rounded-full bg-coral/20 blur-2xl md:block" />
              <div className="relative overflow-hidden rounded-[1.9rem] bg-sea-900 shadow-xl">
                <img
                  src={photoMoments[0].image}
                  alt="富國島海灘與海島度假氛圍"
                  className="h-64 w-full object-cover md:h-[23rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-950 via-sea-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.32em] text-sea-100">{photoMoments[0].label}</p>
                  <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{photoMoments[0].title}</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-sea-50">{photoMoments[0].desc}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {overviewStats.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] bg-sea-50 p-4">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-sea-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </header>

      <main className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <section className="section-card overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <div className="section-heading">
                  <p className="eyebrow">旅行畫面</p>
                  <h2>把這趟旅程做得更像真的出發前企劃網站</h2>
                </div>
                <p className="max-w-2xl text-sm leading-8 text-slate-600">
                  我把網站往更完整的旅行提案頁升級，加入海島、夜景與煙火氣氛照片，讓整體不只是在看行程表，
                  而是真的能感受到北島與南島兩段不同的旅行情緒。
                </p>
                <div className="mt-6 grid gap-3">
                  {familyNotes.map((note) => (
                    <div key={note} className="rounded-[1.4rem] border border-sea-100 bg-sea-50 px-4 py-3 text-sm leading-7 text-slate-700">
                      {note}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {photoMoments.slice(1).map((photo, index) => (
                  <article
                    key={photo.title}
                    className={`group overflow-hidden rounded-[1.7rem] bg-white shadow-sm ring-1 ring-sea-100 ${index === 0 ? "sm:translate-y-6" : ""}`}
                  >
                    <img src={photo.image} alt={photo.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="space-y-2 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-coral">{photo.label}</p>
                      <h3 className="text-lg font-semibold text-sea-900">{photo.title}</h3>
                      <p className="text-sm leading-7 text-slate-600">{photo.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="overview" className="section-card">
            <div className="section-heading">
              <p className="eyebrow">行程總覽</p>
              <h2>先看航班、行李與每天的大方向</h2>
            </div>

            <div className="mb-6 grid gap-4 lg:grid-cols-3">
              {flightCards.map((card) => (
                <article key={card.title} className="rounded-[1.5rem] bg-sea-50 p-5 ring-1 ring-sea-100">
                  <h3 className="text-xl font-semibold text-sea-900">{card.title}</h3>
                  <p className="mt-3 text-sm font-medium text-coral">{card.detail}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.note}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {tripDays.map((day) => (
                <article key={day.day} className="rounded-[1.5rem] border border-sea-100 bg-white p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-sea-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sea-800">
                      {day.day}
                    </span>
                    <a href={day.map} target="_blank" rel="noreferrer" className="text-sm text-sea-700 underline-offset-4 hover:underline">
                      地圖
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">{day.date}</p>
                  <h3 className="mt-2 text-xl font-semibold text-sea-900">{day.title}</h3>
                  <p className="mt-2 text-sm font-medium text-coral">{day.theme}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{day.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="itinerary" className="section-card">
            <div className="section-heading">
              <p className="eyebrow">每日行程</p>
              <h2>依照討論稿重排的正式時間軸</h2>
            </div>

            <div className="space-y-6">
              {tripDays.map((day) => (
                <article
                  key={day.day}
                  className="overflow-hidden rounded-[2rem] border border-sea-100 bg-[linear-gradient(180deg,_rgba(238,251,251,0.9)_0%,_rgba(255,255,255,1)_100%)]"
                >
                  <div className="flex flex-col gap-4 border-b border-sea-100 p-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sea-700">
                        {day.day} ・ {day.date}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-sea-900">{day.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{day.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full bg-white px-4 py-2 text-sm text-sea-800 shadow-sm">{day.theme}</span>
                      <a href={day.map} target="_blank" rel="noreferrer" className="btn-secondary">
                        Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="relative space-y-4 before:absolute before:left-[1.1rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-sea-200 md:before:left-[7.25rem]">
                      {day.timeline.map((item) => (
                        <div
                          key={`${day.day}-${item.time}-${item.title}`}
                          className="relative grid gap-3 rounded-[1.5rem] bg-white p-4 shadow-sm md:grid-cols-[6rem_1fr_auto] md:items-start md:p-5"
                        >
                          <div className="flex items-center gap-3 md:block">
                            <span className="relative z-10 inline-flex h-5 w-5 shrink-0 rounded-full border-4 border-white bg-coral shadow-sm md:absolute md:left-[6.35rem] md:top-6" />
                            <p className="min-w-[4rem] text-lg font-semibold text-sea-900">{item.time}</p>
                          </div>
                          <div className="md:pl-8">
                            <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                          </div>
                          <div>
                            <a href={item.map} target="_blank" rel="noreferrer" className="btn-map">
                              開啟地圖
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <section id="stay" className="section-card">
              <div className="section-heading">
                <p className="eyebrow">住宿資訊</p>
                <h2>北島先玩樂園，南島再放鬆收尾</h2>
              </div>

              <div className="space-y-4">
                {accommodations.map((hotel) => (
                  <article key={hotel.name} className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-sea-100">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-sea-900">{hotel.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {hotel.nights} ・ {hotel.area}
                        </p>
                      </div>
                      <a href={hotel.map} target="_blank" rel="noreferrer" className="btn-secondary">
                        查看地圖
                      </a>
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-600">
                      {hotel.highlights.map((point) => (
                        <li key={point} className="rounded-2xl bg-sea-50 px-4 py-2">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="budget" className="section-card">
              <div className="section-heading">
                <p className="eyebrow">預算表</p>
                <h2>先用討論稿版欄位把費用整理起來</h2>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-sea-100">
                <div className="grid grid-cols-[1.05fr_0.9fr_1.25fr] gap-3 bg-sea-900 px-4 py-4 text-sm font-semibold text-white">
                  <p>項目</p>
                  <p>目前狀態</p>
                  <p>備註</p>
                </div>
                {budgets.map(([item, amount, note]) => (
                  <div
                    key={item}
                    className="grid grid-cols-1 gap-2 border-t border-sea-100 px-4 py-4 text-sm leading-7 text-slate-600 md:grid-cols-[1.05fr_0.9fr_1.25fr]"
                  >
                    <p className="font-semibold text-slate-800">{item}</p>
                    <p className="text-coral">{amount}</p>
                    <p>{note}</p>
                  </div>
                ))}
                <div className="border-t border-sea-100 bg-sea-50 px-4 py-4 text-sm font-semibold text-sea-900">
                  這版以企劃稿內容為主，若你之後提供實際房價或票券金額，我可以再幫你補成完整金額版預算表。
                </div>
              </div>
            </section>
          </div>

          <section id="checklist" className="section-card overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="section-heading">
                  <p className="eyebrow">行前準備</p>
                  <h2>依照這次家族行程整理的出發清單</h2>
                </div>
                <p className="text-sm leading-8 text-slate-600">
                  這次重點不是再加景點，而是把接駁、票券、Grab、採買與孩子用品準備好。
                  前面玩樂園，後面看煙火與採買，節奏會順很多。
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {checklistGroups.map((group) => (
                  <article key={group.title} className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-sea-100">
                    <h3 className="text-lg font-semibold text-sea-900">{group.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-coral" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
