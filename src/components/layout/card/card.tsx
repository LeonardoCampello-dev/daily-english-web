import { Box, Flex, Heading, Tag, Image } from '@chakra-ui/react'

import { ComponentType } from 'react'
import { Query } from 'react-query'
import { Link } from 'react-router-dom'

export const Card: ComponentType<CardProps> = ({ title, imagePath, redirectPath }) => {
  return (
    <Link to={redirectPath}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="gray.50"
        minWidth={300}
        px={10}
        py={4}
        mb={4}
        borderRadius={8}
      >
        <Box>
          <Heading as="h2" size="lg" mb="4px">
            {title}
          </Heading>

          <Tag size="sm" backgroundColor="secondary.500" color="white">
            320 items
          </Tag>
        </Box>

        {imagePath && (
          <Box>
            <Image boxSize={16} objectFit="cover" src={imagePath} />
          </Box>
        )}
      </Flex>
    </Link>
  )
}

export type CardProps = {
  title: string
  redirectPath: string
  imagePath?: string
  query?: Query
}
