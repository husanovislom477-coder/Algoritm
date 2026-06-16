var maketAvtoMaulumotlari = [
    { nomi: "Ford Transit - 2021", turi: "In Stock", narxi: "$22,000", milya: "2,500 mi", yoqilgi: "Diesel", uzatma: "Automatic", rasm: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400" },
    { nomi: "New BMW 4 Series Coupe", turi: "In Stock", narxi: "$45,900", milya: "120 mi", yoqilgi: "Gasoline", uzatma: "Automatic", rasm: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400" },
    { nomi: "Kia Sportage Crossover", turi: "In Stock", narxi: "$32,500", milya: "4,300 mi", yoqilgi: "Hybrid", uzatma: "Automatic", rasm: "https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&q=80&w=400" },
    { nomi: "Audi A5 Sportback Wagon", turi: "In Stock", narxi: "$48,000", milya: "0 mi", yoqilgi: "Gasoline", uzatma: "Automatic", rasm: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=400" },
    { nomi: "Nissan Rogue SUV 2023", turi: "In Stock", narxi: "$28,400", milya: "18,500 mi", yoqilgi: "Gasoline", uzatma: "Manual", rasm: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400" },
    { nomi: "Porsche Cayenne Coupe", turi: "In Stock", narxi: "$112,000", milya: "800 mi", yoqilgi: "Gasoline", uzatma: "Automatic", rasm: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400" },
    { nomi: "Toyota RAV4 Prime Hybrid", turi: "In Stock", narxi: "$41,200", milya: "2,100 mi", yoqilgi: "Hybrid", uzatma: "Automatic", rasm: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=400" },
    { nomi: "Chevrolet Malibu Sedan", turi: "In Stock", narxi: "$24,500", milya: "32,000 mi", yoqilgi: "Gasoline", uzatma: "Automatic", rasm: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=400" }
];

window.onload = function() {
    var gridJoyi = document.getElementById("main-cars-container");
    gridJoyi.innerHTML = ""; 

    for (var i = 0; i < maketAvtoMaulumotlari.length; i++) {
        var avto = maketAvtoMaulumotlari[i];

        var htmlKodi = "<div class='car-box'>" +
            "<img src='" + avto.rasm + "'>" +
            "<div class='car-box-body'>" +
                "<span class='car-tag'>" + avto.turi + "</span>" +
                "<h4>" + avto.nomi + "</h4>" +
                "<div class='car-box-meta'>" +
                    "<span><i class='fa-solid fa-gauge'></i> " + avto.milya + "</span> | " +
                    "<span><i class='fa-solid fa-gas-pump'></i> " + avto.yoqilgi + "</span> | " +
                    "<span><i class='fa-solid fa-gears'></i> " + avto.uzatma + "</span>" +
                "</div>" +
                "<div class='car-box-bottom'>" +
                    "<span class='price-tag'>" + avto.narxi + "</span>" +
                    "<a href='#' class='link-btn'>View Details ➔</a>" +
                "</div>" +
            "</div>" +
        "</div>";

        gridJoyi.innerHTML += htmlKodi;
    }
};