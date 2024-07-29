import React from "react";
import Button from "./components/Elements/Button/Button";

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-5">
        <Button variant="bg-red-700" text="login"></Button>
        <Button variant="bg-green-700" text="logout"></Button>
        <Button variant="bg-yellow-500" text="forget password"></Button>
      </div>
    </div>
  );
}

export default App;
