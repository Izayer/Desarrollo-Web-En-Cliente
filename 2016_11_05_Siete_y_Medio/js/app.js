
$( document ).ready(function() {
        localStorage.setItem("baiEz", "1");
    console.log(localStorage.getItem("baiEz"));
    inputZenbat = document.getElementById("zenbat").elements.namedItem("zjokalari");

    $( "#gehi" ).click(function() {
        if (inputZenbat.value===""){
            var gehi = parseInt(1);
            inputZenbat.value = gehi;

        }
        else{
            if(inputZenbat.value<8)
            {
            var gehi = parseInt(inputZenbat.value);
            gehi++;
            inputZenbat.value = gehi;
            }
        }
    
});
 $( "#ken" ).click(function() {
     if (!inputZenbat.value==="" | inputZenbat.value>1){
         var ken = parseInt(inputZenbat.value);
            ken--;
            inputZenbat.value = ken;
     }
     
    
});
    
    
    // var zenbat = 1;
    var zenbat = inputZenbat.value;
    $("#zenbat").bind('keyup mouseup click', function () {
        var zenbat = inputZenbat.value;

        var botoia = document.getElementById("botoiIzkutua");
        if (parseInt(zenbat) >= 1){
        botoia.style.display = "";
        }
        else{
             botoia.style.display = "none";
        }
        
        
        // if (inputZenbat.value > 8 || inputZenbat.value < 1){
        // inputZenbat.value = zenbat;
        // }
        var zenbat = inputZenbat.value;
    // }
    // else{
        var zenbakia = parseInt(zenbat);
        inputSortu(zenbakia);
    // zenbat = inputZenbat.value;    
    // console.log(zenbat);
    
    // var zenbakia = parseInt(zenbat);
    //     for (var i = zenbakia+1; i < 8; i++){
    //         var j = i.toString();
    //         if (document.getElementById(j)){
    //             $("#"+j).remove()
    //         }
    //     }
    //     var j = i.toString();
    //         if (!document.getElementById(j)){
    //             inputSortu(zenbat);
    //         }
    // }
     
    
    });
    
    //ez uzteko idazten
    
    $("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});


    function inputSortu(kaja){
        var myNode = document.getElementById("sar");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }

        for (var i = 1; i <= kaja; i++){
        var ide = i.toString();
        
        
        $("#sar").append('<div class="row" id="'+ide+'"><div class ="col-md-2 col-md-offset-2"><label for="inputName" class="control-label label label-danger">'+ide+'.Jokalaria</label></div><div class ="col-md-5"><input type="text" pattern=".{1,}"  name="'+ide+'jokalari" class="form-control" id="'+ide+'izena" placeholder="'+ide+'.Jokalariaren izena" data-error="Gutxienez 3 hizki" required /></div></div>');
        }
    }
    
    
     

});