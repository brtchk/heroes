const path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve(`src/templates/product.js`)
    const subProductTemplate = path.resolve(`src/templates/subproduct.js`)

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
      {
        allProductsYaml {
          edges {
          	node {
              title
              cover {
                image
                subtl
                title
              }
              textOnBlue
              subproducts {
                subproduct
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // create product pages
        result.data.allProductsYaml.edges.forEach(({ node }) => {
          const productTitle = node.title

          createPage({
            path: productTitle, // required
            component: productTemplate,
            context: {
              // Add optional context data. Data can be used as
              // arguments to the page GraphQL query.
              //
              // The page "path" is always available as a GraphQL
              // argument.

              title: productTitle,
            },
          })

          node.subproducts.forEach(({ subproduct }) => {
            createPage({
              path: `${productTitle}/${subproduct}`, // required
              component: subProductTemplate,
              context: {
                title: subproduct,
              },
            })
          })
        })

        return
      })
    )
  })
}
