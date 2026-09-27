// JavaScript to toggle the visibility of additional content
function toggleContent() {
    const content = document.querySelector('.extra-content');
    const button = document.querySelector('.read-more-btn');
    if (!content || !button) return;

    // Toggle the 'show' class to control visibility with CSS
    content.classList.toggle('show');
    const expanded = content.classList.contains('show');
    button.setAttribute('aria-expanded', expanded);

    // Change button text based on visibility
    if (expanded) {
      button.innerHTML = 'Read Less';
    } else {
      button.innerHTML = 'Read More';
    }
  }

  // Smooth scrolling for navigation links (header and in-page buttons)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;
      e.preventDefault();

      // Offset by the real header height, which is taller on mobile
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight : 50;

      window.scrollTo({
        top: targetSection.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
    });
  });

  // Keep the footer year current
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Highlight the nav link for the section currently on screen
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
  }
