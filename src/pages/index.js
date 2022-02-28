import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card } from "../components/Card";
import { CardSkeleton } from "../components/CardSkeleton";

const IndexPage = () => {
  const [jsonData, setJsonData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      let result = await fetch(`https://more.jakjus.com/api/cases`);
      let data = await result.json();
      setJsonData(data.data)
    }
    fetchData()
  },[])
  return (
    <Layout>
    <SEO title="Home" description="CS:GO Math - Homepage" />
    <h1>List of Cases and Keys</h1>
    {!jsonData && 
      <>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
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
