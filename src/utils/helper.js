// helper for reusable functions

export const clearHTMLTag = (str) => {
  // Create a temp div element
  var tempDivElement = document.createElement("div");
  // Set the HTML content with param value
  tempDivElement.innerHTML = str;
  // Return the text property of the element
  return tempDivElement.textContent || tempDivElement.innerText || "";
};
