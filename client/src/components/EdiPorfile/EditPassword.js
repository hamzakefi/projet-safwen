import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { edituserpassword } from "../../JS/Actions/user";
import "./EditPassword.css";
import hide from "./hide1.png";
import eye from "./eye1.png";

const EditPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const match = useMatch("/editPassword/:id");
  const user = useSelector((state) => state.userReducer.user);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    dispatch(edituserpassword(match.params.id, newUser));
    navigate(`/profile/${user._id}`);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PARAMETRES DU COMPTE</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Login">PARAMETRES DU COMPTE</h1>

      <div className="cadre2">
        <div className="cadre5">
          <Form onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="forms">Ancien mot de passe</Form.Label>

              <div>
                {passwordShown ? (
                  <img src={hide} onClick={togglePassword} className="eye12" alt='hide' />
                ) : (
                  <img src={eye} onClick={togglePassword} className="eye12" alt='show'  />
                )}
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Ancien mot de passe"
                  name="oldPassword"
                  onChange={handleChange}
                  value={newUser.oldPassword}
                />
              </div>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Label className="forms">Nouveau mot de passe</Form.Label>
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="Nouveau mot de passe"
              name="password"
              onChange={handleChange}
              value={newUser.password}
            />
            <Form.Text className="text-muted"></Form.Text>

            <div className="MAJ" align="centre">
              <Button
                variant="secondary"
                onClick={() => navigate(`/profile/${user._id}`)}
              >
                <span className="boutontext">Annuler</span>
              </Button>
              <Button
                className="editbtn"
                variant="light"
                type="submit"
                onClick={handleEdit}
              >
                <span onClick={handleEdit} className="boutontext">
                  {" "}
                  Mise à jour →{" "}
                </span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
