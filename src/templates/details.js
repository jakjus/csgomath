import * as React from "react";
import Layout from "../components/layout";
import "@fontsource/dm-serif-display";
import "@fontsource/lato";
import { Link } from "gatsby";
import SEO from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from "@fortawesome/free-brands-svg-icons";

const boxShadow = {
	boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05  )"
};

// data
const Details = ({ pageContext: { r } }) => {
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
	const urlMarket = name =>
		"https://steamcommunity.com/market/listings/730/" + name;
	const urlMarketQuery = name =>
		name.includes("|") &&
		'https://steamcommunity.com/market/search?q="' + name + '"';
	const color = sale => (sale < 0 ? "text-danger" : "text-success");
	return (
		<Layout>
			<SEO
				title={r.name}
				description={r.asset_description.descriptions
					.map(el => el.value)
					.join(", ")}
			/>
			<div
				style={{
					borderBottom: "1px solid #ebebeb"
				}}
				class="row pb-4"
			>
				<div class="col-sm-4">
					<GatsbyImage
						alt={`Image of ${r.name}`}
						image={getImage(r.image)}
						//class="img-fluid"
					/>
				</div>
				<div class="col-sm-8">
					<div class="card-body d-flex flex-column align-items-start">
						<strong class="d-inline-block mb-2 text-primary">
							{r.asset_description.type}
						</strong>
						<h4 class="mb-0">{r.name}</h4>
						<div class="mb-1 text-muted">{r.datetime}</div>
						{r.name.includes('Key') ? <>
						<p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
							<span class="text-muted"> Fixed Sale Price: </span>
							<strong>$2.50</strong>
						</p>
						<p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
							<span class="text-muted"> Market Sale Price: </span>
							<strong>{r.sale_price_text}</strong>
						</p>
						</>
						:
						<p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
							<span class="text-muted"> Sale Price: </span>
							<strong>{r.sale_price_text}</strong>
						</p>}

						<p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
							<span class="text-muted"> Sell Listings: </span>
							<strong>{r.sell_listings}</strong>
						</p>
						<Link
							to={urlMarket(r.name)}
							target="_blank"
						>
							<button type="button" 
								style={{ fontSize: "0.85rem" }}
								class="my-2 btn btn-outline-dark">
								Check on {" "}
      <FontAwesomeIcon icon={faSteam} />
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div class="row mt-3 mb-5">
				<div class="col">
					<h4
						style={{
							fontFamily: "DM Serif Display",
							fontSize: "1.2rem",
							lineHeight: "3rem"
						}}
					>
						Description
					</h4>
					<ul class="list-group" style={boxShadow}>
						{r.asset_description.descriptions.map(
							el =>
								el.value.replace(" ", "") && (
									<Link to={urlMarketQuery(el.value)} target="_blank">
										<li class="shadhover list-group-item d-flex justify-content-between lh-condensed">
											<div>
												<p style={{ color: "#" + el.color }} class="my-0">
													{el.value}
												</p>
											</div>
											<span class="text-muted">
												{el.total && saleToStr(el.total)}
											</span>
										</li>
									</Link>
								)
						)}
					</ul>
				</div>
			</div>
		</Layout>
	);
};

export default Details;
