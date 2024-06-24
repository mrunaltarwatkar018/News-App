import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,  // pts
        pageSize: PropTypes.number,  // ptn
        category: PropTypes.string  // pts
    }


    constructor() {
        super();
        this.state = {
        articles: [],
        loading: false,
        page: 1,
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1edd0795320c4cedbb95d9f01a286897&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        });
    }

    handlePreviousClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1edd0795320c4cedbb95d9f01a286897&page=${
        this.state.page - 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
        });
    };

    handleNextClick = async () => {
        console.log("Next");

        if (
        !(
            this.state.page + 1 >
            Math.ceil(this.state.totalResults / this.props.pageSize)
        )
        ) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1edd0795320c4cedbb95d9f01a286897&page=${
            this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false,
        });
        }
    };

    render() {
        console.log("render");
        return (
        <div className="container my-4">
            <h1 className="text-center" style={{margin:"25px 0px"}} >News App - Top Headlines</h1>

            {this.state.loading && <Spinner />}

            <div className="row">
            {!this.state.loading &&
                this.state.articles.map((element) => {
                return (
                    <div className="col-md-4" key={element.url}>
                    <NewsItem
                        title={element.title ? element.title.slice(0, 40) : ""}
                        description={
                        element.description
                            ? element.description.slice(0, 75)
                            : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                    />
                    </div>
                );
                })}

            <div className="container d-flex justify-content-between">
                <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePreviousClick}
                >
                {" "}
                &larr; Previous{" "}
                </button>
                <button
                disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
                >
                {" "}
                Next &rarr;{" "}
                </button>
            </div>
            </div>
        </div>
        );
    }
}

export default News;
