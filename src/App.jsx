import React from 'react'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { profile, projects, techStack, timeline } from "./data/portfolio.js";

function App() {
  return (
    <div className="min-h-screen bg-mist text-ink">
      <Header />
      <main>
        <Hero profile={profile} />
        <Section id="about" eyebrow="Giới thiệu" title="About Me">
          <p className="max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
            Tôi là lập trình viên .NET đang tìm kiếm cơ hội Fresher/Junior để
            phát triển trong môi trường chuyên nghiệp. Tôi yêu thích việc xây
            dựng backend rõ ràng, thiết kế REST API ổn định, làm việc với cơ sở
            dữ liệu và liên tục cải thiện chất lượng code qua từng project.
          </p>
        </Section>
        <Section id="skills" eyebrow="Kỹ năng" title="Tech Stack">
          <TechStack items={techStack} />
        </Section>
        <Section id="projects" eyebrow="Sản phẩm mẫu" title="Projects">
          <Projects projects={projects} />
        </Section>
        <Section id="experience" eyebrow="Hành trình" title="Education / Experience">
          <Timeline items={timeline} />
        </Section>
        <Section id="contact" eyebrow="Kết nối" title="Contact">
          <Contact profile={profile} />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
