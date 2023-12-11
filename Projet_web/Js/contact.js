document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contactForm form');
    const nomInput = form.querySelector('#Nom');
    const emailInput = form.querySelector('#email');
    const commentaireInput = form.querySelector('#message');
    const address = document.querySelector('.icon');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
   
        // Validation du nom 
        if (nomInput.value.length < 2 || nomInput.value.length > 30) {
            alert('Le nom doit contenir entre 2 et 30 caractères.');
            return;
        }
   
        // Validation de l'email 
        if (!emailInput.value.includes('@')) {
            alert('Veuillez entrer une adresse email valide.');
            return;

        }
   
        // Validation du commentaire 
        if (commentaireInput.value.length < 10) {
            alert('Le commentaire doit contenir au moins 10 caractères.');
            return;
        }
   
        //  ajout de la logique d'envoi du formulaire 
        console.log('Formulaire de contact soumis');
        alert('Votre message a été soumis avec succès.');
        location.reload();
    });
    // Ajout d un écouteur d'événement pour le clic 
address.addEventListener('click', function() {
    // Adresse à rechercher sur Google Maps
    const address = '801 Aviation Pkwy, Ottawa, ON K1K 4R3';
    
    // Générer l'URL de recherche sur Google Maps
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  });
   // Sélection de tous les paragraphes
   const elements = document.querySelectorAll('p');
 
   elements.forEach(element => {
       element.addEventListener('mouseover', function() {
           this.style.color = 'red';
           this.style.fontSize = '1.6em';
       });
 
       element.addEventListener('mouseout', function() {
           this.style.color = '';
           this.style.fontSize = '';
       });
   });
   // Fonction pour afficher une alerte au clic sur l'en-tête
   const brandLink = document.querySelector(".brand a");
   brandLink.addEventListener("click", function (event) {
       event.preventDefault();
       alert("Vous avez cliqué sur le logo !");
   });
 
  });