import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">React + Tailwind</h1>
        <p className="text-gray-700 mb-6">
          This is a starter template configured with Tailwind CSS, ESLint and Prettier.
        </p>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Primary
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-100">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
