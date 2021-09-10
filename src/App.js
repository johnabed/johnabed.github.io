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
          <div class="top-section">
            <div class="name">John Abed</div>
          </div>

          <div class="info-section">
            <h2>
              about
              <div class="border"></div>
            </h2>
            <p>Full-stack Software Developer</p>
            <div class="s-m">
              <span>
                {" "}
                <span class="fas fa-map-marker-alt"></span> Toronto, Ontario,
                Canada{" "}
              </span>
            </div>
            <h2>
              education
              <div class="border"></div>
            </h2>
            <p>
              B.A. Honours Business Administration & B.Sc. Honours Computer
              Science.
            </p>
            <h2>
              connect
              <div class="border"></div>
            </h2>
            <div class="s-m">
              <a
                href="mailto:jabed.hba2019@ivey.ca"
                target="_blank"
                class="fas fa-envelope"
              ></a>
              <a
                href="https://www.linkedin.com/in/johnabed/"
                target="_blank"
                class="fab fa-linkedin"
              ></a>
              <a
                href="https://github.com/johnabed"
                target="_blank"
                class="fab fa-github"
              ></a>
              <a
                href="https://www.facebook.com/johnaabed"
                target="_blank"
                class="fab fa-facebook"
              ></a>
              <a
                href="https://www.instagram.com/johnabed/"
                target="_blank"
                class="fab fa-instagram"
              ></a>
            </div>
            <h2>
              media
              <div class="border"></div>
            </h2>
            <div class="s-m">
              <a
                href="files/resume_johnabed.pdf"
                target="_blank"
                class="fas fa-file-alt"
              >
                {" "}
                <span>Resume</span>{" "}
              </a>
              <a href="gojohnnygo/" target="_blank" class="fas fa-gamepad">
                {" "}
                <span>Go Johnny Go!</span>{" "}
              </a>
            </div>
            <h2>
              projects
              <div class="border"></div>
            </h2>
            <div class="s-m">
              <a
                href="https://github.com/johnabed/task-manager-mean"
                target="_blank"
                class="fas fa-edit"
              ></a>
              <a
                href="https://github.com/johnabed/Fitbyte"
                target="_blank"
                class="fas fa-running"
              ></a>
              <a
                href="https://github.com/johnabed/Ambience"
                target="_blank"
                class="fas fa-lightbulb"
              ></a>
              <a
                href="https://github.com/johnabed/gojohnnygo"
                target="_blank"
                class="fas fa-gamepad"
              ></a>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
}

export default App;
