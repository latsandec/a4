const preset = [
    {
		id: 0,
        name: "Fried Rice",
        description: "rice, egg, carrot, green pea",
        price: 15,
        url: "https://www.allrecipes.com/thmb/-695p6NRUJBW08joTDDq9xrMiyM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/79543-fried-rice-restaurant-style-DDMFS-4x3-b79a6ea27e0344399257ca1df67ca1cd.jpg",
		like: 0
		},
    {
		id: 1,
        name: "Miso Soup",
        description: "miso, tofu, green onion",
        price: 9,
        url: "https://www.allrecipes.com/thmb/q8mj4aSbHY2rJgky7JYEpWYkpQo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13107-miso-soup-Melissa-Goff-1x1-1-2962011c74e340fd8afbfaf43ac4b6f2.jpg",
		like: 0
       },
       {
		id: 2,
        name: "Bake Potato",
        description: "potato, cheese, butter",
        price: 12,
        url: "https://www.allrecipes.com/thmb/LzDye6-jP60bHuDufo6GqwGuBR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/85337-microwave-baked-potato-DDMFS-4x3-f10fc0f5cd9b4278b45204068803f61e.jpg",
		like: 0
       }
   ];

const buttonAdd = (items = preset, action) => {
	switch(action.type) {
        case 'ADD_ITEM':
            return [...items, action.payload];
		default:
			return items;
	}
};

export default buttonAdd;