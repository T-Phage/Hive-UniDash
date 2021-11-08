function toggleSignIn() {

    document.getElementById('loadingGIF').innerHTML = '<span> <img src="../assets/images/spiner.gif" height="25px"></span>';
    document.getElementById('signInBtn').disabled = true;
    document.getElementById('signInBtn').style.pointerEvents = "none";

    let username = document.getElementById('signInEmail').value;
    let password = document.getElementById('signInPass').value;

    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.responseType = 'json';
    xhr.open("GET", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/client/token/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
    xhr.onload = function () {

        if (this.readyState === 4 && this.status === 200) {

            token = xhr.response.token;
            window.sessionStorage.setItem('user', token);
            window.location.replace("../orders");

        }

        if (this.readyState === 4 && (this.status === 400 || this.status === 401 || this.status === 403 || this.status === 404 || this.status === 500)) {

            document.getElementById('loadingGIF').innerHTML = '';
            document.getElementById('signInBtn').disabled = false;
            document.getElementById('signInBtn').style.pointerEvents = "auto";

            $('#parentErrorDiv').slideDown('fast', function () {

                document.getElementById('errorDiv').innerHTML =
                    '<div class="alert alert-danger alert-dismissible fade show">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                    '</div>';

            });

        }

    };

    xhr.onerror = function () {

        document.getElementById('loadingGIF').innerHTML = '';
        document.getElementById('signInBtn').disabled = false;
        document.getElementById('signInBtn').style.pointerEvents = "auto";

        $('#parentErrorDiv').slideDown('fast', function () {

            document.getElementById('errorDiv').innerHTML =
                '<div class="alert alert-danger alert-dismissible fade show">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A Network Error, please check your connection and try again.' +
                '</div>';

        });

    };

    xhr.send();

}

function initApp() {

    document.getElementById('signInForm').addEventListener('submit', (e) => {

        e.preventDefault();
        toggleSignIn();

    });

}

window.onload = function () {

    function signProcessor() {

        if (sessionStorage.getItem('user') != null) {
            window.location.replace("../orders/");
        } else {

            document.getElementById('togglePass').addEventListener('click', (e) => {

                e.preventDefault();

                const password = document.querySelector('#signInPass');

                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);

                document.getElementById('toggleEye').classList.toggle('fa-eye-slash');
                document.getElementById('toggleEyeDiv').style.backgroundColor = '#3b4edad2';

            });

            initApp();

        }

    }

    if (sessionStorage.getItem('type') == null || sessionStorage.getItem('type') == undefined) {
        signProcessor();
    } else {

        if (sessionStorage.getItem('type') === 'Rental') {

            document.getElementById('rentPurchaseMgg').innerHTML = 'You Must Login to complete your Rental';
            signProcessor();

        } else if (sessionStorage.getItem('type') === 'Purchase') {

            document.getElementById('rentPurchaseMgg').innerHTML = 'You Must Login to complete your Order';
            signProcessor();

        }
    }

};