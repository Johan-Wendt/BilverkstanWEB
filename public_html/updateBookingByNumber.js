/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var costumerQueryURL = 'http://localhost:8200/booking/';
var bookingNumber = window.location.search.substr(1);
var CNr = costumerQueryURL + bookingNumber;



$.getJSON(CNr, function(data) {
    document.getElementById('costumerId').value=data['costumerId'];
    document.getElementById('carRegistrationId').value=data['carRegistrationId'];
    document.getElementById('dateSubmissed').value=data['dateSubmissed'];
    document.getElementById('dateDoneEst').value=new Date(data['dateDoneEst']).toLocaleDateString()
            + " " + new Date(data['dateDoneEst']).toLocaleTimeString();
    document.getElementById('dateDoneAct').value=new Date(data['dateDoneAct']).toLocaleDateString()
            + " " + new Date(data['dateDoneAct']).toLocaleTimeString(); 
    document.getElementById('datePickedUp').value=new Date(data['datePickedUp']).toLocaleDateString()
            + "  " + new Date(data['datePickedUp']).toLocaleTimeString();
    document.getElementById('datePaid').value=data['datePaid'];
    document.getElementById('mechanic').value=data['mechanic'];
    document.getElementById('estimatePrice').value=data['estimatePrice'];
    document.getElementById('paidPrice').value=data['paidPrice']; 
    document.getElementById('dateRepairEst').value=new Date(data['dateRepairEst']).toLocaleDateString()
            + " " + new Date(data['dateRepairEst']).toLocaleTimeString();
    document.getElementById('dateRepairAct').value=new Date(data['dateRepairAct']).toLocaleDateString()
            + " " + new Date(data['dateRepairAct']).toLocaleTimeString();
});

$(function() {
  $('#theUpdateForm').submit(function(e){
      var postData = $(this).serializeArray();
      var formURL = $(this).attr("action");
      $.ajax(
    {
        url : formURL + bookingNumber,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) {
            window.alert('The booking information has been updated');
            window.location = 'index.html';
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //if fails      
        }
    });
    e.preventDefault(); //STOP default action
});
 
$("#ajaxform").submit();
});