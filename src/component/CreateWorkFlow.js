import { CDBIcon } from "cdbreact";
import React from "react";
import { Link } from "react-router-dom";
import {
  OverlayTrigger,
  Popover,
  ButtonToolbar,
  PopoverBody,
} from "react-bootstrap";
import { useState } from "react";
import "../App.css";

const CreateWorkFlow = ({ isSidebarOpen }) => {
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
        marginLeft: isSidebarOpen ? "270px" : "70px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ border: "1px solid rgb(205, 206, 220)" }}>
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="chart-line" /> New Workflow
            </span>

            <div>
              <button
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
          <span
            style={{
              opacity: "0.6",
              marginLeft: "30px",
              display: "block",
              fontSize: "12px",
            }}
          >
            Create a process flow with stages, sub steps and manage notification
            triggers
          </span>
        </div>
        <div style={{ marginBottom: "30px" }}></div>
      </div>
      <div style={{ border: "1px solid rgb(205, 206, 220)", fontSize: "12px" }}>
        <div>
          <label
            for="exampleInputEmail"
            className="form-group"
            style={{ marginTop: "15px", marginLeft: "50px" }}
          >
            Workflow Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder=" Enter Workflow name                                                                  A - Z "
            style={{
              height: "45px",
              border: "1px solid rgb(205, 206, 220)",
              marginLeft: "50px",
              marginTop: "25px",
              opacity: "0.6",
              position: "relative",
              paddingRight: "30px",
              width: "50%",

              marginBottom: "20px",
            }}
          />
        </div>
      </div>
      <div
        style={{ border: "1px solid rgb(205, 206, 220)", fontSize: "12px" }}
        className="d-flex justify-content-between"
      >
        <div
          className="form-control"
          style={{
            border: "1px solid rgb(205, 206, 220)",
            marginLeft: "50px",
            marginTop: "25px",

            padding: "10px",
            width: "30%",
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

        <div
          style={{
            display: "inline-block",
            marginRight: "10px",
            marginTop: "25px",
          }}
        >
          <Link path to="/AddStage">
            <button className="btn btn-primary">
              <span style={{ marginRight: "5px" }}>+</span> Add stage
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 ">
          <h4 style={{ marginLeft: "30px", marginTop: "25px" }}> Stage</h4>
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
                  border: "1px solid rgb(205, 206, 220)",
                  padding: "20px",
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
                                backgroundColor: "white",
                                border: "1px solid white",
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
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginTop: "10px",
                      }}
                    >
                      Steps
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgb(238, 240, 253)",
                        color: "rgb(98, 112, 123)",
                        padding: "20px 20px",
                      }}
                    >
                      <div>
                        <label
                          style={{
                            backgroundColor: "rgb(179, 188, 246)",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                          }}
                        ></label>
                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            marginLeft: "10px",
                          }}
                        >
                          A step has no name
                        </span>
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            marginLeft: "19px",
                          }}
                        >
                          3 Days
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgb(238, 240, 253)",
                        color: "rgb(98, 112, 123)",
                        padding: "20px 20px",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <label
                          style={{
                            backgroundColor: "rgb(179, 188, 246)",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                          }}
                        ></label>
                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            marginLeft: "10px",
                          }}
                        >
                          Second step has no name
                        </span>
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            marginLeft: "19px",
                          }}
                        >
                          2 Days
                        </div>
                      </div>
                    </div>
                    <hr />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 zoom-out-container ">
          <div className="image-col">
            <div className="zoom-out-image">
              <div
                className=""
                style={{
                  border: "1px solid rgb(205, 206, 220)",

                  padding: "20px",
                  marginTop: "40px",
                }}
              >
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
                            backgroundColor: "white",
                            border: "1px solid white",
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
                    Voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd gubergren, no sea…
                  </p>
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                >
                  Steps
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(238, 240, 253)",
                    color: "rgb(98, 112, 123)",
                    padding: "20px 20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        backgroundColor: "rgb(179, 188, 246)",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                      }}
                    ></label>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "10px",
                      }}
                    >
                      A step has no name
                    </span>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "19px",
                      }}
                    >
                      3 Days
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(238, 240, 253)",
                    color: "rgb(98, 112, 123)",
                    padding: "20px 20px",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        backgroundColor: "rgb(179, 188, 246)",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                      }}
                    ></label>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "10px",
                      }}
                    >
                      Second step has no name
                    </span>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "19px",
                      }}
                    >
                      2 Days
                    </div>
                  </div>
                </div>
                <hr />
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
                  <span style={{ marginLeft: "50px", opacity: "0.8" }}>
                    Recipients
                  </span>
                  <span style={{ marginLeft: "90px", fontWeight: "bold" }}>
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
                  + 4
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 zoom-out-container">
          <div className="image-col">
            <div className="zoom-out-image">
              <div
                style={{
                  border: "1px solid rgb(205, 206, 220)",

                  padding: "20px",
                  marginTop: "40px",
                }}
              >
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
                            backgroundColor: "white",
                            border: "1px solid white",
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
                    Voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd gubergren, no sea…
                  </p>
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                >
                  Steps
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(238, 240, 253)",
                    color: "rgb(98, 112, 123)",
                    padding: "20px 20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        backgroundColor: "rgb(179, 188, 246)",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                      }}
                    ></label>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "10px",
                      }}
                    >
                      A step has no name
                    </span>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "19px",
                      }}
                    >
                      3 Days
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(238, 240, 253)",
                    color: "rgb(98, 112, 123)",
                    padding: "20px 20px",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        backgroundColor: "rgb(179, 188, 246)",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                      }}
                    ></label>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "10px",
                      }}
                    >
                      Second step has no name
                    </span>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginLeft: "19px",
                      }}
                    >
                      2 Days
                    </div>
                  </div>
                </div>
                <hr />
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
                  <span style={{ marginLeft: "50px", opacity: "0.8" }}>
                    Recipients
                  </span>
                  <span style={{ marginLeft: "90px", fontWeight: "bold" }}>
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
                  + 4
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkFlow;
