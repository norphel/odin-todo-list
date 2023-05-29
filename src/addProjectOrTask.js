export function openModal () {
    const addBtn = document.getElementById('add-btn');
    const dialogueBox = document.querySelector('.dialogue-box');
    const overlay = document.querySelector('.overlay');
    const form = document.querySelector('.form-element');
    const submitBtn = form.querySelector('button[type="submit"');
    const cancelBtn = form.querySelector('.btn-cancel');

    addBtn.addEventListener('click', () => {
    dialogueBox.style.display = 'block';
    overlay.style.display = 'block';
    });

    cancelBtn.addEventListener('click', () => {
    dialogueBox.style.display = 'none';
    overlay.style.display = 'none';
    });
}