<!DOCTYPE html>
<html>

<head>
    <title>Sign In</title>
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js "></script>
    <script src="https://www.gstatic.com/firebasejs/4.8.2/firebase-app.js "></script>
    <script src="https://www.gstatic.com/firebasejs/4.8.2/firebase-auth.js "></script>
    <script type="text/javascript">
    var config = {
        apiKey: "AIzaSyDCLWq4ztLhiD3biupsmc1RbU07xyDT7zE",
        authDomain: "webventeer.firebaseapp.com",
        databaseURL: "https://webventeer.firebaseio.com",
        projectId: "webventeer",
        storageBucket: "",
        messagingSenderId: "120444904530"
    };
    firebase.initializeApp(config);
    
    </script>
    <script src="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.js"></script>
<link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />
    <script type="text/javascript">
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: 'index.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    </script>
</head>

<body>
    <h1>Sign In quickstart</h1>
    <div id="firebaseui-auth-container"></div>
</body>

</html>