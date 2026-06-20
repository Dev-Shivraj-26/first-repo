const शीर्षक_तत्व = document.querySelector('.header');
const खोज_क्षेत्र_तत्व = document.getElementById('searcharea');
const खोज_input_तत्व = document.getElementById('search');

window.addEventListener('scroll', function() {
  if (window.scrollY > 90) {
    खोज_क्षेत्र_तत्व.classList.add('scrolled');
  } else {
    खोज_क्षेत्र_तत्व.classList.remove('scrolled');
  }
});

खोज_क्षेत्र_तत्व.addEventListener('click', () => {
  शीर्षक_तत्व.classList.add('activeSearch');
  खोज_क्षेत्र_तत्व.classList.add('activeSearch');
  खोज_input_तत्व.focus();
});

document.addEventListener('click', (घटना) => {
  if (!खोज_क्षेत्र_तत्व.contains(घटना.target)) {
    शीर्षक_तत्व.classList.remove('activeSearch');
    खोज_क्षेत्र_तत्व.classList.remove('activeSearch');
  }
});
