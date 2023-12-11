document.addEventListener('DOMContentLoaded', function() {
    // Ajuster les styles en fonction de la taille de l'écran
    function ajusterStyles() {
        var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var pointDeRupture = 768;
 
        // Utilisation des classes CSS pour le responsive design
        document.body.classList.toggle('petit-ecran', largeurEcran < pointDeRupture);
    }
 
    // Effet d'ombre sur les sections au défilement
    function ajouterEffetOmbre() {
        var scrollTop = window.scrollY;
        var sections = document.querySelectorAll('section');
 
        sections.forEach(function(section) {
            var offsetTop = section.offsetTop;
            var isVisible = scrollTop >= offsetTop && scrollTop < offsetTop + section.offsetHeight;
            section.classList.toggle('ombre-active', isVisible);
        });
    }
 
    // Interactions avec l'utilisateur
    function ajouterInteractionsUtilisateur() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseover', () => link.classList.add('hover'));
            link.addEventListener('mouseout', () => link.classList.remove('hover'));
        });
    }
 
    // Interactions au double clic
    function ajouterInteractionsDoubleClic() {
        const body = document.querySelector('body');
        body.addEventListener('dblclick', () => {
            // Changer la couleur de fond de la page
            body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            // Animer les sections avec une transition
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.transform = `scale(${1 + Math.random() * 0.5})`;
                section.style.transition = 'transform 1s';
            });
        });
    }
 
    // Exécution des fonctions
    window.addEventListener('load', function() {
        ajusterStyles();
        ajouterInteractionsUtilisateur();
        ajouterInteractionsDoubleClic();
    });
    window.addEventListener('resize', ajusterStyles);
    window.addEventListener('scroll', ajouterEffetOmbre);
});
