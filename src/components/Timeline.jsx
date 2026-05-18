import React from 'react'

function Timeline({ items }) {
  return (
    <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-300">
      {items.map((item) => (
        <div key={`${item.period}-${item.title}`} className="relative pl-12">
          <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-mist bg-ocean" />
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-bold text-ocean">{item.period}</p>
            <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
