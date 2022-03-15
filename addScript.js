const form = document.forms.forma;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const image = e.target.elements.img.value.trim();
  const price = Number(e.target.elements.price.value.trim());
  const description = e.target.elements.des.value.trim();
  const city = e.target.elements.miestas.value;
  console.log(image);
  console.log(price);
  console.log(description);
  console.log(city);

  const home = { image, price, description, city };

  postData(home);
});

const postData = async (home) => {
  try {
    const res = await fetch("https://radial-reinvented-shoe.glitch.me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(home),
    });
    const data = await res.json();

    return alert(data.msg || "Issue");
  } catch (error) {
    return alert(error.message || "An aerror has happened");
  }
};
