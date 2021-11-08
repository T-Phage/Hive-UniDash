(function () {

    let purchaseType = sessionStorage.getItem('purchaseType');
    if (purchaseType === 'EV460BuyHirePurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'EV460 SUV<div class="centerMan" style="color: red">Hire Purchase</div>';
        document.getElementById('hirePurchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('purchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('purchaseAgreement').disabled = true;

    }

    if (purchaseType === 'Cherry3XEBuyHirePurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'Cherry 3XE SUV <div style="color: red" class="centerMan">Hire Purchase</div>';
        document.getElementById('hirePurchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('purchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('purchaseAgreement').disabled = true;

    }

    if (purchaseType === 'Lefan650evBuyHirePurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'Lefan 650ev Sedan<div class="centerMan" style="color: red">Hire Purchase</div>';
        document.getElementById('hirePurchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('purchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('purchaseAgreement').disabled = true;

    }

    if (purchaseType === 'BYDBuyHirePurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'BYD Sedan<div class="centerMan" style="color: red">Hire Purchase</div>';
        document.getElementById('hirePurchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('purchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('purchaseAgreement').disabled = true;

    }

    if (purchaseType === 'iEV7LBuyHirePurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'iEV7L Sedan<div class="centerMan" style="color: red">Hire Purchase</div>';
        document.getElementById('hirePurchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('purchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('purchaseAgreement').disabled = true;

    }

    if (purchaseType === 'hatchBuyHirePurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'Hatch Back/Coupe<div class="centerMan" style="color: red">Hire Purchase</div>';
        document.getElementById('hirePurchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('purchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('purchaseAgreement').disabled = true;

    }

    if (purchaseType === 'EV460BuyPurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'EV460 SUV<div class="centerMan" style="color: red">Outright Purchase</div>';
        document.getElementById('purchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('hirePurchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('hirePurchaseAgreement').disabled = true;

    }

    if (purchaseType === 'Cherry3XEBuyPurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'Cherry 3XE SUV<div class="centerMan" style="color: red">Outright Purchase</div>';
        document.getElementById('purchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('hirePurchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('hirePurchaseAgreement').disabled = true;

    }

    if (purchaseType === 'Lefan650evBuyPurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'Lefan 650ev Sedan<div class="centerMan" style="color: red">Outright Purchase</div>';
        document.getElementById('purchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('hirePurchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('hirePurchaseAgreement').disabled = true;

    }

    if (purchaseType === 'BYDBuyPurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'BYD Sedan<div class="centerMan" style="color: red">Outright Purchase</div>';
        document.getElementById('purchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('hirePurchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('hirePurchaseAgreement').disabled = true;

    }

    if (purchaseType === 'iEV7LBuyPurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'iEV7L Sedan<div class="centerMan" style="color: red">Outright Purchase</div>';
        document.getElementById('purchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('hirePurchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('hirePurchaseAgreement').disabled = true;

    }

    if (purchaseType === 'hatchBuyPurchase') {

        document.getElementById('purchaseTypeChosen').innerHTML = 'Hatch Back/Coupe<div class="centerMan" style="color: red">Outright Purchase</div>';
        document.getElementById('purchaseAgreementChosen').innerHTML = '<img src="../assets/images/chosen.gif">';
        document.getElementById('hirePurchaseAgreement').style.pointerEvents = 'none';
        document.getElementById('hirePurchaseAgreement').disabled = true;

    }

    document.getElementById('hirePurchaseAgreement').addEventListener('click', (e) => {

        e.preventDefault();

        if (purchaseType === 'EV460BuyHirePurchase') {

            document.getElementById('agreementHeader').innerHTML = 'EV460 SUV';
            document.getElementById('vehicleImg').src = '../assets/images/img/FAW.png';
            let pdfZone = document.getElementById('pdfZone');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/ev460/purchase.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/ev460/purchase.pdf", pdfZone, options);
            document.getElementById('docDownloadHirePurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/ev460/purchase.pdf';

            });

        } else if (purchaseType === 'Cherry3XEBuyHirePurchase') {

            document.getElementById('agreementHeader').innerHTML = 'Cherry 3XE SUV';
            document.getElementById('vehicleImg').src = '../assets/images/img/Chery-1.png';
            let pdfZone = document.getElementById('pdfZone');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/cherry/purchase.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/cherry/purchase.pdf", pdfZone, options);
            document.getElementById('docDownloadHirePurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/cherry/purchase.pdf';

            });

        } else if (purchaseType === 'Lefan650evBuyHirePurchase') {

            document.getElementById('agreementHeader').innerHTML = 'Lefan 650ev Sedan';
            document.getElementById('vehicleImg').src = '../assets/images/img/LEfan-36-Sedan-Side.jpg';
            let pdfZone = document.getElementById('pdfZone');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/lefan/purchase.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/lefan/purchase.pdf", pdfZone, options);
            document.getElementById('docDownloadHirePurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/lefan/purchase.pdf';

            });

        } else if (purchaseType === 'BYDBuyHirePurchase') {

            document.getElementById('agreementHeader').innerHTML = 'BYD Sedan';
            document.getElementById('vehicleImg').src = '../assets/images/img/BYD.png';
            let pdfZone = document.getElementById('pdfZone');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/byd/purchase.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/byd/purchase.pdf", pdfZone, options);
            document.getElementById('docDownloadHirePurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/byd/purchase.pdf';

            });

        } else if (purchaseType === 'iEV7LBuyHirePurchase') {

            document.getElementById('agreementHeader').innerHTML = 'iEV7L Sedan';
            document.getElementById('vehicleImg').src = '../assets/images/img/sedan.png';
            let pdfZone = document.getElementById('pdfZone');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/iev7/purchase.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/iev7/purchase.pdf", pdfZone, options);
            document.getElementById('docDownloadHirePurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/iev7/purchase.pdf';

            });

        } else if (purchaseType === 'hatchBuyHirePurchase') {

            document.getElementById('agreementHeader').innerHTML = 'Hatch Back/Coupe';
            document.getElementById('pdfZone').src = '../assets/agreements/hatch-back/purchase.pdf';
            document.getElementById('vehicleImg').src = '../assets/images/img/ER30-1.jpg';
            let pdfZone = document.getElementById('pdfZone');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/hatch-back/purchase.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/hatch-back/purchase.pdf", pdfZone, options);
            document.getElementById('docDownloadHirePurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/hatch-back/purchase.pdf';

            });

        }

        $('#hirePurchaseAgreementModal').modal('show');

    });

    document.getElementById('purchaseAgreement').addEventListener('click', (e) => {

        e.preventDefault();

        if (purchaseType === 'EV460BuyPurchase') {

            document.getElementById('agreementHeaderOutright').innerHTML = 'EV460 SUV';
            document.getElementById('vehicleImgOutright').src = '../assets/images/img/FAW.png';
            let pdfZone = document.getElementById('pdfZoneOutright');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/ev460/outright.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/ev460/outright.pdf", pdfZone, options);
            document.getElementById('docDownloadPurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/ev460/outright.pdf';

            });

        } else if (purchaseType === 'Cherry3XEBuyPurchase') {

            document.getElementById('agreementHeaderOutright').innerHTML = 'Cherry 3XE SUV';
            document.getElementById('vehicleImgOutright').src = '../assets/images/img/Chery-1.png';
            let pdfZone = document.getElementById('pdfZoneOutright');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/cherry/outright.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/cherry/outright.pdf", pdfZone, options);
            document.getElementById('docDownloadPurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/cherry/outright.pdf';

            });

        } else if (purchaseType === 'Lefan650evBuyPurchase') {

            document.getElementById('agreementHeaderOutright').innerHTML = 'Lefan 650ev Sedan';
            document.getElementById('vehicleImgOutright').src = '../assets/images/img/LEfan-36-Sedan-Side.jpg';
            let pdfZone = document.getElementById('pdfZoneOutright');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/lefan/outright.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/lefan/outright.pdf", pdfZone, options);
            document.getElementById('docDownloadPurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/lefan/outright.pdf';

            });

        } else if (purchaseType === 'BYDBuyPurchase') {

            document.getElementById('agreementHeaderOutright').innerHTML = 'BYD Sedan';
            document.getElementById('vehicleImgOutright').src = '../assets/images/img/BYD.png';
            let pdfZone = document.getElementById('pdfZoneOutright');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/byd/outright.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/byd/outright.pdf", pdfZone, options);
            document.getElementById('docDownloadPurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/byd/outright.pdf';

            });

        } else if (purchaseType === 'iEV7LBuyPurchase') {

            document.getElementById('agreementHeaderOutright').innerHTML = 'iEV7L Sedan';
            document.getElementById('vehicleImgOutright').src = '../assets/images/img/sedan.png';
            let pdfZone = document.getElementById('pdfZoneOutright');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/iev7/outright.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/iev7/outright.pdf", pdfZone, options);
            document.getElementById('docDownloadPurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/iev7/outright.pdf';

            });

        } else if (purchaseType === 'hatchBuyPurchase') {

            document.getElementById('agreementHeaderOutright').innerHTML = 'Hatch Back/Coupe';
            document.getElementById('pdfZone').src = '../assets/agreements/hatch-back/outright.pdf';
            document.getElementById('vehicleImgOutright').src = '../assets/images/img/ER30-1.jpg';
            let pdfZone = document.getElementById('pdfZoneOutright');

            var options = {

                fallbackLink: "<p>This is a <a href='../assets/agreements/hatch-back/outright.pdf'>fallback link</a></p>",
                height: "70vh",
                pdfOpenParams: {
                    search: 'Search'
                }

            };

            PDFObject.embed("../assets/agreements/hatch-back/outright.pdf", pdfZone, options);
            document.getElementById('docDownloadPurchase').addEventListener('click', (e) => {

                e.preventDefault();
                window.location.href = '../assets/agreements/hatch-back/outright.pdf';

            });

        }

        $('#purchaseAgreementModal').modal('show');

    });

    document.getElementById('agreementBtnClose').addEventListener('click', (e) => {

        e.preventDefault();
        window.location.replace("../purchase");

    });

})();