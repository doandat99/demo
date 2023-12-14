import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  ChakraProvider,
  extendTheme,
  CSSReset,
  ThemeProvider,
  Progress,
  Image,
} from "@chakra-ui/react";
import { motion, isValidMotionProp, Keyframes } from "framer-motion";
import style from "./question.module.css";
import { useRouter } from "next/navigation";

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
    // options: ["Đáp án 3.1", "Đáp án 3.2", "Đáp án 3.3", "Đáp án 3.4"],
    options: [
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    ],
    type: "image",
  },
  {
    question: "Câu hỏi 4?",
    options: ["Đáp án 4.1", "Đáp án 4.2", "Đáp án 4.3", "Đáp án 5.4"],
  },
  // ... (tương tự cho các câu hỏi còn lại)
];

const Quiz = ({
  handleAnswerChange,
  handleNextQuestion,
  handlePreviousQuestion,
  currentQuestion,
  selectedAnswer,
  answers,
  quizCompleted,
  nextClicked,
}) => {
  const router = useRouter();
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const { options, type } = questions[currentQuestion];

  useEffect(() => {
    // Scroll to the top of the page when the question changes
    window.scrollTo(0, 0);
  }, [currentQuestion]);

  return (
    <>
      <Box>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {currentQuestion + 1 + "/" + questions.length}
        </div>
        <Progress
          value={progressPercentage}
          mb={10}
          colorScheme="teal"
          borderRadius={10}
        />
        <Text mb={4}>{questions[currentQuestion].question}</Text>
        {/* <Stack spacing={4}>
          {options.map((option, index) => {
            return type === "image" ? (
              <Box
                key={index}
                p={2}
                cursor="pointer"
                borderColor={selectedAnswer === index ? "teal.600" : "gray.100"}
                color={selectedAnswer === index ? "white" : "gray.800"}
                borderWidth={1}
                onClick={() => handleAnswerChange(index)}
                className={style.questionAnimation}
              >
                <Image src={option} width={200} height={200} alt="image" />
              </Box>
            ) : (
              <Box
                key={index}
                borderWidth="2px"
                borderRadius="md"
                p={4}
                cursor="pointer"
                borderColor={selectedAnswer === index ? "teal.600" : "gray.100"}
                bg={selectedAnswer === index ? "teal" : "white"}
                color={selectedAnswer === index ? "white" : "gray.800"}
                boxShadow="md"
                onClick={() => handleAnswerChange(index)}
                className={style.questionAnimation}
              >
                {option}
              </Box>
            );
          })}
        </Stack> */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transform: "translateY(10px)",
            transition: { delay: 0.5, duration: 0.5 },
          }}
          exit={{ opacity: 0, transform: "translateY(0px)" }}
        >
          <Stack spacing={4}>
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Box
                  borderWidth="2px"
                  borderRadius="md"
                  p={4}
                  cursor="pointer"
                  borderColor={
                    selectedAnswer === index ? "teal.600" : "gray.100"
                  }
                  bg={selectedAnswer === index ? "teal" : "white"}
                  color={selectedAnswer === index ? "white" : "gray.800"}
                  boxShadow="md"
                  onClick={() => handleAnswerChange(index)}
                >
                  {option}
                </Box>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <Button
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
          colorScheme="teal"
        >
          Quay lại
        </Button>
        <Button colorScheme="teal" onClick={handleNextQuestion}>
          Tiếp tục
        </Button>
      </div>
    </>
  );
};

export default Quiz;
