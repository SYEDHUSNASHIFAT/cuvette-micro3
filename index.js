let foodchart = require("./food.json");
//list all the food items
function all() {
  foodchart.forEach((item) => {
    console.log(item);
  });
}
all()
//list all the food items with category vegetables
function veg() {
  foodchart.filter((item) => {
    if (item.category == "Vegetable") console.log(item);
  });
}
veg()
//list all the food items with category fruit
function fruit() {
  foodchart.filter((item) => {
    if (item.category == "Fruit") console.log(item);
  });
}
fruit()
//list all the food items with category protien
function protien() {
  foodchart.filter((item) => {
    if (item.category == "Protein") console.log(item);
  });
}
protien()
//list all the food items with category nuts
function nuts() {
  foodchart.filter((item) => {
    if (item.category == "Nuts") console.log(item);
  });
}
nuts()
//list all the food items with category grains
function grains() {
  foodchart.filter((item) => {
    if (item.category == "Grain") console.log(item);
  });
}
grains()
//list all the food items with category dairy
function dairy() {
  foodchart.filter((item) => {
    if (item.category == "Dairy") console.log(item);
  });
}
dairy()
//list all the food items with calorie above 100
function above() {
  let filter = foodchart.filter((item) => {
    if (item.calorie > 100) console.log(item);
  });
}
above()
//list all the food items with calorie below 100
function below() {
  foodchart.filter((item) => {
    if (item.calorie < 100) console.log(item);
  });
}
below()
//list all the food items with highest protien content to lowest
function highest() {
  foodchart.sort((a, b) => b.protiens - a.protiens);
  foodchart.forEach((item) => {
    console.log(item);
  });
}
highest()
//list all the food items with lowest cab content to highest
function lowest() {
  foodchart.sort((a, b) => a.cab - b.cab);
  foodchart.forEach((item) => {
    console.log(item);
  });
}
lowest()