// src/routes/dashboard.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

/* ─── Types ─── */
interface User {
  id: string;
  nom: string;
  prenoms: string;
  whatsapp: string;
  niveau_etudes: string;
  pieces: number;
}

interface Product {
  id: string;
  image_url: string | null;
  titre: string;
  prix_pieces: number;
  stock: number;
}

interface Demande {
  id: string;
  produit_titre: string;
  statut: string;
}

/* ─── Composant Pièce animée ─── */
function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full animate-[spin_3s_linear_infinite]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <circle cx="32" cy="32" r="28" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="32" cy="32" r="22" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.5" />
        <text x="32" y="38" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#92400e" fontFamily="Fredoka">
          🪙
        </text>
        <ellipse cx="22" cy="20" rx="8" ry="5" fill="white" opacity="0.3" />
      </svg>
    </div>
  );
}

/* ─── Carte Produit ─── */
function ProductCard({
  product,
  userPieces,
  onAcheter,
  isBuying,
}: {
  product: Product;
  userPieces: number;
  onAcheter: (produitId: string, prix: number) => void;
  isBuying: boolean;
}) {
  const peutAcheter = userPieces >= product.prix_pieces && product.stock > 0;

  return (
    <div className="bg-card rounded-2xl border border-border p-4 shadow-soft">
      <div className="aspect-square rounded-xl bg-gradient-ocean/10 flex items-center justify-center text-4xl mb-3 overflow-hidden">
        {product.image_url ? (
          <img src={product.image_url} alt={product.titre} className="w-full h-full object-cover" />
        ) : (
          "🎁"
        )}
      </div>
      <h3 className="font-display font-semibold text-sm text-foreground line-clamp-2 mb-2">
        {product.titre}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-base">🪙</span>
          <span className="font-display font-bold text-primary">{product.prix_pieces}</span>
        </div>
        <button
          onClick={() => onAcheter(product.id, product.prix_pieces)}
          disabled={!peutAcheter || isBuying}
          className={[
            "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
            peutAcheter && !isBuying
              ? "bg-gradient-ocean text-primary-foreground hover:brightness-110 active:scale-95"
              : "bg-muted text-muted-foreground cursor-not-allowed",
          ].join(" ")}
        >
          {isBuying ? "..." : product.stock > 0 ? "Acheter" : "Rupture"}
        </button>
      </div>
    </div>
  );
}

