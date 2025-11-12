import React, { useState } from "react";

const Alert = ({ message, type }) => {
  if (!message) return null;
  const baseStyle = "rounded px-4 py-2 mb-4 text-sm";
  const colors = {
    success: "bg-green-100 text-green-800 border border-green-300",
    error: "bg-red-100 text-red-800 border border-red-300",
    info: "bg-blue-100 text-blue-800 border border-blue-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  };
  return (
    <div className={`${baseStyle} ${colors[type] || colors.info}`}>
      {message}
    </div>
  );
};

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleDecrement = () => {
    if (count <= 0) {
      setAlert({
        message: "¡El contador no puede ser menor a cero!",
        type: "warning",
      });
    } else {
      setCount(count - 1);
      setAlert({ message: "", type: "" });
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    setAlert({ message: "", type: "" });
  };

  const handleReset = () => {
    setCount(0);
    setAlert({
      message: "El contador ha sido reiniciado.",
      type: "info",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4">Contador Digital</h1>
        <Alert message={alert.message} type={alert.type} />

        <div className="flex flex-col items-center mb-6">
          <span className="text-6xl font-semibold" data-testid="count">{count}</span>
        </div>
        <div className="flex flex-col gap-3">
          <button
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={handleIncrement}
            data-testid="increment"
          >
            Incrementar
          </button>
          <button
            className={`bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition ${count <= 0 ? "opacity-70 cursor-not-allowed" : ""}`}
            onClick={handleDecrement}
            disabled={count <= 0}
            data-testid="decrement"
          >
            Decrementar
          </button>
          <button
            className="bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition"
            onClick={handleReset}
            data-testid="reset"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;