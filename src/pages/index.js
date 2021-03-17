import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import moment from "moment";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const boxShadow = {
	boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05)"
};

// data

const IndexPage = () => {
	const img_preurl = "https://community.akamai.steamstatic.com/economy/image/";
	const saleToStr = sale => {
		let toadd = "";
		let s = sale.toString();
		if (sale < 0) {
			s = s.slice(1);
			toadd = "-";
		}
		let r;
		if (s.length == 1) {
			r = "$0.0" + s;
		} else if (s.length == 2) {
			r = "$0." + s;
		} else {
			r = "$" + s.slice(0, -2) + "." + s.slice(-2);
		}
		return toadd + r;
	};
	const color = sale => (sale < 0 ? "text-danger" : "text-success");
	const myData = useStaticQuery(graphql`
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
								icon_url
							}
						}
						key {
							name
							image {
								childImageSharp {
									gatsbyImageData(
										placeholder: BLURRED
									)
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

	return (
		<Layout>
			<SEO title="Home" description="CS:GO Math - Homepage" />
			{myData.example.result[0].case_key_list_value.map(r => (
				<div style={boxShadow} class="card p-3 mb-4 h-md-250">
					<div class="row no-gutters">
						<div class="col-md-6">
							<div class="row">
								<div
									class="col-4 d-flex align-items-center pr-0 pl-4"
									align="center"
								>
									<Link to={r.case.name}>
										<GatsbyImage 
											alt={`Image of ${r.case.name}`}
											image={getImage(r.case.image)}
											//class="img-fluid"
										/>
									</Link>
								</div>

								<div class="col-8">
									<div class="card-body d-flex flex-column align-items-start">
										<strong class="d-inline-block mb-2 text-primary">
											Case
										</strong>
										<h4 class="mb-0">
											<Link
												to={r.case.name}
												style={{ fontFamily: "DM Serif Display" }}
												class="text-dark"
												href="#"
											>
												{r.case.name}
											</Link>
										</h4>
										<div class="mb-1 text-muted">
											{moment(myData.example.result[0].datetime).fromNow()}
										</div>
										<p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
											Sale Price: <strong>{r.case.sale_price_text}</strong>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<div class="row">
								<div
									class="col-4 d-flex align-items-center pr-0 pl-4"
									align="center"
								>
									<Link to={r.key.name}>
										<GatsbyImage 
											alt={`Image of ${r.key.name}`}
											image={getImage(r.key.image)}
											//class="img-fluid"
										/>
									</Link>
								</div>

								<div class="col-8">
									<div class="card-body d-flex flex-column align-items-start">
										<strong class="d-inline-block mb-2 text-success">
											Key
										</strong>
										<h4 class="mb-0">
											<Link
												to={r.key.name}
												style={{ fontFamily: "DM Serif Display" }}
												class="text-dark"
												href="#"
											>
												{r.key.name}
											</Link>
										</h4>
										<div class="mb-1 text-muted">
											{moment(myData.example.result[0].datetime).fromNow()}
										</div>
										<p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
											Sale Price: <strong>{r.key.sale_price_text}</strong>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row no-gutters mt-2">
						<ul class="list-group col">
							<li class="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<p class="my-0">Total Sale Price</p>
								</div>
								<span class="text-muted">
									{saleToStr(r.key.sale_price + r.case.sale_price)}
								</span>
							</li>
							<li class="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<p class="my-0">Estimated Value</p>
								</div>
								<span class="text-muted">{saleToStr(r.value)}</span>
							</li>
							<li class="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<p class="my-0">
										<strong>Case Opening Profit</strong>
									</p>
								</div>
								<span
									class={`${color(
										r.value - (r.key.sale_price + r.case.sale_price)
									)}`}
								>
									{saleToStr(r.value - (r.key.sale_price + r.case.sale_price))}
								</span>
							</li>
							<li class="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<p class="my-0">
										<strong>Case Opening Profit Ratio</strong>
									</p>
								</div>
								<strong
									class={`${color(
										r.value - (r.key.sale_price + r.case.sale_price)
									)}`}
								>
									{Math.round(
										((r.value - (r.key.sale_price + r.case.sale_price)) /
											(r.key.sale_price + r.case.sale_price)) *
											100
									) + "%"}
								</strong>
							</li>
						</ul>
					</div>
				</div>
			))}
		</Layout>
	);
};

export default IndexPage;
