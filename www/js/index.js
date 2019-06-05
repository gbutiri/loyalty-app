
var app = {
    // Application Constructor
    initialize: function() {
        $('#phone_number').inputmask({"mask": "(999) 999-9999"});
        $('#verify_code').inputmask({"mask": "999999"});
        
        $(document).on('click', '#btn_logout', function(e) {
            e.preventDefault();
            $.ajax({
                url: 'https://iseestudios.com/services/logout',
                type: 'post',
                data: 'luser_id=' + window.localStorage.getItem('luser_id') + '&token=' + window.localStorage.getItem('luser_token'),
                dataType: 'json',
                success: function(d) {
                    window.localStorage.setItem('luser_id', '');
                    window.localStorage.setItem('luser_token', '');
                    postAjax(d);
                    remove_loading_circle();
                },
            });
        });
        
        if (typeof(window.localStorage.getItem('luser_token')) !== 'undefined' && typeof(window.localStorage.getItem('luser_id')) !== 'undefined') {
            show_loading_circle();
            $.ajax({
                url: 'https://iseestudios.com/services/handshake',
                type: 'post',
                data: 'luser_id=' + window.localStorage.getItem('luser_id') + '&token=' + window.localStorage.getItem('luser_token'),
                dataType: 'json',
                success: function(d) {
                    postAjax(d);
                    remove_loading_circle();
                },
            });
        }
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