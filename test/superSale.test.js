// Dependencies
const { describe, it } = require('mocha');
const { expect } = require('chai');

// Dependencies local
const Product = require('../src/product');
const CarInsurance = require('../src/carInsurance');

// Constants
const SUPER_SALE = 'Super Sale';

describe('Super Sale', () => {
	it('should sellIn be equal to 15', () => {
		const _CarInsurance = new CarInsurance([new Product(SUPER_SALE, 15, 2)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].sellIn).equal(15);
	});

	it('should price be equal to 2', () => {
		const _CarInsurance = new CarInsurance([new Product(SUPER_SALE, 15, 4)]);
		const products = _CarInsurance.updatePrice();
		expect(products[0].price).equal(0);
	});
});