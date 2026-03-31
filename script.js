// ===== RENDER DYNAMIC DATA =====
function renderPortfolioData() {
  if (typeof portfolioData === 'undefined') {
    console.error("portfolioData is not defined. Ensure data.js is loaded before script.js");
    return;
  }

  // 1. Render About Stats
  const statsContainer = document.getElementById('aboutStatsContainer');
  if (statsContainer) {
    statsContainer.innerHTML = portfolioData.aboutStats.map(stat => `
      <div class="stat-card glass-card">
        <div class="stat-number">${stat.number}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  // 2. Render About Highlights
  const highlightsContainer = document.getElementById('aboutHighlightsContainer');
  if (highlightsContainer) {
    highlightsContainer.innerHTML = portfolioData.aboutHighlights.map(hl => `
      <div class="highlight-card glass-card">
        <div class="highlight-icon">
          <i data-lucide="${hl.icon}" style="width:24px;height:24px"></i>
        </div>
        <div>
          <h3 class="highlight-title">${hl.title}</h3>
          <p class="highlight-desc">${hl.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 3. Render Experience
  const expContainer = document.getElementById('experienceContainer');
  if (expContainer) {
    expContainer.innerHTML = portfolioData.experience.map(exp => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass-card">
          <span class="timeline-date">
            <i data-lucide="calendar" style="width:14px;height:14px"></i>
            ${exp.date}
          </span>
          <h3 class="timeline-role">${exp.role}</h3>
          <p class="timeline-company">
            ${exp.company}
            <span class="location-tag">
              <i data-lucide="map-pin" style="width:12px;height:12px"></i>
              ${exp.location}
            </span>
          </p>
          <p class="timeline-desc">${exp.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 4. Render Projects
  const projectsContainer = document.getElementById('projectsContainer');
  if (projectsContainer) {
    projectsContainer.innerHTML = portfolioData.projects.map((proj, i) => `
      <div class="project-card glass-card reveal" style="--i:${i}">
        <div class="project-icon">
          <i data-lucide="${proj.icon}" style="width:28px;height:28px"></i>
        </div>
        <h3 class="project-name">${proj.name}</h3>
        <p class="project-desc">${proj.desc}</p>
        ${proj.users ? `
        <div class="project-users">
          <i data-lucide="users" style="width:16px;height:16px"></i>
          ${proj.users}
        </div>` : ''}
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${proj.links.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener" class="project-store-link">
              ${link.icon === 'linkedin' 
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> ${link.text}`
                : `<i data-lucide="${link.icon}" style="width:14px;height:14px"></i> ${link.text}`
              }
            </a>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. Render Skills
  const skillsContainer = document.getElementById('skillsContainer');
  if (skillsContainer) {
    skillsContainer.innerHTML = portfolioData.skills.map((cat, i) => `
      <div class="skill-category glass-card reveal" style="--i:${i}">
        <div class="category-header">
          <div class="category-icon">
            <i data-lucide="${cat.icon}" style="width:22px;height:22px"></i>
          </div>
          <h3 class="category-title">${cat.category}</h3>
        </div>
        <div class="skill-list">
          ${cat.items.map(skill => `<span class="skill-item"><span class="skill-dot"></span>${skill}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // 6. Render Education
  const eduContainer = document.getElementById('educationContainer');
  if (eduContainer && portfolioData.education) {
    const edu = portfolioData.education;
    eduContainer.innerHTML = `
      <div class="education-card glass-card reveal">
        <div class="edu-top">
          <div class="edu-icon">
            <i data-lucide="graduation-cap" style="width:30px;height:30px"></i>
          </div>
          <div>
            <h3 class="edu-degree">${edu.degree}</h3>
            <p class="edu-university">${edu.university}</p>
            <p class="edu-date">${edu.date}</p>
          </div>
        </div>
        <div class="edu-details">
          <div class="edu-detail">
            <span class="edu-detail-icon">
              <i data-lucide="award" style="width:20px;height:20px"></i>
            </span>
            <div>
              <p class="edu-detail-label">Grade</p>
              <p class="edu-detail-value">${edu.grade}</p>
            </div>
          </div>
          <div class="edu-detail">
            <span class="edu-detail-icon">
              <i data-lucide="book-open" style="width:20px;height:20px"></i>
            </span>
            <div>
              <p class="edu-detail-label">Department</p>
              <p class="edu-detail-value">${edu.department}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 7. Render Certificates
  const certContainer = document.getElementById('certificatesContainer');
  if (certContainer) {
    certContainer.innerHTML = portfolioData.certificates.map((cert, i) => `
      <a href="${cert.url}" target="_blank" rel="noopener" class="cert-card glass-card reveal" ${i > 0 ? `style="transition-delay: ${i * 0.1}s"` : ''}>
        <div class="cert-icon">
          <i data-lucide="award" style="width:24px;height:24px"></i>
        </div>
        <div class="cert-content">
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
          <span class="cert-date">${cert.date}</span>
          ${cert.extra ? `<p style="font-size: 0.8rem; color: var(--accent-green); margin-top: 4px; font-weight: 500;">${cert.extra}</p>` : ''}
        </div>
      </a>
    `).join('');
  }

  // 8. Render Courses
  const coursesContainer = document.getElementById('coursesContainer');
  if (coursesContainer) {
    coursesContainer.innerHTML = portfolioData.courses.map((course, i) => `
      <a href="${course.url}" target="_blank" rel="noopener" class="course-card glass-card reveal" ${i > 0 ? `style="transition-delay: ${i * 0.1}s"` : ''}>
        <div class="course-icon">
          <i data-lucide="play-circle" style="width:20px;height:20px"></i>
        </div>
        <div class="course-content">
          <h4 class="course-title">${course.title}</h4>
          <p class="course-author">${course.author}</p>
        </div>
      </a>
    `).join('');
  }
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioData();
  
  // Create icons after DOM is rendered
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  initTypedText();
  initScrollAnimations();
  initNavbar();
  initMobileNav();
  initBackToTop();
  initContactForm();
  initParticles();
});

// ===== TYPED TEXT ANIMATION =====
function initTypedText() {
  const typedElement = document.getElementById('typedText');
  if (!typedElement) return;

  const phrases = [
    'Mid-level Flutter Developer',
    'Mobile App Specialist',
    'Clean Architecture Advocate',
    'Cross-Platform Engineer',
    'UI/UX Enthusiast'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Don't unobserve so elements can re-animate if needed
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;

    // Active link highlighting
    updateActiveNav(sections, navLinks);
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile nav
        closeMobileNav();
      }
    });
  });
}

function updateActiveNav(sections, navLinks) {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ===== MOBILE NAVIGATION =====
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeMobileNav);
}

function closeMobileNav() {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  toggle.classList.remove('active');
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== CONTACT FORM (EmailJS) =====
// -------------------------------------------------------
// HOW TO SET UP EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (e.g. Gmail) → copy the SERVICE ID
// 3. Create an Email Template with these variables:
//    {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Set the "To Email" in the template to your email
//    Copy the TEMPLATE ID
// 4. Go to Account → General → copy your PUBLIC KEY
// 5. Replace the 3 placeholders below with your actual values
// -------------------------------------------------------

const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // ← Replace with your Public Key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';     // ← Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // ← Replace with your Template ID

function initContactForm() {
  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn-submit');
    const originalText = btn.innerHTML;

    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      // Fallback to mailto if EmailJS is not configured
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const mailtoUrl = `mailto:ahmednaser.eng@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailtoUrl;
      return;
    }

    // Show loading state
    btn.disabled = true;
    btn.innerHTML = '<svg style="width:18px;height:18px;animation:spin 1s linear infinite" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Sending...';
    btn.style.opacity = '0.8';

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);

      // Success
      btn.innerHTML = '<svg style="width:18px;height:18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
      btn.style.opacity = '1';
      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
        lucide.createIcons();
      }, 3000);
    } catch (error) {
      // Error
      console.error('EmailJS Error:', error);
      btn.innerHTML = '<svg style="width:18px;height:18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Failed to send';
      btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      btn.style.opacity = '1';

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
        lucide.createIcons();
      }, 3000);
    }
  });
}

// ===== PARTICLE BACKGROUND =====
function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particleCanvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    opacity: 0.4;
  `;
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouse = { x: null, y: null };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Track mouse
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x -= dx * force * 0.01;
          this.y -= dy * force * 0.01;
        }
      }

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Create particles - fewer on mobile for performance
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 30 : 60;
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const opacity = (1 - dist / 150) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

// ===== SMOOTH SCROLL for logo =====
document.querySelector('.nav-logo')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
