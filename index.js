const returnFirstTwoDrivers = function(){
return ['Antonia', 'Nuru']
}

const returnLastTwoDrivers = function(){
return ['Amari', 'Mo']    
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value){
  return function(fare = 4){
    return fare * value;
  }
}
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, cb) {
    return cb(driversArray);
}







