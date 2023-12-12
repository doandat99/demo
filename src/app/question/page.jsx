"use client";

// import Image from "next/image";
// import styles from "./page.module.css";
// import Hero from "public/hero.png";
// import Button from "@/components/Button/Button";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Quiz from "@/components/Question/question";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const customTheme = extendTheme({
  components: {
    Radio: {
      baseStyle: {
        control: {
          width: "24px",
          height: "24px",
          borderRadius: "md",
          _checked: {
            bg: "teal.500",
          },
        },
      },
    },
  },
});

const questions = [
  {
    question: "Câu hỏi 1?",
    options: ["Đáp án 1.1", "Đáp án 1.2", "Đáp án 1.3", "Đáp án 1.4"],
  },
  {
    question: "Câu hỏi 2?",
    options: ["Đáp án 2.1", "Đáp án 2.2", "Đáp án 2.3", "Đáp án 2.4"],
  },
  {
    question: "Câu hỏi 3?",
    options: ["Đáp án 3.1", "Đáp án 3.2", "Đáp án 3.3", "Đáp án 3.4"],
  },
  {
    question: "Câu hỏi 4?",
    options: ["Đáp án 4.1", "Đáp án 4.2", "Đáp án 4.3", "Đáp án 5.4"],
  },
  // ... (tương tự cho các câu hỏi còn lại)
];

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const router = useRouter();

  const handleAnswerChange = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    // if (selectedAnswer !== null) {
    //   const newAnswers = [...answers];
    //   newAnswers[currentQuestion] = selectedAnswer;
    //   setAnswers(newAnswers);
    //   setSelectedAnswer(null);
    //   setCurrentQuestion(currentQuestion + 1);
    //   if (currentQuestion === questions.length - 1) {
    //     router.push("/result");
    //   }
    // }
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setSelectedAnswer(null);
      setAnswers(newAnswers);
      if (currentQuestion === questions.length - 1) {
        setTimeout(() => {
          router.push("/result");
        }, 1000);
        localStorage.setItem("answers", JSON.stringify(newAnswers));
      } else {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        }
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    // <div className={styles.container}>
    //   <div className={styles.item}>
    //     <h1 className={styles.title}>
    //       Better design for your digital products.
    //     </h1>
    //     <p className={styles.desc}>
    //       Turning your Idea into Reality. We bring together the teams from the
    //       global tech industry.
    //     </p>
    //     <Button url="/portfolio" text="See Our Works" />
    //   </div>
    //   <div className={styles.item}>
    //     <Image src={Hero} className={styles.img} alt="hero" />
    //   </div>
    // </div>

    <ChakraProvider theme={customTheme}>
      <Quiz
        quizCompleted={quizCompleted}
        answers={answers}
        questions={questions}
        handleAnswerChange={handleAnswerChange}
        handleNextQuestion={handleNextQuestion}
        handlePreviousQuestion={handlePreviousQuestion}
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
      />
    </ChakraProvider>
  );
}
