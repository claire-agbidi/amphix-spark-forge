import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export const Route = createFileRoute("/inscription")({
  head: () => ({
    meta: [
      { title: "Inscription — Bootcamp Amphix 2026" },
      { name: "description", content: "Inscrivez-vous au Bootcamp Amphix 2026. 5 000 FCFA. Web, IA, Design, Hackathon." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: InscriptionPage,
});

// ── Schéma de validation avec Zod ──
const schema = z.object({
  nom: z.string().min(1, "Le nom est obligatoire"),
  prenoms: z.string().min(1, "Les prénoms sont obligatoires"),
  whatsapp: z.string().min(1, "Le numéro WhatsApp est obligatoire"),
  niveau_etudes: z.enum(["Collège", "Lycée", "Licence"], {
    errorMap: () => ({ message: "Veuillez sélectionner un niveau" }),
  }),
});

type FormData = z.infer<typeof schema>;

// ── Helper pour formater le numéro WhatsApp ──
const formatWhatsApp = (raw: string): string => {
  const cleaned = raw.replace(/\s/g, "").replace(/^0+/, "");
  if (cleaned.startsWith("+229")) return cleaned;
  return `+229${cleaned.replace(/^\+/, "")}`;
};

function InscriptionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError("");

    const phone = formatWhatsApp(data.whatsapp);

    try {
      const { error } = await supabase.from("participants").insert({
        nom: data.nom.trim(),
        prenoms: data.prenoms.trim(),
        whatsapp: phone,
        niveau_etudes: data.niveau_etudes,
        paye: false,
        montant_paye: 0,
      });

      if (error) {
        if (error.message.includes("duplicate") || error.message.includes("unique")) {
          setServerError("Ce numéro WhatsApp est déjà inscrit.");
        } else {
          setServerError(error.message);
        }
        setIsSubmitting(false);
        return;
      }

      // Succès
      setSubmittedData(data);
      reset(); // vide le formulaire
    } catch {
      setServerError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si l'inscription est réussie, on affiche la confirmation
  if (submittedData) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-lg w-full rounded-3xl bg-card border border-border shadow-soft p-8 md:p-12 text-center">
          <div className="text-6xl mb-6 animate-bounce">🎉</div>
          <h2 className="font-display text-3xl font-bold text-primary">Inscription réussie !</h2>
          <p className="mt-4 text-muted-foreground">
            Merci <strong>{submittedData.nom}</strong> ! Nous vous contacterons bientôt sur WhatsApp pour finaliser votre inscription.
          </p>
          <div className="mt-8 rounded-2xl bg-gradient-ocean/10 border border-primary/20 p-6">
            <p className="text-sm text-muted-foreground mb-2">Montant à payer</p>
            <p className="font-display text-4xl font-bold text-primary">5 000 FCFA</p>
            <p className="mt-2 text-xs text-muted-foreground">Via WhatsApp ou mobile money</p>
          </div>
          <a
            href="/"
            className="mt-8 inline-block rounded-full bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            Retour à l'accueil
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* HEADER (identique pour la cohérence visuelle) */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.62 0.18 240 / 0.2), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.68 0.2 25 / 0.2), transparent 40%)" }} />
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-orange-400/20 blur-3xl" />

        <nav className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold">Amphix</span>
          </a>
          <a href="/" className="rounded-full bg-white text-foreground px-5 py-2.5 text-sm font-semibold border border-border hover:bg-muted transition">
            Retour à l'accueil
          </a>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-20 text-center">
          <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-4 py-1.5 text-sm font-semibold text-foreground border border-border shadow-soft">
            🚀 Bootcamp Amphix 2026
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-balance">
            <span className="text-primary">Inscri</span><span className="text-secondary">ption</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto">
            Rejoignez la 1ère édition du Bootcamp Amphix. 4 semaines pour transformer vos idées en projets concrets.
          </p>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="mx-auto max-w-2xl px-6 py-20">
        <div className="rounded-3xl bg-card border border-border shadow-soft p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold">Vos informations</h2>
            <p className="mt-2 text-sm text-muted-foreground">Tous les champs sont obligatoires</p>
          </div>

          {serverError && (
            <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-600 text-center mb-6">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-5">
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold mb-2">
                  Nom
                </label>
                <input
                  id="nom"
                  type="text"
                  {...register("nom")}
                  placeholder="Ex: Koffi"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  aria-invalid={errors.nom ? "true" : "false"}
                />
                {errors.nom && (
                  <p className="mt-1 text-xs text-red-500">{errors.nom.message}</p>
                )}
              </div>

              {/* Prénoms */}
              <div>
                <label htmlFor="prenoms" className="block text-sm font-semibold mb-2">
                  Prénoms
                </label>
                <input
                  id="prenoms"
                  type="text"
                  {...register("prenoms")}
                  placeholder="Ex: Jean Marie"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  aria-invalid={errors.prenoms ? "true" : "false"}
                />
                {errors.prenoms && (
                  <p className="mt-1 text-xs text-red-500">{errors.prenoms.message}</p>
                )}
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold mb-2">
                Numéro WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                {...register("whatsapp")}
                placeholder="Ex: 46244549 ou +229 46 24 45 49"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                aria-invalid={errors.whatsapp ? "true" : "false"}
              />
              <p className="mt-1 text-xs text-muted-foreground">Format: 46244549 ou +229 46 24 45 49</p>
              {errors.whatsapp && (
                <p className="mt-1 text-xs text-red-500">{errors.whatsapp.message}</p>
              )}
            </div>

            {/* Niveau d’études */}
            <fieldset>
              <legend className="block text-sm font-semibold mb-2">
                Niveau d'études
              </legend>
              <div className="grid grid-cols-3 gap-3">
                {(["Collège", "Lycée", "Licence"] as const).map((niveau) => (
                  <label
                    key={niveau}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium text-center cursor-pointer transition-all duration-200 ${
                      // react-hook-form ne fournit pas directement l'état "checked", mais on peut utiliser un petit état local ou simplement se fier au style de l'input radio.
                      // Ici, on utilise l'attribut "checked" via le register, mais visuellement c'est l'input qui est caché.
                      "border-border bg-background text-muted-foreground hover:border-primary/50 hover:bg-muted has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary has-[:checked]:shadow-sm"
                    }`}
                  >
                    <input
                      type="radio"
                      value={niveau}
                      {...register("niveau_etudes")}
                      className="sr-only"
                    />
                    {niveau}
                  </label>
                ))}
              </div>
              {errors.niveau_etudes && (
                <p className="mt-1 text-xs text-red-500">{errors.niveau_etudes.message}</p>
              )}
            </fieldset>

            {/* Frais */}
            <div className="rounded-2xl bg-gradient-ocean/10 border border-primary/20 p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Frais d'inscription</p>
              <p className="font-display text-3xl font-bold text-primary">5 000 FCFA</p>
              <p className="mt-1 text-xs text-muted-foreground">À payer après inscription via WhatsApp</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-gradient-ocean text-primary-foreground px-8 py-4 font-bold text-lg shadow-pop hover:scale-[1.02] transition active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Inscription en cours...
                </>
              ) : (
                "Je m'inscris au Bootcamp 🚀"
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              En vous inscrivant, vous acceptez de rejoindre le Bootcamp Amphix 2026.
            </p>
          </form>
        </div>
      </section>

      {/* INFOS */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: "📅", label: "Durée", value: "4 semaines" },
            { icon: "💻", label: "Mode", value: "90% en ligne" },
            { icon: "🎟️", label: "Inscription", value: "5 000 FCFA" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl bg-card p-6 shadow-soft border border-border text-center hover:shadow-pop hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-2">{c.icon}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
              <div className="mt-1 font-display text-xl font-bold">{c.value}</div>
            </div>
          ))}
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