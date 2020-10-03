const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL , {
    useUnifiedTopology : true,
    useNewUrlParser : true
}).then((res) => {
    console.log('Database Connected' + res);
}).catch((e) => {
    console.log('Error ' + e.message);
});