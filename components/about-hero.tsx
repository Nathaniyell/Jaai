export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0747ae] via-[#053884] to-[#04286b] px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(96,165,250,0.25)_0%,transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">About JAI Network</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
          A forward-thinking organisation advancing autism awareness, family support, and inclusion across communities
          worldwide.
        </p>
      </div>
    </section>
  );
}
