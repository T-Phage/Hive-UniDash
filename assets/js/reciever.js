(function () {

    if (sessionStorage.getItem('user') == null) {

        document.getElementById('messenger').innerHTML =
            '<div class="alert alert-warning">' +
            'You have no session, redirecting you to login... <img src="../images/spiner.gif" height="50px">' +
            '</div>';

        setTimeout(() => {
            window.location.replace("../login");
        }, 4000);

    } else {

        let token = sessionStorage.getItem('user');
        orderID = sessionStorage.getItem('orderID');

        if (orderID == null) {

            document.getElementById('messenger').innerHTML =
                '<div class="alert alert-info">' +
                'No order in pool to make a purchase for, redirecting you... <img src="../images/spiner.gif" height="50px">' +
                '</div>';

            setTimeout(() => {
                window.location.replace("../orders/");
            }, 4000);

        } else {

            var urlParams = new URLSearchParams(window.location.search);

            let txref = urlParams.get('txRef');
            window.sessionStorage.setItem('transactionReference', txref);

            let state = urlParams.get('status');
            if (state === 'success') {

                let url = 'https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/transactions';

                var xhr = new XMLHttpRequest();
                xhr.overrideMimeType("application/json");
                xhr.responseType = 'json';
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                xhr.onreadystatechange = function () {

                    if (this.readyState === 4 && this.status === 200) {

                        document.getElementById('messenger').innerHTML =
                            '<div class="alert alert-dismissible alert-danger">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your Purchase has been successful, we\'re redirecting you to orders page... <img src="../images/spiner.gif" height="50px">' +
                            '</div>';

                        setTimeout(() => {
                            window.sessionStorage.removeItem('orderID');
                            window.location.replace("../orders");
                        }, 6000);

                    }

                    if (this.readyState === 4 && (this.status === 400 || this.status === 401 || this.status === 403 || this.status === 404 || this.status === 500)) {

                        document.getElementById('messenger').innerHTML =
                            '<div class="alert alert-dismissible alert-danger">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                            '</div>';

                    }

                };

                xhr.onerror = function () {

                    document.getElementById('messenger').innerHTML =
                        '<div class="alert alert-dismissible alert-danger">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection or reload the page.' +
                        '</div>';

                };

                xhr.send(JSON.stringify({

                    transaction_reference: txref,
                    order_id: orderID

                }));

            } else {

                document.getElementById('messenger').innerHTML =
                    '<div class="alert alert-dismissible alert-danger">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> No Purchase(s) to make, redirecting you... <img src="../images/spiner.gif" height="50px">' +
                    '</div>';

            }

        }

    }

})();