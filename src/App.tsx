import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SplashScreen } from "./screens/SplashScreen";
import { AutenticacinDe } from "./screens/AutenticacinDe";
import { Dashboard } from "./screens/Dashboard";
import { Horarios } from "./screens/Horarios/Horarios";
import { Calificaciones } from "./screens/Calificaciones/Calificaciones";
import { Clases } from "./screens/Clases/Clases";
import { Asistencia } from "./screens/Asistencia/Asistencia";
import { Profile } from "./screens/Profile/Profile";

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'dashboard'>('splash');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSplashComplete = () => {
    setCurrentScreen('login');
  };

  const handleLoginSuccess = () => {
    setCurrentScreen('dashboard');
    setIsAuthenticated(true);
  };

  if (currentScreen === 'splash') {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (currentScreen === 'login') {
    return <AutenticacinDe onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/calificaciones" element={<Calificaciones />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;