const CarService = require('./../service/carService');

class CarController {
  constructor() {
    this.carService = new CarService({ cars: 'cars.json' });
  }

  async getAvailableCar(request, response) {
    const carCategory = req.body.carCategory;
    const car = await this.carService.getAvailableCar(carCategory);
    res.json(car);
  }

  calculateFinalPrice(request, response) {
    const { customer, carCategory, numberOfDays } = req.body;
    const finalPrice = this.carService.calculateFinalPrice(customer, carCategory, numberOfDays);
    res.json({ finalPrice });
  }

  async rent(request, response) {
    const { customer, carCategory, numberOfDays } = req.body;
    const transaction = await this.carService.rent(customer, carCategory, numberOfDays);
    res.json(transaction);
  }
}

module.exports = CarController;