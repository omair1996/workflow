import { CDBIcon } from "cdbreact";
import React, { useState } from "react";
import "../App.css";

const UserManagement = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

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
    <div style={{ flex: "1", fontFamily: "sans-serif" }}>
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
      {isFormVisible && (
        <div
          className="create-user"
          style={{
            width: "850px",
            zIndex: "1000px",
          }}
        >
          <form>
            <div className="container">
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginLeft: "30px",
                    marginTop: "20px",
                  }}
                >
                  {" "}
                  <CDBIcon icon="users" />
                  New User
                </div>
                <div className="d-flex justify-content-center mb-4">
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
              </div>

              <div className="row">
                <div className="col-sm-6" style={{ marginTop: "15px" }}>
                  <label
                    for="exampleInputText"
                    style={{
                      fontSize: "0.9em",
                      fontWeight: "700",
                      opacity: "0.8",
                    }}
                  >
                    Frist Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText"
                    placeholder="Frist Name"
                  />
                </div>
                <div className="col-sm-6" style={{ marginTop: "15px" }}>
                  <label
                    for="exampleInputText"
                    style={{
                      fontSize: "0.9em",
                      fontWeight: "700",
                      opacity: "0.8",
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-sm-6" style={{ marginTop: "15px" }}>
                  <label
                    for="exampleInputEmail"
                    style={{
                      fontSize: "0.9em",
                      fontWeight: "700",
                      opacity: "0.8",
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
                </div>
                <div className="col-sm-6" style={{ marginTop: "15px" }}>
                  <label
                    for="exampleInputText"
                    style={{
                      fontSize: "0.9em",
                      fontWeight: "700",
                      opacity: "0.8",
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
                </div>
                <div className="col-sm-6" style={{ marginTop: "15px" }}>
                  <label
                    for="exampleInputText"
                    style={{
                      fontSize: "0.9em",
                      fontWeight: "700",
                      opacity: "0.8",
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
                </div>
              </div>
              <hr style={{ marginTop: "30px" }} />
              <div className="row">
                <div className="col-sm-6">
                  <label
                    for="exampleInputEmail"
                    style={{
                      fontSize: "0.9em",
                      fontWeight: "700",
                      opacity: "0.8",
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
                </div>
                <div className="col-sm-6" style={{ marginTop: "15px" }}>
                  <div>
                    <input type="checkbox" />{" "}
                    <label
                      for="exampleInputEmail"
                      style={{
                        fontSize: "0.9em",
                        fontWeight: "700",
                        opacity: "0.8",
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
                        fontSize: "0.9em",
                        fontWeight: "700",
                        opacity: "0.8",
                      }}
                    >
                      Force change of password on first login
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{
                border: "1px solid gery",
                backgroundColor: "rgba(151, 163, 172, 0.1)",
                height: "70px",
                marginTop: "20px",
              }}
            >
              <button
                className="btn btn-light"
                type="button"
                onClick={handleButtonClick}
              >
                Close
              </button>
              <button className="btn btn-primary">save user</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default UserManagement;
