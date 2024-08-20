import { Container, Row, Col, Carousel } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
// pastasciutte è un array di 5 oggetti, ognuno rappresentante un piatto di pasta

const Home = function () {
  return (
    <Container>
      {/* un Container altro non è che un <div class="container"></div> */}
      <Row className="justify-content-center my-4">
        {/* col-12 col-md-6 col-lg-4 */}
        <Col xs={12} md={6} lg={4} className="text-center">
          <h2>Benvenuti a Epistaurant!</h2>
          <h4>Ristorante italiano dal 1970</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Carousel>
            {pastasciutte.map((pasta) => {
              return (
                <Carousel.Item key={pasta.id}>
                  <img className="w-100" src={pasta.image} alt="dog pic" />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
