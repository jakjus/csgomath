import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import moment from "moment";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Line } from "react-chartjs-2";

const boxShadow = {
	boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05)"
};

// data
//

const Card = props => {
	let r = props.r;

	const dataFromR = r => {
		let h = r.history;
		return valueData([
			{
				data: processHistory(h, "value"),
				color: "#b0e3af",
				colorbg: "#cef7cd",
				label: "Estimated Value"
			},
			{
				data: processHistory(h, "sale_price"),
				color: "#e3b5af",
				colorbg: "#f7cec8",
				label: "Sale Price"
			}
		]);
	};

	useEffect(() => {
		setValData(dataFromR(r));
	}, []);

	const saleToStr = sale => {
		let toadd = "";
		let s = sale.toString();
		if (sale < 0) {
			s = s.slice(1);
			toadd = "-";
		}
		let r;
		if (s.length === 1) {
			r = "$0.0" + s;
		} else if (s.length === 2) {
			r = "$0." + s;
		} else {
			r = "$" + s.slice(0, -2) + "." + s.slice(-2);
		}
		return toadd + r;
	};
	const color = sale => (sale < 0 ? "text-danger" : "text-success");

	const [open, setOpen] = useState(false);
	const [valData, setValData] = useState(null);

	const valueData = dataArr => {
		let datasets = [];
		dataArr.map(dataObj =>
			datasets.push({
				label: dataObj.label,
				borderColor: dataObj.color,
				data: dataObj.data,
				fill: false,
				backgroundColor: dataObj.colorbg,
				cubicInterpolationMode: "default",
				borderDash: [],
				borderDashOffset: 0.0,
				pointBorderColor: "rgba(255,255,255,0)",
				pointBorderWidth: 20,
				pointHoverRadius: 4,
				pointHoverBorderWidth: 15,
				pointRadius: 0
			})
		);
		return {
			datasets: datasets
		};
	};

	const processHistory = (history, field) => {
		let newHistory = [];
		history
			.sort((a, b) => new Date(a) > new Date(b))
			.map(h =>
				newHistory.map(a => a.datetime).includes(h.datetime)
					? null
					: newHistory.push({ t: h.datetime, y: h[field] })
			);
		return newHistory;
	};

	const lineOptions = {
		//responsive: true,
		// scales: {
		// 	yAxes: [{ display: false }],
		// 	xAxes: [{ type: "time", time: { unit: "month" } }]
		// },
		// maintainAspectRatio: false,
		legend: {
			//display: false
		},
		tooltips: {
			//enabled: false,
			callbacks: {
				label: (t, c) =>
					c.datasets[t.datasetIndex].label + ": " + saleToStr(t.value)
			},
			backgroundColor: "#f5f5f5",
			titleFontColor: "#333",
			bodyFontColor: "#666",
			bodySpacing: 4,
			xPadding: 12,
			mode: "x",
			intersect: 0,
			position: "nearest"
		},
		scales: {
			yAxes: [
				{
					//barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: "rgba(29,140,248,0.0)",
						zeroLineColor: "transparent"
					},
					ticks: {
						callback: (value, index, values) => saleToStr(value),
						suggestedMin: 100,
						suggestedMax: 300,
						padding: 20,
						fontColor: "#9a9a9a"
					}
				}
			],
			xAxes: [
				{
					type: "time",
					//time: {unit: 'day'},
					time: { tooltipFormat: "DD/MM/YYYY", unit: "day" },
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: "rgba(29,140,248,0.1)",
						zeroLineColor: "transparent"
					},
					ticks: {
						//padding: 20,
						fontColor: "#9a9a9a"
					}
				}
			]
		}
	};

	return (
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
								<strong class="d-inline-block mb-2 text-primary">Case</strong>
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
									{moment(props.datetime).fromNow()}
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
								<strong class="d-inline-block mb-2 text-success">Key</strong>
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
									{moment(props.datetime).fromNow()}
								</div>
								<p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
									Sale Price: <strong>{saleToStr(249)}</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row no-gutters mt-2">
				<ul class="list-group col">
					<div
						class="link shadhover"
						aria-checked={open}
						tabIndex="0"
						role="switch"
						onKeyDown={() => setOpen(!open)}
						onClick={() => setOpen(!open)}
					>
						<li class="bordbot list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<p class="my-0">Total Sale Price</p>
							</div>
							<span class="text-muted">
								{saleToStr(249 + r.case.sale_price)}
							</span>
						</li>
						<li class="bordbot list-group-item d-flex justify-content-between lh-condensed">
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
							<span class={`${color(r.value - (249 + r.case.sale_price))}`}>
								{saleToStr(r.value - (249 + r.case.sale_price))}
							</span>
						</li>
					</div>
					{open && (
						<div class="link shadhover p-4">
							<Line
								data={valData}
								datasetKeyProvider={() => btoa(Math.random()).substring(0, 12)}
								options={lineOptions}
							/>
						</div>
					)}
					<div class="link shadhover">
						<li class="list-group-item d-flex justify-content-between lh-condensed">
							<div>
								<p class="my-0">
									<strong>Case Opening Profit Ratio</strong>
								</p>
							</div>
							<strong class={`${color(r.value - (249 + r.case.sale_price))}`}>
								{Math.round(
									((r.value - (249 + r.case.sale_price)) /
										(249 + r.case.sale_price)) *
										100
								) + "%"}
							</strong>
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
};

const IndexPage = () => {
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

	const [myd, setMyd] = useState(null);

	useEffect(() => {
		!myData.example.result[0].case_key_list_value[0].history && myData.example.result.map(res => {
			res.case_key_list_value.map(cklv => {
				myData.example.result[0].case_key_list_value.map(cklvhere => {
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
		setMyd(myData.example.result[0])
	}, []);

	return (
		<Layout>
			<SEO title="Home" description="CS:GO Math - Homepage" />
			{myd && myd.case_key_list_value.map(r => (
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
