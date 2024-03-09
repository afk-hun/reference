import { StoreItemType } from "./utils/types";

import "./storeItem.scss";
import { StarRating } from "./StarRating";
import { splitText } from "./utils/functions";

type StoreItemProps = StoreItemType;

export function StoreItem(props: StoreItemProps) {
  const { id, title, price, description, category, image, rating } = props;
  const split = splitText(description);
  return (
    <div className="d-flex flex-column border rounded p-3 gap-3">
      <h1>{title}</h1>
      <div className="item-info d-flex flex-column flex-md-row">
        <div className="d-flex flex-column align-items-center flex-sm-row gap-3">
          <div className="p-2 bg-white rounded border">
            <div
              className="product-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>

          <div className="d-flex flex-column flex-lg-row column-gap-3">
            {split.length === 1 && <p className="">{description}</p>}

            {split.length > 1 && (
              <p>
                {split[0]}
                <span className="collapse" id={`viewDetails${id}`}>
                  {split[1]}
                </span>
                <a
                  data-bs-toggle="collapse"
                  aria-controls="collapse"
                  href={`#viewDetails${id}`}
                  data-target={`#viewDetails${id}`}
                >
                  {" "}
                  More...
                </a>
              </p>
            )}

            <div
              className={`
                item-crp 
                d-flex 
                flex-column gap-4 align-items-center 
                flex-sm-row justify-content-around 
                flex-lg-column 
                w-100`}
            >
              <div
                className={`
                d-flex 
                flex-column align-items-center
                flex-sm-column-reverse
                flex-md-row column-gap-md-3
                flex-lg-column 
                gap-2`}
              >
                <i>{category}</i>
                <div className="d-flex align-items-center column-gap-2">
                  <StarRating rate={rating.rate} />
                  <i>{rating.rate}/5</i>
                </div>
                <h3 style={{ margin: 0 }}>${price}</h3>
              </div>

              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
