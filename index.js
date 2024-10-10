document.getElementById('submit-form').addEventListener('submit', function(event) {
    event.preventDefault();

   
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const subject = this.subject.value.trim();
    const message = this.message.value.trim();

    let valid = true;

    
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required.';
        valid = false;
    }

   
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required.';
        valid = false;
    }

    
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        valid = false;
    }

    
    console.log("Form valid:", valid);

   
    if (valid) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwxtx65ZbdHWAmLkYzQfkFsMVf3MnIOSeNtrWwGQo_cdHtz7FhwsUwqcHkrmexFTcPv/exec",
            data: $(this).serialize(),
            method: "post",
            success: function(response) {
                alert("Form submitted successfully");
                window.location.reload();
            },
            error: function(err) {
                alert("Something went wrong");
                console.error(err); 
            }
        });
    }
});
