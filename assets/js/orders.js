(function () {

    document.getElementById('displayUserName').innerHTML = '<img src="../assets/images/spiner.gif" height="25px">';
    document.getElementById('displayUserPhone').innerHTML = '<img src="../assets/images/spiner.gif" height="25px">';

    if (!sessionStorage.getItem('user')) {

        document.getElementById('logoutBtn').innerHTML = '<span class="login-span">Login</span>';

        document.getElementById('orderThrough').innerHTML = '<strong style="font-size: 20px;">Logging you in...</strong> <img src="../assets/images/spiner.gif" height="30px">';
        setTimeout(() => {
            window.location.replace("../login");
        }, 4000);

    } else {

        document.getElementById('logoutBtn').innerHTML = '<span class="logout-span">Log out</span>';

        function indexer() {

            function userInfo() {

                document.getElementById('userName').innerHTML = xhr.response.name;
                document.getElementById('displayUserName').innerHTML = xhr.response.name;

                document.getElementById('userEmail').innerHTML = xhr.response.email;
                document.getElementById('displayUserEmail').innerHTML = xhr.response.email;

                document.getElementById('userPhone').innerHTML = xhr.response.phone_number;
                document.getElementById('displayUserPhone').innerHTML = xhr.response.phone_number;

                window.sessionStorage.setItem("clientEmail", xhr.response.email);

            }

            let xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.responseType = 'json';
            xhr.open("GET", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/client", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            xhr.onreadystatechange = function () {

                if (xhr.readyState === 4 && xhr.status === 200) {

                    let userID = xhr.response.id;
                    window.sessionStorage.setItem('userID', userID);

                    userInfo();

                }

                if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                    document.getElementById('orderThrough').innerHTML =
                        '<div class="alert alert-danger alert-dismissible fade show">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                        '</div>';

                }

            };

            xhr.onerror = function () {

                document.getElementById('orderThrough').innerHTML =
                    '<div class="alert alert-danger alert-dismissible fade show">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                    '</div>';

            };

            xhr.send();

        }

        document.getElementById('cards').innerHTML = '<div><div class="centerMan"><span>Fetching your orders... <img src="../assets/images/spiner.gif" height="30px"></span></div></div>';

        let token = sessionStorage.getItem('user');
        indexer();

        function worker() {

            if (!xhr.response.orders || xhr.response.orders.length === 0) {
                document.getElementById('cards').innerHTML = '<strong style="font-size: 20px">You have no Orders yet</strong>';
            }

            for (i = 0; i < xhr.response.orders.length; i++) {

                let orderID = xhr.response.orders[i].id;
                let isActive = xhr.response.orders[i].is_active;
                let vehicleIDStatic = xhr.response.orders[i].vehicle_id;
                let orderingType = xhr.response.orders[i].type;
                let cost = xhr.response.orders[i].cost;

                let quantity = xhr.response.orders[i].quantity;
                let daily_mileageRent = xhr.response.orders[i].daily_mileage;
                let driver_typeRent = xhr.response.orders[i].driver_type;
                let durationRent = xhr.response.orders[i].duration;
                let commuteRouteRent = xhr.response.orders[i].commute_route;
                let durationBuy = xhr.response.orders[i].payment_plan;
                let date_created = xhr.response.orders[i].date_created;
                let date_updated = xhr.response.orders[i].date_updated;

                let cardDiv = document.createElement('div');
                cardDiv.classList = ('card orders-card');
                cardDiv.setAttribute('data-id', orderID);

                let cardBody = document.createElement('div');
                cardBody.classList = ('card-body');

                let cardHeading = document.createElement('h3');
                cardHeading.classList = ('card-title');
                let headingSpan = document.createElement('span');
                cardHeading.innerHTML = orderingType + ' ';
                cardHeading.appendChild(headingSpan);

                let idSmall = document.createElement('small');

                if (xhr.response.orders[i].vehicle_id === '70f86799-39ad-4f89-97eb-982f9fcd2071-renault') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/renault-frontal-small.png" height="50px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">Renault K-Ze</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '01550021-5be7-445f-a001-ae801e3d0c8f') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/FAW.png" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">EV460 SUV</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '1adbe9c0-0e4a-4a8a-ab4c-50ad57254790') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/BYD.png" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">BYD B6 Sedan</small>';

                }

                if (xhr.response.orders[i].vehicle_id === 'd39e04fc-d41f-46e4-b876-de5127a04746') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/Chery-1.png" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">Cherry 3XE SUV</small>';

                }

                if (xhr.response.orders[i].vehicle_id === 'd8d37fdb-fefa-4bdc-970f-848953bcc5d7') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/ER30-small.png" height="40px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">ER30 Coupe/Hatch Back</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '4492bf1d-9e8c-4a6d-969b-5c8af0e10132') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/LEfan-36-Sedan-Side.jpg" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">Lefan 650ev</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '70f86799-39ad-4f89-97eb-982f9fcd2071') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/sedan.png" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">iEV7L Sedan</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/leopaard-small.png" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">Leopaard CS9</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '01550021-5be7-445f-a001-ae801e3d0c8f-changan') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/changan-small.png" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">Changan Oshan</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '01550021-5be7-445f-a001-ae801e3d0c8f-tour') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/tour-small.png" height="30px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">Link Tour K-100</small>';

                }

                if (xhr.response.orders[i].vehicle_id === '01550021-5be7-445f-a001-ae801e3d0c8f-xpeng') {

                    headingSpan.innerHTML = '<img src="../assets/images/img/xpeng-small.png" height="40px">';
                    idSmall.innerHTML = 'ORDER ID: ' + orderID + '<br><small style="font-size: 16px">Xpeng G3 520i Smart</small>';

                }

                let cardHeaderSpacer = document.createElement('div');
                cardHeaderSpacer.innerHTML = '&nbsp';

                let firstDivRow = document.createElement('div');
                firstDivRow.classList = ('row justify-content-between order-row');

                let colDiv1 = document.createElement('div');
                colDiv1.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');
                colDiv1.innerHTML = 'Order Status: ' + '<h5>' + xhr.response.orders[i].status + '</h5>';

                let colDiv2 = document.createElement('div');
                colDiv2.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');
                colDiv2.innerHTML = 'Deposits' + '<h5>' + xhr.response.orders[i].amount_paid + '</h5>';

                let colDiv3 = document.createElement('div');
                colDiv3.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');
                colDiv3.innerHTML = 'Balance:' + '<h5>' + ((xhr.response.orders[i].cost) - (xhr.response.orders[i].amount_paid)) + '</h5>';

                let colDiv4 = document.createElement('div');
                colDiv4.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');

                let colDivSpacer = document.createElement('div');
                colDivSpacer.innerHTML = '&nbsp';

                let secondDivRow = document.createElement('div');
                secondDivRow.classList = ('row justify-content-around');

                let colDiv5 = document.createElement('div');
                colDiv5.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');
                let confirmOrderBtn = document.createElement('button');
                confirmOrderBtn.classList = ('btn btn-primary logBtnClass');

                let colDiv6 = document.createElement('div');
                colDiv6.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');
                let depositOrderBtn = document.createElement('a');
                depositOrderBtn.classList = ('btn btn-info logBtnClass');
                depositOrderBtn.textContent = 'Deposit';

                let colDiv7 = document.createElement('div');
                colDiv7.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');
                let verifyPaymentBtn = document.createElement('button');
                verifyPaymentBtn.classList = ('btn btn-primary logBtnClass');
                verifyPaymentBtn.innerHTML = 'Verify Payment';

                let colDiv8 = document.createElement('div');
                colDiv8.classList = ('col-* col-xs-* col-sm-* col-md-* col-lg-*');
                let editOrderBtn = document.createElement('button');
                editOrderBtn.classList = ('btn btn-primary logBtnClass');
                editOrderBtn.innerHTML = 'Edit';

                let messagerDiv = document.createElement('div');
                messagerDiv.setAttribute('align', 'center');

                let lastSeparator = document.createElement('div');
                lastSeparator.innerHTML = '&nbsp';

                firstDivRow.appendChild(colDiv1);
                firstDivRow.appendChild(colDiv2);
                firstDivRow.appendChild(colDiv3);
                firstDivRow.appendChild(colDiv4);

                colDiv5.appendChild(confirmOrderBtn);
                colDiv6.appendChild(depositOrderBtn);
                colDiv7.appendChild(verifyPaymentBtn);
                colDiv8.appendChild(editOrderBtn);

                let depositOrderBtnSep = document.createElement('div');
                depositOrderBtnSep.innerHTML = '&nbsp';
                colDiv6.appendChild(depositOrderBtnSep);

                secondDivRow.appendChild(colDiv5);
                secondDivRow.appendChild(colDiv6);
                secondDivRow.appendChild(colDiv7);
                secondDivRow.appendChild(colDiv8);

                cardBody.appendChild(cardHeading);
                cardBody.appendChild(idSmall);
                cardBody.appendChild(cardHeaderSpacer);
                cardBody.appendChild(firstDivRow);
                cardBody.appendChild(colDivSpacer);
                cardBody.appendChild(secondDivRow);
                cardBody.appendChild(messagerDiv);

                cardDiv.appendChild(cardBody);

                document.getElementById('cards').append(cardDiv, lastSeparator);

                if (!xhr.response.orders[i].delivery_date) {

                    messagerDiv.innerHTML = 'A delivery date has not been set for this order yet. Once it is set, you will be able to confirm your order and make deposits but cannot edit your order.<br><span style="color: red;">Please Note that Delivery dates are set by Solar Taxi Ghana and may take while.</span>';

                    if (!xhr.response.orders[i].testing_date) {
                        colDiv4.innerHTML = 'Test Drive Date: <h5>Date not Set Yet</h5>';
                    } else {
                        colDiv4.innerHTML = 'Test Drive Date: <h5>' + xhr.response.orders[i].testing_date + '</h5>';
                    }

                    confirmOrderBtn.classList = ('btn btn-danger logBtnClass');
                    confirmOrderBtn.innerHTML = 'Cancel Order';

                    confirmOrderBtn.addEventListener('click', (e) => {

                        e.preventDefault();

                        if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">EV460 SUV</span>';
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/FAW.png" height="50px">';

                        }

                        if (vehicleIDStatic === '1adbe9c0-0e4a-4a8a-ab4c-50ad57254790') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/BYD.png" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">BYD B6 Sedan</span>';

                        }

                        if (vehicleIDStatic === 'd39e04fc-d41f-46e4-b876-de5127a04746') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/Chery-1.png" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Cherry 3XE SUV</span>';

                        }

                        if (vehicleIDStatic === 'd8d37fdb-fefa-4bdc-970f-848953bcc5d7') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/ER30-1.jpg" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">ER30 Coupe/Hatch Back</span>';

                        }

                        if (vehicleIDStatic === '4492bf1d-9e8c-4a6d-969b-5c8af0e10132') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/LEfan-36-Sedan-Side.jpg" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Lefan 650ev</span>';

                        }

                        if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/sedan.png" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">iEV7L Sedan</span>';

                        }

                        if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/leopaard-small.png" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Leopaard CS9</span>';

                        }

                        if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-changan') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/changan-small.png" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Changan Oshan</span>';

                        }

                        if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-tour') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/tour-small.png" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Link Tour K-100</span>';

                        }

                        if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-xpeng') {

                            document.getElementById('cancelOrderType').innerHTML = orderingType;
                            document.getElementById('cancelOrderDetails').innerHTML = '<img src="../assets/images/img/xpeng-small.png" height="50px">';
                            document.getElementById('cancelOrderID').innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Xpeng G3 520i Smart</span>';

                        }

                        $('#confirmCancel').modal('show');

                        document.getElementById('cancelBtnModal').addEventListener('click', (e) => {

                            e.preventDefault();

                            document.getElementById('cancelBtnModal').style.pointerEvents = "none";
                            document.getElementById('cancelDivInModal').innerHTML = '<img src="../assets/images/spiner.gif" height="30px">';

                            let delUri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders/";
                            let delUrl = delUri + orderID;

                            let xhr = new XMLHttpRequest();
                            xhr.overrideMimeType("application/json");
                            xhr.responseType = 'json';
                            xhr.open("DELETE", delUrl, true);
                            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                            xhr.onreadystatechange = function () {

                                if (xhr.readyState === 4 && xhr.status === 204) {

                                    $('#cancelMessageDivModal').slideDown('fast', function () {
                                        document.getElementById('cancelDivInModal').innerHTML =
                                            '<div class="alert alert-success alert-dismissible fade show">' +
                                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your Order ' + orderID + ' has been cancelled successfully, please wait... <img src="../assets/images/spiner.gif" height="30px">' +
                                            '</div>';
                                    });

                                    setTimeout(() => {
                                        window.location.replace("./");
                                    }, 4000);

                                }

                                if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                                    document.getElementById('cancelBtnModal').style.pointerEvents = "auto";
                                    document.getElementById('cancelDivInModal').innerHTML =
                                        '<div class="alert alert-danger alert-dismissible fade show">' +
                                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> we couldn\'t cancel your due to an error: ' + xhr.response.error +
                                        '</div>';

                                }

                            };

                            xhr.onerror = function () {

                                document.getElementById('cancelBtnModal').style.pointerEvents = "auto";
                                document.getElementById('cancelDivInModal').innerHTML =
                                    '<div class="alert alert-danger alert-dismissible fade show">' +
                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                                    '</div>';


                            };

                            xhr.send();

                        });

                    });

                    if (xhr.response.orders[i].cost == xhr.response.orders[i].amount_paid) {

                        depositOrderBtn.innerHTML = 'Paid <i class="fa fa-check-circle-o"></i>';
                        colDiv3.innerHTML = 'Balance: <h5>Amount Settled</h5>';
                        depositOrderBtn.style.pointerEvents = "none";

                    } else {

                        depositOrderBtn.innerHTML = 'Deposit';
                        depositOrderBtn.style.pointerEvents = "none";

                    }

                    verifyPaymentBtn.disabled = true;

                    editOrderBtn.addEventListener('click', (e) => {

                        e.preventDefault();

                        function monthThere(basePrice) {

                            let deposit = Number((40 / 100) * basePrice);
                            let startNet = Number(basePrice - deposit);

                            let cost = startNet / 3;
                            let overall = startNet + deposit;

                            return [deposit, cost, overall];

                        }

                        function monthSix(basePrice) {

                            let deposit = Number((40 / 100) * basePrice);
                            let startNet = Number(basePrice - deposit);

                            let overall = Math.ceil(Number((PMTCalc(startNet, 6, 0.09) * 6) + deposit));
                            return [deposit, PMTCalc(startNet, 6, 0.09), overall];

                        }

                        function year(basePrice) {

                            let deposit = Number((40 / 100) * basePrice);
                            let startNet = Number(basePrice - deposit);

                            let overall = Math.ceil(Number((PMTCalc(startNet, 12, 0.18) * 12) + deposit));
                            return [deposit, PMTCalc(startNet, 12, 0.18), overall];

                        }

                        if (isActive == true) {
                            $('#nullEditOrderModal').modal('show');
                        } else {

                            function roundPrice(rnum, rlength) {

                                let newnumber = Math.ceil(rnum * Math.pow(10, rlength - 1)) / Math.pow(10, rlength - 1);
                                var toTenths = newnumber.toFixed(rlength);
                                return toTenths;

                            }

                            let corporatePricingObj = {
                                coupe: 1560,
                                sedan: 2080,
                                SUV: 2600
                            };

                            let personalStandardPricingArray = {
                                coupe: 1200,
                                sedan: 1600,
                                SUV: 2000
                            };

                            let personalPremiumPricingArray = {
                                coupe: 1320,
                                sedan: 1760,
                                SUV: 2200
                            };

                            let personalExecutivePricingArray = {
                                coupe: 1440,
                                sedan: 1920,
                                SUV: 2400
                            };

                            function primerInputValues() {

                                document.getElementById('rentQuantity').value = quantity;
                                document.getElementById('dailyMileage').value = daily_mileageRent;
                                document.getElementById('driverType').value = driver_typeRent;
                                document.getElementById('duration').value = durationRent;
                                document.getElementById('commuteRoute').value = commuteRouteRent;
                                document.getElementById('vehicleIDRent').innerHTML = orderID;

                                if (durationRent === '10 months' || durationRent === '11 months' || durationRent === '12 months') {

                                    let prePackagePrice = cost / Number((durationRent).slice(0, 2));
                                    if (prePackagePrice === corporatePricingObj.SUV || prePackagePrice === corporatePricingObj.sedan || prePackagePrice === corporatePricingObj.coupe) {
                                        document.getElementById('rentalPackage').value = "Corporate Package";
                                    }

                                    if (prePackagePrice === personalStandardPricingArray.SUV || prePackagePrice === personalStandardPricingArray.sedan || prePackagePrice === personalStandardPricingArray.coupe) {
                                        document.getElementById('rentalPackage').value = "Standard Individual Package";
                                    }

                                    if (prePackagePrice === personalPremiumPricingArray.SUV || prePackagePrice === personalPremiumPricingArray.sedan || prePackagePrice === personalPremiumPricingArray.coupe) {
                                        document.getElementById('rentalPackage').value = "Premium Individual Package";
                                    }

                                    if (prePackagePrice === personalExecutivePricingArray.SUV || prePackagePrice === personalExecutivePricingArray.sedan || prePackagePrice === personalExecutivePricingArray.coupe) {
                                        document.getElementById('rentalPackage').value = "Executive Individual Package";
                                    }

                                } else {

                                    let prePackagePrice = cost / Number((durationRent).slice(0, 1));
                                    if (prePackagePrice === corporatePricingObj.SUV || prePackagePrice === corporatePricingObj.sedan || prePackagePrice === corporatePricingObj.coupe) {
                                        document.getElementById('rentalPackage').value = "Corporate Package";
                                    }

                                    if (prePackagePrice === personalStandardPricingArray.SUV || prePackagePrice === personalStandardPricingArray.sedan || prePackagePrice === personalStandardPricingArray.coupe) {
                                        document.getElementById('rentalPackage').value = "Standard Individual Package";
                                    }

                                    if (prePackagePrice === personalPremiumPricingArray.SUV || prePackagePrice === personalPremiumPricingArray.sedan || prePackagePrice === personalPremiumPricingArray.coupe) {
                                        document.getElementById('rentalPackage').value = "Premium Individual Package";
                                    }

                                    if (prePackagePrice === personalExecutivePricingArray.SUV || prePackagePrice === personalExecutivePricingArray.sedan || prePackagePrice === personalExecutivePricingArray.coupe) {
                                        document.getElementById('rentalPackage').value = "Executive Individual Package";
                                    }
                                }

                            }

                            if (orderingType === "Rental") {

                                function handleInputChanges(basePrice) {

                                    if (!document.getElementById('rentQuantity').value) {
                                        document.getElementById('rentFeeDiv').innerHTML = '<div class="font-red bold">The QUANTITY field is Empty, Real-time calculations cannot be made.</div>';
                                    } else {

                                        if (this.value === '10 months' || this.value === '11 months' || this.value === '12 months') {

                                            let costShower = Number((document.getElementById('duration').value).slice(0, 2)) * basePrice * document.getElementById('rentQuantity').value;
                                            document.getElementById('rentFeeDiv').innerHTML = '<div><small class="bold">Rent Fee based on your options:</small></div><div class="bold centerMan">' + 'GHS ' + costShower + '</div><div>&nbsp;</div>';
                                            window.sessionStorage.setItem("editRentalCost", costShower);

                                        } else {

                                            let costShower = Number((document.getElementById('duration').value).slice(0, 1)) * basePrice * document.getElementById('rentQuantity').value;
                                            document.getElementById('rentFeeDiv').innerHTML = '<div><small class="bold">Rent Fee based on your options:</small></div><div class="bold centerMan">' + 'GHS ' + costShower + '</div><div>&nbsp;</div>';
                                            window.sessionStorage.setItem("editRentalCost", costShower);

                                        }

                                    }

                                }

                                if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071' || vehicleIDStatic === '4492bf1d-9e8c-4a6d-969b-5c8af0e10132' || vehicleIDStatic === '1adbe9c0-0e4a-4a8a-ab4c-50ad57254790') {

                                    primerInputValues();
                                    document.getElementById('rentFeeDiv').innerHTML = '<div class="bold"><small>Rent Fee based on your options:</small></div><div class="bold">GHS ' + cost + '.00</div>';
                                    $('#editOrderModalRent').modal('show');

                                    function effectLiveChanges(rentalPackageType) {

                                        if (rentalPackageType === "Corporate Package") {

                                            let basePrice = corporatePricingObj.sedan;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Standard Individual Package") {

                                            let basePrice = personalStandardPricingArray.sedan;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Premium Individual Package") {

                                            let basePrice = personalPremiumPricingArray.sedan;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Executive Individual Package") {

                                            let basePrice = personalExecutivePricingArray.sedan;
                                            handleInputChanges(basePrice);

                                        }

                                    }

                                    document.getElementById('duration').addEventListener('change', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentQuantity').addEventListener('input', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentalPackage').addEventListener('change', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentalEditForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDiv').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveRentEdit').disabled = true;

                                        let quantity = parseInt(document.getElementById('rentQuantity').value);
                                        let daily_mileageRent = document.getElementById('dailyMileage').value;
                                        let driver_typeRent = document.getElementById('driverType').value;
                                        let durationRent = document.getElementById('duration').value;
                                        let commuteRouteRent = document.getElementById('commuteRoute').value;

                                        let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders/";
                                        let url = uri + orderID;

                                        let data = ({

                                            cost: sessionStorage.getItem("editRentalCost"),
                                            quantity: quantity,
                                            vehicle_id: vehicleIDStatic,
                                            type: orderingType,
                                            duration: durationRent,
                                            daily_mileage: daily_mileageRent,
                                            driver_type: driver_typeRent,
                                            commute_route: commuteRouteRent

                                        });

                                        let xhr = new XMLHttpRequest();
                                        xhr.overrideMimeType("application/json");
                                        xhr.responseType = 'json';
                                        xhr.open("PUT", url, true);
                                        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                                        xhr.onreadystatechange = function () {

                                            if (xhr.readyState === 4 && xhr.status === 204) {

                                                $('#parentErrorDiv').slideDown('fast', function () {
                                                    document.getElementById('errorDiv').innerHTML =
                                                        '<div class="alert alert-success alert-dismissible fade show">' +
                                                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your order has been modified successfully, please wait... <img src="../assets/assets/images/spiner.gif" height="30px">' +
                                                        '</div>';
                                                });

                                                setTimeout(() => {
                                                    window.location.reload();
                                                }, 4000);

                                            }

                                            if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                                                document.getElementById('errorDiv').innerHTML =
                                                    '<div class="alert alert-danger alert-dismissible fade show">' +
                                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                                                    '</div>';

                                            }

                                        };

                                        xhr.onerror = function () {

                                            document.getElementById('saveRentEdit').disabled = false;
                                            document.getElementById('errorDiv').innerHTML =
                                                '<div class="alert alert-danger alert-dismissible fade show">' +
                                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                                                '</div>';

                                        };

                                        xhr.send(JSON.stringify(data));

                                    });

                                }

                                if (vehicleIDStatic === 'd8d37fdb-fefa-4bdc-970f-848953bcc5d7' || vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071-renault' || vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-xpeng') {

                                    primerInputValues();
                                    document.getElementById('rentFeeDiv').innerHTML = '<div class="bold"><small>Rent Fee based on your options:</small></div><div class="bold">GHS ' + cost + '.00</div>';
                                    $('#editOrderModalRent').modal('show');

                                    function effectLiveChanges(rentalPackageType) {

                                        if (rentalPackageType === "Corporate Package") {

                                            let basePrice = corporatePricingObj.coupe;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Standard Individual Package") {

                                            let basePrice = personalStandardPricingArray.coupe;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Premium Individual Package") {

                                            let basePrice = personalPremiumPricingArray.coupe;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Executive Individual Package") {

                                            let basePrice = personalExecutivePricingArray.coupe;
                                            handleInputChanges(basePrice);

                                        }

                                    }

                                    document.getElementById('duration').addEventListener('change', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentQuantity').addEventListener('input', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentalPackage').addEventListener('change', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentalEditForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDiv').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveRentEdit').disabled = true;

                                        let quantity = parseInt(document.getElementById('rentQuantity').value);
                                        let daily_mileageRent = document.getElementById('dailyMileage').value;
                                        let driver_typeRent = document.getElementById('driverType').value;
                                        let durationRent = document.getElementById('duration').value;
                                        let commuteRouteRent = document.getElementById('commuteRoute').value;

                                        let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders/";
                                        let url = uri + orderID;

                                        let data = ({

                                            cost: sessionStorage.getItem("editRentalCost"),
                                            quantity: quantity,
                                            vehicle_id: vehicleIDStatic,
                                            type: orderingType,
                                            duration: durationRent,
                                            daily_mileage: daily_mileageRent,
                                            driver_type: driver_typeRent,
                                            commute_route: commuteRouteRent

                                        });

                                        let xhr = new XMLHttpRequest();
                                        xhr.overrideMimeType("application/json");
                                        xhr.responseType = 'json';
                                        xhr.open("PUT", url, true);
                                        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                                        xhr.onreadystatechange = function () {

                                            if (xhr.readyState === 4 && xhr.status === 204) {

                                                $('#parentErrorDiv').slideDown('fast', function () {
                                                    document.getElementById('errorDiv').innerHTML =
                                                        '<div class="alert alert-success alert-dismissible fade show">' +
                                                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your order has been modified successfully, please wait... <img src="../assets/assets/images/spiner.gif" height="30px">' +
                                                        '</div>';
                                                });

                                                setTimeout(() => {
                                                    window.location.reload();
                                                }, 4000);

                                            }

                                            if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                                                document.getElementById('errorDiv').innerHTML =
                                                    '<div class="alert alert-danger alert-dismissible fade show">' +
                                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                                                    '</div>';

                                            }

                                        };

                                        xhr.onerror = function () {

                                            document.getElementById('saveRentEdit').disabled = false;
                                            document.getElementById('errorDiv').innerHTML =
                                                '<div class="alert alert-danger alert-dismissible fade show">' +
                                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                                                '</div>';

                                        };

                                        xhr.send(JSON.stringify(data));

                                    });

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f' || vehicleIDStatic === 'd39e04fc-d41f-46e4-b876-de5127a04746' || vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-tour' || vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-changan' || vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard') {

                                    primerInputValues();
                                    document.getElementById('rentFeeDiv').innerHTML = '<div class="bold"><small>Rent Fee based on your options:</small></div><div class="bold">GHS ' + cost + '.00</div>';
                                    $('#editOrderModalRent').modal('show');

                                    function effectLiveChanges(rentalPackageType) {

                                        if (rentalPackageType === "Corporate Package") {

                                            let basePrice = corporatePricingObj.SUV;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Standard Individual Package") {

                                            let basePrice = personalStandardPricingArray.SUV;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Premium Individual Package") {

                                            let basePrice = personalPremiumPricingArray.SUV;
                                            handleInputChanges(basePrice);

                                        }

                                        if (rentalPackageType === "Executive Individual Package") {

                                            let basePrice = personalExecutivePricingArray.SUV;
                                            handleInputChanges(basePrice);

                                        }

                                    }

                                    document.getElementById('duration').addEventListener('change', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentQuantity').addEventListener('input', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentalPackage').addEventListener('change', function () {

                                        let rentalPackageType = document.getElementById('rentalPackage').value;
                                        effectLiveChanges(rentalPackageType);

                                    });

                                    document.getElementById('rentalEditForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDiv').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveRentEdit').disabled = true;

                                        let quantity = parseInt(document.getElementById('rentQuantity').value);
                                        let daily_mileageRent = document.getElementById('dailyMileage').value;
                                        let driver_typeRent = document.getElementById('driverType').value;
                                        let durationRent = document.getElementById('duration').value;
                                        let commuteRouteRent = document.getElementById('commuteRoute').value;

                                        let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders/";
                                        let url = uri + orderID;

                                        let data = ({

                                            cost: sessionStorage.getItem("editRentalCost"),
                                            quantity: quantity,
                                            vehicle_id: vehicleIDStatic,
                                            type: orderingType,
                                            duration: durationRent,
                                            daily_mileage: daily_mileageRent,
                                            driver_type: driver_typeRent,
                                            commute_route: commuteRouteRent

                                        });

                                        let xhr = new XMLHttpRequest();
                                        xhr.overrideMimeType("application/json");
                                        xhr.responseType = 'json';
                                        xhr.open("PUT", url, true);
                                        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                                        xhr.onreadystatechange = function () {

                                            if (xhr.readyState === 4 && xhr.status === 204) {

                                                $('#parentErrorDiv').slideDown('fast', function () {
                                                    document.getElementById('errorDiv').innerHTML =
                                                        '<div class="alert alert-success alert-dismissible fade show">' +
                                                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your order has been modified successfully, please wait... <img src="../assets/assets/images/spiner.gif" height="30px">' +
                                                        '</div>';
                                                });

                                                setTimeout(() => {
                                                    window.location.reload();
                                                }, 4000);

                                            }

                                            if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                                                document.getElementById('errorDiv').innerHTML =
                                                    '<div class="alert alert-danger alert-dismissible fade show">' +
                                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                                                    '</div>';

                                            }

                                        };

                                        xhr.onerror = function () {

                                            document.getElementById('saveRentEdit').disabled = false;
                                            document.getElementById('errorDiv').innerHTML =
                                                '<div class="alert alert-danger alert-dismissible fade show">' +
                                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                                                '</div>';

                                        };

                                        xhr.send(JSON.stringify(data));

                                    });

                                }

                            } else {

                                if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071') {

                                    let basePrice = 100000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '4492bf1d-9e8c-4a6d-969b-5c8af0e10132') {

                                    let basePrice = 100000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '1adbe9c0-0e4a-4a8a-ab4c-50ad57254790') {

                                    let basePrice = 100000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === 'd8d37fdb-fefa-4bdc-970f-848953bcc5d7') {

                                    let basePrice = 80000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f') {

                                    let basePrice = 120000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === 'd39e04fc-d41f-46e4-b876-de5127a04746') {

                                    let basePrice = 150000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071-renault') {

                                    let basePrice = 130000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard') {

                                    let basePrice = 140000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-changan') {

                                    let basePrice = 160000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-tour') {

                                    let basePrice = 150000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-xpeng') {

                                    let basePrice = 290000;

                                    document.getElementById('buyQuantityPurchase').value = quantity;
                                    document.getElementById('vehicleIDBuy').innerHTML = orderID;
                                    document.getElementById('paymentPurchaseBuy').value = durationBuy;

                                    $('#editOrderModalBuy').modal('show');

                                    document.getElementById('purchaseForm').addEventListener('submit', (e) => {

                                        e.preventDefault();

                                        document.getElementById('errorDivPurchaseBuy').innerHTML = '<img src="../assets/images/spiner.gif" height="30px"><br><div>&nbsp;</div>';
                                        document.getElementById('saveBuyEdit').disabled = true;

                                        let quantityBuy = parseInt(document.getElementById('buyQuantityPurchase').value);
                                        let durationBuy = document.getElementById('paymentPurchaseBuy').value;

                                        let midCost = document.getElementById('paymentPurchaseBuy').value;
                                        if (midCost === '3 months') {

                                            let getValue = monthThere(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '6 months') {

                                            let getValue = monthSix(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === '1 year') {

                                            let getValue = year(basePrice);
                                            let cost = roundPrice(getValue[2], 1) * Number(document.getElementById('buyQuantityPurchase').value);

                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                        if (midCost === 'Outright') {

                                            let cost = basePrice * Number(document.getElementById('buyQuantityPurchase').value);
                                            afterCosterCalc(cost, quantityBuy, durationBuy);

                                        }

                                    });

                                }

                                function afterCosterCalc(cost, quantityBuy, durationBuy) {

                                    let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders/";
                                    let url = uri + orderID;

                                    let data = ({

                                        cost: cost,
                                        quantity: quantityBuy,
                                        vehicle_id: vehicleIDStatic,
                                        type: orderingType,
                                        payment_plan: durationBuy

                                    });

                                    let xhr = new XMLHttpRequest();
                                    xhr.overrideMimeType("application/json");
                                    xhr.responseType = 'json';
                                    xhr.open("PUT", url, true);
                                    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                                    xhr.onreadystatechange = function () {

                                        if (xhr.readyState === 4 && xhr.status === 204) {

                                            $('#parentErrorDivPurchaseBuy').slideDown('fast', function () {
                                                document.getElementById('errorDivPurchaseBuy').innerHTML =
                                                    '<div class="alert alert-success alert-dismissible fade show">' +
                                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your Order has been modified successfully, please wait... <img src="../assets/images/spiner.gif" height="30px">' +
                                                    '</div>';
                                            });

                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 4000);

                                        }

                                        if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                                            document.getElementById('errorDivPurchaseBuy').innerHTML =
                                                '<div class="alert alert-danger alert-dismissible fade show">' +
                                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                                                '</div>';

                                        }

                                    };

                                    xhr.onerror = function () {

                                        document.getElementById('errorDivPurchaseBuy').innerHTML =
                                            '<div class="alert alert-danger alert-dismissible fade show">' +
                                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                                            '</div>';

                                    };

                                    xhr.send(JSON.stringify(data));

                                }

                            }

                        }

                    });

                } else {

                    colDiv4.innerHTML = 'Delivery Date: <h5>' + xhr.response.orders[i].delivery_date + '</h5>';

                    if (isActive == true) {

                        confirmOrderBtn.innerHTML = 'Order Confirmed';
                        confirmOrderBtn.disabled = true;
                        editOrderBtn.disabled = true;

                        verifyPaymentBtn.addEventListener('click', (e) => {

                            e.preventDefault();

                            document.getElementById('verifyOrderID').innerHTML = orderID;

                            if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">EV460 SUV</span>';
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/FAW.png" height="50px">';

                            }

                            if (vehicleIDStatic === '1adbe9c0-0e4a-4a8a-ab4c-50ad57254790') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/BYD.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">BYD B6 Sedan</span>';

                            }

                            if (vehicleIDStatic === 'd39e04fc-d41f-46e4-b876-de5127a04746') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/Chery-1.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">Cherry 3XE SUV</span>';

                            }

                            if (vehicleIDStatic === 'd8d37fdb-fefa-4bdc-970f-848953bcc5d7') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/ER30-small.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">ER30 Coupe/Hatch Back</span>';

                            }

                            if (vehicleIDStatic === '4492bf1d-9e8c-4a6d-969b-5c8af0e10132') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/LEfan-36-Sedan-Side.jpg" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">Lefan 650ev</span>';

                            }

                            if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/sedan.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">iEV7L Sedan</span>';

                            }

                            if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071-renault') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/renault-frontal-small.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">Renault K-Ze</span>';

                            }

                            if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/leopaard-small.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">Leopaard CS9</span>';

                            }

                            if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-changan') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/changan-small.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">Changan Oshan</span>';

                            }

                            if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-tour') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/tour-small.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">Link Tour K-100</span>';

                            }

                            if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-xpeng') {

                                document.getElementById('verifyOrderType').innerHTML = orderingType;
                                document.getElementById('verifyOrderDetails').innerHTML = '<img src="../assets/images/img/xpeng-small.png" height="50px">';
                                document.getElementById('verifyCarName').innerHTML = '<span style="font-size: 18px">Xpeng G3 520i Smart</span>';

                            }

                            $('#paymentVerifyModal').modal('show');

                            document.getElementById('txrefForm').addEventListener('submit', (e) => {

                                e.preventDefault();

                                document.getElementById('verifyPaymentsBtn').disabled = true;
                                document.getElementById('messengerVerify').innerHTML = '<img src="../assets/images/spiner.gif" height="30px">';
                                let url = 'https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/transactions';

                                let data = ({

                                    transaction_reference: document.getElementById('txReffInput').value,
                                    order_id: orderID

                                });

                                let xhr = new XMLHttpRequest();
                                xhr.overrideMimeType("application/json");
                                xhr.responseType = 'json';
                                xhr.open("POST", url, true);
                                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                                xhr.onreadystatechange = function () {

                                    if (xhr.readyState === 4 && xhr.status === 200) {

                                        document.getElementById('messengerVerify').innerHTML =
                                            '<div class="alert alert-success alert-dismissible">' +
                                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your payment has been verified successfully, we\'re redirecting you... <img src="../assets/images/spiner.gif" height="30px">' +
                                            '</div>';

                                        setTimeout(() => {
                                            window.location.replace("../orders/");
                                        }, 6000);

                                    }

                                    if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                                        document.getElementById('verifyPaymentsBtn').disabled = false;
                                        document.getElementById('messengerVerify').innerHTML =
                                            '<div class="alert alert-danger alert-dismissible">' +
                                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                                            '</div>';

                                    }

                                };

                                xhr.onerror = function () {

                                    document.getElementById('verifyPaymentsBtn').disabled = false;
                                    document.getElementById('messengerVerify').innerHTML =
                                        '<div class="alert alert-danger alert-dismissible fade show">' +
                                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                                        '</div>';

                                };

                                xhr.send(JSON.stringify(data));

                            });

                        });

                        if (Number(xhr.response.orders[i].cost) === Number(xhr.response.orders[i].amount_paid)) {

                            depositOrderBtn.innerHTML = 'Paid <i class="fa fa-check-circle"></i>';
                            colDiv3.innerHTML = 'Balance: <h5>Amount Settled</h5>';
                            depositOrderBtn.addEventListener('click', (e) => {

                                e.preventDefault();

                                depositOrderBtn.href = '#0';
                                window.location.href = '#0';

                            });

                        } else {

                            depositOrderBtn.innerHTML = 'Deposit';
                            depositOrderBtn.addEventListener('click', (e) => {

                                e.preventDefault();

                                const setOrderID = orderID;
                                window.sessionStorage.setItem('orderID', setOrderID);
                                depositOrderBtn.href = 'https://flutterwave.com/pay/solarev';
                                window.location.href = 'https://flutterwave.com/pay/solarev';

                            });

                        }

                    } else {

                        messagerDiv.innerHTML = 'Please note your delivery date and <span style="color: #3b4eda; font-weight: 600;">confirm</span> your order to be able to make deposits.';

                        confirmOrderBtn.innerHTML = 'Confirm Order';
                        if (Number(xhr.response.orders[i].cost) === Number(xhr.response.orders[i].amount_paid)) {

                            depositOrderBtn.innerHTML = 'Paid <i class="fa fa-check"></i>';
                            colDiv3.innerHTML = 'Balance: <h5>Amount Settled</h5>';
                            depositOrderBtn.style.pointerEvents = "none";

                        } else {

                            depositOrderBtn.innerHTML = 'Deposit';
                            depositOrderBtn.style.pointerEvents = "none";

                        }

                        confirmOrderBtn.addEventListener('click', (e) => {

                            e.preventDefault();

                            function renderOrderDetailing(OrderTypeElementID, OrderIDElementID, OrderIMGElementID) {

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">EV460 SUV</span>';
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/FAW.png" height="50px">';

                                }

                                if (vehicleIDStatic === '1adbe9c0-0e4a-4a8a-ab4c-50ad57254790') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/BYD.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">BYD B6 Sedan</span>';

                                }

                                if (vehicleIDStatic === 'd39e04fc-d41f-46e4-b876-de5127a04746') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/Chery-1.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Cherry 3XE SUV</span>';

                                }

                                if (vehicleIDStatic === 'd8d37fdb-fefa-4bdc-970f-848953bcc5d7') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/ER30-small.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">ER30 Coupe/Hatch Back</span>';

                                }

                                if (vehicleIDStatic === '4492bf1d-9e8c-4a6d-969b-5c8af0e10132') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/LEfan-36-Sedan-Side.jpg" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Lefan 650ev</span>';

                                }

                                if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/sedan.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">iEV7L Sedan</span>';

                                }

                                if (vehicleIDStatic === '70f86799-39ad-4f89-97eb-982f9fcd2071-renault') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/renault-frontal-small.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Renault K-Ze</span>';

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/leopaard-small.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Leopaard CS9</span>';

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-changan') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/changan-small.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Changan Oshan</span>';

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-tour') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/tour-small.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Link Tour K-100</span>';

                                }

                                if (vehicleIDStatic === '01550021-5be7-445f-a001-ae801e3d0c8f-xpeng') {

                                    document.getElementById(OrderTypeElementID).innerHTML = orderingType;
                                    document.getElementById(OrderIMGElementID).innerHTML = '<img src="../assets/images/img/xpeng-small.png" height="50px">';
                                    document.getElementById(OrderIDElementID).innerHTML = '<small>ORDER ID: ' + orderID + '</small><br><span style="font-size: 18px">Xpeng G3 520i Smart</span>';

                                }

                            }

                            if (isActive === true) {

                                let OrderTypeElementID = "nonConfirmOrderType";
                                let OrderIDElementID = "nonConfirmOrderID";
                                let OrderIMGElementID = "nonConfirmOrderDetails";

                                renderOrderDetailing(OrderTypeElementID, OrderIDElementID, OrderIMGElementID);

                                $('#nonConfirmModal').modal('show');

                                $('#parentMessageDiv').slideDown('fast', function () {
                                    document.getElementById('messageDiv').innerHTML = '<div class="alert alert-danger">Order Confirmed already</div>';
                                });

                            } else {

                                let OrderTypeElementID = "confirmOrderType";
                                let OrderIDElementID = "confirmOrderID";
                                let OrderIMGElementID = "confirmOrderDetails";

                                renderOrderDetailing(OrderTypeElementID, OrderIDElementID, OrderIMGElementID);

                                $('#confirmModal').modal('show');
                                const specOrderID = orderID;

                                document.getElementById('confirmBtnModal').addEventListener('click', (e) => {

                                    e.preventDefault();

                                    document.getElementById('messageDivInModal').innerHTML = '<span><img src="../assets/images/spiner.gif" height="30px"></span>';
                                    document.getElementById('confirmBtnModal').disabled = true;

                                    let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders/";
                                    let url = uri + String(specOrderID);

                                    let data = ({
                                        is_active: true
                                    });

                                    let xhr = new XMLHttpRequest();
                                    xhr.overrideMimeType("application/json");
                                    xhr.responseType = 'json';
                                    xhr.open("PUT", url, true);
                                    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                                    xhr.onreadystatechange = function () {

                                        if (xhr.readyState === 4 && xhr.status === 204) {

                                            $('#parentMessageDivModal').slideDown('fast', function () {
                                                document.getElementById('messageDivInModal').innerHTML =
                                                    '<div class="alert alert-success alert-dismissible fade show">' +
                                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your order has been confirmed successfully, please wait... <img src="../assets/images/spiner.gif" height="30px">' +
                                                    '</div>';
                                            });

                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 4000);

                                        }

                                        if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                                            document.getElementById('confirmBtnModal').disabled = false;
                                            document.getElementById('messageDivInModal').innerHTML =
                                                '<div class="alert alert-danger alert-dismissible fade show">' +
                                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                                                '</div>';

                                        }

                                    };

                                    xhr.onerror = function () {

                                        document.getElementById('confirmBtnModal').disabled = false;
                                        document.getElementById('messageDivInModal').innerHTML =
                                            '<div class="alert alert-danger alert-dismissible fade show">' +
                                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                                            '</div>';

                                    };

                                    xhr.send(JSON.stringify(data));

                                });

                            }

                        });

                        verifyPaymentBtn.disabled = true;
                        editOrderBtn.disabled = true;

                    }

                }

            }

            let clientID = xhr.response.id;
            document.getElementById('editUserDetailsForm').addEventListener('submit', (e) => {

                e.preventDefault();

                document.getElementById('editFormSubBtn').disabled = true;
                document.getElementById('editFormMessenger').innerHTML = '<img src="../assets/images/spiner.gif" height="30px">';

                let clientName = document.getElementById('editFormUserFullName').value;
                let clientPhone = document.getElementById('editFormUserPhone').value;

                let data = ({

                    name: clientName,
                    phone_number: clientPhone,
                    email: sessionStorage.getItem("clientEmail")

                });

                let uri = "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/clients/";
                let url = uri + clientID;

                let xhr = new XMLHttpRequest();
                xhr.overrideMimeType("application/json");
                xhr.responseType = 'json';
                xhr.open("PUT", url, true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                xhr.onreadystatechange = function () {

                    if (xhr.readyState === 4 && xhr.status === 204) {

                        $('#parentalDiv').slideDown('fast', function () {
                            document.getElementById('editFormMessenger').innerHTML =
                                '<div class="alert alert-success alert-dismissible fade show">' +
                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your details have been updated successfully, please wait... <img src="../assets/images/spiner.gif" height="30px">' +
                                '</div>';
                        });

                        setTimeout(() => {
                            window.location.reload();
                        }, 4000);

                    }

                    if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                        document.getElementById('editFormSubBtn').disabled = false;
                        document.getElementById('editFormMessenger').innerHTML =
                            '<div class="alert alert-danger alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' + xhr.response.error +
                            '</div>';

                    }

                };

                xhr.onerror = function () {

                    document.getElementById('editFormSubBtn').disabled = false;
                    document.getElementById('editFormMessenger').innerHTML =
                        '<div class="alert alert-danger alert-dismissible fade show">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                        '</div>';

                };

                xhr.send(JSON.stringify(data));

            });

            /* $("#ordersModal").on("hidden.bs.modal", function(e) {

                document.getElementById('tablePlacer').remove();
                let morthDiv = document.createElement('div');
                morthDiv.setAttribute('id', 'tablePlacer');
                document.getElementById('parentDiving').appendChild(morthDiv); 

            }); */

        }

        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.responseType = 'json';
        xhr.open("GET", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/client", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4 && xhr.status === 200) {

                $('#cards').empty();
                $('#orderThrough').empty();

                worker();

            }

            if (xhr.readyState === 4 && (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)) {

                document.getElementById('cards').innerHTML = '';
                document.getElementById('orderThrough').innerHTML =
                    '<div class="alert alert-danger alert-dismissible fade show">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your session has expired, redirecting you to login... <img src="../assets/images/spiner.gif" height="30px">' +
                    '</div>';

                setTimeout(() => {

                    sessionStorage.removeItem('user');
                    localStorage.removeItem('counter');
                    sessionStorage.removeItem('userID');

                    window.location.replace("../login/");

                }, 4000);

            }

        };

        xhr.onerror = function () {

            document.getElementById('cards').innerHTML = '<div class="centerMan"><div style="color: red"><i class="fa fa-exclamation-circle"></i></div></div>';
            document.getElementById('orderThrough').innerHTML =
                '<div class="alert alert-danger alert-dismissible fade show">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                '</div>';

        };

        xhr.send();

        [document.getElementById('edit-pencil-sup'), document.getElementById('edit-pencil-supAlt')].forEach((eventCenter) => {

            eventCenter.addEventListener('click', (e) => {

                e.preventDefault();

                $('#edit-pencil-sup').removeClass("fa fa-pencil");
                $('#edit-pencil-supAlt').removeClass("fa fa-pencil");

                document.getElementById('displayUserName').innerHTML = '<input type="text" id="editFormUserFullName" class="form-control" required>';
                document.getElementById('displayUserPhone').innerHTML = '<input type="tel" id="editFormUserPhone" class="form-control" required>';

                document.getElementById('editFormUserFullName').value = xhr.response.name;
                document.getElementById('editFormUserPhone').value = xhr.response.phone_number;

                document.getElementById('edit-form-actions-container').style.display = "block";

            });

        });

        document.getElementById('editFormCancelBtn').addEventListener('click', (e) => {

            e.preventDefault();

            document.getElementById('edit-pencil-sup').classList = ("fa fa-pencil");
            document.getElementById('edit-pencil-supAlt').classList = ("fa fa-pencil");

            document.getElementById('edit-form-actions-container').style.display = "none";

            document.getElementById('displayUserName').innerHTML = xhr.response.name;
            document.getElementById('displayUserPhone').innerHTML = xhr.response.phone_number;

        });

        let test = 1800;
        if (localStorage.getItem("counter")) {

            if (localStorage.getItem("counter") <= 0) {
                let value = test;
            } else {
                let value = localStorage.getItem("counter");
            }

        } else {
            let value = test;
        }

        let counter = function () {

            if (value <= 0) {

                localStorage.setItem("counter", test);
                value = test;

            } else {

                value = parseInt(value) - 1;
                localStorage.setItem("counter", value);

            }

            if (localStorage.getItem('counter') == 0) {

                document.getElementById('cards').innerHTML =
                    '<div class="alert alert-danger alert-dismissible fade show">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your session has expired, redirecting you... <img src="../assets/images/spiner.gif" height="30px">' +
                    '</div>';

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
                window.sessionStorage.removeItem('payment');

                setTimeout(() => {
                    window.location.reload();
                }, 3000);

            }

        };

        let interval = setInterval(function () {
            counter();
        }, 1000);

    }

})();