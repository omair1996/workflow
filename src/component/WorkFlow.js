import { CDBIcon } from "cdbreact";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  OverlayTrigger,
  Popover,
  ButtonToolbar,
  PopoverBody,
} from "react-bootstrap";

function WorkFlow({ isSidebarOpen }) {
  const [deleteButton, setDaleteButton] = useState(false);

  const handleDeleteButton = () => {
    setDaleteButton(!deleteButton);
  };

  const popoverTop = (
    <Popover id="popover-positioned-top-left">
      <PopoverBody>
        <div
          style={{ marginTop: "10px", cursor: "pointer", fontSize: "12px" }}
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

        fontFamily: "Open Sans, sans-serif",
        position: "relative",
        transition: "margin-left 0.3s",
        marginLeft: isSidebarOpen ? "270px" : "80px",
      }}
    >
      <div
        style={{ border: "1px solid rgb(205, 206, 220)", borderRight: "none" }}
      >
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="chart-line" /> workflow configurations
            </span>
            <Link exact to="/CreateWorkFlow">
              <button
                style={{ marginRight: "25px", marginTop: "30px" }}
                className="btn btn-primary"
              >
                Create Workflow
              </button>
            </Link>
          </div>
          <span
            style={{
              opacity: "0.6",
              marginLeft: "30px",
              display: "block",
              fontSize: "12px",
            }}
          >
            Manage process flows
          </span>
          <div style={{ marginBottom: "30px" }}></div>
        </div>
      </div>
      <div
        style={{ border: "1px solid rgb(205, 206, 220)", borderRight: "none" }}
      >
        <div>
          <input
            className="input"
            type="search"
            placeholder="       Search for application "
            style={{
              borderRadius: "20px",
              height: "45px",
              border: "1px solid rgb(205, 206, 220)",
              marginLeft: "50px",
              marginTop: "25px",
              opacity: "0.6",
              position: "relative",
              paddingRight: "30px",
              width: "30%",
              paddingRight: "px",
              marginBottom: "20px",
              fontSize: "12px",
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              borderRadius: "5px",
              marginTop: "30px",
              marginLeft: "30px",
            }}
          >
            <div
              className="row"
              style={{
                fontSize: "12px",
              }}
            >
              <div className="col-sm-9 text-center" style={{ padding: "20px" }}>
                <span
                  style={{
                    display: "block",
                    color: "rgb(50, 111, 228)",
                    fontWeight: "bold",
                  }}
                >
                  Device Acquisition Workflow
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "55px",
                  }}
                >
                  5 Stages / 26 Steps
                </span>
                <span
                  style={{ display: "block", color: "rgba(68, 70, 84, 0.6)" }}
                >
                  <CDBIcon icon="clock" /> Expected Timeline{" "}
                  <span style={{ fontWeight: "bold" }}>1 week, 2 days</span>
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "50px",
                  }}
                >
                  {" "}
                  <span style={{ color: "rgb(50, 111, 228)" }}>21</span> Linked
                  Applications
                </span>
              </div>
              <div className="col-sm-3">
                <ButtonToolbar>
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={popoverTop}
                  >
                    <button
                      className="hover-container"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid white",
                        marginTop: "30px",
                      }}
                    >
                      <CDBIcon icon="ellipsis-h" />
                    </button>
                  </OverlayTrigger>
                </ButtonToolbar>
              </div>
            </div>
            <div
              className=""
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
                paddingBottom: "40px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",

                    marginLeft: "30px",
                    marginTop: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 1, Application Processing...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      5
                    </span>
                  </div>
                  <label className="flowbar-dot-left"></label>
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-right"></label>

                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 2, Client Review/Asse...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      2
                    </span>
                  </div>
                  <label className="flowbar-dot-left"></label>
                  <div>
                    <label className="left-bar"></label>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-right"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 3, Device Acquisition...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      3
                    </span>
                  </div>
                  <label className="flowbar-dot-left"></label>
                  <div>
                    <label className="right-bar"></label>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-right"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 4, Deployment & Hand...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      3
                    </span>
                  </div>
                  <label className="flowbar-dot-left"></label>
                  <div>
                    <label className="left-bar"></label>
                  </div>
                </div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-right"></label>

                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 5, Application Finale...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      2
                    </span>
                  </div>

                  <div>
                    <label className="right-bar"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              borderRadius: "5px",
              marginTop: "30px",
              marginLeft: "20px",
              marginRight: "10px",
            }}
          >
            <div
              className="row"
              style={{
                fontSize: "12px",
              }}
            >
              <div className="col-sm-9 text-center" style={{ padding: "20px" }}>
                <span
                  style={{
                    display: "block",
                    color: "rgb(50, 111, 228)",
                    fontWeight: "bold",
                  }}
                >
                  Device Acquisition Workflow
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "55px",
                  }}
                >
                  3 Stages / 26 Steps
                </span>
                <span
                  style={{ display: "block", color: "rgba(68, 70, 84, 0.6)" }}
                >
                  <CDBIcon icon="clock" /> Expected Timeline{" "}
                  <span style={{ fontWeight: "bold" }}>1 week, 2 days</span>
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "50px",
                  }}
                >
                  {" "}
                  <span style={{ color: "rgb(50, 111, 228)" }}>21</span> Linked
                  Applications
                </span>
              </div>
              <div className="col-sm-3">
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
                        marginTop: "30px",
                      }}
                    >
                      <CDBIcon icon="ellipsis-h" />
                    </button>
                  </OverlayTrigger>
                </ButtonToolbar>
              </div>
            </div>
            <div
              className=""
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
                height: "300px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginLeft: "30px",
                    marginTop: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-left"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 1, Application Processing...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      5
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-left"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 2, Client Review/Asse...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      2
                    </span>
                  </div>
                  <label className="flowbar-dot-right"></label>
                  <div>
                    <label className="left-bar"></label>
                  </div>
                </div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 3, Device Acquisition...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      3
                    </span>
                  </div>
                  <label className="flowbar-dot-right"></label>
                  <div>
                    <label className="right-bar"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              borderRadius: "5px",
              marginTop: "30px",
              marginRight: "20px",
            }}
          >
            <div
              className="row"
              style={{
                fontSize: "12px",
              }}
            >
              <div className="col-sm-9 text-center" style={{ padding: "20px" }}>
                <span
                  style={{
                    display: "block",
                    color: "rgb(50, 111, 228)",
                    fontWeight: "bold",
                  }}
                >
                  Device Acquisition Workflow
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "55px",
                  }}
                >
                  4 Stages / 26 Steps
                </span>
                <span
                  style={{ display: "block", color: "rgba(68, 70, 84, 0.6)" }}
                >
                  <CDBIcon icon="clock" /> Expected Timeline{" "}
                  <span style={{ fontWeight: "bold" }}>1 week, 2 days</span>
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "50px",
                  }}
                >
                  {" "}
                  <span style={{ color: "rgb(50, 111, 228)" }}>21</span> Linked
                  Applications
                </span>
              </div>
              <div className="col-sm-3">
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
                        marginTop: "30px",
                      }}
                    >
                      <CDBIcon icon="ellipsis-h" />
                    </button>
                  </OverlayTrigger>
                </ButtonToolbar>
              </div>
            </div>
            <div
              className=""
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
                height: "300px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginLeft: "30px",
                    marginTop: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-left"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 1, Application Processing...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      5
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-left"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 2, Client Review/Asse...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      2
                    </span>
                  </div>
                  <label className="flowbar-dot-right"></label>
                  <div>
                    <label className="left-bar"></label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "8px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                  position: "relative",
                }}
              >
                <label className="flowbar-dot-left"></label>
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 3, Device Acquisition...
                  </span>{" "}
                  <span
                    className="badge badge-light"
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(208, 213, 217)",
                    }}
                  >
                    3
                  </span>
                </div>
                <label className="flowbar-dot-right"></label>
                <div>
                  <label className="right-bar"></label>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "8px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                  position: "relative",
                }}
              >
                <label className="flowbar-dot-left"></label>
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 4, Deployment & Hand...
                  </span>{" "}
                  <span
                    className="badge badge-light"
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(208, 213, 217)",
                    }}
                  >
                    2
                  </span>
                </div>
                <div>
                  <label className="left-bar"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-4"
          style={{ marginBottom: "30px", marginLeft: "30px" }}
        >
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              borderRadius: "5px",
              marginTop: "30px",
            }}
          >
            <div
              className="row"
              style={{
                fontSize: "12px",
              }}
            >
              <div className="col-sm-9 text-center" style={{ padding: "20px" }}>
                <span
                  style={{
                    display: "block",
                    color: "rgb(50, 111, 228)",
                    fontWeight: "bold",
                  }}
                >
                  Device Acquisition Workflow
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "55px",
                  }}
                >
                  5 Stages / 26 Steps
                </span>
                <span
                  style={{ display: "block", color: "rgba(68, 70, 84, 0.6)" }}
                >
                  <CDBIcon icon="clock" /> Expected Timeline{" "}
                  <span style={{ fontWeight: "bold" }}>1 week, 2 days</span>
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(68, 70, 84, 0.6)",
                    marginRight: "50px",
                  }}
                >
                  {" "}
                  <span style={{ color: "rgb(50, 111, 228)" }}>21</span> Linked
                  Applications
                </span>
              </div>
              <div className="col-sm-3">
                <div className="mb-2">
                  <button
                    onClick={handleDeleteButton}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid white",
                      marginTop: "30px",
                      marginLeft: "15px",
                    }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
                paddingBottom: "30px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginLeft: "30px",
                    marginTop: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-left"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 1, Application Processing...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      3
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid rgb(175, 177, 199)",
                    width: "80%",
                    display: "block",
                    marginTop: "8px",
                    marginLeft: "30px",
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "relative",
                  }}
                >
                  <label className="flowbar-dot-left"></label>
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "12px" }}
                  >
                    <CDBIcon icon="ellipsis-h" />
                    <span style={{ fontSize: "10px" }}>
                      {" "}
                      Stage 2, Client Review/Asse...
                    </span>{" "}
                    <span
                      className="badge badge-light"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(208, 213, 217)",
                      }}
                    >
                      3
                    </span>
                  </div>
                  <label className="flowbar-dot-right"></label>
                  <div>
                    <label className="left-bar"></label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "8px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                  position: "relative",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 3, Device Acquisition...
                  </span>{" "}
                  <span
                    className="badge badge-light"
                    style={{
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(208, 213, 217)",
                    }}
                  >
                    2
                  </span>
                </div>
                <label className="flowbar-dot-right"></label>
                <div>
                  <label className="right-bar"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
