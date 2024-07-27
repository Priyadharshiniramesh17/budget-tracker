function getstart() {
    const email = document.getElementById('email').value;
    const emailPattern = /@(\w.*)\.(\w{2,3})/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        window.location.href = 'Budget.html'; 
    }
}