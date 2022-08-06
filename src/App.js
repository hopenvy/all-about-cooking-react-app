import './App.css';

function App() {
  return (
    <div>
    <div className="row container header">
      <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 container">
        <h1>All about cooking <br />
          Made for living and eating with love</h1>
      </div>
      <div className="col-12 col-md-4 col-lg-4 col-xl-4 conrainer">
        <h1><b>Contact us<br /> +365 666 666 4845</b></h1>
      </div>
      <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 container">
        <ul className="social">
          <li> <a href="/"><i className="fab fa-facebook-f" /></a>
          </li>
          <li> <a href="/"><i className="fab fa-google-plus-g" /></a>
          </li>
          <li> <a href="/"><i className="fab fa-twitter" /></a>
          </li>
          <li> <a href="/"><i className="fab fa-pinterest-p" /></a>
          </li>
          <li> <a href="/"><i className="fab fa-behance" /></a>
          </li>
          <li> <a href="/"><i className="fab fa-instagram" /></a>
          </li>
        </ul>
      </div>
    </div>
    <br />
    <br />
    <div className="main">
      <div id="sliding" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/1.jpg" alt="img2"/>
            <div className="carousel-caption">
              <div className="line">
                <h3>Recipes</h3>
                <p>Enjoy your life</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/2.jpg"  alt="img3" />
            <div className="carousel-caption">
              <div className="line">
                <h3>Post your own recipe</h3>
                <p>Enjoy your life</p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#sliding" data-slide="prev">
          <span><i className="fas fa-arrow-left" /> </span>
        </a>
        <a className="carousel-control-next" href="#sliding" data-slide="next">
          <span><i className="fas fa-arrow-right" /></span>
        </a>
      </div>
    </div>
    
  </div>
  );
}

export default App;
