function StopWatch() {
    let duration = 0;
    let start = false;
    let startTime = 0, stopTime = 0;
    this.start = function() {
        if(start) {
            throw new Error('StopWatch is already started');
        }
        if(startTime === 0) {
            startTime = new Date().getTime();
        } 
        start = true;
    }
    this.stop = function() {
        if(!start) {
            throw new Error('StopWatch is not started');
        }
        stopTime = new Date().getTime();
        start = false;
    }
    this.reset = function() {
        start = false;
        duration = 0;
        startTime = 0;
        stopTime = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            duration = (stopTime - startTime)/1000;
            return duration;
        }
    })
}