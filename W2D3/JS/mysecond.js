$(document).ready(function(){
    $("#formSubmit").submit(function(event){
        event.preventDefault();
        let number =  $("#inputProduct").val();
        let productName = $("#inputName").val();
        let unitPrice = $("#inputforUnitPrice").val();
        let quantityInStock = $("#inputQuantityInStock").val();
        let supplier =  $("#exampleFormControlSelect1").val();
        let inputDate = $("#inputDateSupplied").val();

        $('#displayInfo').append('<div>'+
            productName
        +'</div>');

        $('#displayInfo').append('<div>'+
            number
        +'</div>');
        
        $('#displayInfo').append('<div>'+
        unitPrice
        +'</div>');
        
        $('#displayInfo').append('<div>'+
        quantityInStock
        +'</div>');
         
        $('#displayInfo').append('<div>'+
        supplier
        +'</div>');

        $('#displayInfo').append('<div>'+
        inputDate
        +'</div>');

      })
});