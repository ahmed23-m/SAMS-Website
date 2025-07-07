// Initialize the map centered on Egypt
var map = L.map("map").setView([26.8206, 30.8025], 8); // Egypt center

// Add OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Add markers for specific cities or locations
var locations = [
  { name: "Cairo Office", lat: 30.0444, lng: 31.2357 },
  { name: "Zagazig Office", lat: 30.5877, lng: 31.5020},
];

locations.forEach((loc) => {
  L.marker([loc.lat, loc.lng])
    .addTo(map)
    .bindPopup(`<strong>${loc.name}</strong>`)
    .openPopup();
});
