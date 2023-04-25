const exploreButton = document.getElementById('explore-now');
const longin = document.getElementById('container');
const showClass = document.getElementById('showClass');
const login = document.getElementById('login');
const form = document.getElementById('my-form');
const emailInput = document.getElementById('email'); // Get reference to the email input element
const passwordInput = document.getElementById('password');
const show = document.getElementById('show');
// new file code

const SubmitForm = document.querySelector('#submit-form');


SubmitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email1').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;
  const country = document.querySelector('#country').value;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'index.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  const formData = `name=${name}&email=${email}&phone=${phone}&address=${address}&country=${country}`;
  xhr.send(formData);
});

// Add a click event listener to the explore button
exploreButton.addEventListener('click', function() {
  // Your code to handle the click event goes here
  longin.style.display = 'block';
  longin.style.display="flex";
  showClass.style.display="none";
});

// login.addEventListener('click', function(){
//     longin.style.display = 'none';
// } )
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  const email = emailInput.value; // Get the value of the email input
  const pass = passwordInput.value; // Get the value of the password input
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'index.php', true);

  // Define the callback function
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var data = JSON.parse(xhr.responseText);
          if((email===data[0].username) && (pass===data[0].password) ){
            longin.style.display= 'none';
            show.style.display = 'none';
                     console.log("CONNECTED");
                     userForm.style.display = 'block';
          }
          else{
            console.log(xhr.readyState + " "+xhr.status);
            console.log("wrong");                     
            show.style.display = 'block';

            show.innerHTML = `        <h1>Wrong.Try again</h1>`
          }

      }
      else{
        console.log("connection lost")
      }
  };
  
  // Send the request
  xhr.send();



});
