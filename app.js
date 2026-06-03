const profile = {
  name: "Priyank Bhatt",
  title: "Professor & Former Program Coordinator",
  program: "Mobile Application Development Program",
  institution: "Fanshawe College",
  location: "Fanshawe College, London, ON",
  email: "p_bhatt2@fanshawec.ca",
  linkedin: "www.linkedin.com/in/priyank-bhatt",
  linkedinUrl: "https://www.linkedin.com/in/priyank-bhatt",
};

const profileImagePath = "./assets/profile-headshot.jpg";

const programAffiliations = [
  "Web Development and Internet App (IWD)",
  "Computer Programming and Analysis (CPA)",
  "Mobile Application Development (MAP)",
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Teaching Philosophy", "philosophy"],
  ["Experience", "experience"],
  ["Courses", "courses"],
  ["Teaching Strategies", "teaching-strategies"],
  ["Curriculum Development", "curriculum"],
  ["Student Engagement", "student-engagement"],
  ["Research & Professional Development", "research"],
  ["Leadership", "leadership"],
  ["Contact", "contact"],
];

const stats = [
  { value: 7, label: "Technology courses highlighted" },
  { value: 3, label: "Programs supported" },
  { value: 6, label: "Core teaching priorities" },
  { value: 100, suffix: "%", label: "Commitment to applied learning" },
];

const expertise = [
  "Web Development",
  "Mobile Application Development",
  "Cloud and Full-Stack Deployment",
  "Front-End Technologies",
  "Back-End Technologies",
  "Low Code No Code / Mendix",
  "React Native",
  "Angular and TypeScript",
];

const qualifications = [
  "Bachelor's in Computer Application",
  "Presently completing Master's degree in IT",
  "Specialized training in Full-Stack and Mobile Application Development",
  "Low Code No Code / Mendix Platform Certification",
  "Continuous participation in educational technology workshops",
];

const courses = [
  ["INFO-3170", "JavaScript 3", "TypeScript and Angular"],
  ["INFO-3173", "Mobile Development", "React Native"],
  ["INFO-5145", "Full Stack Deployment", "Cloud deployment and delivery"],
  ["INFO-3137", "JavaScript 4", "Advanced JavaScript development"],
  ["INFO-6127", "Enterprise Tech for Mobile Platforms", "Enterprise mobile platforms"],
  ["INFO-6121", "Programming for Mobile Development", "Mobile programming foundations"],
  ["INFO-6124", "Android Application Development", "Native Android development"],
  ["INFO-6128", "Mobile Web Development", "Responsive and mobile-first web applications"],
  ["INFO-3181", "Full Stack Programming", "Client, server, and database integration"],
  ["INFO-5144", "Mobile Development", "Applied mobile application development"],
];

const timeline = [
  ["Professional Profile", "Full-time IT Professor", "Experienced in front-end and back-end technologies, with specialization in web and mobile development and a strong commitment to student-centered learning."],
  ["Program Leadership", "Former Program Coordinator for Mobile Application Development", "Coordinated academic program activities, supported student advising and progression, and contributed to planning for the Mobile Application Development program."],
  ["Teaching Delivery", "Undergraduate and Postgraduate Technology Courses", "Delivered theory lectures, hands-on laboratories, live coding sessions, and applied industry projects across web, mobile, and full-stack development courses."],
  ["Curriculum Development", "Industry-Aligned Course Design", "Contributed to development of IWD, MAP, and LCNC program courses, with outcome-based modules, practical labs, and project-based assessments."],
];

const strategyCards = [
  ["users", "Active Learning", "Apply active learning techniques to increase participation and help learners connect concepts to practice."],
  ["access", "Universal Design for Learning", "Use multiple ways to engage with content, demonstrate understanding, and participate in learning activities."],
  ["cpu", "Technology Integration", "Bring industry practices, emerging technologies, cloud workflows, and applied tools into the learning experience."],
  ["check", "Assessment and Evaluation", "Design transparent outcome-based assessments using quizzes, labs, assignments, project evaluations, and formative feedback."],
];

const curriculumItems = [
  ["Curriculum", "Outcome-Based Course Modules", "Learning modules aligned with industry standards, accessibility expectations, and clear assessment outcomes."],
  ["Course Materials", "Applied Project Labs", "Hands-on technical labs that blend theory with software development practice in web, mobile, and deployment contexts."],
  ["Mentorship", "Capstone and Industry Projects", "Guided student teams through project development, presentations, communication, and professional collaboration."],
  ["Evaluation", "Assessment Rubrics", "Transparent rubrics and evaluation workflows that support academic integrity, consistent grading, and constructive feedback."],
];

