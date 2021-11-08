(function () {

    let token = sessionStorage.getItem('user');

    function tester() {

        document.getElementById('userName').innerHTML = xhr.response[0].name;
        document.getElementById('userEmail').innerHTML = xhr.response[0].email;
        document.getElementById('userPhone').innerHTML = xhr.response[0].phone_number;

    }

    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.responseType = 'json';
    xhr.open("GET", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/clients", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.onreadystatechange = function () {

        userID = xhr.response[0].id;
        window.sessionStorage.setItem('userID', userID);

        if (this.readyState === 4 && this.status === 200) {
            tester();
        }

    };

    xhr.onerror = function (error) {
        console.log(error);
    }
    xhr.send();

})();