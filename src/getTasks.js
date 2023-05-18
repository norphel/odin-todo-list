//dummy tasks for now

function getTasks () {
    return [
        {
            title: 'Do something',
            description: 'Description of do something task can be seen here',
            dueDate: 'dd-mm-yyyy',
            priority: 'low'
        },
        {
            title: 'Do something else',
            description: 'Description of do something else task',
            dueDate: '30-05-2023',
            priority: 'high'
        }
    ];
}

export {getTasks};