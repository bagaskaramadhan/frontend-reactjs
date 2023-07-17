import { Col, Row } from "react-bootstrap";
import { GenreBooks, ListBooks, NavbarComponent } from "../components";
import { Component } from "react";



export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    
  }


  render() {
    return (
      <>
        <NavbarComponent />
        <Row>
          <ListBooks />
          <Col>
            <h4>DAFTAR PRODUCT</h4>
          </Col>
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
