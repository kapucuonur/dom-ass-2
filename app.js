const input = document.getElementById("colorInput")
const button = document.getElementById("click1")

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Click butonuna tıklama olayı
  document.getElementById('click1').addEventListener('click', function() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorText').innerText = randomColor;
  });
  
  // Mouseover butonuna fare üzerine gelme olayı
  document.getElementById('click2').addEventListener('mouseover', function() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorText').innerText = randomColor;
  });