import { Skeleton, Stack } from '@chakra-ui/react'

import { memo } from 'react'

export const EditWordFormSkeletonComponent = () => {
  return (
    <Stack px={4} py={4}>
      <Skeleton height="36px" />
      <Skeleton height="36px" mt={4} />
      <Skeleton height="72px" mt={4} />
    </Stack>
  )
}

export const EditWordFormSkeleton = memo(EditWordFormSkeletonComponent)
