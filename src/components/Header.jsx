import React from 'react'

const navItems = [
  ["Giới thiệu", "#about"],
  ["Kỹ năng", "#skills"],
  ["Projects", "#projects"],
  ["Liên hệ", "#contact"]
];

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-ink">
          Trung
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-ocean">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
