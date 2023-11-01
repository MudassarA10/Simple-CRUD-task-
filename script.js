/*get element by id and on event submit it get value as user 
input and add in table row*/
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var subtitle = document.getElementById('subtitle').value;
    var newRow = document.createElement('tr');/*here create an row in table in which user 
    data display by passing value as inner html*/
    newRow.innerHTML = `
<td>${title}</td>
<td>${subtitle}</td>

<td>
<button class="btn btn-warning btn-sm" onclick="updateRow(this)">Update</button>
<button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
</td>
`;

    document.getElementById('userTableBody').appendChild(newRow);

    document.getElementById('title').value = '';
    document.getElementById('subtitle').value = '';

});
/*delete function that on btn 
click delete row*/
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
/*update function that push value back to 
text fields and update value*/
function updateRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    var title = cells[0].innerText;
    var subtitle = cells[1].innerText;


    document.getElementById('title').value = title;
    document.getElementById('subtitle').value = subtitle;


    // Remove the row after editing
    deleteRow(button);
}
