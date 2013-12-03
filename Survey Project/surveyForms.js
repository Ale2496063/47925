//CIS 14A 
//Amy Le

//need a function to validate our survey and ensure that all entries have been filled out properly

//For Survey 1

function checkButtonsSurvey1(formName){
	var formAccept = false;
	//will check radio buttons first to see if selected
	//array of radio names that will use in loop and check
	var radioList = ["train", "wood", "rainbow", "burrito", "baconIsle", "cookie", "sleep"];
	// each radio name in the form will have it's own array of booleans because of same name
	//loop through our radioList and check its boolean array
	for (var i = 0; i < radioList.length; i++){
		var currentRadioArray = formName[radioList[i]];
		//now have array of boolean values example[F,F,F,F], loop through each
		for ( var i = 0; i < currentRadioArray.length; i ++){
			//check for a true boolean to indicate that a selection has been made
			//if true allow it to be accepted by setting formAccept to true and leaving the loop for that array set
			if( currentRadioArray[i].checked){
				formAccept = true;
				break;
			}
		}
		//in order to send alert msg to user regarding radios, check value of formAccept
		if (formAccept == false){
			alert("Questions 1-7 are incomplete");	
		}
	}
	return formAccept;
}







//need a function that grabs values from our submitted form