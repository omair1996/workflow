import { CDBIcon } from "cdbreact";

function WorkFlow() {
  return (
    <div style={{ flex: "1" }}>
      <div style={{ height: "115px", border: "1px solid rgb(205, 206, 220)" }}>
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="chart-line" /> workflow configurations
            </span>

            <button
              style={{ marginRight: "25px", marginTop: "30px" }}
              className="btn btn-primary"
            >
              Create Workflow
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
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default WorkFlow;
