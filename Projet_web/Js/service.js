document.addEventListener('DOMContentLoaded', function() {
    // Sélection et ajout d'écouteurs d'événements pour chaque id
    const produitsLink = document.getElementById('produits');
    const commandeLink = document.getElementById('Commande'); // Identifiant mis à jour
    const serviceLink = document.getElementById('service');
    const autreLink = document.getElementById('autre');
 
    if (produitsLink) {
        produitsLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Voulez-vous Voir Nos Produits!');
        });
    }
 
    if (commandeLink) {
        commandeLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Voulez-vous Passer Une Commande!');
        });
    }
 
    if (serviceLink) {
        serviceLink.addEventListener('click', function(event) {
          event.preventDefault();
          if (confirm('Voulez-vous entrer en contact avec le Service Technique?')) {
            window.location.href = 'formulaire.html';
          }
        });
      }
 
    if (autreLink) {
        autreLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Voulez-vous voir d\'Autres articles');
        });
    }
      // Fonction pour changer la couleur du titre au survol
   
      const sectionTitle = document.querySelector(".section-title");
      const body = document.querySelector("body");
   
      if (sectionTitle) {
          console.log("Élément .section-title trouvé");
   
          sectionTitle.addEventListener("mouseover", function () {
              console.log("Souris sur .section-title");
              body.style.backgroundColor = "#A52A2A";
          });
   
          sectionTitle.addEventListener("mouseout", function () {
              console.log("Souris hors de .section-title");
              body.style.backgroundColor = "";
          });
      } else {
          console.log("Élément .section-title non trouvé");
      }
       // Fonction pour afficher une alerte au clic sur l'en-tête
  const brandLink = document.querySelector(".brand a");
  brandLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Vous avez cliqué sur le logo !");
      
  });
   // Sélection de tous les paragraphes
   const elements = document.querySelectorAll('p');
 
   elements.forEach(element => {
       element.addEventListener('mouseover', function() {
           this.style.color = 'blue';
           this.style.fontSize = '1.8em';
       });
 
       element.addEventListener('mouseout', function() {
           this.style.color = '';
           this.style.fontSize = '';
       });
    });
  
});
