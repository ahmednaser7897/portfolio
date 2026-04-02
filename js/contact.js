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

// Contact form HTML is loaded directly in index.html to avoid file URI cors.
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
