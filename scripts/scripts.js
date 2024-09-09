const countdownElement = document.getElementById('countdown');
const messageElement = document.getElementById('message');

// Callback Hell implementation for countdown from 10 to "Happy Independence Day!"
setTimeout(function() {
    countdownElement.textContent = '9';
    setTimeout(function() {
        countdownElement.textContent = '8';
        setTimeout(function() {
            countdownElement.textContent = '7';
            setTimeout(function() {
                countdownElement.textContent = '6';
                setTimeout(function() {
                    countdownElement.textContent = '5';
                    setTimeout(function() {
                        countdownElement.textContent = '4';
                        setTimeout(function() {
                            countdownElement.textContent = '3';
                            setTimeout(function() {
                                countdownElement.textContent = '2';
                                setTimeout(function() {
                                    countdownElement.textContent = '1';
                                    setTimeout(function() {
                                        countdownElement.style.display = 'none';
                                        messageElement.textContent = 'Happy Independence Day!';
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
