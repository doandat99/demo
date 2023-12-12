"use client";

import React, { useEffect } from "react";

import {
  ChakraProvider,
  Box,
  Image,
  Grid,
  Text,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  Heading,
} from "@chakra-ui/react";

const courses = [
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 1",
    desc: "Description for Course 1",
  },
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 2",
    desc: "Description for Course 2",
  },
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 3",
    desc: "Description for Course 3",
  },
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 4",
    desc: "Description for Course 4",
  },
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 1",
    desc: "Description for Course 5",
  },
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 2",
    desc: "Description for Course 6",
  },
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 3",
    desc: "Description for Course 7",
  },
  {
    imageUrl:
      "https://i.upanh.org/2023/12/12/react-new-1024x7701a0dd2714c6760fc.png",
    title: "Course 4",
    desc: "Description for Course 8",
  },
];

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

const data = localStorage.getItem("answers");
const answers = data ? JSON.parse(data) : [];
const result = questions.map((question, index) => {
  const selectedOptionIndex = answers[index];
  return {
    question: question.question,
    selectedOption:
      selectedOptionIndex !== undefined
        ? question.options[selectedOptionIndex]
        : null,
  };
});

console.log(result);

export default function Result() {
  return (
    <>
      <Box
        as="nav"
        mb={10}
        style={{ display: "flex", justifyContent: "center" }}
        borderBottom="1px"
        borderBottomColor={"gray.200"}
      >
        <Image
          src="https://i.upanh.org/2023/12/12/logo2bd58773aff5ec0d.png"
          alt="hero"
          width={200}
          height={200}
        />
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text fontSize={20} fontWeight={600} color="teal">
          Gợi ý một số danh sách khóa học
        </Text>
        <div>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              ...
            </MenuButton>
            <MenuList>
              {result?.map((value) => (
                <>
                  <MenuItem>{value.question}</MenuItem>
                  <MenuItem color="teal">{value.selectedOption}</MenuItem>
                  <MenuDivider />
                </>
              ))}
            </MenuList>
          </Menu>
        </div>
      </div>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={10}
        padding={4}
        maxW="1200px"
        margin="100px auto"
      >
        {courses.map((course, index) => (
          <Box
            key={index}
            borderRadius="lg"
            overflow="hidden"
            borderWidth="1px"
            boxShadow={"lg"}
          >
            <Image src={course.imageUrl} alt={`Course ${index + 1}`} />
            <Text mt={2} fontWeight="bold" textAlign="center">
              {course.title}
            </Text>
            <Text mt={2} textAlign="center">
              {course.desc}
            </Text>
          </Box>
        ))}
      </Grid>
    </>
  );
}
