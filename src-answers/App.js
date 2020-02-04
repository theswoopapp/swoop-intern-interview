import React from "react";
import "./App.css";
import List from "./components/List";

// Your Tasks:
// 1. Create your feature branch. Name it "your-name-feature-branch"
// 2. Spin up a localhost server.
// 3. Create a <button> element that says "Click Me".
// 4. Add an onClick handler to the button that alerts "You clicked me!".
// 5. Import <List> component to this (App.js) file and render it.
// 6. Center align our content (h1, button and List).
// 7. Create a 300x300 <div> inside existing div, set a bg color and center it.
// 8.5 **Bonus Challenge** Pass down an <li> item from parent (App.js) to child (List.js) and add it to the list.
// 9. Add and commit your changes.

//Utilize Chrome Dev Tools to debug and view your HTML/CSS

function App() {
  const handleClick = () => {
    alert("Click me!");
  };
  const propTask = "This is for step 8.5";

  return (
    <div className="container">
      <h1>Welcome to your playground!! Good Luck!</h1>
      <button onClick={handleClick}>Click me</button>
      <List propTask={propTask} />
      <div className="blueDiv"></div>
    </div>
  );
}

export default App;
