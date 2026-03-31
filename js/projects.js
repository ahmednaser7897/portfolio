const projectsData = [
  {
    name: "SALIS ERP System",
    icon: "building-2",
    desc: "A comprehensive Enterprise Resource Planning (ERP) suite with specialized Admin and Sales mobile applications developed in Flutter. Facilitates real-time inventory tracking, sales management, and business operations.",
    users: "25,000+ users in Saudi Arabia",
    tags: ["Flutter", "ERP", "REST API"],
    links: [
      { icon: "globe", text: "Website", url: "https://saliserp.com/" }
    ]
  },
  {
    name: "Deals",
    icon: "shopping-bag",
    desc: "Unified smart transportation and delivery system offering ride-hailing and e-commerce shopping. Includes shop management for tracking products and real-time orders, and dual driver modes for captains.",
    tags: ["Flutter", "Ride-Hailing", "E-commerce"],
    links: [
      { icon: "play", text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.engaz.massarUser" },
      { icon: "smartphone", text: "App Store", url: "https://apps.apple.com/us/app/deals-shop-%D8%AF%D9%8A%D9%84%D8%B2-%D8%B4%D9%88%D8%A8/id6751503786" },
      { icon: "shopping-cart", text: "Shop App", url: "https://play.google.com/store/apps/details?id=engaz.technology.deals.shop" },
      { icon: "car", text: "Captain", url: "https://play.google.com/store/apps/details?id=com.engaz.massarCaptainsApp" }
    ]
  },
  {
    name: "Aqaraty",
    icon: "home",
    desc: "Smart property management system for owners and employees. Handles property listings, tenant management, and financial tracking.",
    tags: ["Flutter", "Real Estate", "SQLite"],
    links: [
      { icon: "play", text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.engaz.aqaraty" },
      { icon: "smartphone", text: "App Store", url: "https://apps.apple.com/us/app/aqaraty-%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A/id6749689592" }
    ]
  },
  {
    name: "Amaly",
    icon: "heart-pulse",
    desc: "Digital healthcare platform with deep linking and community features. Connecting patients and providers with modern health management tools.",
    tags: ["Flutter", "Healthcare", "Deep Links"],
    links: [
      { icon: "play", text: "Amaly", url: "https://play.google.com/store/apps/details?id=com.Engazz.amly" },
      { icon: "smartphone", text: "Amaly", url: "https://apps.apple.com/us/app/amaly/id6739183056" },
      { icon: "play", text: "Doctor", url: "https://play.google.com/store/apps/details?id=com.engaz.amalydoctor" },
      { icon: "smartphone", text: "Doctor", url: "https://apps.apple.com/us/app/amaly-doctor/id6739183790" }
    ]
  },
  {
    name: "Hadiya",
    icon: "bot",
    desc: "AI-powered gift delivery system featuring AI-assisted chat ordering. Intelligent recommendations and seamless delivery experience for users.",
    tags: ["Flutter", "AI Chat", "Firebase"],
    links: [
      { icon: "smartphone", text: "App Store", url: "https://apps.apple.com/us/app/hadiya-%D9%87%D8%AF%D9%8A%D9%87/id6745960694" }
    ]
  },
  {
    name: "Sahla",
    icon: "map",
    desc: "City services and marketplace application connecting users with local businesses and service providers for everyday needs.",
    tags: ["Flutter", "Marketplace", "Location"],
    links: [
      { icon: "play", text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.finn.htlaa2e.engaz" },
      { icon: "smartphone", text: "App Store", url: "https://apps.apple.com/eg/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%B3%D9%87%D9%84%D8%A9/id6737232481?l=ar" }
    ]
  },
  {
    name: "Iraqi Plus",
    icon: "briefcase",
    desc: "Multi-service platform with user and business companion apps. Connecting Iraqi users with local services, businesses, and community features.",
    tags: ["Flutter", "Services", "Community"],
    links: [
      { icon: "smartphone", text: "Iraqi Plus", url: "https://apps.apple.com/us/app/iraqi-plus/id6670759105" },
      { icon: "smartphone", text: "Iraq Plus Co", url: "https://apps.apple.com/us/app/iraq-plus-co-%D8%B9%D8%B1%D8%A7%D9%82-%D8%A8%D9%84%D8%B3-%D8%B4%D8%B1%D9%83%D8%A9/id6746558156" }
    ]
  },
  {
    name: "Flora Ecosystem",
    icon: "flower-2",
    desc: "A suite of e-commerce apps including Flora, Flora Shop, and Flora Driver. Complete ecosystem for flower ordering, shop management, and delivery tracking.",
    tags: ["Flutter", "E-commerce", "Maps"],
    links: [
      { icon: "smartphone", text: "Flora", url: "https://apps.apple.com/us/app/flora-%D9%81%D9%84%D9%88%D8%B1%D8%A7/id6523437382" },
      { icon: "store", text: "Flora Shop", url: "https://apps.apple.com/us/app/flora-shop-%D9%81%D9%84%D9%88%D8%B1%D8%A7-%D8%B4%D9%88%D8%A8/id6749001709" },
      { icon: "truck", text: "Flora Driver", url: "https://apps.apple.com/us/app/flora-driver/id6523437155" }
    ]
  },
  {
    name: "La Vie App",
    icon: "leaf",
    desc: "Orange Instant-ODC Flutter internship final project built on MVC Architecture. Integrates Firebase, BLoC state management, QR Code reading, SQLite, Google Auth, and Dio for APIs.",
    tags: ["Flutter", "BLoC", "Firebase"],
    links: [
      { icon: "linkedin", text: "LinkedIn Post", url: "https://www.linkedin.com/posts/ahmednaser7897_flutter-softwaredevelopment-managementsystem-activity-6970619763999797248-9Wud?utm_source=share&utm_medium=member_desktop" }
    ]
  },
  {
    name: "SawaGo",
    icon: "car",
    desc: "Iraq-based ride-hailing app connecting passengers and drivers with real-time tracking, seamless booking, and a dedicated captain application.",
    tags: ["Flutter", "Ride-Hailing", "Real-time"],
    links: [
      { icon: "smartphone", text: "App Store", url: "https://apps.apple.com/us/app/sawago-captain-%D8%B3%D9%88%D8%A7-%D8%AC%D9%88-%D9%83%D8%A7%D8%A8%D8%AA%D9%86/id6749860208" }
    ]
  },
  {
    name: "Seen",
    icon: "shopping-cart",
    desc: "A comprehensive E-Commerce and Delivery ecosystem. Features dedicated applications for customers, merchants, and celebrities.",
    tags: ["Flutter", "E-Commerce", "Delivery"],
    links: [
      { icon: "smartphone", text: "Seen App", url: "https://apps.apple.com/us/app/seen-app/id6738392278" },
      { icon: "smartphone", text: "Merchant", url: "https://apps.apple.com/us/app/seen-merchant/id6739069500" },
      { icon: "smartphone", text: "Celebrity", url: "https://apps.apple.com/us/app/seen-celebrity/id6739069575" }
    ]
  },
  {
    name: "Aghseli",
    icon: "droplet",
    desc: "On-demand car wash delivery service featuring separate applications for customers to book services and captains to manage requests.",
    tags: ["Flutter", "Services", "Automotive"],
    links: [
      { icon: "smartphone", text: "User App", url: "https://apps.apple.com/us/app/aghseli-i-%D8%A7%D8%BA%D8%B3%D9%84%D9%8A/id6479610314" },
      { icon: "smartphone", text: "Captain App", url: "https://apps.apple.com/us/app/aghseli-captain-i-%D8%A7%D8%BA%D8%B3%D9%84%D9%8A-%D8%B3%D8%A7%D8%A6%D9%82/id6479611477" }
    ]
  },
  {
    name: "Otjie",
    icon: "shirt",
    desc: "End-to-end laundry and ironing delivery system. Includes specialized applications for the customer, the ironer, and the delivery captain.",
    tags: ["Flutter", "Laundry", "Delivery"],
    links: [
      { icon: "smartphone", text: "User App", url: "https://apps.apple.com/us/app/otjie-%D8%A7%D9%88%D8%AA%D8%AC%D9%8A/id6740092036" },
      { icon: "smartphone", text: "Ironer", url: "https://apps.apple.com/us/app/%D8%A3%D9%88%D8%AA%D8%AC%D9%8A-%D9%85%D9%83%D9%88%D8%AC%D9%8A-otjie-ironer/id6744644441" },
      { icon: "smartphone", text: "Captain", url: "https://apps.apple.com/us/app/%D8%A3%D9%88%D8%AA%D8%AC%D9%8A-%D9%83%D8%A7%D8%A8%D8%AA%D9%86-otjie-captain/id6743707148" }
    ]
  },
  {
    name: "Quran App (Wazaker)",
    icon: "book",
    desc: "Comprehensive Islamic application. Features Holy Quran, Azkar, Nawawi's Hadiths, Prayer Times, and Hijri Calendar with a highly responsive user interface.",
    tags: ["Flutter", "API", "Islamic"],
    links: [
      { icon: "linkedin", text: "LinkedIn Post", url: "https://www.linkedin.com/posts/ahmednaser7897_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D8%AD%D9%85%D8%AF%D8%A7-%D9%83%D8%AB%D9%8A%D8%B1%D8%A7-%D8%A7%D9%86%D8%AA%D9%87%D9%8A%D8%AA-%D9%85%D9%86-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%88-activity-6976844905599918080-ZE59" }
    ]
  },
  {
    name: "ML UK Car Data",
    icon: "bar-chart-2",
    desc: "Applied Python machine learning models (Linear Regression, Clustering, Classification) to a vast 100,000 UK Used Car Data Set on Kaggle for data cleaning and predictive analysis.",
    tags: ["Python", "Machine Learning", "Data Science"],
    links: [
      { icon: "linkedin", text: "LinkedIn Post", url: "https://www.linkedin.com/posts/ahmednaser7897_data-kaggle-datasciences-activity-6925177975294287872-tyYB" }
    ]
  },
  {
    name: "Othello AI Game",
    icon: "gamepad-2",
    desc: "A challenging implementation of the Othello board game in Python featuring a Mini-max algorithm with Alpha-Beta pruning, utilizing Tkinter for the GUI and heuristic functions.",
    tags: ["Python", "AI", "Algorithms"],
    links: [
      { icon: "linkedin", text: "LinkedIn Post", url: "https://www.linkedin.com/posts/ahmednaser7897_python-artificialabrintelligence-activity-6925165807274459136-GU4j" }
    ]
  },
  {
    name: "Courses Management",
    icon: "graduation-cap",
    desc: "A robust desktop application built to manage educational courses. Designed with Java (OOP) and a SQL Database featuring full CRUD functionality for admins, students, and courses.",
    tags: ["Java", "SQL", "OOP"],
    links: [
      { icon: "linkedin", text: "LinkedIn Post", url: "https://www.linkedin.com/posts/ahmednaser7897_sql-java-oop-activity-6925192545366921216-7VJp" }
    ]
  }
];

function renderProjects() {
  const projectsContainer = document.getElementById('projectsContainer');
  if (projectsContainer) {
    projectsContainer.innerHTML = projectsData.map(project => `
      <div class="project-card glass-card reveal">
        <div class="project-icon">
          <i data-lucide="${project.icon}" style="width:28px;height:28px"></i>
        </div>
        <h3 class="project-name">${project.name}</h3>
        <p class="project-desc">${project.desc}</p>
        
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        ${project.users ? `
        <div class="project-users">
          <i data-lucide="users" style="width:14px;height:14px"></i>
          <span>${project.users}</span>
        </div>` : ''}
        
        <div class="project-links">
          ${project.links.map(link => `
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
}
