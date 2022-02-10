import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import SEO from "../components/seo";
import moment from "moment";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Line } from "react-chartjs-2";

const boxShadow = {
  boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05)"
};

export const Card = props => {
  let r = props.r;
  r.case.lastTotal = r.case.prices[r.case.prices.length-1]['total']
  r.case.lastSalePrice = r.case.prices[r.case.prices.length-1]['sale_price'] 
  r.case.lastTimestamp = r.case.prices[r.case.prices.length-1]['timestamp'] 

  const dataFromR = r => {
    let h = r.case.prices;
    return valueData([
      {
        data: h.map(p => ({t: (p.timestamp*1000), y: p.total})),
        color: "#b0e3af",
        colorbg: "#cef7cd",
        label: "Estimated Value"
      },
      {
        data: h.map(p => ({t: (p.timestamp*1000), y: p.sale_price+250})),
        color: "#e3b5af",
        colorbg: "#f7cec8",
        label: "Sale Price"
      }
    ]);
  };

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
        label: (item, data)  => {
          let label = data.datasets[item.datasetIndex].label
          return label + ": " + saleToStr(item.value)
        }
      },
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      //mode: "x",
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
    <Link to={r.case.name}>
    <div class="row">
    <div
    class="col-4 d-flex align-items-center pr-0 pl-4"
    align="center"
    >
    <div>
    <img
    alt={`Image of ${r.case.name}`}
    src={r.case.icon_url}
    image={r.case.icon_url}
    style={{width: '100%'}}
    className="animate"
    //class="img-fluid"
    />
    </div>
    </div>

    <div class="col-8">
    <div class="card-body d-flex flex-column align-items-start">
    <strong class="d-inline-block mb-2 text-primary">Case</strong>
    <h4 class="mb-0">
    <span
    to={r.case.name}
    style={{ fontFamily: "DM Serif Display" }}
    class="text-dark"
    href="#"
    >
    {r.case.name}
    </span>
    </h4>
    <div class="mb-1 text-muted">
    {moment.unix(r.case.lastTimestamp).fromNow()}
    </div>
    <p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
    Sale Price: <strong>{saleToStr(r.case.lastSalePrice)}</strong>
    </p>
    </div>
    </div>
    </div>
    </Link>
    </div>

    <div class="col-md-6">
    <Link to={r.key.name}>
    <div class="row">
    <div
    class="col-4 d-flex align-items-center pr-0 pl-4"
    align="center"
    >
    <img
    alt={`Image of ${r.case.name}`}
    src={r.key.icon_url}
    image={r.key.icon_url}
    style={{width: '100%'}}
    className="animate"
    />
    </div>

    <div class="col-8">
    <div class="card-body d-flex flex-column align-items-start">
    <strong class="d-inline-block mb-2 text-success">Key</strong>
    <h4 class="mb-0">
    <span
    style={{ fontFamily: "DM Serif Display" }}
    class="text-dark"
    href="#"
    >
    {r.key.name}
    </span>
    </h4>
    <div class="mb-1 text-muted">
    {moment.unix(r.case.lastTimestamp).fromNow()}
    </div>
    <p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
    Sale Price: <strong>{saleToStr(250)}</strong>
    </p>
    </div>
    </div>
    </div>
    </Link>
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
    {saleToStr(250 + r.case.lastSalePrice)}
    </span>
    </li>
    <li class="bordbot list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <p class="my-0">Estimated Value</p>
    </div>
    <span class="text-muted">{saleToStr(r.case.lastTotal)}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
    <p class="my-0">
    <strong>Case Opening Profit</strong>
    </p>
    </div>
    <span class={`${color(r.case.lastTotal - (250 + r.case.lastSalePrice))}`}>
    {saleToStr(r.case.lastTotal - (250 + r.case.lastSalePrice))}
    </span>
    </li>
    </div>
    {open && (
      <div class="link shadhover p-4">
      <Line
      data={dataFromR(r)}
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
    <strong class={`${color(r.case.lastTotal - (250 + r.case.lastSalePrice))}`}>
    {Math.round(
      ((r.case.lastTotal - (250 + r.case.lastSalePrice)) /
        (250 + r.case.lastSalePrice)) *
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

export default Card;
