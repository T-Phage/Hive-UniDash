(function () {
    if (sessionStorage.getItem("user")) {
        let token = sessionStorage.getItem("user");
        if (sessionStorage.getItem("type")) {
            let vehicleID = window.sessionStorage.getItem("vehicleID");
            let type = window.sessionStorage.getItem("type");
            let driverType = window.sessionStorage.getItem("driverType");
            let dailyMileage = window.sessionStorage.getItem("dailyMileage");
            let quantity = parseInt(window.sessionStorage.getItem("quantity"));
            let cost = parseFloat(window.sessionStorage.getItem("cost"));
            let duration = window.sessionStorage.getItem("duration");
            let commuteRoute = window.sessionStorage.getItem("commuteRoute");

            if (sessionStorage.getItem("type") === "Rental") {
                let data = {
                    cost: cost,
                    quantity: quantity,
                    vehicle_id: vehicleID,
                    type: type,
                    /* is_active: false, */
                    driver_type: driverType,
                    duration: duration,
                    daily_mileage: dailyMileage,
                    commute_route: commuteRoute,
                    payment_plan: " ",
                };

                let xhr = new XMLHttpRequest();
                xhr.overrideMimeType("application/json");
                xhr.responseType = "json";
                xhr.open("POST", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders", true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.setRequestHeader("Authorization", "Bearer " + token);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 201) {
                        document.getElementById("orderThroughAlt").innerHTML =
                            '<div class="alert alert-success alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your order has been placed successfully, please wait... <img src="../assets/images/spiner.gif" height="30px">' +
                            "</div>";

                        window.sessionStorage.removeItem("vehicleID");
                        window.sessionStorage.removeItem("type");
                        window.sessionStorage.removeItem("is_Active");
                        window.sessionStorage.removeItem("driverType");
                        window.sessionStorage.removeItem("dailyMileage");
                        window.sessionStorage.removeItem("quantity");
                        window.sessionStorage.removeItem("cost");
                        window.sessionStorage.removeItem("duration");
                        window.sessionStorage.removeItem("commuteRoute");

                        setTimeout(() => {
                            window.location.reload();
                        }, 4000);
                    }

                    if (
                        xhr.readyState === 4 &&
                        (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)
                    ) {
                        document.getElementById("orderThroughAlt").innerHTML =
                            '<div class="alert alert-danger alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' +
                            xhr.response.error +
                            "</div>";
                    }
                };

                xhr.onerror = function () {
                    document.getElementById("orderThroughAlt").innerHTML =
                        '<div class="alert alert-danger alert-dismissible fade show">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                        "</div>";
                };

                xhr.send(JSON.stringify(data));
            }

            if (sessionStorage.getItem("type") === "Purchase") {
                let payment = window.sessionStorage.getItem("payment");
                let data = {
                    cost: cost,
                    quantity: quantity,
                    vehicle_id: vehicleID,
                    type: type,
                    /* is_active: false, */
                    payment_plan: payment,
                    driver_type: " ",
                    duration: " ",
                    daily_mileage: " ",
                    commute_route: " ",
                };

                let xhr = new XMLHttpRequest();
                xhr.overrideMimeType("application/json");
                xhr.responseType = "json";
                xhr.open("POST", "https://stx-api-v2-rltxonbsxa-uc.a.run.app/v2/orders", true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.setRequestHeader("Authorization", "Bearer " + token);
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 201) {
                        document.getElementById("orderThroughAlt").innerHTML =
                            '<div class="alert alert-success alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> Your order has been placed successfully, please wait... <img src="../assets/images/spiner.gif" height="30px">' +
                            "</div>";

                        window.sessionStorage.removeItem("vehicleID");
                        window.sessionStorage.removeItem("type");
                        window.sessionStorage.removeItem("is_Active");
                        window.sessionStorage.removeItem("quantity");
                        window.sessionStorage.removeItem("cost");
                        window.sessionStorage.removeItem("payment");

                        setTimeout(() => {
                            window.location.reload();
                        }, 4000);
                    }

                    if (
                        xhr.readyState === 4 &&
                        (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 500)
                    ) {
                        document.getElementById("orderThroughAlt").innerHTML =
                            '<div class="alert alert-danger alert-dismissible fade show">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> ' +
                            xhr.response.error +
                            "</div>";
                    }
                };

                xhr.onerror = function () {
                    document.getElementById("orderThroughAlt").innerHTML =
                        '<div class="alert alert-danger alert-dismissible fade show">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">&times;</button> A network error occurred, please check your connection and try again.' +
                        "</div>";
                };

                xhr.send(JSON.stringify(data));
            }
        }
    }
})();
