const { expect } = require('chai')
const Product = require( '../src/product');
const CarInsurance = require('../src/carInsurance');

const fullCoverage = 'Full Coverage';

describe('Full Coverage', () => {

	it('Should never be higher than 50. Price equal to 50', () => {
		const carInsurance = new CarInsurance([new Product(fullCoverage, -1, 50)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(50);
	});

	it('Should have sellIn be equal to 2', () => {
		const carInsurance = new CarInsurance([new Product(fullCoverage, 3, 0)]);
		const products = carInsurance.updatePrice();
		expect(products[0].sellIn).to.equal(2);
	});

	it('Should have a price be equal to 1', () => {
		const carInsurance = new CarInsurance([new Product(fullCoverage, 3, 0)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(1);
	});

	
});
