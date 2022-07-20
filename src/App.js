import { ProjectContext } from "./Context/ProjectContext";
import Country from "./Country";
import "./styles.css";

export default function App() {
  return (
    <ProjectContext>
      <div className="App">
        <Country />
      </div>
    </ProjectContext>
  );
}
