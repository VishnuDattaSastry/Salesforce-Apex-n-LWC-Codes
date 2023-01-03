trigger changeproductcode on Product2 (Before Insert) {
 list <product2> productlist = trigger.new;  // New version of the records 
 for (product2 abc : productlist) {
 if (abc.productcode!=null && abc.productcode!='')  {
 abc.productcode='GVK-' + abc.productcode;
} }  }