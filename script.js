//1. Create a JavaScript restaurantManager class with the following properties:

class restaurantManager {
  constructor(restaurantList) {
    this.restaurantList = restaurantList;
  }

  printAllRestaurantNames() {
    let restaurantListonconsole = [];
    for (let i = 0; i < this.restaurantList.length; i++) {
      restaurantListonconsole.push(this.restaurantList[i].name);
    }
    return `Printing all Restaurants Name:- ${restaurantListonconsole}`;
  }

  filterRestaurantByCity(cityName) {
    return this.restaurantList.filter((obj) => obj.city == cityName);
  }
}

var restaurantList = [
  { name: "abc", address: "www", city: "delhi" },
  { name: "efg", address: "iii", city: "mumbai" },
  { name: "hij", address: "rrr", city: "chennai" },
  { name: "klm", address: "nnn", city: "kolkata" },
];
const Restaurant = new restaurantManager(restaurantList);
console.log(Restaurant.printAllRestaurantNames());
console.log(Restaurant.filterRestaurantByCity("mumbai"));
console.log(Restaurant.filterRestaurantByCity("chennai"));
console.log(Restaurant.filterRestaurantByCity("delhi"));

/*********************************************************************************** */
/*********************************************************************************** */
/*********************************************************************************** */
/*********************************************************************************** */

//2. Please find order details for Punjabi Tadka restaurant in Delhi as:
console.log("\n\n\n");
const orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

//a. Calculate the total number of orders placed for the restaurant?.
var totalOrderPlaced = 0;
const totalOrderArray = Object.values(orderData);
for (let i = 0; i < totalOrderArray.length; i++) {
  totalOrderPlaced += totalOrderArray[i];
}
console.log(`Total number of orders placed = ${totalOrderPlaced}`);

//b. Calculate the number of order proportion option.
const proportion = Object.keys(orderData).length;
console.log(`Total number of order proportions = ${proportion}`);

//c. Calculate the percentage of each proportion in below format:

var outputArray = [];
var idd = 1;
for (let i in orderData) {
  let o = new Object();

  //id
  o.id = idd;
  idd += 1;

  //order
  o.order = i;

  //order-percentages
  let ans = (orderData[i] * 100) / totalOrderPlaced;
  o["order percentage"] = ans.toFixed(2);

  //restaurant
  o.restaurant = "Punjabi Tadka";
  outputArray.push(o);
}
console.log("Array of Objects :-");
for (let i = 0; i < outputArray.length; i++) {
  console.log(outputArray[i]);
}
