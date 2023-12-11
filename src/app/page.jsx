"use client";

// import Image from "next/image";
// import styles from "./page.module.css";
// import Hero from "public/hero.png";
// import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Heading,
  Progress,
  useRadioGroup,
  HStack,
  useRadio,
  Text,
  StatNumber,
  Stat,
} from "@chakra-ui/react";

const questionsData = [
  {
    question: "Question 1",
    options: ["Option A", "Option B", "Option C"],
  },
  {
    question: "Question 2",
    options: ["Option X", "Option Y", "Option Z"],
  },
  // Thêm các câu hỏi khác
];

export default function Home() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    Array(questionsData.length).fill(null)
  );

  const handleAnswerSelect = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;

    console.log(newAnswers);
  };

  const handleNextQuestion = () => {
    // Kiểm tra xem đã đến câu hỏi cuối cùng chưa
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (currentQuestionIndex === questionsData.length - 1) {
        sessionStorage.setItem("savedAnswers", JSON.stringify(answers));
        router.push("/result");
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  function RadioCard(props) {
    const { state, getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();

    return (
      <Box as="label" style={{ width: "100%" }}>
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          // bg={state.isChecked ? "teal.600" : "white"}
          // color={state.isChecked ? "white" : "gray.700"}
          // borderColor={state.isChecked ? "teal.600" : "gray.300"}
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  }

  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  function Example({
    questionsData,
    currentQuestionIndex,
    handleAnswerSelect,
  }) {
    // const options = ["react", "vue", "svelte"];

    const currentQuestion = questionsData[currentQuestionIndex];
    const { options, question } = currentQuestion;

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "questions",
      defaultValue: null,
      onChange: handleAnswerSelect,
    });

    const group = getRootProps();

    return (
      <HStack
        {...group}
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
        // onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    );
  }
  const currentQuestion = questionsData[currentQuestionIndex];
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
    <>
      <p style={{ display: "flex", justifyContent: "flex-end" }}>
        {currentQuestionIndex + 1 + "/" + questionsData.length}
      </p>
      <Progress
        value={((currentQuestionIndex + 1) / questionsData.length) * 100}
        colorScheme="teal"
        mb={4}
      />
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Question {currentQuestionIndex + 1}: {currentQuestion.question}
      </Text>

      <Container maxW="xl" centerContent>
        <Example
          questionsData={questionsData}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswerSelect={handleAnswerSelect}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button mt={4} mr={4} colorScheme="teal" onClick={handlePrevQuestion}>
            Previous Question
          </Button>
          <Button mt={4} colorScheme="teal" onClick={handleNextQuestion}>
            {currentQuestionIndex < questionsData.length - 1
              ? "Next Question"
              : "Submit Answers"}
          </Button>
        </div>
      </Container>
    </>
  );
}
