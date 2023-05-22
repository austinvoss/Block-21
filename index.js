// Car class representing a general car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to get car details
  getCarDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  // Method to log the type of vehicle
  logVehicleType() {
    console.log("This is a regular car");
  }
}

// ElectricCar class extending Car and adding range property
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year); // call the super class constructor
    this.range = range;
  }

  // Method to get electric car details with range
  getCarDetails() {
    return `${super.getCarDetails()} has a range of ${this.range} miles`;
  }

  // Method to log the type of vehicle
  logVehicleType() {
    console.log("This is an electric car");
  }
}

const myCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myCar.getCarDetails()); // Logs: 2019 Tesla Model S has a range of 300 miles
myCar.logVehicleType(); // Logs: This is an electric car
