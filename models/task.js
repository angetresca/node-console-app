const { v4: uuidv4 } = require("uuid");

class Task {
    id = "";
    description = "";
    completedIn = null;

    constructor( description, id = null, completedIn = null ) {
        this.description = description;

        if (id) {
            this.id = id;
        } else {
            this.id = uuidv4();
        }

        if (completedIn) {
            this.completedIn = completedIn;
        } else {
            this.completedIn = null;
        }
        
    }
}

module.exports = Task;