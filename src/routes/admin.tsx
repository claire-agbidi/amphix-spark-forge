import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Dashboard Admin — Bootcamp Amphix 2026" },
      { name: "description", content: "Dashboard administrateur du Bootcamp Amphix 2026." },
    ],
  }),
  component: AdminDashboard,
});

interface Participant {
  id: string;
  created_at: string;
  nom: string;
  prenoms: string;
  whatsapp: string;
  niveau_etudes: "Collège" | "Lycée" | "Licence";
  paye: boolean;
  montant_paye: number;
}

function AdminDashboard() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterNiveau, setFilterNiveau] = useState<"" | "Collège" | "Lycée" | "Licence">("");
  const [filterPaye, setFilterPaye] = useState<"" | "paye" | "non_paye">("");
  const [sortBy, setSortBy] = useState<"date" | "nom" | "montant">("date");

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("participants")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erreur chargement:", error);
    } else {
      setParticipants(data || []);
    }
    setLoading(false);
  };

  const togglePaye = async (id: string, current: boolean) => {
    const montant = current ? 0 : 5000;
    const { error } = await supabase
      .from("participants")
      .update({ paye: !current, montant_paye: montant })
      .eq("id", id);

    if (!error) {
      setParticipants((prev) =>
        prev.map((p) => (p.id === id ? { ...p, paye: !current, montant_paye: montant } : p))
      );
    }
  };

  const filtered = useMemo(() => {
    let result = [...participants];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.nom.toLowerCase().includes(q) ||
          p.prenoms.toLowerCase().includes(q) ||
          p.whatsapp.includes(q)
      );
    }

    if (filterNiveau) result = result.filter((p) => p.niveau_etudes === filterNiveau);
    if (filterPaye === "paye") result = result.filter((p) => p.paye);
    if (filterPaye === "non_paye") result = result.filter((p) => !p.paye);

    if (sortBy === "nom") result.sort((a, b) => a.nom.localeCompare(b.nom));
    else if (sortBy === "montant") result.sort((a, b) => b.montant_paye - a.montant_paye);
    else result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return result;
  }, [participants, search, filterNiveau, filterPaye, sortBy]);

  const stats = useMemo(() => {
    const totalParticipants = participants.length;
    const totalPayes = participants.filter((p) => p.paye).length;
    const totalFCFA = participants.reduce((sum, p) => sum + p.montant_paye, 0);
    const parNiveau = {
      Collège: participants.filter((p) => p.niveau_etudes === "Collège").length,
      Lycée: participants.filter((p) => p.niveau_etudes === "Lycée").length,
      Licence: participants.filter((p) => p.niveau_etudes === "Licence").length,
    };
    return { totalParticipants, totalPayes, totalFCFA, parNiveau };
  }, [participants]);

  const exportCSV = () => {
    const headers = ["Date", "Nom", "Prénoms", "WhatsApp", "Niveau", "Payé", "Montant (FCFA)"];
    const rows = filtered.map((p) => [
      new Date(p.created_at).toLocaleDateString("fr-FR"),
      p.nom,
      p.prenoms,
      p.whatsapp,
      p.niveau_etudes,
      p.paye ? "Oui" : "Non",
      p.montant_paye,
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `participants-bootcamp-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* HEADER */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.62 0.18 240 / 0.2), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.68 0.2 25 / 0.2), transparent 40%)" }} />
        <nav className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-foreground">Amphix</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Admin</span>
          </a>
          <a href="/" className="rounded-full bg-white text-foreground px-5 py-2.5 text-sm font-semibold border border-border hover:bg-muted transition hover:scale-105 active:scale-95">Retour au site</a>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-4 pb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-balance">
            <span className="text-primary">Dash</span><span className="text-secondary">board</span>
            <span className="block text-foreground text-2xl md:text-3xl mt-2">Administrateur</span>
          </h1>
        </div>
      </section>

      {/* STATS CARDS */}
      <section className="mx-auto max-w-7xl px-6 -mt-8 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "👥", label: "Participants", value: stats.totalParticipants.toString(), grad: "bg-gradient-ocean", delay: 0 },
            { icon: "💰", label: "FCFA encaissés", value: stats.totalFCFA.toLocaleString("fr-FR"), grad: "bg-gradient-sun", delay: 100 },
            { icon: "✅", label: "Inscriptions payées", value: stats.totalPayes.toString(), grad: "bg-gradient-coral", delay: 200 },
            { icon: "⏳", label: "En attente de paiement", value: (stats.totalParticipants - stats.totalPayes).toString(), grad: "bg-gradient-ocean", delay: 300 },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-2xl bg-card p-6 shadow-soft border border-border overflow-hidden hover:shadow-pop hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute -right-6 -top-6 w-24 h-24 ${c.grad} rounded-full opacity-20`} />
              <div className="text-3xl relative">{c.icon}</div>
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold relative">{c.label}</div>
              <div className="mt-1 font-display text-3xl font-bold relative">{c.value}</div>
            </div>
          ))}
        </div>

        {/* Répartition par niveau */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {(["Collège", "Lycée", "Licence"] as const).map((n) => (
            <div key={n} className="rounded-xl bg-card border border-border p-4 text-center shadow-soft">
              <div className="text-2xl font-display font-bold text-primary">{stats.parNiveau[n]}</div>
              <div className="text-xs text-muted-foreground mt-1">{n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTRES & LISTE */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-end md:items-center justify-between">
          <div className="flex flex-wrap gap-3 flex-1">
            <input
              type="text"
              placeholder="Rechercher un participant..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition w-full md:w-72"
            />
            <select
              value={filterNiveau}
              onChange={(e) => setFilterNiveau(e.target.value as any)}
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            >
              <option value="">Tous les niveaux</option>
              <option value="Collège">Collège</option>
              <option value="Lycée">Lycée</option>
              <option value="Licence">Licence</option>
            </select>
            <select
              value={filterPaye}
              onChange={(e) => setFilterPaye(e.target.value as any)}
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            >
              <option value="">Tous les paiements</option>
              <option value="paye">Payé</option>
              <option value="non_paye">Non payé</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            >
              <option value="date">Trier par date</option>
              <option value="nom">Trier par nom</option>
              <option value="montant">Trier par montant</option>
            </select>
          </div>
          <button
            onClick={exportCSV}
            className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            📥 Exporter CSV
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        ) : (
          <>
            <div className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Date</th>
                      <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Nom complet</th>
                      <th className="text-left px-6 py-4 font-semibold text-muted-foreground">WhatsApp</th>
                      <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Niveau</th>
                      <th className="text-center px-6 py-4 font-semibold text-muted-foreground">Statut</th>
                      <th className="text-right px-6 py-4 font-semibold text-muted-foreground">Montant</th>
                      <th className="text-center px-6 py-4 font-semibold text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-6 py-16 text-center text-muted-foreground">
                          Aucun participant trouvé.
                        </td>
                      </tr>
                    ) : (
                      filtered.map((p) => (
                        <tr key={p.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                            {new Date(p.created_at).toLocaleDateString("fr-FR", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>
                          <td className="px-6 py-4 font-medium">
                            {p.nom} <span className="text-muted-foreground">{p.prenoms}</span>
                          </td>
                          <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{p.whatsapp}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                              p.niveau_etudes === "Collège" ? "bg-sky-100 text-sky-700" :
                              p.niveau_etudes === "Lycée" ? "bg-orange-100 text-orange-700" :
                              "bg-yellow-100 text-yellow-700"
                            }`}>
                              {p.niveau_etudes}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                              p.paye
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${p.paye ? "bg-green-500" : "bg-red-500"}`} />
                              {p.paye ? "Payé" : "Non payé"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-mono font-semibold">
                            {p.montant_paye.toLocaleString("fr-FR")} FCFA
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => togglePaye(p.id, p.paye)}
                              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
                                p.paye
                                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                                  : "bg-green-100 text-green-700 hover:bg-green-200"
                              }`}
                            >
                              {p.paye ? "Marquer non payé" : "Marquer payé"}
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground text-center">
              {filtered.length} participant{filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""} sur {participants.length} au total
            </div>
          </>
        )}
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><span>🚀</span><span className="font-display font-bold text-foreground">Amphix</span> · Dashboard Admin</div>
          <div>« Apprendre, Construire, Innover »</div>
        </div>
      </footer>
    </main>
  );
}