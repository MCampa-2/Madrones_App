import { useState } from "react";
import { trail1 } from "../quizes/trail1.jsx";
import { useNavigate } from "react-router-dom";




function Trail1() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState({});
    const [score, setScore] = useState(0);
    const totalQuestions = trail1.length;

    const handleChange = (questionId, option) => {
      
        setSelectedOption((prev) => {
            return { ...prev, [questionId]: option };
        }); 
        
       
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const allAnswers = Object.keys(selectedOption).length;
        let newScore = 0;
        trail1.forEach((q) => {
           if (selectedOption[q.id] === q.correct.toString()) {
               newScore++;
           }
        });
        setScore(newScore);
        const percentCorrect = ((newScore / totalQuestions) * 100).toString();
        localStorage.setItem("trail1", Math.round(percentCorrect));
        if(allAnswers === totalQuestions){
            alert("You've completed Trail 1! You are done for today.")
            localStorage.setItem("completedTrail1", true);
            navigate("/")
        }else{
            alert("Please answer all questions")
        }
    };

    return (
        <div>
            <h2 className="trail-title">Trail 1</h2>

            <form className="trail-form" onSubmit={handleSubmit}>
                {trail1.map((question, index) => {
                    return (
                        <div key={index}>
                            <p>{question.question}</p>
                            <div className="true-false">
                            <label htmlFor="radioButton">True </label>
                            <input
                                
                                onChange={() => handleChange(question.id, "true")}
                                type="radio"
                                name={`option${question.id}`}
                                value="true"
                                checked={selectedOption[question.id] === "true"}
                                />
                            
                            <label htmlFor="radiioButton">False </label>
                            <input
                                
                                onChange={() => handleChange(question.id, "false")}
                                type="radio"
                                name={`option${question.id}`}
                                value="false"
                                checked={selectedOption[question.id] === "false"}
                            />
                            </div>
                        </div>
                    );
                })}
                <button className="trail-submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Trail1;