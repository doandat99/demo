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
  Image,
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
      <Image
        src="https://i.upanh.org/2023/12/12/logo2bd58773aff5ec0d.png"
        alt="hero"
        width={500}
        height={500}
      />
      {/* <Heading>Xin chào !</Heading> */}
      <form style={{ width: "60%" }} onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl>
            <Input type="text" id="name" placeholder="Nhập tên của bạn" />
          </FormControl>
          <Button colorScheme="teal" type="submit" style={{ marginLeft: 10 }}>
            Gửi
          </Button>
        </div>
      </form>
    </Container>
  );
}
