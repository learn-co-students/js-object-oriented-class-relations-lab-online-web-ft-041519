let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = { drivers: [], passengers: [], trips: [] };

class Driver { 
    constructor(name) {
        this.name = name
        this.id = ++driverId

        store.drivers.push(this);
    } 

    trips() {  
        return store.trips.filter(
            function (trip) {
                return trip.driverId === this.id; 
            }.bind(this)
        );

    }

    passengers() {
        return this.trips().map(
            function (trip) {
                return trip.passenger();
            }
        )
    }

}

class Passenger {
    constructor(name) {
        this.name = name
        this.id = ++passengerId

        store.passengers.push(this);
    }

    trips() { 
        return store.trips.filter (
            function (trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        )
    }

    drivers() {
        return this.trips().map(
            function (trip) {
                return trip.driver();
            }
        )
    }

}

class Trip { 
    constructor(driver, passenger) {
        this.driverId = driver.id
        this.passengerId = passenger.id 
        this.id = ++tripId

        store.trips.push(this);
    }

    driver() {
        return store.drivers.find(
            function (driver) {
                return driver.id === this.driverId;
            }.bind(this)
        )
    }

    passenger() {
        return store.passengers.find(
            function (passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        )
    }

}

