const Footer = () => {
    return (
        <div className="footer">
        <div className="text_footer row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 container">
            <p> The web-site is done by Natallia Rak<br />
              Job suggestions write on natkayellow@gmail.com
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 container">
            <ul className="social">
              <li> <a href="/"><i className="fab fa-facebook-f" /></a>
              </li>
              <li> <a href="/"><i className="fab fa-google-plus-g" /></a>
              </li>
              <li> <a href="/"><i className="fab fa-twitter" /></a>
              </li>
              <li> <a href="/"><i className="fab fa-pinterest-p" /></a>
              </li>
              <li> <a href="/"><i className="fab fa-instagram" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Footer;