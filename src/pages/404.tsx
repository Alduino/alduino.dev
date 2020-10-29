/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Heading, Stack, Text } from "@chakra-ui/core";
import Container from "../components/Container";
import Link from "../components/Link";

const IndexPage = () => (
    <Container>
        <Stack css={{
            maxWidth: 512,
            textAlign: "justify",
            marginTop: "-8em"
        }}>
            <Heading textAlign="center">Oops!</Heading>
            <Text>
                We couldn't find that page.
            </Text>
            <Link href="/" alignSelf="center" fontWeight="bold" mt={4}>
                Go home
            </Link>
        </Stack>
    </Container>
);

export default IndexPage;
