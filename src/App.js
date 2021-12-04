import Wrapper from "./components/Wrapper";
import EdittorContainer from "./components/EdittorContainer";
import PreviewContainer from "./components/PreviewContainer";
import BoardTaskbar from "./components/BoardTaskbar";
import TaskbarChildren from "./components/TakbarChildren";
import TaskbarIcons from "./components/TaskbarIcons";

const App = () => {
  const maximizeScreen1 = () => {
    console.log("maximize1");
    document.getElementsByClassName("maximize1")[0].style.display="none";
    document.getElementsByClassName("minimize1")[0].style.display="inline";
    let ele1 = document.getElementsByClassName("maximize1")[0].parentNode.parentNode.parentNode;
    ele1.style.width="90vw";
    ele1.style.height="100vh";
  }
  const minimizeScreen1 = () => {
    console.log("minimize1");
    document.getElementsByClassName("minimize1")[0].style.display="none";
    document.getElementsByClassName("maximize1")[0].style.display="inline";
    let ele1 = document.getElementsByClassName("minimize1")[0].parentNode.parentNode.parentNode;
    ele1.style.width="60%";
    ele1.style.height="40%";
  }
  const maximizeScreen2 = () => {
    console.log("maximize2");
    document.getElementsByClassName("maximize1")[1].style.display="none";
    document.getElementsByClassName("minimize1")[1].style.display="inline";
    let ele1 = document.getElementsByClassName("maximize1")[1].parentNode.parentNode.parentNode;
    ele1.style.width="90vw";
    ele1.style.height="100vh";
    ele1.style.left="5vw";
    document.getElementsByClassName("editContainer")[0].style.display="none";
  }
  const minimizeScreen2 = () => {
    console.log("minimize2");
    document.getElementsByClassName("minimize1")[1].style.display="none";
    document.getElementsByClassName("maximize1")[1].style.display="inline";
    let ele1 = document.getElementsByClassName("minimize1")[1].parentNode.parentNode.parentNode;
    ele1.style.width="80%";
    ele1.style.minHeight="50%";
    ele1.style.left="10%";
    document.getElementsByClassName("editContainer")[0].style.display="block";
  }

  return (
    <Wrapper>
      <EdittorContainer>
        <BoardTaskbar>
          <TaskbarChildren id="headingEdittor">
            <b>Edittor</b>
          </TaskbarChildren>
          <TaskbarChildren id="iconsContainerEdittor">
            <TaskbarIcons className="fas fa-compress minimize1" id="min1" onClick={minimizeScreen1}></TaskbarIcons>
            <TaskbarIcons className="fas fa-expand maximize1" id="max1" onClick={maximizeScreen1}></TaskbarIcons>
          </TaskbarChildren>
        </BoardTaskbar>
      </EdittorContainer>
      <PreviewContainer>
        <BoardTaskbar>
        <TaskbarChildren id="headingPreview">
            <b>Preview</b>
          </TaskbarChildren>
          <TaskbarChildren id="iconsContainerPreview">
            <TaskbarIcons className="fas fa-compress minimize1" id="min2" onClick={minimizeScreen2}></TaskbarIcons>
            <TaskbarIcons className="fas fa-expand maximize1" id="max2" onClick={maximizeScreen2}></TaskbarIcons>
          </TaskbarChildren>
        </BoardTaskbar>
      </PreviewContainer>
    </Wrapper>
  );
}

export default App;
