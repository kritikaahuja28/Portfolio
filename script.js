// JavaScript to toggle the visibility of additional content
function toggleContent() {
    const content = document.querySelector('.extra-content');
    const button = document.querySelector('.read-more-btn');
    
    // Toggle the 'show' class to control visibility with CSS
    content.classList.toggle('show');
    
    // Change button text based on visibility
    if (content.classList.contains('show')) {
      button.innerHTML = 'Read Less';
    } else {
      button.innerHTML = 'Read More';
    }
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth',
      });
    });
  });
  