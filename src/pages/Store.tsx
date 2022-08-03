import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Store = () => {
  const { storeItems } = useShoppingCart();

  return (
    <>
      <h1> Store Page </h1>
      {storeItems.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>
      ) : (
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
