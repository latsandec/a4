const selectItem = (item = null, action) => {
	switch(action.type) {
        case 'SELECT_ITEM':
            if (item == action.payload) {
                item = null;
            } else {
                item = action.payload;
            }
            return item;
		default:
			return item;
	}
};

export default selectItem;