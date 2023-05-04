

// import styles

import 'normalize.css';
import './styles/styles.css';


const addProjectBtn = document.getElementById('add-project-btn');
const dialogueBox = document.querySelector('.dialogue-box');
const overlay = document.querySelector('.overlay');
const cancelBtn = dialogueBox.querySelector('.btn-cancel');

addProjectBtn.addEventListener('click', () => {
  dialogueBox.classList.add('active');
  overlay.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
  dialogueBox.classList.remove('active');
  overlay.classList.remove('active');
});
