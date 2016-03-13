/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var table = document.getElementById('cars');


$.getJSON('http://localhost:8200/car', function(data) {
    
    for (i = 0; i < data.length; i++) { 
        var row = table.insertRow(i +1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = data[i].regNumber;
        
        var cell2 = row.insertCell(1);
        cell2.innerHTML = data[i].manufacturer;
        
        var cell3 = row.insertCell(2);
        cell3.innerHTML = data[i].model;
        
        var cell4 = row.insertCell(3);
        cell4.innerHTML = data[i].year;
        
        var cell5 = row.insertCell(4);
        cell5.innerHTML = data[i].color;

    }
});




