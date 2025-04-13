<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCdmil7aQ7J9LnIzEYFoQC7tjR8gW6_w8k",
    authDomain: "build-a-login.firebaseapp.com",
    projectId: "build-a-login",
    storageBucket: "build-a-login.firebasestorage.app",
    messagingSenderId: "1040383076896",
    appId: "1:1040383076896:web:a71fb8f6057cc41549ea45",
    measurementId: "G-RYM1LH636T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>