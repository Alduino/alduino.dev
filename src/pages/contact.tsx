/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
    Box, Button,
    Flex,
    Heading, Icon,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack, Textarea
} from "@chakra-ui/core";
import Link from "../components/Link";

const headerLinks = {
    Home: "/",
    Projects: "/projects"
};

const Contact = () => (
    <Flex justifyContent="center">
        <Box as="main" mt={20}>
            <div>
                <Stack direction="row" mb={8} alignItems="center">
                    <Heading flexGrow={1}>Contact</Heading>

                    <Box>
                        {Object.entries(headerLinks).map(([name, link], idx, {length}) => (
                            <span key={name}>
                                <Link color="blue.400" href={link}>{name}</Link>

                                {idx < length - 1 && (
                                    <span css={{
                                        margin: "0 .2em"
                                    }}>|</span>
                                )}
                            </span>
                        ))}
                    </Box>
                </Stack>

                <form netlify method="POST" name="contact">
                    <Stack w={["100%", "25rem", "40rem"]}>
                        <InputGroup>
                            <InputLeftAddon>
                                <Icon name="email" />
                            </InputLeftAddon>

                            <Input type="email" name="email" isRequired placeholder="your@email.com" />
                        </InputGroup>

                        <Textarea name="message" placeholder="Your message" isRequired />

                        <Button type="submit">Send</Button>
                    </Stack>
                </form>
            </div>
        </Box>
    </Flex>
);

export default Contact;
