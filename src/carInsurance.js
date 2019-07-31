const MediumCoverage = require('./coverages/mediumCoverage');
const FullCoverage = require('./coverages/fullCoverage');
const MegaCoverage = require('./coverages/megaCoverage');
const SpecialFullCoverage = require('./coverages/specialFullCoverage');
const SuperSale = require('./coverages/superSale');


const coverages = [ 'Mega Coverage', 'Super Sale', 'Special Full Coverage', 'Full Coverage'];

class CarInsurance {

	constructor(products = []) {
		this.products = products;
	}

	updatePrice(d) {

		if (d === 0)
			return this.products;

		const mediumCoverage = new MediumCoverage();
		const fullCoverage = new FullCoverage();
		const megaCoverage = new MegaCoverage();
		const specialFullCoverage = new SpecialFullCoverage();
		const superSale = new SuperSale();

		for (const product of this.products) {

			if (product.name === coverages[0]) {
				product.price = megaCoverage.getPrice(product.price, product.sellIn);
			}

			if (product.name === coverages[1]) {
				product.price = superSale.getPrice();
			}

			if (product.name === coverages[2]) {
				product.price = specialFullCoverage.getPrice(product.price, product.sellIn);
			}

			if (product.name === coverages[3]) {
				product.price = fullCoverage.getPrice(product.price);
			}

			if (coverages.includes(product.name) === false) {
				product.price = mediumCoverage.getPrice(product.price, product.sellIn);
			}

			if (product.name !== coverages[1])
				product.sellIn = product.sellIn - 1;
		}

		return this.products;
	}
}

module.exports = CarInsurance;