import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { fetchStoreItems, Item } from "../data/fetchStoreItems";

export const Store = () => {
  const [storeItems, setStoreItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchStoreItems()
      .then((response) => setStoreItems(response))
      .catch((error) => console.log(error));
    console.log("Store useEffect ran");
  }, []);

  return (
    <>
      <h1> Store Page </h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
