/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var urlBase = "updateBookingByNumber.html?";

$(function() {
    $('#choose').submit(function(e){
        var bookingNumber = window.document.getElementById("toUpdate").value;
        var url = urlBase + bookingNumber;
        window.location = url;
        e.preventDefault(); //STOP default action
    });
});

