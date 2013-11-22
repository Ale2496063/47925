/* 
	Cody By Amy Le
	CIS 14 A
	Personal Project
	
	Javascript code for the custom randomizer where the user inputs between two and three values
*/

//need to get name and value of each field from the submitted form
//similar to what did in preset randomizer
//get name value pairs and separate value from pairs, push value that into an array, and then have random number to reference one of the array values
//display the result

function getCustomData (){
	//get data from url
	var url = location.href;
	var listOfData = url.split("?");
	var dataSet = listOfData[1];
	var indivData = dataSet.split("&");
	//now have [entry1=value, entry2=value, entry3=value]
	var customData = [];
	for (var i = 0; i < indivData.length; i ++){
		var sepNamVal = indivData[i].split("=");
		//for each value in the indivData array
		//get back [name, value] after the split
		var value = sepNamVal[1];
		customData.push(value);
	}
	return customData;
	//at this point our array returned should be [Value1, Value2, Value3/Choice 3]
	//if the last value in our array is Choice 3, will need to remove it from before randomize
}



//create function to check our last value in the array and remove it if necessary
function checkLastArrayValue (array){
	if ( array[2] == "Choice 3" || "Choice+3"){
		//removed the extra
		array.pop();
		var newArray = array;
	}else {
		var newArray = array;
	}
	return newArray;
}

//now that have way to get our values, and remove unnecessary one if only inputted 2 values
//need way to randomize and display, will be using same technique as in javascriptForDefault.js
//reference the array value using a random number
function getRandomFood (array){
	var num = Math.floor(Math.random()*(array.length));
	var result = array[num];
	return result;
}

function runCustomRandomizer(){
	//get our array of values
	var dataArray = getCustomData();
	//check our array and get new one if changed
	var finalArray = checkLastArrayValue(dataArray);
	//now that have our final array of values, have result picked!
	var choice = getRandomFood (finalArray);
	//now output to document
	document.write("Out of the choices you gave me, I have picked " + choice +" for you!" );
};


