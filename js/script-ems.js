// CREATE AN ARRAY OF EMPLOYEES
let employees = [{id:88888888,name:'Zak', extension:8888, email: 'zak@gmail.com', department: "Administrative"}, 
{id:11111111,name:'Jessica', extension:1111, email: 'jessica@gmail.com', department: "Engineer"},
{id:22222222,name:'Mark', extension:2222, email: 'mark@gmail.com', department: "Executive"},
{id:33333333,name:'Fred', extension:3333, email: 'fred@gmail.com', department: "Marketing"},
{id:44444444,name:'Sally', extension:4444, email: 'sally@gmail.com', department: "Sales"}]


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
sessionStorage.employees = JSON.stringify(employees)
// console.log(JSON.parse(sessionStorage.getItem('employees')))

// GET DOM ELEMENTS
let form = document.querySelector('form')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let table = document.querySelector('table')

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    console.log(id)
    let name = document.getElementById('name').value
    console.log(name)
    let ext = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
 if (e.target.classList.contains('delete')){
    if (confirm('Are you sure you want to delete this employee?')){
       table.deleteRow(e.target.parentElement.parentElement.rowIndex)
    }
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY
function clearEmployeeList() {

}
        // BUILD THE GRID
 }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};