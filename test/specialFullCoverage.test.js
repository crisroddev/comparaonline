const { expect } = require('chai')
const Product = require( '../src/product');
const CarInsurance = require('../src/carInsurance');

const specialFullCoverage = 'Special Full Coverage';

describe('Special Full Coverage', () => {
    
	it('Should have a sellIn be equal to 14', () => {
		const carInsurance = new CarInsurance([new Product(specialFullCoverage, 15, 20)]);
		const products = carInsurance.updatePrice();
		expect(products[0].sellIn).to.equal(14);
	});

	it('Should have a price be equal to 21', () => {
		const carInsurance = new CarInsurance([new Product(specialFullCoverage, 15, 20)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(21);
	});
    
	it('Should have a price be equal to 50', () => {
		const carInsurance = new CarInsurance([new Product(specialFullCoverage, 5, 50)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(50);
	});

	it('Should have a price be equal to 22', () => {
		const carInsurance = new CarInsurance([new Product(specialFullCoverage, 10, 20)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(22);
	});

	it('Should have a price be equal to 0 when sellIn is less than or equal to 0', () => {
		const carInsurance = new CarInsurance([new Product(specialFullCoverage, 0, 50)]);
		const products = carInsurance.updatePrice();
		expect(products[0].price).to.equal(0);
	});
});
