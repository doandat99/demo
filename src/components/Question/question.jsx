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
} from "@chakra-ui/react";
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
    options: ["Đáp án 3.1", "Đáp án 3.2", "Đáp án 3.3", "Đáp án 3.4"],
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
}) => {
  const router = useRouter();
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const { options } = questions[currentQuestion];

  return (
    <>
      {/* {quizCompleted ? (
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Kết quả: {score}/{questions.length}
            </Text>
            <Text fontSize="lg" mb={4}>
              Lựa chọn:
            </Text>
            <Stack spacing={4}>
              {answers.map((selectedOption, questionIndex) => (
                <Box key={questionIndex} p={4} bg="teal.100" borderRadius="md">
                  <Text fontWeight="bold">Câu hỏi {questionIndex + 1}:</Text>
                  <Text>
                    {questions[questionIndex].options[selectedOption]}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>
        ) : ( */}
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
        <Stack spacing={4}>
          {options.map((option, index) => (
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
            >
              {option}
            </Box>
          ))}
        </Stack>
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
