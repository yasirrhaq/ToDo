var data = [{ item: 'work out' }, { item: 'drink milk' }, { item: 'learn node.js' }];

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('views/todo', { todos: data });
    });

    app.post('/todo', function (req, res) {

    });

    app.delete('/todo', function (req, res) {

    });
};