import { Grid } from "@mui/material";
import "./App.css";
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import ExperienceComponent from "./Components/Experience Component/ExperienceComponent";
import ResumeComponent from "./Components/ResumeComponent/ResumeComponent";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
import BodyContainer from "./Components/BodyContainer/BodyContainer";


function NavigationTabs() {
  const location = useLocation();
  const tabs = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Resume", path: "/resume" },
  ];

  const activePath = location.pathname;

  return (
  <Grid sx={{ display: "flex", justifyContent: "end", gap: "24px", padding: "16px" }}>
    {tabs.map((tab) => (
      <Link
        key={tab.path}
        to={tab.path}
        style={{
          padding: "8px 16px",
          textDecoration: "none",
          fontWeight: activePath === tab.path ? "bold" : "normal",
          color: activePath === tab.path ? "#1976d2" : "white",
          borderBottom: activePath === tab.path ? "2px solid #1976d2" : "none",
        }}
      >
        {tab.label}
      </Link>
    ))}
  </Grid>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const validPaths = ["/", "/experience", "/resume"];
  const isValid = validPaths.includes(location.pathname);

  return (
    <>
      {isValid && <NavigationTabs />}
      {children}
    </>
  );
}



function App() {
  return (
    <Router>
      <Layout>
       <Routes>
        <Route path="/" element={<AboutComponent />} />
        <Route path="/experience" element={<ExperienceComponent />} />
        <Route path="/resume" element={<ResumeComponent />} />
        <Route path="*" element={<BodyContainer />} />
       </Routes>
      </Layout>
    </Router>
  );
}


export default App;
