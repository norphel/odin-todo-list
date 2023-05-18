import { renderProjectContainer } from './displayProjects.js';
import { displayAllTasks } from './displayAllTasks.js';
import { displayTasksDueToday } from './displayTasksDueToday.js';
import { displayTasksDueThisWeek } from './displayTasksDueThisWeek.js';

// import styles
import 'normalize.css';
import './styles/styles.css';

renderProjectContainer();

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
