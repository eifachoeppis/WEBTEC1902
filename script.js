(function(){
    "use strict";
    const dateTime = new Date();
    document.cookie = "last_hit=" + dateTime.toLocaleDateString() + " - " + dateTime.toLocaleTimeString();
})();