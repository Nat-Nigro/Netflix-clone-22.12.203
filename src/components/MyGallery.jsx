import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class MyGallery extends Component {
  state = {
    searchQuery: "batman",
    filmData: [],
  };
  filmDataFetch = async () => {
    const apiKey = "967961a2";

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.state.searchQuery}&apikey=${apiKey}`);

      if (!response.ok) {
        throw new Error("ERROR");
      }
      const filmDataObj = await response.json();
      this.setState({ filmData: filmDataObj.Search });
    } catch (error) {
      console.error("Errore dati", error.message);
    }
  };
  componentDidMount() {
    this.filmDataFetch();
  }
  render() {
    return (
      <Container className="my-2" fluid>
        <h3 className="text-white">{this.state.searchQuery.toUpperCase()}</h3>
        <Row>
          {this.state.filmData.slice(0, 6).map((movie, index) => (
            <SingleMovie key={index} imageUrl={movie.Poster} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default MyGallery;
