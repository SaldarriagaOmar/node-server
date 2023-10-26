const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = [];

function addTask() {
    return new Promise((resolve, reject) => {
        rl.question('Tarea: ', (description) => {
            tasks.push({ description, completed: false });
            showTasks();
            resolve();
        });
    });
}

function removeTask() {
    return new Promise((resolve, reject) => {
        rl.question('Índice de la tarea que desea eliminar: ', (index) => {
            if (index >= 0 && index < tasks.length) {
                tasks.splice(index, 1);
                showTasks();
                resolve();
            } else {
                console.log('Índice incorrecto.');
                reject('Índice incorrecto.');
            }
        });
    });
}

function completeTask() {
    return new Promise((resolve, reject) => {
        rl.question('Índice de la tarea completada: ', (index) => {
            if (index >= 0 && index < tasks.length) {
                tasks[index].completed = true;
                showTasks();
                resolve();
            } else {
                console.log('Índice incorrecto.');
                reject('Índice incorrecto.');
            }
        });
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

async function main() {
    rl.on('line', async (line) => {
        const command = line.trim().toLowerCase();

        switch (command) {
            case 'add':
                await addTask();
                break;
            case 'remove':
                await removeTask();
                break;
            case 'complete':
                await completeTask();
                break;
            case 'show':
                showTasks();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log('Comando incorrecto.');
                break;
        }

        rl.prompt();
    });

    rl.on('close', () => {
        console.log('¡Hasta luego!');
        process.exit(0);
    });
}

main();