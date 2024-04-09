function fakeAsyncTask(callback) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + 1000) {
        end = new Date().getTime();
    }
    callback();
}


fakeAsyncTask(function() {
    document.getElementById('countdown').innerText = 10;
    fakeAsyncTask(function() {
        document.getElementById('countdown').innerText = 9;
        fakeAsyncTask(function() {
            document.getElementById('countdown').innerText = 8;
            fakeAsyncTask(function() {
                document.getElementById('countdown').innerText = 7;
                fakeAsyncTask(function() {
                    document.getElementById('countdown').innerText = 6;
                    fakeAsyncTask(function() {
                        document.getElementById('countdown').innerText = 5;
                        fakeAsyncTask(function() {
                            document.getElementById('countdown').innerText = 4;
                            fakeAsyncTask(function() {
                                document.getElementById('countdown').innerText = 3;
                                fakeAsyncTask(function() {
                                    document.getElementById('countdown').innerText = 2;
                                    fakeAsyncTask(function() {
                                        document.getElementById('countdown').innerText = 1;
                                        fakeAsyncTask(function() {
                                            document.getElementById('countdown').innerText = "Happy New Year!";
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});