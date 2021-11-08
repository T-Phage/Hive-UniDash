(function () {

    document.getElementById('mapPreloader').innerHTML = '<img src="../assets/images/preloader.gif" height="80px">';

    if (!sessionStorage.getItem('user')) {
        document.getElementById('logoutBtn').innerHTML = '<span class="login-span">Login</span>';
    } else {

        document.getElementById('logoutBtn').innerHTML = '<span class="logout-span">Log out</span>';

        if (localStorage.getItem("counter")) {

            if (localStorage.getItem("counter") <= 0) {
                var value = test;
            } else {
                var value = localStorage.getItem("counter");
            }

        } else {
            var value = test;
        }
        //document.getElementById('divCounter').innerHTML = value;

        var counter = function () {

            if (value <= 0) {
                localStorage.setItem("counter", test);
                value = test;
            } else {
                value = parseInt(value) - 1;
                localStorage.setItem("counter", value);
            }
            //document.getElementById('divCounter').innerHTML = value;

            if (localStorage.getItem('counter') == 0) {

                document.getElementById('divCounter').innerHTML = 'Your session has expired <span><img src="../images/spiner.gif" height="30px"></span>';
                sessionStorage.removeItem('user');
                localStorage.removeItem('counter');
                sessionStorage.removeItem('userID');

                setTimeout(() => {
                    window.location.reload();
                }, 3000);

            }

        };

        var interval = setInterval(function () {
            counter();
        }, 1000);

    }

    document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=6%20Naa%20Asia%20Rd%2C%20Laterbiokoshie%2C%20Accra&t=&z=13&ie=UTF8&iwloc=&output=embed";
    document.getElementById('gmap_canvas').addEventListener('load', (e) => {
        $('#mapPreloader').empty();
    });

})();