import { StoreItem } from "./StoreItem";
import { useStoreSelector } from "./store/hooks";

export function MarketPlace() {
  const itemSelector = useStoreSelector((state) => state.item.items);
  return (
    <>
      <h1>Here are the Fake Market Place</h1>
      <div className="d-flex flex-column p-3 p-4-md p-lg-5 gap-3">
        {itemSelector &&
          itemSelector.map((item) => {
            return <StoreItem key={item.id} {...item} />;
          })}
      </div>
    </>
  );
}
