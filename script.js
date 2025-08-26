const products = [
  {
    name: "Infinix Hot 40",
    price: "KES 15,000",
    shop: "Jumia",
    link: "https://www.jumia.co.ke",
    image: "assets/infinix.jpg"
  },
  {
    name: "Samsung Galaxy A15",
    price: "KES 23,680",
    shop: "Kilimall",
    link: "http://k.kili.co/164jw",
    image: "assets/samsung.jpg"
  },
  {
    name: "HP Laptop 14",
    price: "KES 45,000",
    shop: "Phones & Computers KE",
    link: "#",
    image: "assets/hp.jpg"
  },
  {
    name: "Logitech Mouse",
    price: "KES 2,000",
    shop: "Nairobi Tech Shop",
    link: "#",
    image: "assets/mouse.jpg"
  },
  {
    name: "Kaspersky Antivirus",
    price: "KES 3,500",
    shop: "Software Kenya",
    link: "#",
    image: "assets/antivirus.jpg"
  }
];

function displayProducts(filter = "") {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach(p => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p><strong>${p.price}</strong></p>
      <p>Shop: ${p.shop}</p>
      <a href="${p.link}" target="_blank">View on ${p.shop}</a>
    `;
    list.appendChild(item);
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  displayProducts(e.target.value);
});

// Initial load
displayProducts();