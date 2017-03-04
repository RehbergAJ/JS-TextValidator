/*jshint browser:true */
/*jshint devel:true */
/*jshint esversion: 6 */
var validator = {
    TextFieldValidator: function (myTargetId, myColor) {
        "use strict";
        // The default regular expression of the validator
        var regExp = new RegExp("^\\w$");
        var errorColor;
        var textField = myTargetId;

        if (myColor !== undefined) {
            errorColor = myColor;
        } else {
            errorColor = "#FF0000";
        }

        //-----------------SETS
        // sets regex to the param myRegExp, myRegExp is input for the regex
        this.setRegExp = function (myRegExp) {
            regExp = new RegExp(myRegExp);
        };

        // sets regex to the param myColor, and myColor is the user input for the error color
         
        this.setErrorColor = function (myColor) {
            errorColor = myColor;
        };

        //------------------------PUBLIC METHODS        
        // true/false pass or fail textfield validation
        //return pass or fail of the textfield validation         
        this.check = function () {
            if (regExp.test(textField.value)) {
                myTargetId.style.borderColor = "#000";
                return true;
            } else {
                myTargetId.style.borderColor = errorColor;
                return false;
            }
        };
    }


};