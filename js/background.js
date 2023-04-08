const UNSPLASH_KEY = config.unsplashApiKey;

fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_KEY}&featured&orientation=landscape&query=nature`)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.urls.regular;
    const image = new Image();
    image.src = imageUrl;
    image.onload = function() {
      const imageWidth = this.width;
      const imageHeight = this.height;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const ratio = Math.max(screenWidth / imageWidth, screenHeight / imageHeight);
      const newWidth = imageWidth * ratio;
      const newHeight = imageHeight * ratio;
      const xPos = (screenWidth - newWidth) / 2;
      const yPos = (screenHeight - newHeight) / 2;

      const imgContainer = document.createElement('div');
      imgContainer.classList.add('container');
      imgContainer.style.width = `${newWidth}px`;
      imgContainer.style.height = `${newHeight}px`;
      imgContainer.style.position = 'absolute';
      imgContainer.style.top = `${yPos}px`;
      imgContainer.style.left = `${xPos}px`;
      document.body.appendChild(imgContainer);

      const imgTag = document.createElement('img');
      imgTag.src = imageUrl;
      imgTag.style.width = '100%';
      imgTag.style.height = '100%';
      imgContainer.appendChild(imgTag);

      // 배경화면으로 설정
      document.body.style.backgroundImage = `url(${imageUrl})`;
    };
  })
  .catch(error => console.log(error));
