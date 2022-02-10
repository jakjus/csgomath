import * as React from "react";
import { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import moment from "moment";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Line } from "react-chartjs-2";
import { Card } from "../components/Card";
import { CardFake } from "../components/CardFake";

const boxShadow = {
  boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .05)",
};


const IndexPage = () => {
  const [jsonData, setJsonData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      let result = await fetch(`http://host.jakjus.com:3010/api/cases`);
      let data = await result.json();
      setJsonData(data.data)
    }
    fetchData()
  },[])
  return (
    <Layout>
    <SEO title="Home" description="CS:GO Math - Homepage" />
    {!jsonData && 

      <>
      <CardFake/>
      <CardFake/>
      <CardFake/>
      </>
      }
    {jsonData && jsonData.map(r => (
      r.key &&
      <Card
      key={`k`+r.case.name}
      r={r}
      />
    ))}
    </Layout>
  );
};

export default IndexPage;
