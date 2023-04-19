import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl, publishedAt, author} = this.props;
    return (
      <>
        <div className="card">
        <a href={newsUrl} target="_blank" rel="noreferrer"> 
          <img src={imageUrl? imageUrl : "https://t4.ftcdn.net/jpg/04/70/29/87/360_F_470298738_1eHqTZ0B5AvB3emaESPpvQ93227y7P0l.jpg"} className="card-img-top" alt="..." />
        </a>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {author? author : "Unknown"} on {publishedAt.slice(0,10)}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