/* ─── Menu Paramètres ─── */
function SettingsMenu({
  user,
  onUpdate,
}: {
  user: User;
  onUpdate: () => void;
}) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + "amphix-salt-2026");
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const arr = Array.from(new Uint8Array(hashBuffer));
    return arr.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas");
      return;
    }
    if (newPassword.length < 8) {
      setMessage("Minimum 8 caractères");
      return;
    }

    setIsLoading(true);
    try {
      const newHash = await hashPassword(newPassword);

      const { error } = await supabase
        .from("participants")
        .update({ password_hash: newHash })
        .eq("id", user.id);

      if (error) {
        setMessage("Erreur lors de la mise à jour");
        return;
      }

      setMessage("Mot de passe modifié !");
      setShowPasswordForm(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      onUpdate();
    } catch {
      setMessage("Erreur inattendue");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-card rounded-2xl border border-border p-5 shadow-soft">
        <h3 className="font-display font-bold text-lg mb-4">Mes informations</h3>
        <div className="space-y-3">
          {[
            { label: "Nom complet", value: `${user.nom} ${user.prenoms}` },
            { label: "WhatsApp", value: user.whatsapp },
            { label: "Niveau", value: user.niveau_etudes },
            { label: "Pièces", value: `${user.pieces} 🪙` },
          ].map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center py-2 border-b border-border last:border-0"
            >
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border p-5 shadow-soft">
        <h3 className="font-display font-bold text-lg mb-4">Sécurité</h3>
        {!showPasswordForm ? (
          <button
            onClick={() => setShowPasswordForm(true)}
            className="w-full rounded-xl bg-gradient-ocean text-primary-foreground px-4 py-3 font-semibold text-sm hover:brightness-110 transition active:scale-95"
          >
            Changer mon mot de passe
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />
            <input
              type="password"
              placeholder="Confirmer le nouveau"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 rounded-xl bg-gradient-ocean text-primary-foreground px-4 py-3 font-semibold text-sm hover:brightness-110 transition active:scale-95 disabled:opacity-60"
              >
                {isLoading ? "..." : "Valider"}
              </button>
              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                className="flex-1 rounded-xl bg-muted text-foreground px-4 py-3 font-semibold text-sm hover:bg-muted/80 transition"
              >
                Annuler
              </button>
            </div>
          </form>
        )}
        {message && (
          <p
            className={`mt-3 text-xs text-center font-medium ${
              message.includes("!") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("amphix_session");
          window.location.href = "/connexion";
        }}
        className="w-full rounded-2xl bg-red-50 border border-red-200 text-red-600 px-4 py-4 font-semibold text-sm hover:bg-red-100 transition active:scale-95"
      >
        Se déconnecter
      </button>
    </div>
  );
}

/* ─── Page Principale ─── */
function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"accueil" | "produits" | "parametres">("accueil");
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [demandes, setDemandes] = useState<Demande[]>([]);
  const [loading, setLoading] = useState(true);
  const [buyingId, setBuyingId] = useState<string | null>(null);

  // ─── Chargement des données utilisateur ───
  async function loadUserData() {
    const sessionStr = localStorage.getItem("amphix_session");
    if (!sessionStr) {
      window.location.href = "/connexion";
      return;
    }

    const session = JSON.parse(sessionStr);

    const { data, error } = await supabase
      .from("participants")
      .select("id, nom, prenoms, whatsapp, niveau_etudes, pieces")
      .eq("id", session.id)
      .single();

    if (error || !data) {
      localStorage.removeItem("amphix_session");
      window.location.href = "/connexion";
      return;
    }

    setUser(data);
    localStorage.setItem("amphix_session", JSON.stringify(data));
  }

  // ─── Chargement des produits ───
  async function loadProducts() {
    const { data, error } = await supabase
      .from("produits")
      .select("id, titre, prix_pieces, image_url, stock")
      .eq("disponible", true)
      .order("created_at", { ascending: false });

    if (!error && data) setProducts(data);
  }

  // ─── Chargement des demandes ───
  async function loadDemandes() {
    if (!user) return;

    const { data, error } = await supabase
      .from("demandes")
      .select("id, statut, produit:titre")
      .eq("participant_id", user.id);

    if (!error && data) {
      setDemandes(
        data.map((d: any) => ({
          id: d.id,
          produit_titre: d.produit || "Produit inconnu",
          statut: d.statut,
        }))
      );
    }
  }

  // ─── Achat produit ───
  async function handleAchat(produitId: string, prix: number) {
    if (!user || user.pieces < prix) return;

    setBuyingId(produitId);

    // Vérifier stock
    const { data: produit } = await supabase
      .from("produits")
      .select("stock")
      .eq("id", produitId)
      .single();

    if (!produit || produit.stock <= 0) {
      setBuyingId(null);
      return;
    }

    // Transaction : décrémenter pièces + stock, créer demande
    const { error: updateError } = await supabase
      .from("participants")
      .update({ pieces: user.pieces - prix })
      .eq("id", user.id);

    if (updateError) {
      setBuyingId(null);
      return;
    }

    await supabase.from("produits").update({ stock: produit.stock - 1 }).eq("id", produitId);

    await supabase.from("demandes").insert({
      participant_id: user.id,
      produit_id: produitId,
      statut: "en_attente",
    });

    await loadUserData();
    await loadProducts();
    setBuyingId(null);
  }

  // ─── Initialisation ───
  useEffect(() => {
    async function init() {
      setLoading(true);
      await loadUserData();
      await loadProducts();
      setLoading(false);
    }
    init();
  }, []);

  useEffect(() => {
    if (user) loadDemandes();
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const demandesEnAttente = demandes.filter((d) => d.statut === "en_attente").length;

  return (
    <main className="min-h-screen bg-background pb-24 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-ocean flex items-center justify-center text-white font-display font-bold text-lg shadow-md">
              A
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Bienvenue</p>
              <h1 className="font-display font-bold text-sm text-foreground leading-tight">
                {user.prenoms} {user.nom}
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-muted transition">
              <span className="text-xl">🔔</span>
              {demandesEnAttente > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {demandesEnAttente}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("parametres")}
              className="p-2 rounded-full hover:bg-muted transition"
            >
              <span className="text-xl">⚙️</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* ─── TAB: ACCUEIL ─── */}
        {activeTab === "accueil" && (
          <div className="space-y-6 animate-fade-in">
            {/* Carte Pièces */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-ocean p-6 text-white shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

              <div className="relative z-10">
                <p className="text-white/80 text-sm font-medium mb-1">Mes pièces d'or</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="font-display text-5xl font-bold tracking-tight">
                      {user.pieces}
                    </div>
                    <p className="text-white/70 text-xs mt-1">
                      Gagnez des pièces en complétant les défis
                    </p>
                  </div>
                  <CoinIcon className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
                </div>

                <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 transition-all duration-1000"
                    style={{ width: `${Math.min((user.pieces / 500) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-white/60 text-[10px] mt-1.5">
                  Prochain palier : 500 pièces
                </p>
              </div>
            </div>

            {/* Demandes en attente */}
            <div className="bg-card rounded-2xl border border-border p-5 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/20 flex items-center justify-center text-xl">
                    ⏳
                  </div>
                  <h3 className="font-display font-bold">Demandes en attente</h3>
                </div>
                <span
                  className={[
                    "text-xs font-bold px-3 py-1 rounded-full",
                    demandesEnAttente > 0
                      ? "bg-yellow-400/20 text-yellow-700"
                      : "bg-muted text-muted-foreground",
                  ].join(" ")}
                >
                  {demandesEnAttente}
                </span>
              </div>
              {demandesEnAttente === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Aucune demande en cours
                </p>
              ) : (
                <div className="space-y-2">
                  {demandes
                    .filter((d) => d.statut === "en_attente")
                    .map((d) => (
                      <div
                        key={d.id}
                        className="flex items-center justify-between py-2 px-3 bg-yellow-400/10 rounded-lg"
                      >
                        <span className="text-sm font-medium">{d.produit_titre}</span>
                        <span className="text-xs text-yellow-700 font-semibold">En attente</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── TAB: PRODUITS ─── */}
        {activeTab === "produits" && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">Boutique</h2>
              <div className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1.5">
                <CoinIcon className="w-5 h-5" />
                <span className="font-display font-bold text-primary">{user.pieces}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  userPieces={user.pieces}
                  onAcheter={handleAchat}
                  isBuying={buyingId === product.id}
                />
              ))}
            </div>

            {products.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                Aucun produit disponible pour le moment
              </p>
            )}
          </div>
        )}

        {/* ─── TAB: PARAMÈTRES ─── */}
        {activeTab === "parametres" && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl font-bold mb-4">Paramètres</h2>
            <SettingsMenu user={user} onUpdate={loadUserData} />
          </div>
        )}
      </div>

      {/* ─── NAVIGATION MOBILE ─── */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-border md:hidden z-50">
        <div className="flex items-center justify-around px-2 py-2">
          {[
            { key: "accueil" as const, icon: "🏠", label: "Accueil" },
            { key: "produits" as const, icon: "🛍️", label: "Produits" },
            { key: "parametres" as const, icon: "⚙️", label: "Paramètres" },
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  "flex flex-col items-center gap-0.5 px-4 py-2 rounded-2xl transition-all duration-200 min-w-[72px]",
                  isActive
                    ? "bg-gradient-ocean/10 text-primary scale-105"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                <span className={`text-xl ${isActive ? "animate-bounce" : ""}`}>{tab.icon}</span>
                <span className={`text-[10px] font-semibold ${isActive ? "font-display" : ""}`}>
                  {tab.label}
                </span>
                {isActive && <span className="w-1 h-1 rounded-full bg-primary mt-0.5" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ─── NAVIGATION DESKTOP ─── */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex-col p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-ocean flex items-center justify-center text-white font-display font-bold text-lg">
            A
          </div>
          <span className="font-display font-bold text-xl">Amphix</span>
        </div>

        <div className="space-y-2 flex-1">
          {[
            { key: "accueil" as const, icon: "🏠", label: "Accueil" },
            { key: "produits" as const, icon: "🛍️", label: "Boutique" },
            { key: "parametres" as const, icon: "⚙️", label: "Paramètres" },
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left",
                  isActive
                    ? "bg-gradient-ocean text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                ].join(" ")}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="font-semibold">{tab.label}</span>
                {isActive && <span className="ml-auto text-sm">→</span>}
              </button>
            );
          })}
        </div>

        <div className="mt-auto bg-gradient-sun/10 rounded-2xl p-4 border border-yellow-400/20">
          <div className="flex items-center gap-2 mb-2">
            <CoinIcon className="w-8 h-8" />
            <span className="font-display font-bold text-lg">{user.pieces}</span>
          </div>
          <p className="text-xs text-muted-foreground">Pièces d'or accumulées</p>
        </div>
      </nav>

      <div className="hidden md:block md:ml-64" />
    </main>
  );
}