import React, { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps): JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[430px] h-[932px] relative">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-full relative">
          {/* Logo */}
          <div className="flex flex-col items-center mb-16">
            <img
              className="w-[249px] h-[193px] mb-8"
              alt="Logo central gral rd"
              src="/logo-central-gral-rd-minerd-1.svg"
            />
            
            {/* App Title */}
            <h1 className="font-titulos font-bold text-azul-marino text-2xl text-center mb-2">
              Portal Estudiantes
            </h1>
            
            {/* Subtitle */}
            <p className="font-['Public_Sans',Helvetica] font-normal text-texto-secundario text-base text-center px-8">
              Accede a tus servicios académicos
            </p>
          </div>

          {/* Loading Animation */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-azul-marino border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-['Public_Sans',Helvetica] font-normal text-texto-secundario text-sm">
              Cargando...
            </p>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-[120px] h-1 bg-azul-marino rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  );
};