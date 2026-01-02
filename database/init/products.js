// Creación de colección
db.createCollection('products');

// Valores de ejemplo
db.products.insertMany([
	{
		name: "Remera",
		image: "Remera.webp",
		description:
			"Remera fabricada a base de algodón.",
		price: 12000,
		stock: 10,
		discount: 10,
		createdAt: new Date(),
		updatedAt: new Date(),
		specifications: {
			Color: "Negro",
			Materials: "Algodón",
			Brand: "Emm s.a",
		},
	},
	{
		name: "Campera",
		image: "Campera.webp",
		description:
			"Campera de algodón y poliester, ideal para otoño y primavera",
		price: 20000,
		stock: 10,
		createdAt: new Date(),
		updatedAt: new Date(),
		specifications: {
			Color: "Negro",
			Materials: "Algodón, Poliester",
			Brand: "Enm s.a",
		},
	}
])