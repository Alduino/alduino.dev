/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Heading, Stack, Text } from "@chakra-ui/core";
import Container from "../components/Container";
import { gradientBetween } from "../styles/gradient-text";
import Link from "../components/Link";

const IndexPage = () => (
    <Container>
        <Stack css={{
            maxWidth: 512,
            textAlign: "justify",
            marginTop: "-8em"
        }}>
            <Heading
                css={v => gradientBetween(v.colors.pink[300], v.colors.blue[300])}
                fontSize="4em"
            >
                <span css={{fontWeight: 400, marginRight: ".1em"}}>ZACH</span>
                {/* make screen readers be able to read my name */}
                <span css={{fontSize: 0}}> </span>
                BARHAM
            </Heading>
            <Text my={4}>
                <strong>Hello!</strong> I'm Zach Barham. Right now, I'm a student at the Queensland University of
                Technology, studying computer science and screen content production.
            </Text>
            <Text>
                I'm currently focusing on making front-end webapps written in React/Typescript, although I'm still keeping
                up to date with various other technologies, like C#, Rust, and Docker.
            </Text>
            <Link href="/projects" alignSelf="center" fontWeight="bold" mt={4}>
                View projects
            </Link>
        </Stack>
    </Container>
);

export default IndexPage;
