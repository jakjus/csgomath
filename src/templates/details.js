import * as React from "react";
import Layout from "../components/layout";
import "@fontsource/dm-serif-display";
import "@fontsource/lato";
import moment from "moment";
import { Link } from "gatsby";
import { useState, useEffect } from "react";
import SEO from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from "@fortawesome/free-brands-svg-icons";

const boxShadow = {
  boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05  )"
};

// data
const Details = ({ pageContext: { r } }) => {
  const [desc, setDesc] = useState(null)
  useEffect(() => {
    async function fetchData() {
      let rtype = 'case'
      if (r.name.includes('Key')) rtype = 'key'
      let result = await fetch(`http://host.jakjus.com:3010/api/${rtype}_description/${r.id}`);
      let data = await result.json();
      setDesc(data.data
        .sort((a,b) => a.ind - b.ind)
      )
    }
    fetchData()
  },[])
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
    { desc &&
    <SEO
    title={r.name}
    description={desc
      .map(el => el.value)
      .join(", ")}
    />
    }
    <div
    style={{
      borderBottom: "1px solid #ebebeb"
    }}
    class="row pb-4"
    >
    <div class="col-sm-4">
    <img
    alt={`Image of ${r.name}`}
    src={r.icon_url}
    image={r.icon_url}
    style={{width: '100%'}}
    />
    </div>
    <div class="col-sm-8">
    <div class="card-body d-flex flex-column align-items-start">
    <strong class="d-inline-block mb-2 text-primary">
    {r.name.includes('Key') ? "Key" : "Case"}
    </strong>
    <h4 class="mb-0">{r.name}</h4>
    {r.name.includes('Key') ? <>
      <p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
      <span class="text-muted"> Fixed Sale Price: </span>
      <strong>{saleToStr(250)}</strong>
      </p>
      </>
      :
      <>
      <p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
      <span class="text-muted"> Estimated Value: </span>
      <strong>{saleToStr(r.prices[r.prices.length-1].total)}</strong>
      </p>
      <p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
      <span class="text-muted"> Sale Price: </span>
      <strong>{saleToStr(r.prices[r.prices.length-1].sale_price)}</strong>
      </p>
      <p style={{ fontSize: "0.9rem" }} class="card-text mb-auto">
      <span class="text-muted"> 
      {moment.unix(r.prices[r.prices.length-1].timestamp).fromNow()}
      </span>
      </p>
      </>
    }

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
    {desc && desc.map(
      el => !["", " "].includes(el.value) &&
      (
        <Link class="link shadhover" to={urlMarketQuery(el.value)} target="_blank">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
        <p style={{ color: "#" + (el.color == 'NULL' ? '99ccff' : el.color) }} class="my-0">
        {el.value}
        </p>
        </div>
        {el.prices && (el.prices.length > 0) &&
        <span class="text-muted">
        {el.prices[el.prices.length-1]['total'] && saleToStr(el.prices[el.prices.length-1]['total'])}
        </span>
        }
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
