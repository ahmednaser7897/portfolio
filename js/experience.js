const experienceData = [
  {
    date: "Mar 2026 — Present",
    role: "Mid-level Flutter Developer",
    company: "Code W Fekra",
    location: "Cairo",
    desc: "Developing and optimizing mobile applications for the Saudi Arabian market, aligning with regional user behavior and business needs."
  },
  {
    date: "Mar 2025 — Feb 2026",
    role: "Mid-level Flutter Developer",
    company: "Engaz Technology",
    location: "Remote",
    desc: "Designed and developed 15+ cross-platform mobile applications for clients across Saudi Arabia, Jordan, Libya, Iraq, and Egypt. Led architecture decisions and implemented complex business logic with clean code practices."
  },
  {
    date: "Feb 2023 — Jan 2024",
    role: "Junior Flutter Developer",
    company: "A'mal Technology",
    location: "Hybrid",
    desc: "Built the SALIS ERP system (25,000+ users). Implemented Employee Tracking with Geofencing and custom In-App Analytics Dashboards using Flutter Charts, achieving a 25% speed increase in decision-making and 35% boost in oversight and productivity."
  },
  {
    date: "Sep 2022 — Aug 2023",
    role: "Freelance Flutter Developer",
    company: "Self-employed",
    location: "Remote",
    desc: "Worked independently on multiple Flutter projects for various clients, handling full project lifecycle from requirements gathering to deployment on app stores."
  },
  {
    date: "Aug 2022",
    role: "Flutter Internship",
    company: "Orange Digital Center",
    location: "Cairo",
    desc: "Completed an intensive Flutter development internship, gaining foundational skills in Dart, widget architecture, state management, and mobile UI/UX best practices."
  }
];

function renderExperience() {
  const expContainer = document.getElementById('experienceContainer');
  if (expContainer) {
    expContainer.innerHTML = experienceData.map(exp => `
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
}
