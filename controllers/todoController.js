let data = [
    {
        item: 'node js'
    }, {
        item: 'express js'
    }

];

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = (app) => {

    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data })
    })
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        console.log(data)
        res.json(data);
    })
    app.delete('/todo/:item', (req, res) => {
        data = data.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item);
console.log(data)
        res.json(data);
    })
}