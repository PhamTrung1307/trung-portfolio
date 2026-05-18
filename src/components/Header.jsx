import React from 'react'

const navItems = [
  ["Giới thiệu", "#about"],
  ["Kỹ năng", "#skills"],
  ["Dự án", "#projects"],
  ["Kinh nghiệm", "#experience"],
  ["Liên hệ", "#contact"]
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-sm font-black text-slate-950 shadow-cyan">
            T
          </span>
          <span>
            <span className="block text-sm font-bold text-white">Pham Nguyen Anh Trung</span>
            <span className="block text-xs font-medium text-slate-400">.NET Backend Developer</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold text-slate-300 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 sm:inline-flex" href="#contact">
          Liên hệ
        </a>
      </nav>
    </header>
  );
}

export default Header;
