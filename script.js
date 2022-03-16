const container = document.querySelector(".container");

function addHouse(data) {
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

let filterCities = [];
let index = 0;

const getData = async () => {
  try {
    const res = await fetch(
      `https://radial-reinvented-shoe.glitch.me/${index}/${filterCities.join()}`
    );
    const data = await res.json();

    if (data.length > 0) {
      container.innerHTML = "";
      return data.forEach((item) => {
        addHouse(item);
      });
    }

    return alert("No data found...");
  } catch (error) {
    return alert(error.message || "An error has happened");
  }
};

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("paspaustas")) {
      filterCities = filterCities.filter((x) => x !== e.target.textContent);
    } else {
      filterCities.push(e.target.textContent);
      console.log(filterCities);
    }
    getData();
    e.target.classList.toggle("paspaustas");
  });
});

document.querySelectorAll(".ibutton").forEach((button) => {
  button.addEventListener("click", (e) => {
    index = Number(e.target.textContent);

    getData();
    document.querySelectorAll(".ibutton").forEach((btn) => {
      btn.classList.remove("paspaustas");
    });
    e.target.classList.add("paspaustas");
  });
});

getData();
