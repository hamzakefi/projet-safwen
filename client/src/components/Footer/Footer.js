import React from "react";
import "./Style1.css";

import { Link } from "react-router-dom";
import facebook from "./facebook.png";
import info from "./info.png";
import product from "./product.png";
import mail from "./gmail.png";
import phone from "./telephone.png";
import adresse from "./navigation.png";
import { Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddMessages from "../addMessages/AddMessages";

const Footer = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <footer>
      <div className="Info">
        <div>
          
          <p className="text">
            Livraison sur le grand tunis 
          </p>
        </div>
        <div>
          
          <p className="text">
            Service client 
          </p>
        </div>
        <div>
          
          <p className="c-text">
          repair et maintenance <br></br>
          </p>
        </div>
      </div>

      {isAuth || isAuthAdmin ? null : (
        <div className="mainfooter2">
          <div className="contain5">
            <p className="txt7">
              Inscrivez-vous pour recevoir les codes promos
            </p>
            <div className="form7">
              <FormControl placeholder="Votre adresse e-mail" />
            </div>
            <div>
              <Button className="v33" variant="light" href="/accountCreate">
                {" "}
                <span className="v3">Inscription</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {isAuthAdmin ? null : <AddMessages />}

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <p>Informations</p>
              <div className="flex">
                <Link to="/Aproposdenous" className="path">
                  {" "}
                  <img src={info} className="ico" alt="img" /> À propos de nous
                </Link>
                <br />
                <Link to="/Produits" className="path">
                  <img src={product} className="ico" alt="img" />
                  Nos Produits
                </Link>
                <br />
                <a
                  target="_blank"
                 
                
                  rel="noreferrer"
                >
                  <img src={facebook} className="ico" alt="img" />
             
                </a>
              </div>
            </div>

            {/* Column3 */}
            <div className="col">
              <p>Nous contacter</p>

              <a href="tel:" className="path">
                <img src={phone} className="ico" alt="img" />
                Tél : (+216) 27422987
              </a>
              <a href="mailto: info.ghanmisafwen@gmail.com" className="path">
                <p>
                  <img src={mail} className="ico" alt="img" /> Mail:
                 info.ghanmisafwen@gmail.com
                </p>
              </a>
              <a
                target="_blank"
                
                className="path"
                rel="noreferrer"
              >
                <p>
                  <img src={adresse} className="ico" alt="img" />
                  GOMYCODE Menzah 5 {" "}
                </p>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} NOSTECH | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
