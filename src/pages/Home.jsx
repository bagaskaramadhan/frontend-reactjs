import { Col, Row } from "react-bootstrap";
import { GenreBooks, ListBooks, NavbarComponent } from "../components";
import { Component } from "react";
import { API_URL } from "../utils/constant";
import axios from "axios"


export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get(API_URL + "books")
      .then((res) => {
        const list = res.data;
        this.setState({ list })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  render() {
    const { list } = this.state
    return (
      <>
        <NavbarComponent />
        <Row>
          <ListBooks />
          <Col>
            <h4>DAFTAR PRODUCT</h4>
          </Col>
          <Row>
          {list && list.map((listed) => (
            <h2>{listed.title}</h2>
          ))}
          </Row>
          <GenreBooks />
        </Row>
      </>
    )
  }
}

// const Home = () => {
//   return (
//     <>
//       <NavbarComponent />
//       <Row>
//         <ListBooks />
//         <Col>
//           <h4>DAFTAR PRODUCT</h4>
//         </Col>
//         <GenreBooks />
//       </Row>
//     </>
//   );
// };

// export default Home;
