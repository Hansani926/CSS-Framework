/*
$('#btnCustomer') .click(function () {
    saveCustomer();
});
function saveCustomer() {
    $('#tblCustomer>tr').off('click');
    $('#tblCustomer>tr').off('dblclick');

    let cusID = $("#txtCustomerID").val();
    let cusName = $("#txtCustomerName").val();
    let cusAddress = $("#txtCustomerAddress").val();
    let cusSalary = $("#txtCustomerSalry").val();

    var customer=new Customer(cusID,cusName,cusAddress,cusSalary);
    customerDB.push(customer);


    let row = "<tr><td>" + cusID + "</td><td>" + cusName + "</td><td>" + cusAddress + "</td><td>" + cusSalary + "</td></tr>";
    $('#tblCustomer').append(row);

    clearCustomerTextFields();

    $('#tblCustomer>tr').click(function () {

        let id = $(this).children('td:eq(0)').text();
        let name = $(this).children('td:eq(1)').text();
        let address = $(this).children('td:eq(2)').text();
        let salary = $(this).children('td:eq(3)').text();

        //set values for text fileds
        $("#txtCustomerID").val(id);
        $("#txtCustomerName").val(name);
        $("#txtCustomerAddress").val(address);
        $("#txtCustomerSalry").val(salary);

    });
    $("#tblCustomer>tr").on('dblclick',function (){
        $(this).remove();
    });
}*/
/*function clearCusfuntomerTextFields() {
    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalry").val("");
    $("#txtCustomerID").focus();
}*/




$('#btnCustomer').click(function () {
    $('#tblCustomer>tr').off('click');
    let cusID = $("#txtCustomerID").val();
    let cusName = $("#txtCustomerName").val();
    let cusAddress = $("#txtCustomerAddress").val();
    let cusSalary = $("#txtCustomerSalry").val();

    let res = saveCustomer(cusID, cusName, cusAddress, cusSalary);
    if(res)clearAllCustomerText();
    setTextfild();


});




$("#btnGetAll").click(function () {
    loadAllCustomerToTheTable();
    setTextfild();
});


$("#btnCusDelete").click(function () {
    let cusID = $("#txtCustomerID").val();
    let option=confirm(`Do you want to delete ID:${cusID}`);
    if (option){
        let res=deleteCustomer(cusID);
        if (res){
            alert("Customer Deleted");

        } else{
            alert("Delete Failed")
        }

    }
    loadAllCustomerToTheTable();
    clearAllCustomerText();
    setTextfild();
});



$("#btnCusUpdate").click(function () {

    let cusID = $("#txtCustomerID").val();
    let cusName = $("#txtCustomerName").val();
    let cusAddress = $("#txtCustomerAddress").val();
    let cusSalary = $("#txtCustomerSalry").val();

    let option=confirm(`Do you want to update ID:${cusID}`);
    if (option){
        let res=updateCustomer(cusID, cusName,cusAddress, cusSalary);
        if (res){
            alert("Customer Update");

        } else{
            alert("Delete Update")
        }

    }
    loadAllCustomerToTheTable();
    clearAllCustomerText();
    setTextfild();

});









$("#txtCustomerID").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let customer = searchCustomer($(this).val());
        if (customer != null) {
            $("#txtCustomerID").val(customer.getCustomerID());
            $("#txtCustomerName").val(customer.getCustomerName());
            $("#txtCustomerAddress").val(customer.getCustomerAddress());
            $("#txtCustomerSalry").val(customer.getCustomerSalary());
        } else {
            clearAllCustomerText();
        }
    }
});

function saveCustomer(id, name, address,salary) {
    let customer = new CustomerDTO(id, name, address, salary);
    customerTable.push(customer);

    loadAllCustomerToTheTable();
    return true;
}


function getAllCustomers() {
    return customerTable;
}


