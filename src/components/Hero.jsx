import React from 'react'
import Icon from "./Icon.jsx";

function Hero({ profile }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-ocean">
            Portfolio cá nhân
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-normal text-ink md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-steel md:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
            {profile.intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={profile.cvUrl}>
              <Icon name="download" />
              Download CV
            </a>
            <a className="btn-secondary" href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" />
              View GitHub
            </a>
            <a className="btn-secondary" href="#contact">
              <Icon name="mail" />
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="hero-panel">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="text-sm font-semibold text-slate-500">Developer Profile</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-ocean">
                Open to work
              </span>
            </div>
            <div className="space-y-5 pt-6">
              <div>
                <p className="text-sm text-slate-500">Chuyên môn</p>
                <p className="mt-1 text-xl font-bold">Backend .NET & REST API</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Mục tiêu</p>
                <p className="mt-1 leading-7 text-slate-700">
                  Tham gia team phát triển phần mềm, học hỏi quy trình thực tế và đóng góp bằng code sạch, có trách nhiệm.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="metric-box">
                  <span>3</span>
                  <p>Project mẫu</p>
                </div>
                <div className="metric-box">
                  <span>9</span>
                  <p>Kỹ năng chính</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
