function ajusterStyles() {
    var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var pointDeRupture = 768;

    if (largeurEcran < pointDeRupture) {
        document.body.classList.add('petit-ecran');
    } else {
        document.body.classList.remove('petit-ecran');
    }
}

window.onload = ajusterStyles;
window.onresize = ajusterStyles;

// JavaScript pour l'effet d'ombre sur les sections au défilement
window.onscroll = function() {
    var scrollTop = window.scrollY;
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var offsetTop = section.offsetTop;
        if (scrollTop >= offsetTop && scrollTop < offsetTop + section.offsetHeight) {
            section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Ombre au défilement
        } else {
            section.style.boxShadow = 'none'; // Pas d'ombre en dehors de la section visible
        }
    });
};