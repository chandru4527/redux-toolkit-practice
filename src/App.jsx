import React from "react";
import Counter from "./pages/counter";
import Auth from "./pages/auth";

const App = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">
        Redux State Management
      </h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Counter />
        <Auth />
      </div>
    </div>
  );
};

export default App;