/* javascript lives here */
"use strict"; 

console.log("App Started");

// IIFE
(function() {
    let data = {
        "games": [
            {
                "name": "Fallout 4",
                "cost": 69.99,
                "rating": 4.3
            },
            {
                "name": "Overwatch",
                "cost": 49.99,
                "rating": 5.0
            },
            {
                "name": "Diablo 3",
                "cost": 79.99,
                "rating": 4.5
            }
        ]
    };

    console.log(`First games: ${data.games[0].name}`);

    /* INTERPOLATION */
    // console.info(`Page title: ${document.title}`); 
    /* --------------------------------------------- */
    if(document.title == "Home") {
        let gameListBody = document.getElementById("gameListBody");
        //
        data.games.forEach(function(game) {
            // inject "template row" inside the dataRows div tag
            let newRow = document.createElement("tr");
            newRow.innerHTML = `
                <tr>
                    <td>${game.name}</td>
                    <td class="text-center">${game.cost}</td>
                    <td class="text-center">${game.rating}</td>
                </tr>
            `;
            gameListBody.appendChild(newRow);
        }, this);
    } // end if Home
    else if (document.title == "Project") {
       
        // step 1 - setup references to the elements you need to hook into
        let hideButton = document.getElementById("hideButton");
        let halfSizeButton = document.getElementById("halfSizeButton");
        let treeQuarterSizeButton = document.getElementById("treeQuarterSizeButton");
        let showButton = document.getElementById("showButton");
        let firstProjectImg = document.getElementById("firstProjectImg");

         // OPTION 1 //
        // step 2 - setup event listeners (register event listeners) for each elements
        // hideButton.addEventListener("click", function() {
        //     firstProjectImg.style.display = 'none'; 
        //     console.log(`width: `);
        // });

        // halfSizeButton.addEventListener("click", function() {
        //     firstProjectImg.style.maxWidth = '50%'; 
        // });

        // treeQuarterSizeButton.addEventListener("click", function() {
        //     firstProjectImg.style.maxWidth = '75%'; 
        //     console.log(firstProjectImg.style.width);
        // });

        // showButton.addEventListener("click", function() {
        //     firstProjectImg.style.display = 'block'; 
        // });

        // OPTION 2 //
        // step 2 - create one event listener
        let buttonArray = [hideButton, halfSizeButton, treeQuarterSizeButton, showButton];
        buttonArray.forEach(function(button) {
            button.addEventListener("click", function(event) {
                // store which button has been clicked in currentButton;
                // let currentButton = button.getAttribute("id"); <-- one way to get the reference to the button
                let currentButton = button;
                switch (currentButton.getAttribute("id")) {
                    case "hideButton":
                        firstProjectImg.style.display = "none";
                    break;
                    case "halfSizeButton":
                        firstProjectImg.style.display = "block";
                        firstProjectImg.style.maxWidth = "50%";
                    break;
                    case "treeQuarterSizeButton":
                        firstProjectImg.style.display = "block";
                        firstProjectImg.style.maxWidth = "75%";
                    break;
                    case "showButton":
                        firstProjectImg.style.display = "block";
                        firstProjectImg.style.maxWidth = "100%";
                    break;
                }
            });
        }, this);

    }
    else if (document.title == "Contact") {

    }

})();


