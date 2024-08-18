// Replace token and url with the provided ones
const token = process.env.BEARER_TOKEN;
const url = process.env.API_URL;

// Cursor from first response with just the token
let nextCursor = "94885f20";

// Local server to make requests to prevent CORS issues
const corsAnywhereUrl = "http://localhost:8080/";

const task = async () => {
  // Try to fetch from API using token and cursor
  try {
    const res = await fetch(corsAnywhereUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cursor: nextCursor }),
    });

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    } else {
      // If no errors, extract cursor from response and update nextCursor variable
      const data = await res.json();
      console.log(data);
      nextCursor = data.nextCursor;

      // If nextCursor is not null, run the function with short timeout in between requests
      if (nextCursor) {
        setTimeout(task, 1000);
      } else {
        console.log(data.flag);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Run the function
task();
