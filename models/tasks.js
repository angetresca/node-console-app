const Task = require("./task");

/**
 * _list:
 *  { "uuid-1231312-123123-2": { id:11, description: abc, completedIn:92213 } },
 */

class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    get arrayList() {

        const list = [];

        Object.keys(this._list).forEach(key => {
            list.push(this._list[key]);
        });

        return list;
    }

    deleteTask(id = "") {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = new Task(task.description, task.id, task.completedIn);
        })
    }

    createTask(description = "") {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    printCompleteList() {
        console.log();
        this.arrayList.forEach((task, index) => {
            const number = `${index + 1}.`.blue;
            const state = (task.completedIn) ? "Completada".green : "Pendiente".red;
            const description = task.description.yellow;
            console.log(`${number} ${description} :: ${state}`);
        });
    }

    listPendingOrCompleted(completed = true) {
        console.log();
        let counter = 0;
        this.arrayList.forEach(task => {
            if ((completed && !task.completedIn) || (!completed && task.completedIn)) return null;
            counter++;
            const number = `${counter}.`.blue;
            const description = task.description.yellow;
            const state = (task.completedIn) ? `${task.completedIn}`.green : "Pendiente".red;
            console.log(`${number} ${description} :: ${state}`);
        });
    }

    toggleCompletedTasks(ids = []) {
        this.arrayList.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completedIn = null;
            } else if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });
    }
}

module.exports = Tasks;