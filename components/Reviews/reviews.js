
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

let current_id = reviews.length;


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

// Soumission du formulaire (création d'un avis)
const form = document.getElementById("reviewForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const new_review = {
        id: current_id,
        user_firstname: document.getElementById("user_firstname").value,
        user_lastname: document.getElementById("user_lastname").value,
        commentary: document.getElementById("commentary").value,
        mark: document.querySelector("input[name='reviewRadio']:checked").value
    };

    reviews.unshift(new_review);
    updateReviews();
    current_id++;
});



generateReviews();