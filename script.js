
document.addEventListener("DOMContentLoaded", () => {
  
  const resumeItems = document.querySelectorAll('.resume-item');

  resumeItems.forEach(item => {
      item.addEventListener('click', () => {
          const url = item.getAttribute('data-url');
          if (url) {
              window.open(url, '_blank');  
          }
      });
  });
});


