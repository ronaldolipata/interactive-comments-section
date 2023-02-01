import "./App.css";
import ContentEditor from "./components/ContentEditor";
import Card from "./components/Card";
import DummyAvatar from "./assets/images/avatars/image-juliusomo.webp";

function App() {
  return (
    <div className="App">
      <Card>
        <ContentEditor />
        <div className="contentContainer">
          <img className="avatar" src={DummyAvatar} />
          <button className="buttonPrimary">Send</button>
        </div>
      </Card>
    </div>
  );
}

export default App;
