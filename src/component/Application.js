import { CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";

function Application() {
  return (
    <div style={{ flex: "1", fontFamily: "Open Sans, sans-serif" }}>
      <div style={{ height: "115px", border: "1px solid rgb(205, 206, 220)" }}>
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="table"></CDBIcon> Applications
            </span>

            <button
              style={{ marginRight: "25px", marginTop: "30px" }}
              className="btn btn-primary"
            >
              Add New Application
            </button>
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
                <select
                  style={{
                    marginLeft: "25px",
                  }}
                ></select>{" "}
                <Link
                  style={{
                    color: "blue",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  {" "}
                  Application name
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Application;
