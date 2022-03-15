const getData = async () => {
  try {
    const res = await fetch("https://radial-reinvented-shoe.glitch.me");
    const data = await res.json();
    if (data.length > 0) {
      console.log(data);
      return data.forEach((item) => {
        console.log(item.image);
        addHouse(item);
      });
    }

    return alert("No data found...");
  } catch (error) {
    return alert(error.message || "An error has happened");
  }
};

function addHouse(data) {
  const container = document.querySelector(".container");

  const house = document.createElement("div");
  house.className = "houseBox";

  const housePicture = document.createElement("div");
  housePicture.className = "housePicture";
  housePicture.style.backgroundImage = `url('${data.image}')`;

  const aprasymas = document.createElement("div");
  aprasymas.className = "aprasymas";

  const kaina = document.createElement("h2");

  kaina.className = "kaina";
  kaina.textContent = `€ ${data.price.toLocaleString()}`;

  const miestas = document.createElement("span");
  miestas.className = "miestas";
  miestas.textContent = `${data.city}`;

  const para = document.createElement("p");
  para.className = "para";
  para.textContent = `${data.description}`;

  aprasymas.appendChild(kaina);
  aprasymas.appendChild(miestas);
  aprasymas.appendChild(para);

  house.appendChild(housePicture);
  house.appendChild(aprasymas);

  container.appendChild(house);
}

getData();
