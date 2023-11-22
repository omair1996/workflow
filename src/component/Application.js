import { CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Application() {
  const [show, setShow] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormVisible2, setIsFormVisible2] = useState(false);
  const [isFormVisible3, setIsFormVisible3] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };
  const handleButtonClick2 = () => {
    setIsFormVisible2(!isFormVisible2);
  };
  const handleButtonClick3 = () => {
    setIsFormVisible3(!isFormVisible3);
  };

  return (
    <div style={{ flex: "1", fontFamily: "Open Sans, sans-serif" }}>
      <div style={{ height: "115px", border: "1px solid rgb(205, 206, 220)" }}>
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="table" /> Applications
            </span>
            <div>
              <button
                onClick={() => setShow(true)}
                style={{ marginRight: "25px", marginTop: "30px" }}
                className="btn btn-primary"
              >
                Add New Application
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
            Manage Applications and process status
          </span>
        </div>
      </div>
      <div className="row" style={{ border: "1px solid rgb(205, 206, 220)" }}>
        <div
          className="col-sm-4"
          style={{ marginTop: "10px", marginBottom: "20px" }}
        >
          <div>
            <input
              className="input"
              type="search"
              placeholder=" search for application "
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
          <div style={{ marginTop: "10px" }}>
            <div>
              <div style={{ marginLeft: "5px", fontSize: "12px" }}>status</div>
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
        <div className="col-sm-2" style={{ marginTop: "10px" }}>
          <div style={{ marginTop: "10px" }}>
            <div>
              <div style={{ marginLeft: "5px", fontSize: "12px" }}>
                Workflow Type
              </div>
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
        <div className="col-sm-4" style={{ marginTop: "10px" }}>
          <div style={{ marginTop: "10px" }}>
            <div>
              <div style={{ marginLeft: "145px", fontSize: "12px" }}>
                Assignee
              </div>
              <select
                name="status"
                style={{
                  width: "170px",
                  height: "40px",
                  opacity: "0.6",
                  border: "1px solid rgb(205, 206, 220)",
                  marginLeft: "140px",
                }}
              >
                <option value="" disabled selected>
                  select...
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr style={{ fontSize: "10px" }}>
              <th scope="col" style={{ opacity: "0.8" }}>
                APPLICATION
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                CUSTOMER DETAILS
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                START DATE
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                DURATION
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                END DATE
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                WORKFLOW
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                STATUS
              </th>
              <th scope="col" style={{ opacity: "0.8" }}>
                ASSIGNEE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <button
                  className="shadow-0"
                  style={{
                    height: "30px",
                    border: "1px solid rgb(205, 206, 220",
                  }}
                  onClick={handleButtonClick}
                >
                  <CDBIcon icon="caret-down" />
                </button>
                <Link
                  style={{
                    color: "blue",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  Application name
                </Link>
              </th>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                <div style={{ marginTop: "8px" }}>Sample Customer</div>
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                <div style={{ marginTop: "8px" }}>09 Nov 20</div>
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <div style={{ marginTop: "8px" }}>3 weeks</div>
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                <div style={{ marginTop: "8px" }}>30 Nov 20</div>
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                <div style={{ marginTop: "8px" }}>
                  <CDBIcon icon="table" />
                  Device Acquisition
                </div>
              </td>
              <td>
                <div style={{ marginTop: "5px" }}>
                  <div
                    className="split-element-40 text-center"
                    style={{ fontSize: "12px", color: "white" }}
                  >
                    {" "}
                    41%
                  </div>
                </div>
              </td>
              <td style={{ fontSize: "12px", fontWeight: "bold" }}>
                <div style={{ marginTop: "8px" }}>Muyiwa</div>
              </td>
            </tr>
            {isFormVisible && (
              <tr
                style={{
                  display: "table-row",
                  backgroundColor: "rgba(247, 248, 254, 0.6)",
                }}
              >
                <td colSpan={9}>
                  <div
                    className="row"
                    style={{ color: "rgba(68, 70, 84, 0.6)", fontSize: "12px" }}
                  >
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 1, Application Processing</p>
                      <div>
                        {" "}
                        <input
                          type="checkbox"
                          checked
                          style={{ height: "18px", width: "18px" }}
                        />{" "}
                        <label style={{ marginLeft: "5px" }}>step 1</label>
                      </div>
                      <div>
                        {" "}
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                        <lebel style={{ marginLeft: "5px" }}>step 2</lebel>
                      </div>
                    </div>
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 2, Client Review/Assessment</p>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                        <label style={{ marginLeft: "5px" }}>step 1</label>
                      </div>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />{" "}
                        <lebel style={{ marginLeft: "5px" }}>step 2</lebel>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />{" "}
                        <lebel style={{ marginLeft: "5px" }}>step 3</lebel>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                        <label style={{ marginLeft: "5px" }}>step 4</label>
                      </div>
                    </div>
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 3, Device Acquisition</p>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <p>Stage 4, Application Finale</p>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>{" "}
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
            <tr>
              <th scope="row">
                <button
                  className="shadow-0"
                  style={{
                    height: "30px",
                    border: "1px solid rgb(205, 206, 220",
                  }}
                  onClick={handleButtonClick2}
                >
                  <CDBIcon icon="caret-down" />
                </button>
                <Link
                  style={{
                    color: "blue",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  Application name
                </Link>
              </th>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                Sample Customer
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                09 Nov 20
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                3 weeks
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                30 Nov 20
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                <CDBIcon icon="table" />
                Device Acquisition
              </td>
              <td>
                <div
                  className="split-element-60 text-center"
                  style={{ fontSize: "12px", color: "white" }}
                >
                  60%
                </div>
              </td>
              <td style={{ fontSize: "12px", fontWeight: "bold" }}>Muyiwa</td>
            </tr>
            {isFormVisible2 && (
              <tr
                style={{
                  display: "table-row",
                  backgroundColor: "rgba(247, 248, 254, 0.6)",
                }}
              >
                <td colSpan={9}>
                  <div
                    className="row"
                    style={{ color: "rgba(68, 70, 84, 0.6)", fontSize: "12px" }}
                  >
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 1, Application Processing</p>
                      <div>
                        {" "}
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        {" "}
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 2, Client Review/Assessment</p>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 3, Device Acquisition</p>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <p>Stage 4, Application Finale</p>
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>{" "}
                      <div>
                        <input
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
            <tr>
              <th scope="row">
                <button
                  className="shadow-0"
                  style={{
                    height: "30px",
                    border: "1px solid rgb(205, 206, 220",
                  }}
                  onClick={handleButtonClick3}
                >
                  <CDBIcon icon="caret-down" />
                </button>
                <Link
                  style={{
                    color: "blue",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  Application name
                </Link>
              </th>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                Sample Customer
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                09 Nov 20
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                3 weeks
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                30 Nov 20
              </td>
              <td
                style={{
                  color: " rgb(151, 163, 172);",
                  fontSize: "12px",
                  opacity: "0.8",
                }}
              >
                <CDBIcon icon="table" />
                Device Acquisition
              </td>
              <td>
                {" "}
                <div
                  className="split-element-100 text-center"
                  style={{ fontSize: "12px", color: "white" }}
                >
                  complete
                </div>
              </td>
              <td style={{ fontSize: "12px", fontWeight: "bold" }}>Muyiwa</td>
            </tr>
            {isFormVisible3 && (
              <tr
                style={{
                  display: "table-row",
                  backgroundColor: "rgba(247, 248, 254, 0.6)",
                }}
              >
                <td colSpan={9}>
                  <div
                    className="row"
                    style={{ color: "rgba(68, 70, 84, 0.6)", fontSize: "12px" }}
                  >
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 1, Application Processing</p>
                      <div>
                        {" "}
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        {" "}
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 2, Client Review/Assessment</p>
                      <div>
                        <input
                          type="checkbox"
                          checked
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-sm-3"
                      style={{ borderRight: "1px solid rgb(205, 206, 220)" }}
                    >
                      <p>Stage 3, Device Acquisition</p>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <p>Stage 4, Application Finale</p>
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>{" "}
                      <div>
                        <input
                          checked
                          type="checkbox"
                          style={{ height: "18px", width: "18px" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <CDBIcon icon="table"> New Application</CDBIcon>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <p
                style={{
                  color: "rgb(50, 111, 228)",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Application & Client Details
              </p>
              <Row>
                <Col sm={4}>
                  <Form.Group>
                    <label
                      for="exampleInputText"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Application Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputText"
                    />
                  </Form.Group>
                </Col>
                <Col sm={8}>
                  <Form.Group>
                    <label
                      for="exampleInputText"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Description Of Application
                    </label>
                    <input
                      style={{ width: "89%" }}
                      type="text"
                      className="form-control"
                      id="exampleInputText"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Form.Group>
                    <label
                      for="exampleInputText"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginTop: "20px",
                      }}
                    >
                      Client Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputText"
                    />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group>
                    <label
                      for="exampleInputText"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginTop: "20px",
                      }}
                    >
                      Client Phone Number
                    </label>
                    <input
                      type="Tel"
                      className="form-control"
                      id="exampleInputText"
                    />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group>
                    <label
                      for="exampleInputText"
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginTop: "20px",
                      }}
                    >
                      Client Email
                    </label>
                    <input
                      style={{ width: "80%" }}
                      type="Email"
                      className="form-control"
                      id="exampleInputText"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <hr />
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col sm={4}>
                  <p
                    style={{
                      color: "rgb(50, 111, 228)",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Application Assignee
                  </p>
                  <label
                    for="exampleInputText"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Assign Application Management To Staff
                  </label>
                  <select className="form-control">
                    <option disabled selected>
                      select....
                    </option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </Col>
                <Col sm={4}>
                  <p
                    style={{
                      color: "rgb(50, 111, 228)",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Start Date
                  </p>
                  <label
                    for="exampleInputText"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    select Date
                  </label>
                  <input
                    type="Date"
                    className="form-control"
                    id="exampleInputText"
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  sm={4}
                  style={{
                    border: "1px solid rgb(205, 206, 220)",
                    marginTop: "30px",
                  }}
                >
                  <p
                    style={{
                      color: "rgb(50, 111, 228)",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginTop: "30px",
                    }}
                  >
                    Workflow Process
                  </p>
                  <label
                    for="exampleInputText"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Select Workflow
                  </label>
                  <select className="form-control">
                    <option disabled selected>
                      select....
                    </option>
                    <option>Device Acquisition Workflow</option>
                  </select>
                </Col>
                <Col
                  sm={8}
                  style={{
                    border: "1px solid rgb(205, 206, 220)",
                    marginTop: "30px",
                    backgroundColor: "rgb(247, 248, 254)",
                  }}
                ></Col>
              </Row>
            </Form>
          </Container>
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
          <div style={{ marginLeft: "30px", marginTop: "20px" }}>
            <button
              onClick={() => setShow(false)}
              style={{
                backgroundColor: '"rgba(151, 163, 172, 0.1)',
                color: "blue",
                border: "1px solid blue",
                padding: "5px 25px",
              }}
            >
              Close
            </button>
          </div>
          <div style={{ marginRight: "30px", marginTop: "20px" }}>
            <button className="btn btn-primary">Save Application</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Application;
