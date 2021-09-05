let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/toni.png') {
      myImage.setAttribute('src','images/toni2.png');
    } else {
      myImage.setAttribute('src','images/toni.png');
    }
}