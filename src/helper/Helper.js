export function getCookie(key) {
  // Split all cookies into an array of individual cookies
  const cookies = document.cookie.split(";");

  // Loop through each cookie
  for (let i = 0; i < cookies.length; i++) {
    // Split the cookie into its key and value parts
    const cookieParts = cookies[i].trim().split("=");

    // Check if the cookie's key matches the provided key
    if (cookieParts[0] === key) {
      // Return the cookie's value
      return cookieParts[1];
    }
  }
  // Return null if the cookie was not found
  return null;
}

// Function to set or update a cookie
export function setCookie(key, value, daysToExpire) {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + daysToExpire * 24 * 60 * 60 * 1000
  );
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

