var User      = require('../controller/user');

module.exports = [
    {
        path:'/user/create',
        method:'POST',
        config: User.create
    }
];