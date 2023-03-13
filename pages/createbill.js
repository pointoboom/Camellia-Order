import { Flex, Text, Input, Button, Textarea, Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
function Createbill() {
  const router = useRouter();
  const [deliveryDate, setDeliverydate] = useState(new Date());
  return (
    <>
      <Flex direction="column">
        <FormControl isRequired>
          <Flex mt="20px" pl="30px">
            <FormLabel width="100px" type="text">
              ชื่อผู้ขาย
            </FormLabel>
            <Select
              width="300px"
              mr="10px"
              onChange={(event) => {
                setReciever(event.target.value);
              }}
            />
            <Button>เพิ่มผู้ขาย</Button>
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mt="20px" pl="30px">
            <FormLabel width="200px">วันที่-เวลาซื้อ</FormLabel>

            <DatePicker
              selected={deliveryDate}
              onChange={(date) => {
                setDeliverydate(date);
              }}
              // showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="d MMMM  yyyy"
            />
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex>
            <Flex mt="20px" pl="30px" direction="column">
              <FormLabel width="100px" type="text">
                รายการ
              </FormLabel>
              <Input
                width="300px"
                onChange={(event) => {
                  setReciever(event.target.value);
                }}
              />
            </Flex>
            <Flex mt="20px" pl="30px" direction="column">
              <FormLabel width="100px" type="text">
                จำนวน
              </FormLabel>
              <Input
                width="300px"
                onChange={(event) => {
                  setReciever(event.target.value);
                }}
              />
            </Flex>
            <Flex mt="20px" pl="30px" direction="column">
              <FormLabel width="100px" type="text">
                ราคา
              </FormLabel>
              <Input
                width="300px"
                onChange={(event) => {
                  setReciever(event.target.value);
                }}
              />
            </Flex>
            <Flex
              direction="column"
              justifyContent="end"
              alignItems="center"
              ml="10px"
            >
              <Button>+</Button>
            </Flex>
          </Flex>
        </FormControl>
        <Button width="100px">Submit</Button>
      </Flex>
    </>
  );
}
export default Createbill;
