document.addEventListener('DOMContentLoaded', function() {
    // Ajuster les styles en fonction de la taille de l'écran
    function ajusterStyles() {
        var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var pointDeRupture = 768;
<<<<<<< HEAD
 
        // Utilisation des classes CSS pour le responsive design
        document.body.classList.toggle('petit-ecran', largeurEcran < pointDeRupture);
    }
 
=======

        // Utiliser des classes CSS pour le responsive design
        document.body.classList.toggle('petit-ecran', largeurEcran < pointDeRupture);
    }

>>>>>>> e2c3c93f519aa15c717e886a5900617ce45bf88c
    // Effet d'ombre sur les sections au défilement
    function ajouterEffetOmbre() {
        var scrollTop = window.scrollY;
        var sections = document.querySelectorAll('section');
<<<<<<< HEAD
 
=======

>>>>>>> e2c3c93f519aa15c717e886a5900617ce45bf88c
        sections.forEach(function(section) {
            var offsetTop = section.offsetTop;
            var isVisible = scrollTop >= offsetTop && scrollTop < offsetTop + section.offsetHeight;
            section.classList.toggle('ombre-active', isVisible);
        });
    }
<<<<<<< HEAD
 
=======

>>>>>>> e2c3c93f519aa15c717e886a5900617ce45bf88c
    // Interactions avec l'utilisateur
    function ajouterInteractionsUtilisateur() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseover', () => link.classList.add('hover'));
            link.addEventListener('mouseout', () => link.classList.remove('hover'));
        });
    }
<<<<<<< HEAD
 
=======

>>>>>>> e2c3c93f519aa15c717e886a5900617ce45bf88c
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
<<<<<<< HEAD
 
=======

>>>>>>> e2c3c93f519aa15c717e886a5900617ce45bf88c
    // Exécution des fonctions
    window.addEventListener('load', function() {
        ajusterStyles();
        ajouterInteractionsUtilisateur();
        ajouterInteractionsDoubleClic();
    });
    window.addEventListener('resize', ajusterStyles);
    window.addEventListener('scroll', ajouterEffetOmbre);
});
<<<<<<< HEAD
=======

>>>>>>> e2c3c93f519aa15c717e886a5900617ce45bf88c
