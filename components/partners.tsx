

const Partners = () => {
    const partners = ["BROMCO", "Easy Collection"];
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-12">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="text-center text-balance text-4xl font-semibold text-slate-900 lg:text-5xl">Partners</h2>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="flex min-w-max animate-[partners-marquee_20s_linear_infinite] items-center gap-5 py-2">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex h-16 min-w-[220px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-base font-semibold text-slate-700 shadow-sm grayscale transition hover:grayscale-0"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Partners