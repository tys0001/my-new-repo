const overviewStats = [
  { label: "旅遊天數", value: "8 天 7 夜" },
  { label: "建議旅伴", value: "2 大 1-2 小" },
  { label: "旅行節奏", value: "海島慢玩 + 親子友善" },
  { label: "交通方式", value: "包車 / Grab / 飯店接駁" },
];

const accommodations = [
  {
    name: "InterContinental Phu Quoc Long Beach Resort",
    nights: "Day 1 - Day 3",
    area: "長灘",
    highlights: ["近機場、接送方便", "兒童泳池與沙灘活動完整", "適合前段放鬆調時差"],
    map: "https://maps.google.com/?q=InterContinental+Phu+Quoc+Long+Beach+Resort",
  },
  {
    name: "Vinpearl Resort & Spa Phu Quoc",
    nights: "Day 4 - Day 7",
    area: "北島珍珠樂園區",
    highlights: ["靠近 Safari 與 Grand World", "適合集中玩樂園與秀場", "親子設施與空間感佳"],
    map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
  },
];

const budgets = [
  ["機票", "22,000 - 32,000", "台北來回，依旺季與是否轉機而異"],
  ["住宿", "42,000 - 68,000", "7 晚親子型飯店，含早餐"],
  ["交通", "6,000 - 10,000", "機場接送、Grab、1 日包車"],
  ["餐飲", "10,000 - 16,000", "含海鮮餐廳、咖啡館與樂園用餐"],
  ["門票", "18,000 - 28,000", "Safari、VinWonders、纜車、水上樂園"],
  ["雜支", "4,000 - 8,000", "按摩、零食、伴手禮、備品"],
];

const checklistGroups = [
  {
    title: "證件與金流",
    items: ["護照效期 6 個月以上", "越南簽證 / 入境資料確認", "海外旅平險", "現金越盾與可刷卡信用卡"],
  },
  {
    title: "親子用品",
    items: ["泳衣、防曬衣、拖鞋", "推車或輕便背帶", "常備藥、退燒貼、防蚊液", "濕紙巾、零食盒、水壺"],
  },
  {
    title: "3 天前確認",
    items: ["飯店接送與房型備註", "Safari / Show 門票是否預訂", "天氣與降雨機率", "Google Maps 離線地圖下載"],
  },
];

