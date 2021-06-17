import { useState } from "react"
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"

const Form = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.50", "gray.700")
  const headingColor = useColorModeValue("gray.800", "gray.50")
  const mutedTextColor = useColorModeValue("gray.600", "gray.400")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex w="100%" direction="column" justifyContent="space-between" background={formBackground} p={{base:6, md:12}}>
      <Image maxW="180px" mb={{base: 10, md: 0}} src={colorMode === "light" ? "/Logo-dark.png" : "/Logo.png"} alt="Dynamon Logo" />
      <form
        method="POST"
        onSubmit={event => {
          event.preventDefault()
          console.log("Username: ", username)
          console.log("Password: ", password)
        }}
      >
        <Flex w="100%" direction="column" mb={{base: 10, md: 0}}>
          <Heading size="lg" mb={{base: 5, md: 10}} color={headingColor}>Welcome back!</Heading>
          <FormControl isRequired>
            <FormLabel color={mutedTextColor} htmlFor="username">Username</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Icon>
              </InputLeftElement>
              <Input
                id="username-field"
                placeholder="Ammar"
                onChange={({target}) => setUsername(target.value)}
                value={username}
                variant="filled"
                mb={5}
                name="username"
                type="text"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={mutedTextColor} htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </Icon>
              </InputLeftElement>
              <Input
                id="password-field"
                placeholder="**********"
                onChange={({target}) => setPassword(target.value)}
                value={password}
                variant="filled"
                mb={5}
                name="password"
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement w="4.5rem">
                <Button size="sm" h="1.75rem" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Flex mb={{base: 5, md: 10}} justify="space-between">
            <Checkbox size="sm" colorScheme="blue" defaultChecked>Remember me?</Checkbox>
            <Link href="#" fontSize="sm">Forgot password?</Link>
          </Flex>
          <Button colorScheme="blue" mb={5} type="submit" >Sign In</Button>
          <Text color={mutedTextColor}>
            New here?{" "}
            <Link href="#" color="blue.400">
              Create an account
            </Link>
          </Text>
        </Flex>
      </form>
      <Link href="#" color={mutedTextColor} onClick={toggleColorMode} fontSize="sm">Click to toggle dark mode.</Link>
    </Flex>
  )
}

export default Form