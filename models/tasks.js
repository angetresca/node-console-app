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

    get arrayList () {

        const list = [];
        
        Object.keys(this._list).forEach( key => {
            list.push(this._list[key]);
        } );

        return list;
    }

    loadTasksFromArray ( tasks = [] ) {
        tasks.forEach(task => {
            this._list[task.id] = new Task(task.description, task.id, task.completedIn);
        })
    }

    createTask ( description = "" ) {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    printCompleteList () {
        console.log();
        this.arrayList.forEach((task, index) => {
            const number = `${index + 1}.`.blue;
            const state =  (task.completedIn) ? "Completada".green : "Pendiente".red;
            const description = task.description.yellow;
            console.log(`${number} ${description} :: ${state}`);
        });
    }
}

module.exports = Tasks;