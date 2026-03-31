const aboutData = {
  stats: [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Apps Built" },
    { number: "25K+", label: "Users Impacted" }
  ],
  highlights: [
    {
      icon: "smartphone",
      title: "Cross-Platform Development",
      desc: "Building beautiful, native-quality mobile apps for both iOS and Android using Flutter and Dart."
    },
    {
      icon: "layers",
      title: "Clean Architecture",
      desc: "Applying SOLID principles and clean architecture patterns for scalable, maintainable codebases."
    },
    {
      icon: "zap",
      title: "Performance Focused",
      desc: "Optimizing app performance with efficient state management and responsive adaptive UI design."
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
