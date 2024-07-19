import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//export class News extends Component {
  const News = (props) =>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState([true])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    //document.title = `${this.capitalizeFirstLetter(props.category)}
  // static defaultProps = {
  //   count:'in',
  //   pageSize: 8, 
  //   category: 'general'
  // }
  // static propTypes ={
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }
  //  articles= [
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Prince Harry at London Invictus Games event but will not meet King",
  //     "description": "The Duke of Sussex will not meet his father or brother during a brief visit to London.",
  //     "url": "https://www.bbc.co.uk/news/articles/ck5k0874nzro",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f4b9/live/c9bc9570-0d57-11ef-aa68-bd13233843cd.jpg",
  //     "publishedAt": "2024-05-08T17:07:26.8373384Z",
  //     "content": "On Tuesday, a spokesperson for the duke said: \"In response to the many inquiries and continued speculation on whether or not the duke will meet with his father while in the UK this week, it unfortuna… [+800 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Kendrick Lamar’s beef with Drake and J Cole explained",
  //     "description": "A seemingly innocuous lyric has erupted into a flurry of back-and-forth insults between the rappers.",
  //     "url": "https://www.bbc.co.uk/news/entertainment-arts-68739398",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7682/production/_133083303_gettyimages-496392678.jpg",
  //     "publishedAt": "2024-05-08T16:37:24.2759442Z",
  //     "content": "Rappers have been trading insults since the dawn of hip-hop. \r\nIt's part of the culture - a test of lyrical skill and a declaration of superiority that has produced hundreds of classic \"diss tracks\",… [+12678 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Accused Canadian serial killer Jeremy Skibicki goes on trial in Winnipeg",
  //     "description": "Jeremy Skibicki is accused of sexually assaulting and murdering four indigenous women in Winnipeg in 2022.",
  //     "url": "https://www.bbc.co.uk/news/world-us-canada-68910211",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ECD4/production/_133282606_gettyimages-1700246924.jpg",
  //     "publishedAt": "2024-05-08T16:37:17.7130566Z",
  //     "content": "The high-profile trial of a Canadian man accused of murdering four indigenous women two years ago is set to begin in Winnipeg, Manitoba.\r\nJeremy Skibicki has pleaded not guilty to four first-degree m… [+2896 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Tense exchanges as Trump lawyer spars with Stormy Daniels in hush-money trial",
  //     "description": "The former adult-film star provided a detailed, salacious account of her alleged sexual encounter with Mr Trump.",
  //     "url": "https://www.bbc.co.uk/news/world-us-canada-68972977",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12320/production/_133282547_4c2e04862e82380f429d541bbc2e49fab3317e11.jpg",
  //     "publishedAt": "2024-05-08T16:07:16.6026856Z",
  //     "content": "Media caption, Watch: The BBC's Nada Tawfik on what happened when Stormy Daniels took the stand\r\nDonald Trump's lawyer attacked Stormy Daniels' credibility during heated cross-examination at the form… [+4046 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Security guard shot at Drake's Toronto home amid beef with Kendrick Lamar",
  //     "description": "A lyrical beef between the Canadian rapper and US rival Kendrick Lamar has exploded in recent days.",
  //     "url": "https://www.bbc.co.uk/news/world-us-canada-68972253",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/04EA/production/_133285210_drake-index-getty.jpg",
  //     "publishedAt": "2024-05-08T15:52:16.1659032Z",
  //     "content": "Toronto police have said a security guard was shot overnight outside the home of Canadian rapper Drake.\r\nPolice said suspects in a vehicle shot the guard at the corner of the Park Lane Circle mansion… [+2133 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Gaza war: US bomb delay biggest warning yet for Israel",
  //     "description": "By delaying a weapons shipment, the US is finally reaching for its biggest lever of influence over Israel.",
  //     "url": "https://www.bbc.co.uk/news/world-middle-east-68978322",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4D9C/production/_133286891_8f42633fcce23338f91d6f82f517e6a2ca7319f5.jpg",
  //     "publishedAt": "2024-05-08T15:37:15.3372576Z",
  //     "content": "The United States is the one country that has real leverage over Israel. And yet, throughout the war in Gaza, Israel has chosen to ignore much of the advice of its closest ally. \r\nThe US government s… [+3915 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Brazil floods: 'We've never experienced anything like it'",
  //     "description": "Residents of the Brazilian city of Porto Alegre describe the devastation caused by recent floods.",
  //     "url": "https://www.bbc.co.uk/news/articles/cle07g0zzqeo",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e039/live/c4065fe0-0d33-11ef-bee9-6125e244a4cd.jpg",
  //     "publishedAt": "2024-05-08T13:37:23.6656795Z",
  //     "content": "Days of torrential rain caused rivers to overflow and have submerged entire towns.\r\nThe capital of Rio Grande do Sul, Porto Alegre, is among those affected. \r\nThe city of 1.3 million inhabitants has … [+1094 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Going to the extreme: Inside Germany’s far right",
  //     "description": "A BBC investigation uncovers links between opposition AfD party figures and extremist networks.",
  //     "url": "https://www.bbc.co.uk/news/world-europe-68931170",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C072/production/_133266294_afd_germany_promo-nc-v3.png",
  //     "publishedAt": "2024-05-08T13:07:20.1970183Z",
  //     "content": "It is a spring evening in Germany's eastern city of Cottbus, and dozens of people have crowded into a small venue to hear a man who once dubbed himself the \"friendly face\" of National Socialism (Nazi… [+9887 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "Ian Gelder: Game of Thrones actor who played Kevan Lannister dies aged 74",
  //     "description": "Gelder, who played Kevan Lannister in Game of Thrones, was diagnosed with cancer five months ago.",
  //     "url": "https://www.bbc.co.uk/news/entertainment-arts-68974040",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/167F4/production/_133284129_gettyimages-1390680800.jpg",
  //     "publishedAt": "2024-05-08T10:52:15.7281593Z",
  //     "content": "Ian Gelder, who played Kevan Lannister in fantasy series Game of Thrones, has died at the age of 74. \r\nThe British actor's career spanned decades and included roles in Torchwood, His Dark Materials, … [+2202 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-news", "name": "BBC News" },
  //     "author": "BBC News",
  //     "title": "US reveals it paused shipment of bombs for Israel over Rafah concerns",
  //     "description": "US reveals it paused bomb shipment for Israel over concerns it was going ahead with Rafah offensive.",
  //     "url": "https://www.bbc.co.uk/news/world-middle-east-68974624",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/542C/production/_133284512_c5cb33c6cf5c946799bc257476f344b37b6d08a6-1.jpg",
  //     "publishedAt": "2024-05-08T03:52:15.4627363Z",
  //     "content": "The US last week paused a bomb shipment for Israel over concerns it was going ahead with a major ground operation in Rafah, southern Gaza, a senior administration official says. \r\nThe shipment consis… [+1832 chars]"
  //   }
  // ]
  // constructor(){
  //   super();
  //   this.state={
  //     articles: this.articles,
  //     loading: false,
  //     page: 1,
  //     totalResults: 0
  //   }
  // }
  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }
  const updateNews = async()=>{
    //this.props.setProgress(10); //replace all props with props
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d37fc5749304af68fe3abf39b3baa8f&page=${page}&pageSize=${props.pageSize}`;//change to page from this.state.page
    //this.setState({loading: true});
    setLoading(true)
    let data= await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    //this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false})
    props.setProgress(100);
  }
  useEffect(() => {
    return () => {
      // this.updateNews();
      updateNews();
    };
  }, [])
  // async componentDidMount(){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d37fc5749304af68fe3abf39b3baa8f&page=1&pageSize=${props.pageSize}`;
  //   let data= await fetch(url);
  //   let parsedData = await data.json()
  //   this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  // }
//   const handleNextClick = async ()=>{
//     setTotalResults(parsedData.totalResults)
//     if(!(setPage(page+1) > Math.ceil(totalResults/props.pageSize))){
    
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d37fc5749304af68fe3abf39b3baa8f=${setPage(page+1)}&pageSize=${props.pageSize}`;
//     // this.setState({loading: true});
//     setLoading(true)
//     let data= await fetch(url);
//     let parsedData = await data.json()
//     // this.setState({
//     //   // page: this.state.page+1,
//     //   articles: parsedData.articles,
//     //   loading: false
//     // })
//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//     setPage(page+1)
//   }
// }
const fetchMoreData = async() => {
  //this.setState({page: this.state.page + 1})
  setPage(page+1)
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d37fc5749304af68fe3abf39b3baa8f&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    let data= await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    //this.setState({articles: state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults})
};
  //  const handlePreviousClick = async ()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d37fc5749304af68fe3abf39b3baa8f=${page - 1}&pageSize=20`;
  //   //this.setState({loading: true});
  //   setLoading(true)
  //   let data= await fetch(url);
  //   let parsedData = await data.json()
  //   // this.setState({
  //   //   page: this.state.page-1,
  //   //   articles: parsedData.articles,
  //   //   loading: false
  //   // })
  //   setArticles(parsedData.articles)
  //   setTotalResults(parsedData.totalResults)
  //   setLoading(false)
  //   setPage(page-1)
  // }
  //render() {
    return (
      <div className="container my-3">
      <h1 className="text-center" style={{margin:'35px Opx' }}>NewsMate - Top {capitalizeFirstLetter (props. category)} Headlines</h1>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
      {articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
      })}
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
      <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
      </div>
      
    )
  }

News.defaultProps = {
  count:'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News