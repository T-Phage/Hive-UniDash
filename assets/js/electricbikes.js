(function () {

    document.getElementById("rentModalBikeClose").addEventListener('click', (e) => {

        e.preventDefault();
        document.getElementById("rentModalElectBike").style.display = "none";

    });

    document.getElementById('purchaserModalClose').addEventListener('click', (e) => {

        e.preventDefault();
        document.getElementById('purchaserModalElectBike').style.display = "none";
    });

    window.onclick = function (event) {

        if (event.target == document.getElementById('purchaserModalElectBike')) {
            document.getElementById('purchaserModalElectBike').style.display = "none";
        }
        if (event.target == document.getElementById('rentModalElectBike')) {
            document.getElementById('rentModalElectBike').style.display = "none";
        }

    }

    function roundPrice(rnum, rlength) {

        var newnumber = Math.ceil(rnum * Math.pow(10, rlength - 1)) / Math.pow(10, rlength - 1);
        var toTenths = newnumber.toFixed(rlength);
        return toTenths;

    }

    let electricBikeRent = document.getElementById('electricDelBikeRent');
    let electricBikeBuy = document.getElementById('electricDelBikeBuy');

    electricBikeRent.addEventListener('click', (e) => {

        e.preventDefault();

        //document.getElementById('rentTC').href = '../hatch-back/agreement.pdf';
        document.getElementById("rentModalElectBike").style.display = "block";

        function looper() {

            let getRentForm = document.getElementById('rentForm').value;
            let getRentDuration = document.getElementById('duration').value;

            if (getRentForm === 'Courier') {

                switch (getRentDuration) {

                    case '1 month':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 800 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 30 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;
                    case '2 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 1600 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 60 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '3 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 2400 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 90 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '4 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 3200 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 120 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '5 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 4000 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 150 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '6 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 4800 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 180 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '7 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 5600 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 210 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '8 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 6400 * Number(document.getElementById('rentQuantity').value) + '  / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 240 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '9 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 7200 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 270 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '10 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 8000 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 300 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '11 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 8800 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 60 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                    case '12 months':
                        document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:<br>1. ( GHS 800 / month )</small><br><strong>' + 'GHS ' + 9600 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong><br><br><small>2. ( GHS 40 / Day )</small><br><strong>' + 'GHS ' + 60 * 40 * Number(document.getElementById('rentQuantity').value) + ' / Month</strong>';
                        break;

                }

            } else if (getRentForm === 'Franchise') {

                document.getElementById('rentDurationDiv').style.display = 'none';
                document.getElementById('rentFeeDiv').innerHTML = '<small>Based on your options:</small><br><strong>1. GHS 1100 / Month for 26 Months</strong><br><br><strong>2. GHS 200 / Month for 34 Months After 26 Months</strong>';

            }

        }

        document.getElementById('rentForm').addEventListener('change', function () {

            document.getElementById('rentDurationDiv').style.display = 'block';
            document.getElementById('rentFeeDiv').innerHTML = '';
            looper();

        });

        document.getElementById('duration').addEventListener('change', function () {

            if (document.getElementById('rentQuantity').value == null || document.getElementById('rentQuantity').value == undefined || document.getElementById('rentQuantity').value === "") {
                document.getElementById('rentFeeDiv').innerHTML = 'The QUANTITY field is Empty, Real-time calculations cannot be made.';
            } else {

                document.getElementById('rentDurationDiv').style.display = 'block';
                looper();

            }

        });

        document.getElementById('rentQuantity').addEventListener('input', function () {

            document.getElementById('rentDurationDiv').style.display = 'block';
            looper();

        });

        document.getElementById('continueRentBtn').addEventListener('click', (e) => {

            e.preventDefault();

            if (!document.getElementById('rentQuantity').value || !document.getElementById('dailyMileage').value || !document.getElementById('rentForm').value || !document.getElementById('commuteRoute').value && !document.getElementById('exampleCheck1').value) {
                document.getElementById('errorDiv').innerHTML = 'You have Empty fields';
            } else {

                document.getElementById('errorDiv').innerHTML = '<img src="../images/spiner.gif" height="30px"><br>';

                setTimeout(() => {

                    if (sessionStorage.getItem('user') == null || sessionStorage.getItem('user') == undefined) {

                        //document.getElementById('rentDurationDiv').style.display = 'block';
                        document.getElementById('duration').value = " ";
                        document.getElementById('errorDiv').innerHTML = '<span style="color: red">Sorry, we cannot process your order at this time<br>System is currently under maintenance.<br></span>';

                    } else {

                        //document.getElementById('rentDurationDiv').style.display = 'block';
                        document.getElementById('duration').value = " ";
                        document.getElementById('errorDiv').innerHTML = '<span style="color: red">Sorry, we cannot process your order at this time<br>System is currently under maintenance.<br></span>';

                        /* setTimeout(() => {
                            window.location.replace("../orders/");
                        }, 3000); */

                    }
                }, 3000);

            }

        });

    });

    electricBikeBuy.addEventListener('click', (e) => {

        e.preventDefault();

        document.getElementById("purchaserModalElectBike").style.display = "block";

        document.getElementById('paymentPurchaseBike').addEventListener('change', function () {

            if (this.value === '5 months') {

                document.getElementById('pricerMainBike').innerHTML = '<br>GHS ' + 20000 * Number(document.getElementById('rentQuantityPurchaseBike').value);
                document.getElementById('pricerMonthlyBike').innerHTML = '<br>GHS ' + 4000 * Number(document.getElementById('rentQuantityPurchaseBike').value);

                //document.getElementById('TCCheckBike').href = '../agreements/';
                //window.sessionStorage.setItem('purchaseType', 'EV460BuyHirePurchase');

            } else if (this.value === '10 months') {

                document.getElementById('pricerMainBike').innerHTML = '<br>GHS ' + 22000 * Number(document.getElementById('rentQuantityPurchaseBike').value);
                document.getElementById('pricerMonthlyBike').innerHTML = '<br>GHS ' + 2200 * Number(document.getElementById('rentQuantityPurchaseBike').value);

                //document.getElementById('TCCheckBike').href = '../agreements/';
                //window.sessionStorage.setItem('purchaseType', 'EV460BuyHirePurchase');

            } else {

                document.getElementById('pricerMainBike').innerHTML = '<br>GHS ' + 18000 * Number(document.getElementById('rentQuantityPurchaseBike').value);
                document.getElementById('pricerMonthlyBike').innerHTML = 'N / A';

            }

        });

        document.getElementById('rentQuantityPurchaseBike').addEventListener('input', function () {

            if (document.getElementById('paymentPurchaseBike').value === '5 months') {

                document.getElementById('pricerMainBike').innerHTML = '<br>GHS ' + 20000 * Number(document.getElementById('rentQuantityPurchaseBike').value);
                document.getElementById('pricerMonthlyBike').innerHTML = '<br>GHS ' + 4000 * Number(document.getElementById('rentQuantityPurchaseBike').value);

            } else if (document.getElementById('paymentPurchaseBike').value === '10 months') {

                document.getElementById('pricerMainBike').innerHTML = '<br>GHS ' + 22000 * Number(document.getElementById('rentQuantityPurchaseBike').value);
                document.getElementById('pricerMonthlyBike').innerHTML = '<br>GHS ' + 2200 * Number(document.getElementById('rentQuantityPurchaseBike').value);

            } else {

                document.getElementById('pricerMainBike').innerHTML = '<br>GHS ' + 18000 * Number(document.getElementById('rentQuantityPurchaseBike').value);
                document.getElementById('pricerMonthlyBike').innerHTML = 'N / A';

            }

        });

        document.getElementById('purchaseFormBike').addEventListener('submit', (e) => {

            e.preventDefault();

            document.getElementById('errorDivPurchaseBike').innerHTML = '<img src="../images/spiner.gif" height="30px"><br>';
            let mimer = document.getElementById('paymentPurchaseBike');

            if (mimer === '5 months') {

                let cost = 20000 * Number(document.getElementById('rentQuantityPurchaseBike').value);

                function purchaser() {

                    let vehicleID = 'Bike ID goes here';
                    let type = 'Purchase';
                    let is_Active = false;
                    let paymentPlan = document.getElementById('paymentPurchaseBike').value;
                    let quantity = document.getElementById('rentQuantityPurchaseBike').value;

                    document.getElementById('continuePurchaseBtnBike').disabled = true;

                    $('#parentErrorDivPurchaseBike').slideDown('fast', function () {
                        document.getElementById('errorDivPurchaseBike').innerHTML = "<span style='font-size: 20px;'>You must login to complete your Order.<br>Please wait while we redirect you to the Login page...<br><img src='../images/spiner.gif' height='30px'><br></span>";
                    });

                    window.sessionStorage.setItem('vehicleID', vehicleID);
                    window.sessionStorage.setItem('type', type);
                    window.sessionStorage.setItem('is_Active', is_Active);
                    window.sessionStorage.setItem('quantity', quantity);
                    window.sessionStorage.setItem('cost', cost);
                    window.sessionStorage.setItem('payment', paymentPlan);

                    setTimeout(() => {
                        window.location.replace("../login");
                    }, 3000);

                }

                function purchaserAlt() {

                    let vehicleID = 'Bike ID goes here';
                    let type = 'Purchase';
                    let is_Active = false;
                    let paymentPlan = document.getElementById('paymentPurchaseBike').value;
                    let quantity = document.getElementById('rentQuantityPurchaseBike').value;

                    document.getElementById('continuePurchaseBtnBike').disabled = true;

                    $('#parentErrorDivPurchaseBike').slideDown('fast', function () {
                        document.getElementById('errorDivPurchaseBike').innerHTML = "<span style='font-size: 20px;'>Please wait while we redirect you...<br><img src='../images/spiner.gif' height='30px'><br></span>";
                    });

                    window.sessionStorage.setItem('vehicleID', vehicleID);
                    window.sessionStorage.setItem('type', type);
                    window.sessionStorage.setItem('is_Active', is_Active);
                    window.sessionStorage.setItem('quantity', quantity);
                    window.sessionStorage.setItem('cost', cost);
                    window.sessionStorage.setItem('payment', paymentPlan);

                }
            } else if (mimer === '10 months') {

                let cost = 22000 * Number(document.getElementById('rentQuantityPurchaseBike').value);

                function purchaser() {

                    let vehicleID = 'Bike ID goes here';
                    let type = 'Purchase';
                    let is_Active = false;
                    let paymentPlan = document.getElementById('paymentPurchaseBike').value;
                    let quantity = document.getElementById('rentQuantityPurchaseBike').value;

                    document.getElementById('continuePurchaseBtnBike').disabled = true;

                    $('#parentErrorDivPurchaseBike').slideDown('fast', function () {
                        document.getElementById('errorDivPurchaseBike').innerHTML = "<span style='font-size: 20px;'>You must login to complete your Order.<br>Please wait while we redirect you to the Login page...<br><img src='../images/spiner.gif' height='30px'><br></span>";
                    });

                    window.sessionStorage.setItem('vehicleID', vehicleID);
                    window.sessionStorage.setItem('type', type);
                    window.sessionStorage.setItem('is_Active', is_Active);
                    window.sessionStorage.setItem('quantity', quantity);
                    window.sessionStorage.setItem('cost', cost);
                    window.sessionStorage.setItem('payment', paymentPlan);

                    setTimeout(() => {
                        window.location.replace("../login");
                    }, 3000);

                }

                function purchaserAlt() {

                    let vehicleID = 'Bike ID goes here';
                    let type = 'Purchase';
                    let is_Active = false;
                    let paymentPlan = document.getElementById('paymentPurchaseBike').value;
                    let quantity = document.getElementById('rentQuantityPurchaseBike').value;

                    document.getElementById('continuePurchaseBtnBike').disabled = true;

                    $('#parentErrorDivPurchaseBike').slideDown('fast', function () {
                        document.getElementById('errorDivPurchaseBike').innerHTML = "<span style='font-size: 20px;'>Please wait while we redirect you...<br><img src='../images/spiner.gif' height='30px'><br></span>";
                    });

                    window.sessionStorage.setItem('vehicleID', vehicleID);
                    window.sessionStorage.setItem('type', type);
                    window.sessionStorage.setItem('is_Active', is_Active);
                    window.sessionStorage.setItem('quantity', quantity);
                    window.sessionStorage.setItem('cost', cost);
                    window.sessionStorage.setItem('payment', paymentPlan);

                }

            } else {
                let cost = 18000 * Number(document.getElementById('rentQuantityPurchaseBike').value);

                function purchaser() {

                    let vehicleID = 'Bike ID goes here';
                    let type = 'Purchase';
                    let is_Active = false;
                    let paymentPlan = document.getElementById('paymentPurchaseBike').value;
                    let quantity = document.getElementById('rentQuantityPurchaseBike').value;

                    document.getElementById('continuePurchaseBtnBike').disabled = true;

                    $('#parentErrorDivPurchaseBike').slideDown('fast', function () {
                        document.getElementById('errorDivPurchaseBike').innerHTML = "<span style='font-size: 20px;'>You must login to complete your Order.<br>Please wait while we redirect you to the Login page...<br><img src='../images/spiner.gif' height='30px'><br></span>";
                    });

                    window.sessionStorage.setItem('vehicleID', vehicleID);
                    window.sessionStorage.setItem('type', type);
                    window.sessionStorage.setItem('is_Active', is_Active);
                    window.sessionStorage.setItem('quantity', quantity);
                    window.sessionStorage.setItem('cost', cost);
                    window.sessionStorage.setItem('payment', paymentPlan);

                    setTimeout(() => {
                        window.location.replace("../login");
                    }, 3000);

                }

                function purchaserAlt() {

                    let vehicleID = 'Bike ID goes here';
                    let type = 'Purchase';
                    let is_Active = false;
                    let paymentPlan = document.getElementById('paymentPurchaseBike').value;
                    let quantity = document.getElementById('rentQuantityPurchaseBike').value;

                    document.getElementById('continuePurchaseBtnBike').disabled = true;

                    $('#parentErrorDivPurchaseBike').slideDown('fast', function () {
                        document.getElementById('errorDivPurchaseBike').innerHTML = "<span style='font-size: 20px;'>Please wait while we redirect you...<br><img src='../images/spiner.gif' height='30px'><br></span>";
                    });

                    window.sessionStorage.setItem('vehicleID', vehicleID);
                    window.sessionStorage.setItem('type', type);
                    window.sessionStorage.setItem('is_Active', is_Active);
                    window.sessionStorage.setItem('quantity', quantity);
                    window.sessionStorage.setItem('cost', cost);
                    window.sessionStorage.setItem('payment', paymentPlan);

                }
            }

            setTimeout(() => {

                if (sessionStorage.getItem('user') == null || sessionStorage.getItem('user') == undefined) {

                    //purchaser();
                    document.getElementById('errorDivPurchaseBike').innerHTML = '<span style="color: red">Sorry, we cannot process your order at this time<br>System is currently under maintenance.<br></span>';

                } else {

                    //purchaserAlt();
                    document.getElementById('errorDivPurchaseBike').innerHTML = '<span style="color: red">Sorry, we cannot process your order at this time<br>System is currently under maintenance.<br></span>';

                    /* setTimeout(() => {
                        window.location.replace("../orders/");
                    }, 3000); */

                }
            }, 3000);

        });

    });


})();