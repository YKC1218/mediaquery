import React from "react";
import { useParams } from "react-router-dom";

export default function Main() {
  let { name } = useParams();
  return <div>Main page of {name}</div>;
}
