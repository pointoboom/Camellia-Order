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
  TableContainer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
function Dashboard() {
  const [order, setOrder] = useState([]);
  const getData = async () => {
    const result = await axios.get("/api/order");
    console.log(result.data.data);
    const data = result.data.data.map((data) => {
      const delivery_date = moment(data.delivery).format("DD MMM YYYY HH:mm");

      data = { ...data, delivery_date };
      return data;
    });
    setOrder(data);
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

            <Flex align="center" justify="center" display="flex">
              <TableContainer w="1080px" mt="50px">
                <Table variant="simple" size="md" align="center">
                  <Thead bg="#CCCCCC" color="gray.800" mt="50px">
                    <Tr>
                      <Th>วันเวลาที่ส่ง</Th>
                      <Th>ชื่อผู้ส่ง</Th>
                      <Th>ชื่อผู้รับ</Th>
                      <Th>รายละเอียดอกไม้</Th>
                      <Th>เบอร์โทรผู้รับ</Th>
                      <Th>สถานที่ส่ง</Th>
                      <Th>ข้อความ</Th>
                      <Th>ราคา</Th>
                      <Th>ค่าส่ง</Th>
                      <Th>สถานะ</Th>
                    </Tr>
                  </Thead>
                  {order.map((data) => {
                    return (
                      <Tbody bg="white" key={data.room_no}>
                        <Tr>
                          <Td>{data.delivery_date}</Td>
                          <Td>{data.sender}</Td>
                          <Td>{data.reciever}</Td>
                          <Td>{data.detail}</Td>
                          <Td>{data.telephone}</Td>
                          <Td>{data.place}</Td>
                          <Td>{data.message}</Td>
                          <Td>{data.price}</Td>
                          <Td>{data.delivery_fee}</Td>
                          <Td>
                            <Text
                              backgroundColor="green.100"
                              borderRadius="5px"
                              padding="5px"
                            >
                              {data.status}
                            </Text>
                          </Td>

                          {/* <Td>
                            <Select
                              bordered={false}
                              showArrow={false}
                            //   defaultValue={data.status_name}
                              style={{
                                width: 180,
                              }}
                            //   options={options}
                            //   onChange={(e) => {
                            //     handleChange(e, data.room_no);
                            //   }}
                            />
                          </Td> */}
                        </Tr>
                      </Tbody>
                    );
                  })}
                  {/* {roomManagement == null
                    ? null
                    : roomManagement.map((data) => {
                        return (
                          <Tbody bg="white" key={data.room_no}>
                            <Tr>
                              <Td>{data.room_no}</Td>
                              <Td>{data.type_name}</Td>
                              <Td>{data.bed_type}</Td>

                              <Td>
                                <Select
                                  bordered={false}
                                  showArrow={false}
                                  defaultValue={data.status_name}
                                  style={{
                                    width: 180,
                                  }}
                                  options={options}
                                  onChange={(e) => {
                                    handleChange(e, data.room_no);
                                  }}
                                />
                              </Td>
                            </Tr>
                          </Tbody>
                        );
                      })} */}

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
