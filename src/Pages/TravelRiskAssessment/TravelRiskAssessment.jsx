import React, { useState } from "react";
import "./TravelRiskAssessment.css";
import Questionnaire from "../../Components/Questionnaire/Questionnaire";
import QNALayout from "../../Layouts/QNALayout/QNALayout";

const TravelRiskAssessment = () => {
  const [step, setStep] = useState(0);

  const questions = [
    {
      title: "Scalp Condition",
      questions: [
        { question: "Is your scalp occasionally dry?", type: "boolean" },
        {
          question:
            "Have you ever had to visit the dermatologist for your scalp?",
          type: "boolean",
        },
        { question: "What was the issue with your scalp?", type: "text" },
      ],
    },
    {
      title: "Headache Condition",
      questions: [
        {
          question: "What do you experience regarding headaches?",
          type: "multiple",
          options: [
            "Migraines",
            "Frequent Mild Headaches",
            "Average Headaches",
          ],
        },
        {
          question: "How severe are the headaches?",
          type: "slider",
          min: 1,
          max: 10,
        },
        {
          question: "How long do the headaches last?",
          type: "multiple",
          options: ["Few Minutes", "Less than an Hour", "Few Hours"],
        },
      ],
    },
    // Add more steps here
  ];

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <QNALayout>
      <div className="App">
        <Questionnaire
          step={step}
          questions={questions[step]}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>
    </QNALayout>
  );
};

export default TravelRiskAssessment;
