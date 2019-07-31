const { expect } = require('chai')
const Product = require( '../src/product');
const CarInsurance = require('../src/carInsurance');

const megaCoverage = 'Mega Coverage';

describe('Mega Coverage', () => {

	it('Should have a price be equal to 80', () => {
		const carInsurance = new CarInsurance([new Product(megaCoverage, -1, 80)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).equal(80);
	});

	it('Should have a price be 80 and it never alters', () => {
		const carInsurance = new CarInsurance([new Product(megaCoverage, -1, 90)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).equal(80);
	});
});
