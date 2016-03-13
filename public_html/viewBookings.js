/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var table = document.getElementById('bookings');


$.getJSON('http://localhost:8200/booking', function(data) {
    
    for (i = 0; i < data.length; i++) { 
        var row = table.insertRow(i +1);
        
        var cell1 = row.insertCell(0);
        cell1.innerHTML = data[i].submissionId;
        
        var cell2 = row.insertCell(1);
        cell2.innerHTML = data[i].costumerId;
        
        var cell3 = row.insertCell(2);
        cell3.innerHTML = data[i].carRegistrationId;
        
        var cell4 = row.insertCell(3);
        cell4.innerHTML = data[i].dateSubmissed;
        
        var cell5 = row.insertCell(4);
        cell5.innerHTML = new Date(data[i].dateDoneEst).toLocaleDateString() +
                " / " + new Date(data[i].dateDoneEst).toLocaleTimeString();
        
        var cell6 = row.insertCell(5);
        cell6.innerHTML = new Date(data[i].dateDoneAct).toLocaleDateString() +
                " / " + new Date(data[i].dateDoneAct).toLocaleTimeString();
        
        var cell7 = row.insertCell(6);
        cell7.innerHTML = new Date(data[i].datePickedUp).toLocaleDateString() +
                " / " + new Date(data[i].datePickedUp).toLocaleTimeString();
        
        var cell8 = row.insertCell(7);
        cell8.innerHTML = data[i].datePaid;
        
        var cell9 = row.insertCell(8);
        cell9.innerHTML = data[i].mechanic;
        
        var cell10 = row.insertCell(9);
        cell10.innerHTML = data[i].estimatePrice;
        
        var cell11 = row.insertCell(10);
        cell11.innerHTML = data[i].paidPrice;
        
        var cell12 = row.insertCell(11);
        cell12.innerHTML = new Date(data[i].dateRepairEst).toLocaleDateString() +
                " / " + new Date(data[i].dateRepairEst).toLocaleTimeString();
        
        var cell13 = row.insertCell(12);
        cell13.innerHTML = new Date(data[i].dateRepairAct).toLocaleDateString() +
                " / " + new Date(data[i].dateRepairAct).toLocaleTimeString();


    }
});




