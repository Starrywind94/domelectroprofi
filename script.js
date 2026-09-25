const area = document.querySelector('#area');
const areaOutput = document.querySelector('#areaOutput');
const priceOutput = document.querySelector('#priceOutput');
const form = document.querySelector('#calcForm');

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}

function updatePrice() {
  const square = Number(area.value);
  const selected = form.querySelector('input[name="type"]:checked');
  const rate = Number(selected.dataset.rate);
  areaOutput.value = square + ' м²';
  priceOutput.textContent = formatPrice(square * rate);
}

area.addEventListener('input', updatePrice);
form.querySelectorAll('input[name="type"]').forEach((input) => {
  input.addEventListener('change', updatePrice);
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = form.querySelector('input[name="type"]:checked');
  const type = selected.value;
  const rate = Number(selected.dataset.rate);
  const text = `Здравствуйте! Хочу уточнить стоимость электромонтажа. Тариф: ${type} (${formatPrice(rate)} за м²), площадь: ${area.value} м². Предварительный расчёт на сайте: от ${formatPrice(Number(area.value) * rate)}.`;
  window.open(`https://wa.me/79196062611?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
updatePrice();
