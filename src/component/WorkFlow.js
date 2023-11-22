import { CDBIcon } from "cdbreact";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap/Dropdown";

function WorkFlow() {
  const [deleteButton, setDaleteButton] = useState(false);

  const handleDeleteButton = () => {
    setDaleteButton(!deleteButton);
  };
  return (
    <div style={{ flex: "1", fontFamily: "Open Sans, sans-serif" }}>
      <div style={{ height: "115px", border: "1px solid rgb(205, 206, 220)" }}>
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
        </div>
      </div>
      <div style={{ border: "1px solid rgb(205, 206, 220)" }}>
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
              width: "30%",
              paddingRight: "px",
              marginBottom: "20px",
            }}
          />
        </div>
      </div>

      <div className="row container">
        <div className="col-sm-4">
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
              className=""
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginLeft: "30px",
                  marginTop: "10px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">5</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 2, Client Review/Asse...
                  </span>{" "}
                  <span className="badge badge-light">2</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">3</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 4, Deployment & Hand...
                  </span>{" "}
                  <span className="badge badge-light">3</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 5, Application Finale...
                  </span>{" "}
                  <span className="badge badge-light">2</span>
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
              className=""
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
                height: "320px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginLeft: "30px",
                  marginTop: "10px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">5</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 2, Client Review/Asse...
                  </span>{" "}
                  <span className="badge badge-light">2</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">3</span>
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
              className=""
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
                height: "320px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginLeft: "30px",
                  marginTop: "10px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">5</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 2, Client Review/Asse...
                  </span>{" "}
                  <span className="badge badge-light">2</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">3</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 4, Deployment & Hand...
                  </span>{" "}
                  <span className="badge badge-light">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4" style={{ marginBottom: "30px" }}>
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
              className=""
              style={{
                backgroundColor: "rgb(247, 248, 254)",
                padding: "15px",
              }}
            >
              <div style={{ display: "block", height: "1px" }}></div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginLeft: "30px",
                  marginTop: "10px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">3</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "12px" }}
                >
                  <CDBIcon icon="ellipsis-h" />
                  <span style={{ fontSize: "10px" }}>
                    {" "}
                    Stage 2, Client Review/Asse...
                  </span>{" "}
                  <span className="badge badge-light">3</span>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  border: "1px solid rgb(175, 177, 199)",
                  width: "80%",
                  display: "block",
                  marginTop: "20px",
                  marginLeft: "30px",
                  backgroundColor: "rgb(255, 255, 255)",
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
                  <span className="badge badge-light">2</span>
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