const tripDays = [
  {
    day: "Day 1",
    title: "抵達富國島，入住長灘度假村",
    theme: "移動日 + 海邊放電",
    summary: "以接機、入住與輕鬆海灘活動為主，讓孩子先熟悉氣候與作息。",
    map: "https://maps.google.com/?q=Long+Beach+Phu+Quoc",
    timeline: [
      {
        time: "10:30",
        title: "抵達富國國際機場",
        desc: "建議先在機場換少量越盾，並確認飯店接駁或 Grab 上車點。",
        map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
      },
      {
        time: "12:00",
        title: "入住 InterContinental",
        desc: "辦理入住後先休息、換裝，孩子可在房內或泳池邊吃簡單點心。",
        map: "https://maps.google.com/?q=InterContinental+Phu+Quoc+Long+Beach+Resort",
      },
      {
        time: "15:30",
        title: "飯店泳池與沙灘時光",
        desc: "安排低強度玩水，記得避開正午曝曬，傍晚拍全家海景照很適合。",
        map: "https://maps.google.com/?q=Long+Beach+Phu+Quoc",
      },
      {
        time: "18:00",
        title: "Sora & Umi 晚餐",
        desc: "在飯店內享用日式料理或兒童餐，第一晚不建議拉車移動。",
        map: "https://maps.google.com/?q=Sora+%26+Umi+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 2",
    title: "Sunset Town 與跨海纜車",
    theme: "海景纜車 + 拍照散步",
    summary: "安排南島經典景點，但保留午睡與回飯店休整的空間。",
    map: "https://maps.google.com/?q=Sunset+Town+Phu+Quoc",
    timeline: [
      {
        time: "09:00",
        title: "前往 Sunset Town",
        desc: "包車或 Grab 南下，沿路可備小零食與孩子喜歡的音樂。",
        map: "https://maps.google.com/?q=Sunset+Town+Phu+Quoc",
      },
      {
        time: "10:30",
        title: "Hon Thom 纜車",
        desc: "世界級海上纜車景色壯觀，搭乘前先補水並準備遮陽帽。",
        map: "https://maps.google.com/?q=Hon+Thom+Cable+Car+Phu+Quoc",
      },
      {
        time: "12:00",
        title: "Aquatopia 水上樂園午間遊玩",
        desc: "選擇適合兒童身高的設施，並安排一位大人專門陪同休息。",
        map: "https://maps.google.com/?q=Aquatopia+Water+Park+Phu+Quoc",
      },
      {
        time: "16:00",
        title: "回 Sunset Town 拍地中海街景",
        desc: "散步拍照、買冰淇淋，累了就直接返程回飯店休息。",
        map: "https://maps.google.com/?q=Kiss+Bridge+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 3",
    title: "珍珠農場 + 夜市輕鬆逛",
    theme: "室內參觀 + 在地小吃",
    summary: "白天安排半日行程，晚上逛夜市吃海鮮，節奏維持鬆弛。",
    map: "https://maps.google.com/?q=Duong+Dong+Night+Market+Phu+Quoc",
    timeline: [
      {
        time: "09:30",
        title: "Ngoc Hien 珍珠展示中心",
        desc: "看珍珠養殖與飾品展示，室內有冷氣，適合避開中午熱度。",
        map: "https://maps.google.com/?q=Ngoc+Hien+Pearl+Farm+Phu+Quoc",
      },
      {
        time: "11:30",
        title: "Ocsen Beach Bar 午餐",
        desc: "如果孩子想玩沙，可改安排靠海餐廳，邊吃邊看海更放鬆。",
        map: "https://maps.google.com/?q=Ocsen+Beach+Bar+%26+Club+Phu+Quoc",
      },
      {
        time: "14:00",
        title: "飯店午睡與自由活動",
        desc: "親子旅行的體力緩衝日，建議保留至少 2 小時安靜時段。",
        map: "https://maps.google.com/?q=InterContinental+Phu+Quoc+Long+Beach+Resort",
      },
      {
        time: "18:30",
        title: "Duong Dong 夜市",
        desc: "以烤海鮮、果汁、越式甜點為主，行走時注意人潮與推車動線。",
        map: "https://maps.google.com/?q=Duong+Dong+Night+Market+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 4",
    title: "換飯店，移動到北島樂園區",
    theme: "換宿 + 輕量散步",
    summary: "上午整理行李，下午入住北島，晚上到 Grand World 走逛。",
    map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
    timeline: [
      {
        time: "09:30",
        title: "退房後前往北島",
        desc: "建議使用包車直達，途中可安排便利商店補給與簡短休息。",
        map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
      },
      {
        time: "12:00",
        title: "入住 Vinpearl Resort & Spa",
        desc: "先寄放行李或提早入住，熟悉接駁巴士與園區動線。",
        map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
      },
      {
        time: "15:30",
        title: "飯店沙灘或 Kids Club",
        desc: "保留給孩子釋放精力，也讓大人調整移動後的疲勞。",
        map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
      },
      {
        time: "18:30",
        title: "Grand World 夜間散步",
        desc: "看威尼斯水道風格建築與燈光，吃簡單晚餐後早點回房。",
        map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 5",
    title: "VinWonders 全日遊",
    theme: "樂園主日",
    summary: "把體力留給遊樂設施、水族館與室內展館，晚上提早休息。",
    map: "https://maps.google.com/?q=VinWonders+Phu+Quoc",
    timeline: [
      {
        time: "09:00",
        title: "入園 VinWonders",
        desc: "一開園先玩熱門區域，建議租嬰兒車或確認推車停放點。",
        map: "https://maps.google.com/?q=VinWonders+Phu+Quoc",
      },
      {
        time: "11:00",
        title: "海王宮水族館",
        desc: "親子接受度高，冷氣舒服，適合當作中午前的緩衝行程。",
        map: "https://maps.google.com/?q=Sea+Shell+Aquarium+Phu+Quoc",
      },
      {
        time: "13:00",
        title: "園區午餐與午休",
        desc: "不要排太滿，找室內餐廳休息，讓孩子恢復體力。",
        map: "https://maps.google.com/?q=VinWonders+Phu+Quoc",
      },
      {
        time: "15:30",
        title: "童趣區與親子設施",
        desc: "午後以低刺激設施為主，減少排隊與情緒疲乏。",
        map: "https://maps.google.com/?q=VinWonders+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 6",
    title: "Vinpearl Safari 親近動物",
    theme: "孩子最愛的互動日",
    summary: "把焦點放在動物園與 Safari 車，適合安排拍照與互動體驗。",
    map: "https://maps.google.com/?q=Vinpearl+Safari+Phu+Quoc",
    timeline: [
      {
        time: "08:45",
        title: "前往 Vinpearl Safari",
        desc: "建議提早出發避開中午熱度，帶足飲水與小風扇。",
        map: "https://maps.google.com/?q=Vinpearl+Safari+Phu+Quoc",
      },
      {
        time: "10:00",
        title: "搭乘 Safari 專車",
        desc: "觀察長頸鹿、斑馬與大型動物，孩子通常會很投入。",
        map: "https://maps.google.com/?q=Vinpearl+Safari+Phu+Quoc",
      },
      {
        time: "12:00",
        title: "園區午餐與動物表演",
        desc: "可視孩子狀況選擇觀看表演或提早回飯店午睡。",
        map: "https://maps.google.com/?q=Vinpearl+Safari+Phu+Quoc",
      },
      {
        time: "16:00",
        title: "飯店休息 + 親子按摩",
        desc: "大人可輪流做 SPA，孩子則在房內或泳池做輕鬆活動。",
        map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 7",
    title: "自由日：海灘、咖啡館與採買",
    theme: "彈性備用日",
    summary: "保留因天氣調整、補逛景點或單純放空的空間，是親子旅行很重要的一天。",
    map: "https://maps.google.com/?q=Giraffe+Restaurant+Phu+Quoc",
    timeline: [
      {
        time: "09:30",
        title: "飯店早餐慢慢吃",
        desc: "這天不趕路，讓孩子睡飽，爸媽也可以好好整理照片。",
        map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
      },
      {
        time: "11:00",
        title: "北島咖啡館或沙灘散步",
        desc: "可依天氣選擇戶外散步，或找有甜點的咖啡館休息。",
        map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
      },
      {
        time: "14:30",
        title: "伴手禮採買",
        desc: "胡椒、魚露、腰果、珍珠飾品都是常見選項，注意液體托運規定。",
        map: "https://maps.google.com/?q=Grand+World+Phu+Quoc",
      },
      {
        time: "18:00",
        title: "海邊家庭晚餐",
        desc: "以慶祝旅程尾聲為主，建議選可看日落的餐廳作為收尾。",
        map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
      },
    ],
  },
  {
    day: "Day 8",
    title: "返程回家",
    theme: "收心日",
    summary: "提早整理托運與液體，預留機場通關時間，讓結束也能很從容。",
    map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
    timeline: [
      {
        time: "08:30",
        title: "飯店早餐與最後整理",
        desc: "清點護照、簽證、票券與伴手禮，液體類務必托運。",
        map: "https://maps.google.com/?q=Vinpearl+Resort+%26+Spa+Phu+Quoc",
      },
      {
        time: "10:30",
        title: "退房出發機場",
        desc: "若帶孩子同行，建議至少比國際線起飛前 2.5 小時抵達機場。",
        map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
      },
      {
        time: "12:30",
        title: "機場簡餐與免稅店",
        desc: "在候機時做最後補水與用餐，避免上機後孩子肚子餓。",
        map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
      },
      {
        time: "14:00",
        title: "搭機返台",
        desc: "把較累的行程排在前幾天，回程會更輕鬆，也比較不影響孩子情緒。",
        map: "https://maps.google.com/?q=Phu+Quoc+International+Airport",
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
                <a
                  key={href}
                  href={href}
                  className="rounded-full px-3 py-1.5 transition hover:bg-white/70"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <section
            id="top"
            className="grid gap-6 overflow-hidden rounded-[2rem] bg-white/75 p-6 shadow-float backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10"
          >
            <div className="space-y-5">
              <p className="inline-flex rounded-full bg-sea-100 px-4 py-1 text-sm font-medium text-sea-800">
                富國島 8 天 7 夜親子旅遊網站
              </p>
              <div className="space-y-3">
                <h1 className="font-display text-4xl leading-tight text-sea-900 md:text-6xl">
                  清爽慢玩版的
                  <br />
                  富國島親子假期
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  以海島放鬆、親子節奏與移動舒適度為主軸，安排 8 天 7 夜的富國島家庭旅行。
                  網站已整理好每日時間軸、住宿分段、預估花費與出發前檢查清單。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#itinerary" className="btn-primary">
                  查看每日行程
                </a>
                <a href="#budget" className="btn-secondary">
                  先看預算表
                </a>
              </div>
            </div>

            <div className="relative grid gap-4 md:pl-6">
              <div className="absolute -left-6 top-0 hidden h-20 w-20 rounded-full bg-coral/20 blur-2xl md:block" />
              <div className="rounded-[1.75rem] bg-sea-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-sea-200">旅程亮點</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-sea-50">
                  <li>長灘 + 北島雙飯店分段入住，減少拉車疲勞</li>
                  <li>Sunset Town、纜車、水族館、Safari 都有安排</li>
                  <li>保留 1 天彈性自由日，遇下雨也好調整</li>
                </ul>
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
          <section id="overview" className="section-card">
            <div className="section-heading">
              <p className="eyebrow">行程總覽</p>
              <h2>一眼掌握這趟旅程的節奏</h2>
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
                  <h3 className="mt-4 text-xl font-semibold text-sea-900">{day.title}</h3>
                  <p className="mt-2 text-sm font-medium text-coral">{day.theme}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{day.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="itinerary" className="section-card">
            <div className="section-heading">
              <p className="eyebrow">每日行程</p>
              <h2>每天都有時間軸卡片與 Google Maps 連結</h2>
            </div>

            <div className="space-y-6">
              {tripDays.map((day) => (
                <article
                  key={day.day}
                  className="overflow-hidden rounded-[2rem] border border-sea-100 bg-[linear-gradient(180deg,_rgba(238,251,251,0.9)_0%,_rgba(255,255,255,1)_100%)]"
                >
                  <div className="flex flex-col gap-4 border-b border-sea-100 p-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sea-700">{day.day}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-sea-900">{day.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{day.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full bg-white px-4 py-2 text-sm text-sea-800 shadow-sm">
                        {day.theme}
                      </span>
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
                <h2>前後段分區入住，親子移動更輕鬆</h2>
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
                <h2>以一家四口為概念的粗估費用</h2>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-sea-100">
                <div className="grid grid-cols-[1.1fr_0.9fr_1.2fr] gap-3 bg-sea-900 px-4 py-4 text-sm font-semibold text-white">
                  <p>項目</p>
                  <p>預估金額（TWD）</p>
                  <p>備註</p>
                </div>
                {budgets.map(([item, amount, note]) => (
                  <div
                    key={item}
                    className="grid grid-cols-1 gap-2 border-t border-sea-100 px-4 py-4 text-sm leading-7 text-slate-600 md:grid-cols-[1.1fr_0.9fr_1.2fr]"
                  >
                    <p className="font-semibold text-slate-800">{item}</p>
                    <p className="text-coral">{amount}</p>
                    <p>{note}</p>
                  </div>
                ))}
                <div className="border-t border-sea-100 bg-sea-50 px-4 py-4 text-sm font-semibold text-sea-900">
                  總預算抓約 NT$102,000 - NT$162,000，實際依航班、住宿檔次與門票套票而調整。
                </div>
              </div>
            </section>
          </div>

          <section id="checklist" className="section-card overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="section-heading">
                  <p className="eyebrow">行前準備</p>
                  <h2>把關鍵物品與確認事項先整理好</h2>
                </div>
                <p className="text-sm leading-8 text-slate-600">
                  親子旅行最怕的是當地臨時找不到用品，所以把證件、藥品、玩水裝備與票券都提早確認，
                  會讓整趟旅程平順很多。
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
