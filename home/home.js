const featuredCars = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Electric",
    image:
      "https://media.drivingelectric.com/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1698686429/drivingelectric/2023-10/Tesla%20Model%203%20facelift%201_awovfc.jpg",
    price: 89,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    features: ["Autopilot", "Premium Sound", "GPS"],
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/xt69261oz8mg1-RO/image;s=1600x832",
    price: 120,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    features: ["4WD", "Leather Seats", "Panoramic Roof"],
  },
  {
    id: 3,
    name: "Mercedes-Benz C-Class",
    category: "Luxury",
    image:
      "https://static.automarket.ro/v5/img/auto_resized/db/model/006/341/900050-1000x637-b-ea5374a0.jpg",
    price: 95,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    features: ["Premium Interior", "Advanced Safety", "Bluetooth"],
  },
  {
    id: 4,
    name: "Toyota Camry",
    category: "Sedan",
    image:
      "https://di-uploads-pod25.dealerinspire.com/edmarktoyota/uploads/2023/09/2024-toyota-camry-1.jpg",
    price: 65,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    features: ["Fuel Efficient", "Spacious", "Reliable"],
  },
  {
    id: 5,
    name: "Audi A4",
    category: "Luxury",
    image:
      "https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/caradvice/private/fe905ab05f2ec68b0c5e1201903d9bd0",
    price: 85,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    features: ["Virtual Cockpit", "LED Lights", "Premium Sound"],
  },
  {
    id: 6,
    name: "Ford Mustang",
    category: "Sports",
    image:
      "https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp",
    price: 110,
    seats: 4,
    transmission: "Manual",
    fuel: "Petrol",
    features: ["V8 Engine", "Sport Mode", "Performance Tires"],
  },
];

const carsGrid = document.getElementById("carsGrid");

featuredCars.forEach((car) => {
  const card = document.createElement("div");
  card.className = "car-card";

  card.innerHTML = `
    <div class="car-image">
      <img src="${car.image}" alt="${car.name}" />
    </div>
    <div class="car-content">
      <h3 class="car-name">${car.name}</h3>
      <div class="car-specs">
        <div class="spec"><span class="spec-text">${
          car.seats
        } Seats</span></div>
        <div class="spec"><span class="spec-text">${
          car.transmission
        }</span></div>
        <div class="spec"><span class="spec-text">${car.fuel}</span></div>
      </div>
      <div class="car-features">
        ${car.features
          .map((f) => `<span class="feature-tag">${f}</span>`)
          .join("")}
      </div>
      <div class="car-footer">
        <div class="car-price">
          <span class="price-amount">$${car.price}</span>
          <span class="price-period">/day</span>
        </div>
      </div>
    </div>
  `;

  carsGrid.appendChild(card);
});
