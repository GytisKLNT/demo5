function addHouse() {
  const container = document.querySelector(".container");

  const house = document.createElement("div");
  house.className = "houseBox";

  const housePicture = document.createElement("div");
  housePicture.className = "housePicture";
  housePicture.style.backgroundImage =
    'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';

  const aprasymas = document.createElement("div");
  aprasymas.className = "aprasymas";

  const kaina = document.createElement("h2");

  kaina.className = "kaina";
  kaina.textContent = "€ 30,000";

  const miestas = document.createElement("span");
  miestas.className = "miestas";
  miestas.textContent = "Vilnius";

  const para = document.createElement("p");
  para.className = "para";
  para.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, dolore.";

  aprasymas.appendChild(kaina);
  aprasymas.appendChild(miestas);
  aprasymas.appendChild(para);
  house.appendChild(housePicture);
  house.appendChild(aprasymas);
  container.appendChild(house);
}

addHouse();
