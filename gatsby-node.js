const fetch = require(`node-fetch`);
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.sourceNodes = async ({
	actions: { createNode },
	createContentDigest
}) => {
	// get data from GitHub API at build time
	const result = await fetch(`http://51.195.45.0:3000/api/cases`);
	const resultData = await result.json();
	// create node for build time data example in the docs
	createNode({
		// nameWithOwner and url are arbitrary fields from the data
		result: resultData,
		// required fields
		id: `example-build-time-data`,
		parent: null,
		children: [],
		internal: {
			type: `Example`,
			contentDigest: createContentDigest(resultData)
		}
	});
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const myData = await graphql(`
		query MyQuery {
			example {
				result {
					datetime(fromNow: true)
					value
					case {
						name
						sale_price
						sale_price_text
						sell_listings
						sell_price
						sell_price_text
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
						sale_price
						sale_price_text
						sell_listings
						asset_description {
							descriptions {
								value
								color
							}
							icon_url
							type
						}
						name
					}
				}
			}
		}
	`);
	console.log(myData)

	myData.data.example.result.forEach(r => {
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
