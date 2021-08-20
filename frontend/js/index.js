//appel à l'API fetch avec la méthode globale fetch() afin de récupérer des ressources à travers le réseau de manière asynchrone.
let formulaire = document.querySelector(".formulaire");
fetch("http://localhost:3000/api/auth")
  .then((data) => data.json())
  .then(() => {
    formulaire.innerHTML += `
    <form>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Adresse Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Connexion</button>
    </form>`;
    
  })
  .catch((error) => {
    formulaire.innerHTML = 
    `
      l'erreur suivante a été remontée : ${error}
    `;
  });
