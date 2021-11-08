(function () {

    document.getElementById('resetArea').style.display = 'none';
    document.getElementById('preHeatReset').innerHTML = '<img src="../images/spiner.gif" height="30px"><br>Please wait...';

    urlParam = new URLSearchParams(window.location.search);
    const specResetterID = urlParam.get('token');

    let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/clients/verify_token/";
    let url = uri + String(specResetterID);

    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.responseType = 'json';
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {

        errorCode = this.status;

        if (this.readyState === 4 && this.status === 200) {

            document.getElementById('resetArea').style.display = 'block';
            $('#preHeatReset').empty();

            document.getElementById('resetBtn').addEventListener('click', (e) => {

                e.preventDefault();

                document.getElementById('messageDivAltAlt').innerHTML = '<span><img src="../images/spiner.gif" height="30px"></span>';
                let password = document.getElementById('password').value;
                let rePassword = document.getElementById('rePassword').value;
                let email = document.getElementById('email').value;

                if (password !== rePassword) {

                    $('#messageDivAltAlt').empty();
                    $('#parentMessageDiv').slideDown('fast', function () {
                        document.getElementById('messageDiv').innerHTML = '<span class="error-out">Your passwords do not match!</span>';
                    }).delay(5000).slideUp('fast');

                } else {

                    if (password === "" || rePassword === "" || email === "") {

                        $('#messageDivAltAlt').empty();
                        $('#parentMessageDiv').slideDown('fast', function () {
                            document.getElementById('messageDiv').innerHTML = '<span class="error-out">You cannot submit empty fields !</span>';
                        }).delay(5000).slideUp('fast');

                    } else {

                        let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/clients/set_password/";
                        let url = uri + String(specResetterID);

                        var xhr = new XMLHttpRequest();
                        xhr.overrideMimeType("application/json");
                        xhr.responseType = 'json';
                        xhr.open("POST", url, true);
                        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                        xhr.onreadystatechange = function () {

                            if (this.readyState === 4 && this.status === 204) {

                                document.getElementById('resetBtn').style.pointerEvents = 'none';
                                document.getElementById('messageDivAltAlt').innerHTML = '';
                                document.getElementById('messageDivAlt').innerHTML = '<span><img src="../images/spiner.gif" height="30px"></span>';

                                $('#parentMessageDiv').slideDown('fast', function () {
                                    document.getElementById('messageDiv').innerHTML = '<span style="font-size: 16px; color: green;">Your Password has been Reset successfully</span>';
                                }).delay(5000).slideUp('fast');

                                setTimeout(() => {

                                    window.sessionStorage.removeItem('userID');
                                    window.sessionStorage.removeItem('counter');
                                    window.sessionStorage.removeItem('user');

                                    window.location.replace("../login/");

                                }, 4000);

                            }

                        };

                        xhr.onerror = function (error) {
                            console.log(error);
                        };

                        xhr.send(JSON.stringify({

                            password: password,
                            password_confirm: rePassword,
                            email: email

                        }));

                    }

                }

            });

        } else {

            if (errorCode == 401) {
                document.getElementById('preHeatReset').innerHTML = '<span style="color: red;">Invalid Token</span>';
            } else {
                document.getElementById('preHeatReset').innerHTML = '<span style="color: red;">' + xhr.response.error + '</span>';
            }

        }
    };

    xhr.onerror = function (error) {
        console.log(error);
    };
    xhr.send();

})();