document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".State_Number");
  const target = +counter.getAttribute("data-target");
  const duration = 1500; // Total animation duration in milliseconds
  const stepTime = 20; // How often to update the number

  let hasAnimated = false;

  function animateCount() {
    let current = 0;
    const step = Math.ceil(target / (duration / stepTime));

    const update = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target.toLocaleString() + "+";
      } else {
        counter.textContent = current.toLocaleString();
        setTimeout(update, stepTime);
      }
    };

    update();
  }

  // Use Intersection Observer to trigger animation on scroll into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        animateCount();
        hasAnimated = true;
        observer.unobserve(counter); // Stop observing after animation
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  observer.observe(counter);
});
