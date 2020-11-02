//This act as a dropdown switch for the mobile view, which shows the categories...
document.getElementById('catMenu').addEventListener('click', function(){
    document.querySelector('#dropDown').classList.toggle('drop-down')
});
//This controls the slide; changes it every 3secs
var fotoSlide = document.getElementById('fotoSlide');
var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var i = 0;
var d = 1;
function changeFoto() {
    fotoSlide.src = 'images/products/product-' + d +'.jpg';
    i++;
    if (i >= c.length){
        i = 0;
    }   
    d = c[i];
};
var interval1 = setInterval(changeFoto,3000);
//Thhis stop slide when clicked
document.getElementById('fotoSlide').addEventListener('click', function(){
    clearInterval(interval1);
});



//makes the button beat
function btnAnimation(){
document.getElementById('btn').classList.toggle('beat')
};
var  btnBeat = setInterval(btnAnimation,1000);