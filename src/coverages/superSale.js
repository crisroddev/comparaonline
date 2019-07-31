class SuperSale {

	constructor() {
	}

	getPrice(price) {
		return price ? price - 2 : 0;
	}
}


module.exports = SuperSale;