const outcomes = [
  "Improve student confidence in technical problem-solving",
  "Support successful completion of industry-relevant projects",
  "Encourage development of communication and teamwork skills",
  "Enhance readiness for internships and employment",
  "Promote practical application of theoretical concepts",
  "Contribute to positive student learning experiences",
];

const condensedPhilosophy = [
  "I strive to create an inclusive and inspiring environment where students can challenge themselves to new levels of learning and engagement.",
  "I believe that the best learning comes from an environment that is positive, active and encouraging. I utilize Universal Design for Learning (UDL) strategies in the delivery of course content and in methods of assessment.",
  "I try to create learning environments and situations where students feel like they belong.",
];

const expandedPhilosophy = [
  "As a dedicated educator and Former Program Coordinator with experience in higher education and Information Technology, my teaching philosophy is rooted in inclusivity, student engagement, and continuous growth. I believe that every student possesses unique strengths and learning potential, and my role as an educator is to create an environment where students feel supported, motivated, and empowered to succeed.",
  "I strongly believe that effective learning occurs in environments that are open, positive, collaborative, and accessible. To support diverse learning needs, I incorporate Universal Design for Learning (UDL) principles into course delivery, instructional strategies, and assessment methods. By offering multiple ways for students to engage with content, demonstrate understanding, and participate in learning activities, I strive to create equitable opportunities for academic success.",
  "Inclusivity is central to my teaching practice. I work to establish classrooms where students feel respected, valued, and encouraged to contribute their ideas and experiences. Through active learning, collaborative projects, classroom discussions, and hands-on technical exercises, I aim to create meaningful learning experiences that strengthen both technical and professional skills.",
  "I also believe strongly in connecting academic concepts with real-world applications. By integrating industry practices, practical projects, and emerging technologies into the curriculum, I help students understand the relevance of their learning and prepare them for professional careers in technology and software development.",
  "As an educator, I continuously reflect on my teaching practices and seek opportunities for professional growth and instructional improvement. My goal is to foster a learning environment that not only supports academic achievement but also encourages curiosity, confidence, innovation, and lifelong learning.",
];

const iconPaths = {
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.1-7.1-1.4 1.4M6.3 17.7l-1.4 1.4m14.2 0-1.4-1.4M6.3 6.3 4.9 4.9"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  access: '<circle cx="12" cy="4" r="2"/><path d="M18 8H6m6 0v13m-4-7 4-3 4 3"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3m6-3v3M9 20v3m6-3v3M20 9h3m-3 6h3M1 9h3m-3 6h3"/>',
  check: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  map: '<path d="M20 10c0 4.5-8 12-8 12S4 14.5 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
};

