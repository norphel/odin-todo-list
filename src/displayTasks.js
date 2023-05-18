import {getTasks} from '/src/getTasks.js';
import { getPriorityIcon } from './getPriorityIcon';
import { openModal } from './addProjectDetails';

function createTaskRow (task) {
    const taskRow = document.createElement('div');
    taskRow.classList.add('task');

    const about = document.createElement('div');
    about.classList.add('about');

    const title = document.createElement('h3');
    title.textContent = task.title;
    const description = document.createElement('p');
    description.textContent = task.description;

    about.appendChild(title);
    about.appendChild(description);

    const priority = document.createElement('div');
    priority.classList.add('priority');
    const priorityIcon = getPriorityIcon(task.priority);
    priority.appendChild(priorityIcon);

    const dueDate = document.createElement('div');
    dueDate.classList.add('dueDate')
    dueDate.textContent = task.dueDate;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const checkbox = new Image();
    checkbox.src = '/src/assets/icons/checkboxDark.svg';
    checkbox.alt = 'project complete checkbox';

    const trash = new Image();
    trash.src = '/src/assets/icons/deleteDark.svg';
    trash.alt = 'delete project icon'; 

    const edit = new Image();
    edit.src = '/src/assets/icons/editDark.svg';
    edit.alt = 'edit project icon';

    actions.appendChild(checkbox);
    actions.appendChild(trash);
    actions.appendChild(edit);

    taskRow.appendChild(about);
    taskRow.appendChild(priority);
    taskRow.appendChild(dueDate);
    taskRow.appendChild(actions);

    return taskRow;
}
function renderTasksContainer () {
    const main = document.querySelector('main');
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasksContainer');

    const heading = document.createElement('h2');
    heading.textContent = 'Dummy heading';

    const listHeader = document.createElement('div');
    listHeader.classList.add('listHeader');
    listHeader.innerHTML = "<span>Task</span>   <span>Priority</span>   <span>Due date</span>   <span>Actions</span>";

    const hrLine = document.createElement('hr');

    tasksContainer.appendChild(heading);
    tasksContainer.appendChild(listHeader);
    tasksContainer.appendChild(hrLine);

    const tasks = getTasks();
    for (let i = 0; i < tasks.length; i++) {
        const taskRow = createTaskRow(tasks[i]);
        tasksContainer.appendChild(taskRow);
    }

    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.setAttribute('id', 'add-task-btn');
    const addTaskIcon = new Image();
    addTaskIcon.src = '/src/assets/icons/addTask.svg'
    addTaskIcon.alt = 'add task icon';
    addTask.appendChild(addTaskIcon);

    addTask.addEventListener('click', openModal);

    tasksContainer.appendChild(addTask);

    main.appendChild(tasksContainer);
}

export {renderTasksContainer};