const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const msgInput = document.getElementById("msg");

const errorName = document.getElementById("error-name");
const errorMail = document.getElementById("error-mail");
const errorMsg = document.getElementById("error-msg");

// Regex pour vérifier que le format de l'adresse email renseignée est valide
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Fonction pour valider intégralement le formulaire
function validate() {
  let valid = true;

  if (!nameInput.value.trim()) {
    errorName.textContent = "Le nom est obligatoire.";
    valid = false;
  } else {
    errorName.textContent = "";
  }

  if (!mailInput.value.trim()) {
    errorMail.textContent = "L'email est obligatoire.";
    valid = false;
  } else if (!emailRegex.test(mailInput.value.trim())) {
    errorMail.textContent = "Format d'email invalide.";
    valid = false;
  } else {
    errorMail.textContent = "";
  }

  if (!msgInput.value.trim()) {
    errorMsg.textContent = "Le message est obligatoire.";
    valid = false;
  } else {
    errorMsg.textContent = "";
  }

  return valid;
}

// Validation en temps réel dès que l'utilisateur saisit quelque chose

[nameInput, mailInput, msgInput].forEach(input => {
  input.addEventListener("input", validate); 
});

// Soumission du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  if (validate()) { 
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Merci !</h2>
        <p>Votre message a bien été envoyé.</p>
        <button id="closeModal">Fermer</button>
      </div>
    `;
    document.body.appendChild(modal);

    // Bouton pour fermer la modale
    document.getElementById("closeModal").addEventListener("click", () => {
      modal.remove();
      form.reset();  
    });
  }
});

// Soumission du formulaire avec la touche entrée

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); 
    submitBtn.click(); 
  }
});
