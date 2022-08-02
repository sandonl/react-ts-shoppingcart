import React from "react";
import { Col } from "react-bootstrap";
import { Item } from "../data/fetchStoreItems";

export const StoreItem: React.FC<Item> = ({
  id,
  title,
  price,
  description,
  image,
}) => {
  return (
    <>
      {title}
      {price}
      {image}
    </>
  );
};
