function routage(app) {

    var api = '/api/';
    var data = '/../data/';
    var jsonfileservice = require('../utils/jsonfileservice')();
    var four0four = require('../utils/404')();

    //API
    app.use('/api/connect', require('../api/auth'));
    app.use('/api/sortie', require('../api/sortie'));

    app.get(api + '*', four0four.notFoundMiddleware);
}

module.exports = routage;
