import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/articles"
          element={<Articles />}
        />

        <Route
          path="/articles/:slug"
          element={<ArticleDetail />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;