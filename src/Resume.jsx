import React from "react";
import image from "./Assests/myimage.JPG";

const Resume = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3  info">
            <div>
              <img
                src={image}
                alt=""
                className="mt-4 mb-4 img"
                style={{ height: 200, width: 200 }}
              />
            </div>
            <div>
              <h5>CONTACT :</h5>
            </div>
            <div>
              <p><b>EMAIL :</b> pritamzope72@gmail.com</p>
              <p><b>MOBILE :</b> 8888667432</p>
              <p><b>ADDRESS :</b> Pune , Maharashtra</p>
              <p><b>LINKEDIN :</b><a href="https://www.linkedin.com/in/pritam-zope-42bb85239/">https://www.linkedin.com/in/pritam-zope-42bb85239/</a></p>
              <p><b>GITHUB :</b><a href="https://github.com/pritamzope72">https://github.com/pritamzope72</a></p>
            </div>
            <div>
              <h5>TECHNICAL SKILLS :</h5>
            </div>
            <div>
              <ul>
                <li><b>Java</b></li>
                <li><b>SQL</b></li>
                <li>
                  <b>WEB-TECH</b>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                </li>
                <li>
                  <b>Frontend development Framework</b>
                  <ul>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h5>SOFT SKILLS :</h5>
            </div>
            <div>
              <ul>
                <li>Communication</li>
                <li>Team player</li>
                <li>Attention to detailing</li>
                <li>Problem solving</li>
                <li>Adaptibility</li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-5 name border border-dark p-4">
            <div>
              <h1 className="main">PRITAM ZOPE</h1>
              <p className="text-decoration-underline">FULLSTACK DEVELOPER</p>
              <h5>OBJECTIVE:</h5>
              <p>
                “Self-Motivated and result-oriented Software Developer with
                expertise in designing responsive web applications and frontend 
                development, seeking growth opportunity in an organization of 
                repute using the skills and knowledge possessed for 
                organizational and self-development.”
              </p>
              <h5>PROJECTS :</h5>
              <p className="text-decoration-underline"><b>Project : 1</b></p>
              <p><b>Project Name :</b> Contact Management System</p>
              <p><b>Duration :</b> 15 days</p>
              <p>
                <b>Technologies used :</b>
                <ul>
                  <li><b>Frontend :</b> Reactjs , Bootstrap</li>
                  <li>
                    <b>Backend :</b> JSON Server,with a db.json file as the database
                  </li>
                  <li><b>API communication :</b> Axios</li>
                  <li><b>State Management : </b>React Hooks</li>
                  <li><b>Routing :</b> React Router</li>
                </ul>
              </p>
              <p><b>objective :</b></p>
              <p>
                “ Designed and implemented a robust Contact 
                  Management System web application, showcasing 
                  proficiency in full-stack development with a focus on the 
                  frontend using React.js.The application allows users to 
                  manage their contacts efficiently, providing features such as 
                  adding, editing, viewing and deleting contact details.”
              </p>
              <p className="text-decoration-underline"><b>Project : 2</b></p>
              <p><b>Project Name : -</b> Github User Info card</p>
              <p><b>Duration :</b> 2 days</p>
              <p>
                <b>Technologies used :</b>
                <ul>
                  <li><b>Frontend</b> : Reactjs , Tailwind css</li>
                  <li><b>API communication</b> : Axios</li>
                  <li><b>State Management</b> : Fetch API , Github API</li>
                  <li><b>Authentication</b> : Firebase</li>
                  <li><b>Deployment</b> : Netlify</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
