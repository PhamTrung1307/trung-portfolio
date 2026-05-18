import React from 'react'
import Icon from "./Icon.jsx";

function Hero({ profile, highlights }) {
  const cvButton = profile.cvUrl ? (
    <a className="btn-primary" href={profile.cvUrl} target="_blank" rel="noreferrer">
      <Icon name="download" />
      Download CV
    </a>
  ) : (
    <button className="btn-muted" type="button" title="CV đang cập nhật">
      <Icon name="download" />
      Download CV
    </button>
  );

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-hero">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto grid min-h-[calc(100vh-74px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {profile.target}
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-bold text-cyan-200 md:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {profile.intro}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
            <span className="info-pill">{profile.location}</span>
            <span className="info-pill">ASP.NET Core</span>
            <span className="info-pill">RESTful API</span>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {cvButton}
            <a className="btn-secondary" href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" />
              View GitHub
            </a>
            <a className="btn-secondary" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              LinkedIn
            </a>
            <a className="btn-secondary" href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Developer Profile</p>
              <h2 className="mt-3 text-2xl font-black text-white">Backend có tư duy sản phẩm</h2>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
              Open to work
            </span>
          </div>
          <div className="space-y-6 pt-6">
            <div>
              <p className="text-sm font-bold text-slate-400">Chuyên môn chính</p>
              <p className="mt-2 text-lg font-bold leading-8 text-slate-100">
                ASP.NET Core, Clean Architecture, SQL Server, JWT, realtime và background jobs.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map((item) => (
                <div className="metric-box" key={item.label}>
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
