import React from 'react'

function Footer({ profile }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
      © 2026 {profile.shortName}. All rights reserved.
    </footer>
  );
}

export default Footer;
