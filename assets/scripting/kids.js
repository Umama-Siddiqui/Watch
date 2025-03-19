$(document).ready(function () {
    $.getJSON("assets/scripting/kids.json", function (kids) {
        var container3 = $("#container3")
        kids.forEach(kidscard => {
            let kidscardData = `
                <div class="card mt-4 mb-4 gallery-card bg-black p-0" style="width: 18rem; color: goldenrod;">
                    <img src="assets/img/${kidscard.image}" class="card-img-top" alt="..." height="200px">
                    <div class="card-body">
                        <div class="d-flex  justify-content-between"><h5 class="card-title">${kidscard.title}</h5><h6>Rs:999</h6></div>
                        <p class="card-text">${kidscard.description}</p>
                        <a href="#" class="btn " style="background:  goldenrod;color: #000; font-weight: bold; ">Add To Cart</a>

                    </div>
                </div>
            `;
            container3.append(kidscardData)
            
        });
    
    });
});