//your JS code here. If required.
// script.js

document.getElementById("btn").addEventListener("click", async function () {
  // Get user input
  const textInput = document.getElementById("text").value;
  const delayInput = document.getElementById("delay").value;

  // Validate inputs
  if (!textInput || !delayInput) {
    alert("Please enter both text and delay.");
    return;
  }

  // Convert delay to milliseconds
  const delayMilliseconds = parseInt(delayInput) * 1000;

  // Call the async function
  try {
    const result = await delayedMessage(textInput, delayMilliseconds);
    document.getElementById("output").innerText = result;
  } catch (error) {
    console.error("Error:", error);
  }
});

// Async function with a delay
async function delayedMessage(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}
