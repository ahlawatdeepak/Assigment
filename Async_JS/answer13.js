// Start the loading message interval
const loadingInterval = setInterval(() => {
  console.log("Loading...");
}, 1000); // every 1 second

// Stop the loading after 5 seconds and show final message
setTimeout(() => {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000); // after 5 seconds
