import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AudioProvider } from "./contexts/AudioContext";
import AudioPlayer from "./components/AudioPlayer";
import Page1Gateway from "./pages/Page1Gateway";
import Page2Music from "./pages/Page2Music";
import Page3Game from "./pages/Page3Game";
import Page4Birthday from "./pages/Page4Birthday";
import Page5Story from "./pages/Page5Story";
import Page6Closing from "./pages/Page6Closing";

function App() {
  return (
    <AudioProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page1Gateway />} />
            <Route path="/music" element={<Page2Music />} />
            <Route path="/game" element={<Page3Game />} />
            <Route path="/birthday" element={<Page4Birthday />} />
            <Route path="/story" element={<Page5Story />} />
            <Route path="/closing" element={<Page6Closing />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <AudioPlayer />
        </BrowserRouter>
      </div>
    </AudioProvider>
  );
}

export default App;
