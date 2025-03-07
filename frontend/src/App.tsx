import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import RecipeForm from "./pages/SubmitRecipePage";
import RecipePage from "./pages/RecipePage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Navbar from "./components/NavBarComponent";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
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
