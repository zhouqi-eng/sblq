    var currentImage = 0;
    var images = document.querySelectorAll('.slider img');
    var dots = document.querySelectorAll('.dots span');

    function showImage(n) {
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
      }
      images[n].style.display = 'block';

      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
      }
      dots[n].classList.add('active');
    }

    function nextImage() {
      currentImage++;
      if (currentImage >= images.length) {
        currentImage = 0;
      }
      showImage(currentImage);
    }

    setInterval(nextImage, 3000);

    for (var i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function () {
        currentImage = i;
        showImage(currentImage);
      });
    }
