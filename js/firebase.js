// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJsCQvNBSiTzvL-Be58MIavlS7OpCj5-Q",
  authDomain: "eastkaraoke.firebaseapp.com",
  databaseURL: "https://eastkaraoke-default-rtdb.firebaseio.com",
  projectId: "eastkaraoke",
  storageBucket: "eastkaraoke.firebasestorage.app",
  messagingSenderId: "600984013174",
  appId: "1:600984013174:web:2abf800db75a1b70cf1257",
  measurementId: "G-8NN7HS6SR1"
};

// Initialize Firebase
try {
  // Initialize Firebase if it hasn't been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
  }
  
  // Initialize database
  const db = firebase.database();
  
  // Make db globally available
  window.db = db;
  console.log("Database initialized", db);
} catch (error) {
  console.error("Firebase initialization error:", error);
  alert("Error initializing Firebase. Please check console for details.");
}

// Function to check Firebase status
function checkFirebaseStatus() {
  try {
    return !!window.db;
  } catch (e) {
    console.error('Firebase check failed:', e);
    return false;
  }
}

// Function to wait for Firebase to be ready
function waitForFirebase(callback, timeout = 5000) {
  const startTime = Date.now();
  
  function check() {
    if (window.db) {
      console.log("✅ Firebase is ready");
      callback();
    } else if (Date.now() - startTime < timeout) {
      setTimeout(check, 100);
    } else {
      console.error("⏱️ Firebase initialization timeout");
    }
  }
  
  check();
}