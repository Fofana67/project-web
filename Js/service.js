document.addEventListener('DOMContentLoaded', function() {
    // Sélection et ajout d'écouteurs d'événements pour chaque id
    const produitsLink = document.getElementById('produits');
    const commandeLink = document.getElementById('Commande'); // Identifiant mis à jour
    const serviceLink = document.getElementById('service');
    const autreLink = document.getElementById('autre');
 
    if (produitsLink) {
        produitsLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Vous avez cliqué sur Voir Nos Produits!');
        });
    }
 
    if (commandeLink) {
        commandeLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Vous avez cliqué sur Passer Une Commande!');
        });
    }
 
    if (serviceLink) {
        serviceLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Vous avez cliqué sur Services Techniques!');
        });
    }
 
    if (autreLink) {
        autreLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Vous avez cliqué sur Autres!');
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
});