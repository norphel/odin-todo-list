import {getProjects} from './getProjects.js';
import {openModal} from './addProjectDetails.js';

function getPriorityIcon(priority) {
    const img = new Image();
    if (priority === 'low') {
        img.src = '/src/assets/icons/lowPriority.svg';
        img.alt = 'low priority icon';
    } else if (priority === 'medium') {
        img.src = '/src/assets/icons/mediumPriority.svg';
        img.alt = 'medium priority icon';
    } else {
        img.src = '/src/assets/icons/highPriority.svg';
        img.alt = 'high priority icon';
    }
    return img;
}

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
    const main = document.getElementsByTagName(main);
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    
    const projects = getProjects();
    for (const project in projects) {
         const projectCard = createProjectCard(project);
         projectContainer.appendChild(projectCard);
    }

    const addProject = document.createElement('div');
    addProject.classList.add('addProject');
    addProject.setAttribute('id', 'add-project-btn');
    const addProjectIcon = new Image();
    addProjectIcon.src = '/src/assets/icons/addProject.svg'
    addProjectIcon.alt = 'add project icon';

    addProject.addEventListener('click', openModal);

    projectContainer.appendChild(addProject);

    main.appendChild(projectContainer);
}