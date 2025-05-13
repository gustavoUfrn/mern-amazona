import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;

  return (
    <Card key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>R${product.price}</Card.Text>
          <Button>Add to cart</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
