class Projects {
    constructor () {
        this.projects = [];
    }

    addProject (project) {
        this.projects.push (project);
    }

    deleteProject (index) {
        this.projects.splice (index, 1);
    }
}

let myProjects = new Projects();

class Project {
    constructor (title, description, priority, dueDate, tasks) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.tasks = tasks;
    }
}

function createProject (e) {
    console.log('createProject function called');
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const dueDate = document.getElementById('due-date').value;

    const project = new Project(title, description, priority, dueDate, []);

    for (let i = 0; i < myProjects.projects.length; i++) {
        if (project.title === myProjects.projects[i].title) {
            alert('Project with same title already exists! Please choose a different title');
            return;
        }
    }

    myProjects.addProject(project);
    console.log(myProjects);
}

export { myProjects, createProject };