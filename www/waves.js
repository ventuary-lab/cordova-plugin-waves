window.waves = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Waves", "echo", [str]);
};


cordova.exec(function(a) {console.log(a)}, function(err) {}, "Waves", "echo", ['qwe']);
