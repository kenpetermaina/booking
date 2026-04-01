// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
  }
});

// Book via WhatsApp
function bookWhatsApp() {
  const from = document.querySelector('.form-group:nth-child(1) input').value;
  const to = document.querySelector('.form-group:nth-child(2) input').value;
  const date = document.querySelector('.form-group:nth-child(3) input').value;
  const passengers = document.querySelector('.form-group:nth-child(4) select').value;

  const message = `Hello Tahmeed Express! I'd like to book a ticket:\n\nFrom: ${from || 'N/A'}\nTo: ${to || 'N/A'}\nDate: ${date || 'N/A'}\nPassengers: ${passengers}`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/254733391352?text=${encoded}`, '_blank');
}

// Book Now buttons
document.querySelectorAll('.btn-book').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.route-card');
    const routeName = card.querySelector('h3').textContent;
    const price = card.querySelector('.route-price').textContent;

    const message = `Hello Tahmeed Express! I'd like to book the ${routeName} route (${price}). Please send me available times.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254733391352?text=${encoded}`, '_blank');
  });
});
