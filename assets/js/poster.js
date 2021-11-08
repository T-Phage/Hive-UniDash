(function () {

    let posterForm = document.getElementById('posterForm');
    posterForm.addEventListener('submit', (e) => {

        e.preventDefault();

        document.getElementById('loadingGIF').innerHTML = '<span><img src="../assets/images/spiner.gif" height="30px"></span>';
        document.getElementById('signUpBtn').disabled = true;

        let rePass = document.getElementById('rePass').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;
        let name = document.getElementById('fullName').value;

        if (pass !== rePass) {

            document.getElementById('loadingGIF').innerHTML = '';
            document.getElementById('signUpBtn').disabled = false;

            $('#parentErrorDiv').slideDown('fast', function () {

                document.getElementById('errorDiv').innerHTML =
                    '<div class="alert alert-danger alert-dismissible fade show">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your Passwords do not match' +
                    '</div>';

            });

        } else {

            let data = ({

                name: name,
                password: pass,
                email: email,
                phone_number: phone,
                roles: ['USER'],
                password_confirm: rePass

            });

            let xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.responseType = 'json';
            xhr.open("POST", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/clients", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function () {

                if (this.readyState === 4 && this.status === 201) {

                    document.getElementById('loadingGIF').innerHTML = '';

                    $('#parentErrorDiv').slideDown('fast', function () {
                        document.getElementById('errorDiv').innerHTML = "<span>Account Created Successfully</span>";
                    }).delay(7000).slideUp('fast');

                    window.location.replace("../login/");

                }

                if (this.readyState === 4 && (this.status === 400 || this.status === 401 || this.status === 403 || this.status === 404 || this.status === 500)) {

                    document.getElementById('loadingGIF').innerHTML = '';

                    $('#parentErrorDiv').slideDown('fast', function () {

                        document.getElementById('errorDiv').innerHTML =
                            '<div class="alert alert-danger alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                            '</div>';

                    });

                }

            };

            xhr.onerror = function () {

                document.getElementById('errorDiv').innerHTML =
                    '<div class="alert alert-danger alert-dismissible fade show">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                    '</div>';

            };

            xhr.send(JSON.stringify(data));

        }

    })

})();