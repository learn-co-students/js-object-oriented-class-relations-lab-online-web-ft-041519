
let store = { drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  } 
  trips() {
    // returns all of the trips that a driver has taken
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers() {
    return this.trips().map(function(trip) {
      return trip.passenger()
    });
  }
  
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  } 
  
  trips() {
    // returns all of the trips that a passenger has taken
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }
  drivers() {
    // - returns all of the drivers that a passenger has taken on a trip
    return this.trips().map(function(trip) {
      return trip.driver()
    });
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  } 
  
  setDriver(driver) {
    this.driverId = driver.id;
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id;
  }

  driver() {
    //  returns the driver associated with the trip
    return store.drivers.find(
      function(driver) {
          return driver.id === this.driverId;
      }.bind(this)
  );
  }

  passenger() {
    // - returns the passenger associated with the trip
    return store.passengers.find(
      function(passenger) {
          return passenger.id === this.passengerId;
      }.bind(this)
  );
  } 
}