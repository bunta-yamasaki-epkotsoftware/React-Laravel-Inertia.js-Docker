import { StarIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, Image, Text, VStack,} from '@chakra-ui/react'
import React from 'react'

const Home = (props) => {
  return (
    <>
        <Box p={4}>
            <Heading fontSize={{base: "24px", md: "40px", lg: "56px"}} mb={2}>
                ショップ一覧
            </Heading>
            <VStack spacing={4} align={"stretch"}>
                {props.shops.map((shop) => (
                    <Box key={shop.id} p={4} borderWidth={"1px"} borderRadius={"lg"} overflow={"hidden"} _boxShadow={"lg"}>
                        <HStack spacing={4}>
                            <Image boxSize="100px" objectFit="cover" src="https://dummyimage.com/100x100/000/fff" alt={shop.name}></Image>
                            <VStack align={"start"}>
                                <Heading fontSize={{base: "16px", md: "20px", lg: "24px"}}>{shop.name}</Heading>
                                <Text>{shop.description}</Text>
                            </VStack>
                        </HStack>
                    </Box>
                ))};
            </VStack>
            <Heading as ="h2" fontSize={{base: "24px", md: "40px", lg: "56px"}} mb={2}　mt={8}>
                新着レビュー
            </Heading>
            <VStack spacing={4} align={"stretch"}>
                {props.newReviews.map((review) => (
                    <Box key={review.id} p={4} borderWidth={"1px"} borderRadius={"lg"} overflow={"hidden"} _boxShadow={"lg"}>
                        <VStack align={"start"}>
                            <Text fontWeight={"bold"}>{review.user.name}</Text>
                            <Text>{review.comment}</Text>
                            <HStack spacing={1}>
                                {Array(5).fill("").map((_, i) => (
                                    <StarIcon key={i} color={i < review.rating ? "yellow.500" : "gray.300"}></StarIcon>
                                ))};
                            </HStack>
                        </VStack>
                    </Box>
                ))};
            </VStack>
        </Box>
    </>
  )
}

export default Home