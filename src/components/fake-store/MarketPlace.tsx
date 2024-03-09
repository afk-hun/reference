import { StoreItem } from "./StoreItem";
import { useStoreDispatch, useStoreSelector } from "./store/hooks";
import { addFilter, removeFilter } from "./store/item-slice";
import { makeFirstLetterUpperCase } from "./utils/functions";
import "./marketPlace.scss";

export function MarketPlace() {
  const itemSelector = useStoreSelector((state) => state.item);
  const dispatch = useStoreDispatch();

  return (
    <div className="custom-main d-flex flex-column justify-content-center flex-md-row m-auto">
      <nav className="navbar navbar-expand-md align-items-start p-0">
        <div className="container-fluid d-flex flex-column p-0 pt-3 pt-md-4 ps-md-3 pt-lg-5 ps-lg-4  ">
          <button
            className="btn align-self-center align-self-md-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFilter"
            aria-controls="collapseFilter"
            aria-expanded="false"
          >
            Filters
          </button>
          <div className="collapse navbar-collapse" id="collapseFilter">
            <ul className="list-group">
              {itemSelector &&
                itemSelector.categoriesOrigin.map((category) => {
                  return (
                    <li key={category} className="list-group-item d-flex">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id={category}
                        onClick={(event) => {
                          if (event.currentTarget.checked) {
                            dispatch(addFilter({ filter: category }));
                          } else {
                            dispatch(removeFilter({ filter: category }));
                          }
                        }}
                      />
                      <label
                        className="form-check-label stretched-link"
                        htmlFor={category}
                      >
                        {makeFirstLetterUpperCase(category)}
                      </label>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex flex-column p-3 p-4-md p-lg-5 gap-3">
        {itemSelector &&
          itemSelector.items.map((item) => {
            return <StoreItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
}
