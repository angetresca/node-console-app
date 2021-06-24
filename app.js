require("colors");
const { inquirerMenu, pauseMenu, readInput, listTasksToDelete, confirm, listTasksToComplete } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");


const main = async () => {
    let opt = "";
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const description = await readInput("Descripción:");
                tasks.createTask(description);
                break;
            case "2":
                tasks.printCompleteList();
                break;
            case "3":
                tasks.listPendingOrCompleted(completed = true);
                break;
            case "4":
                tasks.listPendingOrCompleted(completed = false);
                break;
            case "5":
                const ids = await listTasksToComplete(tasks.arrayList);
                tasks.toggleCompletedTasks(ids);
                console.log("Tareas actualizadas correctamente!".green);
                break;
            case "6":
                const id = await listTasksToDelete(tasks.arrayList);
                if (id !== "0") {
                    const isSureToDelete = await confirm("¿Estás seguro que deseas borrar esta tarea?");

                    if (isSureToDelete) {
                        tasks.deleteTask(id);
                        console.log("Tarea borrada correctamente!".green);
                    }
                }
                break;
        }

        saveDB(tasks.arrayList);

        if (opt !== "0") await pauseMenu();

    } while (opt !== "0")

};

main();



