//appel à l'API fetch avec la méthode globale fetch() afin de récupérer des ressources à travers le réseau de manière asynchrone.
/*-----------------------------------ecouter le btn envoyer formulaire-----------------------------------*/
const btnEnvoyerFormulaire = document.querySelector("#envoyer_formulaire");
btnEnvoyerFormulaire.addEventListener("click", (Element) => {
  Element.preventDefault();
  //recuperation des valeurs du formulaire
  const valeursForm = {
    username: document.querySelector("#username").value,
    password: document.querySelector("#exampleInputPassword1").value,
    email: document.querySelector("#exampleInputEmail1").value,
  };
  console.log(valeursForm)

  /*-----------------------------------validation du form-----------------------------------*/
  const regExUsername = (value) => {
    return /^[A-Za-z]{3,20}$/.test(value);
  };
  const regExAdresseEmail = (value) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  };
  function controlUsername() {
    // controle de la validation du username avec RegExs.
    const theUsername = valeursForm.username;
    if (regExUsername(theUsername)) {
      return true;
    } else {
      return false;
    }
  }

  function controlEmail() {
    // controle de la validation de l'email avec RegExs.
    const theEmail = valeursForm.email;
    if (regExAdresseEmail(theEmail)) {
      return true;
    } else {
      return false;
    }
  }
  /*----------------------------------- si le formulaire est bon le mettre dans le session storage-----------------------------------*/
  if (controlUsername() && controlEmail()) {
    sessionStorage.setItem("valeursForm", JSON.stringify(valeursForm));
    /*-----------------------------------envoi vers le server-----------------------------------*/
    const signupForm = document.querySelector("#signup");
    const formulaire = document.querySelector(".formulaire");
    
        let signupFormData = new FormData(signupForm);
        fetch("http://localhost:3000/api/auth/signup", {
            method: "POST",
            body: signupFormData,
        })
        .then((data) => data.json())
        .then(() => {
            formulaire.innerHTML = `<div class="alert alert-success" role="alert">
            Compte bien créé !
            </div>    `;
            window.location = "echanges.html";
        })
        .catch((error) => {
            formulaire.innerHTML = `<div class="alert alert-danger" role="alert">
            une erreur s'est produite : ${error}
            </div>`;
        });
    
  } else {
    document.querySelector("#erreur").textContent =
        "Tout les champs doivent etre correctement remplis avant d'envoyer le formulaire  notamment : Nom d'utilisateur pas de caractères spéciaux ni chiffres et email XXXX@email.com ";
  }
});


