import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
function FinalResult() {
  const SelectedValues = useSelector((state) => state.nameslice.SelectedValues);
  const correctAnswers = useSelector((state) => state.nameslice.correctAnswer);

  const [result, setResult] = useState("");

  const totalLengthofQusetions = Object.values(correctAnswers).length;
  console.log(totalLengthofQusetions);

  useEffect(() => {
    let thisAnswerISCorrected = 0;
    for (const key in SelectedValues) {
      const correct = correctAnswers[key];
      const element = SelectedValues[key];
      if (correct === element) {
        thisAnswerISCorrected += 1;
      }
    }
    const percentage = thisAnswerISCorrected / totalLengthofQusetions;
    console.log(percentage);

    if (percentage > 0.5) {
      const message = `Congratulations, you passed with ${percentage}% correct answers.`;
      setResult(message);
    } else {
      const message = `Oops, you didn't pass. You got only ${percentage}% correct answers.`;
      setResult(message);
    }
  }, [correctAnswers, SelectedValues, totalLengthofQusetions]);
  // const calulateResult = () => {};

  return (
    <>
      <div className="head">
        <h1>Final Result</h1>
      </div>
      <h4>{result}</h4>
      <br></br>
      <NavLink to={"/Feedback"}>send us your feedback</NavLink>
    </>
  );
}

export default FinalResult;
