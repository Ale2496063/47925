//CIS 14A 
//Amy Le

//need a function to validate our survey and ensure that all entries have been filled out properly

/*************************	For Survey 1 Validation	*********************/

//function to validate radios
function validateRadiosSurvey1(formName) {
	var formAccept = false,
        questionStatus = [];
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

/*************************	For Survey 2 Validation	*********************/

function validateRadiosSurvey2(formName) {
	var formAccept = false;
	var questionStatus = [];
	//will check radio buttons first to see if selected
	//array of radio names that will use in loop and check
	var radioList = ["inLab","accidentFree","undies"];
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
	if ( questionStatus.length === 3){
		formAccept = true;
	} else {
		alert("Questions 1-3 are incomplete");	
	}
	return formAccept;
}

/*************************	For Survey 3 Validation	*********************/

function validateBoxesSurvey3(formName){
	//similar to radio button validation, have array that will push values into
	var questionStatus = [];
	var boxStatus = [];
	var checkboxesValid = false;
	//2d array of our checkbox names. Inner array consists of names for particular question
	//outer array [question 1, question 2, question 3]
	var checkBoxArray2D = [["shelter", "montypython","swim", "hunt"],["pretend","igloo","cameraman","position"],["blanket","eat","unpack", "tv"]];
	//for each outer array, loop through the inner array values to do a check
	for (var i = 0; i < checkBoxArray2D.length ; i ++){
		for ( var k = 0; k < checkBoxArray2D[i].length; k ++){
			if( formName[checkBoxArray2D[i][k]].checked){
				boxStatus.push(formName[checkBoxArray2D[i][k]].checked);
			}
		}
		//if have at least one box checked then that question is valid, otherwise send alert
		//push boolean to our questionStatus array
		if( boxStatus.length >= 1){
			questionStatus.push("valid");
		}
		//reinitialize boxStatus
		boxStatus.length = 0;
	}
	//allow form to be submitted if questionStatus array = 3
		if (questionStatus.length === 3){
			checkboxesValid = true;
		}else{
			alert("Please select at least one option per question.");
		}
	return checkboxesValid;
} 

/*************************	For Survey Create Account Validation	*********************/

function validateAccountForm (formName){
	var formValid = false;
	//array of our input names to go through and validate with switch
	var inputNames = ["newFirstName", "newLastName", "newEmail", "newUserNam", "newUserPw", "verifyPw"];
	var error = [];
	//need to get the value at each field and compare to regex
	for (var i = 0; i < inputNames.length; i ++){
		var name = inputNames[i];
		var inputValue = formName[name].value;
		
		//use switch
		switch(name){
			case "newFirstName":
				var fNamPattern = new RegExp ("(^[A-Z]{1}[a-z]*$|^[A-Z]{1}[a-z]{1}[A-Z]{1}[a-z]*|^[A-Z]{1}[a-z]*[\+, \s]{1}[A-Z]{1}[a-z]*$)");
				var fNameResult = fNamPattern.exec(inputValue);
				if (fNameResult == null){
					error.push(fNameResult);
				}
				break;
			case "newLastName":
				var lNamePattern = new RegExp ("(^[A-Z]{1}[a-z]*$|^[A-Z]{1}[a-z]{1}[A-Z]{1}[a-z]*|^[A-Z]{1}[a-z]*[\+, \s]{1}[A-Z]{1}[a-z]*$)");
				var lNameResult = lNamePattern.exec(inputValue);
				if (fNameResult == null){
					error.push(lNameResult);
				}
				break;
			case "newEmail":
				var emailPattern = new RegExp ("[A-Z, a-z, 0-9, \w,\!,\#,\$,\%,\&,\',\*,\+,\-,\/,\=,\?,\^,\_,\`,\{,\|,\},\~]+\@{1}[A-Z, a-z]+\.[A-Z, a-z]+");
				var emailResult = emailPattern.exec(inputValue);
				if (emailResult == null){
					error.push(emailResult);
				}
				break;
			case "newUserNam":
				var usernamePattern = new RegExp("^[A-Z, a-z, 0-9]{6}$");
				var usernameResult = usernamePattern.exec(inputValue);
				if (usernameResult == null){
					error.push(usernameResult);
				}
				break;
			case "newUserPw":
				var newPwPattern = new RegExp("^[0-9]{4}$");
				var newPwResult = newPwPattern.exec(inputValue);
				if (newPwResult == null){
					error.push(newPwResult);	
				}
				break;
			case "verifyPw":
				//must compare to value at "newUserPw"
				if (inputValue != formName["newUserPw"].value){
					error.push(null);
				}
		}
	}
	//check to see if any values in our error array, if there are, form is invalid
	if (error.length > 0){
		alert("One or more fields are invalid");
	} else{
		formValid = true;
	}
	return formValid;
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

//function to display our data from the submitted form object
function displayFormDataObject(formObj){
	for (var propName in formObj){
		document.write("<p>" + propName + ":" + formObj[propName]+"</p>");
	}
}

/*************************	For Local Storage Survey 1	*********************/

/**
for each question need to determine which answer selected
need to be able to keep track of how many times each answer selected per question
so after 6 people takes survey results should be as follows:
example for single question
 q1 a1 selected 0 times (if zero we should not display to document)
 q1 a2 selected 3 times
 q1 a3 selected 2 times
 q1 a4 selected 1 times
 
 already have our submitted form data stored into a form object
**/

//every time someone takes a survey, this must run to keep track of answers
//only keep track of radio/checkbox questions, not text input ones
function answerTracker(formObj){
    //variable to keep track of how many times survey has been taken
	var numberOfSurveyTakers = localStorage.getItem('numberOfSurveyTakers') || 0;
	//will return null if no value in local storage

	//counters for each answer per question
    //either get the value that is stored in local storage or 0, if no item is in local storage a value of null is returned
	var q1a1 = localStorage.getItem('q1a1') || 0,        
        q1a2 = localStorage.getItem('q1a2') || 0;
	var q1a3 = localStorage.getItem('q1a3') || 0;
	var q1a4 = localStorage.getItem('q1a4') || 0;

	var q2a1 = localStorage.getItem('q2a1') || 0;
	var q2a2 = localStorage.getItem('q2a2') || 0;
	var q2a3 = localStorage.getItem('q2a3') || 0;
	var q2a4 = localStorage.getItem('q2a4') || 0;

	var q3a1 = localStorage.getItem('q3a1') || 0;
	var q3a2 = localStorage.getItem('q3a2') || 0;
	var q3a3 = localStorage.getItem('q3a3') || 0;
	var q3a4 = localStorage.getItem('q3a4') || 0;

	var q4a1 = localStorage.getItem('q4a1') || 0;
	var q4a2 = localStorage.getItem('q4a2') || 0;
	var q4a3 = localStorage.getItem('q4a3') || 0;
	var q4a4 = localStorage.getItem('q4a4') || 0;
	var q4a5 = localStorage.getItem('q4a5') || 0;

	var q5a1 = localStorage.getItem('q5a1') || 0;
	var q5a2 = localStorage.getItem('q5a2') || 0;
	var q5a3 = localStorage.getItem('q5a3') || 0;
	var q5a4 = localStorage.getItem('q5a4') || 0;
	var q5a5 = localStorage.getItem('q5a5') || 0;

	var q6a1 = localStorage.getItem('q6a1') || 0;
	var q6a2 = localStorage.getItem('q6a2') || 0;

	var q7a1 = localStorage.getItem('q7a1') || 0;
	var q7a2 = localStorage.getItem('q7a2') || 0;

	var q8a1 = localStorage.getItem('q8a1') || 0;
	var q8a2 = localStorage.getItem('q8a2') || 0;
	var q8a3 = localStorage.getItem('q8a3') || 0;
	var q8a4 = localStorage.getItem('q8a4') || 0;
	
	
	//increment corresponding counter for selected answer per question
	for (var name in formObj){
		switch(formObj[name]){
			//question 1
			case "jump":
				q1a1++;
				break;
			case "wait":
				q1a2++;
				break;
			case "power":
				q1a3++;
				break;
			case "dream":
				q1a4++;
				break;
			//question 2
			case "none":
				q2a1++;
				break;
			case "forest":
				q2a2++;
				break;
			case "one":
				q2a3++;
				break;
			case "toothless":
				q2a4++;
				break;
			//question 3
			case "Midas":
				q3a1++;
				break;
			case "leprechauns":
				q3a2++;
				break;
			case "bling":
				q3a3++;
				break;
			case "prism":
				q3a4++;
				break;
			//question 4
			case "burrito1":
				q4a1++;
				break;
			case "burrito2":
				q4a2++;
				break;
			case "burrito3":
				q4a3++;
				break;
			case "burrito4":
				q4a4++;
				break;
			case "burrito5":
				q4a5++;
				break;
			//question 5
			case "baconIsle1":
				q5a1++;
				break;
			case "baconIsle2":
				q5a2++;
				break;
			case "baconIsle3":
				q5a3++;
				break;
			case "baconIsle4":
				q5a4++;
				break;
			case "baconIsle5":
				q5a5++;
				break;
			//question 6
			case "cookieT":
				q6a1++;
				break;
			case "cookieF":
				q6a2++;
				break;
			//question 7
			case "sleepT":
				q7a1++;
				break;
			case "sleepF":
				q7a2++;
				break;
			//question 8 answer 1
			case "sad":
				q8a1++;
				break;
			//question 8 answer 2
			case "happy":
				q8a2++;
				break;
			//question 8 answer 3
			case "crazy":
				q8a3++;
				break;
			//question 8 answer 4
			case "mad":
				q8a4++;
				break;
			default:
				//end
		} //end of switch
	} //end of loop
    //increment our variable that keeps track of number of times survey taken
    numberOfSurveyTakers++;
	//set items into local storage
	localStorage.setItem("numberOfSurveyTakers", numberOfSurveyTakers);
	localStorage.setItem("q1a1", q1a1);
	localStorage.setItem("q1a2", q1a2);
	localStorage.setItem("q1a3", q1a3);
	localStorage.setItem("q1a4", q1a4);
	
	localStorage.setItem("q2a1", q2a1);
	localStorage.setItem("q2a2", q2a2);
	localStorage.setItem("q2a3", q2a3);
	localStorage.setItem("q2a4", q2a4);
	
	localStorage.setItem("q3a1", q3a1);
    localStorage.setItem("q3a2", q3a2);
    localStorage.setItem("q3a3", q3a3);
    localStorage.setItem("q3a4", q3a4);
    
    localStorage.setItem("q4a1", q4a1);
    localStorage.setItem("q4a2", q4a2);
    localStorage.setItem("q4a3", q4a3);
    localStorage.setItem("q4a4", q4a4);
    localStorage.setItem("q4a5", q4a5);
    
    localStorage.setItem("q5a1", q5a1);
    localStorage.setItem("q5a2", q5a2);
    localStorage.setItem("q5a3", q5a3);
    localStorage.setItem("q5a4", q5a4);
    localStorage.setItem("q5a5", q5a5);
    
    localStorage.setItem("q6a1", q6a1);
    localStorage.setItem("q6a2", q6a2);
    
    localStorage.setItem("q7a1", q7a1);
    localStorage.setItem("q7a2", q7a2);
    
    localStorage.setItem("q8a1", q8a1);
    localStorage.setItem("q8a2", q8a2);
    localStorage.setItem("q8a3", q8a3);
    localStorage.setItem("q8a4", q8a4);
} //end of function

// example on how to get item stored  localStorage.getItem("q1a1") // returns 0, 1, etc.




/** -- Local Storage -- **/

/*localStorage = {};

localStorage.setItem(key, value);

localStorage.getItem(key);*/

/*************************/

/*************************	For Local Storage Survey 2	*********************/
function answerTracker2(formObj){
    //have way to keep track of how many people take this survey
    var survey2Takers = localStorage.getItem('survey2Takers') || 0;
    //our counters for survey 2
    var s2q1a1 = localStorage.getItem('s2q1a1') || 0;
    var s2q1a2 = localStorage.getItem('s2q1a2') || 0;
    var s2q1a3 = localStorage.getItem('s2q1a3') || 0;
    var s2q1a4 = localStorage.getItem('s2q1a4') || 0;

    var s2q2a1 = localStorage.getItem('s2q2a1') || 0;
    var s2q2a2 = localStorage.getItem('s2q2a2') || 0;
    var s2q2a3 = localStorage.getItem('s2q2a3') || 0;
    var s2q2a4 = localStorage.getItem('s2q2a4') || 0;

    var s2q3a1 = localStorage.getItem('s2q3a1') || 0;
    var s2q3a2 = localStorage.getItem('s2q3a2') || 0;
    
    //loop through each name and compare its value to increment its corresponding counter
    for(var name in formObj){
        switch(formObj[name]){
            //question 1
            case 'scareTactic':
                s2q1a1++;
                break;
            case 'leave':
                s2q1a2++;
                break;
            case 'play':
                s2q1a3++;
                break;
            case 'science':
                s2q1a4++;
                break;
            //question 2
            case 'survive':
                s2q2a1++;
                break;
            case 'disappoint':
                s2q2a2++;
                break;
            case 'scheme':
                s2q2a3++;
                break;
            case 'super':
                s2q2a4++;
                break;
            //question 3
            case 'yeaUndies':
                s2q3a1++;
                break;
            case 'nayUndies':
                s2q3a2++;
                break;
            default:
        }
    }
    //increment our number of survey takers
    survey2Takers++;
    //set our values for counter into local storage
    localStorage.setItem('survey2Takers', survey2Takers);
    localStorage.setItem('s2q1a1', s2q1a1);
    localStorage.setItem('s2q1a2', s2q1a2);
    localStorage.setItem('s2q1a3', s2q1a3);
    localStorage.setItem('s2q1a4', s2q1a4);
    localStorage.setItem('s2q2a1', s2q2a1);
    localStorage.setItem('s2q2a2', s2q2a2);
    localStorage.setItem('s2q2a3', s2q2a3);
    localStorage.setItem('s2q2a4', s2q2a4);
    localStorage.setItem('s2q3a1', s2q3a1);
    localStorage.setItem('s2q3a2', s2q3a2);
}

/*************************	For Local Storage Survey 3	*********************/

function answerTracker3(formObj){
    //counter for number of times survey taken
    var survey3Takers = localStorage.getItem('survey3Takers') || 0;
    //counter for all question answers
    var s3q1a1 = localStorage.getItem('s3q1a1') || 0;
    var s3q1a2 = localStorage.getItem('s3q1a2') || 0;
    var s3q1a3 = localStorage.getItem('s3q1a3') || 0;
    var s3q1a4 = localStorage.getItem('s3q1a4') || 0;

    var s3q2a1 = localStorage.getItem('s3q2a1') || 0;   
    var s3q2a2 = localStorage.getItem('s3q2a2') || 0;
    var s3q2a3 = localStorage.getItem('s3q2a3') || 0;
    var s3q2a4 = localStorage.getItem('s3q2a4') || 0;

    var s3q3a1 = localStorage.getItem('s3q3a1') || 0;
    var s3q3a2 = localStorage.getItem('s3q3a2') || 0;
    var s3q3a3 = localStorage.getItem('s3q3a3') || 0;
    var s3q3a4 = localStorage.getItem('s3q3a4') || 0;
    //now loop through our submitted form object values to match with case
    for(var name in formObj){
        switch(formObj[name]){
            case 'shelter':
                s3q1a1++;
                break;
            case 'montypython':
                s3q1a2++;
                break;
            case 'swim':
                s3q1a3++;
                break;
            case 'hunt':
                s3q1a4++;
                break;
            case 'pretend':
                s3q2a1++;
                break;
            case 'igloo':
                s3q2a2++;
                break;
            case 'cameraman':
                s3q2a3++;
                break;
            case 'position':
                s3q2a4++;
                break;
            case 'blanket':
                s3q3a1++;
                break;
            case 'eat':
                s3q3a2++;
                break;
            case 'unpack':
                s3q3a3++;
                break;
            case 'tv':
                s3q3a4++;
                break;
            default:
                //do nothing
        }//end of switch
    }//end of loop
    //increment survey3Takers
    survey3Takers++;
    //set our variables in local storage
    localStorage.setItem('survey3Takers', survey3Takers);
    localStorage.setItem('s3q1a1', s3q1a1);
    localStorage.setItem('s3q1a2', s3q1a2);
    localStorage.setItem('s3q1a3', s3q1a3);
    localStorage.setItem('s3q1a4', s3q1a4);
    localStorage.setItem('s3q2a1', s3q2a1);
    localStorage.setItem('s3q2a2', s3q2a2);
    localStorage.setItem('s3q2a3', s3q2a3);
    localStorage.setItem('s3q2a4', s3q2a4);
    localStorage.setItem('s3q3a1', s3q3a1);
    localStorage.setItem('s3q3a2', s3q3a2);
    localStorage.setItem('s3q3a3', s3q3a3);
    localStorage.setItem('s3q3a4', s3q3a4);
}

