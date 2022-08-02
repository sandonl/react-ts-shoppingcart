import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { fetchShopItems, Item } from "../data/fetchShopItems";

export const Store = () => {
  const [storeItems, setStoreItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchShopItems()
      .then((response) => setStoreItems(response))
      .catch((error) => console.log(error));

    console.log(storeItems);
    console.log("use effect ran");
  }, []);

  return (
    <>
      <h1> Store Page </h1>
      {storeItems.map((item) => (
        <Col> {JSON.stringify(item)} </Col>
      ))}
      <Row></Row>
    </>
  );
};
