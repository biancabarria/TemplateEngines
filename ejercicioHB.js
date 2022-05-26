const { engine } = require("express-handlebars");
const express = require('express')
const app = express()

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
    })
);


app.use(express.urlencoded({ extended:true }))
app.use(express.json())

const productos = []

app.set('views', './views/handlebars')
app.set('view engine', 'hbs')

app.get('/form', (req, res) => {
    res.render('form', {productos})
})

app.get('/productos', (req, res) => {
    res.render('productos', {productos})
})

app.post('/productos', (req, res) => {
    const {name, price, photo} = req.body
    console.log(name, price, photo)
    productos.push({name, price, photo})
    console.log(productos)
    res.redirect('/form')
})

app.listen(8080, () => {
    console.log("I'm running my class project")
})