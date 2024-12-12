import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "antd";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      id: 1,
      name: "Alert Notifiction",
      description:
        "Stay informed with instant alerts for any security breaches or suspicious activity.",
    },
    {
      id: 2,
      name: "Live Camera View",
      description:
        "Monitor real-time footage from your security cameras anywhere, anytime.",
    },
    {
      id: 3,
      name: "Add Restricted Persons",
      description:
        "Enhance security by adding individuals to a restricted list for immediate detection.",
    },
    {
      id: 4,
      name: "Alert History",
      description:
        "Review past notifications and incidents for better security management.",
    },
    {
      id: 4,
      name: "Restricted persons list ",
      description:
        "Maintain a detailed list of flagged individuals for efficient monitoring and action.",
    },
  ];

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center ">
        {items.map((item) => (
          <div className="m-1 w-25">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn onClick={showModal}>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
