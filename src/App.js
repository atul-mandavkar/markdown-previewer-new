import Wrapper from "./components/Wrapper";
import EdittorContainer from "./components/EdittorContainer";
import PreviewContainer from "./components/PreviewContainer";
import BoardTaskbar from "./components/BoardTaskbar";
import TaskbarChildren from "./components/TakbarChildren";

const App = () => {
  return (
    <Wrapper>
      <EdittorContainer>
        <BoardTaskbar>
          <TaskbarChildren id="headingEdittor">
            <b>Edittor</b>
          </TaskbarChildren>
          <TaskbarChildren id="iconsContainerEdittor">
            icons
          </TaskbarChildren>
        </BoardTaskbar>
      </EdittorContainer>
      <PreviewContainer>
        <BoardTaskbar>
        <TaskbarChildren id="headingPreview">
            <b>Preview</b>
          </TaskbarChildren>
          <TaskbarChildren id="iconsContainerPreview">
            icons
          </TaskbarChildren>
        </BoardTaskbar>
      </PreviewContainer>
    </Wrapper>
  );
}

export default App;
