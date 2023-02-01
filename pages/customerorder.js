import { Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

function Customerorder() {
  async function getData() {
    const res = await axios.get("/api/order");
    console.log(res.data.data);
  }
  getData();
  return (
    <>
      <Flex direction="column" alignItems="center" mt="30px">
        <Text fontSize="3xl" fontWeight="bold">
          Order Confirmation
        </Text>
      </Flex>
      <Flex direction="column" my="50px" alignItems="center">
        <Flex
          direction={{ md: "row", base: "column" }}
          justifyContent="center"
          mb="50px"
        >
          <Flex direction="column" mr="150px">
            <Flex justifyContent="center">
              <Text>Reciever Information</Text>
            </Flex>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px" type="text">
                  ชื่อผู้รับ
                </FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px" type="number">
                  เบอร์โทรศัพท์
                </FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px" type="text">
                  สถานที่ส่ง
                </FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px">วันที่-เวลาส่ง</FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px">ข้อความที่จะส่ง</FormLabel>
                <Textarea width="300px" />
              </Flex>
            </FormControl>
          </Flex>
          <Flex direction="column">
            <Flex justifyContent="center">
              <Text>Flower Detail **รายละเอียดที่ต้องการเน้นเป็นพิเศษ**</Text>
            </Flex>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px" type="text">
                  ดอกไม้
                </FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px" type="text">
                  สีริบบิ้น
                </FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px" type="text">
                  สีกระดาษห่อ
                </FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex mt="20px">
                <FormLabel width="100px" type="text">
                  โทนสี
                </FormLabel>
                <Input width="300px" />
              </Flex>
            </FormControl>
          </Flex>
        </Flex>
        <Button width="100px" type="submit">
          Submit
        </Button>
      </Flex>
    </>
  );
}
export default Customerorder;
