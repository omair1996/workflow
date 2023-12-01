import { CDBIcon } from "cdbreact";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  OverlayTrigger,
  Popover,
  ButtonToolbar,
  PopoverBody,
} from "react-bootstrap";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";

import { useState } from "react";

const AddStage = ({ isSidebarOpen }) => {
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);

  const popoverTop = (
    <Popover id="popover-positioned-top-left">
      <PopoverBody>
        <div
          style={{ marginTop: "5px", cursor: "pointer", fontSize: "12px" }}
          className="d-flex justify-content-between"
        >
          <CDBIcon icon="chart-line" /> <span>Edit workflow</span>
        </div>
        <div
          style={{ marginTop: "20px", cursor: "pointer", fontSize: "12px" }}
          className="d-flex justify-content-between"
        >
          <CDBIcon icon="trash" />
          <span> Delete workflow</span>
        </div>
        <div
          style={{ marginTop: "20px", cursor: "pointer", fontSize: "12px" }}
          className="d-flex justify-content-between"
        >
          <span className="fab fa-firefox" />
          <span style={{ marginLeft: "10px" }}> Deactivate workflow</span>
        </div>
      </PopoverBody>
    </Popover>
  );

  return (
    <div
      style={{
        flex: "1",
        transition: "margin-left 0.3s",
        marginLeft: isSidebarOpen ? "270px" : "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          border: "1px solid rgb(205, 206, 220)",
          height: "105px",

          borderRight: "none",
        }}
      >
        <div className=" row">
          <div className=" col-sm-2 d flex">
            <div
              className="rotate-button hover-container"
              style={{ display: "inline-block", fontSize: "12px" }}
            >
              <Link path to="/WorkFlow">
                list of{" "}
                <span style={{ fontSize: "15px", display: "block" }}>
                  Workflow
                </span>
              </Link>
            </div>
            <div
              className="rotate-button hover-container"
              style={{
                display: "inline-block",
                fontSize: "12px",
              }}
            >
              <Link path to="/CreateWorkFlow">
                Back to{" "}
                <span style={{ fontSize: "15px", display: "block" }}>
                  Workflow
                </span>
              </Link>
            </div>
          </div>
          <div className="col-sm-6 " style={{ marginTop: "15px" }}>
            <span style={{ marginLeft: "25px" }}>
              <CDBIcon icon="chart-line" /> New Workflow
            </span>
            <span
              style={{
                opacity: "0.6",
                marginLeft: "30px",
                display: "block",
                fontSize: "12px",
              }}
            >
              Create a process flow with stages, sub steps and manage
              notification triggers
            </span>
          </div>
          <div className="col-sm-4">
            <button
              className="hover-container"
              style={{
                marginRight: "15px",
                border: "1px solid blue",
                color: "blue",
                backgroundColor: "transparent",
                padding: "5px",
              }}
            >
              Delete WorkFlow
            </button>
            <button
              style={{ marginRight: "25px", marginTop: "30px" }}
              className="btn btn-primary"
            >
              Save Workflow
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid rgb(205, 206, 220)",
          fontSize: "12px",
        }}
      >
        <div>
          <label
            for="exampleInputEmail"
            className="form-group"
            style={{ marginTop: "30px", marginLeft: "50px" }}
          >
            Stage Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder=" Enter Stage name "
            style={{
              height: "45px",
              border: "1px solid rgb(205, 206, 220)",
              marginLeft: "50px",
              marginTop: "25px",
              opacity: "0.6",

              paddingRight: "30px",
              width: "50%",

              marginBottom: "20px",
              fontSize: "12px",
            }}
          />
        </div>
        <div>
          <label
            for="exampleInputEmail"
            className="form-group"
            style={{ marginTop: "15px", marginLeft: "50px" }}
          >
            Stage Delails
          </label>
          <textarea
            className="form-control"
            type="text"
            placeholder=" Enter Stage description"
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginLeft: "50px",
              marginTop: "25px",
              opacity: "0.6",
              position: "relative",
              paddingRight: "30px",
              width: "50%",
              height: "120px",
              marginBottom: "20px",
              fontSize: "12px",
            }}
          />
        </div>
      </div>
      <div style={{ border: "1px solid rgb(205, 206, 220)", fontSize: "12px" }}>
        <div
          className="form-control"
          style={{
            border: "1px solid rgb(205, 206, 220)",
            marginLeft: "50px",
            marginTop: "25px",
            display: "inline-block",
            padding: "10px",
            width: "20%",
            marginBottom: "20px",
          }}
        >
          {" "}
          <span
            style={{
              color: "rgba(68, 70, 84, 0.6)",
              fontSize: "12px",
              opacity: "0.8",
            }}
          >
            <CDBIcon icon="clock" /> Cumulative Timeline
          </span>
          <span style={{ fontWeight: "bold", fontSize: "12px" }}> 3 week</span>
        </div>
        <div style={{ display: "inline-block" }}>
          <label
            style={{
              backgroundColor: "rgb(98, 112, 123)",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              zIndex: "9",
              marginLeft: "30px",
              border: "1px solid white",
            }}
          >
            .
          </label>

          <label
            style={{
              backgroundColor: "rgb(98, 112, 123)",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              zIndex: "99",
              marginLeft: "-7px",
              border: "1px solid white",
            }}
          >
            .
          </label>
          <label
            style={{
              backgroundColor: "rgb(208, 213, 217)",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              zIndex: "999",
              border: "1px solid white",
              marginLeft: "-8px",
              fontSize: "12px",
            }}
          >
            <span
              className="d-flex justify-content-center"
              style={{ marginTop: "3px" }}
            >
              + 1
            </span>
          </label>
        </div>
        <div
          style={{
            opacity: "0.8",
            fontSize: "12px",
            marginLeft: "15px",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          Recipients
        </div>
        <div
          style={{
            display: "inline-block",

            marginTop: "25px",
            marginLeft: "480px",
          }}
        >
          <button
            className="btn btn-primary"
            onClick={() => setToggleOneModal(!toggleOneModal)}
          >
            <span style={{ marginRight: "7px" }}>+</span> Add stage
          </button>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "rgb(247, 248, 254)" }}>
        <div style={{ marginLeft: "50px", marginTop: "30px" }}> Steps</div>
        <div className="col-sm-4">
          <div
            className=" zoom-out-container"
            style={{
              marginLeft: "30px",

              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <div className="image-col">
              <div
                className="zoom-out-image"
                style={{
                  border: "2px solid rgb(205, 206, 220)",
                  padding: "20px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div>
                  <div>
                    <div className="d-flex align-items-center  justify-content-between">
                      <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Stage 1 : Register Client
                      </div>
                      <div>
                        <ButtonToolbar>
                          <OverlayTrigger
                            trigger="click"
                            placement="top"
                            overlay={popoverTop}
                          >
                            <button
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                border: "1px solid rgb(255, 255, 255)",
                              }}
                            >
                              <CDBIcon icon="ellipsis-h" />
                            </button>
                          </OverlayTrigger>
                        </ButtonToolbar>
                      </div>
                    </div>
                    <div
                      style={{
                        opacity: "0.8",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      <p>
                        Voluptua. At vero eos et accusam et justo duo dolores et
                        ea rebum. Stet clita kasd gubergren, no sea…
                      </p>
                    </div>

                    <div className="d-flex align-items-center  justify-content-between">
                      <label
                        style={{
                          backgroundColor: "rgb(98, 112, 123)",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      ></label>
                      <span
                        style={{
                          color: "rgba(68, 70, 84, 0.6)",
                          fontSize: "12px",
                        }}
                      >
                        <CDBIcon icon="clock" /> Cumulative Timeline
                      </span>
                    </div>
                    <label style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ marginLeft: "40px", opacity: "0.8" }}>
                        Recipients
                      </span>
                      <span style={{ marginLeft: "70px", fontWeight: "bold" }}>
                        1 Week, 2 Days
                      </span>
                    </label>
                    <label
                      style={{
                        backgroundColor: "rgb(98, 112, 123)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                      }}
                    ></label>
                    <label
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgb(208, 213, 217)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                        marginTop: "10px",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      + 1
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className=" zoom-out-container"
            style={{
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <div className="image-col">
              <div
                className="zoom-out-image"
                style={{
                  border: "2px solid rgb(205, 206, 220)",
                  padding: "20px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div>
                  <div>
                    <div className="d-flex align-items-center  justify-content-between">
                      <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Stage 1 : Register Client
                      </div>
                      <div>
                        <ButtonToolbar>
                          <OverlayTrigger
                            trigger="click"
                            placement="top"
                            overlay={popoverTop}
                          >
                            <button
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                border: "1px solid rgb(255, 255, 255)",
                              }}
                            >
                              <CDBIcon icon="ellipsis-h" />
                            </button>
                          </OverlayTrigger>
                        </ButtonToolbar>
                      </div>
                    </div>
                    <div
                      style={{
                        opacity: "0.8",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      <p>
                        Voluptua. At vero eos et accusam et justo duo dolores et
                        ea rebum. Stet clita kasd gubergren, no sea…
                      </p>
                    </div>

                    <div className="d-flex align-items-center  justify-content-between">
                      <label
                        style={{
                          backgroundColor: "rgb(98, 112, 123)",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      ></label>
                      <span
                        style={{
                          color: "rgba(68, 70, 84, 0.6)",
                          fontSize: "12px",
                        }}
                      >
                        <CDBIcon icon="clock" /> Cumulative Timeline
                      </span>
                    </div>
                    <label style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ marginLeft: "40px", opacity: "0.8" }}>
                        Recipients
                      </span>
                      <span style={{ marginLeft: "70px", fontWeight: "bold" }}>
                        1 Week, 2 Days
                      </span>
                    </label>
                    <label
                      style={{
                        backgroundColor: "rgb(98, 112, 123)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                      }}
                    ></label>
                    <label
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgb(208, 213, 217)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                        marginTop: "10px",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      + 1
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className=" zoom-out-container"
            style={{
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <div className="image-col">
              <div
                className="zoom-out-image"
                style={{
                  border: "2px solid rgb(205, 206, 220)",
                  padding: "20px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div>
                  <div>
                    <div className="d-flex align-items-center  justify-content-between">
                      <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Stage 1 : Register Client
                      </div>
                      <div>
                        <ButtonToolbar>
                          <OverlayTrigger
                            trigger="click"
                            placement="top"
                            overlay={popoverTop}
                          >
                            <button
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                border: "1px solid rgb(255, 255, 255)",
                              }}
                            >
                              <CDBIcon icon="ellipsis-h" />
                            </button>
                          </OverlayTrigger>
                        </ButtonToolbar>
                      </div>
                    </div>
                    <div
                      style={{
                        opacity: "0.8",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      <p>
                        Voluptua. At vero eos et accusam et justo duo dolores et
                        ea rebum. Stet clita kasd gubergren, no sea…
                      </p>
                    </div>

                    <div className="d-flex align-items-center  justify-content-between">
                      <label
                        style={{
                          backgroundColor: "rgb(98, 112, 123)",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      ></label>
                      <span
                        style={{
                          color: "rgba(68, 70, 84, 0.6)",
                          fontSize: "12px",
                        }}
                      >
                        <CDBIcon icon="clock" /> Cumulative Timeline
                      </span>
                    </div>
                    <label style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ marginLeft: "40px", opacity: "0.8" }}>
                        Recipients
                      </span>
                      <span style={{ marginLeft: "70px", fontWeight: "bold" }}>
                        1 Week, 2 Days
                      </span>
                    </label>
                    <label
                      style={{
                        backgroundColor: "rgb(98, 112, 123)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                      }}
                    ></label>
                    <label
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgb(208, 213, 217)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                        marginTop: "10px",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      + 1
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className=" zoom-out-container"
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              marginLeft: "30px",
            }}
          >
            <div className="image-col">
              <div
                className="zoom-out-image"
                style={{
                  border: "2px solid rgb(205, 206, 220)",
                  padding: "20px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div>
                  <div>
                    <div className="d-flex align-items-center  justify-content-between">
                      <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Stage 1 : Register Client
                      </div>
                      <div>
                        <ButtonToolbar>
                          <OverlayTrigger
                            trigger="click"
                            placement="top"
                            overlay={popoverTop}
                          >
                            <button
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                                border: "1px solid rgb(255, 255, 255)",
                              }}
                            >
                              <CDBIcon icon="ellipsis-h" />
                            </button>
                          </OverlayTrigger>
                        </ButtonToolbar>
                      </div>
                    </div>
                    <div
                      style={{
                        opacity: "0.8",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      <p>
                        Voluptua. At vero eos et accusam et justo duo dolores et
                        ea rebum. Stet clita kasd gubergren, no sea…
                      </p>
                    </div>

                    <div className="d-flex align-items-center  justify-content-between">
                      <label
                        style={{
                          backgroundColor: "rgb(98, 112, 123)",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      ></label>
                      <span
                        style={{
                          color: "rgba(68, 70, 84, 0.6)",
                          fontSize: "12px",
                        }}
                      >
                        <CDBIcon icon="clock" /> Cumulative Timeline
                      </span>
                    </div>
                    <label style={{ fontSize: "12px" }}>
                      {" "}
                      <span style={{ marginLeft: "40px", opacity: "0.8" }}>
                        Recipients
                      </span>
                      <span style={{ marginLeft: "70px", fontWeight: "bold" }}>
                        1 Week, 2 Days
                      </span>
                    </label>
                    <label
                      style={{
                        backgroundColor: "rgb(98, 112, 123)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                      }}
                    ></label>
                    <label
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgb(208, 213, 217)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "block",
                        marginTop: "10px",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      + 1
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MDBModal open={toggleOneModal} setOpen={setToggleOneModal} tabIndex="-1">
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalTitle>
              <div style={{ marginLeft: "20px", marginTop: "30px" }}>
                {" "}
                <CDBIcon icon="chart-line"> New Step</CDBIcon>{" "}
              </div>
            </MDBModalTitle>
            <MDBModalTitle>
              <div
                style={{
                  marginLeft: "30px",
                  marginTop: "30px",
                  fontSize: "15px",
                }}
              >
                <span
                  className=""
                  style={{
                    cursor: "pointer",
                    borderBottom: "2px solid blue",
                    padding: "8px",
                    paddingTop: "20px",
                  }}
                >
                  Details
                </span>

                <span
                  className="hover-container"
                  onClick={() => {
                    setToggleOneModal(!toggleOneModal);
                    setTimeout(() => {
                      setToggleTwoModal(!toggleTwoModal);
                    }, 100);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Notification & Recipients
                </span>
              </div>
            </MDBModalTitle>

            <MDBModalBody>
              <div className="mb-3" controlId="exampleForm.ControlInput1">
                <label
                  for="exampleInputEmail"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "15px",
                  }}
                >
                  Step Name
                </label>
                <input
                  style={{
                    marginLeft: "15px",
                    fontSize: "12px",
                    height: "40px",
                    width: "70%",
                  }}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter step name"
                />
              </div>

              <div className="mb-3" controlId="exampleForm.ControlInput1">
                <label
                  for="exampleInputEmail"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "15px",
                  }}
                >
                  Step Name
                </label>
                <textarea
                  style={{
                    marginLeft: "15px",
                    fontSize: "12px",
                    height: "100px",
                    width: "70%",
                  }}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter step name"
                />
              </div>

              <div>
                <label
                  for="exampleInputText"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "15px",
                  }}
                >
                  Expected Duration In Days
                </label>
                <input
                  style={{ marginLeft: "15px", width: "30%" }}
                  type="number"
                  className="form-control"
                  id="exampleInputText"
                  placeholder="select....."
                />
              </div>
            </MDBModalBody>

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
                  className="hover-container"
                  style={{
                    backgroundColor: '"rgba(151, 163, 172, 0.1)',
                    color: "blue",
                    border: "1px solid blue",
                    padding: "8px 25px",
                  }}
                  onClick={() => setToggleOneModal(!toggleOneModal)}
                >
                  Close
                </button>
              </div>
              <div style={{ marginTop: "15px", marginRight: "30px" }}>
                <button className="btn btn-primary">Save User</button>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal open={toggleTwoModal} setOpen={setToggleTwoModal} tabIndex="-1">
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalTitle>
              <div style={{ marginLeft: "20px", marginTop: "30px" }}>
                {" "}
                <CDBIcon icon="chart-line"> New Step</CDBIcon>{" "}
              </div>
            </MDBModalTitle>
            <MDBModalTitle>
              <div
                style={{
                  marginLeft: "30px",
                  marginTop: "30px",
                  fontSize: "15px",
                }}
              >
                <span
                  className="hover-container"
                  onClick={() => {
                    setToggleTwoModal(!toggleTwoModal);
                    setTimeout(() => {
                      setToggleOneModal(!toggleOneModal);
                    }, 100);
                  }}
                  style={{
                    cursor: "pointer",

                    padding: "8px",
                    paddingTop: "20px",
                  }}
                >
                  Details
                </span>

                <span
                  className="hover-container"
                  style={{
                    cursor: "pointer",
                    borderBottom: "2px solid blue",
                    padding: "8px",
                    paddingTop: "20px",
                  }}
                >
                  Notification & Recipients
                </span>
              </div>
            </MDBModalTitle>
            <MDBModalBody>
              <div className="mb-3" controlId="exampleForm.ControlInput1">
                <label
                  for="exampleInputEmail"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "140px",
                  }}
                >
                  Notify
                </label>
                <label
                  for="exampleInputEmail"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  Email
                </label>
                <label
                  for="exampleInputEmail"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  SMS
                </label>
                <label
                  for="exampleInputEmail"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  Recipients
                </label>
              </div>
              <div>
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                  style={{
                    color: " rgb(68, 70, 84)",
                    fontSize: "12px",
                    padding: "20px",
                  }}
                >
                  Approaching Start
                </label>
                <Form.Check inline type="switch" id="custom-switch" />
                <input
                  checked
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "7px" }}
                />
                <input
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "27px" }}
                />
                <input
                  style={{
                    width: "50%",
                    display: "inline-block",
                    marginLeft: "30px",
                  }}
                  type="number"
                  className="form-control"
                  id="exampleInputText"
                  placeholder="select....."
                />
              </div>
              <div>
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                  style={{
                    color: " rgb(68, 70, 84)",
                    fontSize: "12px",
                    padding: "20px",
                  }}
                >
                  Start Date
                </label>
                <Form.Check
                  inline
                  type="switch"
                  id="custom-switch"
                  style={{ marginLeft: "43px" }}
                />
                <input
                  checked
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "7px" }}
                />
                <input
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "27px" }}
                />
                <input
                  style={{
                    width: "50%",
                    display: "inline-block",
                    marginLeft: "30px",
                  }}
                  type="number"
                  className="form-control"
                  id="exampleInputText"
                  placeholder="select....."
                />
              </div>
              <div>
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                  style={{
                    color: " rgb(68, 70, 84)",
                    fontSize: "12px",
                    padding: "20px",
                  }}
                >
                  Close to Due Date
                </label>
                <Form.Check inline type="switch" id="custom-switch" />
                <input
                  checked
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "7px" }}
                />
                <input
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "27px" }}
                />
                <input
                  style={{
                    width: "50%",
                    display: "inline-block",
                    marginLeft: "30px",
                  }}
                  type="number"
                  className="form-control"
                  id="exampleInputText"
                  placeholder="select....."
                />
              </div>
              <div>
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                  style={{
                    color: " rgb(68, 70, 84)",
                    fontSize: "12px",
                    padding: "20px",
                  }}
                >
                  Due Date
                </label>
                <Form.Check
                  inline
                  type="switch"
                  id="custom-switch"
                  style={{ marginLeft: "47px" }}
                />
                <input
                  checked
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "7px" }}
                />
                <input
                  type="checkbox"
                  style={{ height: "23px", width: "23px", marginLeft: "27px" }}
                />
                <input
                  style={{
                    width: "50%",
                    display: "inline-block",
                    marginLeft: "30px",
                  }}
                  type="number"
                  className="form-control"
                  id="exampleInputText"
                  placeholder="select....."
                />
              </div>
            </MDBModalBody>
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
                  className="hover-container"
                  style={{
                    backgroundColor: '"rgba(151, 163, 172, 0.1)',
                    color: "blue",
                    border: "1px solid blue",
                    padding: "8px 25px",
                  }}
                  onClick={() => setToggleTwoModal(!toggleTwoModal)}
                >
                  Close
                </button>
              </div>
              <div style={{ marginTop: "15px", marginRight: "30px" }}>
                <button className="btn btn-primary">Save User</button>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default AddStage;
