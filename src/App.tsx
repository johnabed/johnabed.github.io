import React from 'react';
import { Box, Card } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Card className="card" elevation={5}>
        <div>
          <div className="top-section">
            <div className="name">John Abed</div>
          </div>

          <div className="info-section">
            <h2>
              about
              <div className="border"></div>
            </h2>
            <p>Full-stack Software Developer</p>
            <div className="s-m">
              <span>
                {" "}
                <span className="fas fa-map-marker-alt"></span> Toronto, Ontario,
                Canada{" "}
              </span>
            </div>
            <h2>
              education
              <div className="border"></div>
            </h2>
            <p>
              B.A. Honours Business Administration & B.Sc. Honours Computer
              Science.
            </p>
            <h2>
              connect
              <div className="border"></div>
            </h2>
            <div className="s-m">
              <a
                href="mailto:jabed.hba2019@ivey.ca"
                target="_blank"
                className="fas fa-envelope" rel="noreferrer"
                aria-label='email'
              ></a>
              <a
                href="https://www.linkedin.com/in/johnabed/"
                target="_blank"
                className="fab fa-linkedin" rel="noreferrer"
                aria-label='linkedin'
              ></a>
              <a
                href="https://github.com/johnabed"
                target="_blank"
                className="fab fa-github" rel="noreferrer"
                aria-label='github'
              ></a>
              <a
                href="https://www.facebook.com/johnaabed"
                target="_blank"
                className="fab fa-facebook" rel="noreferrer"
                aria-label='facebook'
              ></a>
              <a
                href="https://www.instagram.com/johnabed/"
                target="_blank"
                className="fab fa-instagram" rel="noreferrer"
                aria-label='instagram'
              ></a>
            </div>
            <h2>
              media
              <div className="border"></div>
            </h2>
            <div className="s-m">
              <a
                href="files/resume_johnabed.pdf"
                target="_blank"
                className="fas fa-file-alt"
              >
                {" "}
                <span>Resume</span>{" "}
              </a>
              <a href="gojohnnygo/" target="_blank" className="fas fa-gamepad">
                {" "}
                <span>Go Johnny Go!</span>{" "}
              </a>
            </div>
            <h2>
              projects
              <div className="border"></div>
            </h2>
            <div className="s-m">
              <a
                href="https://github.com/johnabed/task-manager-mean"
                target="_blank"
                className="fas fa-edit" rel="noreferrer"
                aria-label='task-manager-mean'
              ></a>
              <a
                href="https://github.com/johnabed/Fitbyte"
                target="_blank"
                className="fas fa-running" rel="noreferrer"
                aria-label='fitbyte'
              ></a>
              <a
                href="https://github.com/johnabed/Ambience"
                target="_blank"
                className="fas fa-lightbulb" rel="noreferrer"
                aria-label='ambience'
              ></a>
              <a
                href="https://github.com/johnabed/gojohnnygo"
                target="_blank"
                className="fas fa-gamepad" rel="noreferrer"
                aria-label='gojohnnygo'
              ></a>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
}

export default App;
