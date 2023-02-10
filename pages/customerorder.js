import { Flex, Text, Input, Button, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { DatePicker } from "antd";
import { extendTheme } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

function Customerorder() {
  const [reciever, setReciever] = useState("");
  const [telephone, setTelephone] = useState("");
  const [place, setPlace] = useState("");
  const [deliveryDate, setDeliverydate] = useState("");
  const [message, setMessage] = useState("");
  const [flower, setFlower] = useState("");
  const [ribbon, setRibbon] = useState("");
  const [wrapper, setWrapper] = useState("");
  const [tone, setTone] = useState("");
  const router = useRouter();
  async function handlesubmit(event) {
    event.preventDefault();
    const data = {
      reciever,
      telephone,
      place,
      deliveryDate,
      message,
      flower,
      ribbon,
      wrapper,
      tone,
    };
    const result = await axios.post("/api/order", data);
    if (result.data.message === "success") {
      router.push("/ordercomplete");
    } else {
      alert("กรุณาใส่ข้อมูลให้ครบถ้วน");
    }
  }
  const onChangeDate = (value) => {
    setDeliverydate(value.$d);
  };
  return (
    <>
      <Flex direction="column" alignItems="center" mt="30px">
        <Text fontSize="3xl" fontWeight="bold">
          Order Confirmation
        </Text>
      </Flex>
      <form onSubmit={handlesubmit}>
        <Flex direction="column" my="50px" alignItems="center">
          <Flex
            direction={{ md: "row", base: "column" }}
            justifyContent="space-around"
            mb="50px"
          >
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex justifyContent="center">
                <Text>Reciever Information</Text>
              </Flex>
              <FormControl isRequired>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px" type="text">
                    ชื่อผู้รับ
                  </FormLabel>
                  <Input
                    width="300px"
                    onChange={(event) => {
                      setReciever(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
              <FormControl isRequired>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px" type="number">
                    เบอร์โทรศัพท์
                  </FormLabel>
                  <Input
                    width="300px"
                    onChange={(event) => {
                      setTelephone(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
              <FormControl isRequired>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px" type="text">
                    สถานที่ส่ง
                  </FormLabel>
                  <Textarea
                    width="300px"
                    onChange={(event) => {
                      setPlace(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px">วันที่-เวลาส่ง</FormLabel>
                  <DatePicker
                    showTime
                    format="dd,DD MMM YYYY HH:mm"
                    style={{
                      width: "300px",
                      fontFamily: "Inter",
                      fontSize: "30px",
                      paddingLeft: "15px",
                    }}
                    onOk={onChangeDate}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px">ข้อความที่จะส่ง</FormLabel>
                  <Textarea
                    width="300px"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
            </Flex>
            <Flex direction="column">
              <Flex justifyContent="center">
                <Text>Flower Detail **รายละเอียดที่ต้องการเน้นเป็นพิเศษ**</Text>
              </Flex>
              <FormControl>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px" type="text">
                    ดอกไม้
                  </FormLabel>
                  <Input
                    width="300px"
                    onChange={(event) => {
                      setFlower(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px" type="text">
                    สีริบบิ้น
                  </FormLabel>
                  <Input
                    width="300px"
                    onChange={(event) => {
                      setRibbon(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px" type="text">
                    สีกระดาษห่อ
                  </FormLabel>
                  <Input
                    width="300px"
                    onChange={(event) => {
                      setWrapper(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
              <FormControl>
                <Flex mt="20px" pl="30px">
                  <FormLabel width="100px" type="text">
                    โทนสี
                  </FormLabel>
                  <Input
                    width="300px"
                    onChange={(event) => {
                      setTone(event.target.value);
                    }}
                  />
                </Flex>
              </FormControl>
            </Flex>
          </Flex>
          <Button width="100px" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
}
export default Customerorder;
