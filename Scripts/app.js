/* javascript lives here */
"use strict"; 

console.log("App Started");

// IIFE
(function() {
    /* INTERPOLATION */
    console.info(`Page title: ${document.title}`); 
    /* --------------------------------------------- */
    if(document.title == "Home") {
    // make a reference to H1 element on the index page
    // initialize my firstHeading variable
    let firstHeading = document.getElementById("firstH1");

    firstHeading.style.color = "#0000ff";
    firstHeading.style.fontWeight = "300";
    firstHeading.style.fontStyle = "italic";

    // i can use my firstHeading variable as if it Is the element
    // console.log(firstHeading.textContent);

    // firstHeading.textContent = "bla bla bla";

    // 3 steps of injecting content to the page
    // Step 1 - create a reference to an ELEMENT
    let firstParagraph = document.getElementById("firstParagraph");
    // Step 2 - Create a variable that contains your content
    let myContent = "It was a sunny day in Florida. It felt great...";
    // Step 3 - Assign the variable with your content to the text content property of the reference variable
    firstParagraph.textContent = myContent;

    let secondParagraph = document.getElementById("secondParagraph");
    let myHtmlContent = "<h2>Second Heading</h2>" 
                        + "<p>This is an inner paragraph to the second paragraph</p>";
    secondParagraph.innerHTML = myHtmlContent;                    

    // create a reference to the button on the page index.html
    let clickMeButton = document.getElementById("clickMeButton");

    // add an event listener - for the click eeent and call the clickMeButton_Click function 
    clickMeButton.addEventListener("click", clickMeButton_Click);

    // click function - used as an event handler
    function clickMeButton_Click() {
        console.log("clicked");
    }
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


