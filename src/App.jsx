import React from 'react'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { highlights, profile, projects, techStack, timeline } from "./data/portfolio.js";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero profile={profile} highlights={highlights} />
        <Section id="about" eyebrow="Giới thiệu" title="About Me">
          <div className="about-card">
            <p className="text-base leading-8 text-slate-300 md:text-lg">{profile.about}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="info-pill">{profile.target}</span>
              <span className="info-pill">{profile.location}</span>
              <span className="info-pill">Clean Architecture</span>
            </div>
          </div>
        </Section>
        <Section id="skills" eyebrow="Kỹ năng" title="Tech Stack">
          <TechStack items={techStack} />
        </Section>
        <Section id="projects" eyebrow="Dự án thực tế" title="Projects">
          <Projects projects={projects} />
        </Section>
        <Section id="experience" eyebrow="Kinh nghiệm" title="Experience">
          <Timeline items={timeline} />
        </Section>
        <Section id="contact" eyebrow="Kết nối" title="Contact">
          <Contact profile={profile} />
        </Section>
      </main>
      <Footer profile={profile} />
    </div>
  );
}

export default App;
