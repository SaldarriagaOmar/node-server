const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = [];

function addTask() {
    rl.question('Tarea: ', (description) => {
        tasks.push({ description, completed: false });
        showTasks();
        rl.prompt();
    });
}

function removeTask() {
    rl.question('Índice de la tarea que desea eliminar: ', (index) => {
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            showTasks();
        } else {
            console.log('Índice incorrecto.');
        }
        rl.prompt();
    });
}

function completeTask() {
    rl.question('Índice de la tarea completada: ', (index) => {
        if (index >= 0 && index < tasks.length) {
            tasks[index].completed = true;
            showTasks();
        } else {
            console.log('Índice incorrecto.');
        }
        rl.prompt();
    });
}

function showTasks() {
    console.log('Lista de tareas:');
    tasks.forEach((task, index) => {
        console.log(`${index}. [${task.completed ? 'x' : ' '}] ${task.description}`);
    });
}

rl.setPrompt('Comando (add, remove, complete, show, exit): ');
rl.prompt();

rl.on('line', (line) => {
    const command = line.trim().toLowerCase();
    
    switch (command) {
        case 'add':
            addTask();
            break;
        case 'remove':
            removeTask();
            break;
        case 'complete':
            completeTask();
            break;
        case 'show':
            showTasks();
            break;
        case 'exit':
            rl.close();
            break;
        default:
            console.log('Comando incorrecto.');
            rl.prompt();
            break;
    }
});

rl.on('close', () => {
    console.log('¡Adiós!');
    process.exit(0);
});
