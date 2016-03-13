/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
  $('#theForm').submit(function(e){
      var postData = $(this).serializeArray();
      var formURL = $(this).attr("action");
      $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) {
            window.alert(data['regNumber'] + " has been registrated");
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
