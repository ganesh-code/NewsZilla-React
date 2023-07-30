import React from "react";
import { Link } from "react-router-dom";
// import FullNewsPage from "./FullNewsPage";

export default function Subnews(props) {

  let { title, discription,url, imgUrl, date, author, source } = props
  return (
    <div className={`col`} style={{ maxHeight: "500px", cursor:"pointer" }}>
      <div className={`card bg-${props.theme} text-${props.text}`}>
        <img src={!imgUrl ? "https://www.whatsupgoa.com/static/img/noimg.jpg" : imgUrl} className="card-img-top" alt="..." style={{ maxHeight: "200px" }} />
        <span className="position-absolute top-0 start-0 badge bg-danger">
          {source.name}
        </span>
        <div className="card-body">
          <h5 className="card-title">{!title ? "No Title" : title.slice(0,30)}...</h5>
          <p className="card-text">
            {!discription ? "No discription" : discription.slice(0,90)}...
          </p>
          <p className="card-text" style={{ fontSize: "12px", color: "#565656bf" }}><span className={` text-start text-${props.text}`}>{new Date(date).toGMTString()}</span> <span className={`text-end fw-semibold text-${props.text}`}>-{!author ? "Unknown" : author}</span></p>
          <Link to="/news" state={{ title, discription, url, imgUrl, date, author, source}} className="card-Link">Read More</Link>
          {/* <Link to={url} target="_blank">url</Link> */}
        </div>
      </div>
    </div>
  )
}