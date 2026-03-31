const educationData = {
  degree: "BSc in Computer Science",
  university: "Helwan University, Cairo",
  date: "2019 — 2023",
  grade: "Very Good",
  department: "Computer Science"
};

function renderEducation() {
  const educationContainer = document.getElementById('educationContainer');
  if (educationContainer) {
    educationContainer.innerHTML = `
      <div class="education-card glass-card reveal">
        <div class="edu-top">
          <div class="edu-icon">
            <i data-lucide="graduation-cap" style="width:32px;height:32px"></i>
          </div>
          <div>
            <h3 class="edu-degree">${educationData.degree}</h3>
            <p class="edu-university">${educationData.university}</p>
            <span class="edu-date">${educationData.period}</span>
          </div>
        </div>
        
        <div class="edu-details">
          <div class="edu-detail">
            <i data-lucide="book-open" class="edu-detail-icon"></i>
            <div>
              <p class="edu-detail-label">Major</p>
              <p class="edu-detail-value">${educationData.major}</p>
            </div>
          </div>
          <div class="edu-detail">
            <i data-lucide="award" class="edu-detail-icon"></i>
            <div>
              <p class="edu-detail-label">Grade</p>
              <p class="edu-detail-value">${educationData.grade}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
