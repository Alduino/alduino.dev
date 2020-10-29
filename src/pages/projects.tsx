/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Box, Flex, Grid, Heading, Image, Stack } from "@chakra-ui/core";
import { graphql } from "gatsby";
import Link from "../components/Link";

interface ProjectsProps {
    data: {
        allMarkdownRemark: {
            edges: {
                node: {
                    fields: {
                        slug: string;
                    };
                    excerpt: string;
                    html: string;
                    frontmatter: {
                        orderOverride?: number;
                        projectName: string;
                        technologies: string[];
                        image: {
                            publicURL: string;
                        };
                        link: string;
                    };
                };
            }[];
        };
    };
}

function orderOf(b: { node: { frontmatter: { orderOverride?: number } } }) {
    return b.node.frontmatter.orderOverride || 0;
}

const headerLinks = {
    Home: "/",
    Contact: "/contact"
};

const Projects = (props: ProjectsProps) => (
    <Flex justifyContent="center">
        <Box as="main" mt={20}>
            <div>
                <Stack direction="row" mb={8} alignItems="center">
                    <Heading flexGrow={1}>Projects</Heading>

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

                <Stack w={["100%", "100%", "40rem"]}>
                    {props.data.allMarkdownRemark.edges.sort((a, b) => orderOf(b) - orderOf(a)).map(({ node: project }) => (
                        <Flex
                            key={project.frontmatter.projectName}
                            borderWidth={1} rounded="md"
                            px={4} py={3}
                            height={["auto", "auto", "11.5rem"]}
                        >
                            <Grid
                                templateRows={["auto auto auto", "auto auto auto", "2rem 6.75rem 1.25rem"]}
                                templateColumns="1fr auto"
                                mr={5}
                                height={["auto", "auto", 40]}
                            >
                                <Heading fontSize="lg" fontFamily="body" mb={2}
                                    aria-level={3}>{project.frontmatter.projectName}</Heading>
                                <Box
                                    dangerouslySetInnerHTML={{ __html: project.html }}
                                    gridColumn="1/3"
                                />
                                <Link color="blue.400" href={project.frontmatter.link} gridColumn={2}
                                    gridRow={3}>More...</Link>
                            </Grid>

                            <Image
                                src={project.frontmatter.image.publicURL}
                                size={40}
                                objectFit="cover" objectPosition="right"
                                rounded="lg"
                            />
                        </Flex>
                    ))}
                </Stack>
            </div>
        </Box>
    </Flex>
);

export default Projects;

export const query = graphql`
    query Projects {
        allMarkdownRemark {
            edges {
                node {
                    excerpt
                    html
                    fields {
                        slug
                    }
                    frontmatter {
                        projectName
                        technologies
                        link
                        orderOverride
                        image {
                            publicURL
                        }
                    }
                }
            }
        }
    }
`;
