var images = [];

var maxSize = 512;

function test() {
  console.log("I am here");
}

window.onload = function () {

  var e = document.getElementById("img");

  for (var i = 0; i < e.childElementCount; i++) {
      //images.push(new imageObject(e.children[i]));
      images.push(e.children[i]);       
  }
  
  console.log(images.length);

  var gallery = document.getElementById("gallery");

  for (var i = 0; i < images.length; i++) {

    //Assign the size to the image
    var width = images[i].clientWidth;
    var height = images[i].clientHeight;

    console.log("Width: " + width + " Height: " + height);

    //See if it is too big
    if (width > maxSize || height > maxSize) {
        //Holder Val
        let temp = 0
        if (width > height)
        {
          //Dank Math boiiii
          temp = maxSize / width;
          height *= temp;
          width = maxSize;
        } else if (height > width){
          //Dank Other Way Math boiiii
          temp = maxSize / height;
          width *= temp;
          height = maxSize;
        } else  { //In a rare case if it is acutally a perfect square already x == y
          width = 512;
          height = 512; 
        }
    } else { //If it is too small
        if (width > height)
        {
          //Dank Math boiiii
          temp = width / maxSize;
          height *= temp;
          width = maxSize;
        } else if (height > width){
          //Dank Other Way Math boiiii
          temp = height/maxSize;
          width *= temp;
          height = maxSize;
        } else  { //In a rare case if it is acutally a perfect square already x == y
          width = 512;
          height = 512; 
        }
        //Assign changes
    }

    images[i].style.width = maxSize + 'px';
    images[i].style.height = 'auto';

    var thumbnailWrapper = document.createElement("div");
    thumbnailWrapper.className = "thumbnail-wrapper";

    var thumbnail = document.createElement("a");
    thumbnail.className = "thumbnail";
    thumbnail.setAttribute('style', 'background-image:url(\"' + images[i].src + '\");');
    thumbnail.setAttribute('href', images[i].src);    
    thumbnailWrapper.appendChild(thumbnail);
    gallery.appendChild(thumbnailWrapper);

    //Hide The Image
    images[i].style.display = "none";
  }  
}