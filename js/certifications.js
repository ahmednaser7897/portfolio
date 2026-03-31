const certificationsData = [
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
];

const coursesData = [
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
];

function renderCertifications() {
  const certContainer = document.getElementById('certificatesContainer');
  if (certContainer) {
    certContainer.innerHTML = certificationsData.map(cert => `
      <a href="${cert.url}" target="_blank" rel="noopener" class="cert-card glass-card reveal">
        <div class="cert-icon">
          <i data-lucide="award" style="width:24px;height:24px"></i>
        </div>
        <div class="cert-content">
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
          <span class="cert-date">${cert.date}</span>
        </div>
        <i data-lucide="external-link" style="width:16px;height:16px;color:var(--text-muted)"></i>
      </a>
    `).join('');
  }

  const coursesContainer = document.getElementById('coursesContainer');
  if (coursesContainer) {
    coursesContainer.innerHTML = coursesData.map(course => `
      <a href="${course.url}" target="_blank" rel="noopener" class="course-card glass-card reveal">
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
