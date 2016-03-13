/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var table = document.getElementById('costumers');


$.getJSON('http://localhost:8200/kund', function(data) {
    
    for (i = 0; i < data.length; i++) { 
        var row = table.insertRow(i +1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = data[i].firstName;
        
        var cell2 = row.insertCell(1);
        cell2.innerHTML = data[i].lastName;
        
        var cell3 = row.insertCell(2);
        cell3.innerHTML = i + 1;
        
        var cell4 = row.insertCell(3);
        cell4.innerHTML = data[i].phone;
        
        var cell5 = row.insertCell(4);
        cell5.innerHTML = data[i].mobilePhone;
        
        var cell6 = row.insertCell(5);
        cell6.innerHTML = data[i].socialSecurityNumber;
        
        var cell7 = row.insertCell(6);
        cell7.innerHTML = data[i].email;
    }
});




