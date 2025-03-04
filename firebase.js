// Import the Firebase app and Firestore modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


// Firebase configuration (replace with your Firebase project credentials)
const firebaseConfig = {

   
  
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
    Member: document.getElementById("radio").value || 'No',
    rollNumber: document.getElementById("rollNumber").value || "N/A", // Default to "N/A" if empty


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
        close: true
    }).showToast();
    registrationForm.reset(); // Clear the form after submission
  } catch (error) {
    Toastify({
        text: "Failed to submit registration. Please try again.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "red",
        close: true
    }).showToast();
    alert("Failed to submit registration. Please try again.");
  }
});
