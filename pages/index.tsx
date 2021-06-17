import { Flex, Image } from "@chakra-ui/react"

import Form from "../components/Form"

const Home = () => {

  return (
    <Flex h="100vh">
      <Flex h="100vh" minW={{base: "100%", md: "500"}} boxShadow="lg">
        <Form/>
      </Flex>
      <Flex grow={1}>
        <Image
          src="/login_bg.jpg"
          alt="Login background image"
          objectFit="cover"
          opacity={0.75}
        />
      </Flex>
    </Flex>
  )
}

export default Home