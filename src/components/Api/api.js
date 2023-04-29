import React from "react";
import { useQuery, gql } from "@apollo/client";

const Api_Chart = gql`
  query APIDATA {
      products(
        filter: { sku: { eq: "24-MB03" } }
      ) {
        items {
          name
          sku
        }
      }
  }
`

export default function Api() {
  const { data, loading, error } = useQuery(Api_Chart);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data)

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.products.map((index, launch) => (
          <li key={index}>{launch.name}</li>
        ))}
      </ul>
    </div>
  );
}

