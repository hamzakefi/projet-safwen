import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../JS/Actions/product";
import { useNavigate } from "react-router-dom";
import available from "./available.png";
import cart from "./cart.png";

const ProductCard = ({ product }) => {
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product._id));
    window.location.reload();
  };

  return (
    <div>
      <Card style={{ width: "17rem" }} className="j17">
        <Card.Body>
          <img src={available} alt="dispo" className="dispoarticle" />
          <div>
            <Card.Img
              variant="top"
              className="productimage"
              src={`uploads/${product.imageURL}`}
              width="75%"
            />
          </div>
          <Card.Text>{product.name}</Card.Text>
          <Card.Text>
            <span className="forms">Ref :</span> {product.reference}
          </Card.Text>
          <Card.Text> <span className="forms">Prix :</span>{product.prix} DT</Card.Text>

          <p
            className="plusprdct"
            onClick={() => navigate(`/description/${product._id}`)}
          >
            En savoir plus →
          </p>
          <Button
            className="btnproduct"
            variant="light"
            href="tel:+216-78443500"
          >
            {" "}
            <span className="v44">Appelez pour commander</span>
          </Button>
          <div
            className="button5"
            onClick={() => navigate(`/addorder/${product._id}`)}
          >
            {" "}
            Passer une commande <img
              src={cart}
              className="cart"
              alt="img"
            />{" "}
          </div>
          {isAuthAdmin ? (
            <Button variant="danger" onClick={handleDelete}>
              Supprimer produit
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
