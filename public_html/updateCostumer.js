/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var urlBase = "updateCostumerByNumber.html?";

$(function() {
    $('#chooseCostumer').submit(function(e){
        var costumerNumber = window.document.getElementById("costumerToUpdate").value;
        var url = urlBase + costumerNumber;
        window.location = url;
        e.preventDefault(); //STOP default action
    });
});




