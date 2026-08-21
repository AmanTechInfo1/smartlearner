// src/pages/home/HomePageDesign.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Homepagedesign.css";

import { getHomePage } from "../../../redux/features/homeContentSlice";
import { icons, FALLBACK_FEATURES, FALLBACK_STATS } from "./HomeSectionConfig";
import { IoIosMap, IoIosRibbon } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";
const {
  Sparkles, // <-- was Sparkle — corrected to match HTML "lucide-sparkles"
  Star,
  Clock,
  ArrowRight,
  ShoppingCart,
  Menu,
  X,
  Phone,
  MapPin,
  CheckCircle2,
} = icons;

const NAV_ITEMS = [
  { label: "Courses", href: "/courses" },
  { label: "Theory", href: "/theory" },
  { label: "Instructors", href: "/instructors" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

/* ========================================================================
   REVEAL — IntersectionObserver wrapper (replaces Next.js Reveal)
   ======================================================================== */
function Reveal({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useState(null);
  const [el, setEl] = ref;

  useEffect(() => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [el]);

  const delayClass = `reveal-delay-${String(delay).replace(".", "")}`;

  return (
    <div
      ref={setEl}
      className={`reveal-hidden ${visible ? "is-visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}

/* ========================================================================
   MAIN PAGE
   ======================================================================== */
export default function HomePageDesign() {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    banner,
    howItWorks,
    packagesSection,
    whySmartLearner,
    locations,
    recentPasses,
    testimonials,
    cta,
    homeLoading,
  } = useSelector((s) => s.home);

  useEffect(() => {
    dispatch(getHomePage());
  }, [dispatch]);

  if (homeLoading && !banner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <div className="text-[var(--color-muted)]">Loading homepage…</div>
      </div>
    );
  }

  return (
    <div className="homepage-design-scope min-h-full flex flex-col">
      <main className="flex-1 homepage-design-scope">
        <Banner data={banner} />
        <HowItWorks data={howItWorks} />
        <PackagesSection data={packagesSection} />
        <WhySmartLearner data={whySmartLearner} />
        <Locations data={locations} />
        <RecentPasses data={recentPasses} />
        <Testimonials data={testimonials} />
        <CtaSection data={cta} />
      </main>
    </div>
  );
}

/* ========================================================================
   BANNER
   ======================================================================== */
function Banner({ data }) {
  if (!data) return null;

  const stats = data.stats?.length ? data.stats : FALLBACK_STATS;

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, color-mix(in oklab, var(--color-brand) 35%, transparent), transparent 60%), radial-gradient(50% 40% at 15% 80%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="rise rise-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 text-xs font-medium text-[var(--color-fg)] backdrop-blur">
                <Sparkles className="h-3 w-3 text-[var(--color-accent)]" />
                {data.badge}
              </span>
            </div>

            <h1
              className="rise rise-2 mt-7 font-display text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.95] tracking-tight text-[var(--color-fg)]"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
              }}
            >
              {data.heading}
            </h1>

            <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
              {data.description}
            </p>

            <div className="rise rise-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to={data.primaryButton?.link || "/courses"}>
                <button className="inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-md)] transition-[background,color,transform,box-shadow,filter] duration-200 ease-out active:scale-[0.97] active:duration-[80ms] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:brightness-105 active:translate-y-[1px] active:brightness-95 h-13 px-7 text-base">
                  {data.primaryButton?.text || "Reserve a package"}{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link to={data.secondaryButton?.link || "/contact"}>
                <button
                  style={{ color: "#d88c00" }}
                  className="inline-flex items-center justify-center font-medium rounded-[var(--radius-md)] transition-[background,color,transform,box-shadow,filter] duration-200 ease-out active:scale-[0.97] active:duration-[80ms] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-fg)] hover:bg-[var(--color-surface)] hover:border-[var(--color-fg)]/40 active:translate-y-[1px] h-13 px-7 text-base"
                >
                  {data.secondaryButton?.text || "Talk to us first"}
                </button>
              </Link>
            </div>
          </div>

          <div className="rise rise-5">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-7 backdrop-blur">
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span
                      className="font-display text-4xl leading-none tracking-tight text-[var(--color-fg)] sm:text-5xl"
                      style={{
                        fontVariationSettings:
                          '"opsz" 144, "SOFT" 100, "WONK" 1',
                      }}
                    >
                      {s.value}
                    </span>
                    <span className="text-xs text-[var(--color-muted)]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {data.contactInfo && (
                <div className="mt-7 flex items-start gap-3 border-t border-[var(--color-border)] pt-5">
                  <Phone className="mt-0.5 h-4 w-4 flex-none text-[var(--color-accent)]" />
                  <div>
                    <div className="text-sm font-medium">
                      {data.contactInfo.heading}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                      {data.contactInfo.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {data.trustItems?.length > 0 && (
          <div className="rise rise-5 mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-[var(--color-border)] pt-7 text-sm text-[var(--color-muted)]">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
                />
              ))}
              <span className="ml-2">1,200+ reviews</span>
            </div>
            {data.trustItems.map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="hidden sm:inline opacity-40">·</span>
                <span>{t.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ========================================================================
   HOW IT WORKS
   ======================================================================== */
function HowItWorks({ data }) {
  if (!data) return null;

  const steps = data.steps || [];

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--color-border)]">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            {data.label || "How it works"}
          </span>
          <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
            {data.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx === 1 ? 0.06 : idx === 2 ? 0.12 : 0}>
              <div className="bg-[var(--color-surface)] h-full">
                <div className="h-full p-8">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {step.number || `0${idx + 1}`}
                  </div>
                  <h3 className="mt-4 font-display text-2xl tracking-tight">
                    {step.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   PACKAGES SECTION (heading only — cards commented out as in your original)
   ======================================================================== */
function PackagesSection({ data }) {
  return (
    <section className="py-20 sm:py-28 border-b border-[var(--color-border)]">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {data?.subHeading || "Our packages"}
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
                {data?.heading || "Pick the way that suits you."}
              </h2>
              <p className="mt-3 max-w-xl text-[var(--color-muted)]">
                {data?.description}
              </p>
            </div>

            <Link
              to={data?.buttonLink || "/courses"}
              className="hover-underline text-sm font-medium text-[var(--color-accent)]"
            >
              {data?.buttonText || "See all packages →"}
            </Link>
          </div>
        </Reveal>

        {/* Cards kept commented per your original file */}
      </div>
    </section>
  );
}

/* ========================================================================
   WHY SMARTLEARNER
   ======================================================================== */
function WhySmartLearner({ data }) {
  if (!data) return null;

  const features = data.features?.length ? data.features : FALLBACK_FEATURES;
  const iconMap = {
    Award: Sparkles,
    Shield: Sparkles,
    MapPin: Sparkles,
    Sparkles: Sparkles,
  };

  // Import lucide icons by name from our config
  const resolveIcon = (name) => {
    const map = {
      Award: icons.Award,
      Shield: icons.Shield,
      MapPin: icons.MapPin,
      Sparkles: icons.Sparkles,
    };
    return map[name] || Sparkles;
  };

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--color-border)]">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {data.subHeading || "Why SmartLearner"}
            </span>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              {data.heading}
            </h2>
            <p className="mt-4 text-[var(--color-muted)] max-w-md">
              {data.description}
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = resolveIcon(f.icon);
              return (
                <Reveal
                  key={i}
                  delay={i === 1 ? 0.05 : i === 2 ? 0.1 : i * 0.05}
                >
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)] h-full">
                    <div className="p-6 pt-6">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-xl tracking-tight">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   LOCATIONS
   ======================================================================== */
function Locations({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--color-border)]">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            {data.subHeading || "Our locations"}
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            {data.heading || "Seven local areas, one phone number."}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {data.locations?.map((loc, i) => (
            <Reveal
              key={i}
              delay={
                i === 1
                  ? 0.04
                  : i === 2
                    ? 0.08
                    : i === 3
                      ? 0.12
                      : i === 4
                        ? 0.16
                        : i === 5
                          ? 0.2
                          : i === 6
                            ? 0.24
                            : 0
              }
            >
              <Link
                to={loc.link || "#"}
              style={{textDecoration:'none', color:'white'
              }}  className="group flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition-all hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-surface-muted)]"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
                  <div>
                    <div className="font-display text-lg tracking-tight">
                      {loc.name}
                    </div>
                    <div className="text-xs text-[var(--color-muted)]">
                      {loc.subLocation}
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[var(--color-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-fg)]" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   RECENT PASSES
   ======================================================================== */
function RecentPasses({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--color-border)]">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            {data.subHeading || "Recent passes"}
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            {data.heading || "Real pupils. Real passes."}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-muted)]">
            {data.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {data.students?.map((s, i) => (
            <Reveal
              key={i}
              delay={i === 1 ? 0.04 : i === 2 ? 0.08 : i === 3 ? 0.12 : 0}
            >
              <figure className="group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="aspect-[3/4] relative">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.message || s.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-display text-3xl text-[var(--color-muted)]">
                      {s.name?.[0]}
                    </div>
                  )}
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-12 text-white">
                  <div className="font-display text-base tracking-tight">
                    {s.name}
                  </div>
                  <div className="text-xs opacity-80">{s.location}</div>
                  {s.message && (
                    <p className="mt-1 text-xs opacity-90 line-clamp-2">
                      "{s.message}"
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   TESTIMONIALS
   ======================================================================== */
function Testimonials({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--color-border)]">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            {data.subHeading || "What pupils say"}
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            {data.heading || "Passed first time, with a smile."}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {data.testimonials?.map((t, i) => (
            <Reveal key={i} delay={i === 1 ? 0.05 : i === 2 ? 0.1 : 0}>
              <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)] h-full">
                <div className="p-6 pt-6">
                  <div
                    className="flex"
                    aria-label={`${t.rating || 5} out of 5 stars`}
                  >
                    {[...Array(t.rating || 5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
                      />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-xl leading-snug text-[var(--color-fg)]">
                    "{t.message}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] font-display text-sm font-bold text-[var(--color-brand-fg)]">
                        {t.name?.[0]}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-[var(--color-muted)]">
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   CTA
   ======================================================================== */
function CtaSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 sm:py-28 pb-24">
      <div className="mx-auto w-full px-6 sm:px-10 max-w-6xll">
        <div
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-10 sm:p-16"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--color-brand) 18%, var(--color-surface)) 0%, var(--color-surface) 55%, color-mix(in oklab, var(--color-accent) 10%, var(--color-surface)) 100%)",
          }}
        >
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              {data.subHeading && (
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {data.subHeading}
                </span>
              )}
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                {data.heading}
              </h2>
              <p className="mt-3 max-w-md text-[var(--color-muted)]">
                {data.description}
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link to={data.primaryButton?.link || "/courses"}>
                  <button className="inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-md)] transition-[background,color,transform,box-shadow,filter] duration-200 ease-out active:scale-[0.97] active:duration-[80ms] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:brightness-105 active:translate-y-[1px] active:brightness-95 h-13 px-7 text-base">
                    {data.primaryButton?.text || "Reserve a taster"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link to={data.secondaryButton?.link || "/contact"}>
                  <button style={{color:'#d88c00'}} className="inline-flex items-center justify-center font-medium rounded-[var(--radius-md)] transition-[background,color,transform,box-shadow,filter] duration-200 ease-out active:scale-[0.97] active:duration-[80ms] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-fg)] hover:bg-[var(--color-surface)] hover:border-[var(--color-fg)]/40 active:translate-y-[1px] h-13 px-7 text-base">
                    {data.secondaryButton?.text || "Or get in touch"}
                  </button>
                </Link>
              </div>
            </div>

            <ul className="grid gap-3 text-sm">
              {[
                "No commitment beyond the first hour",
                "Door-to-door pickup",
                "Manual or automatic",
                "Suitable for total beginners",
                "Full refund within 14 days",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 flex-none text-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================
   FOOTER
   ======================================================================== */
