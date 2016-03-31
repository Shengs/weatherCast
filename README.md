# weathercast
A single page angularjs app, use nodejs to server the files as backend.

This app is comepletely written with angularjs, all code are included in public file. 
Used express only for the purpose to host files as server. There is no database used in this app.
It can be used as template to use nodejs to host pure angularjs web application.

## [Demo](http://weathercast-shihengz.rhcloud.com)

This demo version is running on [RedHat's OpenShift](https://www.openshift.com/pricing/index.html). They provide free tier environment to run at most 3 apps with 1GB storage for each. They require to format server and port in node starting file like this:
```javascript
In package.json:

"scripts": {
  "start": "node server.js"
},
"main": "server.js",
```
```javascript
In server.js:

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
```
Feel free to use this template to host your pure angular app. You can also host your app on [heroku](https://www.heroku.com/pricing), it also provides free tier for ruuning and testing small app with 512MB RAM.
