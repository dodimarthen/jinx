import React from "react";

const Button = (props) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
      type="submit"
    >
      {props.text}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-5">
        <Button variant="bg-red-700" text="login"></Button>
        <Button variant="bg-green-700" text="logout"></Button>
      </div>
    </div>
  );
}

export default App;
