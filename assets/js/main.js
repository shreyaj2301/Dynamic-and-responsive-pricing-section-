

// toggleScroll
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("priceToggle");
    const prices = [
        { monthly: 9.9, yearly: (9.9 * 12 * 0.8).toFixed(1) },   // Basic Plan
        { monthly: 19.9, yearly: (19.9 * 12 * 0.8).toFixed(1) }, // Standard Plan
        { monthly: 39.9, yearly: (39.9 * 12 * 0.8).toFixed(1) }  // Premium Plan
    ];
    const priceElements = document.querySelectorAll(".amount");
    const periodElements = document.querySelectorAll(".period");

    function updatePrices(isYearly) {
        priceElements.forEach((price, index) => {
            price.textContent = isYearly ? prices[index].yearly : prices[index].monthly;
        });
        periodElements.forEach(period => {
            period.textContent = isYearly ? "/ year" : "/ month";
        });
    }

    toggle.addEventListener("change", function () {
        updatePrices(toggle.checked);
    });

    // Set default to monthly on page load
    updatePrices(false);
});


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  