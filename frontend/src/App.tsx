import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage"; // A page that changes with routing
import RecipeForm from "./pages/SubmitRecipePage";
import RecipePage from "./pages/RecipePage";
import { ThemeProvider } from "@mui/material/styles"; // Example global provider
import theme from "./styles/theme"; // Custom Material UI theme

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-recipe" element={<RecipeForm />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
