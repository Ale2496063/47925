//CIS 14A 
//Amy Le

//need a function to validate our survey and ensure that all entries have been filled out properly

/*************************	For Survey 1 Validation	*********************/

//function to validate radios
function validateRadiosSurvey1(formName){
	var formAccept = false;
	var questionStatus = [];
	//will check radio buttons first to see if selected
	//array of radio names that will use in loop and check
	var radioList = ["train", "wood", "rainbow", "burrito", "baconIsle", "cookie", "sleep"];
	// each radio name in the form will have it's own array of booleans because of same name
	//loop through our radioList and check its boolean array
	for (var i = 0; i < radioList.length; i++){
		var currentRadioArray = formName[radioList[i]];
		//now have array of boolean values example[F,F,F,F], loop through each
		for ( var k = 0; k < currentRadioArray.length; k ++){
			//check for a true boolean to indicate that a selection has been made
			//if any selection made per question, save the status if it's true
			if( currentRadioArray[k].checked){
				questionStatus.push(currentRadioArray[k].checked)
				break;
			}
		}
	}
	//since created array of true booleans related to radio questions, must have length of 7 to be valid
	if ( questionStatus.length === 7){
		formAccept = true;
	} else {
		alert("Questions 1-7 are incomplete");	
	}
	return formAccept;
}



//create function to check if at least one checkbox is checked for validation
function validateCheckboxes(formName){
	//similar to radio button validation, have array that will push values into
	var questionStatus = [];
	var checkboxesValid = false;
	//array of checkbox names
	var checkboxList = ["aboutme_cry", "aboutme_smile", "aboutme_streak", "aboutme_mad"];
	for (var i = 0; i < checkboxList.length; i ++){
		//for each checkbox, check to see if checked, it true, push boolean to array
		if (formName[checkboxList[i]].checked){
			questionStatus.push(checkboxList[i].checked);
		}
	}
	//now check to see if questionStatus array length is greater or equal to 1, if so, then change checboxesValid to true
	if ( questionStatus.length >= 1){
		checkboxesValid = true;
	}else{
		alert("For question 8 please select at least one choice");
	}
	return checkboxesValid;
}



//create function that will validate fields that take in text
function validateText(formName){
	var textValid = true;
	var questionStatus = [];
	var textFieldNames = ["random", "why"];
	//create regex that will be used for comparison for BOTH sections requiring text
	//accept almost any content
	var textPattern = new RegExp ("[A-Z, a-z, 0-9, \w,\!,\#,\$,\%,\&,\',\*,\+,\-,\/,\=,\?,\^,\_,\`,\{,\|,\},\~]+");
	//get values at these text fields
	for (var i = 0; i < textFieldNames.length; i ++){
		var fieldName = textFieldNames[i];
		var fieldVal = document.survey1[fieldName].value;
		//compare each value to regex and push a false into our questionStatus array
		var fieldResult = textPattern.exec(fieldVal);
		if (fieldResult == null){
			questionStatus.push(false);
		}
		//if that fieldName does not match, false boolean pushed into array
		//if our questionStatus array has a length >= 1, means at least one field empty, change textValid to false and return	
	}
	if (questionStatus.length >= 1){
		alert("Question(s) 9 and/or 10 are incomplete!")
		textValid = false;
	}
	return textValid;
}


//create function that will run all validation functions for survey1
function validateSurvey1(formName){
	//if either validator returns false, do not allow form to submit
	if(!validateRadiosSurvey1(formName) || !validateCheckboxes(formName) || !validateText(formName)){
	//then run this block
		return false;
	}
	return true;
}






/*************************	To create object from our Form values	*********************/

function getSubmittedForm(){
	//create object to store our form keys and their corresponding properties
	var submittedFormObj = new Object();
	//get data from url
	var url = location.href;
	//now need to split at "?" to get our array with our name/values at index 2
	var urlSplitArray = url.split("?");
	var paramList = urlSplitArray[1];
	//split our paramList at "&" to get separate name value pair sets in array
	var namValSets = paramList.split("&");
	//now need to loop through this array and split into name and into value, assign to vars for use into putting in object
	var i = 0
	while ( i < namValSets.length){
		var sepNameAndVal = namValSets[i].split("=");
		//for each have array [name, value]
		var prop = sepNameAndVal[0];
		var val = sepNameAndVal[1];
		submittedFormObj[prop] = val;
		i ++;
	}
	return submittedFormObj;
}