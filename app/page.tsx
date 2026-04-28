const serviceFeatures = [
  {
    title: "World's Leading H5 Game Platform",
    description: "Connecting players from over 200 countries and regions.",
  },
  {
    title: "Global Accessibility",
    description: "Play instantly on browser across mobile, desktop, and tablet.",
  },
  {
    title: "Anime & Manga Adaptations",
    description: "Collaborating with IP partners to deliver high-quality experiences.",
  },
];

const gameCards = [
  { name: "Sky Legends", tone: "from-cyan-500/80 to-indigo-600/80" },
  { name: "Dragon Frontier", tone: "from-fuchsia-500/80 to-rose-600/80" },
  { name: "Star Chronicle", tone: "from-emerald-500/80 to-teal-700/80" },
  { name: "Fantasy Arena", tone: "from-amber-500/80 to-orange-700/80" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#05070d]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-[0.32em] text-white/90">
            CTW
          </span>
          <nav className="hidden gap-8 text-sm text-white/75 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#games" className="transition hover:text-white">
              Our Games
            </a>
            <a href="#doraemon" className="transition hover:text-white">
              Doraemon
            </a>
            <a href="#careers" className="transition hover:text-white">
              Careers
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(48,92,255,0.38),transparent_45%),radial-gradient(circle_at_78%_22%,rgba(131,56,236,0.35),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-24 md:pb-28 md:pt-36">
          <p className="text-sm tracking-[0.4em] text-white/70">CTW</p>
          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.95] md:text-8xl">
            Change
            <br />
            The World
          </h1>
          <p className="mt-8 max-w-xl text-base text-white/70 md:text-lg">
            A simple homepage concept inspired by ctw.inc with a strong dark
            visual, service highlights, game showcase, and recruitment section.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-center text-4xl font-semibold md:text-5xl">Services</h2>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-semibold md:text-4xl">G123 Game Platform</h3>
            <a
              href="https://g123.jp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-900 transition hover:bg-slate-200"
            >
              Access
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serviceFeatures.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0a0d16] p-5"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="mx-auto w-full max-w-6xl px-6 py-8 md:py-10">
        <h3 className="text-center text-3xl font-semibold md:text-4xl">Our Games</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gameCards.map((game) => (
            <article
              key={game.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d16]"
            >
              <div
                className={`h-44 bg-gradient-to-br ${game.tone} transition duration-300 group-hover:scale-105`}
              />
              <p className="px-4 py-3 text-sm font-medium text-white/90">{game.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="doraemon" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-cyan-300/25 bg-[linear-gradient(130deg,rgba(30,58,138,0.28),rgba(8,47,73,0.22),rgba(8,145,178,0.2))] p-6 md:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/85">
            Featured Title
          </p>
          <h3 className="mt-4 text-3xl font-bold md:text-5xl">
            Doraemon Time Adventure
          </h3>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            穿上时光巡逻队制服，和哆啦A梦、大雄、静香、胖虎与小夫一起展开跨时代冒险。
            玩家将使用竹蜻蜓穿梭天空、用任意门挑战迷宫、借助缩小灯破解机关，在经典道具与原创剧情中体验
            轻松又充满策略的关卡战斗。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-white/15 bg-[#0a0d16]/75 p-4">
              <h4 className="text-base font-semibold">经典道具玩法</h4>
              <p className="mt-2 text-sm leading-6 text-white/70">
                超过 50 种熟悉道具可自由组合，战斗与解谜都有不同解法。
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-[#0a0d16]/75 p-4">
              <h4 className="text-base font-semibold">合作挑战副本</h4>
              <p className="mt-2 text-sm leading-6 text-white/70">
                可与好友组队对抗时空乱流 Boss，共同完成每周限定任务。
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-[#0a0d16]/75 p-4">
              <h4 className="text-base font-semibold">温暖剧情收集</h4>
              <p className="mt-2 text-sm leading-6 text-white/70">
                解锁角色日常故事与收藏插画，重温童年感动并发现新篇章。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="careers" className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-center text-4xl font-semibold md:text-6xl">
          Let&apos;s Change The World Together
        </h2>
        <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">Careers</h3>
            <p className="mt-4 text-white/70">
              We continue to challenge ourselves without fear of change,
              delivering valuable services to users around the world.
            </p>
            <p className="mt-3 text-white/70">
              Professionals across various fields pursue efficiency and growth,
              enhancing our global competitiveness.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-200"
            >
              Join Us
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.35),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(192,132,252,0.38),transparent_45%),#090c14] p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/65">
              Global Offices
            </p>
            <ul className="mt-5 space-y-3 text-white/85">
              <li>Tokyo</li>
              <li>Taipei</li>
              <li>Shanghai</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
