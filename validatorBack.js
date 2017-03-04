/*jshint browser:true */
/*jshint devel:true */
/*jshint esversion: 6 */
/* globals validator */
(function() {
    "use strict";

    //make the inputs variables
    var txt1 = document.getElementById("txtInput");
    var txt2 = document.getElementById("txtInput2");
    var txt3 = document.getElementById("txtInput3");
    var fbk = document.getElementById("lblFeedback");

    var tfv1 = new validator.TextFieldValidator(txt1);
    var tfv2 = new validator.TextFieldValidator(txt2, "#0000ff");
    var tfv3 = new validator.TextFieldValidator(txt3);

    onsubmit = function() {        
        fbk.innerHTML = "Field 1: " + tfv1.check() + "Field 2: " + tfv2.check() + "Field 3: " + tfv3.check();
    }

    txt1.onblur = function () {
        fbk.innerHTML = (tfv1.check());
    };

    txt2.onblur = function () {
        fbk.innerHTML = (tfv2.check());
    };

    txt3.onblur = function () {
        fbk.innerHTML = (tfv3.check());
        tfv3.setErrorColor("#FFF000");
        tfv3.setRegExp(/\d/);
    };


}());