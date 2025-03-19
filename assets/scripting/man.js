$(document).ready(function () {
    $.getJSON("assets/scripting/man.json", function (man) {
        var container = $("#container")
        man.forEach(mancard => {
            let cardData = `
                <div class="card mt-4 mb-4 gallery-card bg-black p-0" style="width: 18rem; color: goldenrod;">
                    <img src="assets/img/${mancard.image}" class="card-img-top" alt="..." height="200px">
                    <div class="card-body">
                        <div class="d-flex  justify-content-between"><h5 class="card-title">${mancard.title}</h5><h6>Rs:999</h6></div>
                        <p class="card-text">${mancard.description}</p>
                        <a href="#" class="btn " style="background:  goldenrod;color: #000; font-weight: bold; ">Add To Cart</a>
                    </div>
                </div>
            `;
            container.append(cardData)
            
        });
    
    });
});