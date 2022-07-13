import Title from "../Title";
import Card from "./Card";
import movie from "../movie";
function Home() {
  return (
    <>
    
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height="500px"
              src="https://wallpaperaccess.com/full/2769762.jpg"
              className="d-block w-100"
              alt="ABC"
            />
          </div>
          <div className="carousel-item">
            <img
              height="500px"
              src="https://images3.alphacoders.com/121/1213553.jpg"
              className="d-block w-100"
              alt="ABC"
            />
          </div>
          <div className="carousel-item">
            <img
              height="500px"
              src="https://wallpaperaccess.com/full/13453.jpg"
              className="d-block w-100"
              alt="ABC"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Title title="Thriller" />

      <div className="container-fluid">
        <div className="row" style={{backgroundColor:"#F5AD1B"}}>
          {movie.map((elem) => {
            return (
              <>
                <Card
                  key={elem.id}
                  source={elem.source}
                  name={elem.name}
                  text={elem.text}
                />
              </>
            );
          })}
<Title title="Horror"/>
{movie.map((elem) => {
            return (
              <>
                <Card
                  key={elem.id}
                  source={elem.source}
                  name={elem.name}
                  text={elem.text}
                />
              </>
            );
          })}
          <Title title="Erotic"/>
{movie.map((elem) => {
            return (
              <>
                <Card
                  key={elem.id}
                  source={elem.source}
                  name={elem.name}
                  text={elem.text}
                />
              </>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default Home;
