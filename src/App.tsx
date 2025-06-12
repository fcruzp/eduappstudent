import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SplashScreen } from "./screens/SplashScreen";
import { AutenticacinDe } from "./screens/AutenticacinDe";
import { Dashboard } from "./screens/Dashboard";
import { Horarios } from "./screens/Horarios/Horarios";
import { Calificaciones } from "./screens/Calificaciones/Calificaciones";
import { HistoriaAsistencia } from "./screens/HistoriaAsistencia/HistoriaAsistencia";
import { ListaClases } from "./screens/ListaClases";
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

  const handleLogout = () => {
    // Aquí se pueden limpiar tokens o cualquier dato de sesión.
    setIsAuthenticated(false);
    setCurrentScreen('login');
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
        <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/calificaciones" element={<Calificaciones onLogout={handleLogout} />} />
        <Route path="/historia-asistencia" element={<HistoriaAsistencia onLogout={handleLogout} />} />
        <Route path="/lista-clases" element={<ListaClases onLogout={handleLogout} />} />
        <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;