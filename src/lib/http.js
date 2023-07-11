// lib/http.js

export const httpGet = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`HTTP GET request failed: ${error.message}`);
  }
};

export const httpPatch = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`HTTP PATCH request failed: ${error.message}`);
  }
};
