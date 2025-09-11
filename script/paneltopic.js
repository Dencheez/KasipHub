function togglePanel() {
  document.getElementById('panel').classList.toggle('active');
}

function setTheme(themeClass) {
  const currentTheme = document.body.className;

  if (currentTheme === themeClass) {
    // если уже выбрана эта тема → сбросить на дефолт
    document.body.className = 'theme-default';
    localStorage.setItem('selectedTheme', 'theme-default');
  } else {
    // иначе применить новую тему
    document.body.className = themeClass;
    localStorage.setItem('selectedTheme', themeClass);
  }
}

// восстановление темы при загрузке
window.onload = () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'theme-default';
  document.body.className = savedTheme;
};


// Изменение размера текста

 let currentSize = 18;
    const minSize = 18;
    const maxSize = 64;

    function changeSize(action) {
      if (action === 'increase' && currentSize < maxSize) {
        currentSize += 2;
      } else if (action === 'decrease' && currentSize > minSize) {
        currentSize -= 2;
      } else if (action === 'reset') {
        currentSize = 18;
      }

      // ✅ Only change main content
      document.getElementById("content").style.fontSize = currentSize + "px";

      // Update label inside panel
      document.getElementById("sizeLabel").textContent = currentSize + "px";
    }


   