let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/toni3.png') {
      myImage.setAttribute('src','images/toni4.png');
    } else {
      myImage.setAttribute('src','images/toni3.png');
    }
}