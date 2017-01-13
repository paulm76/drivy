'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

function Ex1(){
  rentals.forEach(function(entry){
    const rentTime = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(1000 * 60 * 60 * 24) + 1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        entry.price = input.pricePerDay * rentTime + input.pricePerKm * entry.distance;
      }
    });
  });
}

function Ex2(){
  rentals.forEach(function(entry){
    var rentPrice = 0;
    const rentTime = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(1000 * 60 * 60 * 24) + 1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        rentPrice = input.pricePerKm * entry.distance;
        if(rentTime > 10){
          rentPrice += 5 * input.pricePerDay * rentTime / 10;
        }
        else if(rentTime > 4){
          rentPrice += 7 * input.pricePerDay * rentTime / 10;
        }
        else if(rentTime > 1){
          rentPrice += 9 * input.pricePerDay * rentTime / 10;
        }
        else{
          rentPrice += input.pricePerDay * rentTime;
        }
        entry.price = rentPrice;
        //console.log(input.pricePerKm + " *  " + entry.distance + " + " + input.pricePerDay + " * " + rentTime);
      }
    });
  });
}

function Ex3(){
  rentals.forEach(function(entry){
    var rentPrice = 0;
    const rentTime = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(1000 * 60 * 60 * 24) + 1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        rentPrice = input.pricePerKm * entry.distance;
        if(rentTime > 10){
          rentPrice += 5 * input.pricePerDay * rentTime / 10;
        }
        else if(rentTime > 4){
          rentPrice += 7 * input.pricePerDay * rentTime / 10;
        }
        else if(rentTime > 1){
          rentPrice += 9 * input.pricePerDay * rentTime / 10;
        }
        else{
          rentPrice += input.pricePerDay * rentTime;
        }
        entry.price = rentPrice;
        //console.log(input.pricePerKm + " *  " + entry.distance + " + " + input.pricePerDay + " * " + rentTime);
      }
    });
    entry.commission.insurance = 15 * rentPrice / 100;
    entry.commission.assistance = rentTime;
    entry.commission.drivy = entry.commission.insurance - entry.commission.assistance;
  });
}

function Ex4(){
  rentals.forEach(function(entry){
    var rentPrice = 0;
    const rentTime = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(1000 * 60 * 60 * 24) + 1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        rentPrice = input.pricePerKm * entry.distance;
        if(rentTime > 10){
          rentPrice += 5 * input.pricePerDay * rentTime / 10;
        }
        else if(rentTime > 4){
          rentPrice += 7 * input.pricePerDay * rentTime / 10;
        }
        else if(rentTime > 1){
          rentPrice += 9 * input.pricePerDay * rentTime / 10;
        }
        else{
          rentPrice += input.pricePerDay * rentTime;
        }
        entry.price = rentPrice;
        //console.log(input.pricePerKm + " *  " + entry.distance + " + " + input.pricePerDay + " * " + rentTime);
      }
    });
    entry.commission.insurance = 15 * rentPrice / 100;
    entry.commission.assistance = rentTime;
    entry.commission.drivy = entry.commission.insurance - entry.commission.assistance;
    if (entry.options.deductibleReduction == true){
      entry.commission.drivy += 4 * rentTime;
    }
  });
}

function Ex5(){
  Ex4();
  rentals.forEach(function(entry){
    actors.forEach(function(input){
      if (entry.id == input.rentalId){
        input.payment[0].amount = entry.price;
        input.payment[1].amount = entry.price - entry.commission.insurance - entry.commission.assistance - entry.commission.drivy;
        input.payment[2].amount = entry.commission.insurance;
        input.payment[3].amount = entry.commission.assistance;
        input.payment[4].amount = entry.commission.drivy;    
      }
    });
  });
}

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

