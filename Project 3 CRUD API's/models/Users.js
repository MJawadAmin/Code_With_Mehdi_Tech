const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String,
        require: true
    },
    symptoms: {type: String,
        require: true
    },
    phoneNo: {type: String,
        require: true
    },
    age: {type: Number,
        require: true
    },
    bloodGroup: {type: String,
        require: true
    },
    address: {type: String,
        require: true
    },
});

module.exports = mongoose.model('User', userSchema);