function deleteCustomer(id) {
    let customer = searchCustomer(id);
    if (customer != null) {
        let indexNumber = customerTable.indexOf(customer);
        customerTable.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}

function searchCustomer(id) {
    for (var i in customerTable) {
        if (customerTable[i].getCustomerID() == id) return customerTable[i];
    }
    return null;
}

function updateCustomer(id, name, address, salary) {
    let customer = searchCustomer(id);
    if (customer != null) {
        customer.setCustomerName(name)
        customer.setCustomerAddress(address)
        customer.setCustomerSalary(salary);
        return true;
    } else {
        return false;
    }
}



function loadAllCustomerToTheTable() {
    let allCustomers = getAllCustomers();
    $('#tblCustomer').empty();
    for (var i in allCustomers) {
        let id = allCustomers[i].getCustomerID();
        let name = allCustomers[i].getCustomerName();
        let address = allCustomers[i].getCustomerAddress();
        let salary = allCustomers[i].getCustomerSalary();

        var row = `<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${salary}</td></tr>`;
        $('#tblCustomer').append(row);
    }
}

function clearAllCustomerText() {
    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalry").val("");
}


let cusRegEx=/^(C00-)[0-9]{1,3}$/;
let cusNameRegEx=/^[A-z]{1,}$/;
let cusAddressRegEx=/^[A-z | 0-9:./]*\b$/;
let cusSalaryRegEx=/^(Rs.)[0-9]{10}$/;


$("#txtCustomerID").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtCustomerName').focus();
    }

    let inputID=$("#txtCustomerID").val();
    if (cusRegEx.test(inputID)){
        $("#txtCustomerID").css('border','2px solid green');
        $("#lblcusid").text("");
    }else{
        $("#txtCustomerID").css('border','2px solid red');
        $("#lblcusid").text('Your Input Data Format is Wrong (C00-001)');
    }
});

$("#txtCustomerName").on('keydown',function (event){
    if (event.key=="Enter"){
        $('#txtCustomerAddress').focus();
    }

    let inputName=$("#txtCustomerName ").val();
    if (cusNameRegEx.test(inputName)){
        $("#txtCustomerName ").css('border','2px solid green');
        $("lblcusname ").text("");
    }else{
        $("#txtCustomerName ").css('border','2px solid red');
        $("lblcusname ").text('Your Input Data Format is Wrong (A-z)','color','red');
    }
});

$("#txtCustomerAddress").on('keydown',function (event){
    if (event.key=="Enter"){
        $('#txtCustomerSalry').focus();
    }

    let inputAddress=$("#txtCustomerAddress ").val();
    if (cusAddressRegEx.test(inputAddress)){
        $("#txtCustomerAddress  ").css('border','2px solid green');
        $(" lblcusaddress ").text("");
    }else{
        $(" #txtCustomerAddress").css('border','2px solid red');
        $("lblcusaddress  ").text('Your Input Data Format is Wrong (A-z)','color','green');
    }
});


$("#txtCustomerSalry").on('keydown',function (event){
    if (event.key=="Enter"){
        saveCustomer();
    }
    let inputSalary=$("#txtCustomerSalry ").val();
    if (cusSalaryRegEx.test(inputSalary)){
        $("#txtCustomerSalry  ").css('border','2px solid green');
        $(" lblcussalary ").text("");
    }else{
        $("#txtCustomerSalry ").css('border','2px solid green');
        $("lblcussalary  ").text('Your Input Data Format is Wrong (RS.0000.00)','color','red');
    }

});


$('#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalry').on('keydown',function (event){
    if (event.key=="Tab"){
        event.preventDefault();
    }
});

function setTextfild() {
    $('#tblCustomer>tr').off('click');

    $('#tblCustomer>tr').click(function () {

 let  id= $(this).children('td:eq(0)').text();
    let name = $(this).children('td:eq(1)').text();
    let address = $(this).children('td:eq(2)').text();
    let salary = $(this).children('td:eq(3)').text();


        $("#txtCustomerID").val(id);
        $("#txtCustomerName").val(name);
        $("#txtCustomerAddress").val(address);
        $("#txtCustomerSalry").val(salary);

    });

}