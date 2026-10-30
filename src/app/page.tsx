"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Command,
  Github,
  GraduationCap,
  Home as HomeIcon,
  Linkedin,
  Mail,
  Menu,
  Newspaper,
  Moon,
  BriefcaseBusiness,
  Code2,
  BookOpen,
  Sun,
  X,
} from "lucide-react";

const nav = [
  { label: "Home", href: "#top", icon: HomeIcon },
  { label: "About", href: "#about", icon: BookOpen },
  { label: "Work", href: "#experience", icon: BriefcaseBusiness },
  { label: "Blog", href: "#writing", icon: Newspaper },
  { label: "Projects", href: "#opensource", icon: Code2 },
  { label: "Education", href: "#education", icon: GraduationCap },
];
const email = process.env.NEXT_PUBLIC_EMAIL ?? "hello@example.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const github = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/brandy-build?tab=repositories";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/";
const twitter = "https://x.com/ChawdaPraj39877";
function XBrandIcon() {
  return <svg className="x-brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.155-6.817-6.022 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}

const projects = [
  {
    title: "AutoHawk",
    category: "Cybersecurity",
    description:
      "Automated threat intelligence and reconnaissance platform for collecting, correlating, and analyzing security intelligence.",
    detail:
      "Analyzed 500+ endpoints across 30 high-risk domains, reducing manual effort by approximately 80% through 3+ integrated intelligence sources.",
    tags: ["Python", "Automation", "Threat Intelligence", "APIs"],
    status: "Research build",
    date: "2026",
    repo: process.env.NEXT_PUBLIC_AUTOHAWK_REPO ?? "https://github.com/brandy-build/Personal-OSINT-toool",
  },
  {
    title: "Orchestr_AI",
    category: "AI Engineering",
    description:
      "An AI-powered orchestration project exploring intelligent workflows, automation, and coordinated AI capabilities.",
    detail: "An experimental workspace for composing useful agentic workflows and evaluating how tools can cooperate safely.",
    tags: ["AI Agents", "LLM Applications", "Python"],
    status: "Exploring",
    date: "2026",
    repo: process.env.NEXT_PUBLIC_ORCHESTRAI_REPO ?? "https://github.com/brandy-build/Orchestr_AI",
  },
  {
    title: "AegisSOC",
    category: "Cybersecurity",
    description:
      "A security operations-oriented project exploring automated monitoring, investigation workflows, and intelligent incident analysis.",
    detail: "A focused experiment in turning security signals into explainable, actionable investigation context.",
    tags: ["Security Operations", "Automation", "AI"],
    status: "In progress",
    date: "2026",
    repo: process.env.NEXT_PUBLIC_AEGISSOC_REPO ?? "https://github.com/brandy-build/AegisSOC",
  },
  {
    title: "rtFusion AI",
    category: "Research",
    description: "Evidence-Aware Cyber Incident Correlation and Risk-Based Triage.",
    detail:
      "A project for correlating incident evidence, identifying relationships between events, and supporting risk-based triage. Shortlisted for the next phase; submitted October 15, 2026.",
    tags: ["AI", "Cybersecurity", "Risk Triage"],
    status: "Shortlisted",
    date: "October 15, 2026",
    repo: process.env.NEXT_PUBLIC_RTFUSION_REPO ?? "https://github.com/brandy-build/Prioritization-engine",
  },
  {
    title: "AGR Spices",
    category: "Engineering",
    description:
      "Full-stack e-commerce platform with product management, authentication, payment workflows, inventory reservation, alerts, and invoices.",
    detail:
      "Completed platform foundations include product management, authentication, inventory flows, and invoice generation. Payment and deployment integrations remain ongoing.",
    tags: ["Next.js", "React", "TypeScript", "Flask", "MongoDB", "AWS"],
    status: "Building",
    date: "2026",
    repo: process.env.NEXT_PUBLIC_AGR_SPICES_REPO ?? "https://github.com/brandy-build?tab=repositories",
  },
];

const skills = {
  Programming: ["Python", "C++", "JavaScript", "TypeScript", "Rust", "Java"],
  Cybersecurity: ["VAPT", "Web Application Security", "OWASP", "Burp Suite", "Nmap", "Linux", "Reconnaissance"],
  "Reverse Engineering": ["Ghidra", "Assembly fundamentals", "Windows Internals", "PE Analysis", "Debugging", "Static & Dynamic Analysis"],
  "AI & Machine Learning": ["AI/ML", "LLM Applications", "RAG", "AI Agents", "LangChain", "MCP", "CodeT5"],
  "Development & Infrastructure": ["React", "Next.js", "Flask", "Node.js", "REST APIs", "AWS", "Docker", "Git", "CI/CD", "Kafka"],
};

const repositories = [
  { name: "AutoHawk", stars: "—", forks: "—", description: "Automated threat intelligence and reconnaissance for security teams.", tags: ["Python", "APIs", "Threat Intelligence"], repo: process.env.NEXT_PUBLIC_AUTOHAWK_REPO ?? "https://github.com/brandy-build/Personal-OSINT-toool" },
  { name: "Orchestr_AI", stars: "—", forks: "—", description: "Experiments in coordinated AI workflows and practical agentic systems.", tags: ["Python", "AI Agents", "Automation"], repo: process.env.NEXT_PUBLIC_ORCHESTRAI_REPO ?? "https://github.com/brandy-build/Orchestr_AI" },
];

const publications = [
  { title: "Evidence-Aware Cyber Incident Correlation and Risk-Based Triage", venue: "AI & Cybersecurity", date: "October 15, 2026", status: "Shortlisted", summary: "A project exploring incident evidence correlation, relationship discovery, and risk-based triage." },
  { title: "Firmware Buffer Overflow Vulnerabilities in Embedded Devices", venue: "Ongoing investigation", date: "2026", status: "Research interest", summary: "Investigating defensive techniques and vulnerability patterns in embedded systems." },
  { title: "AI-Assisted Threat Intelligence", venue: "Future research", date: "2026", status: "Exploring", summary: "Exploring how intelligent systems can improve collection, analysis, and prioritization of security intelligence." },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState("Home");
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const filteredProjects = useMemo(
    () => (projectFilter === "All" ? projects : projects.filter((project) => project.category === projectFilter)),
    [projectFilter],
  );

  return (
    <div className={dark ? "site dark" : "site"}>
      <header className="site-header">
        <a className="logo" href="#top" onClick={() => setMobileOpen(false)}>PRAJWAL<span> / </span>CHAWDA</a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={mobileOpen ? "nav open" : "nav"} aria-label="Section navigation">
          {nav.map(({ label, href, icon: Icon }) => (
            <a className={activeNav === label ? "active" : ""} key={label} href={href} onClick={() => { setMobileOpen(false); setActiveNav(label); }}><Icon size={15} /> <span>{label}</span></a>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          <a href="#top" onClick={() => { setMobileOpen(false); setActiveNav("Menu"); }}><Command size={15} /> <span>Menu</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <h1 className="identity">Prajwal L Chawda</h1>
            <p className="role">Cybersecurity Researcher · Security Engineer · AI Enthusiast</p>
            <p className="eyebrow">INDIA · COMPUTER SCIENCE · SECURITY & AI</p>
            <div className="social-row">
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={16} strokeWidth={2} /></a>
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={14} /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
              <a href={twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter"><XBrandIcon /></a>
              <a href={`${basePath}/resume.pdf`} download aria-label="Download CV">CV</a>
            </div>
            <p className="lede">I&apos;m a Computer Science graduate focused on cybersecurity, security research, and AI-driven engineering. I build tools, investigate vulnerabilities, explore reverse engineering, and experiment with intelligent systems that solve real-world technical problems.</p>
          </div>
          <aside className="hero-aside">
            <Image className="profile-image" src={`${basePath}/profile.jpg`} alt="Portrait of Prajwal L Chawda" width={132} height={132} priority />
          </aside>
        </section>

        <section id="about" className="shell section">
          <SectionHeading eyebrow="01 / About" title="Curious about how systems fail — and how to make them stronger." />
          <div className="two-column">
            <div className="body-copy"><p>I&apos;m interested in understanding technology at a deeper level — from how applications are secured and vulnerabilities are discovered to how malware behaves and how intelligent systems can improve security workflows.</p><p>My background combines computer science, cybersecurity, software engineering, and experimentation with AI-powered applications. I enjoy working through difficult technical challenges, understanding system internals, developing practical tools, and documenting what I learn.</p><p>My long-term direction is security research, particularly malware analysis, reverse engineering, and intelligent cybersecurity systems.</p></div>
            <div><p className="small-label">Areas of interest</p><div className="tag-cloud">{["Application Security", "Vulnerability Research", "Malware Analysis", "Reverse Engineering", "Threat Intelligence", "AI Security", "Security Automation", "AI Agents", "Machine Learning", "Software Engineering"].map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>
          </div>
        </section>

        <section id="experience" className="shell section ruled">
          <SectionHeading eyebrow="Work Experience" title="Learning through practical security work." />
          <div className="experience-list">
            {[
              { mark: "F", company: "Flagz0nFire", role: "Reverse Engineering Challenge Creator", date: "Current", location: "Flagz0nFire Organization", description: "Create and contribute to advanced reverse-engineering challenges for cybersecurity learners and CTF participants.", tags: ["Reverse Engineering", "CTF", "Challenge Creation"] },
              { mark: "AC", company: "Agamya Cyber Tech", role: "Ethical Hacking Trainer — 25-Day Offline Workshop", date: "Aug 11 – 26, 2026", location: "SSIT Tumakuru, Karnataka", description: "Delivered hands-on ethical hacking training covering networking, web application security, reconnaissance, OWASP Top 10, vulnerability assessment, and security tooling.", tags: ["Ethical Hacking", "OWASP", "VAPT", "Training"] },
              { mark: "AC", company: "Agamya Cyber Tech", role: "Junior Security Analyst", date: "Nov 2025", location: "Bangalore", description: "Conducted web application vulnerability assessments and bug hunting across multiple targets, helping identify and remediate critical security flaws.", tags: ["Web Security", "Bug Hunting", "Vulnerability Assessment"] },
              { mark: "H", company: "Hackify", role: "Cybersecurity and Penetration Testing Intern", date: "Feb – Mar, 2025", location: "Bengaluru", description: "Executed structured ethical-hacking exercises covering OWASP Top 10, vulnerability assessment, penetration testing, and security report writing.", tags: ["Penetration Testing", "OWASP", "Security Reports"] },
            ].map((experience) => <article className="experience-item" key={`${experience.company}-${experience.role}`}><div className="experience-mark"><span className="experience-icon">{experience.mark}</span></div><div><div className="card-heading"><h3>{experience.company}</h3><span className="date">{experience.date}</span></div><strong className="bold-role">{experience.role}</strong><p className="muted">{experience.location}</p><p>{experience.description}</p><div className="tag-cloud compact">{experience.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}
          </div>
        </section>

        <section id="opensource" className="shell section">
          <div className="section-title-row"><div><span className="eyebrow">Open Source</span><h2>Selected repositories and engineering experiments.</h2></div><span className="stat-pill">★ Building in public</span></div>
          <div className="repo-grid">{repositories.map((repository) => <article className="repo-card" key={repository.name}><div className="card-heading"><h3>{repository.name}</h3><span className="repo-stats">★ {repository.stars}　⑂ {repository.forks}</span></div><p>{repository.description}</p><div className="tag-cloud compact">{repository.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="repo-link">{repository.repo ? <a href={repository.repo} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={13} /></a> : <span>Repository link to be configured</span>}</div></article>)}</div>
        </section>

        <section id="toolkit" className="shell section ruled">
          <SectionHeading eyebrow="03 / Toolkit" title="Tools I use to turn questions into working systems." />
          <div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="tag-cloud compact">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section id="projects" className="shell section ruled">
          <SectionHeading eyebrow="04 / Selected projects" title="Practical experiments with a research mindset." />
          <div className="filters" role="group" aria-label="Filter projects">{categories.map((category) => <button className={projectFilter === category ? "filter active" : "filter"} onClick={() => setProjectFilter(category)} key={category}>{category}</button>)}</div>
          <div className="project-list">{filteredProjects.map((project, index) => <article className="project-card" key={project.title}><div className="project-index">0{index + 1}</div><div className="project-content"><div className="project-top"><span className="eyebrow">{project.category}</span><span className="status">{project.date}</span></div><h3 className="project-title">{project.title}</h3><p>{project.description}</p>{expanded === project.title && <p className="detail">{project.detail}</p>}<div className="project-bottom"><div className="tag-cloud compact">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-actions">{project.repo ? <a className="icon-action" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`}><Github size={14} /></a> : <span className="icon-action disabled" aria-label="Repository link not configured"><Github size={14} /></span>}<button className="text-button" onClick={() => setExpanded(expanded === project.title ? null : project.title)}>{expanded === project.title ? "Show less" : "Read more"} <ChevronDown className={expanded === project.title ? "rotated" : ""} size={15} /></button></div></div></div></article>)}</div>
        </section>

        <section id="research" className="shell section ruled">
          <SectionHeading eyebrow="Publications & Research" title="Questions I want to spend more time with." />
          <div className="publication-list">{publications.map((publication) => <article className="publication-card" key={publication.title}><div className="card-heading"><h3>{publication.title}</h3><span className="date">{publication.date}</span></div><p className="muted">{publication.venue} · {publication.status}</p><p>{publication.summary}</p><div className="tag-cloud compact"><span className="tag">Research</span><span className="tag">{publication.status}</span></div></article>)}</div>
          <div className="research-grid">{["Firmware buffer overflow vulnerabilities in embedded devices", "Malware analysis and reverse engineering", "AI-assisted threat intelligence", "Evidence-aware cybersecurity systems", "AI security and security automation"].map((item, index) => <div className="research-card" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Ongoing investigation / future research interest</p></div>)}</div>
        </section>

        <section id="news" className="shell section ruled">
          <SectionHeading eyebrow="News" title="Latest updates and highlights." />
          <div className="news-list">{[["October 2026", "rtFusion AI shortlisted for the next phase", "Evidence-aware cyber incident correlation and risk-based triage."], ["2026", "Placed 12th in GenCys CTF Finals", "A competitive security milestone built through practical problem solving."], ["2026", "Placed 20th in CyberHX CTF Finals", "Continued hands-on learning through CTF challenges."]].map(([date, title, summary]) => <article className="news-card" key={title}><div className="card-heading"><h3>{title}</h3><span className="date">{date}</span></div><p>{summary}</p><div className="tag-cloud compact"><span className="tag">Update</span><span className="tag">Cybersecurity</span></div></article>)}</div>
        </section>

        <section id="writing" className="shell section ruled">
          <SectionHeading eyebrow="06 / Writing & technical notes" title="Work in public, carefully." />
          <div className="writing-grid">{["CTF writeups", "Malware analysis notes", "AI + cybersecurity engineering"].map((item) => <article className="writing-card" key={item}><span className="eyebrow">Coming soon · Draft</span><h3>{item}</h3><p>Notes, experiments, and lessons learned will live here.</p><ArrowUpRight size={18} /></article>)}</div>
        </section>

        <section id="milestones" className="shell section ruled">
          <SectionHeading eyebrow="07 / Milestones" title="A few signals along the way." />
          <div className="timeline">{[["2026", "12th place", "GenCys CTF Finals"], ["2026", "20th place", "CyberHX CTF Finals"], ["2026", "Participant", "Smart India Hackathon"], ["2026", "Participant", "Intel AI Hackathon"]].map(([year, result, event]) => <div className="timeline-item" key={event}><span className="date">{year}</span><div><h3>{result} <span>— {event}</span></h3><p className="muted">Competition / hackathon milestone</p></div></div>)}</div>
        </section>

        <section id="education" className="shell section ruled">
          <SectionHeading eyebrow="08 / Education" title="Education" />
          <div className="education"><div className="education-heading"><h3>Garden City University</h3><span>2022 – 2026</span></div><p className="education-degree">Bachelor&apos;s Degree in Computer Science (Cybersecurity)</p></div>
        </section>

      </main>
    </div>
  );
}
