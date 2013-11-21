/** 
	Amy Le
	CIS 14A
	Isshinryu Project 
**/



// code for message submission form on contact us page

//create function to get submitted form info and split to its parameters

function getSubmittedForm () {
	//create object to store parameters of form, goes int array
	var formObj = new Object ();
	//get url and separate parameters from page, will have array, length of array determined by how many times it splits at set location
	//split method automatically returns an array
	var url = location.href;
	var parameterslist = url.split("?");
	//now that have all parameters, separate each, since array want values at 1 (will be a string)
	//split string value, this will create a new array
	var parameters = parameterslist[1].split("&");
	//want to loop through each parameter set of the array created with split
	// want to then separate the property from its value, creates a new array from that string
	// store back into object
	for (var i = 0; i < parameters.length; i ++){
		var map = parameters[i].split("=");
		var property = map[0];
		var value = map[1];
		
		formObj[property] = value;
	}
	return formObj;
}



// display form info to page
// loop through each property in the object

function displaySubmittedForm (formObj) {
	for (var propertyName in formObj){
		document.write(propertyName + " = " + formObj[propertyName] + "<br />");
	}
}