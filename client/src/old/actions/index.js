let nextId = 3;

export const add = (name, description, price, url) => {
	return {
		type: 'ADD_ITEM',
		payload:{id: nextId++,
				name,
				description,
				price,
				url}
	};
};

export const select = (item) => {
	return {
		type: 'SELECT_ITEM',
		payload:item
	};
};
