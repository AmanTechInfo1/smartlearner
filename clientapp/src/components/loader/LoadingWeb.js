import React from "react";
import { ScaleLoader } from "react-spinners";
import './css/loadingweb.css';


export default function LoadingWeb() {
  return (
    <div className="loader_Container">
      <ScaleLoader color="#eb0009" height={150} width={15} />
      <p>Loading...</p>
    </div>
  );
}
