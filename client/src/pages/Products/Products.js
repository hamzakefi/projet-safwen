import React, { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../JS/Actions/product";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Button } from "react-bootstrap";

const Products = ({ filtredProducts }) => {
  const dispatch = useDispatch();

  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div >
      <h1 className="Produit">NOS PRODUITS</h1>
      <div className="help">
        <p>
          Besoin d'aide pour choisir ?{" "}
          <a href="tel:+216-78443500">Appelez nous</a>{" "}
        </p>
      </div>
      <div>
        {isAuthAdmin && (
          <Button className="v33" variant="light" href="/addproduct">
            <span className="v3">Ajouter produit</span>
          </Button>
        )}
        <div className="productcontainer12">
          <div className="productlist">
            {filtredProducts.length > 0 ? (
              filtredProducts.map((el) => (
                <ProductCard product={el} key={el.id} />
              ))
            ) : (
              <p>No result</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
