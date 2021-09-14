
const firebaseConfig = {
      apiKey: "AIzaSyBQPviQAwSHNzrEzefjAAtQ4tKxNipmADM",
      authDomain: "kwitter-adip.firebaseapp.com",
      databaseURL: "https://kwitter-adip-default-rtdb.firebaseio.com",
      projectId: "kwitter-adip",
      storageBucket: "kwitter-adip.appspot.com",
      messagingSenderId: "765587075524",
      appId: "1:765587075524:web:36fa66a06b881a5345f491"
    };

    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
