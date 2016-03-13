/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var costumerQueryURL = 'http://localhost:8200/car/';
var carNumber = window.location.search.substr(1);
var CNr = costumerQueryURL + carNumber;



$.getJSON(CNr, function(data) {
    document.getElementById('regNumber').value=data['regNumber'];
    document.getElementById('manufacturer').value=data['manufacturer'];
    document.getElementById('model').value=data['model'];
    document.getElementById('year').value=data['year'];
    document.getElementById('color').value=data['color'];   
});

$(function() {
  $('#theUpdateForm').submit(function(e){
      var postData = $(this).serializeArray();
      var formURL = $(this).attr("action");
      $.ajax(
    {
        url : formURL + carNumber,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) {
            window.alert('The car information has been updated');
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