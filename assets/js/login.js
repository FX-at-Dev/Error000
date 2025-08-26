// Get the login form
const loginForm = document.getElementById('login-form');

// Add event listener for form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate credentials
  if (username === 'stuadmin' && password === 'stu123') {
    // Save login flag
    sessionStorage.setItem("isLoggedIn", "student");
    // Redirect to Student Dashboard
    window.location.href = '/Student/student-dashboard.html';

  } else if (username === 'admin' && password === 'admin') {
    // Save login flag
    sessionStorage.setItem("isLoggedIn", "teacher");
    // Redirect to Teacher Dashboard
    window.location.href = '/Teacher/teacher-dashboard.html';
  } else {
    // Display an error message
    alert('Invalid username or password. Please try again.');
  }
});

