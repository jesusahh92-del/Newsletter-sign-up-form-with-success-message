const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const formCard = document.getElementById('form-card');
const successCard = document.getElementById('success-card');
const userEmailSpan = document.getElementById('user-email');
const dismissBtn = document.getElementById('dismiss-btn');


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    userEmailSpan.textContent = emailValue;
    
    formCard.classList.add('hidden');
    successCard.classList.remove('hidden');
    
    emailInput.classList.remove('error');
    errorMsg.style.display = 'none';
  } else {
    emailInput.classList.add('error');
    errorMsg.style.display = 'block';
  }
});

dismissBtn.addEventListener('click', () => {
  successCard.classList.add('hidden');
  formCard.classList.remove('hidden');
  emailInput.value = '';
});