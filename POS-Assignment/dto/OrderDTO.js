/*function OrderDTO(orderid,id,date) {
    var __orderid= orderid;
    var __id = id;
   var __date=date;


    this.getOrderId=function () {
        return __orderid;
    }

    this.setOrderId=function (newOrderId) {
        __orderid=newOrderId;
    }

    this.getCustomerID = function () {
        return __id;
    }
    this.setCustomerID = function (newID) {
        __id = newID;
    }

    this.getCustomerDate = function () {
        return __date;
    }
    this.setCustomerDate = function (newDate) {
        __date=newDate;
    }
}*/
function OrderDTO(itemcode,itemname,price,quantity,total) {
   /* var __orderid=orderid;*/
    var __Oitemcode= itemcode;
    var __Oitemname = itemname;
    var __price = price;
    var __quantity = quantity;
    var  __total=total;



   /* this.getOrderId=function () {
        return __orderid;
    }*/

    this.getOItemCode= function () {
        return __Oitemcode;
    }
    this.getOItemName = function () {
        return __Oitemname;
    }
    this.getOPrice = function () {
        return __price;
    }
    this.getOQuantity = function () {
        return __quantity;
    }

    this.getOTotal = function () {
        return __total;
    }

  /*  this.setOrderId=function (newOrderId) {
        __orderid=newOrderId;
    }
*/
    this.setOItemCode = function (newItemCode) {
        __itemcode = newItemCode;
    }
    this.setOItemName = function (newItemName) {
        __itemname = newItemName;
    }
    this.setOPrice = function (newPrice) {
        __price = newPrice;
    }

    this.setOQuantity = function (newQuantity) {
        __quantity = newQuantity;
    }

    this.setOTotal = function (newTotal) {
        __total = newTotal;
    }

}
