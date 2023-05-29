import {getProjects} from './getProjects.js';
import {getPriorityIcon} from './getPriorityIcon.js';

function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('projectCard');

    const title = document.createElement('p');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const dueDate = document.createElement('p');
    dueDate.textContent = project.dueDate;

    const div = document.createElement('div');

    const priority = document.createElement('div');
    priority.classList.add('priority');
    const priorityIcon = getPriorityIcon(project.priority);
    priority.appendChild(priorityIcon);

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const checkbox = new Image();
    checkbox.src = '/src/assets/icons/checkbox.svg';
    checkbox.alt = 'project complete checkbox';

    const trash = new Image();
    trash.src = '/src/assets/icons/delete.svg';
    trash.alt = 'delete project icon'; 

    const edit = new Image();
    edit.src = '/src/assets/icons/edit.svg';
    edit.alt = 'edit project icon';

    actions.appendChild(checkbox);
    actions.appendChild(trash);
    actions.appendChild(edit);

    div.appendChild(priority);
    div.appendChild(actions);

    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(dueDate);
    projectCard.appendChild(div);

    return projectCard;
}

function renderProjectContainer() {
    const main = document.querySelector('main');
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    
    const projects = getProjects();
    for (let i = 0; i< projects.length; i++) {
         const projectCard = createProjectCard(projects[i]);
         projectContainer.appendChild(projectCard);
    }

    const addProject = document.createElement('div');
    addProject.classList.add('addProject');
    addProject.setAttribute('id', 'add-btn');
    const addProjectIcon = new Image();
    addProjectIcon.src = '/src/assets/icons/addProject.svg'
    addProjectIcon.alt = 'add project icon';
    addProject.appendChild(addProjectIcon);

    projectContainer.appendChild(addProject);

    main.appendChild(projectContainer);
}

export {renderProjectContainer};