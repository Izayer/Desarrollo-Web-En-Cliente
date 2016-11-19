$( document ).ready(function() {
    "use strict";
    var jTxanda = 1;
    function getGET()
    {
        
        var loc = document.location.href;
        if(loc.indexOf('?')>0)
        {
            var getString = loc.split('?')[1];
            var GET = getString.split('&');
            var get = {};
 
            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }
    
    
        if(izenak)
        {
            console.log(izenak);
        }
        else{
            var izenak=getGET();
            console.log(izenak);
            
        }
//     if (localStorage.izenak) {
//     console.log(izenak);
//     var izenak = localStorage.getItem('izenak');
// } else {
// localStorage.setItem('izenak', JSON.stringify(getGET()));
// var izenak = localStorage.getItem('izenak');

// }
    
    
    function nahastu(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

// var ranNums = nahastu([1,2,3,4,5,6,7,8]);

var jokalariKop = Object.keys(izenak).length;
var jokalariArray = [];

for (var k = 1; k <= jokalariKop ; k++){
    jokalariArray.push(k);
}


var jokalariArray = nahastu(jokalariArray);
var irudia = nahastu(irudia=[1,2,3,4,5,6,7,8,9]);

function jokalariSortu(jokalariKop,jokalariArray,irudia,izena){
        var myNode = document.getElementById("jSar");
        
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }

        for (var i = 1; i <= jokalariKop; i++){
        var ide = i.toString();
        
        if (izena[i-1]==""){
            
            izena[i-1]=i+"Xempronio";
            
        }
        $("#jSar").append('<div id="'+i+'" class="col-md-2 col-xs-4"><div class="row"><img src="img/minion/'+irudia[i-1]+'.jpg" class="center-block img-circle img-responsive col-md-12 "/></div><div class="row"><h3 id="'+i+'izena" class="text-center col-md-12" style="color:white;">'+izena[i-1]+'</h3></div><div class="row"><div id="'+i+'karta" class="center-block col-md-12  img-responsive" style="border:solid 2px white;height:300px;background-color:#5C0C61;background-image:url('+"'img/sempronio.jpg'"+');-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;" ></div></div><div class="row"><div class="btn-group col-md-12 col-xm-12" role="group" aria-label="Banka"><button id="'+i+'eskatu"type="button" class="btn btn-warning col-md-4 col-xs-4 disabled ">Bota</button><div id="'+i+'kont" class=" col-md-4 col-xs-4 btn-default btn">0</div><button id="'+i+'utzi"type="button" class="btn btn-danger col-md-4 col-xs-4 disabled">Utzi</button></div></div></div>');
        }
        $("#jSar").append('<div id="trumposo" class="col-md-2 col-xs-4"><div class="row"><img src="img/trump_oso.jpg" class="center-block img-circle img-responsive col-md-12 "/></div><div class="row"><h3 id="trumposoizena" class="text-center col-md-12" style="color:white;">Trumposo</h3></div><div class="row"><div id="trumposokarta" class="center-block col-md-12  img-responsive" style="border:solid 2px white;height:300px;background-color:#5C0C61;background-image:url('+"'img/sempronio.jpg'"+');-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;" ></div></div><div class="row"><div id="trumposokont" class=" col-md-12  col-xs-12 btn-default btn">0</div></div></div>');

        //  $("#jSar").append('<div id="trumposo" class="col-md-2 col-xs-2"><img src="img/trump_oso.jpg" class="center-block img-circle img-responsive"/><h3 id="trumposoizena" class="text-center" style="color:white;">Trumposo</h3><div id="trumposokarta" class="center-block  img-responsive" style="border:solid 2px white;height:250px;background-color:#5C0C61;background-image:url('+"'img/sempronio.jpg'"+'); "></div></div>');

    }
//     <div class="btn-group" role="group" aria-label="Banka">
//   <button id="'+i+'eskatu"type="button" class="btn btn-warning">Eskatu</button>
//   <button id="'+i+'utzi"type="button" class="btn btn-danger">Utzi</button>
// </div>
    // var t = JSON.parse(izenak);
//     for(var key in izenak) {
//         var value = [];
//     value = value.push(izenak[key]);
// }
var izena = [];
var xempro = "xempronio"
var numXempro = 1;
for (var k in izenak) {
    
        if (izenak.hasOwnProperty(k)) {
           var value2 = izenak[k];
           if (value2==""){
               value2 = numXempro + xempro;
               numXempro++;
           }
           izena.push(value2);
        }
    }
    izena = nahastu(izena);

if (localStorage.getItem("baiEz") == "1"){    
    localStorage.setItem("jokalaria1",JSON.stringify(["1xempronio",0,0]));
    localStorage.setItem("jokalaria2",JSON.stringify(["2xempronio",0,0]));
    localStorage.setItem("jokalaria3",JSON.stringify(["3xempronio",0,0]));
    localStorage.setItem("jokalaria4",JSON.stringify(["4xempronio",0,0]));
    localStorage.setItem("jokalaria5",JSON.stringify(["5xempronio",0,0]));
    localStorage.setItem("jokalaria6",JSON.stringify(["6xempronio",0,0]));
    localStorage.setItem("jokalaria7",JSON.stringify(["7xempronio",0,0]));
    localStorage.setItem("jokalaria8",JSON.stringify(["8xempronio",0,0]));
for(var x = 1 ; x <= izena.length; x++){
    if (izena[x-1]==""){
        var joArrayDefault = [x+"Xempronio",0,0];
    }else{
    var joArrayDefault = [izena[x-1],0,0];
    localStorage.setItem("jokalaria"+x, JSON.stringify(joArrayDefault));
    // console.log(joArrayDefault);
    // joArrayDefault.toString();
    }
// eval( 'var jokalaria' + x + '=' + "'" + joArrayDefault + "'" ); 
}
localStorage.setItem("baiEz", "0");
var trumposoArray = ["Trumposo",0,0];
localStorage.setItem("trumposomarkagailua",JSON.stringify(trumposoArray));
}

var jokalaria1 = JSON.parse(localStorage.getItem("jokalaria1"));
var jokalaria2 = JSON.parse(localStorage.getItem("jokalaria2"));
var jokalaria3 = JSON.parse(localStorage.getItem("jokalaria3"));
var jokalaria4 = JSON.parse(localStorage.getItem("jokalaria4"));
var jokalaria5 = JSON.parse(localStorage.getItem("jokalaria5"));
var jokalaria6 = JSON.parse(localStorage.getItem("jokalaria6"));
var jokalaria7 = JSON.parse(localStorage.getItem("jokalaria7"));
var jokalaria8 = JSON.parse(localStorage.getItem("jokalaria8"));
var trumposomarkagailua = JSON.parse(localStorage.getItem("trumposomarkagailua"));
var jokalariKolekzioa = [];
for(var n = 1 ; n <= izena.length; n++){
    var kurrentJokalariKolekzioa = eval ("jokalaria" + n); 
    jokalariKolekzioa.push(kurrentJokalariKolekzioa);
}
function lokalizatu(){

var jokalaria1 = JSON.parse(localStorage.getItem("jokalaria1"));
var jokalaria2 = JSON.parse(localStorage.getItem("jokalaria2"));
var jokalaria3 = JSON.parse(localStorage.getItem("jokalaria3"));
var jokalaria4 = JSON.parse(localStorage.getItem("jokalaria4"));
var jokalaria5 = JSON.parse(localStorage.getItem("jokalaria5"));
var jokalaria6 = JSON.parse(localStorage.getItem("jokalaria6"));
var jokalaria7 = JSON.parse(localStorage.getItem("jokalaria7"));
var jokalaria8 = JSON.parse(localStorage.getItem("jokalaria8"));
var trumposomarkagailua = JSON.parse(localStorage.getItem("trumposomarkagailua"));
var jokalariKolekzioa = [];
for(var n = 1 ; n <= izena.length; n++){
    var kurrentJokalariKolekzioa = eval ("jokalaria" + n); 
    jokalariKolekzioa.push(kurrentJokalariKolekzioa);
}
}


// var jokalaria1 = jokalaria1.split(",");

// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));


    jokalariSortu(jokalariKop,jokalariArray,irudia,izena);
    


// <div class="col-md-1">
//                         <img src="img/minion/1.jpg" class="center-block img-circle img-responsive">
//                         <h3 class="text-center">John Doe</h3>
//                         <p class="text-center">Developer</p>
//                     </div>



var kartenArray = ["1_Bastos","2_Bastos","3_Bastos","4_Bastos","5_Bastos","6_Bastos","7_Bastos","10_Bastos","11_Bastos","12_Bastos","1_Copas","2_Copas","3_Copas","4_Copas","5_Copas","6_Copas","7_Copas","10_Copas","11_Copas","12_Copas","1_Espadas","2_Espadas","3_Espadas","4_Espadas","5_Espadas","6_Espadas","7_Espadas","10_Espadas","11_Espadas","12_Espadas","1_Oros","2_Oros","3_Oros","4_Oros","5_Oros","6_Oros","7_Oros","10_Oros","11_Oros","12_Oros"];
nahastu(kartenArray);




var kartenArrayInt = [];
for (var k = 0; k < kartenArray.length; k++){
    var res = kartenArray[k].split("_");
    kartenArrayInt.push(parseInt(res[0]));
}




function disableBtn(identifikazioa) {
    document.getElementById(identifikazioa).disabled = true;
}

function undisableBtn(identifikazioa) {
    document.getElementById(identifikazioa).disabled = false;
}

var botoiak = document.getElementsByClassName('btn');


for (var ñ = 0; ñ < botoiak.length; ñ++){
    botoiak[ñ].disabled = true;
}

function abled(i){
    var eskatuAbled = document.getElementById(i+"eskatu");
    $("#"+i+"eskatu").removeClass( "disabled" );
    eskatuAbled.removeAttribute("disabled");
    var utziAbled = document.getElementById(i+"utzi");
    $("#"+i+"utzi").removeClass( "disabled" );
    utziAbled.removeAttribute("disabled");

}
function disabled(i){
    var eskatudisAbled = document.getElementById(i+"eskatu");
    $("#"+i+"eskatu").addClass( "disabled" );
    eskatudisAbled.setAttribute("disabled","");
    var utzidisAbled = document.getElementById(i+"utzi");
    $("#"+i+"utzi").addClass( "disabled" );
    utzidisAbled.setAttribute("disabled","");
    

}
function disabledEskatu(i){
    var eskatudisAbled = document.getElementById(i+"eskatu");
    $("#"+i+"eskatu").addClass( "disabled" );
    eskatudisAbled.setAttribute("disabled","");
}

function zeinenTxanda(i){
var pzeinen = document.getElementById("zeinenTxanda");
pzeinen.innerHTML = "" + izena[i-1]+ "(r)en txanda";
}

zeinenTxanda(jTxanda);
abled(jTxanda);

var kurrentKartaInt = 0;

function  kartaBota(i){
    var kurrentKarta = kartenArray[0];
    console.log(kurrentKarta);
    var elementua = document.getElementById(i + "karta").style.backgroundImage = 'url("img/cartas/' + kurrentKarta + '.PNG")';
    kartenArray.shift();
    if (kartenArrayInt[0] == 10 || kartenArrayInt[0] == 11 || kartenArrayInt[0] == 12){
        kartenArrayInt[0] = 0.5; 
    }
    kurrentKartaInt =  kurrentKartaInt + kartenArrayInt[0];
    kartenArrayInt.shift();
    console.log(kurrentKartaInt);
    var elementuaKont = document.getElementById(i + "kont").innerHTML = kurrentKartaInt;
    if ( kurrentKartaInt >= 7.5){
    disabledEskatu(i);
    }
}
var irabazleak = [];
function utzi(i){
    
    disabled(i);
    var izenaSet = document.getElementById(i+"izena").innerHTML;
    
    console.log(izenaSet);
    // for ( var z in jokalariKolekzioa){
    //     console.log(jokalariKolekzioa[z]);
    //     // var zjokalariKolekzioa = jokalariKolekzioa[z];
    //     if (jokalariKolekzioa[z][0] == izenaSet){
    //         console.log("sartu da");
    //         jokalariKolekzioa[z][1] = kurrentKartaInt;
    //         var m = z + 1;
    //         console.log(m);
    //         localStorage.setItem("jokalaria"+ m, JSON.stringify(jokalariKolekzioa[z]));
    //         console.log(localStorage.getItem("jokalaria"+m));
    //     }
        
        
    // }
    
    if (jokalaria1[0] == izenaSet){
        jokalaria1[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria1", JSON.stringify(jokalaria1));
    }
    else if (jokalaria2[0] == izenaSet){
        jokalaria2[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria2", JSON.stringify(jokalaria2));
    }
    else if (jokalaria3[0] == izenaSet){
        jokalaria3[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria3", JSON.stringify(jokalaria3));
    }
    else if (jokalaria4[0] == izenaSet){
        jokalaria4[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria4", JSON.stringify(jokalaria4));
    }
    else if (jokalaria5[0] == izenaSet){
        jokalaria5[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria5", JSON.stringify(jokalaria5));
    }
    else if (jokalaria6[0] == izenaSet){
        jokalaria6[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria6", JSON.stringify(jokalaria6));
    }
    else if (jokalaria7[0] == izenaSet){
        jokalaria7[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria7", JSON.stringify(jokalaria7));
    }
    else if (jokalaria8[0] == izenaSet){
        jokalaria8[1] = kurrentKartaInt;
        localStorage.setItem("jokalaria8", JSON.stringify(jokalaria8));
    }
    lokalizatu();
        console.log(jokalaria1);
console.log(jokalaria2);
console.log(jokalaria3);
console.log(jokalaria4);
    var elementua = document.getElementById(i + "karta").style.backgroundImage = 'url("img/riddler.jpg")';
    var bistaKont = document.getElementById(i + "kont");
    bistaKont.innerHTML = "?";
    jTxanda++;
    console.log(jTxanda);
        $("#"+ jTxanda + "eskatu").click(function(){
            kartaBota(jTxanda);
        
        });
        $("#"+ jTxanda + "utzi").click(function(){
            
            utzi(jTxanda);
        
        });
        if(i != izena.length){
    abled(i+1);
    zeinenTxanda(jTxanda);
    }

        kurrentKartaInt = 0;
        if (jTxanda > izena.length){
            jakinIrabazleak();
            trumposoTxanda();
            
            
        }
}

$("#"+ jTxanda + "eskatu").click(function(){
   kartaBota(jTxanda);


});
$("#"+ jTxanda + "utzi").click(function(){
   utzi(jTxanda);

});
function  kartaBotaTrumposo(){
    var kurrentKarta = kartenArray[0];
    console.log(kurrentKarta);
    var elementua = document.getElementById("trumposokarta").style.backgroundImage = 'url("img/cartas/' + kurrentKarta + '.PNG")';
    kartenArray.shift();
    if (kartenArrayInt[0] == 10 || kartenArrayInt[0] == 11 || kartenArrayInt[0] == 12){
        kartenArrayInt[0] = 0.5; 
    }
    kurrentKartaInt =  kurrentKartaInt + kartenArrayInt[0];
    kartenArrayInt.shift();
    console.log(kurrentKartaInt);
    var elementuaKont = document.getElementById("trumposokont").innerHTML = kurrentKartaInt;

}

function jakinIrabazleak(){
        irabazleakF();
console.log(jokalariKolekzioa);
console.log(izena);
    if (izena.length == 1 ){
        if (jokalariKolekzioa[0][1] <= 7.5){
        irabazleak.push(jokalariKolekzioa[0]);
        }
    }
    else{
        var bol = true;
    for ( var g = 0; g < izena.length ; g++){
    if(jokalariKolekzioa[g][1] <= 7.5){
        if( bol){
        irabazleak.push(jokalariKolekzioa[g]);
        bol = false;
        }else{
        
        // if (g == 0){
        //         console.log(g);
        //         irabazleak.push(jokalariKolekzioa[g]);
            
        // }
        // else {
                if (irabazleak[0][1] == jokalariKolekzioa[g][1]){
                irabazleak.push(jokalariKolekzioa[g]);}
            // }
        }}
    }
    }
    irabazleakInprimatu();
    
}

function trumposoTxanda(){
    var pzeinen = document.getElementById("zeinenTxanda");
    pzeinen.innerHTML = "Trumposoren txanda";
    kartaBotaTrumposo();
    var trumposokont = document.getElementById("trumposokont").innerHTML
    if( irabazleak.length > 0){
        
    
    if( trumposokont < irabazleak[0][1] ){
        setTimeout( trumposoTxanda, 2000);
    }
    else if (trumposokont >= irabazleak[0][1] && trumposokont <= 7.5 ){
        irabazleak = [];
        trumposomarkagailua[1] = trumposokont;
        trumposomarkagailua[2] = trumposomarkagailua[2] + 1;
        irabazleak.push(trumposomarkagailua);
        
        localStorage.setItem("trumposomarkagailua",JSON.stringify(trumposomarkagailua));
        console.log(trumposomarkagailua);
        lokalizatu();
        modaleanInprimatu();
    }
    else if (trumposokont > 7.5){
        for (var f = 0; f < irabazleak.length; f++){
            if (jokalaria1[0] == irabazleak[f][0]){
        jokalaria1[2] = jokalaria1[2] + 1;
        localStorage.setItem("jokalaria1", JSON.stringify(jokalaria1));
    }
    else if (jokalaria2[0] == irabazleak[f][0]){
        jokalaria2[2] = jokalaria2[2] + 1;
        localStorage.setItem("jokalaria2", JSON.stringify(jokalaria2));
    }
    else if (jokalaria3[0] == irabazleak[f][0]){
        jokalaria3[2] = jokalaria3[2] + 1;
        localStorage.setItem("jokalaria3", JSON.stringify(jokalaria3));
    }
    else if (jokalaria4[0] == irabazleak[f][0]){
        jokalaria4[2] = jokalaria4[2] + 1;
        localStorage.setItem("jokalaria4", JSON.stringify(jokalaria4));
    }
    else if (jokalaria5[0] == irabazleak[f][0]){
        jokalaria5[2] = jokalaria5[2] + 1;
        localStorage.setItem("jokalaria5", JSON.stringify(jokalaria5));
    }
    else if (jokalaria6[0] == irabazleak[f][0]){
        jokalaria6[2] = jokalaria6[2] + 1;
        localStorage.setItem("jokalaria6", JSON.stringify(jokalaria6));
    }
    else if (jokalaria7[0] == irabazleak[f][0]){
        jokalaria7[2] = jokalaria7[2] + 1;
        localStorage.setItem("jokalaria7", JSON.stringify(jokalaria7));
    }
    else if (jokalaria8[0] == irabazleak[f][0]){
        jokalaria8[2] = jokalaria8[2] + 1;
        localStorage.setItem("jokalaria8", JSON.stringify(jokalaria8));
    }

        }
        lokalizatu();
        modaleanInprimatu();
    }
    }
    else{
        irabazleak = [];
        trumposomarkagailua[1] = trumposokont;
        trumposomarkagailua[2] = trumposomarkagailua[2] + 1;
        irabazleak.push(trumposomarkagailua);
        
        localStorage.setItem("trumposomarkagailua",JSON.stringify(trumposomarkagailua));
        console.log(trumposomarkagailua);
        lokalizatu();
        if(trumposomarkagailua[2] == 10){
            jokoaAmaitu();
        }else{
            modaleanInprimatu();
        }
        
    }

}
function modaleanInprimatu(){
    if( !(jokalaria1[2]==10|| jokalaria2[2]==10|| jokalaria3[2]==10|| jokalaria4[2]==10|| jokalaria5[2]==10|| jokalaria6[2]==10|| jokalaria7[2]==10|| jokalaria8[2]==10|| trumposomarkagailua[2] ==10) ){
    for (var h = 0; h < irabazleak.length ; h++){
        var modalIrabazlea = document.getElementById("modalp2").innerHTML;
        document.getElementById("modalp2").innerHTML =modalIrabazlea + "Izena: " + irabazleak[h][0] + "  |     Ateratako zenbakia: " + irabazleak[h][1] + "  |       Irabazitako Errondak: " + irabazleak[h][2] + "</br>";
    }
    document.getElementById("modalp3").innerHTML = "Beste Jokalariak:  ";
    for (var h = 0; h < jokalariKolekzioa.length; h++){
        document.getElementById("modalp" + (h + 4)).innerHTML = "Izena: " + jokalariKolekzioa[h][0] + " |   Ateratako zenbakia: " + jokalariKolekzioa[h][1] + " |   Irabazitako Errondak: " + jokalariKolekzioa[h][2] + "</br>";

    }
    }else{
        jokoaAmaitu();
    }
    
    $('#modal').click();
}
function irabazleakInprimatu(){
    console.log(irabazleak);
}

function irabazleakF(){
    jokalariKolekzioa.sort(compareSecondColumn);
    

}
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? 1 : -1;
    }
}
function compareThirdColumn(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] < b[2]) ? 1 : -1;
    }
}
function jokoaAmaitu(){
     document.getElementById("modalp1").innerHTML = "ZORIONAK!!!! IRABAZLEA: ";
     if ( trumposomarkagailua[2] == 10){
     document.getElementById("modalp2").innerHTML = trumposomarkagailua[0];
     document.getElementById("modalp3").innerHTML = "Klasifikazioa:";
    jokalariKolekzioa.sort(compareThirdColumn);
    document.getElementById("modalp" + (4)).innerHTML ="Posizioa" + (1) + "-    Izena: " + trumposomarkagailua[0] + " |   Ateratako zenbakia: " + trumposomarkagailua[1] + " |   Irabazitako Errondak: " + trumposomarkagailua[2] + "</br>";
    for (var h = 1; h <= jokalariKolekzioa.length; h++){
        document.getElementById("modalp" + (h + 5)).innerHTML ="Posizioa" + (h+1) + "-    Izena: " + jokalariKolekzioa[(h-1)][0] + " |   Ateratako zenbakia: " + jokalariKolekzioa[(h-1)][1] + " |   Irabazitako Errondak: " + jokalariKolekzioa[(h-1)][2] + "</br>";
        console.log(jokalariKolekzioa);
        console.log(h);
        console.log("modalp"+(h+4));
        console.log(jokalariKolekzioa[h-1][0]);
    
    }
     }else{
         jokalariKolekzioa.sort(compareThirdColumn);
         document.getElementById("modalp2").innerHTML = jokalariKolekzioa[0][0];
         document.getElementById("modalp3").innerHTML = "Klasifikazioa:";
    
    for (var h = 1; h <= jokalariKolekzioa.length; h++){
        document.getElementById("modalp" + (h + 4)).innerHTML ="Posizioa" + (h) + "-    Izena: " + jokalariKolekzioa[(h-1)][0] + " |   Ateratako zenbakia: " + jokalariKolekzioa[(h-1)][1] + " |   Irabazitako Errondak: " + jokalariKolekzioa[(h-1)][2] + "</br>";
        console.log(jokalariKolekzioa);
        console.log(h);
        console.log("modalp"+(h+4));
        console.log(jokalariKolekzioa[h-1][0]);
    
    }
    document.getElementById("modalp" + (4)).innerHTML ="Make America Great Again" + "-    Izena: " + trumposomarkagailua[0] + " |   Ateratako zenbakia: " + trumposomarkagailua[1] + " |   Irabazitako Errondak: " + trumposomarkagailua[2] + "</br>";

     }
     
    $('#modalitxi').prop('id', 'modal2itxi');
    $('#modalitxi2').prop('id', 'modal2itxi2');
    document.getElementById("modal2itxi2").innerHTML= "Joko Berria";
    document.getElementById("modal2itxi").addEventListener("click", indexera);
    document.getElementById("modal2itxi2").addEventListener("click", indexera);

}
    function indexera() {
      location.href = "index.html";
    }
console.log(jokalariKolekzioa.sort(compareThirdColumn));
});