document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contactForm form');
    const nomInput = form.querySelector('#Nom');
    const emailInput = form.querySelector('#email');
    const commentaireInput = form.querySelector('#message');
   
    form.addEventListener('submit', function(event) {
        event.preventDefault();
   
        // Validation du nom (exemple simple)
        if (nomInput.value.length < 2 || nomInput.value.length > 30) {
            alert('Le nom doit contenir entre 2 et 30 caractères.');
            return;
        }
   
        // Validation de l'email (exemple simple)
        if (!emailInput.value.includes('@')) {
            alert('Veuillez entrer une adresse email valide.');
            return;
            
        }
   
        // Validation du commentaire (exemple simple)
        if (commentaireInput.value.length < 10) {
            alert('Le commentaire doit contenir au moins 10 caractères.');
            return;
        }
   
        // Ici, vous pouvez ajouter la logique d'envoi du formulaire ou de traitement supplémentaire
        console.log('Formulaire de contact soumis');
        alert('Votre message a été soumis avec succès.');
        location.reload();
    });
  });