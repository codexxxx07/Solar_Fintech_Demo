function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText =
    "Thanks for your interest! Our team will contact you soon.";
});

const ctx = document.getElementById('growthChart');

if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Investment Growth (₹)',
        data: [50000, 90000, 140000, 180000, 220000, 250000],
        borderWidth: 3,
        tension: 0.4
      }]
    },
    options: {
      responsive: true
    }
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const lotInput = document.getElementById("lots");
const totalAmount = document.getElementById("totalAmount");

if (lotInput) {
  lotInput.addEventListener("input", () => {
    const lots = Number(lotInput.value);
    totalAmount.innerText = lots > 0 ? lots * 100 : 0;
  });
}
