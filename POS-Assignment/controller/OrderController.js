
$('#btnAddToTable').click(function () {
    let itemcode = $("#txtItemCode ").val();
    let itemname = $("#txtItemDescription").val();
    let itemprice = $("#txtItemPrice").val();
    let quantity=$("#txtQty").val();
    let total=$("#total-text").val();


    let res = addOrder(itemcode, itemname,itemprice,quantity,total);
    if(res)clearAllOrderText();

});

$("#btnAddToTable").click(function () {
    loadAllOrderToTheTable();
});

function addOrder(itemcode,itemname,price,quantity,total) {
    let order = new OrderDTO(itemcode,itemname,price,quantity,total);
    orderTable.push(order);

    loadAllOrderToTheTable();
    return true;
}

function getAllOrders() {
    return orderTable;
}

function  loadAllOrderToTheTable() {
    let allOrders =getAllOrders() ;
    $('#orderTable').empty();
    for (var i in allOrders) {
        let itemcode = allOrders[i].getOItemCode();
        let itemname = allOrders[i].getOItemName();
        let itemprice  = allOrders[i].getOPrice();
        let quantity = allOrders[i].getOQuantity();
        let total =allOrders[i].getOTotal();

        var row = `<tr><td>${itemcode}</td><td>${itemname}</td><td>${itemprice}</td><td>${quantity}</td><td>${total}</td></tr>`;
        $('#orderTable').append(row);
    }
}




$('#btnSubmitOrder').click(function () {


    getTotal();


});
















/*function loadAllCus() {
    let data;
    $('#selectCusID').empty();

    for (var i=0;i<customerTable.length;i++){
        data= '<option value="${customerTable[i].getCustomerID()}">${customerTable[i].getCustomerID()}</option>';
        $('#selectCusID').append(data);
    }

}*/
/*$('#selectCusID').on('change',function (data) {
    let selectedValue=$('#selectCusID option:selected').val();

    for (var i=0;i<customerTable.length;i++){
        if (customerTable[i].getCustomerID()==selectedValue){
            $('#orderCustomerName').val(customerTable[i].getCustomerName());
            $('#orderCustomerSalary').val(customerTable[i].getCustomerSalary());
            $('#orderCustomerAddress').val(customerTable[i].getCustomerAddress());

        }
    }

});*/
function loadAllCus(){
    let data;
    $('#selectCusID').empty();

    for (var i = 0; i < customerTable.length; i++) {
        data =`<option value="${customerTable[i].getCustomerID()}">${customerTable[i].getCustomerID()}</option>`;
        $('#selectCusID').append(data);
    }
}


$('#selectCusID').on('change',function(data){
    let slectedValue = $('#selectCusID option:selected').val();

    for (var i = 0; i < customerTable.length; i++) {
        if (customerTable[i].getCustomerID()==slectedValue) {
            $('#orderCustomerID').val(customerTable[i].getCustomerID());
            $('#orderCustomerName').val(customerTable[i].getCustomerName());
            $('#orderCustomerAddress').val(customerTable[i].getCustomerAddress());
            $('#orderCustomerSalary').val(customerTable[i].getCustomerSalary());
        }
    }
});

function loadAllItm(){
    let data;
    $('#selectItemCode').empty();

    for (var i = 0; i < itemTable.length; i++) {
        data =`<option value="${itemTable[i].getItemCode()}">${itemTable[i].getItemCode()}</option>`;
        $('#selectItemCode').append(data);
    }
}


$('#selectItemCode').on('change',function(data){
    let slectedValue = $('#selectItemCode option:selected').val();

    for (var i = 0; i < itemTable.length; i++) {
        if (itemTable[i].getItemCode()==slectedValue) {
            $('#txtItemCode').val(itemTable[i].getItemCode());
            $('#txtItemDescription').val(itemTable[i].getItemName());
            $('#txtItemPrice').val(itemTable[i].getItemPrice());
            $('#txtQTYOnHand').val(itemTable[i].getItemQty());
        }
    }
});










function getTotal() {
    let pscPrice = parseFloat($('#txtItemPrice').val());
    let discountPrice = parseFloat($('#txtDiscount').val());
    let psc = parseFloat($('#txtQty').val());
    let tempTot = pscPrice * psc;

    if (tempTot >= 2000 && tempTot<5000) {
        $('#txtDiscount').val("10");
        let tot = tempTot - (pscPrice * psc) * (discountPrice / 100);
        $('#total-text').val(tot);
        $('#total-text').css({
            'color': 'red',
            'font-size': '50px'
        });
    } else if ((tempTot) >= 5000){
        $('#txtDiscount').val("20");
        let tot = tempTot - (pscPrice * psc) * (discountPrice / 100);
        $('#total-text').val(tot);
        $('#total-text').css({
            'color': 'red',
            'font-size': '50px'
        });


    }else {
        $('#txtDiscount').val("");
        $('#total-text').val("");
        let tot2 = tempTot;
        $('#total-text').val(tot2);
        $('#total-text').css({
            'color': 'red',
            'font-size': '50px'
        });
        $('#txtDiscount').css({
            'color': 'orange',

        });
    }


}
