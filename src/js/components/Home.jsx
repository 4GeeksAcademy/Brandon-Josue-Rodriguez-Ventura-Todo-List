import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [TodoList, SetElement] = useState([]);
  const [Input, SetInput] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const handlechange = (e) => {
    if (e.key === "Enter") {
      SetElement((prev) => [...prev, e.target.value]);
      SetInput("");
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); 
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); 
  };

  useEffect(() => {
    console.log("TodoList ha cambiado:", TodoList);
  }, [TodoList]);

  return (
    <div className="text-center container d-flex flex-column justify-content-center">
      <h1 className="Titulo">Tareas</h1>
      <input
        className="InsertarTarea text-center mx-auto"
        type="text"
        placeholder="Que vamos a hacer hoy?"
        style={{ fontSize: "18px", width: "50%" }}
        value={Input}
        onChange={(e) => SetInput(e.target.value)}
        onKeyDown={handlechange}
      />
      <div className="d-flex justify-content-center">
        <ol className="text-center">
          {TodoList.map((item, index) => (
            <li
              key={index}
              className="d-flex align-items-center justify-content-between"
              style={{
                fontSize: "18px",
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                minHeight: "50px",
                width: "600px",
                display: "flex",
                justifyContent: "space-between",
                margin: "0 auto",
              }}
            >
              {item}
              <button
                className="ps-100%"
                style={{
                  fontSize: "20px",
                  backgroundColor:
                    hoveredIndex === index ? "#8b0f06" : "#c3c6cb", 
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave} 
                onClick={() => SetElement(TodoList.filter((_, i) => i !== index))}
              >
                x
              </button>
            </li>
          ))}
          <p style={{ fontSize: "10px" }}> Hay {TodoList.length} {TodoList.length === 1 ? "tarea pendiente" : " tareas pendientes"}</p>
        </ol>
      </div>
    </div>
  );
};

export default Home;