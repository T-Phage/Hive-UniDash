(function () {
    let corporateBenefitsArray = [
        "Free monthly maintenance at your office location",
        "Corporate staff /drivers training",
        "No security deposits",
        "Dedicated corporate account personnel",
        "Free travel charger",
        "GPS tracker",
        "Free charge on reinstallation of Charging units",
        "5% Discount on total cost for each batch of 5 cars",
        "5% on public charging cost for all vehicles",
        "Access to a fleet management platform",
        "Simplified fleet renewal and upgrade",
    ];

    let corporatePricingObj = {
        coupe: 1560,
        sedan: 2080,
        SUV: 2600,
    };

    let personalStandardBenefitsArray = ["Free monthly maintenance", "30% Security Deposit"];

    let personalStandardPricingArray = {
        coupe: 1200,
        sedan: 1600,
        SUV: 2000,
    };

    let personalStandardDepositArray = {
        coupe: 360,
        sedan: 480,
        SUV: 600,
    };

    let personalPremiumBenefitsArray = [
        "Free monthly maintenance",
        "Simplified Fleet renewal and upgrade",
        "Security Deposit",
        "Free travel charger",
    ];

    let personalPremiumPricingArray = {
        coupe: 1320,
        sedan: 1760,
        SUV: 2200,
    };

    let personalPremiumDepositArray = {
        coupe: 264,
        sedan: 352,
        SUV: 440,
    };

    let personalExecutiveBenefitsArray = [
        "Free monthly maintenance at your location",
        "Simplified fleet renewal",
        "10% Security deposit",
        "Access to a replacement car during maintenance",
        "Free travel charger",
        "Dedicated account personnel",
    ];

    let personalExecutivePricingArray = {
        coupe: 1440,
        sedan: 1920,
        SUV: 2400,
    };

    let personalExecutiveDepositArray = {
        coupe: 144,
        BYD: 192,
        SUV: 240,
    };

    function roundPrice(rnum, rlength) {
        var newnumber = Math.ceil(rnum * Math.pow(10, rlength - 1)) / Math.pow(10, rlength - 1);
        var toTenths = newnumber.toFixed(rlength);
        return toTenths;
    }

    document.getElementById("rentalForm").style.display = "none";
    document.getElementById("specPackageArea").style.display = "none";

    let activeCarAndPurchaseType = sessionStorage.getItem("activeCarAndPurchaseType");

    document.getElementById("corpBtn").addEventListener("click", (e) => {
        e.preventDefault();

        $("#benefitsList").empty();
        $("#pricingList").empty();

        document.getElementById("packageName").innerHTML = "Corporate Package";

        for (let i = 0; i < corporateBenefitsArray.length; i++) {
            let benefitParentDiv = document.createElement("div");
            benefitParentDiv.innerHTML = '<p><i class="fa fa-check-circle-o font-green"></i> ' + corporateBenefitsArray[i] + "</p>";
            document.getElementById("benefitsList").appendChild(benefitParentDiv);
        }

        if (activeCarAndPurchaseType === "RenaultRental") {
            let imagePath = "../assets/images/img/renault-frontal-small.png";
            let specCarName = "Renault K-Ze";
            let specCarPrice = corporatePricingObj.coupe;
            let actionBtnIdName = "RentRenaultBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/renault/agreement.pdf";
            let basePrice = corporatePricingObj.coupe;
            let specVehicleID = "70f86799-39ad-4f89-97eb-982f9fcd2071-renault";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "ER30Rental") {
            let imagePath = "../assets/images/img/images.png";
            let specCarName = "ER30 Coupe/Hatchback";
            let specCarPrice = corporatePricingObj.coupe;
            let actionBtnIdName = "RentCoupeBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/hatch-back/agreement.pdf";
            let basePrice = corporatePricingObj.coupe;
            let specVehicleID = "d8d37fdb-fefa-4bdc-970f-848953bcc5d7";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "BYDRental") {
            let imagePath = "../assets/images/img/BYD.png";
            let specCarName = "BYD B6 Sedan";
            let specCarPrice = corporatePricingObj.sedan;
            let actionBtnIdName = "RentBYDBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/byd/agreement.pdf";
            let basePrice = corporatePricingObj.sedan;
            let specVehicleID = "1adbe9c0-0e4a-4a8a-ab4c-50ad57254790";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "LefanRental") {
            let imagePath = "../assets/images/img/88a876dcc669b1d81071b09d6a3ad64f.jpg";
            let specCarName = "Lefan 650 Sedan";
            let specCarPrice = corporatePricingObj.sedan;
            let actionBtnIdName = "RentLefanBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/lefan/agreement.pdf";
            let basePrice = corporatePricingObj.sedan;
            let specVehicleID = "4492bf1d-9e8c-4a6d-969b-5c8af0e10132";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "CherryRental") {
            let imagePath = "../assets/images/img/Chery-1.png";
            let specCarName = "Chery Tiggo 3XE SUV";
            let specCarPrice = corporatePricingObj.SUV;
            let actionBtnIdName = "RentCherryBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/cherry/agreement.pdf";
            let basePrice = corporatePricingObj.SUV;
            let specVehicleID = "d39e04fc-d41f-46e4-b876-de5127a04746";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "leopaardRental") {
            let imagePath = "../assets/images/img/leopaard-small.png";
            let specCarName = "Leopaard CS9";
            let specCarPrice = corporatePricingObj.SUV;
            let actionBtnIdName = "RentLeopaardBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/leopaard/agreement.pdf";
            let basePrice = corporatePricingObj.SUV;
            let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "changanRental") {
            let imagePath = "../assets/images/img/changan-small.png";
            let specCarName = "Changan Oshan";
            let specCarPrice = corporatePricingObj.SUV;
            let actionBtnIdName = "RentChanganBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/changan/agreement.pdf";
            let basePrice = corporatePricingObj.SUV;
            let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-changan";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "tourRental") {
            let imagePath = "../assets/images/img/tour-small.png";
            let specCarName = "Link Tour K-100";
            let specCarPrice = corporatePricingObj.SUV;
            let actionBtnIdName = "RentTourBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/tour/agreement.pdf";
            let basePrice = corporatePricingObj.SUV;
            let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-tour";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }

        if (activeCarAndPurchaseType === "xpengRental") {
            let imagePath = "../assets/images/img/xpeng-small.png";
            let specCarName = "Xpeng G3 520i Smart";
            let specCarPrice = corporatePricingObj.SUV;
            let actionBtnIdName = "RentXpengBtn";
            let specPurchaseType = "Rental";
            let rentTCLink = "../assets/agreements/xpeng/agreement.pdf";
            let basePrice = corporatePricingObj.SUV;
            let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-xpeng";

            window.sessionStorage.setItem("imagePath", imagePath);
            window.sessionStorage.setItem("specCarName", specCarName);
            window.sessionStorage.setItem("specCarPrice", specCarPrice);
            window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
            window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
            window.sessionStorage.setItem("rentTCLink", rentTCLink);

            renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
        }
    });

    document.getElementById("personBtn").addEventListener("click", (e) => {
        e.preventDefault();

        $("#benefitsList").empty();
        $("#pricingList").empty();

        document.getElementById("limiterAlt").style.display = "none";
        document.getElementById("limiterInAlt").style.display = "block";

        let depositOnlyActionForm = document.getElementById("depositOnlyActionForm");

        document.getElementById("individualStandardBtn").addEventListener("click", (e) => {
            e.preventDefault();

            document.getElementById("packageName").innerHTML = "Individual Standard Package";

            document.getElementById("limiterInAlt").style.display = "none";
            document.getElementById("depositOnlyActionArea").style.display = "block";

            $("#benefitsList").empty();
            $("#pricingList").empty();

            for (let i = 0; i < personalStandardBenefitsArray.length; i++) {
                let benefitParentDiv = document.createElement("div");
                benefitParentDiv.innerHTML = '<p><i class="fa fa-check-circle-o font-green"></i> ' + personalStandardBenefitsArray[i] + "</p>";
                document.getElementById("benefitsList").appendChild(benefitParentDiv);
            }

            if (activeCarAndPurchaseType === "RenaultRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/renault-frontal-small.png";
                    let specCarName = "Renault K-Ze";
                    let specCarPrice = personalStandardPricingArray.coupe;
                    let actionBtnIdName = "RentRenaultBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/renault/agreement.pdf";
                    let specVehicleID = "70f86799-39ad-4f89-97eb-982f9fcd2071-renault";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.coupe;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.coupe;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.coupe;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "ER30Rental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/images.png";
                    let specCarName = "ER30 Coupe/Hatchback";
                    let specCarPrice = personalStandardPricingArray.coupe;
                    let actionBtnIdName = "RentCoupeBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/hatch-back/agreement.pdf";
                    let specVehicleID = "d8d37fdb-fefa-4bdc-970f-848953bcc5d7";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.coupe;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.coupe;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.coupe;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "BYDRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/BYD.png";
                    let specCarName = "BYD B6 Sedan";
                    let specCarPrice = personalStandardPricingArray.sedan;
                    let actionBtnIdName = "RentBYDBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/byd/agreement.pdf";
                    let specVehicleID = "1adbe9c0-0e4a-4a8a-ab4c-50ad57254790";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.sedan;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.sedan;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.sedan;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "LefanRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/88a876dcc669b1d81071b09d6a3ad64f.jpg";
                    let specCarName = "Lefan 650 Sedan";
                    let specCarPrice = personalStandardPricingArray.sedan;
                    let actionBtnIdName = "RentLefanBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/lefan/agreement.pdf";
                    let specVehicleID = "4492bf1d-9e8c-4a6d-969b-5c8af0e10132";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.sedan;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.sedan;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.sedan;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "CherryRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/Chery-1.png";
                    let specCarName = "Chery Tiggo 3XE SUV";
                    let specCarPrice = personalStandardPricingArray.SUV;
                    let actionBtnIdName = "RentCherryBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/cherry/agreement.pdf";
                    let specVehicleID = "d39e04fc-d41f-46e4-b876-de5127a04746";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "leopaardRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/leopaard-small.png";
                    let specCarName = "Leopaard CS9 SUV";
                    let specCarPrice = personalStandardPricingArray.SUV;
                    let actionBtnIdName = "RentLeopaardBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/leopaard/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "changanRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/changan-small.png";
                    let specCarName = "Changan Oshan";
                    let specCarPrice = personalStandardPricingArray.SUV;
                    let actionBtnIdName = "RentChanganBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/changan/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-changan";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "tourRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/tour-small.png";
                    let specCarName = "Link Tour K-100";
                    let specCarPrice = personalStandardPricingArray.SUV;
                    let actionBtnIdName = "RentTourBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/tour/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-tour";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "xpengRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/xpeng-small.png";
                    let specCarName = "Xpeng G3 520i Smart";
                    let specCarPrice = personalStandardPricingArray.SUV;
                    let actionBtnIdName = "RentXpengBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/xpeng/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-xpeng";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalStandardPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalStandardPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }
        });

        document.getElementById("individualPremiumBtn").addEventListener("click", (e) => {
            e.preventDefault();

            document.getElementById("packageName").innerHTML = "Individual Premium Package";

            document.getElementById("limiterInAlt").style.display = "none";
            document.getElementById("depositOnlyActionArea").style.display = "block";

            $("#benefitsList").empty();
            $("#pricingList").empty();

            for (let i = 0; i < personalPremiumBenefitsArray.length; i++) {
                let benefitParentDiv = document.createElement("div");
                benefitParentDiv.innerHTML = '<p><i class="fa fa-check-circle-o font-green"></i> ' + personalPremiumBenefitsArray[i] + "</p>";
                document.getElementById("benefitsList").appendChild(benefitParentDiv);
            }

            if (activeCarAndPurchaseType === "RenaultRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/renault-frontal-small.png";
                    let specCarName = "Renault K-Ze";
                    let specCarPrice = personalPremiumPricingArray.coupe;
                    let actionBtnIdName = "RentRenaultBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/renault/agreement.pdf";
                    let specVehicleID = "70f86799-39ad-4f89-97eb-982f9fcd2071-renault";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.coupe;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.coupe;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.coupe;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "ER30Rental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/images.png";
                    let specCarName = "ER30 Coupe/Hatchback";
                    let specCarPrice = personalPremiumPricingArray.coupe;
                    let actionBtnIdName = "RentCoupeBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/hatch-back/agreement.pdf";
                    let specVehicleID = "d8d37fdb-fefa-4bdc-970f-848953bcc5d7";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.coupe;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.coupe;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.coupe;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "BYDRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/BYD.png";
                    let specCarName = "BYD B6 Sedan";
                    let specCarPrice = personalPremiumPricingArray.sedan;
                    let actionBtnIdName = "RentBYDBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/byd/agreement.pdf";
                    let specVehicleID = "1adbe9c0-0e4a-4a8a-ab4c-50ad57254790";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.sedan;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.sedan;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.sedan;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "LefanRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/88a876dcc669b1d81071b09d6a3ad64f.jpg";
                    let specCarName = "Lefan 650 Sedan";
                    let specCarPrice = personalPremiumPricingArray.sedan;
                    let actionBtnIdName = "RentLefanBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/lefan/agreement.pdf";
                    let specVehicleID = "4492bf1d-9e8c-4a6d-969b-5c8af0e10132";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.sedan;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.sedan;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.sedan;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "CherryRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/Chery-1.png";
                    let specCarName = "Chery Tiggo 3XE SUV";
                    let specCarPrice = personalPremiumPricingArray.SUV;
                    let actionBtnIdName = "RentCherryBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/cherry/agreement.pdf";
                    let specVehicleID = "d39e04fc-d41f-46e4-b876-de5127a04746";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "leopaardRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/leopaard-small.png";
                    let specCarName = "Leopaard CS9 SUV";
                    let specCarPrice = personalPremiumPricingArray.SUV;
                    let actionBtnIdName = "RentLeopaardBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/leopaard/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "changanRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/changan-small.png";
                    let specCarName = "Changan Oshan";
                    let specCarPrice = personalPremiumPricingArray.SUV;
                    let actionBtnIdName = "RentChanganBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/changan/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-changan";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "tourRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/tour-small.png";
                    let specCarName = "Link Tour K-100";
                    let specCarPrice = personalPremiumPricingArray.SUV;
                    let actionBtnIdName = "RentTourBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/tour/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-tour";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "xpengRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/xpeng-small.png";
                    let specCarName = "Xpeng G3 520i Smart";
                    let specCarPrice = personalPremiumPricingArray.SUV;
                    let actionBtnIdName = "RentXpengBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/xpeng/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-xpeng";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalPremiumPricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalPremiumPricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }
        });

        document.getElementById("individualExecutiveBtn").addEventListener("click", (e) => {
            e.preventDefault();

            document.getElementById("packageName").innerHTML = "Individual Executive Package";

            document.getElementById("limiterInAlt").style.display = "none";
            document.getElementById("depositOnlyActionArea").style.display = "block";

            $("#benefitsList").empty();
            $("#pricingList").empty();

            for (let i = 0; i < personalExecutiveBenefitsArray.length; i++) {
                let benefitParentDiv = document.createElement("div");
                benefitParentDiv.innerHTML = '<p><i class="fa fa-check-circle-o font-green"></i> ' + personalExecutiveBenefitsArray[i] + "</p>";
                document.getElementById("benefitsList").appendChild(benefitParentDiv);
            }

            if (activeCarAndPurchaseType === "RenaultRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/renault-frontal-small.png";
                    let specCarName = "Renault K-Ze";
                    let specCarPrice = personalExecutivePricingArray.coupe;
                    let actionBtnIdName = "RentRenaultBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/renault/agreement.pdf";
                    let specVehicleID = "70f86799-39ad-4f89-97eb-982f9fcd2071-renault";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.coupe;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.coupe;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.coupe;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "ER30Rental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/images.png";
                    let specCarName = "ER30 Coupe/Hatchback";
                    let specCarPrice = personalExecutivePricingArray.coupe;
                    let actionBtnIdName = "RentCoupeBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/hatch-back/agreement.pdf";
                    let specVehicleID = "d8d37fdb-fefa-4bdc-970f-848953bcc5d7";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.coupe;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.coupe;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.coupe;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "BYDRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/BYD.png";
                    let specCarName = "BYD B6 Sedan";
                    let specCarPrice = personalExecutivePricingArray.sedan;
                    let actionBtnIdName = "RentBYDBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/byd/agreement.pdf";
                    let specVehicleID = "1adbe9c0-0e4a-4a8a-ab4c-50ad57254790";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.sedan;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.sedan;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.sedan;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "LefanRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/88a876dcc669b1d81071b09d6a3ad64f.jpg";
                    let specCarName = "Lefan 650 Sedan";
                    let specCarPrice = personalExecutivePricingArray.sedan;
                    let actionBtnIdName = "RentLefanBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/lefan/agreement.pdf";
                    let specVehicleID = "4492bf1d-9e8c-4a6d-969b-5c8af0e10132";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.sedan;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.sedan;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.sedan;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "CherryRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/Chery-1.png";
                    let specCarName = "Chery Tiggo 3XE SUV";
                    let specCarPrice = personalExecutivePricingArray.SUV;
                    let actionBtnIdName = "RentCherryBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/cherry/agreement.pdf";
                    let specVehicleID = "d39e04fc-d41f-46e4-b876-de5127a04746";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "leopaardRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/leopaard-small.png";
                    let specCarName = "Leopaard CS9 SUV";
                    let specCarPrice = personalExecutivePricingArray.SUV;
                    let actionBtnIdName = "RentLeopaardBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/leopaard/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-Leopaard";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "changanRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/changan-small.png";
                    let specCarName = "Changan Oshan";
                    let specCarPrice = personalExecutivePricingArray.SUV;
                    let actionBtnIdName = "RentChanganBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/changan/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-changan";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "tourRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/tour-small.png";
                    let specCarName = "Link Tour K-100";
                    let specCarPrice = personalExecutivePricingArray.SUV;
                    let actionBtnIdName = "RentTourBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/tour/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-tour";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }

            if (activeCarAndPurchaseType === "xpengRental") {
                function renderInCarTypeCard(basePrice) {
                    let imagePath = "../assets/images/img/xpeng-small.png";
                    let specCarName = "Xpeng G3 520i Smart";
                    let specCarPrice = personalExecutivePricingArray.SUV;
                    let actionBtnIdName = "RentXpengBtn";
                    let specPurchaseType = "Rental";
                    let rentTCLink = "../assets/agreements/xpeng/agreement.pdf";
                    let specVehicleID = "01550021-5be7-445f-a001-ae801e3d0c8f-xpeng";

                    window.sessionStorage.setItem("imagePath", imagePath);
                    window.sessionStorage.setItem("specCarName", specCarName);
                    window.sessionStorage.setItem("specCarPrice", specCarPrice);
                    window.sessionStorage.setItem("actionBtnIdName", actionBtnIdName);
                    window.sessionStorage.setItem("specPurchaseType", specPurchaseType);
                    window.sessionStorage.setItem("rentTCLink", rentTCLink);

                    renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID);
                }

                document.getElementById("securityDepositPayOnly").addEventListener("change", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    $("#pricingList").empty();

                    if (depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutiveDepositArray.SUV;
                        document.getElementById("securityDepositPrice").innerHTML =
                            'Security Deposit = <span class="bold">GHS ' + basePrice + ".00</span>";
                        document.getElementById("depositOnlyChosenNotice").innerHTML =
                            '<div class="alert alert-info alert-dismissible bold"><button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> NOTE: You chosen to pay only the security deposit for this rental.<br>If you wish otherwise kindly cancel and start the process without checking the <span>PAY ONLY SECURITY DEPOSIT</span> checkbox.</div>';
                        renderInCarTypeCard(basePrice);
                    }

                    if (!depositOnlyActionForm.securityDepositPayOnly.checked) {
                        let basePrice = personalExecutivePricingArray.SUV;
                        $("#securityDepositPrice").empty();
                        $("#depositOnlyChosenNotice").empty();
                        renderInCarTypeCard(basePrice);
                    }
                });

                let basePrice = personalExecutivePricingArray.SUV;
                window.sessionStorage.setItem("basePrice", basePrice);
                renderInCarTypeCard(basePrice);
            }
        });
    });

    document.getElementById("cancelRentBtn").addEventListener("click", (e) => {
        e.preventDefault();

        $("#benefitsList").empty();
        $("#pricingList").empty();
        $("#securityDepositPrice").empty();
        $("#depositOnlyChosenNotice").empty();

        document.getElementById("depositOnlyActionForm").reset();
        $("input:checkbox").each(function () {
            this.checked = false;
        });

        document.getElementById("specPackageArea").style.display = "none";
        document.getElementById("limiterAlt").style.display = "block";
        document.getElementById("depositOnlyActionArea").style.display = "none";
    });

    document.getElementById("CancelRentFormBtn").addEventListener("click", (e) => {
        e.preventDefault();

        document.getElementById("rentalForm").reset();
        document.getElementById("depositOnlyActionForm").reset();

        $("input:checkbox").each(function () {
            this.checked = false;
        });

        $("#rentFeeDiv").empty();
        $("#securityDepositPrice").empty();
        $("#pricingList").empty();
        $("#depositOnlyChosenNotice").empty();

        let imagePath = sessionStorage.getItem("imagePath");
        let specCarName = sessionStorage.getItem("specCarName");
        let specCarPrice = sessionStorage.getItem("specCarPrice");
        let actionBtnIdName = sessionStorage.getItem("actionBtnIdName");
        let specPurchaseType = sessionStorage.getItem("specPurchaseType");
        let rentTCLink = sessionStorage.getItem("rentTCLink");
        let basePrice = sessionStorage.getItem("basePrice");

        renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice);

        document.getElementById("rentalForm").style.display = "none";
        document.getElementById("specPackageArea").style.display = "block";
    });

    document.getElementById("cancelInRentBtn").addEventListener("click", (e) => {
        e.preventDefault();

        document.getElementById("limiterAlt").style.display = "block";
        document.getElementById("limiterInAlt").style.display = "none";
    });

    function handleRentals(rentTCLink, basePrice, specVehicleID) {
        document.getElementById("rentTC").href = rentTCLink;

        document.getElementById("duration").addEventListener("change", function () {
            if (!document.getElementById("rentQuantity").value) {
                document.getElementById("rentFeeDiv").innerHTML =
                    '<div class="font-red bold">The QUANTITY field is Empty, Real-time calculations cannot be made.</div>';
            } else {
                if (this.value === "10 months" || this.value === "11 months" || this.value === "12 months") {
                    let costShower = Number(this.value.slice(0, 2)) * basePrice * document.getElementById("rentQuantity").value;
                    document.getElementById("rentFeeDiv").innerHTML =
                        '<div><small class="bold">Rent Fee based on your options:</small></div><div class="bold centerMan">' +
                        "GHS " +
                        costShower +
                        "</div><div>&nbsp;</div>";
                } else {
                    let costShower = Number(this.value.slice(0, 1)) * basePrice * document.getElementById("rentQuantity").value;
                    document.getElementById("rentFeeDiv").innerHTML =
                        '<div><small class="bold">Rent Fee based on your options:</small></div><div class="bold centerMan">' +
                        "GHS " +
                        costShower +
                        "</div><div>&nbsp;</div>";
                }
            }
        });

        document.getElementById("rentQuantity").addEventListener("input", function () {
            if (
                document.getElementById("duration").value === "10 months" ||
                document.getElementById("duration").value === "11 months" ||
                document.getElementById("duration").value === "12 months"
            ) {
                let costShower = Number(document.getElementById("duration").value.slice(0, 2)) * basePrice * this.value;
                document.getElementById("rentFeeDiv").innerHTML =
                    '<div><small class="bold">Rent Fee based on your options:</small></div><div class="bold centerMan">' +
                    "GHS " +
                    costShower +
                    "</div><div>&nbsp;</div>";
            } else {
                let costShower = Number(document.getElementById("duration").value.slice(0, 1)) * basePrice * this.value;
                document.getElementById("rentFeeDiv").innerHTML =
                    '<div><small class="bold">Rent Fee based on your options:</small></div><div class="bold centerMan">' +
                    "GHS " +
                    costShower +
                    "</div><div>&nbsp;</div>";
            }
        });

        document.getElementById("rentalForm").addEventListener("submit", (e) => {
            e.preventDefault();

            function renter(specVehicleID) {
                let vehicleID = specVehicleID;
                let type = "Rental";
                let is_Active = false;
                let driverType = document.getElementById("driverType").value;
                let dailyMileage = document.getElementById("dailyMileage").value;
                let quantity = document.getElementById("rentQuantity").value;
                let duration = document.getElementById("duration").value;
                let commuteRoute = document.getElementById("commuteRoute").value;

                if (
                    document.getElementById("duration").value === "10 months" ||
                    document.getElementById("duration").value === "11 months" ||
                    document.getElementById("duration").value === "12 months"
                ) {
                    let cost = Number(document.getElementById("duration").value.slice(0, 2)) * basePrice * Number(quantity);

                    document.getElementById("continueRentBtn").disabled = true;

                    $("#parentErrorDiv").slideDown("fast", function () {
                        document.getElementById("errorDiv").innerHTML =
                            "<div class='alert alert-info'>You must login to complete your order, please wait while we redirect you to the login page... <img src='../assets/images/spiner.gif' height='30px'></div>";
                    });

                    window.sessionStorage.setItem("vehicleID", vehicleID);
                    window.sessionStorage.setItem("type", type);
                    window.sessionStorage.setItem("is_Active", is_Active);
                    window.sessionStorage.setItem("driverType", driverType);
                    window.sessionStorage.setItem("dailyMileage", dailyMileage);
                    window.sessionStorage.setItem("quantity", quantity);
                    window.sessionStorage.setItem("cost", cost);
                    window.sessionStorage.setItem("duration", duration);
                    window.sessionStorage.setItem("commuteRoute", commuteRoute);

                    setTimeout(() => {
                        window.location.replace("../login/");
                    }, 4000);
                } else {
                    let cost = Number(document.getElementById("duration").value.slice(0, 1)) * basePrice * Number(quantity);

                    document.getElementById("continueRentBtn").disabled = true;

                    $("#parentErrorDiv").slideDown("fast", function () {
                        document.getElementById("errorDiv").innerHTML =
                            "<div class='alert alert-info'>You must login to complete your order, please wait while we redirect you to the login page... <img src='../assets/images/spiner.gif' height='30px'></div>";
                    });

                    window.sessionStorage.setItem("vehicleID", vehicleID);
                    window.sessionStorage.setItem("type", type);
                    window.sessionStorage.setItem("is_Active", is_Active);
                    window.sessionStorage.setItem("driverType", driverType);
                    window.sessionStorage.setItem("dailyMileage", dailyMileage);
                    window.sessionStorage.setItem("quantity", quantity);
                    window.sessionStorage.setItem("cost", cost);
                    window.sessionStorage.setItem("duration", duration);
                    window.sessionStorage.setItem("commuteRoute", commuteRoute);

                    setTimeout(() => {
                        window.location.replace("../login/");
                    }, 4000);
                }
            }

            function renterAlt(specVehicleID) {
                let vehicleID = specVehicleID;
                let type = "Rental";
                let is_Active = false;
                let driverType = document.getElementById("driverType").value;
                let dailyMileage = document.getElementById("dailyMileage").value;
                let quantity = document.getElementById("rentQuantity").value;
                let duration = document.getElementById("duration").value;
                let commuteRoute = document.getElementById("commuteRoute").value;

                if (
                    document.getElementById("duration").value === "10 months" ||
                    document.getElementById("duration").value === "11 months" ||
                    document.getElementById("duration").value === "12 months"
                ) {
                    let cost = Number(document.getElementById("duration").value.slice(0, 2)) * basePrice * Number(quantity);

                    document.getElementById("continueRentBtn").disabled = true;

                    $("#parentErrorDiv").slideDown("fast", function () {
                        document.getElementById("errorDiv").innerHTML =
                            "<div class='alert alert-info'>Please wait while we redirect you... <img src='../assets/images/spiner.gif' height='30px'></div>";
                    });

                    window.sessionStorage.setItem("vehicleID", vehicleID);
                    window.sessionStorage.setItem("type", type);
                    window.sessionStorage.setItem("is_Active", is_Active);
                    window.sessionStorage.setItem("driverType", driverType);
                    window.sessionStorage.setItem("dailyMileage", dailyMileage);
                    window.sessionStorage.setItem("quantity", quantity);
                    window.sessionStorage.setItem("cost", cost);
                    window.sessionStorage.setItem("duration", duration);
                    window.sessionStorage.setItem("commuteRoute", commuteRoute);
                } else {
                    let cost = Number(document.getElementById("duration").value.slice(0, 1)) * basePrice * Number(quantity);

                    document.getElementById("continueRentBtn").disabled = true;

                    $("#parentErrorDiv").slideDown("fast", function () {
                        document.getElementById("errorDiv").innerHTML =
                            "<div class='alert alert-info'>Please wait while we redirect you... <img src='../assets/images/spiner.gif' height='30px'></div>";
                    });

                    window.sessionStorage.setItem("vehicleID", vehicleID);
                    window.sessionStorage.setItem("type", type);
                    window.sessionStorage.setItem("is_Active", is_Active);
                    window.sessionStorage.setItem("driverType", driverType);
                    window.sessionStorage.setItem("dailyMileage", dailyMileage);
                    window.sessionStorage.setItem("quantity", quantity);
                    window.sessionStorage.setItem("cost", cost);
                    window.sessionStorage.setItem("duration", duration);
                    window.sessionStorage.setItem("commuteRoute", commuteRoute);
                }
            }

            if (!sessionStorage.getItem("user")) {
                let vehicleID = specVehicleID;
                renter(vehicleID);
            } else {
                let vehicleID = specVehicleID;
                renterAlt(vehicleID);

                setTimeout(() => {
                    window.location.replace("../orders/");
                }, 4000);
            }
        });
    }

    function renderCarTypeCard(imagePath, specCarName, specCarPrice, actionBtnIdName, specPurchaseType, rentTCLink, basePrice, specVehicleID) {
        let pricingHoldingDiv = document.createElement("div");

        let pricingDiv = document.createElement("div");
        pricingDiv.classList = "act-pricing-div";
        pricingDiv.innerHTML =
            '<div class="centerMan"><h4>' +
            specCarName +
            '</h4><small class="centerMan">' +
            specPurchaseType +
            " Package/month</small></div><div>&nbsp;</div><div>&nbsp;</div>" +
            '<div class="row flex-nowrap"><div class="col-3"><img src="' +
            imagePath +
            '" height="40px"></div><div class="col-6"><p class="para-text centerMan"><span class="bold">GHS ' +
            specCarPrice +
            '.00</span></p></div><div class="col-3"><button class="package-action" id="' +
            actionBtnIdName +
            '">Rent</button></div></div><div>&nbsp;</div>';
        pricingDiv.setAttribute("data-id", "sedan");

        let costSavingDiv = document.createElement("div");
        costSavingDiv.classList = "act-pricing-div";
        costSavingDiv.innerHTML =
            '<div class="centerMan"><h4>Potential Savings</h4></div><div>&nbsp;</div>' +
            '<div class="row flex-nowrap"><div class="col-5"><div class="centerMan"><img src="../assets/images/Circle-icons-creditcard.png" height="90px"></div></div><div class="col-7"><div class="centerMan bold">+ potential gas savings of upto GHS 35.2 for every 100km driven in an electric vehicle.</div></div></div><div>&nbsp;</div>' +
            '<div class="centerMan"><small><a href="http://www.energycom.gov.gh/files/concept%20note%20Drive%20electric.pdf" target="_blank">CREDIT: Ghana Energy Commission</a></small></div>';

        pricingHoldingDiv.appendChild(pricingDiv);
        pricingHoldingDiv.appendChild(costSavingDiv);

        document.getElementById("pricingList").appendChild(pricingHoldingDiv);

        document.getElementById("specPackageArea").style.display = "block";
        document.getElementById("limiterAlt").style.display = "none";

        document.getElementById("" + actionBtnIdName + "").addEventListener("click", (e) => {
            e.preventDefault();

            document.getElementById("specPackageArea").style.display = "none";
            document.getElementById("rentalForm").style.display = "block";

            document.getElementById("clickedRentPackage").innerHTML = specCarName + " Rental";

            handleRentals(rentTCLink, basePrice, specVehicleID);
        });
    }
})();
