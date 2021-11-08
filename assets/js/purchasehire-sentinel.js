(function () {
    document.getElementById("purchaseTC").href = "../agreements";
    const activeCarAndPurchaseType = sessionStorage.getItem("activeCarAndPurchaseType");
    const purchaseForm = document.getElementById("purchaseForm");

    function PMTCalc(startNet, monthNumber, interest) {
        return Number(startNet / ((1 - 1 / (1 + interest / monthNumber) ** (1 * monthNumber)) / (interest / monthNumber)));
    }

    if (!activeCarAndPurchaseType) {
        document.getElementById("purchaseForm").style.display = "none";
        document.getElementById("PurchaseTypeWarningArea").style.display = "block";
        document.getElementById("PurchaseTypeWarning").innerHTML = '<img src="../assets/images/spiner.gif" height="25px">';

        setTimeout(() => {
            window.location.href = "../solar-cars";
        }, 5000);
    }

    if (activeCarAndPurchaseType === "ER30Purchase") {
        let basePrice = 80000;
        let purchaseType = "hatchBuyHirePurchase";
        let purchaseTypeAlt = "hatchBuyPurchase";
        let vehicleID = "d8d37fdb-fefa-4bdc-970f-848953bcc5d7";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "RenaultPurchase") {
        let basePrice = 130000;
        let purchaseType = "RenaultBuyHirePurchase";
        let purchaseTypeAlt = "RenaultBuyPurchase";
        let vehicleID = "70f86799-39ad-4f89-97eb-982f9fcd2071-renault";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "BYDPurchase") {
        let basePrice = 100000;
        let purchaseType = "BYDBuyHirePurchase";
        let purchaseTypeAlt = "BYDBuyPurchase";
        let vehicleID = "1adbe9c0-0e4a-4a8a-ab4c-50ad57254790";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "LefanPurchase") {
        let basePrice = 100000;
        let purchaseType = "Lefan650evBuyHirePurchase";
        let purchaseTypeAlt = "Lefan650evBuyPurchase";
        let vehicleID = "4492bf1d-9e8c-4a6d-969b-5c8af0e10132";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "CherryPurchase") {
        let basePrice = 150000;
        let purchaseType = "Cherry3XEBuyHirePurchase";
        let purchaseTypeAlt = "Cherry3XEBuyPurchase";
        let vehicleID = "d39e04fc-d41f-46e4-b876-de5127a04746";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "leopaardPurchase") {
        let basePrice = 140000;
        let purchaseType = "leopaardBuyHirePurchase";
        let purchaseTypeAlt = "leopaardBuyPurchase";
        let vehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "changanPurchase") {
        let basePrice = 160000;
        let purchaseType = "changanBuyHirePurchase";
        let purchaseTypeAlt = "changanBuyPurchase";
        let vehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-changan";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "tourPurchase") {
        let basePrice = 150000;
        let purchaseType = "tourBuyHirePurchase";
        let purchaseTypeAlt = "tourBuyPurchase";
        let vehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-tour";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    if (activeCarAndPurchaseType === "xpengPurchase") {
        let basePrice = 290000;
        let purchaseType = "xpengBuyHirePurchase";
        let purchaseTypeAlt = "xpengBuyPurchase";
        let vehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-xpeng";

        handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID);
    }

    function roundPrice(rnum, rlength) {
        var newnumber = Math.ceil(rnum * Math.pow(10, rlength - 1)) / Math.pow(10, rlength - 1);
        var toTenths = newnumber.toFixed(rlength);
        return toTenths;
    }

    function handlePurchase(basePrice, purchaseType, purchaseTypeAlt, vehicleID) {
        function monthThere() {
            let deposit = Number((40 / 100) * basePrice);
            let startNet = Number(basePrice - deposit);

            let cost = startNet / 3;
            let overall = startNet + deposit;

            return [deposit, cost, overall];
        }

        function monthSix() {
            let deposit = Number((40 / 100) * basePrice);
            let startNet = Number(basePrice - deposit);

            let overall = Math.ceil(Number(PMTCalc(startNet, 6, 0.09) * 6 + deposit));
            return [deposit, PMTCalc(startNet, 6, 0.09), overall];
        }

        function year() {
            let deposit = Number((40 / 100) * basePrice);
            let startNet = Number(basePrice - deposit);

            let overall = Math.ceil(Number(PMTCalc(startNet, 12, 0.18) * 12 + deposit));
            return [deposit, PMTCalc(startNet, 12, 0.18), overall];
        }

        document.getElementById("paymentPurchase").addEventListener("change", function () {
            if (this.value === "3 months") {
                var getValues = monthThere();

                document.getElementById("pricerMain").innerHTML =
                    "GHS " + getValues[0] * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("pricerMonthly").innerHTML =
                    "GHS " + roundPrice(getValues[1], 1) * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("outrightFee").innerHTML =
                    "GHS " + getValues[2] * Number(document.getElementById("rentQuantityPurchase").value);

                document.getElementById("purchaseTC").href = "../agreements/";
                window.sessionStorage.setItem("purchaseType", purchaseType);
            }

            if (this.value === "6 months") {
                var getValues = monthSix();

                document.getElementById("pricerMain").innerHTML =
                    "GHS " + getValues[0] * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("pricerMonthly").innerHTML =
                    "GHS " + roundPrice(getValues[1], 1) * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("outrightFee").innerHTML =
                    "GHS " + getValues[2] * Number(document.getElementById("rentQuantityPurchase").value);

                document.getElementById("purchaseTC").href = "../agreements/";
                window.sessionStorage.setItem("purchaseType", purchaseType);
            }

            if (this.value === "1 year") {
                var getValues = year();

                document.getElementById("pricerMain").innerHTML =
                    "GHS " + getValues[0] * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("pricerMonthly").innerHTML =
                    "GHS " + roundPrice(getValues[1], 1) * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("outrightFee").innerHTML =
                    "GHS " + getValues[2] * Number(document.getElementById("rentQuantityPurchase").value);

                document.getElementById("purchaseTC").href = "../agreements/";
                window.sessionStorage.setItem("purchaseType", purchaseType);
            }

            if (this.value === "Outright") {
                document.getElementById("pricerMain").innerHTML = "<br>N / A";
                document.getElementById("pricerMonthly").innerHTML = "<br>N / A";
                document.getElementById("outrightFee").innerHTML = "GHS " + basePrice * Number(document.getElementById("rentQuantityPurchase").value);

                document.getElementById("purchaseTC").href = "../agreements/";
                window.sessionStorage.setItem("purchaseType", purchaseTypeAlt);
            }
        });

        document.getElementById("rentQuantityPurchase").addEventListener("input", function () {
            if (document.getElementById("paymentPurchase").value === "3 months") {
                var getValues = monthThere();

                document.getElementById("pricerMain").innerHTML =
                    "GHS " + getValues[0] * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("pricerMonthly").innerHTML =
                    "GHS " + roundPrice(getValues[1], 1) * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("outrightFee").innerHTML =
                    "GHS " + getValues[2] * Number(document.getElementById("rentQuantityPurchase").value);
            }

            if (document.getElementById("paymentPurchase").value === "6 months") {
                var getValues = monthSix();

                document.getElementById("pricerMain").innerHTML =
                    "GHS " + getValues[0] * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("pricerMonthly").innerHTML =
                    "GHS " + roundPrice(getValues[1], 1) * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("outrightFee").innerHTML =
                    "GHS " + getValues[2] * Number(document.getElementById("rentQuantityPurchase").value);
            }

            if (document.getElementById("paymentPurchase").value === "1 year") {
                var getValues = year();

                document.getElementById("pricerMain").innerHTML =
                    "GHS " + getValues[0] * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("pricerMonthly").innerHTML =
                    "GHS " + roundPrice(getValues[1], 1) * Number(document.getElementById("rentQuantityPurchase").value);
                document.getElementById("outrightFee").innerHTML =
                    "GHS " + getValues[2] * Number(document.getElementById("rentQuantityPurchase").value);
            }

            if (document.getElementById("paymentPurchase").value === "Outright") {
                document.getElementById("pricerMain").innerHTML = "<br>N / A";
                document.getElementById("pricerMonthly").innerHTML = "<br>N / A";
                document.getElementById("outrightFee").innerHTML = "GHS " + basePrice * Number(document.getElementById("rentQuantityPurchase").value);
            }
        });

        purchaseForm.addEventListener("submit", (e) => {
            e.preventDefault();

            function purchaser(vehicleID, cost) {
                let type = "Purchase";
                let is_Active = true;
                let paymentPlan = purchaseForm.paymentPurchase.value;
                let quantity = purchaseForm.rentQuantityPurchase.value;

                document.getElementById("continuePurchaseBtn").disabled = true;

                $("#parentErrorDivPurchase").slideDown("fast", function () {
                    document.getElementById("errorDivPurchase").innerHTML =
                        "<span style='font-size: 20px;'>You must login to complete your Order.<br>Please wait while we redirect you to the Login page...<br><img src='../assets/images/spiner.gif' height='30px'><br></span>";
                });

                window.sessionStorage.setItem("vehicleID", vehicleID);
                window.sessionStorage.setItem("type", type);
                window.sessionStorage.setItem("is_Active", is_Active);
                window.sessionStorage.setItem("quantity", quantity);
                window.sessionStorage.setItem("cost", cost);
                window.sessionStorage.setItem("payment", paymentPlan);

                setTimeout(() => {
                    window.location.replace("../login");
                }, 4000);
            }

            function purchaserAlt(vehicleID, cost) {
                let type = "Purchase";
                let is_Active = false;
                let quantity = document.getElementById("rentQuantityPurchase").value;
                let paymentPlan = document.getElementById("paymentPurchase").value;

                document.getElementById("continuePurchaseBtn").disabled = true;

                $("#parentErrorDivPurchase").slideDown("fast", function () {
                    document.getElementById("errorDivPurchase").innerHTML =
                        "<span style='font-size: 20px;'>Please wait while we redirect you...<br><img src='../assets/images/spiner.gif' height='30px'><br></span>";
                });

                window.sessionStorage.setItem("vehicleID", vehicleID);
                window.sessionStorage.setItem("type", type);
                window.sessionStorage.setItem("is_Active", is_Active);
                window.sessionStorage.setItem("quantity", quantity);
                window.sessionStorage.setItem("cost", cost);
                window.sessionStorage.setItem("payment", paymentPlan);
            }

            let midCost = purchaseForm.paymentPurchase.value;
            if (midCost === "Outright") {
                let cost = basePrice * Number(purchaseForm.rentQuantityPurchase.value);

                if (!sessionStorage.getItem("user")) {
                    purchaser(vehicleID, cost);
                } else {
                    purchaserAlt(vehicleID, cost);

                    setTimeout(() => {
                        window.location.replace("../orders/");
                    }, 4000);
                }
            }

            if (midCost === "3 months") {
                let getValue = monthThere();
                let cost = roundPrice(getValue[2], 1) * Number(document.getElementById("rentQuantityPurchase").value);

                if (!sessionStorage.getItem("user")) {
                    purchaser(vehicleID, cost);
                } else {
                    purchaserAlt(vehicleID, cost);

                    setTimeout(() => {
                        window.location.replace("../orders/");
                    }, 4000);
                }
            }

            if (midCost === "6 months") {
                let getValue = monthSix();
                let cost = roundPrice(getValue[2], 1) * Number(document.getElementById("rentQuantityPurchase").value);

                if (!sessionStorage.getItem("user")) {
                    purchaser(vehicleID, cost);
                } else {
                    purchaserAlt(vehicleID, cost);

                    setTimeout(() => {
                        window.location.replace("../orders/");
                    }, 4000);
                }
            }

            if (midCost === "1 year") {
                let getValue = year();
                let cost = roundPrice(getValue[2], 1) * Number(document.getElementById("rentQuantityPurchase").value);

                if (!sessionStorage.getItem("user")) {
                    purchaser(vehicleID, cost);
                } else {
                    purchaserAlt(vehicleID, cost);

                    setTimeout(() => {
                        window.location.replace("../orders/");
                    }, 4000);
                }
            }
        });
    }

    document.getElementById("CancelPurchaseFormBtn").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.replace("../solar-cars/");
    });
})();
