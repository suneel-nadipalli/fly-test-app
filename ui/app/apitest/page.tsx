"use server";

import React from 'react'

const APITestPage = async () => {
  let data = { status: "API unavailable" }; // Default fallback message

  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    console.log("API URL:", apiURL);
    
    if (!apiURL) {
      console.log("NEXT_PUBLIC_API_URL is not defined");
    }

    const res = await fetch(`${apiURL}/ping`);

    if (!res.ok) {
      console.log(`API responded with status: ${res.status}`);
    }

    data = await res.json();

  } catch (error) {
    console.error("Error fetching API:", error);
  }

  return (
    <>
      <div>Welcome to the API Test Page</div>
      <div>Message From API: {data.status}</div>
    </>
  );
};

export default APITestPage;
