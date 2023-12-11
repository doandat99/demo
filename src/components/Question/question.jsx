import React from "react";
import { Box, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";

// export default function Question({ question, options, onSelect }) {
//   return (
//     <Box>
//       <Text fontSize="xl" fontWeight="bold">
//         {question}
//       </Text>
//       <RadioGroup onChange={(e) => onSelect(e)}>
//         <Stack spacing={2}>
//           {options.map((option, index) => (
//             <Radio key={index} value={option}>
//               {option}
//             </Radio>
//           ))}
//         </Stack>
//       </RadioGroup>
//     </Box>
//   );
// }
// 1. Create a component that consumes the `useRadio` hook
