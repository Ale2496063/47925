/** 
	Amy Le
	CIS 14A
	Personal Project
**/
 
//create a constructor to create object for each food item

function FoodItem (type, name){
	this.cuisineType = type;
	this.foodName = name;
}
//array of food objects
var foodList = [
	new FoodItem ("Chinese", "Dim Sum"),
	new FoodItem ("Chinese", "Peking Duck"),
	new FoodItem ("Chinese", "Fried Rice"),
	new FoodItem ("Korean", "Korean BBQ"),
	new FoodItem ("Korean", "Bibimbap"),
	new FoodItem ("Korean", "Yangnyeom Tongdak"),
	new FoodItem ("Japanese","Sushi"),
	new FoodItem ("Japanese", "Ramen"),
	new FoodItem ("Japanese", "Gyudon"),
	new FoodItem ("Vietnamese", "Pho"),
	new FoodItem ("Vietnamese", "Banh Xeo"),
	new FoodItem ("Vietnamese","Goi Cuon"),
	new FoodItem ("Indian", "Curry"),
	new FoodItem ("Indian", "Tandoori Chicken"),
	new FoodItem ("Indian", "Malai Koftak"),
	new FoodItem ("Middle Eastern","Falafel"),
	new FoodItem ("Middle Eastern","Tahini"),
	new FoodItem ("Middle Eastern","Foul Mudammes"),
	new FoodItem ("Greek","Gyro"),
	new FoodItem ("Greek","Baklava"),
	new FoodItem ("Greek","Spanakopita"),
	new FoodItem ("Italian","Polenta and Gruyere"),
	new FoodItem ("Italian","Pasta"),
	new FoodItem ("Italian","Prosciutto Sandwich"),
	new FoodItem ("Mexican","Burrito"),
	new FoodItem ("Mexican","Taco"),
	new FoodItem ("Mexican","Quesadilla")
];

//validator not needed because not choosing an option will result in randomizer without a filter
//gives user choice to filter or not to filter 


//for filtering need to get value that user has indicated for type of food
//acquire food type from the filter
function getFoodType () {
	var url = location.href;
	var myParam = url.split("?");
	var NamVal = myParam[1].split("=");
	//now have array [name, value]
	return NamVal[1];
}
//now need way to compare the value (for filter yes) of the filter to object name in our foodList array 
//in order to be more specific for what radomizer can pick from
function runFilteredRandomizer(){
	var choice = getFoodType();
	//loop through the array to match our choice, put matching choices into a new array and use that for randomization
	var filteredFoodList = [];
	for (var i = 0; i < foodList.length; i ++){
		if( choice === foodList[i].cuisineType){
			filteredFoodList.push(foodList[i]);
		}
	}
	//now have our filtered list
	//need to get random number to pick an object from that list, randomly
	return getRandomFood(filteredFoodList);
}

//function to randomize with or without any filtering
function getRandomFood (list){
	var num = Math.floor(Math.random()*(list.length-1));
	var result = list[num];
	return result;
}


function filterDetermination () {
	//check to see if decided to go without filter and run 
	if (getFoodType() === "Select"){
		var chosen = getRandomFood (foodList);
		document.write("<p>The randomizer has spoken, you will eat " + chosen.foodName + "</p>");
	//otherwise use filtering scenario	
	}else {
		var filteredResult = runFilteredRandomizer();
		document.write("<p>The randomizer has decided your fate! With your help of course.</p>" + "<p>" + filteredResult.foodName + "</p>");
	}
}







