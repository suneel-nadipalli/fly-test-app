"use server";

import React from 'react'

const APITestPage = async () => {

  const apiURL = process.env.API_URL;

  return (
    <>
      <div>Welcome to the API Test Page - API Fix!</div>
      <div>Message From API: {apiURL}</div>
    </>
  );
};

export default APITestPage;

