import "./App.css";
import { Parallax } from "react-parallax";

function App() {
  return (
    <div className="App">
      <Parallax
        strength={250}
        bgImage="https://images.unsplash.com/photo-1696530858341-0af6f8437d92?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="container">
          <div className="content">Normal Parallax</div>
        </div>
      </Parallax>

      <Parallax
        strength={200}
        blur={{ min: -5, max: 15 }}
        bgImage="https://images.unsplash.com/photo-1696258361452-d54add39e3c1?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="container">
          <div className="content blur">Blur</div>
        </div>
      </Parallax>

      <Parallax
        strength={-400}
        bgImage="https://images.unsplash.com/photo-1696871843440-e8d1ecfc0e13?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="container">
          <div className="content content3">Reverse Parallax</div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
