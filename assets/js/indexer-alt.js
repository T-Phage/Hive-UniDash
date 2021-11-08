(function () {

    if (!sessionStorage.getItem('user')) {
        document.getElementById('logoutBtn').innerHTML = '<span class="login-span">Login</span>';
    } else {

        let token = sessionStorage.getItem('user');

        function tester() {

            document.getElementById('logoutBtn').innerHTML = '<span class="logout-span">Log out</span>';

            document.getElementById('logoutBtn').addEventListener('click', (e) => {

                e.preventDefault();

                window.localStorage.removeItem('counter');

                window.sessionStorage.removeItem('user');
                window.sessionStorage.removeItem('userID');
                window.sessionStorage.removeItem('vehicleID');
                window.sessionStorage.removeItem('type');
                window.sessionStorage.removeItem('is_Active');
                window.sessionStorage.removeItem('driverType');
                window.sessionStorage.removeItem('dailyMileage');
                window.sessionStorage.removeItem('quantity');
                window.sessionStorage.removeItem('cost');
                window.sessionStorage.removeItem('duration');
                window.sessionStorage.removeItem('commuteRoute');

                window.location = "./";

            });
        }

        tester();

        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.responseType = 'json';
        xhr.open("GET", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/clients", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.onreadystatechange = function () {

            if (this.readyState === 4 && this.status === 200) {

                let userID = xhr.response[0].id;
                window.sessionStorage.setItem('userID', userID);

            }

        };


        xhr.onerror = function (error) {
            console.log(error);
        };
        xhr.send();

        if (localStorage.getItem("counter")) {

            if (localStorage.getItem("counter") <= 0) {
                var value = test;
            } else {
                var value = localStorage.getItem("counter");
            }

        } else {
            var value = test;
        }

        var counter = function () {

            if (value <= 0) {
                localStorage.setItem("counter", test);
                value = test;
            } else {
                value = parseInt(value) - 1;
                localStorage.setItem("counter", value);
            }

            if (localStorage.getItem('counter') == 0) {

                document.getElementById('divCounter').innerHTML = 'Your session has expired <span><img src="../images/spiner.gif" height="30px"></span>';

                window.sessionStorage.removeItem('user');
                window.localStorage.removeItem('counter');
                window.sessionStorage.removeItem('userID');
                window.sessionStorage.removeItem('vehicleID');
                window.sessionStorage.removeItem('type');
                window.sessionStorage.removeItem('is_Active');
                window.sessionStorage.removeItem('driverType');
                window.sessionStorage.removeItem('dailyMileage');
                window.sessionStorage.removeItem('quantity');
                window.sessionStorage.removeItem('cost');
                window.sessionStorage.removeItem('duration');
                window.sessionStorage.removeItem('commuteRoute');

                setTimeout(() => {
                    window.location.reload(false);
                }, 3000);
            }

        };

        var interval = setInterval(function () {
            counter();
        }, 1000);

    }

})();