import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Button, Card, Row, Col } from 'react-bootstrap';
import { GiDeliveryDrone } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <GiDeliveryDrone size={30} className="mr-2" />
            Drone Simulator
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-5">
        <h1>Welcome to the Drone Simulator</h1>
        <p>Welcome to our app you can simulate the whole journey through our app</p>
        <p>To start simulating click on Start Simulation and enter your data</p>
        <p>To view example simulation click on simulate without entering any data</p>
        <Button as={Link} to="/form" variant="primary" size="lg">Start Simulation</Button>
      </Container>
      <Container className="my-5">
        <h2>Learn More About Drones</h2>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEQ8QEA8PEA8QEBAPEA8QEBAPEA8PFREXFhYRExUYHSggGBolHhYVIT0hJSkrLi4uFx8zODMtNyktLi4BCgoKDQ0OFQ0PFisZFSU3KysrMistLTcuLSsuKysrKysrKysrKzc3NysrLisrKzctKysrKysrKys3KysrLSsrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAwECBAUGB//EAD8QAAIBAgQCBwYEBAMJAAAAAAABAgMRBBIhMQVRBhMiQWFxkQcUMkJSgSOh0fByscHxM4LhFTRDYnOSorLC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMHiGNqUk3DDzrclBq7M24uBzz6SVlvw7FfaLf9CselEu/h+P8AtSi/5yRv7i4GppdIIP4sPjaf8WFqy/8ARMixfS/A0vjr5X9MoVIy8nmSs/B79xurnn/tfoUq1ChSrOqoZ51XKnLLbLHKs2jXz96toB11LpHg5Qp1I4mlKFTNkcZKV3F2ltybSfmjHxPS/AU3Z4mMv+nGdResU0eRcd4LhsTg8IqcnRhhoulRSp0nJxnKTkpSSvO94b/S27uTZ03EPZnJxhUwWIXahBuliXJK7SfZqRTaXg19wO6wnSzAVXaOKpJ8qjdFvyzpXNxCakk0009mndM8OxPQritN/wC6uovqpVaMl6OSl+RHhuF8UoP8PDY6k+90YVo/nDcD3cHl3BuJcfzRj1VeUbpP3mgrRV9W28sn6novDateUX19OMJJq2Vppq13pd2ttv3AZgBbUqKKcpNRildtuyS5tgXA12E41Qq1ephJynklPZ5csXFN32+ZGxAAAAAAAAAAAAAAAAAFGw2QYnEQpwnUqSUKdOMpznJ2UYRV3J+CSYGJx3jVDBUXXrytFPLGK1nUm9oQXe9/JJt6IweiPSOWPjUn1Tpxg1lb77303d7W3PH+kHHqnFMXntJUk3DD0vopt7tfVKyb+y7ke0dFuF+64anSt22s9T+Nrb7Ky+wG5BamXAAwQYyv1dOc/pi2r977l62AlbMeriox/p3X8uZq8LjpVIrO9drrS/nyMhQSvpq9+b82BOsa/p09P36E8Kqe3o9zDyrx/f7ZeogZU6iSu/7nL8ecdZS7VSWkV9Mf0N7WTtddppaLRXOYlGVSo86d76xa28GBLgOjilllJwhmSfYinOzW17aP1OshFJJLRJJJeC2NRh4yTRtIPQCVMvTIbhTAnK3IVMvUgJDjuk/E3UqOjF/h03aVvnqLe/gtvO/gdgjy6fEaMcbUwaq0quKlXcYU4ztmlNdYsztolF3b12aV3ZMOg6E4ZuvXrW7MIRop85SeeS+yjD/uOyMThWBVClGmnd6ylK1s05O7du5eGuiRlgAAAAAAAAAAAAAAMFGBa2cP7X8TUhw/q6ak+vr06U3G91TSlUe3c3TS8mdpXqqEZTk0oxTk23ZJI8J9o/STE4qpkc5UKNOWahBUbN3tG9SScnJt32t8ul9QN37J+jM5VPe60LUqV1RUl8db6l4R115+TPXkcH7MuIV44SFHGV6dScbug40qtKSwysoqpCVOLTvezs7qzu9ztFjKf1f+Mv0AygY/vsOb9GPfYePoBkGi6R1ZONovspq/jY2jxsFr2vQ5qOPjUc6MvjScop/E6eZpP9/pcNHisJWVaGJwlVRqXhDEUajbo4mgnZ3XyVIpu0l5O626zCYtPR/6ry5o5+EJxlbLJrnYzISa8GgOhTL0zWYPEv8Aq1z8VyZsISTV1sBKiydGMneyzLv77cgi9MBCK8ieKXcQN3LZXs0pOLaaUo2uvFXTXqmBkyjbfTz0I3UivmX8zS4jEVqajCcnUsv8WWVOpLdvLFJK3LlzMepjZJd/+WN3sBv3iI+L+xZLHxXc390jnY4ipPaNR/dL8lqX+51WnKVN5Um25X2S8QNP7ROlNqfuypwamr1VLLUjKnpaDi1Zp9q55rQwVTiMpKtVp+7YOPWqlKErxg7RtT6uUG7WjvJW03Nv0rqZ6k33LReRN7PeEdY8TVqRbpOMaEdZKNR3zTTS3StDfTXwA9X6GcchjcLSqRl27PNTcs1SEVJqOd6Xdktdm7m+OW4BwujTrqcKcYy6pptadlWiopdy/RHUgAAAAAAAAAAAAAAtZczW9IOJrCYatiHZunBuEX81RvLCP3k4r7gcN0z4+6mK93g/wsM+1baeIa1vzUU7eblyRquHQ6zFUZRSc05vV2Vurlq3rb9bGlw0XZyk3Kcm5Tk95Sbu5PxbbZ3fQvhmSMsRUis1VKNNNfDSvfN/mdvslzAzMHgJdbOrbtSjlllu1GN02r97bSd/DzvsYQX7bM+FW2yJY1V9C9EBr8i/bYyR5I2arR+leiLuvXIDS1ILu08m0aji3DlUje7vHVf3OwlKEt4xfmkzVY/CxekVZPfV2A4fD0a0a9OUatXqkpqcZVJyg28tuy3a6tv58zfxbM7/AGcrbEVHBTzZbdn6uXh4gZPC1G87vtOyS8Fr/X8jNyuLuvuu5mi4xwuraEqWK6jI3J/hdZ1j7otZ1ovXx504P0hUuxW0km45+5tO2oHSwmnt6cipAu6UX+jRNCV/PkBUqCgFtampK0kmuTJsLQpd1OCa37Kf3uyJskwLTlK2tkk/u/8AQDMRg8ahOVGcYfFLT5n49yfIzigHlFLoPicVVtU/BoXvKrdOUlf4acX3+MlZeOx6Pg8HSw1CNGjBQpUoNRitdNW22923dtvdtmc0YXEqmWD/AOZqHrv+SYEHCI9qo+ShFfm3/NG2TNbwtdhv6pyfp2f/AJM+LAmQLUy4AAAAAAAAAAAKM4v2iUK1f3fD0lHJmdapKU4005Ls04LM+1vN28InaMjqMDz/AIL0SlF58SklF9mjdSzNd87aZfDv79NH1tKjcypRuyalTAxp4WTXYkoy7m45438VdN+qNVXpY+DvaNRd3VOG3jCaVvs5HSJFbAcmuM1Yf4tPKlu6lOpS/N6GXhuOUZ7pr+Fqol6a/kdEQVsJTn8VOEnzcU36gYlGpCprCcZW3Seq81uhOkabpnw+FHB4ivShXdSlTbp08PldSdRrLFJuMnvJbctjzfgHTDHuNTG1sZCnh1KnGnhXSoRrY2UZS6ynSck3CUU1fR9yVgPXXAiq1VHz5HmD9q1Wd1ChC2v4kpXle0V8MdFrne7srK73JOH+0Co3+JTpy17s0Hble7/kB2+OqPd3d3bTZefh+pqZYCOrirXbbT3vfXz3/Mz8Dx7DYhJXySfyy2+zJMThNLrVfLJbry5gR8NxM6fZ+KP0t7eRmUOkODnN044rDutF5ZUlWpupGW2VxTvfwOD4nxjHf7So0MJCTw9KNP3uXVZ6bnUak1ndrOMHBqzveT0exznDuKcMp1Z16vDp9fndRKMoV4qpmvmg6jjld9e+3MD3OOJi/mXqRVsdCKb3S1b2SXNtnjWP9pGJqJxwuFjho3SdWpLr5pO9rRsoxfnmWhp5wxOLbliMXUr5HG8c6lCEr3XYVqcXp3K4HunDMSsapujWpunCWSUqbza2Tsrb6Pfb0ZvsJho0o5Y3tdtt7t82cL7K41lCp+E6eFt+DKSSdS8sys/mUU2r7HfXAq0UDZRsAzGxtFTg190+T/dyZsskwMLBdhZe5bGamY8o6kkGBkRZIiGBNECoAAAAAAAAAAoyKoSstcQIowJooqkVAAAAAAMPi8JSo1FG18ul9nqrpnE8SpVKs6cvdOsilkqOSwtTs5tYqUpXtdvTTfY9AqRumuaa/I5mHR7Cxl1kaVp53Uup1LdY3fNlva99dgNNxHofQ4hP8SLw8Y08tFUsinSd025JXjbuy6rVu97W4/iXsz4hQbdGVLFwW2WSo1X5wm8vpJnsuAw6jFS+aUVryT1sSziB4IsHjKDtVwuKhbvdGo4/aSVn6m14d0odJ5XUy84ydvVM9fmiCpfmwOW4LxKGLWrhCKvepmWW/fp/a3pfk+mHQ5Tk62EipTcm6kFaEat/+JBS0Ur7rS+++/ps6ZBPDXA8el0Tx8ox/ChG0HG3WU01e2stddu650/RH2fzVKNPFYrsKbqdRh4pWm0k71ZK9rRWiittztvc0ZFCll2A2mFpxpwhTgssKcYwhFbRhFWSX2RNmMalMmQEmYtbCRVoCxlrL2i1oCNouii6xVIC6BNEjiiRAVAAAAAAAAAAAAAAAAAAAAADWGzNawM3DfBD+GP8i6RTD/BD+FfyEwMeoiCSMmaInECBxKZSVxKWAjylVEvsVSArTRkwIIRMiCAvSK2KorYCxoo4l4sBHlLki6wAokXlEioAAAAAAAAAAAAAAAAAAAAAAMKcE2992ZjMa2oGRHZeRbIqitgI8pRxJrCwGM4FjgZTiWuIGNkLlAmyFVECOMSWKKpFyQBFQABSxUAUsVAAAAAAAAAAAAAAAAAAAAAAAAAAtkyOxIylgCRcgkVAAAAUsVAFLCxUAUsVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==" />
              <Card.Body>
                <Card.Title>DJI Mavic Mini</Card.Title>
                <Card.Text>
                  The DJI Mavic Mini is a small but powerful drone that can fly for up to 30 minutes and take high-quality photos and videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static.bhphoto.com/images/images2500x2500/1612789651_1620712.jpg" />
              <Card.Body>
                <Card.Title>Parrot Anafi</Card.Title>
                <Card.Text>
                  The Parrot Anafi is a foldable drone that can take 4K videos and 21-megapixel photos. It can fly for up to 25 minutes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
                <Card.Title>DJI Inspire 1</Card.Title>
                <Card.Text>
                  The DJI Inspire 1 is a professional drone that can fly for up to 18 minutes and take 4K videos and 12-megapixel photos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;

