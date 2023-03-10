import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";

function Dashboard() {
  const [order, setOrder] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const searchOrder = async () => {
    const result = await axios.get(
      `/api/order?startdate=${startDate}&enddate=${endDate}`
    );
    if (result.data.data) {
      const data = result.data.data.map((data) => {
        const delivery_date = moment(data.delivery).format("DD MMM YYYY HH:mm");

        data = { ...data, delivery_date };
        return data;
      });
      setOrder(data);
    }
  };
  const getData = async () => {
    const result = await axios.get("/api/order");

    if (result.data.data) {
      const data = result.data.data.map((data) => {
        const delivery_date = moment(data.delivery).format("DD MMM YYYY HH:mm");

        data = { ...data, delivery_date };
        return data;
      });
      setOrder(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Flex direction="row">
        <Flex w="100%" bg="#F6F7FC" justifyContent="center">
          <Flex direction="column" bg="#F6F7FC" w="full">
            <Flex
              h="80px"
              bg="white"
              mb="5px"
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex>
                <Text fontSize="20px" ml="60px" fontWeight="semibold" py="20">
                  Order Management
                </Text>
              </Flex>
              <Flex>
                <Button
                  mr="20px"
                  onClick={() => {
                    router.push("/customerorder");
                  }}
                >
                  New Order
                </Button>
                <InputGroup>
                  <Input
                    mr="10"
                    placeholder="Search..."
                    size="md"
                    width="400px"
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Flex>
            </Flex>
            <Flex ml="20px">
              <Box mr="10px">
                {" "}
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                  }}
                  placeholderText="Start date"
                  timeCaption="time"
                  dateFormat="d MMMM  yyyy"
                />
              </Box>
              <Box mr="10px">
                {" "}
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                  }}
                  placeholderText="End Date"
                  timeCaption="time"
                  dateFormat="d MMMM  yyyy"
                />
              </Box>
              <Button
                background="blue.300"
                onClick={() => {
                  searchOrder();
                }}
              >
                Search
              </Button>
            </Flex>
            <Flex align="center" justify="center" display="flex">
              <TableContainer mt="50px">
                <Table variant="simple" size="md" align="center">
                  <Thead bg="#CCCCCC" color="gray.800" mt="50px">
                    <Tr>
                      <Th>???????????????????????????????????????</Th>
                      <Th>???????????????</Th>
                      <Th>??????????????????????????????</Th>
                      <Th>??????????????????????????????</Th>
                      <Th>?????????????????????????????????????????????</Th>
                      <Th>??????????????????????????????????????????</Th>
                      <Th>??????????????????????????????</Th>
                      <Th>?????????????????????</Th>
                      <Th>????????????</Th>
                      <Th>??????????????????</Th>
                    </Tr>
                  </Thead>
                  {order.map((data) => {
                    return (
                      <Tbody
                        bg="white"
                        key={data.order_id}
                        onClick={() => {
                          router.push({
                            pathname: "/editorder",
                            query: { keyword: data.order_id },
                          });
                        }}
                      >
                        <Tr>
                          <Td>{data.delivery_date}</Td>
                          <Td>
                            <Text
                              backgroundColor={
                                data.status === "pending"
                                  ? "red.100"
                                  : "green.100"
                              }
                              borderRadius="5px"
                              padding="5px"
                            >
                              {data.status}
                            </Text>
                          </Td>
                          <Td>{data.sender}</Td>
                          <Td>{data.reciever}</Td>
                          <Td>{data.detail}</Td>
                          <Td>{data.telephone}</Td>
                          <Td>{data.place}</Td>
                          <Td>{data.message}</Td>
                          <Td>{data.price}</Td>
                          <Td>{data.delivery_fee}</Td>
                        </Tr>
                      </Tbody>
                    );
                  })}

                  <Tbody bg="white"></Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
export default Dashboard;
