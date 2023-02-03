import {
  Text,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import moment from "moment";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function OrderSummary() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [order, setOrder] = useState([]);
  const router = useRouter();
  const getData = async () => {
    const id = router.query.keyword;
    const result = await axios.get(`/api/${id}`);
    setOrder(result.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Modal
        isOpen={true}
        isCentered
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex direction="column" alignItems="center">
              {order.map((data) => {
                return (
                  <Flex
                    direction="column"
                    my="20px"
                    fontSize="20px"
                    key={data.order_id}
                  >
                    <Flex>
                      <Text>ชื่อผู้ส่ง:</Text>
                      <Text>{data.sender}</Text>
                    </Flex>
                    <Flex>
                      <Text>ชื่อผู้รับ:</Text>
                      <Text>{data.reciever}</Text>
                    </Flex>
                    <Flex>
                      <Text>สถานที่จัดส่ง:</Text>
                      <Text>{data.place}</Text>
                    </Flex>
                    <Flex>
                      <Text>วันที่และเวลาจัดส่ง:</Text>
                      <Text>
                        {moment(data.delivery).format("DD MMM YYYY HH:mm")}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text>ข้อความ:</Text>
                      <Text>{data.message}</Text>
                    </Flex>
                    <Flex>
                      <Text>เบอร์โทรศัพท์:</Text>
                      <Text>{data.telephone}</Text>
                    </Flex>
                    <Flex>
                      <Text>รายละเอียดช่อดอกไม้:</Text>
                      <Text>{data.detail}</Text>
                    </Flex>
                    <Flex>
                      <Text>ราคา:</Text>
                      <Text>{data.price} บาท</Text>
                    </Flex>
                    <Flex>
                      <Text>ค่าส่ง:</Text>
                      <Text>{data.delivery_fee} บาท</Text>
                    </Flex>
                    <Flex>
                      <Text>ยอดรวม:</Text>
                      <Text>{data.price + data.delivery_fee} บาท</Text>
                    </Flex>
                    <Flex>
                      <Text>***รายละเอียดเน้นพิเศษ***</Text>
                    </Flex>
                    <Flex>
                      <Text>ดอกไม้:</Text>
                      <Text>{data.flower}</Text>
                    </Flex>
                    <Flex>
                      <Text>กระดาษห่อ:</Text>
                      <Text>{data.wrapping}</Text>
                    </Flex>
                    <Flex>
                      <Text>โทนสี:</Text>
                      <Text>{data.colour}</Text>
                    </Flex>
                    <Flex>
                      <Text>ริบบิ้น:</Text>
                      <Text>{data.ribbon}</Text>
                    </Flex>
                  </Flex>
                );
              })}

              <Image src="/QR_Bright.png" boxSize="150px" />
              <Text>น.ส. รัชเกล้า ปรีชาอนันต์</Text>
              <Text>Promptpay:0873228279</Text>
              <Text fontWeight="bold">***กรุณาตรวจสอบรายละเอียดก่อนโอน***</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {/* <>
              <Button
                backgroundColor="orange.600"
                mr={3}
                onClick={() => {
                  onClose();
                }}
                textColor="white"
                _hover={{ background: "#E76B39" }}
                fontFamily={"Inter"}
              >
                Close
              </Button>
            </> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default OrderSummary;
