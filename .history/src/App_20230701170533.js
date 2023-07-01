import React, { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  return (
    <div>
      <section id="goal-form">
        <CourseInput />
      </section>
    </div>
  );
};

export default App;
