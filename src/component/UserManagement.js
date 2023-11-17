import { CDBIcon } from "cdbreact";
import React, { useState } from "react";

const UserManagement = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <div style={{ flex: "1" }}>
      <div style={{ border: "1px solid rgb(205, 206, 220)" }}>
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="users" /> User Management
            </span>
            <div>
              <button
                onClick={handleButtonClick}
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
      <div className="container">
        {isFormVisible && (
          <div className="form ">
            <form>
              <label>
                Name:
                <input type="text" />
              </label>

              <button type="button" onClick={handleButtonClick}>
                Close
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserManagement;
