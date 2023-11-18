const { describe, it } = require('mocha')
const CarService = require('./../../src/service/carService')
const { join } = require('path')
const { expect } = require('chai')

const carsDatabase = join(__dirname, './../../database', "cars.json")

const mocks = {
  validCarCategory: require('./../mocks/valid-carCategory.json'),
  validCar: require('./../mocks/valid-car.json'),
  validCustomer: require('./../mocks/valid-customer.json'),
}
describe('CarService Suite Tests', () => {
  let carService = {}

  before(() => {
    carService = new CarService({
      cars: carsDatabase
    })
  })

  it('given a carCategory it should return an available car ', async () => {
    const car = mocks.validCar
    // o object.create serve para deixar o mock com o mesmo uuid do objeto original, não sujando a instancia
    const carCategory = Object.create(mocks.validCarCategory)
    carCategory.ids = [car.id]
    
    const result = await carService.getAvailableCar(carCategory)
    const expected = car

    expect(result).to.be.deep.equal(expected)
  });
});
// parei em 14:31 da aula 2

