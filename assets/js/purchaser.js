(function () {
    document.getElementById("purchaserModalClose").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("purchaserModal").style.display = "none";
    });

    document.getElementById("renterAltModalClose").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("renterAltModal").style.display = "none";
    });

    function roundPrice(rnum, rlength) {
        var newnumber = Math.ceil(rnum * Math.pow(10, rlength - 1)) / Math.pow(10, rlength - 1);
        var toTenths = newnumber.toFixed(rlength);
        return toTenths;
    }

    let hatchRent = document.getElementById("hatchRent");
    let hatchRentAlt = document.getElementById("hatchRentAlt");
    let hatchBuy = document.getElementById("hatchBuy");

    hatchRentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/hatch-back/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* hatchRent.addEventListener('click', (e) => {

        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "ER30Rental");
        window.location.href = "../car-rental/";

    }); */

    hatchBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "ER30Purchase");
        window.location.href = "../purchase/";
    });

    let changanRent = document.getElementById("changanRent");
    let changanRentAlt = document.getElementById("changanRentAlt");
    let changanBuy = document.getElementById("changanBuy");

    changanRentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/changan/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* changanRent.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "changanRental");
        window.location.href = "../car-rental/";
    }); */

    changanBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "changanPurchase");
        window.location.href = "../purchase/";
    });

    let tourRent = document.getElementById("tourRent");
    let tourRentAlt = document.getElementById("tourRentAlt");
    let tourBuy = document.getElementById("tourBuy");

    tourRentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/tour/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* tourRent.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "tourRental");
        window.location.href = "../car-rental/";
    }); */

    tourBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "tourPurchase");
        window.location.href = "../purchase/";
    });

    let BYDRent = document.getElementById("BYDRent");
    let BYDRentAlt = document.getElementById("BYDRentAlt");
    let BYDBuy = document.getElementById("BYDBuy");

    BYDRentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/byd/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* BYDRent.addEventListener('click', (e) => {

        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "BYDRental");
        window.location.href = "../car-rental/";

    }); */

    BYDBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "BYDPurchase");
        window.location.href = "../purchase/";
    });

    let RenaultRent = document.getElementById("RenaultRent");
    let RenaultRentAlt = document.getElementById("RenaultRentAlt");
    let RenaultBuy = document.getElementById("RenaultBuy");

    RenaultRentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/renault/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* RenaultRent.addEventListener('click', (e) => {

        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "RenaultRental");
        window.location.href = "../car-rental/";

    }); */

    RenaultBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "RenaultPurchase");
        window.location.href = "../purchase/";
    });

    let Cherry3XERent = document.getElementById("Cherry3XERent");
    let Cherry3XERentAlt = document.getElementById("Cherry3XERentAlt");
    let Cherry3XEBuy = document.getElementById("Cherry3XEBuy");

    Cherry3XERentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/cherry/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* Cherry3XERent.addEventListener('click', (e) => {

        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "CherryRental");
        window.location.href = "../car-rental/";

    }); */

    Cherry3XEBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "CherryPurchase");
        window.location.href = "../purchase/";
    });

    let leopaardRent = document.getElementById("leopaardRent");
    let leopaardRentAlt = document.getElementById("leopaardRentAlt");
    let leopaardBuy = document.getElementById("leopaardBuy");

    leopaardRentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/leopaard/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* leopaardRent.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem(
            "activeCarAndPurchaseType",
            "leopaardRental"
        );
        window.location.href = "../car-rental/";
    }); */

    leopaardBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "leopaardPurchase");
        window.location.href = "../purchase/";
    });

    let xpengRent = document.getElementById("xpengRent");
    let xpengRentAlt = document.getElementById("xpengRentAlt");
    let xpengBuy = document.getElementById("xpengBuy");

    xpengRentAlt.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("rentTC").href = "../assets/agreements/xpeng/agreement.pdf";
        document.getElementById("renterAltModal").style.display = "block";
    });

    /* xpengRent.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem(
            "activeCarAndPurchaseType",
            "xpengRental"
        );
        window.location.href = "../car-rental/";
    }); */

    xpengBuy.addEventListener("click", (e) => {
        e.preventDefault();

        window.sessionStorage.setItem("activeCarAndPurchaseType", "xpengPurchase");
        window.location.href = "../purchase/";
    });

    let continueSubscribeBtn = document.getElementById("continueSubscribeBtn");
    document.getElementById("rentalFormAlt").addEventListener("submit", (e) => {
        e.preventDefault();

        continueSubscribeBtn.style.pointerEvents = "none";
        document.getElementById("continueSubscribeBtnGIF").innerHTML = '<img src="../assets/images/grey.gif" height="20px">';

        let noteEmail = document.getElementById("rentalFormAlt").subsEmail.value;
        fetchHouse
            .collection("mail-subscriptions")
            .doc("emails")
            .update({
                pushedMails: firebase.firestore.FieldValue.arrayUnion(noteEmail),
            })
            .then(() => {
                $("#continueSubscribeBtnGIF").empty();
                document.getElementById("maintenanceMessage").innerHTML =
                    '<div class="alert-success">' +
                    'Your email has been registered, we will notify you soon as we resume accepting orders, please wait... <img src="../assets/images/grey.gif" height="30px">' +
                    "</div>";

                setTimeout(() => {
                    window.location.reload();
                }, 8000);
            })
            .catch((error) => {
                continueSubscribeBtn.style.pointerEvents = "auto";
                $("#continueSubscribeBtnGIF").empty();
                document.getElementById("maintenanceMessage").innerHTML =
                    '<div class="alert-danger">' +
                    "An error occurred, we could not log your email at this time, please check your connection and try again: " +
                    error +
                    "</div>";
            });
    });
})();
