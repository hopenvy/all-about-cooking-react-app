const Recipes = () => {
    return (
        <div>
            <section id="content">
                <h3>Recipes</h3>
                <ul className="list-recipes">
                    <li>
                        <figure className="box-img"><img src="https://i0.wp.com/farm5.static.flickr.com/4058/5155118143_eddb537320.jpg" alt="" /></figure>
                        <div className="overflow">
                            <h4>consetetur sadipscing</h4>
                            <p>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam. Stet clita kasd gubergro sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor consetetur sadipscing elitr, sed diam.
                            </p>
                            <p>
                                <input className="btn details" type="submit" value="Details" />
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>


    );
};

export default Recipes;