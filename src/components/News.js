import React, { useEffect, useState } from "react";
import Subnews from "./Subnews";
import Spinner from "./Spinner";
import Error from "./Error";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';




export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] =useState("")
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const fetchData = async () => {
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}`;
    setLoading(true)
    props.setProgress(25)
    let data = await fetch(url);
    props.setProgress(50)
    let parseData = await data.json();
    setStatus(parseData.status)
    setErrorMsg(parseData.message)
    props.setProgress(75);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false)
    props.setProgress(100)
  }


  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-NewsZilla`
    fetchData();
    // eslint-disable-next-line
  }, [props.category])


  const fetchMoreData = async () => {
    let nextPage = page + 1
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <div className={`container`}>
      {status === "error" ? (
      <Error status={status} errorMsg={errorMsg} />
    ) : (
      <>
        <h1 className="pb-4" style={{ marginTop: "5rem" }}>NewsZilla - Top {capitalizeFirstLetter(props.category)} News</h1>
        {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4 className="text-center my-4">Loading...</h4>}
      >
        {<div className="container row row-cols-1 row-cols-md-3 g-4 m-0">
          {articles.map((element, index) => {
            return <Subnews key={index} title={element.title} discription={element.description} imgUrl={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source} theme={props.theme} text={props.text} />
          })}
        </div>}
      </InfiniteScroll>
      </>
    )}
    </div>
  )
}



News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 9,
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
