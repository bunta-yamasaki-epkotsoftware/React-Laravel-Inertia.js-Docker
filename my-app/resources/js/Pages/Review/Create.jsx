import MainLayout from '@/Layouts/MainLayout'
import { StarIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, Heading, HStack, Text, Textarea, AlertDialog, AlertDialogOverlay, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogHeader, useDisclosure, Spinner } from '@chakra-ui/react'
import { router } from '@inertiajs/react';
import React, { useState } from 'react'

const Create = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const [loading, setLoading] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);
    const [values, setValues] = useState({
        shop_id: props.shop.id,
        rating: 1,
        comment: "",
    });

    const handleChange = (e) => {
        //name=comment value=xxxx
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    };

    const handleCheck = (e) => {
        e.preventDefault();
        onOpen();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        e.target.disabled = true;
        router.post(route('review.store'), values);
    }

  return (
    <Box p={4} m={4} mx={"auto"} bg={"gray.100"} border={"md"} boxShadow={"md"} w={{base: "90%", md: "700px"}}>
        {/* アラートダイアログ */}
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                             最終確認
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            レビューを投稿します。よろしいですか？
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                キャンセル
                            </Button>
                            <Button colorScheme='blue' ml={3} onClick={handleSubmit}>
                                {loading ? <Spinner /> : "投稿する"}
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
        <Heading as="h2" size={"md"} mb={4} color={"blue.900"}>レビューの投稿</Heading>
        <Text fontSize={"xl"} color={"gray.500"} mb={2}>{props.shop?.name ?? "店舗情報未取得"}</Text>
        <form onSubmit={handleCheck}>
            <FormControl isRequired mb={4}>
                <FormLabel htmlFor='rating' fontWeight={"bold"}>
                    評価
                </FormLabel>
                <HStack spacing={1} mb={4}>
                    {Array(5).fill("").map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < values.rating || i < hoverRating
                                ? "yellow.500"
                                : "gray.300"}
                            cursor={"pointer"}
                            onClick={() => setValues({...values, rating: i + 1})}
                            onMouseEnter={() => setHoverRating(i + 1)}
                            onMouseLeave={() => setHoverRating(0)}
                            mb={4}
                        >
                        </StarIcon>
                    ))}
                </HStack>
            </FormControl>
            <FormControl isRequired mb={4}>
                <FormLabel htmlFor='comment' fontWeight={"bold"}>
                    コメント
                </FormLabel>
                <Textarea placeholder='コメントを入力してください' id='comment' name='comment' onChange={handleChange}></Textarea>
            </FormControl>
            <Button type='submit' colorScheme="blue" mt={4}>
                投稿する
            </Button>
        </form>
    </Box>
  )
}

Create.layout = (page) => <MainLayout children={page} title="レビュー投稿"/>
export default Create