/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var urlBase = "updateCarRegNumber.html?";

$(function() {
    $('#choose').submit(function(e){
        var regNumber = window.document.getElementById("toUpdate").value;
        var url = urlBase + regNumber;
        window.location = url;
        e.preventDefault(); //STOP default action
    });
});

