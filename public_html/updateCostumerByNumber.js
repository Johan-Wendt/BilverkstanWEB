/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var costumerQueryURL = 'http://localhost:8200/kund/';
var costumerNumber = window.location.search.substr(1);
var CNr = costumerQueryURL + costumerNumber;



$.getJSON(CNr, function(data) {
    document.getElementById('firstName').value=data['firstName'];
    document.getElementById('lastName').value=data['lastName'];
    document.getElementById('socialSecurityNumber').value=data['socialSecurityNumber'];
    document.getElementById('phone').value=data['phone'];
    document.getElementById('mobilePhone').value=data['mobilePhone'];
    document.getElementById('email').value=data['email'];    
});

$(function() {
  $('#theUpdateForm').submit(function(e){
      var postData = $(this).serializeArray();
      var formURL = $(this).attr("action");
      $.ajax(
    {
        url : formURL + costumerNumber,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) {
            window.alert('The costumer information has been updated');
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