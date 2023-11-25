import { CDBIcon } from "cdbreact";

export const Dashboard = ({ isSidebarOpen }) => {
  return (
    <div
      style={{
        flex: "1",
        transition: "margin-left 0.3s",
        marginLeft: isSidebarOpen ? "270px" : "83px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          height: "115px",
          border: "1px solid rgb(205, 206, 220)",
          borderRight: "none",
        }}
      >
        <div>
          <div className="d-flex align-items-center  justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="signal"></CDBIcon> Dashboard
            </span>

            <button
              style={{ marginRight: "25px", marginTop: "25px" }}
              className="btn btn-primary"
            >
              Reporst
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
            Summary Report View
          </span>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-6"
          style={{
            border: "1px solid rgb(205, 206, 220)",
            height: "170px",
            marginTop: "50px",
            borderRadius: "5px",
            width: "450px",
            marginLeft: "40px",
            backgroundColor: "rgb(247, 248, 254)",
          }}
        ></div>
        <div
          className="col-sm-6"
          style={{
            height: "170px",
            marginTop: "50px",
            borderRadius: "5px",
            width: "450px",
            marginLeft: "20px",
            backgroundColor: "rgb(50, 111, 228)",
          }}
        ></div>
      </div>
      <div className="row">
        <div
          className="col-sm-6"
          style={{
            border: "1px solid rgb(205, 206, 220)",
            height: "300px",
            marginTop: "20px",
          }}
        ></div>
        <div
          className="col-sm-6"
          style={{
            border: "1px solid rgb(205, 206, 220)",
            height: "300px",
            marginTop: "20px",
          }}
        ></div>
        <div
          style={{
            border: "1px solid rgb(205, 206, 220)",
            height: "500px",
          }}
        ></div>
      </div>
    </div>
  );
};
