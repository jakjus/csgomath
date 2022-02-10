const fetch = require(`node-fetch`);
const path = require(`path`);
const { createRemoteFileNode } = require("gatsby-source-filesystem");

// exports.sourceNodes = async ({
//   actions: { createNode, createNodeField },
//   createContentDigest,
//   createNodeId,
//   cache,
//   store
// }) => {
//   const result = await fetch(`http://host.jakjus.com:3010/api/cases`);
//   let jsonData = await result.json();
//   console.log(jsonData)
//   await jsonData.data.map(d => {
//     createNode({
//       pair: d,
//       id: `id_${d.case.name}`,
//       parent: null,
//       children: []
//     });
//   });
// };
// 
// exports.onCreateNode = async ({ node, actions, getCache, createNodeId }) => {
//   const { createNode, createNodeField } = actions;
//   if (node.pair) {
//     let newnode = await createRemoteFileNode({
//       url: pair.case.asset_description.icon_url,
//       parentNodeId: node.id,
//       getCache,
//       createNode,
//       createNodeId
//     });
//     let newnode2 = await createRemoteFileNode({
//       url: pair.key.asset_description.icon_url,
//       parentNodeId: node.id,
//       getCache,
//       createNode,
//       createNodeId
//     });
// 
//     pair.case.image___NODE = newnode.id;
//     pair.key.image___NODE = newnode2.id;
//   }
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createNode } = actions;
  // const myData = await graphql(`
  //               query MyQuery {
  //                       example {
  //                               result {
  //                                       datetime
  //                                       case_key_list_value {
  //                                               value
  //                                               case {
  //                                                       name
  //                                                       sale_price
  //                                                       sale_price_text
  //                                                       sell_listings
  //                                                       sell_price
  //                                                       sell_price_text
  //                                                       image {
  //                                                               childImageSharp {
  //                                                                       gatsbyImageData(placeholder: BLURRED)
  //                                                               }
  //                                                       }
  //                                                       asset_description {
  //                                                               descriptions {
  //                                                                       value
  //                                                                       color
  //                                                                       total
  //                                                               }
  //                                                               icon_url
  //                                                               type
  //                                                       }
  //                                               }
  //                                               key {
  //                                                       name
  //                                                       sale_price
  //                                                       sale_price_text
  //                                                       sell_listings
  //                                                       image {
  //                                                               childImageSharp {
  //                                                                       gatsbyImageData(placeholder: BLURRED)
  //                                                               }
  //                                                       }
  //                                                       asset_description {
  //                                                               descriptions {
  //                                                                       value
  //                                                                       color
  //                                                               }
  //                                                               icon_url
  //                                                               type
  //                                                       }
  //                                               }
  //                                       }
  //                               }
  //                       }
  //               }
  //       `);
  //
  const result = await fetch(`http://host.jakjus.com:3010/api/cases`);
  let jsonData = await result.json();

  jsonData.data.map(async r => {
    // createPage({
    // 	path: `/${r.case.name}-${r.case.key}`,
    // 	component: require.resolve(`./src/templates/pairDetails.js`),
    // 	context: { r: r }
    // });
    createPage({
      path: `/${r.case.name}`,
      component: require.resolve(`./src/templates/details.js`),
      context: { r: r.case }
    });
    if (!r.key) return
    createPage({
      path: `/${r.key.name}`,
      component: require.resolve(`./src/templates/details.js`),
      context: { r: r.key }
    });
  });
};
