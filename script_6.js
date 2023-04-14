'use strict'
function loadJSON(callback) {
    var XMLObj = new XMLHttpRequest();
    XMLObj.open('GET', 'data.json', true);
    XMLObj.onreadystatechange = function () {
        if (XMLObj.readyState === 4 && XMLObj.status === 200) {
            var myArr = JSON.parse(this.responseText);
            callback(myArr);
        }
    };
    XMLObj.send();
}

loadJSON(function (arr) {
    console.log(arr);
    // Данные получены.
});