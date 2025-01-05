document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', () => {
       console.log('Bouton cliqué !');
    });
 });

 
 window.addEventListener('scroll', () => {
    const scrollTopButton = document.getElementById('scrollTop');
    if (window.scrollY > 500) { // Afficher la flèche après 300px
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  });
  

  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement fluide
    });
  });