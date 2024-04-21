document.addEventListener("DOMContentLoaded", function() {
    // Function to redirect to the page for uploading picture and providing product name
    function redirectToUploadPage() {
        window.location.href = "upload.html"; // Assuming the upload page is named upload.html
    }

    // Event listeners for the buttons on the homepage
    var buttons = document.querySelectorAll(".button1, .button2");
    
    buttons.forEach(function(button) {
        button.addEventListener("click", redirectToUploadPage);
    });

    // Function to handle sending data to the cloud location
    function sendDataToCloud(picture, productName) {
        // Assuming you have a function to send data to the cloud location
        // Replace this with your actual implementation
        console.log("Sending data to the cloud:");
        console.log("Picture:", picture);
        console.log("Product Name:", productName);
    }

    // Event listener for the send button on the upload page
    document.getElementById("sendButton").addEventListener("click", function() {
        var picture = document.getElementById("pictureInput").files[0];
        var productName = document.getElementById("productNameInput").value;
        
        // Call the function to send data to the cloud location
        sendDataToCloud(picture, productName);
    });
});
