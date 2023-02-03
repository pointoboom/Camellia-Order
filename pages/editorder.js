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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
import moment from "moment";
const theme = extendTheme({ breakpoints });
function Editorder() {
  const [order, setOrder] = useState([]);
  const [reciever, setReciever] = useState("");
  const [telephone, setTelephone] = useState("");
  const [place, setPlace] = useState("");
  const [deliveryDate, setDeliverydate] = useState("");
  const [message, setMessage] = useState("");
  const [flower, setFlower] = useState("");
  const [ribbon, setRibbon] = useState("");
  const [wrapper, setWrapper] = useState("");
  const [tone, setTone] = useState("");
  const [price, setPrice] = useState("");
  const [delivery_fee, setDeliveryFee] = useState("");
  const [sender, setSender] = useState("");
  const [detail, setDetail] = useState("");
  const router = useRouter();
  async function handlesubmit(event) {
    event.preventDefault();
    const data = {
      sender,
      reciever,
      telephone,
      place,
      deliveryDate,
      message,
      flower,
      ribbon,
      wrapper,
      tone,
      price,
      delivery_fee,
      detail,
    };
    const id = router.query.keyword;
    const result = await axios.post(`/api/${id}`, data);
    if (result.data.message === "success") {
      router.push({
        pathname: "/ordersummary",
        query: { keyword: id },
      });
    }
  }
  const handleDelete = async (event) => {
    event.preventDefault();
    const id = router.query.keyword;
    const result = await axios.delete(`/api/${id}`);
    if (result.data.message === "success") {
      router.push("/dashboard");
    }
  };
  const onChangeDate = (value) => {
    setDeliverydate(value.$d);
  };
  const getData = async () => {
    const id = router.query.keyword;
    const result = await axios.get(`/api/${id}`);

    setReciever(result.data.data[0].reciever);
    setTelephone(result.data.data[0].telephone);
    setPlace(result.data.data[0].place);
    setDeliverydate(result.data.data[0].delivery);
    setMessage(result.data.data[0].message);
    setFlower(result.data.data[0].flower);
    setRibbon(result.data.data[0].ribbon);
    setWrapper(result.data.data[0].wrapping);
    setTone(result.data.data[0].colour);
    setDeliveryFee(result.data.data[0].delivery_fee);
    setPrice(result.data.data[0].price);
    setSender(result.data.data[0].sender);
    setDetail(result.data.data[0].detail);
    setOrder(result.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Flex direction="column" alignItems="center" mt="30px">
        <Text fontSize="3xl" fontWeight="bold">
          Edit Order
        </Text>
      </Flex>
      {order.map((data) => {
        return (
          <>
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
                          ชื่อผู้ส่ง
                        </FormLabel>
                        <Input
                          defaultValue={sender}
                          width="300px"
                          onChange={(event) => {
                            setSender(event.target.value);
                          }}
                        />
                      </Flex>
                    </FormControl>
                    <FormControl isRequired>
                      <Flex mt="20px" pl="30px">
                        <FormLabel width="100px" type="text">
                          ชื่อผู้รับ
                        </FormLabel>
                        <Input
                          width="300px"
                          value={reciever}
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
                          value={telephone}
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
                        <Input
                          width="300px"
                          value={place}
                          onChange={(event) => {
                            setPlace(event.target.value);
                          }}
                        />
                      </Flex>
                    </FormControl>
                    <FormControl isRequired>
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
                          defaultValue={moment(deliveryDate)}
                          onChange={onChangeDate}
                        />
                      </Flex>
                    </FormControl>
                    <FormControl>
                      <Flex mt="20px" pl="30px">
                        <FormLabel width="100px">ข้อความที่จะส่ง</FormLabel>
                        <Textarea
                          defaultValue={message}
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
                      <Text>
                        Flower Detail **รายละเอียดที่ต้องการเน้นเป็นพิเศษ**
                      </Text>
                    </Flex>
                    <FormControl>
                      <Flex mt="20px" pl="30px">
                        <FormLabel width="100px" type="text">
                          ดอกไม้
                        </FormLabel>
                        <Input
                          defaultValue={flower}
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
                          defaultValue={ribbon}
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
                          defaultValue={ribbon}
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
                          defaultValue={tone}
                          width="300px"
                          onChange={(event) => {
                            setTone(event.target.value);
                          }}
                        />
                      </Flex>
                    </FormControl>
                    <FormControl isRequired>
                      <Flex mt="20px" pl="30px">
                        <FormLabel width="100px" type="text">
                          ราคา
                        </FormLabel>
                        <Input
                          defaultValue={price}
                          width="300px"
                          onChange={(event) => {
                            setPrice(event.target.value);
                          }}
                        />
                      </Flex>
                    </FormControl>
                    <FormControl isRequired>
                      <Flex mt="20px" pl="30px">
                        <FormLabel width="100px" type="text">
                          ค่าส่ง
                        </FormLabel>
                        <Input
                          defaultValue={delivery_fee}
                          width="300px"
                          onChange={(event) => {
                            setDeliveryFee(event.target.value);
                          }}
                        />
                      </Flex>
                    </FormControl>
                    <FormControl>
                      <Flex mt="20px" pl="30px">
                        <FormLabel width="100px">รายละเอียดอกไม้</FormLabel>
                        <Textarea
                          defaultValue={detail}
                          width="300px"
                          onChange={(event) => {
                            setDetail(event.target.value);
                          }}
                        />
                      </Flex>
                    </FormControl>
                  </Flex>
                </Flex>
                <Button width="100px" type="submit" mb="20px">
                  Submit
                </Button>
                <Button
                  width="100px"
                  onClick={(event) => {
                    handleDelete(event);
                  }}
                >
                  Delete
                </Button>
              </Flex>
            </form>
          </>
        );
      })}
    </>
  );
}
export default Editorder;
