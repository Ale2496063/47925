//CIS 14A 
//Amy Le

//need a function to validate our survey and ensure that all entries have been filled out properly

//For Survey 1

//change this function name to reflect that it only targets radio buttons
function checkButtonsSurvey1(formName){
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
		if (formName[checkboxList[i].checked]){
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






//need a function that grabs values from our submitted form