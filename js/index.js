'use strict';
const isDark = localStorage.getItem('isDarkTheme');
const onDarkTheme = () => (
  themeButton.classList.add('bx-sun'), root.classList.add('dark-theme')
);
isDark && onDarkTheme();

const on = () => (onDarkTheme(), localStorage.setItem('isDarkTheme', true));
const off = () => {
  themeButton.classList.remove('bx-sun');
  root.classList.remove('dark-theme');
  localStorage.removeItem('isDarkTheme');
};

themeButton.onclick = () =>
  localStorage.getItem('isDarkTheme') === null ? on() : off();

navToggle.onclick = () => navMenu.classList.toggle('show-menu');

navMenu.onclick = () => navMenu.classList.remove('show-menu');

// const opt = {
//   margin: 1,
//   filename: 'Front-End(Mykhailo-Nikolaiev).pdf',
//   image: { type: 'jpeg', quality: 0.98 },
//   html2canvas: { scale: 4 },
//   jsPDF: { format: 'a4', orientation: 'portrait' },
// };

// const onDownload = () => {
//   root.classList.add('pdf');

//   html2pdf(cv, opt);
//   return setTimeout(() => root.classList.remo('pdf'), 2000);
// };

// document
//   .querySelectorAll('.download')
//   .forEach((el) => (el.onclick = onDownload));
