const products = [
  {
    name: "Samsung Galaxy A05, 6.7, 64GB + 4GB RAM Dual SIM, 5000mAh, Black, 2YRs WRTY",
    price: "KES 13,187",
    shop: "Jumia",
    link: "https://www.jumia.co.ke",
    image: "assets/infinix.jpg"
  },
    {
    name: "Samsung Galaxy A16 128GB+4GB 6.7",
    price: "KES 16,399",
    shop: "Kilimall",
    link: "http://k.kili.co/17hjp",
    image: "assets/samsung.jpg"
  },
  {
    name: "Samsung Galaxy A26 5G 256GB+8GB 6.7",
    price: "KES 36,899",
    shop: "Kilimall",
    link: "http://k.kili.co/1r9ji",
    image: "assets/samsung.jpg"
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
