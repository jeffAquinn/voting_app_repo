
class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        <Product />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return(
      <div className="item">
        <div className="image">
          <img src='images/products/image-aqua.png' />
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in two thousand years.</p>
          </div>
          <div className="extra">
            <span>submitted by:</span>
            <img
              className='ui avatar image'
              src="images/avatars/daniel.jpg"
              alt="img of daniel"
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
