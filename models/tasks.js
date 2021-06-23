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

    createTask ( description = "" ) {
        const task = new Task(description);
        this._list[task.id] = task;
    }
}

module.exports = Tasks;