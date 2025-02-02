"use server";

import React from 'react'

const fetchAPI = async () => {
  try {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    if (!apiURL) {
      throw new Error("NEXT_PUBLIC_API_URL is not defined");
    }

    const res = await fetch(`${apiURL}/ping`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching API:", error);
    return { status: "Error fetching API" };
  }
};

const APITestPage = async () => {
  const data = await fetchAPI(); // ✅ Fetching happens before render

  return (
    <>
      <div>Welcome to the API Test Page</div>
      <div>Message From API: {data.status}</div>
    </>
  );
};

export default APITestPage;

