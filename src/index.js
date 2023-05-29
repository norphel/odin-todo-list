import { renderProjectContainer } from './displayProjects.js';
import { displayAllTasks } from './displayAllTasks.js';
import { displayTasksDueToday } from './displayTasksDueToday.js';
import { displayTasksDueThisWeek } from './displayTasksDueThisWeek.js';
import { openModal } from './addProjectOrTask.js'
import { createProject } from './createProject.js'
// import styles
import 'normalize.css';
import './styles/styles.css';

renderProjectContainer();


//switch tabs in navigation
(function () {
    const main = document.querySelector('main');
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
            switch(tab.id) {
                case 'allTasks' : 
                    main.innerHTML = "";
                    displayAllTasks();
                    break;
                case 'dueToday' : 
                    main.innerHTML = "";
                    displayTasksDueToday();
                    break;
                case 'dueThisWeek' : 
                    main.innerHTML = "";
                    displayTasksDueThisWeek();
                    break;
                case 'projects' : 
                    main.innerHTML = "";
                    renderProjectContainer();
                    break;
            }
        });
    })
})();

//event handlers
(function () {
    const addNewProjectBtn = document.getElementById('add-btn');
    addNewProjectBtn.addEventListener('click', openModal, {capture: true});

    const form = document.querySelector('.form-element');
    form.addEventListener('submit', createProject);
})();
