/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
   this.carPark = {
     '1': big,
     '2': medium,
     '3': small
   }
   //return [this.carPark[1], this.carPark[2], this.carPark[3]]

};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  console.log('carPark =', this.carPark, 'carType =', carType)
  if ( this.carPark[carType] > 0 ) {
    this.carPark[carType]--
    return true
  } else {
    return false
  }
};
/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */