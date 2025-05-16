const form = document.getElementById('sheepForm');
const list = document.getElementById('sheepList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const tagNumber = document.getElementById('tagNumber').value.trim();
  const breed = document.getElementById('breed').value.trim();
  const gender = document.getElementById('gender').value;
  const birthDate = document.getElementById('birthDate').value;

  if (!tagNumber) {
    alert('شماره گوش را وارد کنید.');
    return;
  }

  const sheep = {
    tagNumber,
    breed,
    gender,
    birthDate
  };

  saveSheep(sheep);
  displaySheepList();
  form.reset();
});

function saveSheep(sheep) {
  const data = JSON.parse(localStorage.getItem('sheepList')) || [];
  data.push(sheep);
  localStorage.setItem('sheepList', JSON.stringify(data));
}

function displaySheepList() {
  const data = JSON.parse(localStorage.getItem('sheepList')) || [];
  list.innerHTML = '';

  data.forEach((sheep, index) => {
    const item = document.createElement('li');
    item.textContent = شماره گوش: ${sheep.tagNumber} | نژاد: ${sheep.breed} | جنسیت: ${sheep.gender} | تولد: ${sheep.birthDate};
    list.appendChild(item);
  });
}

// نمایش لیست هنگام بارگذاری
document.addEventListener('DOMContentLoaded', displaySheepList);
