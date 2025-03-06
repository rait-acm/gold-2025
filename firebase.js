// Import the Firebase app and Firestore modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase configuration (replace with your Firebase project credentials)
const firebaseConfig = {
  apiKey: "AIzaSyBeGepC3FDZxnBU9Tq287CVw-K2ts6Iuh0",
  authDomain: "acm-form-59923.firebaseapp.com",
  projectId: "acm-form-59923",
  storageBucket: "acm-form-59923.firebasestorage.app",
  messagingSenderId: "1025527183119",
  appId: "1:1025527183119:web:c6a0d7371858e1e426307a",
  measurementId: "G-2GNX07B8LN",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submission logic
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Gather form data
  const formData = {
    FirstName: document.getElementById("firstname").value,
    LastName: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    college: document.getElementById("college").value,
    departmentYear: document.getElementById("dept").value,
    ACMID: document.getElementById("member2").value || "Not Provided",
    transactionId: document.getElementById("transactionId").value,
    Member:
      document.querySelector("input[name='acm_member']:checked").value || "No",
    rollNumber: document.getElementById("rollNumber").value || "N/A", // Default to "N/A" if empty
    ACMChapter: document.getElementById("acmChapter").value || "Not Selected", // Capture ACM student chapter selection
  };

  try {
    // Save data to Firestore under a unique document ID
    const docRef = doc(db, "gold", formData.transactionId);
    await setDoc(docRef, formData);
    Toastify({
      text: "Registration successfully submitted!",
      duration: 3000,
      gravity: "top", // Toast position: "top" or "bottom"
      position: "center", // "left", "center", or "right"
      backgroundColor: "green",
      close: true,
    }).showToast();
    registrationForm.reset(); // Clear the form after submission
  } catch (error) {
    Toastify({
      text: "Failed to submit registration. Please try again.",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "red",
      close: true,
    }).showToast();
    alert("Failed to submit registration. Please try again.");
  }
});
