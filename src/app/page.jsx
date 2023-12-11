"use client";

import React from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Container,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/question");
  };
  return (
    <Container centerContent>
      <Heading>Xin chào !</Heading>
      <form style={{ width: "60%" }} onSubmit={handleSubmit}>
        <FormControl>
          <Input type="text" id="name" placeholder="Nhập tên của bạn" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Gửi
        </Button>
      </form>
    </Container>
  );
}
