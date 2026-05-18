import React from 'react'

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-white/10 bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
