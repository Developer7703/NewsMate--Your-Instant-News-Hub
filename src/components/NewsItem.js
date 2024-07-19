import React, { Component } from "react";
//export class NewsItem extends Component {
  const NewsItem = (props)=>{
  //render() {
    //let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="badge rounded-pill text-bg-danger"  style={{left: '90%',zIndex:'1'}}>{source}</span> 
          <img src={!imageUrl?"https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/L4KUFRM3VFGHFMRTAIOLA7LZRE.jpg?_a=ATAPphC0" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem; 
