/* MOBILE MENU */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.onclick = () => {
      navMenu.classList.toggle('show');
    };

    /* READ MORE */
    const readBtn = document.getElementById('readBtn');
    const moreText = document.getElementById('moreText');

    readBtn.onclick = () => {
      if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        readBtn.innerText = "Read More";
      } else {
        moreText.style.display = "inline";
        readBtn.innerText = "Read Less";
      }
    };

    /* BACKGROUND SLIDESHOW */
    const hero = document.querySelector('.hero');
    const images = [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      "https://images.unsplash.com/photo-1642886512785-b5fee9faad7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsJTIwZm9yJTIwbWVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1767329300923-6994e8d770dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664391991255-b4ec6ff30dd8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsJTIwZm9yJTIwd29tZW58ZW58MHx8MHx8fDA%3D"
    ];

    let index = 0;
    setInterval(() => {
      hero.style.backgroundImage = `url(${images[index]})`;
      index = (index + 1) % images.length;
    }, 4000);
    const shopIndex = {
  men: 0,
  women: 0,
  kids: 0
};

function slideShop(type, direction) {
  const slider = document.getElementById(type + "Slider");
  const slides = slider.children.length;

  shopIndex[type] += direction;

  if (shopIndex[type] < 0) shopIndex[type] = slides - 1;
  if (shopIndex[type] >= slides) shopIndex[type] = 0;

  slider.style.transform = `translateX(-${shopIndex[type] * 100}%)`;
}
  
