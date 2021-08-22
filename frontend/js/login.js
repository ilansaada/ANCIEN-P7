//appel à l'API fetch avec la méthode globale fetch() afin de récupérer des ressources à travers le réseau de manière asynchrone.
const signupForm = document.querySelector('#signup');
const formulaire = document.querySelector(".formulaire");
function createUserAccount(){
  let signupFormData = new FormData(signupForm);
  fetch("http://localhost:3000/api/auth", {
      method: "POST",
      body: signupFormData
  })
      .then((data) => data.json())
      .then(() => {
          formulaire.innerHTML =
          `<div class="alert alert-success" role="alert">
              Compte bien créé !
          </div>    `;
      })
      .catch((error) => {
          formulaire.innerHTML =
              `<div class="alert alert-danger" role="alert">
                  Attention une erreur s'est produite : ${error}
              </div>`
      });
}

