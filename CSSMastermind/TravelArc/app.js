// Sélectionne tous les liens dans la liste
const links = document.querySelectorAll('.container-navbar ul li a');

// Parcourt tous les liens
links.forEach(link => {
  // Ajoute un écouteur d'événement 'click' à chaque lien
  link.addEventListener('click', function() {
    // Supprime la classe 'active' de tous les liens
    links.forEach(link => link.classList.remove('active'));
    // Ajoute la classe 'active' uniquement au lien cliqué
    this.classList.add('active');
  });
});


// Sélectionne tous les liens dans la liste
const buttons = document.querySelectorAll('.container-button button');

// Parcourt tous les liens
links.forEach(button => {
  // Ajoute un écouteur d'événement 'click' à chaque lien
  button.addEventListener('click', function() {
    // Supprime la classe 'active' de tous les liens
    links.forEach(button => button.classList.remove('active'));
    // Ajoute la classe 'active' uniquement au lien cliqué
    this.classList.add('active');
  });
});
