import Icon from "./Icon.jsx";

function Contact({ profile }) {
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: "phone" },
    { label: "GitHub", value: "github.com/your-username", href: profile.githubUrl, icon: "github" },
    { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: profile.linkedInUrl, icon: "linkedin" }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {contacts.map(({ label, value, href, icon }) => (
        <a key={label} className="contact-item" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          <span className="contact-icon">
            <Icon name={icon} size={20} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-500">{label}</span>
            <span className="mt-1 block break-words font-bold text-ink">{value}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export default Contact;
