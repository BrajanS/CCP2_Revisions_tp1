// Utiliser template pour les avis
// stocker avis dans un tableau et injecter dynamiquement au chargement
// Lorsquʼun avis est ajouté, il est inséré en haut de la liste(début).
// Possibilité de supprimer un avis (bouton supprimer)

// PS : On fait comme si on était admin


let current_id = 3;

// Datas avis test
let reviews = [
    {
        id: 0,
        user_firstname: "Jean",
        user_lastname: "Dupont",
        commentary: "Très bon produit, je recommande !",
        mark: 5
    },
    {
        id: 1,
        user_firstname: "Marie",
        user_lastname: "Cosi",
        commentary: "Un peu cher mais la qualité est au rendez-vous",
        mark: 4
    },
    {
        id: 2,
        user_firstname: "Lucie",
        user_lastname: "Vermeille",
        commentary: "Deçue. Je n'ai pas reçu le produit en bon état, j'en ai fait part au service client il y a deux semaines et j'attends toujours...",
        mark: 1
    }
];


// Fonction de génération des avis
function generateReviews(){
    const reviews_container = document.getElementById("reviews_container");
    const review_template = document.getElementById("review_card_template");

    reviews.forEach(review => {
        const new_review_card = review_template.content.cloneNode(true);
        const stars = new_review_card.querySelectorAll(".stars_container svg");

        //Injection données
        new_review_card.querySelector(".review_username").textContent = `${review.user_firstname} ${review.user_lastname}`;
        new_review_card.querySelector(".review_commentary").textContent = review.commentary;

        //Coloration étoiles selon note
        stars.forEach((star, i) => {
            if(review.mark > i){
                star.setAttribute("fill", "#FFA500");
            }
            else star.setAttribute("fill", "#808080");
        });

        //Connexion bouton suppression à logique
        new_review_card.querySelector(".removeReviewBtn").addEventListener("click", () => removeReviewById(review.id));

        //Insertion dans container(parent)
        reviews_container.appendChild(new_review_card);
    });
}


// Fonction de mise à jour de la liste d'avis (DOM)
function updateReviews(){
    document.getElementById("reviews_container").innerHTML = "";
    generateReviews();
}


// Fonction de suppression d'un avis (par id)
function removeReviewById(id){
    reviews = reviews.filter(r => r.id != id);
    updateReviews();
}

// Fonction du formulaire de création d'un avis
// A faire.............


// Fonction d'ajout d'un avis (début de liste)
// A faire.............



generateReviews();