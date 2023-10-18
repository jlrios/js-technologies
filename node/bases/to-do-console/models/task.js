const { v4: uudiv4 } = require('uuid')

class Task {

    
    constructor(desc) {
        this.id = uudiv4
    }
}

module.exports = Task