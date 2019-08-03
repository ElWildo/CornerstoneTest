import React from 'react'
import { Route, Link } from 'react-router-dom'
import {
    LoaderWrapper,
    LoaderCenter,
    Loader,
    LineHeader,
    StyledSorting,
    StyledH1,
    StyledSelect,
    StyledP,
    StyledLi,
    StyledImg,
    StyledUl
} from './Style'

const Beer = ({ match }) => <p>{match.params.id}</p>

class BeersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            showSpin: true,
            sorting: "NameAsc"
        };
    }

    sortingNameAsc = (a, b) => {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    }
    sortingNameDesc = (a, b) => {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string descending
            return 1
        if (nameA > nameB)
            return -1
        return 0 //default return value (no sorting)
    }
    sortingABVAsc = (a, b) => {
        return a.abv - b.abv //sort string ascending
    }
    sortingABVDesc = (a, b) => {
        return b.abv - a.abv //sort string descending
    }

    change = (event) => {
        this.setState({ sorting: event.target.value });
    }

    renderBeers = () => {
        var sortedArray = this.state.beers;
        //switch for sorting function
        switch (this.state.sorting) {
            case "ABVAsc":
                sortedArray.sort(this.sortingABVAsc)
                break
            case "ABVDesc":
                sortedArray.sort(this.sortingABVDesc)
                break
            case "NameAsc":
                sortedArray.sort(this.sortingNameAsc)
                break
            case "NameDesc":
                sortedArray.sort(this.sortingNameDesc)
                break
            default:
                break
        }
        return sortedArray.map(
            beer =>
                <StyledLi key={beer.id}>
                    <Link to={"/beer/" + beer.id}><h2>{beer.name}</h2></Link>
                    <p>ABV: {beer.abv} </p>
                    <Link to={"/beer/" + beer.id}><StyledImg src={beer.image_url} alt="Beer Img" /></Link>
                    <Link to={"/beer/" + beer.id}><p> More Details </p></Link>
                </StyledLi>
        )
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(data => this.setState({
                beers: data,
                showSpin: false
            }))
            .catch(function (error) { console.log(error) })

    }

    render() {
        return (
            <div>
                <LineHeader>
                    <StyledH1>PUNK BEER</StyledH1>
                    <StyledSorting>
                        <StyledP> Sort by: </StyledP>
                        <StyledSelect id="lang" onChange={this.change} value={this.state.sorting}>
                            <option value="ABVAsc">ABV ascending</option>
                            <option value="ABVDesc">ABV descending</option>
                            <option value="NameAsc">Name ascending</option>
                            <option value="NameDesc">Name descending</option>
                        </StyledSelect>
                    </StyledSorting>
                </LineHeader>
                {this.state.showSpin ?
                    <LoaderWrapper>
                        <Loader>
                            <LoaderCenter />
                        </Loader>
                    </LoaderWrapper>
                    : null
                }
                <StyledUl>
                    {this.renderBeers()}
                </StyledUl>
                <Route path="/beer/:id" component={Beer} />
            </div>

        )

    }
}



export default BeersList