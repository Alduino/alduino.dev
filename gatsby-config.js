module.exports = {
    siteMetadata: {
        title: "Alduino",
        description: "Alduino's portfolio",
        keywords: "alduino, portfolio, code, programming",
        siteUrl: "https://alduino.dev",
        author: {
            name: "Zach Barham",
            url: "https://alduino.dev",
            email: "me@alduino.dev"
        }
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                // eslint-disable-next-line no-undef
                path: `${__dirname}/src/content`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content-assets",
                // eslint-disable-next-line no-undef
                path: `${__dirname}/src/content`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                        options: {
                            wrapperStyle: "margin-bottom: 1rem"
                        }
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-smartypants",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1140,
                            quality: 90,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        "gatsby-transformer-json",
        {
            resolve: "gatsby-plugin-canonical-urls",
            options: {
                siteUrl: "https://gatsby-starter-typescript-plus.netlify.com"
            }
        },
        "gatsby-plugin-emotion",
        "gatsby-plugin-typescript",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-chakra-ui",
        "gatsby-plugin-optimize-svgs"
    ]
};
