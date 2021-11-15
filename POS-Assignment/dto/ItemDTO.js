function ItemDTO(itemcode,itemname, itemqty,itemprice) {
    var __itemcode= itemcode;
    var __itemname = itemname;
    var __itemqty = itemqty;
    var __itemprice = itemprice;

    this.getItemCode= function () {
        return __itemcode;
    }
    this.getItemName = function () {
        return __itemname;
    }
    this.getItemQty = function () {
        return __itemqty;
    }
    this.getItemPrice = function () {
        return __itemprice;
    }

    this.setItemCode = function (newItemCode) {
        __itemcode = newItemCode;
    }
    this.setItemName = function (newItemName) {
        __itemname = newItemName;
    }
    this.setitemqty = function (newItemQty) {
        __itemqty = newItemQty;
    }
    this.setitemprice = function (newItemPrice) {
        __itemprice = newItemPrice;
    }

}
