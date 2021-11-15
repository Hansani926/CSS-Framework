$('#btnItem').click(function () {
    let itemcode = $("#itemCode ").val();
    let itemname = $("#itemName").val();
    let itemqty = $("#itemQty").val();
    let itemprice = $("#itemPrice").val();

    let res = saveItem(itemcode, itemname, itemqty, itemprice);
    if(res)clearAllItemText();
});

$("#btnGetAllItem").click(function () {
    loadAllItemToTheTable();
});

$("#btndeleteItem").click(function () {
    let itemcode = $("#itemCode").val();
    let option=confirm(`Do you want to delete ID:${itemcode}`);
    if (option){
        let res=deleteitem(itemcode);
        if (res){
            alert("Item Deleted");

        } else{
            alert("Item Failed")
        }

    }
    loadAllItemToTheTable();
    clearAllItemText();
});

$("#btnUpdateItem").click(function () {
    let itemcode = $("#itemCode ").val();
    let itemname = $("#itemName").val();
    let itemqty = $("#itemQty").val();
    let itemprice = $("#itemPrice").val();


    let option=confirm(`Do you want to update ID:${itemcode}`);
    if (option){
        let res=updateitem(itemcode,itemname,itemqty,itemprice);
        if (res){
            alert("Item Update");

        } else{
            alert("Item Update Failed")
        }

    }
    loadAllItemToTheTable();
    clearAllItemText();

});

$("#itemCode").on('keyup', function (eObj) {
    if (eObj.key == "Enter") {
        let item = searchitem($(this).val());
        if (item != null) {
            $("#itemCode").val(item.getItemCode());
            $("#itemName").val(item.getItemName());
            $("#itemQty").val(item.getItemQty());
            $("#itemPrice").val(item.getItemPrice());
        } else {
            clearAllItemText();
        }
    }
});

function saveItem(itemcode,itemname,itemqty,itemprice) {
    let item = new ItemDTO(itemcode,itemname,itemqty,itemprice);
    itemTable.push(item);

    loadAllItemToTheTable();
    return true;
}

function getAllItems() {
    return itemTable;
}

function deleteitem(itemcode) {
    let item = searchitem(itemcode);
    if (item != null) {
        let indexNumber = itemTable.indexOf(item);
        itemTable.splice(indexNumber, 1);
        return true;
    } else {
        return false;
    }
}

function searchitem(itemcode) {
    for (var i in itemTable) {
        if (itemTable[i].getItemCode() == itemcode) return itemTable[i];
    }
    return null;
}

function updateitem (itemcode,itemname,itemqty,itemprice) {
    let item = searchitem(itemcode);
    if (item != null) {
        item.setItemName(itemname)
        item.setitemqty(itemqty)
        item.setitemprice(itemprice);
        return true;
    } else {
        return false;
    }
}

function loadAllItemToTheTable() {
    let allItems = getAllItems();
    $('#tblItem').empty();
    for (var i in allItems) {
        let itemcode = allItems[i].getItemCode();
        let itemname = allItems[i].getItemName();
        let itemqty = allItems[i].getItemQty();
        let itemprice = allItems[i].getItemPrice();

        var row = `<tr><td>${itemcode}</td><td>${itemname}</td><td>${itemqty}</td><td>${itemprice}</td></tr>`;
        $('#tblItem').append(row);
    }
}

function clearAllItemText()  {
    $("#itemCode").val("");
    $("#itemName").val("");
    $("#itemQty").val("");
    $("#itemPrice").val("");
}

let itmRegEx=/^(I00-)[0-9]{1,3}$/;
let itmNameRegEx=/^[A-z]{1,}$/;
let itmQtyRegEx=/^[0-9]{1,3}$/;
let itmpriceRegEx=/^(Rs.)[0-9]{10}$/;

$("#itemCode").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#itemName').focus();
    }

    let inputID=$("#itemCode").val();
    if (itmRegEx.test(inputID)){
        $(" #itemCode").css('border','2px solid green');
        $("#lblCode").text("");
    }else{
        $("#itemCode ").css('border','2px solid red');
        $("#lblCode").text('Your Input Data Format is Wrong (I00-001)');
    }
});

$("#itemName").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#itemQty').focus();
    }

    let inputID=$("#itemName").val();
    if (itmNameRegEx.test(inputID)){
        $("#itemName ").css('border','2px solid green');
        $("lblname").text("");
    }else{
        $("#itemName ").css('border','2px solid red');
        $("lblname").text('Your Input Data Format is Wrong (I00-001)');
    }
});

$("#itemQty ").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#itemPrice').focus();
    }

    let inputID=$("#itemQty").val();
    if (itmQtyRegEx.test(inputID)){
        $("#itemQty ").css('border','2px solid green');
        $("lblqty").text("");
    }else{
        $("#itemQty ").css('border','2px solid red');
        $("lblqty ").text('Your Input Data Format is Wrong (I00-001)');
    }
});

/*
$("#itemPrice").on('keyup',function (event){
    if (event.key=="Enter"){
       saveCustomer();
    }

    let inputID=$("#itemPrice").val();
    if (itmpriceRegEx.test(inputID)){
        $(" #itemPrice").css('border','2px solid green');
        $("lblprice").text("");
    }else{
        $("#itemPrice ").css('border','2px solid red');
        $(" lblprice").text('Your Input Data Format is Wrong (I00-001)');
    }
});*/
$("#itemPrice ").on('keydown',function (event){
    if (event.key=="Enter"){
        saveItem();
    }
    let inputitmprice=$("#txtCustomerSalry ").val();
    if (itmpriceRegEx.test(inputitmprice)){
        $(" #itemPrice ").css('border','2px solid green');
        $(" lblprice").text("");
    }else{
        $("#itemPrice ").css('border','2px solid green');
        $("lblprice ").text('Your Input Data Format is Wrong (RS.0000.00)','color','red');
    }

});