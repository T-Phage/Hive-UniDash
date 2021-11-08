(function () {

    let token = sessionStorage.getItem('user');
    const specResetterID = window.sessionStorage.getItem('userID');

    document.getElementById('resetPasswordBeginForm').addEventListener('submit', (e) => {

        e.preventDefault();
        document.getElementById('resetBeginBtn').disabled = true;

        document.getElementById('messageDivAltAlt').innerHTML = '<span><img src="../assets/images/spiner.gif" height="30px"></span>';
        let resetEmail = document.getElementById('resetEmail').value;

        if (!resetEmail) {

            $('#messageDivAltAlt').empty();
            document.getElementById('resetBeginBtn').disabled = false;

            $('#parentMessageDiv').slideDown('fast', function () {

                document.getElementById('messageDiv').innerHTML =
                    '<div class="alert alert-danger alert-dismissible fade show">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> You cannot submit an empty field !' +
                    '</div>';

            });

        } else {

            let data = ({
                email: resetEmail
            });

            var xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.responseType = 'json';
            xhr.open("POST", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/clients/begin_password_reset", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function () {

                if (this.readyState === 4 && this.status === 204) {

                    document.getElementById('messageDivAltAlt').innerHTML = '';
                    document.getElementById('resetBeginBtn').disabled = true;
                    document.getElementById('resetBeginBtn').style.pointerEvents = 'none';

                    $('#parentMessageDiv').slideDown('fast', function () {

                        document.getElementById('messageDiv').innerHTML =
                            '<div class="alert alert-success alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A reset password link has been sent to your mail, please visit your inbox for next steps.' +
                            '</div>';

                    });

                }

                if (this.readyState === 4 && (this.status === 400 || this.status === 401 || this.status === 403 || this.status === 404 || this.status === 500)) {

                    $('#messageDivAltAlt').empty();
                    document.getElementById('resetBeginBtn').disabled = false;

                    $('#parentMessageDiv').slideDown('fast', function () {

                        document.getElementById('messageDiv').innerHTML =
                            '<div class="alert alert-danger alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times</button> ' + xhr.response.error +
                            '</div>';

                    });

                }

            };

            xhr.onerror = function () {

                $('#messageDivAltAlt').empty();
                document.getElementById('resetBeginBtn').disabled = false;

                $('#parentMessageDiv').slideDown('fast', function () {

                    document.getElementById('messageDiv').innerHTML =
                        '<div class="alert alert-danger alert-dismissible fade show">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                        '</div>';

                });

            };

            xhr.send(JSON.stringify(data));

        }

    });

})();