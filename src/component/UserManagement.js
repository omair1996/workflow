import { CDBIcon } from "cdbreact";
import React, { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const UserManagement = ({ isSidebarOpen }) => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (event) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };
  const defaultImageUrl =
    "https://eul.netlify.app/static/media/user.647a595e.svg";
  return (
    <div
      style={{
        flex: "1",
        fontFamily: "sans-serif",
        transition: "margin-left 0.3s",
        marginLeft: isSidebarOpen ? "270px" : "80px",
      }}
    >
      <div
        style={{
          border: "1px solid rgb(205, 206, 220)",
          paddingBottom: "30px",
          borderRight: "none",
        }}
      >
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="users" /> User Management
            </span>
            <div>
              <button
                onClick={handleShow}
                style={{ marginRight: "25px", marginTop: "30px" }}
                className="btn btn-primary"
              >
                Create User
              </button>
            </div>
          </div>

          <span
            style={{
              opacity: "0.6",
              marginLeft: "30px",
              display: "block",
              fontSize: "12px",
            }}
          >
            Manage user access and control
          </span>
        </div>
      </div>
      <div className="row" style={{ border: "1px solid rgb(205, 206, 220)" }}>
        <div
          className="col-sm-4"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          <div>
            <input
              className="input"
              type="search"
              placeholder=""
              style={{
                borderRadius: "20px",
                height: "45px",
                border: "1px solid rgb(205, 206, 220)",
                marginLeft: "50px",
                marginTop: "25px",
                opacity: "0.6",
                position: "relative",
                paddingRight: "30px",
                width: "80%",
                paddingRight: "px",
              }}
            />
          </div>
        </div>
        <div className="col-sm-2" style={{ marginTop: "10px" }}>
          <div style={{ marginTop: "30px" }}>
            <div>
              <div style={{ marginLeft: "5px", fontSize: "12px" }}>Role</div>
              <select
                name="status"
                style={{
                  width: "170px",
                  height: "40px",
                  opacity: "0.6",
                  border: "1px solid rgb(205, 206, 220)",
                }}
              >
                <option value="" disabled selected>
                  select...
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            style={{
              backgroundImage:
                "url(https://eul.netlify.app/static/media/users.a0695f1f.svg)",
              backgroundSize: "140px",
              backgroundPosition: "right 10px",
              backgroundRepeat: "no-repeat",
              padding: "65px 70px",
            }}
          ></div>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr style={{ fontSize: "10px", fontWeight: "bold" }}>
              <th scope="col" style={{ opacity: "0.8" }}></th>
              <th scope="col" style={{ opacity: "0.8" }}>
                Name
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                Email
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                Role
              </th>
              <th scope="col" style={{ opacity: "0.8" }}></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <CDBIcon icon="users"> New User</CDBIcon>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex justify-content-center ">
                {selectedImage ? (
                  <div>
                    <img
                      id="selectedImage"
                      src={selectedImage}
                      className="rounded-circle"
                      style={{
                        width: "130px",
                        height: "130px",
                        objectFit: "cover",
                      }}
                      alt="profile picture"
                    />

                    <span
                      style={{ cursor: "pointer" }}
                      onClick={handleDeleteImage}
                    >
                      {" "}
                      x
                    </span>
                  </div>
                ) : (
                  <img
                    id="selectedAvatar"
                    src={defaultImageUrl}
                    className="rounded-circle"
                    style={{
                      width: "130px",
                      height: "130px",
                      objectFit: "cover",
                    }}
                    alt="profile picture"
                  />
                )}
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="btn  btn-rounded"
                  style={{
                    border: "1px solid rgb(98, 112, 123)",
                    backgroundColor: "rgba(98, 112, 123, 0)",
                    height: "38px",
                  }}
                >
                  <label
                    className="form-label text-drak m-1"
                    for="customFile2"
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    upload picture
                  </label>
                  <input
                    type="file"
                    className="form-control d-none"
                    id="customFile2"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </Form.Group>
            <Container>
              <Row>
                <Col sm={6}>
                  <Form.Group>
                    <label
                      for="exampleInputEmail"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "20px",
                      }}
                    >
                      Frist Name
                    </label>
                    <Form.Control
                      type="text"
                      placeholder="first Name"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <label
                      for="exampleInputEmail"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "20px",
                      }}
                    >
                      Last Name
                    </label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <label
                      for="exampleInputEmail"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "20px",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="simple@mail.com"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <label
                      for="exampleInputText"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "20px",
                      }}
                    >
                      Gender
                    </label>
                    <select
                      type="text"
                      className="form-control"
                      id="exampleInputText"
                      placeholder="Last Name"
                    >
                      <option disabled selected>
                        select....
                      </option>
                      <option>male</option>
                      <option>female</option>
                    </select>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <label
                      for="exampleInputText"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Select Role
                    </label>
                    <select
                      type="text"
                      className="form-control"
                      id="exampleInputText"
                      placeholder="Last Name"
                    >
                      <option disabled selected>
                        select....
                      </option>
                      <option>All</option>
                      <option>System Administrator</option>
                      <option>Application Officer</option>
                      <option>Monitoring Officer</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>
              <hr style={{ marginTop: "30px" }} />
              <Row>
                <Col sm={6}>
                  <Form.Group>
                    <label
                      for="exampleInputEmail"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="*******"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <div>
                    <input type="checkbox" />{" "}
                    <label
                      for="exampleInputEmail"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        marginTop: "20px",
                      }}
                    >
                      auto generate password
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />{" "}
                    <label
                      for="exampleInputEmail"
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Force change of password on first login
                    </label>
                  </div>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <div
          className="d-flex justify-content-between"
          style={{
            backgroundColor: "rgba(151, 163, 172, 0.1)",
            border: "1px solid gery",

            height: "70px",
            marginTop: "20px",
          }}
        >
          <div style={{ marginTop: "15px", marginLeft: "30px" }}>
            <button
              style={{
                backgroundColor: '"rgba(151, 163, 172, 0.1)',
                color: "blue",
                border: "1px solid blue",
                padding: "8px 25px",
              }}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
          <div style={{ marginTop: "15px", marginRight: "30px" }}>
            <button className="btn btn-primary">Save User</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default UserManagement;
