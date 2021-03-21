const fetch = require(`node-fetch`);
const path = require(`path`);
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.sourceNodes = async ({
	actions: { createNode, createNodeField },
	createContentDigest,
	createNodeId,
	cache,
	store
}) => {
	// get data from GitHub API at build time
	const result = await fetch(`http://51.195.45.0:3000/api/cases`);
	let resultData = await result.json();

	await resultData.map(res => {
		res.case_key_list_value.map(cklv => {
			resultData[0].case_key_list_value.map(cklvhere => {
				if (cklv.case.name == cklvhere.case.name) {
					cklvhere.history = cklvhere.history || [];
					cklvhere.history.push({
						datetime: res.datetime,
						sale_price: 249 + cklv.case.sale_price,
						value: cklv.value
					});
				}
			});
		});
	});

	// create node for build time data example in the docs
	let node = await createNode({
		result: resultData[0],
		id: `myresult`,
		parent: null,
		children: [],
		internal: {
			type: `Example`,
			contentDigest: createContentDigest(resultData)
		}
	});
};

exports.onCreateNode = async ({ node, actions, getCache, createNodeId }) => {
	const { createNode, createNodeField } = actions;
	if (node.id == "myresult") {
		const img_preurl =
			"https://community.akamai.steamstatic.com/economy/image/";
		for (pair of node.result.case_key_list_value) {
			let newnode = await createRemoteFileNode({
				url:
					img_preurl +
					pair.case.asset_description.icon_url,
				parentNodeId: node.result.case_key_list_value[0].case.id,
				getCache,
				createNode,
				createNodeId
			});
			let newnode2 = await createRemoteFileNode({
				url:
					img_preurl +
					pair.key.asset_description.icon_url,
				parentNodeId: node.result.case_key_list_value[0].id,
				getCache,
				createNode,
				createNodeId
			});

			pair.case.image___NODE = newnode.id;
			pair.key.image___NODE = newnode2.id;
		}
	}
	// Transform the new node here and create a new node or
	// create a new node field.
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage, createNode } = actions;
	const myData = await graphql(`
		query MyQuery {
			example {
				result {
					datetime
					case_key_list_value {
						value
						case {
							name
							sale_price
							sale_price_text
							sell_listings
							sell_price
							sell_price_text
							image {
								childImageSharp {
									gatsbyImageData(
										placeholder: BLURRED
									)
								}
							}
							asset_description {
								descriptions {
									value
									color
									total
								}
								icon_url
								type
							}
						}
						key {
							name
							sale_price
							sale_price_text
							sell_listings
							image {
								childImageSharp {
									gatsbyImageData(
										placeholder: BLURRED
									)
								}
							}
							asset_description {
								descriptions {
									value
									color
								}
								icon_url
								type
							}
						}
					}
				}
			}
		}
	`);

	myData.data.example.result.case_key_list_value.forEach(async r => {
		createPage({
			path: `/${r.case.name}-${r.case.key}`,
			component: require.resolve(`./src/templates/pairDetails.js`),
			context: { r: r }
		});
		createPage({
			path: `/${r.case.name}`,
			component: require.resolve(`./src/templates/details.js`),
			context: { r: r.case }
		});
		createPage({
			path: `/${r.key.name}`,
			component: require.resolve(`./src/templates/details.js`),
			context: { r: r.key }
		});
	});
};
