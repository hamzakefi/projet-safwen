import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMessages } from "../../JS/Actions/messages";
import "./MessageCard.css";

const MessageCard = ({ newMessages }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteMessages(newMessages._id));
    window.location.reload();
  };
  return (
    <div className="messageCards">
      <Card>
        <Card.Body>
          <Card.Text>
            <span className="forms">Nom et Prénom :</span>
            {newMessages.name}
          </Card.Text>
          <Card.Text>
            <span className="forms">E-mail :</span>
            {newMessages.email}
          </Card.Text>
          <Card.Text>
            <span className="forms">Téléphone :</span>
            {newMessages.phone}
          </Card.Text>
          <Card.Text>
            <span className="forms">Message :</span>
            {newMessages.message}
          </Card.Text>

          <Button variant="danger" onClick={handleDelete}>
            Supprimer le message
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MessageCard;
