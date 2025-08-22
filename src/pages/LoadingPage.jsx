// components/LoadingPage.jsx
import React from "react";

export default function LoadingPage({ progress }) {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <p className="text-2xl font-semibold mb-4 text-gray-800">
        Loading... {progress}%
      </p>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
