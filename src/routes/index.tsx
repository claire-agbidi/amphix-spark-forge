import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/bootcamp-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bootcamp Amphix 2026 — Apprendre, Construire, Innover" },
      { name: "description", content: "3 semaines de formation intensive aux métiers du numérique. Web, IA, Design, Hackathon. Inscription : 5 000 FCFA." },
      { property: "og:title", content: "Bootcamp Amphix 2026" },
      { property: "og:description", content: "3 semaines pour transformer vos idées en projets concrets. Inscription : 5 000 FCFA." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const tracks = [
  { icon: "🌐", title: "Développement Web", items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"], color: "ocean" },
  { icon: "⚙️", title: "Développement Backend", items: ["Python", "Laravel", "API REST", "Postman"], color: "coral" },
  { icon: "🗄️", title: "Bases de Données", items: ["MySQL", "Modélisation", "Requêtes SQL"], color: "sun" },
  { icon: "⚛️", title: "Frontend Moderne", items: ["React", "Consommation d'API", "Interfaces interactives"], color: "ocean" },
  { icon: "🔀", title: "Git & GitHub", items: ["Gestion de versions", "Collaboration", "Branches", "README pro"], color: "coral" },
  { icon: "🎨", title: "Design Graphique", items: ["Figma", "Canva", "Maquettage", "UI Design"], color: "sun" },
  { icon: "🎬", title: "Montage Vidéo", items: ["Bases du montage", "Contenus numériques"], color: "ocean" },
  { icon: "🤖", title: "IA & Automatisation", items: ["Outils IA", "Automatisation", "Productivité"], color: "coral" },
  { icon: "📱", title: "UI/UX & Marketing", items: ["Psychologie du design", "UX", "Produits numériques"], color: "sun" },
  { icon: "👥", title: "Gestion de Projet", items: ["Collaboration", "Organisation", "Méthodes agiles"], color: "ocean" },
];

const hackathonThemes = ["Éducation", "Santé", "Finance", "Vie étudiante", "IA", "Gestion d'entreprise", "Environnement", "Innovation numérique"];

const criteria = ["Innovation", "Utilité du projet", "Qualité technique", "Design & UX", "Présentation finale", "Travail d'équipe"];

const benefits = [
  "Acquérir des compétences numériques recherchées",
  "Travailler sur des projets réels",
  "Développer votre portfolio",
  "Rencontrer des professionnels du secteur",
  "Rejoindre la communauté Amphix",
  "Gagner des prix et des opportunités",
];

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-4 py-1.5 text-sm font-semibold text-foreground border border-border shadow-soft">{children}</span>;
}

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-hero">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.62 0.18 240 / 0.2), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.68 0.2 25 / 0.2), transparent 40%)" }} />
        <nav className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-display text-xl font-bold">Amphix</span>
          </div>
          <a href="#inscription" className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">S'inscrire</a>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Pill>🌴 Édition Été 2026 · Organisé par Amphix</Pill>
            <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance">
              <span className="text-primary">Boot</span><span className="text-secondary">Camp</span>
              <span className="block text-foreground text-4xl md:text-5xl mt-3">Amphix 2026</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-xl">
              « Apprendre, Construire, Innover. » Transformez vos idées en projets concrets grâce à une immersion intensive dans les métiers du numérique.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inscription" className="rounded-full bg-gradient-ocean text-primary-foreground px-7 py-3.5 font-semibold shadow-pop hover:scale-105 transition">
                Réserver ma place — 5 000 FCFA
              </a>
              <a href="#programme" className="rounded-full bg-white text-foreground px-7 py-3.5 font-semibold border border-border hover:bg-muted transition">
                Voir le programme
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div><span className="font-bold text-foreground text-2xl">3</span> semaines</div>
              <div><span className="font-bold text-foreground text-2xl">10+</span> modules</div>
              <div><span className="font-bold text-foreground text-2xl">90%</span> en ligne</div>
              <div><span className="font-bold text-foreground text-2xl">1</span> hackathon</div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-8 bg-gradient-sun opacity-30 blur-3xl rounded-full" />
            <img src={heroImg} alt="Bootcamp Amphix — code et été" className="relative rounded-3xl shadow-pop w-full" />
          </div>
        </div>
      </section>

      {/* INFOS GÉNÉRALES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { label: "Durée", value: "3 semaines", icon: "📅", grad: "bg-gradient-ocean" },
            { label: "Mode", value: "90% en ligne", icon: "💻", grad: "bg-gradient-sun" },
            { label: "Clôture", value: "Hackathon + Cérémonie", icon: "🎉", grad: "bg-gradient-coral" },
            { label: "Inscription", value: "5 000 FCFA", icon: "🎟️", grad: "bg-gradient-ocean" },
          ].map((c) => (
            <div key={c.label} className="relative rounded-2xl bg-card p-6 shadow-soft border border-border overflow-hidden">
              <div className={`absolute -right-6 -top-6 w-24 h-24 ${c.grad} rounded-full opacity-20`} />
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
              <div className="mt-1 font-display text-2xl font-bold">{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Pill>💻 Semaines 1 & 2</Pill>
          <h2 className="mt-5 font-display text-5xl font-bold">Formation intensive</h2>
          <p className="mt-4 text-lg text-muted-foreground">Deux semaines de pratique animées par des professionnels du secteur, à travers 10 modules essentiels.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((t) => (
            <div key={t.title} className="group rounded-2xl bg-card p-6 border border-border shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all">
              <div className={`inline-flex w-14 h-14 items-center justify-center rounded-2xl text-3xl ${
                t.color === "ocean" ? "bg-gradient-ocean" : t.color === "coral" ? "bg-gradient-coral" : "bg-gradient-sun"
              }`}>{t.icon}</div>
              <h3 className="mt-4 font-display text-xl font-bold">{t.title}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Formateur · à définir</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {t.items.map((i) => <li key={i} className="flex gap-2"><span className="text-primary">›</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPFIRE */}
      <section className="bg-gradient-ocean text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-5xl">🔥</span>
            <h2 className="mt-4 font-display text-5xl font-bold">Soirées Campfire</h2>
            <p className="mt-4 text-lg opacity-90">Des moments uniques de détente, d'apprentissage et de networking entre passionnés.</p>
          </div>
          <ul className="space-y-3">
            {["Histoires inspirantes", "Partages d'expériences", "Échanges entre participants", "Jeux et divertissements", "Réseautage professionnel"].map((c) => (
              <li key={c} className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-5 py-3 border border-white/20">
                <span className="text-secondary text-xl">✦</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HACKATHON */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Pill>🏆 Semaine 3</Pill>
          <h2 className="mt-5 font-display text-5xl font-bold">Mini-Hackathon Amphix</h2>
          <p className="mt-4 text-lg text-muted-foreground">En équipes, concevez une solution innovante répondant à un problème réel.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-card p-8 border border-border shadow-soft">
            <h3 className="font-display text-2xl font-bold flex items-center gap-2">🎯 Thématiques</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {hackathonThemes.map((t) => (
                <span key={t} className="rounded-full bg-muted px-4 py-2 text-sm font-medium">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-card p-8 border border-border shadow-soft">
            <h3 className="font-display text-2xl font-bold flex items-center gap-2">⚖️ Critères d'évaluation</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {criteria.map((c, i) => (
                <li key={c} className="flex items-center gap-3 text-sm">
                  <span className="w-7 h-7 rounded-full bg-gradient-sun text-foreground font-bold flex items-center justify-center text-xs">{i+1}</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SUMMER FEST */}
      <section className="bg-gradient-coral text-accent-foreground py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-5xl">🎉</span>
            <h2 className="mt-4 font-display text-5xl font-bold">Amphix Summer Fest</h2>
            <p className="mt-4 text-lg opacity-95">Le jour de clôture : une journée exceptionnelle pour célébrer les réalisations des participants.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { i: "🎤", t: "Présentation des projets" },
              { i: "🏆", t: "Remise des prix" },
              { i: "📜", t: "Certificats officiels" },
              { i: "🎮", t: "Jeux & animations" },
              { i: "💃", t: "Ambiance & danse" },
              { i: "📸", t: "Séance photo" },
              { i: "🍽️", t: "Collation & repas" },
              { i: "🤝", t: "Networking pro" },
            ].map((a) => (
              <div key={a.t} className="rounded-2xl bg-white/15 backdrop-blur p-5 border border-white/20 text-center">
                <div className="text-3xl">{a.i}</div>
                <div className="mt-2 text-sm font-semibold">{a.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉCOMPENSES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-14">
          <Pill>🏅 Récompenses</Pill>
          <h2 className="mt-5 font-display text-5xl font-bold">À gagner</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {[
            { medal: "🥇", title: "Premier Prix", g: "bg-gradient-sun" },
            { medal: "🥈", title: "Deuxième Prix", g: "bg-gradient-ocean" },
            { medal: "🥉", title: "Troisième Prix", g: "bg-gradient-coral" },
          ].map((p, i) => (
            <div key={p.title} className={`rounded-3xl ${p.g} p-8 text-center text-primary-foreground shadow-pop`} style={{ transform: i === 0 ? "scale(1.04)" : undefined }}>
              <div className="text-6xl">{p.medal}</div>
              <div className="mt-3 font-display text-2xl font-bold">{p.title}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-card border border-border p-6 flex items-center gap-4 shadow-soft">
            <span className="text-4xl">🏅</span>
            <div><div className="font-display text-xl font-bold">Prix du Public</div><div className="text-sm text-muted-foreground">Voté par les participants</div></div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6 flex items-center gap-4 shadow-soft">
            <span className="text-4xl">🎖️</span>
            <div><div className="font-display text-xl font-bold">Certificat officiel</div><div className="text-sm text-muted-foreground">Pour tous les participants</div></div>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl font-bold">Pourquoi participer ?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-4 rounded-2xl bg-card p-5 border border-border shadow-soft">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-ocean text-primary-foreground flex items-center justify-center font-bold">✓</span>
                <span className="text-lg pt-1">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INSCRIPTION */}
      <section id="inscription" className="mx-auto max-w-5xl px-6 py-24">
        <div className="relative rounded-[2.5rem] bg-gradient-ocean text-primary-foreground p-10 md:p-16 text-center overflow-hidden shadow-pop">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-sun rounded-full opacity-30 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-gradient-coral rounded-full opacity-30 blur-2xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold">
              🎯 Places limitées
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl font-bold leading-tight">Réservez votre place dès maintenant</h2>
            <p className="mt-5 text-xl opacity-95">3 semaines · Innovation · Collaboration · Création</p>
            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4">
              <div className="rounded-2xl bg-white/15 backdrop-blur px-6 py-4 border border-white/20">
                <div className="text-xs uppercase tracking-wider opacity-80">Inscription</div>
                <div className="font-display text-3xl font-bold">5 000 FCFA</div>
              </div>
              <a href="https://wa.me/" className="rounded-full bg-secondary text-secondary-foreground px-8 py-4 font-bold text-lg hover:scale-105 transition shadow-pop">
                📞 Contact WhatsApp
              </a>
            </div>
            <p className="mt-8 text-sm opacity-80">🌐 Organisé par Amphix 🚀</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><span>🚀</span><span className="font-display font-bold text-foreground">Amphix</span> · Bootcamp 2026</div>
          <div>« Apprendre, Construire, Innover »</div>
        </div>
      </footer>
    </main>
  );
}
