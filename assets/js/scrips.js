
window.onload = function() {
    var rangeInput = document.getElementById('rilik');
    var buyButton = document.getElementById('buy-button');
    displayElement = document.getElementById('foxix')
    function updateDisplay() {
        displayElement.textContent = `Кол-во Redfox: ${rangeInput.value}`
    }
    function updateInputColor() {
        var value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
        rangeInput.style.background = 'linear-gradient(to right, blue 0%, blue ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)';
    }
      // Обновление значения при загрузке страницы
    updateInputColor()
    updateDisplay();
    // Добавление обработчика события input для rangeInput
    rangeInput.addEventListener('input', () => {
        updateDisplay()
        updateInputColor()
    });
  
    // Добавление обработчика события change для rangeInput
    rangeInput.addEventListener('change', function() {
      buyButton.classList.add('visible');
    });
};
document.getElementById('buy-button').addEventListener('click', ()=>{
    var rangeInput = document.getElementById('rilik');
    var r = rangeInput.value
    alert(`${r} рублей к оплате.`)
})