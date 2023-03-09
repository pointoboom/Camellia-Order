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
import axios from "axios";
function Monthlyreport() {
  const getData = async () => {
    const result = await axios.get(`/api/report?month=03`);

    // if (result.data.data) {
    //   const data = result.data.data.map((data) => {
    //     const delivery_date = moment(data.delivery).format("DD MMM YYYY HH:mm");

    //     data = { ...data, delivery_date };
    //     return data;
    //   });
    //   setOrder(data);
    // }
  };
  useEffect(() => {
    getData();
  }, []);
  return <Flex>TEST</Flex>;
}

export default Monthlyreport;
