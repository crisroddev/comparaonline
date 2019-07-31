const { expect } = require('chai')
const Product = require( '../src/product');
const CarInsurance = require('../src/carInsurance');

const mediumCoverage = 'Medium Coverage';

describe ('Medium Coverage', () => {

	it('Should never have a negative product price.', () => {
		const carInsurance = new CarInsurance([new Product(mediumCoverage, 0, 0)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(0);
		expect(products[0].sellIn).to.equal(-1);
	});
    
	it('Should decrease twice as fast, once the sell by date has passed.', () => {
		const carInsurance = new CarInsurance([new Product(mediumCoverage, -1, 10)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(8);
		expect(products[0].sellIn).to.equal(-2);
	});


	it('should sellIn be equal to 29', () => {
		const carInsurance = new CarInsurance([new Product(mediumCoverage, 30, 0)]);
		const products = carInsurance.updatePrice();
		expect(products[0].sellIn).to.equal(29);
	});

	it('should price be equal to 29', () => {
		const carInsurance = new CarInsurance([new Product(mediumCoverage, 30, 30)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(29);
	});
});