// CREATE AN ARRAY OF EMPLOYEES
let employees = [
{id:88888888,name:'Zak', extension:8888, email: 'zak@gmail.com', department: "Administrative"}, 
{id:11111111,name:'Jessica', extension:1111, email: 'jessica@gmail.com', department: "Engineer"},
{id:22222222,name:'Mark', extension:2222, email: 'mark@gmail.com', department: "Executive"},
{id:33333333,name:'Fred', extension:3333, email: 'fred@gmail.com', department: "Marketing"},
{id:44444444,name:'Sally', extension:4444, email: 'sally@gmail.com', department: "Sales"}]


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if(localStorage.getItem('employees'))
// sessionStorage.employees = JSON.stringify(employees)
// console.log(JSON.parse(sessionStorage.getItem('employees')))
employees = JSON.parse(localStorage.getItem('employees'))
// GET DOM ELEMENTS

let form = document.querySelector('form')
let table = document.querySelector('table')
// let empCount = document.getElementById('empCount').value = 0
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded',buildGrid)
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    console.log(id)
    let name = document.getElementById('name').value
    console.log(name)
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = {
        id: id,
        name: name,
        extension: extension,
        email: email,
        department: department
    }
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus() 
});
// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if(e.target.classList.contains('delete')){
    if (confirm('Are you sure you want to delete this employee?')){     
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = table.deleteRow(e.target.closest('tr').rowIndex)
        // REMOVE EMPLOYEE FROM ARRAY
    employees.splice(rowIndex -1,1)
        // BUILD THE GRID
        buildGrid()
    }
    }
 });

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    table.innerHTML = ''
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
   for (let employee of employees){
    let row = tbody.insertRow()
   
    // REBUILDING THE ROW STRUCTURE
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId = document.createTextNode(employee.id)
    cell1.appendChild(textId)
    let textName = document.createTextNode(employee.name)
    cell2.appendChild(textName)
    let textExt = document.createTextNode(employee.extension)
    cell3.appendChild(textExt)
    let textEmail = document.createTextNode(employee.email)
    cell4.appendChild(textEmail)
    let textDept = document.createTextNode(employee.department)
    cell5.appendChild(textDept)
    //DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cell5.appendChild(deleteBtn)
   }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    document.getElementById('empCount').innerHTML = `(${employees.length})`
    // STORE THE ARRAY IN STORAGE
   localStorage.setItem('employees', JSON.stringify(employees))
};