const aboutData = {
  stats: [
    { number: "4+", label: "Years Experience" },
    { number: "15+", label: "Apps Built" },
    { number: "25K+", label: "Users Impacted" }
  ],
  highlights: [
    {
      icon: "smartphone",
      title: "Mobile Development",
      desc: "Building high-performance, cross-platform mobile apps for iOS and Android using Flutter, Dart, and clean state management."
    },
    {
      icon: "server",
      title: "Backend Engineering",
      desc: "Developing structured RESTful APIs and reliable backend services using C#, ASP.NET Core, Entity Framework Core, and SQL Server."
    },
    {
      icon: "layers",
      title: "Clean Architecture",
      desc: "Applying multi-layer separation, SOLID principles, and proven design patterns to build maintainable, scalable software solutions."
    }
  ]
};

function renderAbout() {
  const statsContainer = document.getElementById('aboutStatsContainer');
  if (statsContainer) {
    statsContainer.innerHTML = aboutData.stats.map(stat => `
      <div class="stat-card glass-card">
        <div class="stat-number">${stat.number}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  const highlightsContainer = document.getElementById('aboutHighlightsContainer');
  if (highlightsContainer) {
    highlightsContainer.innerHTML = aboutData.highlights.map(hl => `
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
}