function icon(name) {
  return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || ""}</svg>`;
}

function heading(eyebrow, title, copy = "") {
  return `<div class="section-heading reveal"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ""}</div>`;
}

function render() {
  document.getElementById("root").innerHTML = `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Priyank Bhatt home">
        <span class="brand-mark">PB</span><span><strong>Priyank Bhatt</strong><small>Teaching Portfolio</small></span>
      </a>
      <nav class="nav" aria-label="Primary navigation">${navItems.map(([label, id]) => `<a href="#${id}">${label}</a>`).join("")}</nav>
      <div class="header-actions">
        <button class="icon-button theme-toggle" type="button" aria-label="Toggle dark and light mode">${icon("moon")}</button>
        <button class="icon-button menu-button" type="button" aria-expanded="false" aria-label="Toggle menu">${icon("menu")}</button>
      </div>
    </header>
    <main>
      <section id="home" class="hero section">
        <div class="hero-content reveal">
          <p class="eyebrow">Higher Education | Information Technology | Applied Learning</p>
          <h1>${profile.name}</h1>
          <p class="hero-lead">Professor & Former Program Coordinator, Mobile Application Development Program, Fanshawe College. Supporting Internet Web Development, Computer Programming and Analysis, and Mobile Application Development through inclusive, applied, and industry-aligned teaching practices.</p>
          <div class="hero-actions">
            <a class="button primary" href="#philosophy">${icon("book")} View Teaching Philosophy</a>
            <a class="button secondary" href="#curriculum">${icon("folder")} Explore Teaching Portfolio</a>
          </div>
        </div>
        <div class="hero-visual reveal" aria-label="Professional academic profile">
          <div class="portrait-card headshot-card">
            <div class="portrait-orbit"></div>
            <div class="headshot-frame">
              <img class="profile-headshot" src="${profileImagePath}" alt="Professional headshot of Priyank Bhatt" loading="eager" decoding="async" fetchpriority="high" />
              <div class="portrait-initials image-fallback">PB</div>
            </div>
            <div class="hero-profile-meta">
              <h2>${profile.name}</h2>
              <p>${profile.title}</p>
              ${programAffiliations.map((program) => `<p class="profile-secondary">${program}</p>`).join("")}
              <p class="profile-secondary">${profile.location}</p>
            </div>
          </div>
          <div class="code-panel" aria-hidden="true"><span>const learning = inclusive + applied;</span><span>build(Web + Mobile + Cloud);</span><span>mentor(students).forIndustry();</span></div>
        </div>
      </section>

      <section id="about" class="section">
        ${heading("Professional Profile", "Academic technology education with industry relevance", "Full-time IT Professor, Former Program Coordinator for Mobile Application Development, and advocate for student-centered learning, applied education, and industry-aligned curriculum design.")}
        <div class="split-grid">
          <article class="panel reveal"><h3>Areas of Expertise</h3><div class="chip-grid">${expertise.map((item) => `<span class="chip">${item}</span>`).join("")}</div></article>
          <article class="panel reveal"><h3>Academic Qualifications and Certifications</h3><ul class="check-list">${qualifications.map((item) => `<li>${item}</li>`).join("")}</ul></article>
        </div>
        <div class="stats-grid reveal">${stats.map((stat) => `<div class="stat" data-value="${stat.value}" data-suffix="${stat.suffix || ""}"><strong>0${stat.suffix || ""}</strong><span>${stat.label}</span></div>`).join("")}</div>
      </section>

      <section id="philosophy" class="section band">
        ${heading("Teaching Philosophy", "Inclusive, active, supportive, and accessible learning", "A centerpiece statement for teaching practice, Universal Design for Learning, belonging, and career-ready applied education.")}
        <div class="philosophy-showcase reveal">
          <article class="condensed-philosophy">
            <p class="eyebrow">Condensed Philosophy</p>
            ${condensedPhilosophy.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </article>
          <article class="expanded-philosophy-card">
            <div class="scroll-fade top"></div>
            <div class="philosophy-scroll" tabindex="0" aria-label="Expanded teaching philosophy scrollable content">
              <p class="eyebrow">Expanded Teaching Philosophy</p>
              ${expandedPhilosophy.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
            <div class="scroll-fade bottom"></div>
          </article>
        </div>
      </section>

      <section id="experience" class="section">
        ${heading("Teaching Experience", "Experience, leadership, and classroom practice", "Delivered undergraduate and postgraduate technology courses, facilitated theory lectures and hands-on laboratory sessions, and guided students through capstone and applied industry projects.")}
        <div class="timeline">${timeline.map(([label, title, body], index) => `<article class="timeline-item reveal"><span class="timeline-number">${String(index + 1).padStart(2, "0")}</span><div><p class="eyebrow">${label}</p><h3>${title}</h3><p>${body}</p></div></article>`).join("")}</div>
      </section>

      <section id="courses" class="section band">
        ${heading("Courses Taught", "Web, mobile, cloud, and advanced development practice", "Courses span JavaScript, Angular, React Native, mobile platforms, full-stack deployment, and advanced software development practices.")}
        <div class="course-grid">${courses.map(([code, name, detail]) => `<article class="course-card reveal"><span>${code}</span><h3>${name}</h3><p>${detail}</p></article>`).join("")}</div>
      </section>

      <section id="teaching-strategies" class="section">
        ${heading("Teaching Strategies", "Active, accessible, and applied instruction", "Teaching practice emphasizes active learning, practical technical skill development, transparent assessment, UDL, and reflective improvement.")}
        <div class="card-grid">${strategyCards.map(([iconName, title, body]) => `<article class="practice-card reveal"><span class="card-icon">${icon(iconName)}</span><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>
      </section>

      <section id="curriculum" class="section band">
        ${heading("Curriculum Development", "Course materials designed for industry-aligned learning", "Contributed to IWD, MAP, and LCNC program courses with outcome-based modules, practical labs, project-based assessment, and accessible instructional clarity.")}
        <div class="artifact-grid">${curriculumItems.map(([tag, title, body]) => `<article class="artifact-card reveal"><span>${tag}</span><h3>${title}</h3><p>${body}</p></article>`).join("")}</div>
      </section>

      <section id="student-engagement" class="section">
        ${heading("Student Engagement", "Mentorship, confidence, and learner belonging", "Student support centers on timely academic guidance, project mentoring, peer collaboration, constructive feedback, and inclusive classrooms where learners feel they belong.")}
        <div class="two-column">
          <article class="panel reveal"><p class="eyebrow">Mentorship</p><h2>Support through projects and presentations</h2><p>Encourage active participation through questioning strategies, provide timely academic guidance, support students during project development and presentations, foster confidence through constructive feedback, and promote teamwork.</p></article>
          <article class="panel reveal"><p class="eyebrow">Student Success and Outcomes</p><ul class="check-list">${outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}</ul></article>
        </div>
      </section>

      <section id="research" class="section compact band">
        ${heading("Research & Professional Development", "Continuous instructional growth", "Professional learning, educational technology workshops, and reflective practice support ongoing improvement in teaching methods and learner experience.")}
        <div class="feedback-strip reveal"><p>"A reflective teaching practice supports continuous improvement, strengthens student confidence, and keeps the classroom connected to real-world expectations."</p></div>
      </section>

      <section id="leadership" class="section">
        ${heading("Leadership & Service", "Academic service and program contribution", "Leadership work includes former program coordination responsibilities, collaborating with faculty on curriculum enhancement, advising students, and contributing to departmental planning.")}
        <div class="two-column">
          <article class="panel reveal"><p class="eyebrow">Academic Service</p><h2>Former program coordination and faculty collaboration</h2><ul class="check-list"><li>Former Program Coordinator for Mobile Application Development</li><li>Coordinated academic program activities and planning for Mobile Application Development</li><li>Collaborate with faculty on curriculum enhancement initiatives</li><li>Support student advising and academic progression</li><li>Contribute to departmental meetings and strategic discussions</li></ul></article>
          <article class="panel reveal"><p class="eyebrow">Future Goals</p><h2>AI, hybrid learning, and industry partnerships</h2><ul class="check-list"><li>Expand integration of AI and emerging technologies in teaching</li><li>Develop advanced project-based learning opportunities</li><li>Strengthen industry-academic collaborations</li><li>Enhance online and hybrid learning experiences</li></ul></article>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="contact-card reveal">
          <div>
            <p class="eyebrow">Contact Information</p>
            <h2>${profile.name}</h2>
            <p>${profile.title}</p>
            <div class="contact-links">
              <div class="contact-item">${icon("map")}<span><strong>Institution</strong>${profile.location}</span></div>
              <a class="contact-item" href="mailto:${profile.email}">${icon("mail")}<span><strong>Email</strong>${profile.email}</span></a>
              <a class="contact-item" href="${profile.linkedinUrl}" target="_blank" rel="noopener noreferrer">${icon("linkedin")}<span><strong>LinkedIn</strong>${profile.linkedin}</span></a>
            </div>
          </div>
          <form class="contact-form" aria-label="Contact form"><label>Name<input type="text" name="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" placeholder="your.email@example.com" /></label><label>Message<textarea name="message" rows="4" placeholder="Share your message"></textarea></label><button class="button primary" type="submit">${icon("send")} Send Message</button></form>
        </div>
      </section>
    </main>
    <footer class="footer"><p>Copyright 2026 Priyank Bhatt. Teaching Portfolio.</p><div><a href="#home">Back to top</a><a href="#philosophy">Teaching Philosophy</a></div></footer>
    <button class="scroll-top" type="button" aria-label="Scroll to top">${icon("up")}</button>
  `;
}

function setupInteractions() {
  const loader = document.getElementById("loader");
  setTimeout(() => loader && loader.classList.add("hidden"), 350);

  const savedTheme = localStorage.getItem("theme");
  document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  const themeToggle = document.querySelector(".theme-toggle");
  const setThemeIcon = () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    themeToggle.innerHTML = icon(isDark ? "sun" : "moon");
  };
  setThemeIcon();
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setThemeIcon();
  });

  const headshot = document.querySelector(".profile-headshot");
  if (headshot) {
    headshot.addEventListener("load", () => headshot.closest(".headshot-frame").classList.add("image-loaded"));
    headshot.addEventListener("error", () => headshot.closest(".headshot-frame").classList.add("image-missing"));
  }

  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu-button");
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.innerHTML = icon(open ? "x" : "menu");
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.innerHTML = icon("menu");
  }));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

  const statsObserver = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".stat").forEach((node) => {
      const target = Number(node.dataset.value);
      const suffix = node.dataset.suffix;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 28));
      const tick = () => {
        current = Math.min(target, current + step);
        node.querySelector("strong").textContent = `${current}${suffix}`;
        if (current < target) requestAnimationFrame(tick);
      };
      tick();
    });
    statsObserver.disconnect();
  }, { threshold: 0.3 });
  const statsGrid = document.querySelector(".stats-grid");
  if (statsGrid) statsObserver.observe(statsGrid);

  const scrollTop = document.querySelector(".scroll-top");
  window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("show", window.scrollY > 600);
  });
  scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelector(".contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });
}

render();
setupInteractions();
