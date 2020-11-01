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
    console.log(d); 
};
var interval = setInterval(changeFoto,3000);
//makes the button beat
function btnAnimation(){
documents.querySelector('#btn')
}
