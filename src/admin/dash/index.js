import './main.css'

var elem = document.querySelector('.sidenav');
var options = {};
options.edge = "left";
var instance = M.Sidenav.init(elem, options);
instance.open()