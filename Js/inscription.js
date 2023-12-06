document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const nomInput = form.querySelector('.name-field div:nth-child(1) input');
  const prenomInput = form.querySelector('.name-field div:nth-child(2) input');
  const emailInput = form.querySelector('input[type=email]');
  const passwordInput = form.querySelector('input[type=password]');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Validation du nom et prénom (exemple simple)
      if (nomInput.value.length < 2 || nomInput.value.length > 30) {
          alert('Le nom doit contenir entre 2 et 30 caractères.');
          return;
      }

      if (prenomInput.value.length < 2 || prenomInput.value.length > 30) {
          alert('Le prénom doit contenir entre 2 et 30 caractères.');
          return;
      }

      // Validation de l'email (exemple simple)
      if (!emailInput.value.includes('@')) {
          alert('Veuillez entrer une adresse email valide.');
          return;
      }

      // Validation du mot de passe (exemple simple)
      if (passwordInput.value.length < 6) {
          alert('Le mot de passe doit contenir au moins 6 caractères.');
          return;
      }

      // Ici, vous pouvez ajouter la logique d'envoi du formulaire ou de traitement supplémentaire
      console.log('Formulaire d\'inscription soumis');
      alert('Formulaire d\'inscription soumis.');
      location.reload();
  });
});