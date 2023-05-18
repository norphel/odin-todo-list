//temporarily hard-coded. Project details will be stored and retrieved from localStorage

function getProjects () {
    return [
        {
            title: "Complete Todo List project",
            description: "A simple Todo List project to practice SOLID principles",
            dueDate: '25-05-2023',
            priority: 'medium'
        },
        {
            title: "Change UI of the project",
            description: "Redesign the page",
            dueDate: '23-05-2023',
            priority: 'high'
        },
        {
            title: 'Start WeatherApp project',
            description: 'API and Asynchronous JS project',
            dueDate: '05-06-2023',
            priority: 'low'
        }
    ]
}

export {getProjects};