import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Blocks,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Facebook,
  Image,
  Instagram,
  ListChecks,
  Linkedin,
  LayoutTemplate,
  Lightbulb,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  PanelsTopLeft,
  PenTool,
  Phone,
  RefreshCw,
  Rocket,
  Share2,
  ShoppingBag,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import ismailPortrait from "./assets/ismail.png";
import {
  contactDetails,
  milestones,
  navigation,
  projects,
  services,
  skills,
  workflow,
} from "./data.js";

const iconMap = {
  code: Code2,
  megaphone: Megaphone,
  video: Video,
  pen: PenTool,
  share: Share2,
  store: ShoppingBag,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  image: Image,
};

const socialIconMap = {
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
};

const workflowIconMap = {
  discover: Compass,
  plan: ListChecks,
  design: PenTool,
  build: Code2,
  launch: Rocket,
  improve: RefreshCw,
};

function SectionHeading({ eyebrow, title, children, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "section-heading-center" : ""}`}>
      <span className="eyebrow">
        <Asterisk size={14} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ProjectPreview({ project }) {
  if (project.kind === "marketplace") {
    return (
      <div className="project-preview preview-marketplace" aria-label="AllyMart project preview">
        <div className="preview-browser">
          <div className="browser-chrome">
            <span />
            <span />
            <span />
            <div className="browser-address">allymart.pk</div>
          </div>
          <div className="marketplace-screen">
            <div className="marketplace-topline">
              <span className="mock-brand">
                <ShoppingBag size={15} /> allymart
              </span>
              <span className="mock-search">Search products and categories</span>
              <span className="mock-bag">
                <ShoppingBag size={14} />
              </span>
            </div>
            <div className="marketplace-hero">
              <div>
                <span className="mock-kicker">A better way to shop</span>
                <strong>
                  Find your
                  <br />
                  everyday favourites.
                </strong>
                <span className="mock-cta">
                  Discover more <ArrowRight size={12} />
                </span>
              </div>
              <div className="product-orbit">
                <div className="product-card product-one">
                  <span>✳</span>
                </div>
                <div className="product-card product-two">
                  <span>◌</span>
                </div>
                <div className="product-card product-three">
                  <span>◒</span>
                </div>
              </div>
            </div>
            <div className="mock-category-row">
              <span>Home &amp; living</span>
              <span>Fashion</span>
              <span>Electronics</span>
              <span>More to explore</span>
            </div>
          </div>
        </div>
        <span className="preview-caption">Illustrative preview · marketplace</span>
      </div>
    );
  }

  return (
    <div className="project-preview preview-platform" aria-label="UltraSolix project preview">
      <div className="preview-browser">
        <div className="browser-chrome">
          <span />
          <span />
          <span />
          <div className="browser-address">ultrasolix.com</div>
        </div>
        <div className="platform-screen">
          <div className="platform-sidebar">
            <div className="platform-mark">
              <Blocks size={16} />
            </div>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="platform-main">
            <div className="platform-nav">
              <span>ULTRASOLIX</span>
              <span>Platform overview</span>
              <span className="platform-user">U</span>
            </div>
            <div className="platform-title">
              <span className="mock-kicker">Connected commerce</span>
              <strong>{project.label}</strong>
              <span>{project.detail}</span>
            </div>
            <div className="platform-grid">
              <div className="platform-panel panel-large">
                <span>Product &amp; promotion workflows</span>
                <div className="chart-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="platform-panel panel-small">
                <span>Payment flow</span>
                <div className="payment-icon">
                  <Check size={18} />
                </div>
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="preview-caption">Illustrative preview · digital platform</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={`project-showcase project-showcase-${Number(project.number)}`}
      data-reveal
      style={{ "--reveal-delay": `${Number(project.number) * 100}ms` }}
    >
      <a
        className="project-visual-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} website`}
      >
        <ProjectPreview project={project} />
        <span className="project-open-icon">
          <ArrowUpRight size={19} />
        </span>
      </a>
      <div className="project-info">
        <div className="project-copy">
          <div className="project-meta">
            <span>{project.category}</span>
            <span>/{project.number}</span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <a className="button project-visit" href={project.url} target="_blank" rel="noopener noreferrer">
          Visit Website <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const year = new Date().getFullYear();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      revealItems.forEach((item) => item.setAttribute("data-revealed", "true"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const fields = new FormData(form);
    const name = fields.get("name");
    const email = fields.get("email");
    const projectType = fields.get("projectType");
    const message = fields.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry: ${projectType}`);
    const body = encodeURIComponent(
      `Hi Ismail Malik,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}\nProject type: ${projectType}`,
    );

    setFormMessage("Your email app should open with your message ready. It has not been sent by this website.");
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#home" aria-label="Ismail Malik home">
            ISMAIL MALIK<span>®</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <div
          className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={17} />
              </a>
            ))}
          </nav>
          <p>
            Have a project in mind? <a href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s connect <ArrowUpRight size={14} /></a>
          </p>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              <span>{contactDetails.name}</span>
              <span className="availability-line" />
              <span>{contactDetails.title}</span>
            </div>

            <h1>
              Building digital experiences that{" "}
              <span>stand out.</span>
            </h1>

            <p className="hero-intro">
              I&apos;m {contactDetails.name}, a {contactDetails.title} interested in web
              development, digital marketing, and creative content. I build digital experiences, edit videos, create visual
              content, and continuously improve my skills through practical projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Let&apos;s connect <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-note">
              <span>01 — 02</span>
              <span>Featured work</span>
              <ArrowDown size={14} />
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract gradient illustration">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <span>i.</span>
            </div>
            <div className="art-asterisk">
              <Asterisk size={29} />
            </div>
            <div className="art-tag tag-web">
              <Code2 size={15} /> WEB
            </div>
            <div className="art-tag tag-create">
              <Sparkles size={15} /> CREATE
            </div>
            <div className="art-small-label">
              Curiosity
              <br />
              into craft.
            </div>
            <span className="art-index">DIGITAL / 001</span>
          </div>

          <div className="hero-bottom">
            <span>Curious by nature. Creative by practice.</span>
            <a href="#about">
              Scroll to explore <ChevronDown size={14} />
            </a>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="projects-heading-row" data-reveal>
            <SectionHeading eyebrow="Selected work" title={<>A couple of projects<br />out in the world.</>} />
            <p className="section-aside">Real websites, real ideas. Explore the live projects.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="project-footnote">
            <span>PREVIEWS ARE EDITABLE COMPONENTS</span>
            <span>02 FEATURED PROJECTS</span>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-index">
            <span className="eyebrow">
              <Asterisk size={14} /> A little about me
            </span>
            <span className="index-number">
              01<span>/</span>04
            </span>
          </div>

          <div className="about-content" data-reveal>
            <h2>
              Creative thinking,
              <br />
              practical <span>building.</span>
            </h2>

            <div className="about-lower">
              <p>
                I&apos;m {contactDetails.name} — a {contactDetails.title} drawn to the
                intersection of technology, visuals, and ideas. I enjoy making things for the web, shaping content, and
                figuring out how digital experiences can work better for people.
              </p>
              <p>
                My approach is hands-on: learn by making, pay attention to the details, and keep
                improving with every project. From a website to a social creative, I like turning a
                rough idea into something clear and considered.
              </p>
            </div>

            <a className="text-link about-link" href="#skills">
              A little more about what I do <ArrowDownRight size={16} />
            </a>
          </div>

          <div className="about-mark" aria-hidden="true">
            <span>IS</span>
            <Asterisk size={25} />
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="skills-heading" data-reveal>
            <SectionHeading eyebrow="What I work with" title="A growing toolkit." />
            <p>
              Different skills, one curious mindset.
              <br />
              Always learning, always making.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon];
              return (
                <article className="skill-card" key={skill.name} data-reveal>
                  <div className="skill-top">
                    <span>0{index + 1}</span>
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="services-heading" data-reveal>
            <SectionHeading eyebrow="Ways I can help" title={<>Good ideas deserve<br />good execution.</>} />
            <p>
              Thoughtful support from first idea to finished creative. Every project is different,
              so the details are shaped together.
            </p>
          </div>

          <div className="service-list">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <a className="service-row" href="#contact" key={service.name} data-reveal>
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="service-copy">
                    <strong>{service.name}</strong>
                    <small>{service.description}</small>
                  </span>
                  <ArrowUpRight className="service-arrow" size={19} />
                </a>
              );
            })}
          </div>
        </section>

        <section className="workflow-section section-wrap" aria-labelledby="workflow-heading">
          <div className="workflow-intro">
            <div className="workflow-heading" data-reveal>
              <span className="eyebrow">
                <Asterisk size={14} /> A creative process
              </span>
              <h2 id="workflow-heading">
                From idea <span>to done.</span>
              </h2>
              <p>
                Every finished experience begins with a question. Here&apos;s how an idea takes shape,
                step by step.
              </p>
            </div>

            <div className="workflow-core" data-reveal aria-hidden="true">
              <div className="workflow-core-orbit workflow-core-orbit-one" />
              <div className="workflow-core-orbit workflow-core-orbit-two" />
              <div className="workflow-core-cube">
                <span className="workflow-cube-face workflow-cube-face-front"><Lightbulb size={24} /></span>
                <span className="workflow-cube-face workflow-cube-face-side"><PanelsTopLeft size={22} /></span>
                <span className="workflow-cube-face workflow-cube-face-top"><Blocks size={20} /></span>
              </div>
              <span className="workflow-core-label workflow-core-label-one">IDEA / 01</span>
              <span className="workflow-core-label workflow-core-label-two">MADE REAL</span>
              <span className="workflow-core-spark workflow-core-spark-one" />
              <span className="workflow-core-spark workflow-core-spark-two" />
            </div>
          </div>

          <div className="workflow-journey-shell">
            <svg className="workflow-route" viewBox="0 0 1000 320" preserveAspectRatio="none" aria-hidden="true">
              <path className="workflow-route-base" d="M155 56 C270 27 385 27 500 56 S730 85 845 56 C910 95 910 214 845 264 C730 293 615 293 500 264 S270 235 155 264" />
              <path className="workflow-route-segment" data-reveal style={{ "--reveal-delay": "0ms" }} d="M155 56 C270 27 385 27 500 56" pathLength="1" />
              <path className="workflow-route-segment" data-reveal style={{ "--reveal-delay": "100ms" }} d="M500 56 C615 85 730 85 845 56" pathLength="1" />
              <path className="workflow-route-segment" data-reveal style={{ "--reveal-delay": "200ms" }} d="M845 56 C910 95 910 214 845 264" pathLength="1" />
              <path className="workflow-route-segment" data-reveal style={{ "--reveal-delay": "300ms" }} d="M845 264 C730 293 615 293 500 264" pathLength="1" />
              <path className="workflow-route-segment" data-reveal style={{ "--reveal-delay": "400ms" }} d="M500 264 C385 235 270 235 155 264" pathLength="1" />
            </svg>

            <ol className="workflow-journey" aria-label="Six stages from idea to finished digital product">
              {workflow.map((step, index) => {
                const Icon = workflowIconMap[step.visual];
                return (
                  <li
                    className={`workflow-stage workflow-stage-${index + 1}`}
                    key={step.name}
                    data-reveal
                    style={{ "--reveal-delay": `${index * 90}ms` }}
                  >
                    <div className={`workflow-stage-visual workflow-visual-${step.visual}`} aria-hidden="true">
                      <span className="workflow-visual-halo" />
                      <span className="workflow-visual-orbit" />
                      <span className="workflow-visual-symbol"><Icon size={23} strokeWidth={1.45} /></span>
                      <span className="workflow-visual-detail">
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                    <div className="workflow-stage-copy">
                      <span className="workflow-stage-index">0{index + 1} <span> / 06</span></span>
                      <h3>{step.name}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <div className="journey-heading" data-reveal>
            <SectionHeading eyebrow="Still becoming" title="The journey so far." />
            <p>
              No fixed path, just curiosity, practice, and a willingness to keep learning.
            </p>
          </div>

          <div className="milestones">
            {milestones.map((milestone, index) => (
              <article className="milestone" key={milestone.title} data-reveal>
                <span className="milestone-number">0{index + 1}</span>
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.text}</p>
                </div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-form-panel" data-reveal>
            <div className="contact-heading">
              <span className="eyebrow">
                <Asterisk size={14} /> Have something in mind?
              </span>
              <h2>
                Let&apos;s Build
                <br />
                Something Great
                <br />
                <span>Together.</span>
              </h2>
              <p>Have an idea, a project, or just want to connect? Tell me a little about it and let&apos;s start a conversation.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">
                  Your name <span>*</span>
                  <input id="name" name="name" autoComplete="name" placeholder="Your name" required />
                </label>

                <label htmlFor="email">
                  Email address <span>*</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    required
                  />
                </label>
              </div>

              <label htmlFor="projectType">
                What do you need help with? <span>*</span>
                <select id="projectType" name="projectType" defaultValue="" required>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>Website Development</option>
                  <option>Video Editing</option>
                  <option>Meta Ads Support</option>
                  <option>Social Media Creatives</option>
                  <option>Something else</option>
                </select>
              </label>

              <label htmlFor="message">
                A little about your project <span>*</span>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="What are you thinking about?"
                  required
                />
              </label>

              <div className="form-bottom">
                <button className="button button-primary" type="submit">
                  Prepare email <ArrowUpRight size={17} />
                </button>
                <span>
                  Your email app opens — no message is sent by this site.
                </span>
              </div>

              <p className="form-message" aria-live="polite">
                {formMessage}
              </p>
            </form>
          </div>

          <aside className="contact-profile" data-reveal style={{ "--reveal-delay": "140ms" }} aria-label="Ismail Malik's profile and contact details">
            <div className="contact-photo-frame">
              <img
                src={ismailPortrait}
                alt="Portrait of Ismail Malik"
                className="contact-portrait"
                loading="lazy"
                decoding="async"
              />
              <div className="photo-overlay" />
              <span className="photo-kicker"><span /> ISMAIL MALIK · DIGITAL CREATIVE</span>
              <span className="photo-index">01 / PERSONAL</span>
              <span className="photo-caption">Creating. Building. Learning.</span>
              <span className="photo-corner photo-corner-top" />
              <span className="photo-corner photo-corner-bottom" />
            </div>
            <div className="profile-details" data-reveal style={{ "--reveal-delay": "240ms" }}>
              <p className="profile-statement">
                Creating digital experiences, exploring new ideas, and turning creativity into practical solutions.
              </p>
              <div className="profile-contacts">
                <a className="profile-contact-row" href={`mailto:${contactDetails.email}`}>
                  <span className="profile-contact-icon"><Mail size={17} /></span>
                  <span className="profile-contact-copy">
                    <small>Email</small>
                    <strong>{contactDetails.email}</strong>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a className="profile-contact-row" href={`tel:${contactDetails.phone}`}>
                  <span className="profile-contact-icon"><Phone size={17} /></span>
                  <span className="profile-contact-copy">
                    <small>Phone</small>
                    <strong>{contactDetails.phone}</strong>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a className="profile-contact-row" href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <span className="profile-contact-icon"><MessageCircle size={17} /></span>
                  <span className="profile-contact-copy">
                    <small>WhatsApp</small>
                    <strong>Message Ismail</strong>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                {contactDetails.socials.filter((social) => social.href).map((social) => {
                  const SocialIcon = socialIconMap[social.label];
                  if (!SocialIcon) return null;
                  return (
                    <a className="profile-contact-row" key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                      <span className="profile-contact-icon"><SocialIcon size={17} /></span>
                      <span className="profile-contact-copy">
                        <small>{social.label}</small>
                        <strong>Open profile</strong>
                      </span>
                      <ArrowUpRight size={15} aria-label={`Open Ismail Malik's ${social.label} profile`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand">
            <a className="wordmark" href="#home">
              ISMAIL MALIK<span>®</span>
            </a>
            <p>Creating. Building. Learning.</p>
          </div>

          <div className="footer-nav">
            <span className="footer-label">Explore</span>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-social">
            <span className="footer-label">Find me online</span>
            {contactDetails.socials.filter((social) => social.href).map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
            <a href={`mailto:${contactDetails.email}`}>Email <ArrowUpRight size={13} /></a>
            <a href={`tel:${contactDetails.phone}`}>Phone <ArrowUpRight size={13} /></a>
            <a href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={13} /></a>
          </div>

          <a className="back-top" href="#home" aria-label="Back to top">
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="footer-bottom section-wrap">
          <span>© {year} Ismail Malik. Made with intention.</span>
          <span>Creating. Building. Learning.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
