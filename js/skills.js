const skillsData = [
  // ===== ROW 1: Flagship Core Frameworks =====
  {
    id: "flutter-core",
    category: "Flutter Core & State Management",
    domain: "mobile",
    domainLabel: "Flutter Core",
    icon: "smartphone",
    groups: [
      {
        title: "Framework & Dart Language",
        items: [
          "Flutter SDK",
          "Dart",
          "OOP in Dart",
          "Null Safety",
          "Streams & Futures",
          "Widget Lifecycle"
        ]
      },
      {
        title: "State Management Architecture",
        items: [
          "Cubit / Bloc",
          "GetX",
          "Provider",
          "Riverpod"
        ]
      }
    ]
  },
  {
    id: "aspnet",
    category: "ASP.NET Core",
    domain: "backend",
    domainLabel: "Backend Core",
    icon: "server",
    groups: [
      {
        title: "Web & API Development",
        items: [
          "ASP.NET Core Web API",
          "ASP.NET Core MVC",
          "RESTful APIs"
        ]
      },
      {
        title: "Middleware & Error Handling",
        items: [
          "Custom Middlewares",
          "Global Exception Handling",
          "Custom Exceptions",
          "Action Filters",
          "Custom Attributes"
        ]
      },
      {
        title: "Validation, Filtering & Localization",
        items: [
          "Model Validation",
          "Custom Validation Attributes",
          "ValidateModelAttribute",
          "API Localization (Arabic & English)",
          "Pagination",
          "Filtering",
          "Rate Limiting"
        ]
      },
      {
        title: "Logging & Documentation",
        items: [
          "Serilog",
          "Swagger Extensions"
        ]
      },
      {
        title: "Advanced Runtime & Execution",
        items: [
          "Asynchronous Programming",
          "Threading",
          "File Handling",
          "Serialization & Deserialization",
          "Reflection & Assembly Scanning",
          "Global Using Directives",
          "Custom Configuration"
        ]
      }
    ]
  },

  // ===== ROW 2: Architecture & Data Access =====
  {
    id: "flutter-architecture",
    category: "Mobile Architecture & Networking",
    domain: "mobile",
    domainLabel: "Mobile Architecture",
    icon: "git-branch",
    groups: [
      {
        title: "Architecture & Dependency Injection",
        items: [
          "MVVM / MVC Architecture",
          "Feature-First Structure",
          "Get_it / DI",
          "Functional Error Handling"
        ]
      },
      {
        title: "Networking & API Services",
        items: [
          "REST APIs Integration",
          "Dio HTTP Client",
          "Retrofit",
          "Web Sockets",
          "JSON Serialization",
          "HTTP Interceptors"
        ]
      }
    ]
  },
  {
    id: "efcore",
    category: "Entity Framework & Database",
    domain: "backend",
    domainLabel: "ORM & Data Access",
    icon: "database",
    groups: [
      {
        title: "EF Core Modeling & Migrations",
        items: [
          "Entity Framework Core",
          "Code First",
          "Migrations",
          "Fluent API",
          "IEntityTypeConfiguration",
          "EF Core Interceptors",
          "LINQ",
          "CRUD Operations"
        ]
      },
      {
        title: "Database Contexts",
        items: [
          "AppDbContext",
          "IdentityDbContext"
        ]
      },
      {
        title: "Custom Configurations & Schema",
        items: [
          "CourseConfiguration : IEntityTypeConfiguration<Course>",
          "AppDbContext : IdentityDbContext<ApplicationUser>"
        ]
      }
    ]
  },

  // ===== ROW 3: Storage, Cloud & Security =====
  {
    id: "flutter-storage",
    category: "Mobile Storage, Firebase & Cloud",
    domain: "mobile",
    domainLabel: "Storage & Cloud",
    icon: "database",
    groups: [
      {
        title: "Local Databases & Offline First",
        items: [
          "SQLite",
          "Hive DB",
          "Flutter Secure Storage",
          "Shared Preferences",
          "Offline Caching & Sync"
        ]
      },
      {
        title: "Firebase Ecosystem",
        items: [
          "Firebase Authentication",
          "Cloud Firestore",
          "Firebase Cloud Messaging (FCM)",
          "Push Notifications"
        ]
      }
    ]
  },
  {
    id: "auth",
    category: "Authentication & Authorization",
    domain: "backend",
    domainLabel: "Security & Identity",
    icon: "shield-check",
    groups: [
      {
        title: "Identity & Token Authentication",
        items: [
          "ASP.NET Core Identity",
          "JWT Authentication",
          "Refresh Tokens",
          "Claims-Based Authentication"
        ]
      },
      {
        title: "Access Control & Policies",
        items: [
          "Roles",
          "Policies",
          "Custom Authorization Requirements",
          "Custom Identity User"
        ]
      },
      {
        title: "Custom Security Implementations",
        items: [
          "Custom Claims Principal Factory",
          "MustHaveImageRequirements",
          "AppUserClaimsPrincipalFactory"
        ]
      }
    ]
  },

  // ===== ROW 4: UI / Hardware & Database Systems =====
  {
    id: "flutter-ui",
    category: "UI/UX, Native Features & Stores",
    domain: "mobile",
    domainLabel: "UI/UX & Deployment",
    icon: "settings",
    groups: [
      {
        title: "UI/UX, Charts & Animations",
        items: [
          "Responsive UI Layouts",
          "Complex Animations",
          "Flutter Charts",
          "Dark & Light Theming",
          "RTL / LTR Multi-language"
        ]
      },
      {
        title: "Hardware & Native Services",
        items: [
          "Google Maps",
          "Geofencing & Location",
          "Deep Linking",
          "QR & Barcode Scanner"
        ]
      },
      {
        title: "App Stores & Deployment",
        items: [
          "App Publishing",
          "Google Play Console",
          "Apple App Store & TestFlight",
          "App Signing & Keystores"
        ]
      }
    ]
  },
  {
    id: "databases",
    category: "Databases & ORMs",
    domain: "backend",
    domainLabel: "Database Systems",
    icon: "hard-drive",
    groups: [
      {
        title: "Database Engines & Querying",
        items: [
          "SQL Server",
          "MySQL",
          "T-SQL"
        ]
      },
      {
        title: "Relational Design & Schema",
        items: [
          "Database Relationships",
          "Database Indexing",
          "Database Normalization"
        ]
      },
      {
        title: "Alternative ORMs & Micro-ORMs",
        items: [
          "Dapper ORM",
          "NHibernate"
        ]
      }
    ]
  },

  // ===== ROW 5: Software Architecture & OOP Foundations =====
  {
    id: "architecture",
    category: "Architecture & Design Patterns",
    domain: "architecture",
    domainLabel: "Software Architecture",
    icon: "layers",
    groups: [
      {
        title: "Architectural Styles & CQRS",
        items: [
          "Clean Architecture",
          "Layered Architecture",
          "CQRS",
          "MediatR"
        ]
      },
      {
        title: "Repository & Enterprise Patterns",
        items: [
          "Repository Pattern",
          "Generic Repository",
          "Unit of Work Pattern",
          "Specification Pattern",
          "Dependency Injection"
        ]
      },
      {
        title: "Design Patterns & Principles",
        items: [
          "Factory Pattern",
          "Strategy Pattern",
          "Singleton Pattern",
          "SOLID Principles",
          "DTOs"
        ]
      }
    ]
  },
  {
    id: "csharp",
    category: "C# & OOP",
    domain: "architecture",
    domainLabel: "Language & OOP",
    icon: "cpu",
    groups: [
      {
        title: "OOP Foundations & Features",
        items: [
          "Object-Oriented Programming",
          "Generics",
          "Delegates",
          "Attributes",
          "Data Structures"
        ]
      },
      {
        title: "Design Principles & IoC",
        items: [
          "Inversion of Control",
          "Custom Configurations"
        ]
      }
    ]
  },

  // ===== ROW 6: Contracts & Development Tooling =====
  {
    id: "interfaces",
    category: "Interfaces & Abstractions",
    domain: "architecture",
    domainLabel: "Contracts & Abstractions",
    icon: "code-2",
    groups: [
      {
        title: "Domain Contracts & Specifications",
        items: [
          "ISoftDeleteEntity",
          "IAuditableEntity",
          "IBaseRepository",
          "IUnitOfWork",
          "ISpecification"
        ]
      }
    ]
  },
  {
    id: "tools",
    category: "Developer Tools & AI",
    domain: "tools",
    domainLabel: "DevOps & AI",
    icon: "bot",
    groups: [
      {
        title: "Languages & Version Control",
        items: [
          "Git / GitHub",
          "Python",
          "Java",
          "C++"
        ]
      },
      {
        title: "AI-Assisted Engineering",
        items: [
          "Antigravity",
          "Cursor",
          "Cloud AI",
          "Windsurf",
          "GitHub Copilot",
          "ChatGPT"
        ]
      }
    ]
  }
];

