/** 
	Amy Le
	CIS 14A
	Personal Project
**/

//now that have form that uses get method, name of field and its value appears in the url bar
//need to access that and split to separate name from value, then assign into object that will later use

function accessFormData (){
	//create an empty object that will return with properties created from form data
	var theFormObj = new Object ();
	//gather the data from the url
	var url = location.href;
	//now need to split, if look at url, name and values begin after ?
	//whenever split, an array is returned 
	var listOfParameters = url.split("?");
	//what is returned [ set 1, set 2], the parameters we want are in set 2
	var parameter = listOfParameters[1].split("&");
	//an array is returned [name=value, name=value]
	//want to get the names by themselves and values by themselves to add into object
	//need to loop through each value in parameter array and split accordingly
	var i = 0;
	while ( i < parameter.length){
		var separateSets = parameter[i].split("=");
		//returns [name, value] for each separateSet
		//assign name and value to separate variables that will be used in object
		var propName = separateSets[0];
		var propValue = separateSets[1];
		theFormObj[propName] = propValue;
		i ++;
	}
	return theFormObj;
}

function displayFormData(ourFormObject){
	//since it is an object, obj { name: value, name: value}
	//we want to display the name and value
	//to do this need to loop through each property name in object
	for (var propName in ourFormObject){
		document.write("<p>" + propName + ":" + ourFormObject[propName]+"</p>");
		//console.log(propName + " : " + ourFormObject[propName]);
	}
}