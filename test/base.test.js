const { expect } = require('chai')
const Product = require( '../src/product');
const CarInsurance = require('../src/carInsurance');

describe('General', () => {
	it('Should have product name equal to Medium Coverage', () => {
		const carInsurance = new CarInsurance([new Product('Medium Coverage', 0, 0)]);
		const products = carInsurance.updatePrice();
		expect(products[0].name).to.equal('Medium Coverage');
	});
});