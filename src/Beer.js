import React from 'react'
import { Link } from 'react-router-dom'
import {
  LoaderWrapper,
  LoaderCenter,
  Loader,
  StyledEl,
  StyledImgEl,
  StyledWr,
  StyledName,
  StyledContentWr,
  StyledPEl,
  StyledH2El,
  StyledBack
} from './Style'

class Beer extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.props.match
    this.state = {
      id: params.id,
      name: '',
      tagLine: '',
      abv: '',
      description: '',
      img: '',
      showSpin: true,
    };
  }

  componentDidMount() {
    console.log(this.state.params)
    fetch('https://api.punkapi.com/v2/beers/' + this.state.id)
      .then(response => response.json())
      .then(
        data => {
          var beer = data[0]
          this.setState({
            name: beer.name,
            tagLine: beer.tagline,
            img: beer.image_url,
            description: beer.description,
            abv: beer.abv,
            showSpin: false,
          })
        })
      .catch(function (error) { console.log(error) })

  }

  render() {
    return (
      <StyledWr>
        <Link to={"/"}><StyledBack>{'< back'}</StyledBack></Link>
        {this.state.showSpin ?
          <LoaderWrapper>
            <Loader>
              <LoaderCenter />
            </Loader>
          </LoaderWrapper>
          :
          <StyledEl>
            <StyledName>{this.state.name}</StyledName>
            <StyledContentWr>
              <StyledImgEl src={this.state.img} alt="Beer Img" />
              <StyledH2El>ABV: {this.state.abv} </StyledH2El>
              <StyledPEl>{this.state.tagLine}</StyledPEl>
              <StyledPEl>{this.state.description}</StyledPEl>
            </StyledContentWr>
          </StyledEl>}
      </StyledWr>
    )
  }
}
export default Beer