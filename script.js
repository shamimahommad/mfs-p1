//login button function
document.getElementById('login-btn')
    .addEventListener('click', function (e) {
        e.preventDefault;
        const mobileNumber = 123456789;
        const pinNumber = 1234;

        //get number input value
        const mobileNumberValue = document.getElementById('mobile-number').value;
        //convert to int
        const mobileNumberValueConverted = parseInt(mobileNumberValue);

        //get pin value
        const pinNumberValue = document.getElementById('pin-number').value;
        // convert to int
        const pinNumberValueConverted = parseInt(pinNumberValue);

        if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
            // console.log('all value matched');      
            window.location.href = './home.html'
        }
        else {
            // console.log('Invalid');
            alert("Invalid Credentials");
        }

    })