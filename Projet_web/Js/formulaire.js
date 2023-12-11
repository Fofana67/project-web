document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const subjectInput = form.querySelector('#subject');
    const helpInput = form.querySelector('#help');
    const title = document.querySelector('h2');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validation du nom 
        if (nameInput.value.length < 3 || nameInput.value.length > 12) {
            alert('Le nom doit contenir entre 3 et 12 caractères.'); // Correction de la condition du nombre minimum de caractères
            return;
        }

        // Validation de l'email 
        if (!emailInput.value.includes('@')) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Validation de l'objet 
        if (subjectInput.value.length < 3 || subjectInput.value.length > 20) {
            alert('L\'objet doit contenir entre 3 et 20 caractères.'); // Correction de la condition du nombre minimum et maximum de caractères
            return;
        }

        // Validation de l'aide
        if (helpInput.value.length < 10) {
            alert('Le champ d\'aide doit contenir au moins 10 caractères.');
            return;
        }

        //  ajout de la logique d'envoi du formulaire 
        console.log('Formulaire de requête soumis');
        alert('Formulaire de requête soumis.');
        location.reload();
    });

    // Ajout d'un écouteur d'événement pour le clic sur le titre
    title.addEventListener('click', function() {
        // Générez une couleur aléatoire
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });

    // Fonction pour afficher une alerte au clic sur l'en-tête
    const brandLink = document.querySelector(".brand a");
    brandLink.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Vous avez cliqué sur le logo !");
    });
});