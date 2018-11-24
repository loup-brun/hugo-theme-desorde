document.addEventListener("DOMContentLoaded", function(event) { 
  espaceFine();
  
  var topBtn = document.getElementById('top');
  
  if (topBtn) {
    topBtn.addEventListener('click', function (ev) {
      ev.preventDefault();

      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});