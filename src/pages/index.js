import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import moment from "moment";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Line } from "react-chartjs-2";
import { Card } from "../components/Card";

const IndexPage = () => {
	const myData = useStaticQuery(graphql`
		query MyQuery {
			example {
				result {
					datetime
					case_key_list_value {
						history {
							datetime
							sale_price
							value
						}
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
									gatsbyImageData(placeholder: BLURRED)
								}
							}
							asset_description {
								icon_url
							}
						}
						key {
							name
							image {
								childImageSharp {
									gatsbyImageData(placeholder: BLURRED)
								}
							}
							sale_price
							sale_price_text
							asset_description {
								icon_url
							}
						}
					}
				}
			}
		}
	`);

	let myd = myData.example.result;
	return (
		<Layout>
			<SEO title="Home" description="CS:GO Math - Homepage" />
			{myd.case_key_list_value.map(r => (
				<Card
					key={r.case.name}
					r={r}
					datetime={myd.datetime}
				/>
			))}
		</Layout>
	);
};

export default IndexPage;
