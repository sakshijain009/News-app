import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country:"in",
    pageSize:5,
    category:"general"
  }

  static propTypes = {
    country:PropTypes.string.isRequired,
    pageSize:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired
  }

  constructor(){
    super();
    this.state = {
        articles:[],
        loading:false,
        page:1
    }
  }

  async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d16921fbf66045e6862f5f21216d73dc&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(data);
      this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false});
  }

  handlePrevClick = async () => {
    
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d16921fbf66045e6862f5f21216d73dc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles,
            loading:false
        })
    }    
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d16921fbf66045e6862f5f21216d73dc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();

      this.setState({
          page:this.state.page + 1,
          articles:parsedData.articles,
          loading:false
      })
  }

  render() {
    return (
      <div className='container my-3'>
          <h1 className="text-center" style={{margin:"40px 0px"}}>NewsApp - Top Headlines</h1>
          {this.state.loading && <Spinner />}
          
          <div className="row">
              {!this.state.loading && this.state.articles.map((element) => {
                  return <div key={element.url} className="col-md-4">
                  <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              })}
             
          </div>

          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News