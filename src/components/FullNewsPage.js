// FullNewsPage.js
import React from 'react';
import { useLocation, useNavigate , Link} from 'react-router-dom';

export default function FullNewsPage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, discription, url, imgUrl, date, author } = location.state;

  const goBackToNews = (props) => {
    navigate(-1); // Go back to the previous page
  };
  
  return (
    <div style={{ paddingTop: "5rem" }}>
      <div className="container">
        <i className="fa-solid fa-arrow-left fa-2xl" onClick={goBackToNews} style={{ cursor: "pointer", paddingBottom:"48px" }}></i>
        <div className={`card mb-3 bg-${props.theme} text-${props.text}`}>
          <img src={!imgUrl ? "https://www.whatsupgoa.com/static/img/noimg.jpg" : imgUrl} className="card-img-top" style={{maxHeight:"500px"}} alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{!title ? "No Title" : title}</h5>
            <p className="card-text">{!discription ? "No description" : discription}</p>
            <p className='card-text' style={{ fontSize: "12px", color: "#565656bf" }}>
              <span className={`text-start text-${props.text}`}>{new Date(date).toGMTString()}</span>{" "}
              <span className={`text-end fw-semibold text-${props.text}`}>-{!author ? "Unknown" : author}</span>
            </p>
            <Link className='card-link' to={url} target='_blank'>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
