import React from 'react'
import Icon from "./Icon.jsx";

function Contact({ profile }) {
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
    { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: "phone" },
    { label: "GitHub", value: "github.com/PhamTrung1307", href: profile.githubUrl, icon: "github" },
    { label: "LinkedIn", value: "linkedin.com/in/phamnguyenanhtrung", href: profile.linkedInUrl, icon: "linkedin" }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="contact-panel">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Sẵn sàng trao đổi</p>
        <h3 className="mt-4 text-3xl font-black text-white">Liên hệ với tôi</h3>
        <p className="mt-4 leading-8 text-slate-300">
          Tôi đang tìm kiếm cơ hội Fresher/Junior .NET Backend Developer tại môi trường chuyên nghiệp, có mentor và quy trình rõ ràng.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a className="btn-primary" href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            Gửi Email
          </a>
          <a className="btn-secondary" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map(({ label, value, href, icon }) => (
          <a key={label} className="contact-item" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <span className="contact-icon">
              <Icon name={icon} size={20} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-400">{label}</span>
              <span className="mt-1 block break-words font-bold text-white">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
