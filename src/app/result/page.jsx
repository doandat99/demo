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

export default function Result() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text fontSize={20} fontWeight={600} color="teal">
          Gợi ý một số danh sách khóa học
        </Text>
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
              <MenuItem>{""}</MenuItem>
              <MenuDivider />
              <MenuItem>Question 2</MenuItem>
              <MenuItem>{""}</MenuItem>
              <MenuDivider />
              <MenuItem>Question 3</MenuItem>
              <MenuItem>{""}</MenuItem>
              <MenuDivider />
              <MenuItem>Question 4</MenuItem>
              <MenuItem>{""}</MenuItem>
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
            border={"1px solid"}
            padding={2}
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
