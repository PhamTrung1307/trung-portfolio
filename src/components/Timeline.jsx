import React from 'react'

function Timeline({ items }) {
  return (
    <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-cyan-300/30">
      {items.map((item) => (
        <div key={`${item.period}-${item.title}`} className="relative pl-12">
          <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-300 shadow-cyan" />
          <div className="timeline-card">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-bold text-cyan-300">{item.period}</p>
                <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-1 font-semibold text-slate-400">{item.company}</p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
