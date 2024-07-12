import { CDBIcon } from "cdbreact";
import "../App.css";
import React from "react";
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import Form from "react-bootstrap/Form";

export const Dashboard = ({ isSidebarOpen }) => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];

  const data2 = [
    { name: "Completed", value: 4000 },
    { name: "In Progress", value: 3000 },
    { name: "To Do", value: 2000 },
    { name: "Paused", value: 2780 },
  ];

  const data3 = [
    { name: "Completed", value: 80 },
    { name: "pending", value: 180 },
  ];

  const barData = [
    { name: "Jan", complete: 40, in_progress: 30, pause: 12, "to do": 20 },
    { name: "Feb", complete: 3, in_progress: 2, pause: 17, "to do": 12 },
    { name: "Mar", complete: 25, in_progress: 6, pause: 35, "to do": 8 },
    { name: "Apr", complete: 43, in_progress: 20, pause: 34, "to do": 34 },
    { name: "May", complete: 47, in_progress: 14, pause: 16, "to do": 35 },
    { name: "Jun", complete: 5, in_progress: 0, pause: 10, "to do": 33 },
    { name: "Jul", complete: 59, in_progress: 2, pause: 32, "to do": 7 },
    { name: "Agu", complete: 53, in_progress: 38, pause: 20, "to do": 28 },
    { name: "Sep", complete: 24, in_progress: 11, pause: 14, "to do": 28 },
    { name: "Oct", complete: 28, in_progress: 13, pause: 1, "to do": 10 },
    { name: "Nov", complete: 10, in_progress: 33, pause: 9, "to do": 20 },
  ];

  const barData2 = [
    {
      name: "Device Acquisition",
      complete: 24,
      in_progress: 16,
      pause: 19,
      "to do": 29,
    },
    {
      name: "Metre Distribution",
      complete: 19,
      in_progress: 15,
      pause: 27,
      "to do": 16,
    },
    {
      name: "Distribution Certification",
      complete: 49,
      in_progress: 10,
      pause: 3,
      "to do": 18,
    },
    {
      name: "Permit Renewal",
      complete: 18,
      in_progress: 5,
      pause: 6,
      "to do": 6,
    },
  ];

  const COLORS = ["#ffffff", "#0088FE"];

  const COLORS2 = [
    "rgb(89, 217, 115)",
    "rgb(50, 111, 228)",
    "rgb(208, 213, 217)",
    "rgb(151, 163, 172)",
  ];

  const COLORS3 = ["rgb(89, 217, 115)", "rgb(208, 213, 217)"];

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
          height: "115px",
          border: "1px solid rgb(205, 206, 220)",
          borderRight: "none",
        }}
      >
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <span style={{ marginLeft: "25px", marginTop: "25px" }}>
              <CDBIcon icon="signal"></CDBIcon> Dashboard
            </span>

            <button
              style={{ marginRight: "25px", marginTop: "25px" }}
              className="btn btn-primary"
            >
              Reports
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
        <div className="col-md-6">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginTop: "50px",
              borderRadius: "5px",
              backgroundColor: "rgb(247, 248, 254)",
              padding: "20px",
              marginLeft: "12px",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: "15px" }}
            >
              <div>
                <span
                  style={{
                    marginLeft: "20px",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  36
                </span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "15px" }}>
                  Completed
                </span>
                <span
                  style={{
                    marginLeft: "50px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  12
                </span>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: "20px" }}
            >
              <div style={{ marginLeft: "20px", fontSize: "12px" }}>
                Total Applications
              </div>
              <div>
                <span style={{ display: "block", fontSize: "15px" }}>
                  Pending
                </span>
                <span
                  style={{
                    marginLeft: "38px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  24
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            style={{
              marginTop: "50px",
              borderRadius: "5px",
              backgroundColor: "rgb(50, 111, 228)",
              color: "white",
              padding: "10px",
            }}
          >
            <div className="d-flex justify-content-around">
              <div style={{ marginTop: "30px" }}>
                <span style={{ display: "block", fontSize: "12px" }}>
                  Overdue
                </span>
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  Applications
                </span>
              </div>
              <div>
                <PieChart width={200} height={200}>
                  <Pie
                    isAnimationActive={false}
                    data={data}
                    innerRadius={40}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginTop: "20px",
            }}
          >
            <div
              className="d-flex justify-content-around"
              style={{ padding: "15px" }}
            >
              <div style={{ marginTop: "30px", marginLeft: "20px" }}>
                <span
                  style={{ display: "block", fontSize: "12px", opacity: "0.8" }}
                >
                  Distribution by
                </span>
                <span style={{ fontWeight: "bolder" }}>Application Status</span>
              </div>
              <div style={{ marginTop: "50px" }}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={data2}
                    innerRadius={80}
                    outerRadius={100}
                    dataKey="value"
                    paddingAngle={1}
                  >
                    {data2.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS2[index % COLORS2.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
              <div style={{ marginTop: "50px" }}>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  <li>
                    <span
                      style={{
                        color: "rgb(89, 217, 115)",
                        fontSize: "30px",
                        marginRight: "5px",
                      }}
                    >
                      ●
                    </span>
                    Completed
                  </li>
                  <li>
                    <span
                      style={{
                        color: "rgb(50, 111, 228)",
                        fontSize: "30px",
                        marginRight: "5px",
                      }}
                    >
                      ●
                    </span>
                    In Progress
                  </li>
                  <li>
                    <span
                      style={{
                        color: "rgb(208, 213, 217)",
                        fontSize: "30px",
                        marginRight: "5px",
                      }}
                    >
                      ●
                    </span>
                    To Do
                  </li>
                  <li>
                    <span
                      style={{
                        color: "rgb(151, 163, 172)",
                        fontSize: "30px",
                        marginRight: "5px",
                      }}
                    >
                      ●
                    </span>
                    Paused
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginTop: "20px",
              height: "250px",
            }}
          >
            <div className="d-flex justify-content-around">
              <div style={{ marginTop: "30px", marginLeft: "20px" }}>
                <span
                  style={{ display: "block", fontSize: "12px", opacity: "0.8" }}
                >
                  Tasks
                </span>
                <span style={{ fontWeight: "bolder" }}>Completion Rate</span>
              </div>
              <div style={{ marginTop: "50px" }}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={data3}
                    innerRadius={70}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {data3.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS3[index % COLORS3.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
              <div style={{ marginTop: "50px" }}>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  <li>
                    <span
                      style={{
                        color: "rgb(89, 217, 115)",
                        fontSize: "30px",
                        marginRight: "5px",
                      }}
                    >
                      ●
                    </span>
                    Completed
                  </li>
                  <li>
                    <span
                      style={{
                        color: "rgb(208, 213, 217)",
                        fontSize: "30px",
                        marginRight: "5px",
                      }}
                    >
                      ●
                    </span>
                    Pending
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginTop: "20px",
              height: "300px",
            }}
          >
            <div style={{ marginTop: "10px", padding: "10px" }}>
              <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                Monthly Report
              </span>
              <BarChart
                width={400}
                height={230}
                data={barData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="complete" stackId="a" fill="rgb(89, 217, 115)" />
                <Bar
                  dataKey="in_progress"
                  stackId="a"
                  fill="rgb(50, 111, 228)"
                />
                <Bar dataKey="pause" stackId="a" fill="rgb(151, 163, 172)" />
                <Bar dataKey="to do" stackId="a" fill="rgb(208, 213, 217)" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginTop: "20px",
              height: "300px",
            }}
          >
            <div style={{ marginTop: "10px", padding: "10px" }}>
              <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                Current Status
              </span>
              <BarChart
                width={400}
                height={230}
                data={barData2}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="complete" stackId="a" fill="rgb(89, 217, 115)" />
                <Bar
                  dataKey="in_progress"
                  stackId="a"
                  fill="rgb(50, 111, 228)"
                />
                <Bar dataKey="pause" stackId="a" fill="rgb(151, 163, 172)" />
                <Bar dataKey="to do" stackId="a" fill="rgb(208, 213, 217)" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <div className="d-flex justify-content-between">
              <span
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginLeft: "15px",
                }}
              >
                Task Performance Report
              </span>
              <Form.Select style={{ width: "200px", height: "30px" }}>
                <option>View Report</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            style={{
              border: "1px solid rgb(205, 206, 220)",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <div className="d-flex justify-content-between">
              <span
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginLeft: "15px",
                }}
              >
                Device Performance Report
              </span>
              <Form.Select style={{ width: "200px", height: "30px" }}>
                <option>View Report</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
