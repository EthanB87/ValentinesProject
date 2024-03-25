
function showMessage(response) {

    if(response === "No"){
        const noBtn = document.getElementById("btn_no");
        const container = document.querySelector(".container");
        const maxWidth = window.innerWidth - btn_no.offsetWidth;
        const maxHeight = window.innerHeight - btn_no.offsetHeight;

        btn_no.style.position = "absolute";

        // Change image source to Sad Peach
        document.getElementsByClassName("image")[0].src = "img/sadpeach.jpg";

        // Generate random coordinates for the no button
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        // Apply new coordinates to the button
        btn_no.style.left = randomX + "px";
        btn_no.style.top = randomY + "px";

        // Update text content and hide name message
        document.getElementById("question").textContent =
            "The no button is just for visuals";
        document.getElementById("name").style.display = "none";
    }

    if (response === "Yes") {
        // Remove name message and no button
        document.getElementById("name").remove();
        document.getElementById("btn_no").remove();

        // Update text content, show message, and change image source to Happy Peach
        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "Yay!! I'll see you on the 14th Sweetheart";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("image")[0].src = "img/Excitedpeach.jpg";

        // Remove yes button
        document.getElementById("btn_yes").remove();
    }
}