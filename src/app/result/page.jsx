"use client";

import React from "react";

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
} from "@chakra-ui/react";

const courses = [
  {
    imageUrl: "https://placekitten.com/200/300",
    title: "Course 1",
    desc: "Description for Course 1",
  },
  {
    imageUrl: "https://placekitten.com/200/300",
    title: "Course 2",
    desc: "Description for Course 2",
  },
  {
    imageUrl: "https://placekitten.com/200/300",
    title: "Course 3",
    desc: "Description for Course 3",
  },
  {
    imageUrl: "https://placekitten.com/200/300",
    title: "Course 4",
    desc: "Description for Course 4",
  },
];

export default function Result() {
  const savedAnswers = JSON.parse(sessionStorage.getItem("savedAnswers"));
  console.log(savedAnswers);

  return (
    <>
      <div style={{ width: 30 }}>
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
            <MenuItem>Question 1</MenuItem>
            <MenuItem>{savedAnswers[0]}</MenuItem>
            <MenuDivider />
            <MenuItem>Question 2</MenuItem>
            <MenuItem>{savedAnswers[1]}</MenuItem>
          </MenuList>
        </Menu>
      </div>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={10}
        padding={4}
        maxW="800px"
        margin="100px auto"
      >
        {courses.map((course, index) => (
          <Box key={index} borderRadius="lg" overflow="hidden">
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
