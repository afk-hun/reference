import { StoreItemType } from "./utils/types";

import "./storeItem.scss";
import { StarRating } from "./StarRating";

type StoreItemProps = StoreItemType;

export function StoreItem(props: StoreItemProps) {
  const { title, price, description, category, image, rating } = props;
  return (
    <div className="d-flex flex-column border rounded p-3 gap-3">
      <h1>{title}</h1>
      <div className="item-info d-flex flex-column flex-md-row">
        <div className="d-flex flex-column align-items-center flex-md-row gap-3">
          <img
            className="item-image img-thumbnail rounded product-image"
            src={image}
            alt="this is the product"
          />
          <div className="d-flex flex-column flex-lg-row column-gap-3">
            <p className="">{description}</p>
            <div className="item-crp d-flex flex-column column-gap-3 align-items-center flex-md-row flex-lg-column">
              <i>{category}</i>
              <div className="d-flex align-items-center column-gap-2">
                <StarRating rate={rating.rate} />
                <i>{rating.rate}/5</i>
              </div>

              <h5 style={{ margin: 0 }}>${price}</h5>
              <button className="btn btn-primary mt-3">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
