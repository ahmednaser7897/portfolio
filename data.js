// data.js
// This file contains all the data models for the portfolio

const portfolioData = {
  // ===== ABOUT =====
  aboutStats: [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Apps Built" },
    { number: "25K+", label: "Users Impacted" }
  ],

  aboutHighlights: [
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
  ],

  // ===== EXPERIENCE =====
  experience: [
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
  ],

  // ===== PROJECTS =====
  projects: [
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
  ],

  // ===== SKILLS =====
  skills: [
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
  ],

  // ===== EDUCATION =====
  education: {
    degree: "BSc in Computer Science",
    university: "Helwan University, Cairo",
    date: "2019 — 2023",
    grade: "Very Good",
    department: "Computer Science"
  },

  // ===== CERTIFICATES =====
  certificates: [
    {
      title: "Flutter Clean Architecture",
      issuer: "Usama Elgendy",
      date: "Oct 2022",
      url: "https://drive.google.com/file/d/1TSKLi1nJNxx78F8FbOrLjYVaeD3kFP7h/view?usp=sharing",
      extra: null
    },
    {
      title: "Orange Instant-ODC",
      issuer: "Orange Digital Center",
      date: "Sep 2022",
      url: "https://drive.google.com/file/d/1H1j6DcqzvZS9rnBNnZRShGljPKukG-vd/view?usp=sharing",
      extra: "Final Project (La Vie): 90% Grade"
    },
    {
      title: "The Complete Dart Learning Guide",
      issuer: "Hassan Fulaih",
      date: "Aug 2022",
      url: "https://drive.google.com/file/d/1f0k6u3wwgPqss0mp1Ti2naTM-p7pzHO9/view?usp=sharing",
      extra: null
    },
    {
      title: "The Complete 2022 Flutter & Dart",
      issuer: "Hassan Fulaih",
      date: "Jun 2022",
      url: "https://drive.google.com/file/d/1IZ1-y7dreIjCPCA8MqMULkm-JWcVU9FX/view?usp=sharing",
      extra: null
    },
    {
      title: "The Complete Flutter Dev Guide",
      issuer: "Hassan Fulaih",
      date: "2022 Edition",
      url: "https://drive.google.com/file/d/1hqURzg6Vis3s8XaErjpv-fepwAP_FXpF/view?usp=sharing",
      extra: null
    }
  ],

  // ===== COURSES =====
  courses: [
    {
      title: "The Complete Dart Learning Guide",
      author: "Hassan Fulaih",
      url: "https://www.udemy.com/course/mwurstui/learn/lecture/16060768#overview"
    },
    {
      title: "The Complete Flutter Development Guide [2022 Edition]",
      author: "Hassan Fulaih",
      url: "https://www.udemy.com/course/fluttercourse/learn/lecture/20802876#overview"
    }
  ]
};
