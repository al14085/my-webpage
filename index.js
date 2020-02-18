function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleScrollButton() {
    const lastPosition = window.scrollY;
    const scrollBtn = document.getElementById('scroll');

    if (lastPosition !== 0) {
        scrollBtn.setAttribute('style', 'display: block;');
    } else {
        scrollBtn.setAttribute('style', 'display: none;');
    }
}
/** This is where I edited **/
function keyPless(){
    var resultArray = ["Banana", "Orange", "Apple", "Mango"];
    var word = document.getElementById("myInput");
    
     if (event.keyCode === 13) {
        if(resultArray.includes(word.value)){
            event.preventDefault();
            document.getElementById("demo").innerHTML = word.value;
        }
    }
      
}

window.addEventListener('scroll', function() {
    toggleScrollButton();
});

window.addEventListener('load', () => {
    toggleScrollButton();
});