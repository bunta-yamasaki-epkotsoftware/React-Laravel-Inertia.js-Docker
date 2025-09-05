import React, { useEffect } from 'react'
import MainLayout from '../../Layouts/MainLayout'
import { Box, Button, Heading, HStack, Image, Link, Text, useToast } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'
import ReviewList from '@/Components/Organisms/ReviewList'

const Detail = (props) => {

    const toast = useToast();
    const toastRef = React.useRef();

    useEffect(() => {
        if(props.status === 'review-created') {
            toast({
                title: 'レビュー投稿成功',
                description: 'レビューを投稿が完了しました。',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top',
            })
        }
    }, [props.status]);

  return (
    <Box p={4}>
        <Heading as="h2" size={"xl"}>
            {props.shop.name}
        </Heading>
        <Image
            boxSize={"300px"}
            objectFit={"contain"}
            src={"https://dummyimage.com/300x300/000/fff"}
            alt={props.shop.name}
            mb={4}
            my={4}
        ></Image>
        <Text mb={2}>{props.shop.description}</Text>
        <Text mb={2}>{props.shop.location}</Text>

        {/* レビュー */}
        <Box mt={8}>
            <Heading as="h3" size={"lg"} mb={4}>レビュー</Heading>
            <Box>
                <Link href={`/review/create/${props.shop.id}`}>
                    <Button colorScheme="blue"><SmallAddIcon/>レビューを投稿する</Button>
                </Link>
            </Box>
            <Box>
                {props.reviews.length > 0 && <Box mb={2}>({props.reviews.length}件)</Box>}
            </Box>
            <Box>
                {props.reviews.length === 0 && (
                    <Text>レビューはまだありません。</Text>
                )}
                <ReviewList reviews={props.reviews} />
            </Box>
        </Box>
    </Box>
  )
}
Detail.layout = (page) => <MainLayout children={page} title="店舗詳細" />;

export default Detail