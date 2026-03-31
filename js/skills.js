const skillsData = [
  {
    category: "Frameworks & Languages",
    icon: "code-2",
    items: ["Flutter", "Dart", "Python", "Java", "C++"]
  },
  {
    category: "State Management",
    icon: "git-branch",
    items: ["Cubit / Bloc", "GetX", "Provider", "Riverpod"]
  },
  {
    category: "Backend & Tools",
    icon: "database",
    items: ["Firebase", "REST APIs", "Retrofit", "SQLite", "Hive", "Secure Storage", "Web Sockets", "Get_it / DI"]
  },
  {
    category: "UI/UX & DevOps",
    icon: "settings",
    items: ["Responsive UI", "Animations", "Google Maps", "Flutter Charts", "Clean Architecture", "SOLID", "Deep Linking", "Git / GitHub", "App Publishing"]
  }
];

function renderSkills() {
  const skillsContainer = document.getElementById('skillsContainer');
  if (skillsContainer) {
    skillsContainer.innerHTML = skillsData.map(category => `
      <div class="skill-category glass-card reveal">
        <div class="category-header">
          <div class="category-icon">
            <i data-lucide="${category.icon}" style="width:24px;height:24px"></i>
          </div>
          <h3 class="category-title">${category.category}</h3>
        </div>
        <div class="skill-list">
          ${category.items.map(skill => `
            <div class="skill-item">
              <span class="skill-dot"></span>
              ${skill}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }
}
