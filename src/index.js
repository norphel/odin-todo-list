

// import styles

import 'normalize.css';
import './styles/styles.css';


const addProjectBtn = document.getElementById('add-project-btn');
const dialogueBox = document.querySelector('.dialogue-box');
const overlay = document.querySelector('.overlay');
const cancelBtn = dialogueBox.querySelector('.btn-cancel');

addProjectBtn.addEventListener('click', () => {
  dialogueBox.style.display = 'block';
  overlay.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
  dialogueBox.style.display = 'none';
  overlay.style.display = 'none';
});
