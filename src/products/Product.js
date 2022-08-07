import './Product.css';
import { proDuct } from "./data";



export const Products = () => {
    return (
      <>
        <div className="product-container">
          {proDuct.map((data, key) => {
            return (
              <div key={key}>
                <Product
                key={key}
                item={data.productName}
                price={data.price}
                img={`${data.photo}`}
                

                />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const Product = ({ item, price,img }) => {
    if (!item) return < div />;
    return (
      <div className='product-grid'>
{item}
{price}
<img src={img} alt="icons" />

      </div>
    );
  };