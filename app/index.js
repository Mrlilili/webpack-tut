/**
 * name: Webpack傻瓜式指南
 * Reference link：https://zhuanlan.zhihu.com/p/20367175
 * Reference link：https://zhuanlan.zhihu.com/p/20397902
 */
import './main.scss';
import generateText from './sub';
import $ from 'jquery';
import 'imports?jQuery=jquery!./plugin.js'
import moment from 'moment';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
    $('p').greenify()
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText())



