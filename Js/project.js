document.addEventListener("DOMContentLoaded", function () {

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
    
  // Sélection de tous les paragraphes
  const elements = document.querySelectorAll('.project-info,p');
 
  elements.forEach(element => {
      element.addEventListener('mouseover', function() {
          this.style.color = 'orange';
          this.style.fontSize = '1.2em';
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

    // Fonction pour changer l'image du projet au survol
    const projectImg = document.querySelector(".project-img img");
    const originalImgSrc = projectImg.src; // Enregistrez l'URL de l'image d'origine
    const secondImgSrc = "./img/info.png"; // Remplacez l'URL par votre deuxième image

    projectImg.addEventListener("mouseover", function () {
        projectImg.src = secondImgSrc;
    });
    projectImg.addEventListener("mouseout", function () {
        projectImg.src = originalImgSrc;
    });

    // Ajoutez plus de fonctionnalités interactives ici en fonction de vos besoins
});

