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

                <p><a href="mailto:me@alduino.dev">Send me an email</a> (the form isn't working for now)</p>
            </div>
        </Box>
    </Flex>
);

export default Contact;