// Ensure backwards compatibility with any flat items access
skillsData.forEach(cat => {
  cat.items = cat.groups.flatMap(g => g.items);
});

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildCategoryHTML(category) {
  const totalSkills = category.items.length;
  return `
    <div class="skill-category glass-card reveal" data-domain="${category.domain}" id="skill-cat-${category.id}">
      <div class="category-header">
        <div class="category-header-left">
          <div class="category-icon">
            <i data-lucide="${category.icon}" style="width:24px;height:24px"></i>
          </div>
          <div>
            <h3 class="category-title">${category.category}</h3>
          </div>
        </div>
        <div class="category-badge-group">
          <span class="category-domain-badge">${category.domainLabel}</span>
          <span class="category-count-badge">${totalSkills} skills</span>
        </div>
      </div>

      <div class="skill-groups">
        ${category.groups.map(group => `
          <div class="skill-subgroup">
            ${group.title ? `<div class="skill-subgroup-title">${group.title}</div>` : ''}
            <div class="skill-list">
              ${group.items.map(skill => {
                const isCode = (skill.startsWith('I') && skill[1] && skill[1] === skill[1].toUpperCase() && !skill.includes(' ')) || skill.includes(':') || skill.includes('<');
                return `
                  <div class="skill-item ${isCode ? 'code-font' : ''}">
                    <span class="skill-dot"></span>
                    <span>${escapeHtml(skill)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSkills() {
  const skillsContainer = document.getElementById('skillsContainer');
  if (!skillsContainer) return;

  // Split into left column (even indices) and right column (odd indices)
  const leftCol  = skillsData.filter((_, i) => i % 2 === 0);
  const rightCol = skillsData.filter((_, i) => i % 2 === 1);

  skillsContainer.innerHTML = `
    <div class="skills-col skills-col-left">
      ${leftCol.map(buildCategoryHTML).join('')}
    </div>
    <div class="skills-col skills-col-right">
      ${rightCol.map(buildCategoryHTML).join('')}
    </div>
  `;

  initSkillsFilters();
}

function initSkillsFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cards = document.querySelectorAll('#skillsContainer .skill-category');
      cards.forEach(card => {
        const domain = card.getAttribute('data-domain');
        if (filter === 'all' || domain === filter) {
          card.classList.remove('skill-card-hidden');
        } else {
          card.classList.add('skill-card-hidden');
        }
      });
    });
  });
}
