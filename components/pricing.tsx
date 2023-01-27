import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  HStack,
  Icon,
  StackProps,
  Stack,
  Circle,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Circle bg="#6134C4">
        <Icon as={CheckIcon} w={"22px"} h={"22px"} color="#FFFFFF" />
      </Circle>

      <Text>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <Box
      maxW={"994px"}
      margin={"auto"}
      mt="-256px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Flex>
        <Box bg={"#F0EAFB"} p={"60px"}>
          <Text
            fontWeight={800}
            fontSize={"24px"}
            color={"#171923"}
            textAlign={"center"}
          >
            Premium PRO
          </Text>
          <Heading as="h3" fontSize={"60px"} mt={"16px"} textAlign={"center"}>
            $329
          </Heading>
          <Text
            color={"#171923"}
            fontSize={"18px"}
            fontWeight={500}
            mt={"8px"}
            textAlign={"center"}
          >
            billed just once
          </Text>
          <Button colorScheme={"purple"} size={"lg"} w={"282px"} mt={"24px"}>
            Get Started
          </Button>
        </Box>
        <Box p={"48px"} fontSize={"18px"} bg={"white"} textAlign="left">
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing={"16px"} pt={"24px"}>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
