import { useEffect, useRef, useState } from "react";
import "./App.css";
import { marked } from "marked";
import { sampleData } from "./data";

function App() {
  const [text, setText] = useState(sampleData);

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef.current, text]);

  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div className="editor_title">Editor</div>
          <textarea
            name=""
            id="editor"
            value={text}
            ref={textAreaRef}
            rows={1}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="box">
          <div className="previewer_title">Previewer</div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
