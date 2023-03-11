
import bluee from "../images/bluee.jpg";
import yellow from "../images/yellow.png";
import mix from "../images/mix.png";
import black from "../images/black-t-shirt.jpg";


const Home = () => {
  

  return (
    <div className="container">
      <div className="image">
        <img src={bluee} height="200px" alt="blue" />
        <h3>Blue Tshirt</h3>
        <h3>$25</h3>
        <a  className="addToCard cart1" href="#">
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={yellow} height="200px" alt="yellow" />
        <h3>yellow Tshirt</h3>
        <h3>$20</h3>
        <a  className="addToCard cart3" href="#">
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={black} height="200px" alt="black" />
        <h3>black Tshirt</h3>
        <h3>$30</h3>
        <a  className="addToCard cart4" href="#">
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={mix} height="200px" alt="mix" />
        <h3>mix Tshirt</h3>
        <h3>$35</h3>
        <a  className="addToCard cart2" href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Home;
