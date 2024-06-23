import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    
    constructor() {
        super();
        this.state = {
        articles: [],
        loading: false,
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1edd0795320c4cedbb95d9f01a286897";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }

    render() {
        console.log("render")
        return (
        <div className="container my-4">
            <h1> News App - Top Headlines </h1>

            <div className="row">

                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem
                        title={element.title ? element.title.slice(0, 40) : ""}
                        description={element.description ? element.description.slice(0, 75) : ""}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        />
                    </div>
                })}

            </div>
        </div>
        );
    }
}

export default News;
