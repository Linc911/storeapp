/**
 * Created by hwn on 2019/1/29.
 */
var express = require('express')
var app = express();
// app.use(express.static('src'))
app.use(express.static("dist"));
app.get('/', function (req, res) {
    res.redirect("/index.html")
})

app.listen(5050)