import React from "react";

function NameList() {
  const names = ["ram", "fun", "Menu", "tom", "UK", "USA"];
  const namelist = names.map((names) => <h2>{names}</h2>);
  return <div>{namelist}</div>;
}

export default NameList;
