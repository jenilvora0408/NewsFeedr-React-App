import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // You must always call a Constructor of super class, otherwise it will throw an error.

  constructor() {
    super();
    // console.log("Hello, I am a constructor from News component.");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4507ea94cd94d85ae44b641d48f906f&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    // console.log("Previous button clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4507ea94cd94d85ae44b641d48f906f&page=${
      this.state.page - 1
    } &pageSize = 20 `;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    // console.log("Next button clicked");

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4507ea94cd94d85ae44b641d48f906f&page=${
        this.state.page + 1
      } &pageSize = 20`;

      let data = await fetch(url);
      let parsedData = await data.json();

      // console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : " "}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
