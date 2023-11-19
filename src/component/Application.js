import { CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

function Application() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
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
                onClick={handleButtonClick}
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
                <MDBDropdown group className="shadow-0">
                  <MDBDropdownToggle
                    color="light"
                    style={{
                      height: "35px",
                      border: "1px solid rgb(205, 206, 220",
                    }}
                  ></MDBDropdownToggle>
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

                  <MDBDropdownMenu>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
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
                  className="split-element-40 text-center"
                  style={{ fontSize: "12px", color: "white" }}
                >
                  {" "}
                  41%
                </div>
              </td>
              <td style={{ fontSize: "12px", fontWeight: "bold" }}>Muyiwa</td>
            </tr>
            <tr>
              <th scope="row">
                <MDBDropdown group className="shadow-0">
                  <MDBDropdownToggle
                    color="light"
                    style={{
                      height: "35px",
                      border: "1px solid rgb(205, 206, 220",
                    }}
                  ></MDBDropdownToggle>
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

                  <MDBDropdownMenu>
                    <MDBDropdownItem></MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
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
            <tr>
              <th scope="row">
                <MDBDropdown group className="shadow-0">
                  <MDBDropdownToggle
                    color="light"
                    style={{
                      height: "35px",
                      border: "1px solid rgb(205, 206, 220",
                    }}
                  ></MDBDropdownToggle>
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

                  <MDBDropdownMenu>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
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
          </tbody>
        </table>
      </div>

      {isFormVisible && (
        <div className="new-application container">
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <CDBIcon icon="table" />
            New Application
          </div>
          <hr />
          <p>Application & Client Details</p>
          <div className="row">
            <div className="col-sm-4">
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
            </div>
            <div className="col-sm-8">
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
                style={{ width: "86%" }}
                type="text"
                className="form-control"
                id="exampleInputText"
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-sm-3">
              <label
                for="exampleInputText"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Client Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputText"
              />
            </div>
            <div className="col-sm-3">
              <label
                for="exampleInputText"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Client Phone Number
              </label>
              <input
                type="Tel"
                className="form-control"
                id="exampleInputText"
              />
            </div>
            <div className="col-sm-5">
              <label
                for="exampleInputText"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Client Email
              </label>
              <input
                type="Email"
                className="form-control"
                id="exampleInputText"
              />
            </div>
            <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
            <div className="col-sm-4">
              <p>Application Assignee</p>
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
            </div>
            <div className="col-sm-4">
              <p>Start Date</p>
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
            </div>
          </div>

          <div className="row">
            <div
              className="col-sm-4"
              style={{
                border: "1px solid grey",
                marginTop: "30px",
                padding: "30px",
              }}
            >
              <p>Workflow Process</p>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Application;
