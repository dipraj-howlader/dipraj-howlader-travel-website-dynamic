const exploreButton = document.getElementById('explore-now');
const longin = document.getElementById('container');
const showClass = document.getElementById('showClass');
const login = document.getElementById('login');
const form = document.getElementById('my-form');
const emailInput = document.getElementById('email'); // Get reference to the email input element
const passwordInput = document.getElementById('password');
const show = document.getElementById('show');
// new file code
const infoButton = document.querySelector('.info-button');
  const editButton = document.querySelector('.edit-button');
  const datsShow = document.getElementById('data');
const added = document.getElementById('added');
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
      added.style.display = 'block';
      setTimeout(function() {
        added.style.display = 'none';
      }, 4000);
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



const buttonContainer = document.getElementById("button-container");

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
                     buttonContainer.style.display='block';
                     buttonContainer.style.display='flex';
                     userForm.style.display = 'block';
                     datsShow.style.display='none';
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



  // Add a click event listener to the infoButton
  infoButton.addEventListener('click', function() {
    console.log('Info button clicked');
    userForm.style.display = 'block';
    datsShow.style.display = 'none';
    // Add your code here to perform an action when the infoButton is clicked
  });

  // Add a click event listener to the editButton
  editButton.addEventListener('click', function() {
    console.log('Edit button clicked');
    userForm.style.display = 'none';
    datsShow.style.display='block';
    // Add your code here to perform an action when the editButton is clicked
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getData.php', true);
    xhr.responseType = 'json';
    xhr.send();

    // Handle the response when it comes back
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Retrieve the JSON data from the response
        var data = xhr.response;

        // Get the table body element where we will display the data
        var tableBody = document.getElementById('data');

        // Loop through the data and create a new row for each record
        for (var i = 0; i < data.length; i++) {
          // Create a new row element
          var row = document.createElement('tr');

          // Create a cell for each column and add the data to the cell
          var nameCell = document.createElement('td');
          nameCell.textContent = data[i].name;
          row.appendChild(nameCell);

          var emailCell = document.createElement('td');
          emailCell.textContent = data[i].email;
          row.appendChild(emailCell);

          var phoneCell = document.createElement('td');
          phoneCell.textContent = data[i].phone;
          row.appendChild(phoneCell);

          var addressCell = document.createElement('td');
          addressCell.textContent = data[i].address;
          row.appendChild(addressCell);

          var countryCell = document.createElement('td');
          countryCell.textContent = data[i].country;
          row.appendChild(countryCell);

          // Add the new row to the table body
          tableBody.appendChild(row);
        }
      }
    };
  });


