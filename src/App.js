import React from "react";
import Wrapper from "./components/Wrapper";
import EdittorContainer from "./components/EdittorContainer";
import PreviewContainer from "./components/PreviewContainer";
import BoardTaskbar from "./components/BoardTaskbar";
import TaskbarChildren from "./components/TakbarChildren";
import TaskbarIcons from "./components/TaskbarIcons";
import DisplayScreen from "./components/DisplayScreen";
import "./App.css";

let OriginalValue = `<h1>header</h1>
<h2>sub header</h2>
a link example <a href="https://www.google.com/" target="_top"> click for google</a> 
and <span> inline code example <code> button </code></span>
code block example
<pre>
  <code>
    p { color: red; }
    body { background-color:#eee; }
  </code>
</pre>
<ul>list items example
  <li>React</li>
  <li>Redux</li>
</ul>
<p>blockquote example</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
an image tag example
<img src="https://user-images.githubusercontent.com/1908863/28495106-30b3b15e-6f09-11e7-8eb6-ca4ca001ab15.png" width="300px">
And bolded text example <b> bold <b>`;

class App extends React.Component{
  constructor(props){
    super(props);
    this.maximizeScreen1 = this.maximizeScreen1.bind(this);
    this.minimizeScreen1 = this.minimizeScreen1.bind(this);
    this.maximizeScreen2 = this.maximizeScreen2.bind(this);
    this.minimizeScreen2 = this.minimizeScreen2.bind(this);
    this.textChange = this.textChange.bind(this);
    this.defaultScreenText = this.defaultScreenText.bind(this);
  }

  // You can use (effect hook) ie. useEffect instead of componentDidMount
  componentDidMount(){
    window.addEventListener("load", this.defaultScreenText);
  }
  // Always remove event listener for no memory leakage on older web browser and for that use componet will unmount
  componentWillUnmount(){
    window.removeEventListener("load", this.defaultScreenText);
  }

  maximizeScreen1 = () => {
    console.log("maximize1");
    document.getElementsByClassName("maximize1")[0].style.display="none";
    document.getElementsByClassName("minimize1")[0].style.display="inline";
    let ele1 = document.getElementsByClassName("maximize1")[0].parentNode.parentNode.parentNode;
    ele1.style.width="90vw";
    ele1.style.height="100vh";
  }
  minimizeScreen1 = () => {
    console.log("minimize1");
    document.getElementsByClassName("minimize1")[0].style.display="none";
    document.getElementsByClassName("maximize1")[0].style.display="inline";
    let ele1 = document.getElementsByClassName("minimize1")[0].parentNode.parentNode.parentNode;
    ele1.style.width="60%";
    ele1.style.height="40%";
  }
  maximizeScreen2 = () => {
    console.log("maximize2");
    document.getElementsByClassName("maximize1")[1].style.display="none";
    document.getElementsByClassName("minimize1")[1].style.display="inline";
    let ele1 = document.getElementsByClassName("maximize1")[1].parentNode.parentNode.parentNode;
    ele1.style.width="90vw";
    ele1.style.height="100vh";
    ele1.style.left="5vw";
    document.getElementsByClassName("editContainer")[0].style.display="none";
  }
  minimizeScreen2 = () => {
    console.log("minimize2");
    document.getElementsByClassName("minimize1")[1].style.display="none";
    document.getElementsByClassName("maximize1")[1].style.display="inline";
    let ele1 = document.getElementsByClassName("minimize1")[1].parentNode.parentNode.parentNode;
    ele1.style.width="80%";
    ele1.style.minHeight="50%";
    ele1.style.left="10%";
    document.getElementsByClassName("editContainer")[0].style.display="block";
  }
  textChange = () => {
    let x = document.getElementsByClassName("textArea")[0].value;
    document.getElementsByClassName("displayScreen")[0].innerHTML =x;
  }
  defaultScreenText = () => {
    document.getElementsByClassName("displayScreen")[0].innerHTML=OriginalValue;
  }

  render(){
    return (
      <Wrapper>
        <EdittorContainer>
          <BoardTaskbar>
            <TaskbarChildren id="headingEdittor">
              <b>Edittor</b>
            </TaskbarChildren>
            <TaskbarChildren id="iconsContainerEdittor">
              <TaskbarIcons className="fas fa-compress minimize1" id="min1" onClick={this.minimizeScreen1}></TaskbarIcons>
              <TaskbarIcons className="fas fa-expand maximize1" id="max1" onClick={this.maximizeScreen1}></TaskbarIcons>
            </TaskbarChildren>
          </BoardTaskbar>
          <textarea className="textArea" defaultValue={OriginalValue} onChange={this.textChange}></textarea>
        </EdittorContainer>
        <PreviewContainer>
          <BoardTaskbar>
          <TaskbarChildren id="headingPreview">
              <b>Preview</b>
            </TaskbarChildren>
            <TaskbarChildren id="iconsContainerPreview">
              <TaskbarIcons className="fas fa-compress minimize1" id="min2" onClick={this.minimizeScreen2}></TaskbarIcons>
              <TaskbarIcons className="fas fa-expand maximize1" id="max2" onClick={this.maximizeScreen2}></TaskbarIcons>
            </TaskbarChildren>
          </BoardTaskbar>
          <DisplayScreen />
        </PreviewContainer>
      </Wrapper>
    );
  }
}

export default App;
