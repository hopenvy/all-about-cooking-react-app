const Home = () =>{
    return (
      <div>
        
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
};

export default Home;