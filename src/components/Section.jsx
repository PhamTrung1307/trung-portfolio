import React from 'react'

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="border-t border-slate-200 bg-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink md:text-4xl">{title}</h2>
        <div className="mt-9">{children}</div>
      </div>
    </section>
  );
}

export default Section;
