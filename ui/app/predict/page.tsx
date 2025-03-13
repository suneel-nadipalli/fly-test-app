"use client";

import { useState, useEffect } from "react";

export default function DynamicPage() {
  const [feat1, setFeat1] = useState("");
  const [feat2, setFeat2] = useState("");
  const [feat3, setFeat3] = useState("");
  const [feat4, setFeat4] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure this runs only on the client
  }, []);

  if (!isMounted) return null; // Prevents rendering until after hydration

  const handlePredict = async () => {
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [feat1, feat2, feat3, feat4], // Send 4 feature values
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to get prediction");
      }
  
      const data = await response.json();
      
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Next.js!</h1>

      <input
        type="text"
        placeholder="Feature Value 1"
        value={feat1}
        onChange={(e) => setFeat1(e.target.value)}
        className="p-2 border rounded-md mb-4 text-black"
        
      />

      
      <input
        type="text"
        placeholder="Feature Value 2"
        value={feat2}
        onChange={(e) => setFeat2(e.target.value)}
        className="p-2 border rounded-md mb-4 text-black"
        
      />

      <input
        type="text"
        placeholder="Feature Value 3"
        value={feat3}
        onChange={(e) => setFeat3(e.target.value)}
        className="p-2 border rounded-md mb-4 text-black"
        
      />

      <input
        type="text"
        placeholder="Feature Value 4"
        value={feat4}
        onChange={(e) => setFeat4(e.target.value)}
        className="p-2 border rounded-md mb-4 text-black"
      />

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => handlePredict()}
      >
        Greet Me
      </button>
    </div>
  );
}
