$(document).ready(function () {
    $.getJSON("assets/scripting/women.json", function (women) {
        var container2 = $("#container2")
        women.forEach(womencard => {
            let womencardData = `
                <div class="card mt-4 mb-4 gallery-card bg-black p-0" style="width: 18rem; color: goldenrod;">
                    <img src="assets/img/${womencard.image}" class="card-img-top" alt="..." height="200px">
                    <div class="card-body">
                        <div class="d-flex  justify-content-between"><h5 class="card-title">${womencard.title}</h5><h6>Rs:999</h6></div>
                        <p class="card-text">${womencard.description}</p>
                        <a href="#" class="btn " style="background:  goldenrod;color: #000; font-weight: bold; ">Add To Cart</a>

                    </div>
                </div>
            `;
            container2.append(womencardData)
            
        });
    
    });
});