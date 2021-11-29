import { Product } from "./Productitem";

export const ProductList = () => {
  return (
    <div>
      This is My Product
      <p>Product</p>
      <br />
      <br />
      <Product
        title="Tidal Pull"
        price="45000"
        quantity="65"
        desc="books"
        Url="bat.jpeg"
      />
      <Product
        title="Pull"
        price="20000"
        quantity="6584"
        desc="notes"
        Url="Cloud Services.svg"
      />
      <Product
        title="Tidal"
        price="30000"
        quantity="658"
        desc="file"
        Url="Digital Marketing.svg"
      />
      <Product
        title="tSUNAMI"
        price="54000"
        quantity="965"
        desc="game"
        Url="maintenance.svg"
      />
      <Product
        title="improve your skills"
        price="12000"
        quantity="265"
        desc="books"
        Url="UI UX Designing.svg"
      />
    </div>
  );
};
