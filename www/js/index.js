
var app = {
    // Application Constructor
    initialize: function() {
        $('#phone_number').inputmask({"mask": "(999) 999-9999"});
        $('#verify_code').inputmask({"mask": "999999"});
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        window.plugins.touchid.isAvailable(
            function(type) {alert(type)}, // type returned to success callback: 'face' on iPhone X, 'touch' on other devices
            function(msg) {alert('not available, message: ' + msg)} // error handler: no TouchID available
        );
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

app.initialize();