var User      = require('../controller/user');

module.exports = [
    {
        path:'/user/create',
        method:'POST',
        config: User.create
    },
    {
        path:'/user/get/{firstname}',
        method:'GET',
        config: User.getOne
    },
    {
        path:'/user/get',
        method:'GET',
        config: User.get
    }
];