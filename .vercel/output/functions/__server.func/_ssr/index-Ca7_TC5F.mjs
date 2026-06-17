import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as heroImg } from "./router-BCnF-E6b.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const tracks = [{
  icon: "🌐",
  title: "Développement Web",
  items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  color: "ocean"
}, {
  icon: "⚙️",
  title: "Développement Backend",
  items: ["Python", "Laravel", "API REST", "Postman"],
  color: "coral"
}, {
  icon: "🗄️",
  title: "Bases de Données",
  items: ["MySQL", "Modélisation", "Requêtes SQL"],
  color: "sun"
}, {
  icon: "⚛️",
  title: "Frontend Moderne",
  items: ["React", "Consommation d'API", "Interfaces interactives"],
  color: "ocean"
}, {
  icon: "🔀",
  title: "Git & GitHub",
  items: ["Gestion de versions", "Collaboration", "Branches", "README pro"],
  color: "coral"
}, {
  icon: "🎨",
  title: "Design Graphique",
  items: ["Figma", "Canva", "Maquettage", "UI Design"],
  color: "sun"
}, {
  icon: "🎬",
  title: "Montage Vidéo",
  items: ["Bases du montage", "Contenus numériques"],
  color: "ocean"
}, {
  icon: "🤖",
  title: "IA & Automatisation",
  items: ["Outils IA", "Automatisation", "Productivité"],
  color: "coral"
}, {
  icon: "📱",
  title: "UI/UX & Marketing",
  items: ["Psychologie du design", "UX", "Produits numériques"],
  color: "sun"
}, {
  icon: "👥",
  title: "Gestion de Projet",
  items: ["Collaboration", "Organisation", "Méthodes agiles"],
  color: "ocean"
}];
const hackathonThemes = ["Éducation", "Santé", "Finance", "Vie étudiante", "IA", "Gestion d'entreprise", "Environnement", "Innovation numérique"];
const criteria = ["Innovation", "Utilité du projet", "Qualité technique", "Design & UX", "Présentation finale", "Travail d'équipe"];
const benefits = ["Acquérir des compétences numériques recherchées", "Travailler sur des projets réels", "Développer votre portfolio", "Rencontrer des nouvelles relations", "Rejoindre la communauté Amphix", "Gagner des prix et des opportunités"];
function SplashScreen({
  onComplete
}) {
  const [progress, setProgress] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase(1), 300);
          setTimeout(() => setPhase(2), 1200);
          setTimeout(() => onComplete(), 2200);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-1000 ease-out ${phase === 2 ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`, style: {
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: Array.from({
      length: 20
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-full opacity-20 animate-pulse", style: {
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      background: i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#fb923c" : "#fbbf24",
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${Math.random() * 3 + 2}s`
    } }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative transition-all duration-700 ${phase === 1 ? "scale-110" : "scale-100"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-6 animate-bounce", children: "🚀" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl font-bold text-white text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-400", children: "Boot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400", children: "Camp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xl text-sky-200/80 text-center font-display tracking-widest uppercase", children: "Amphix 2026" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 w-64 h-1.5 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full transition-all duration-300 ease-out", style: {
      width: `${Math.min(progress, 100)}%`,
      background: "linear-gradient(90deg, #38bdf8, #fb923c, #fbbf24)"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-white/40 font-mono", children: [
      Math.min(Math.round(progress), 100),
      "%"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-8 text-xs text-white/30 tracking-widest uppercase", children: "Apprendre · Construire · Innover" })
  ] });
}
function useParallax(speed = 0.5) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    let rafId;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        const offset = scrolled * speed * 0.1;
        el.style.setProperty("--parallax-offset", `${offset}px`);
      });
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);
  return ref;
}
function useScrollReveal() {
  const ref = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return {
    ref,
    isVisible
  };
}
function Pill({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-white/80 backdrop-blur px-4 py-1.5 text-sm font-semibold text-foreground border border-border shadow-soft", children });
}
function Reveal({
  children,
  className = "",
  delay = 0
}) {
  const {
    ref,
    isVisible
  } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `transition-all duration-700 ease-out ${className} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, style: {
    transitionDelay: `${delay}ms`
  }, children });
}
function Index() {
  const [showSplash, setShowSplash] = reactExports.useState(true);
  const heroParallax = useParallax(0.3);
  const campFireParallax = useParallax(-0.2);
  const rewardsParallax = useParallax(0.15);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    showSplash && /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, { onComplete: () => setShowSplash(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: `min-h-screen bg-background overflow-x-hidden transition-opacity duration-500 ${showSplash ? "opacity-0" : "opacity-100"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-gradient-hero overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 pointer-events-none", style: {
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.62 0.18 240 / 0.2), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.68 0.2 25 / 0.2), transparent 40%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: heroParallax, className: "absolute inset-0 pointer-events-none", style: {
          transform: "translateY(var(--parallax-offset, 0px))"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-[10%] w-32 h-32 rounded-full bg-sky-400/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-40 right-[15%] w-40 h-40 rounded-full bg-orange-400/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 left-[30%] w-24 h-24 rounded-full bg-yellow-400/20 blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold", children: "Amphix" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#inscription", className: "rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition hover:scale-105 active:scale-95", children: "S'inscrire" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-20 grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: "1er Édition 2026 · Organisé par Amphix" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Boot" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "Camp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground text-4xl md:text-5xl mt-3", children: "Amphix 2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl text-muted-foreground max-w-xl", children: "« Apprendre, Construire, Innover. » Transformez vos idées en projets concrets grâce à une immersion intensive dans les métiers du numérique." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#inscription", className: "rounded-full bg-gradient-ocean text-primary-foreground px-7 py-3.5 font-semibold shadow-pop hover:scale-105 transition active:scale-95", children: "Réserver ma place" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#programme", className: "rounded-full bg-white text-foreground px-7 py-3.5 font-semibold border border-border hover:bg-muted transition active:scale-95", children: "Voir le programme" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-transform hover:scale-110", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-2xl", children: "1" }),
                " mois"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-transform hover:scale-110", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-2xl", children: "10+" }),
                " modules"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-transform hover:scale-110", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-2xl", children: "90%" }),
                " en ligne"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-transform hover:scale-110", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-2xl", children: "1" }),
                " hackathon"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-float", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 bg-gradient-sun opacity-30 blur-3xl rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Bootcamp Amphix — code et été", className: "relative rounded-3xl shadow-pop w-full" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-5", children: [{
        label: "Durée",
        value: "4 semaines",
        icon: "📅",
        grad: "bg-gradient-ocean"
      }, {
        label: "Mode",
        value: "90% en ligne",
        icon: "💻",
        grad: "bg-gradient-sun"
      }, {
        label: "Clôture",
        value: "Hackathon + Cérémonie",
        icon: "🎉",
        grad: "bg-gradient-coral"
      }, {
        label: "Inscription",
        value: "5 000 FCFA",
        icon: "🎟️",
        grad: "bg-gradient-ocean"
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl bg-card p-6 shadow-soft border border-border overflow-hidden hover:shadow-pop hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-6 -top-6 w-24 h-24 ${c.grad} rounded-full opacity-20` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: c.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-2xl font-bold", children: c.value })
      ] }) }, c.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "programme", className: "mx-auto max-w-7xl px-6 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: "💻 Semaines 1 & 3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-5xl font-bold", children: "Formation intensive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Trois semaines de pratique animées par des expérimentés du secteur, à travers 10 modules essentiels." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: tracks.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl bg-card p-6 border border-border shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex w-14 h-14 items-center justify-center rounded-2xl text-3xl ${t.color === "ocean" ? "bg-gradient-ocean" : t.color === "coral" ? "bg-gradient-coral" : "bg-gradient-sun"}`, children: t.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-bold", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-1", children: "Formateur · à définir" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5 text-sm text-muted-foreground", children: t.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
            item
          ] }, item)) })
        ] }) }, t.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-gradient-ocean text-primary-foreground py-20 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: campFireParallax, className: "absolute inset-0 pointer-events-none", style: {
          transform: "translateY(var(--parallax-offset, 0px))"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-orange-300/10 blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-5xl animate-pulse", children: "🔥" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-5xl font-bold", children: "Soirées Campfire" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg opacity-90", children: "Des moments uniques de détente, d'apprentissage et de networking entre passionnés." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ["Histoires inspirantes", "Partages d'expériences", "Échanges entre participants", "Jeux et divertissements", "Réseautage professionnel"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-5 py-3 border border-white/20 hover:bg-white/20 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary text-xl", children: "✦" }),
            c
          ] }) }, c)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: "🏆 Semaine 4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-5xl font-bold", children: "Mini-Hackathon Amphix" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "En équipes, concevez une solution innovante répondant à un problème réel." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-8 border border-border shadow-soft hover:shadow-pop transition-shadow duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold flex items-center gap-2", children: "🎯 Thématiques" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: hackathonThemes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default", children: t }, t)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-8 border border-border shadow-soft hover:shadow-pop transition-shadow duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold flex items-center gap-2", children: "⚖️ Critères d'évaluation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 grid grid-cols-2 gap-3", children: criteria.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-full bg-gradient-sun text-foreground font-bold flex items-center justify-center text-xs", children: i + 1 }),
              c
            ] }, c)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-gradient-coral text-accent-foreground py-20 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-[20%] w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-[10%] w-48 h-48 rounded-full bg-yellow-300/10 blur-3xl animate-pulse", style: {
            animationDelay: "1s"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-5xl animate-bounce", children: "🎉" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-5xl font-bold", children: "Amphix Summer Fest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg opacity-95", children: "Le jour de clôture : une journée exceptionnelle pour célébrer les réalisations des participants." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4", children: [{
            i: "🎤",
            t: "Présentation des projets"
          }, {
            i: "🏆",
            t: "Remise des prix"
          }, {
            i: "📜",
            t: "Certificats"
          }, {
            i: "🎮",
            t: "Jeux & animations"
          }, {
            i: "💃",
            t: "Ambiance & danse"
          }, {
            i: "📸",
            t: "Séance photo"
          }, {
            i: "🍽️",
            t: "Collation & repas"
          }, {
            i: "🤝",
            t: "Networking"
          }].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/15 backdrop-blur p-5 border border-white/20 text-center hover:bg-white/25 hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: a.i }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-semibold", children: a.t })
          ] }) }, a.t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-6xl px-6 py-20 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: rewardsParallax, className: "absolute inset-0 pointer-events-none", style: {
          transform: "translateY(var(--parallax-offset, 0px))"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-sun/10 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-60 h-60 rounded-full bg-gradient-ocean/10 blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: "🏅 Récompenses" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-5xl font-bold", children: "À gagner" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5 mb-5", children: [{
            medal: "🥇",
            title: "15 000 FCFA",
            g: "bg-gradient-sun"
          }, {
            medal: "🥈",
            title: "10 000 FCFA",
            g: "bg-gradient-ocean"
          }, {
            medal: "🥉",
            title: "7 500 FCFA",
            g: "bg-gradient-coral"
          }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl ${p.g} p-8 text-center text-primary-foreground shadow-pop hover:scale-105 transition-transform duration-300`, style: {
            transform: i === 0 ? "scale(1.04)" : void 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl", children: p.medal }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-2xl font-bold", children: p.title })
          ] }) }, p.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 flex items-center gap-4 shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🏅" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold", children: "Prix du Public" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Pour tous les participants" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 flex items-center gap-4 shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🎖️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold", children: "Certificat des participants" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Pour tous les participants" })
              ] })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl font-bold", children: "Pourquoi participer ?" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl bg-card p-5 border border-border shadow-soft hover:shadow-pop hover:-translate-y-0.5 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-10 h-10 rounded-full bg-gradient-ocean text-primary-foreground flex items-center justify-center font-bold", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg pt-1", children: b })
        ] }) }, b)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "inscription", className: "mx-auto max-w-5xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2.5rem] bg-gradient-ocean text-primary-foreground p-10 md:p-16 text-center overflow-hidden shadow-pop", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -left-10 w-48 h-48 bg-gradient-sun rounded-full opacity-30 blur-2xl animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-10 -right-10 w-56 h-56 bg-gradient-coral rounded-full opacity-30 blur-2xl animate-pulse", style: {
          animationDelay: "1.5s"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold animate-pulse", children: "🎯 Places limitées" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-5xl md:text-6xl font-bold leading-tight", children: "Réservez votre place dès maintenant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl opacity-95", children: "4 semaines · Innovation · Collaboration · Création" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex flex-col sm:flex-row items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/15 backdrop-blur px-6 py-4 border border-white/20 hover:bg-white/25 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider opacity-80", children: "Inscription" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold", children: "5 000 FCFA" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/+22946244549", className: "rounded-full bg-secondary text-secondary-foreground px-8 py-4 font-bold text-lg hover:scale-105 transition shadow-pop active:scale-95", children: "📞 Contact WhatsApp" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm opacity-80", children: "🌐 Organisé par Amphix 🚀" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚀" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: "Amphix" }),
          " · Bootcamp 2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "« Apprendre, Construire, Innover »" })
      ] }) })
    ] })
  ] });
}
export {
  Index as component
};
