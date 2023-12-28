
import questionController from './controllers/question-controller.js'

const externals = {};

const internals = {};


internals.routes = {
    questionOne: {
        hash: '#Question',
        controller: questionController
    }
}


internals.defaultRoute = 'questionOne';
internals.currentHash = '';

internals.hashCheck = function() {
    if (window.location.hash === internals.currentHash) {
        return;
    }

    let routeName = Object.keys(internals.routes).find((name) => window.location.hash === internals.routes[name].hash);

    if(!routeName) {
        routeName = internals.defaultRoute;
        window.location.hash = internals.routes[internals.defaultRoute].hash;
    }

    internals.loadController(internals.routes[routeName].controller);

};

internals.loadController = function(controllerName) {


    internals.currentHash = window.location.hash;
        console.log(controllerName);
    try{
        controllerName.start();
    } catch (err) {
        console.log(err.stack);
        window.location.hash = internals.routes[internals.defaultRoute].hash;
    }
    
}

externals.start = function(){
    window.location.hash = window.location.hash || internals.routes[internals.defaultRoute].hash
    setInterval(internals.hashCheck, 200);
}







export default externals;