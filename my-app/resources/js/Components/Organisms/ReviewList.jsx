import React from 'react'
import { VStack } from '@chakra-ui/react'
import ReviewItem from '../Molecules/ReviewItem'
import { Box } from '@chakra-ui/react'

const ReviewList = ({ reviews }) => {
  return (
    <Box>
        {reviews.map((review, index) => (
            <ReviewItem key={index} review={review} />
        ))}
    </Box>
  )
}

export default ReviewList