// helper for reusable functions

/**
 * Clear HTML tags and entities into clean string
 * @param str ex: <span>ABCDE</span>
 * @returns ABCDE
 */
export const clearHTMLTag = (str) => {
  // Create a temp div element
  var tempDivElement = document.createElement("div");
  // Set the HTML content with param value
  tempDivElement.innerHTML = str;
  // Return the text property of the element
  return tempDivElement.textContent || tempDivElement.innerText || "";
};

export const conditionalFilter = (data) => {};
