/**
 * Created by zhujinyu on 2017/5/22.
 */
require('./main.css');
var $ = require('jquery');
var moment = require('moment');
var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>哎呀，问题终于解决了，怎么办，好开心.</h1>';
app.appendChild(sub());
document.body.appendChild(app);
console.log("我想輸出這些内容");
$('body').append('<p>look at me! now is ' + moment().format() + '</p>');
