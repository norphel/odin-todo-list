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

export {getPriorityIcon};