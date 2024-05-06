import React,{useEffect, useState} from "react";
import '../assets/css/style.css';
import { FiAlignJustify } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoLogoFreebsdDevil } from "react-icons/io";



const Dasboard = ()=> {

    const [loginTime, setLoginTime] = useState('');
    const [loginDevice, setLoginDevice] = useState('');
  

    useEffect(() => {

        // Retrieve login time and login device from localStorage
    const storedLoginTime = localStorage.getItem('loginTime');
    const storedLoginDevice = localStorage.getItem('loginDevice');
    
    // Update state with stored values
    setLoginTime(storedLoginTime);
    setLoginDevice(storedLoginDevice);

        let list = document.querySelectorAll(".navigation li");

        function activeLink() {
            list.forEach((item) => {
                item.classList.remove("hovered");
            });
            this.classList.add("hovered");
        }

        list.forEach((item) => item.addEventListener("mouseover", activeLink));

        // Menu Toggle
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");

        const toggleMenu = () => {
            navigation.classList.toggle("active");
            main.classList.toggle("active");
        };

        toggle.onclick = toggleMenu;

        // Cleanup function to remove event listeners
        return () => {
            list.forEach((item) => item.removeEventListener("mouseover", activeLink));
            toggle.removeEventListener("click", toggleMenu);
        };
    }, []);
    const handleLogout = () => {
        // Clear login time and login device from localStorage
        localStorage.removeItem('loginTime');
        localStorage.removeItem('loginDevice');
        
        // // Set isLoggedIn to false
        // setIsLoggedIn(false);
      };
    
    
    return (
        <div>
            
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Dashboard</title>
          {/* ======= Styles ====== */}
          <link rel="stylesheet" href="assets/css/style.css" />
          {/* =============== Navigation ================ */}
          <div className="container">
            <div className="navigation">
                
              <ul>
                <li>
                  <a href="#">
                    <span className="icon">
                    <IoLogoFreebsdDevil />
                    </span>
                    <span className="title">Mobilicis India PVT</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                    <MdSpaceDashboard />
                    </span>
                    <span className="title">Dashboard</span>
                  </a>
                </li>
                
                <li>
                  <a href="#">
                    <span className="icon">
                    <FaHandsHelping />
                    </span>
                    <span className="title">Help</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                    <MdOutlineSettings />
                    </span>
                    <span className="title">Settings</span>
                  </a>
                </li>
                
                <li>
                  <a href="#">
                    <span className="icon">
                    <FaSignOutAlt />
                    </span>
                    <span className="title">Sign Out</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* ========================= Main ==================== */}
            <div className="main">
              <div className="topbar">
                <div className="toggle">
                  <FiAlignJustify />
                </div>
                <div className="search">
                  <label>
                    <input type="text" placeholder="Search here" />
                    <ion-icon name="search-outline" />
                  </label>
                </div>
                <div className="user">
                  <img src="assets/imgs/customer01.jpg" alt="" />
                </div>
              </div>
              {/* ======================= Cards ================== */}
              <div className="cardBox">
                <div className="card">
                  <div>
                    <div className="numbers">2hr</div>
                    <div className="cardName">Total Hours</div>
                  </div>
                  <div className="iconBx">
                    <ion-icon name="eye-outline" />
                  </div>
                </div>
                <div className="card">
                  <div>
                    <div className="numbers">8</div>
                    <div className="cardName">Total login</div>
                  </div>
                  <div className="iconBx">
                    <ion-icon name="cart-outline" />
                  </div>
                </div>
                <div className="card">
                  <div>
                    <div className="numbers">{loginDevice}</div>
                    <div className="cardName">Devies</div>
                  </div>
                  <div className="iconBx">
                    <ion-icon name="chatbubbles-outline" />
                  </div>
                </div>
                <div className="card">
                  <div>
                    <div className="numbers">online</div>
                    <div className="cardName">Status</div>
                  </div>
                  <div className="iconBx">
                    <ion-icon name="cash-outline" />
                  </div>
                </div>
              </div>
              {/* ================ Order Details List ================= */}
              <div className="details">
                <div className="recentOrders">
                  <div className="cardHeader">
                    <h2>Login history</h2>
                    <a href="#" className="btn">View All</a>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <td>Login Time</td>
                        <td>Logout Time</td>
                        <td>Duration</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> {loginTime}</td>
                        <td>9:30Am-4-05-2024</td>
                        <td>30mins</td>
                        <td><span className="status return">offline</span></td>
                      </tr>
                      <tr>
                        <td> {loginTime}</td>
                        <td>9:56Am-4-05-2024</td>
                        <td>26mins</td>
                        <td><span className="status return">offline</span></td>
                      </tr>
                      <tr>
                        <td>9:590Am-4-05-2024</td>
                        <td>10:00Am-4-05-2024</td>
                        <td>1mins</td>
                        <td><span className="status return">offline</span></td>
                      </tr>
                      <tr>
                        <td>10:00Am-4-05-2024</td>
                        <td>11:02Am-4-05-2024</td>
                        <td>1hr-2min</td>
                        <td><span className="status return">offline</span></td>
                      </tr>
                      <tr>
                        <td>11:08Am-4-05-2024</td>
                        <td>11:10Am-4-05-2024</td>
                        <td>6mins</td>
                        <td><span className="status return">offline</span></td>
                      </tr>
                      <tr>
                        <td>11:10Am-4-05-2024</td>
                        <td>11:32Am-4-05-2024</td>
                        <td>22mins</td>
                        <td><span className="status return">offline</span></td>
                      </tr>
                      <tr>
                        <td>11:32Am-4-05-2024</td>
                        <td>12:08pm-4-05-2024</td>
                        <td>30mins</td>
                        <td><span className="status return">offline</span></td>
                      </tr>
                      <tr>
                        <td>12:08pm-4-05-2024</td>
                        <td>01:36pm-4-05-2024</td>
                        <td>88mins</td>
                        <td><span className="status inProgress">online</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* ================= New Customers ================ */}
                <div className="recentCustomers">
                  <div className="cardHeader">
                    <h2>Recent Login Devies</h2>
                  </div>
                  <table>
                    <tbody><tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>login at <br /> <span>India</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>logout at<br /> <span>India</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>login at<br /> <span>India</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>logout at <br /> <span>India</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>login at <br /> <span>India</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>login <br /> <span>India</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer01.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>login at <br /> <span>India</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td width="60px">
                          <div className="imgBx"><img src="assets/imgs/customer02.jpg" alt="" /></div>
                        </td>
                        <td>
                          <h4>logout at <br /> <span>India</span></h4>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
          {/* =========== Scripts =========  */}
          {/* ====== ionicons ======= */}
        </div>
      )
}
export default Dasboard;