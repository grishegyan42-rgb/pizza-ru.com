// app.js


document.getElementById('contactForm', 'number',).addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(this);
    emailjs.sendForm('service_yiuvp7n', 'template_6woq5yg', this)
        .then(function(result) {
            alert("Success!! Your query is generated in our system.");
            console.log(result.text);
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert("Error! Something went wrong.");
            console.log(error.text);
        });
});