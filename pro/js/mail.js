const firebaseConfig = {
    apiKey: "AIzaSyAqTr5tmwXhdCxVNiZT7MVhR_gJZpUgwFY",
    authDomain: "my-personal-project-75db4.firebaseapp.com",
    databaseURL: "https://my-personal-project-75db4-default-rtdb.firebaseio.com",
    projectId: "my-personal-project-75db4",
    storageBucket: "my-personal-project-75db4.appspot.com",
    messagingSenderId: "94815822341",
    appId: "1:94815822341:web:d05a256700ee0711a3b26c"
  };

  //initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize database
var contactFormDB = firebase.database().ref(contactForm);

document.getElementById("contactForm").addEventListener("submit",submitForm);


function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var emailid = getElementVal('emailid');
  var title = getElementVal('title');
  var messagecontaint = getElementVal('messagecontaint');

  saveMessages(name, emailid, title, messagecontaint);
}

const saveMessages = (name, emailid, title, messagecontaint) => {
   var newContactForm = contactFormDB.push();

   newContactForm.set({
     name: name,
     emailid: emailid,
     title: title,
     messagecontaint: messagecontaint,
   });
}
;
const getElementVal = (id) => {
  return document.getElementById(id).value;
}