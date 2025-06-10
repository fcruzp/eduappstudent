import { EyeIcon, EyeOffIcon, KeyIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

interface AutenticacinDeProps {
  onLoginSuccess?: () => void;
}

export const AutenticacinDe = ({ onLoginSuccess }: AutenticacinDeProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="bg-gris-claro min-h-screen w-full">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        <div className="px-4 pt-16 pb-20">
          {/* Logo Section */}
          <div className="flex justify-center mb-12 pt-16">
            <img
              className="w-[249px] h-[193px]"
              alt="Logo central gral rd"
              src="/logo-central-gral-rd-minerd-1.svg"
            />
          </div>

          {/* Login Form Card */}
          <Card className="bg-azul-marino rounded-[30px] border-none shadow-lg">
            <CardContent className="p-6 space-y-6">
              {/* Username Input */}
              <div className="space-y-2">
                <div className="flex h-[50px] items-center gap-3 px-4 py-3 bg-white rounded-[20px] transition-all hover:shadow-sm focus-within:ring-2 focus-within:ring-azul-vivo focus-within:ring-offset-2">
                  <UserIcon className="w-5 h-5 text-texto-principal-oscuro flex-shrink-0" />
                  <Input
                    placeholder="Número de estudiante"
                    className="border-none shadow-none bg-transparent p-0 text-texto-principal-oscuro placeholder:text-texto-secundario focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
                    defaultValue="D-466"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex h-[50px] items-center gap-3 px-4 py-3 bg-white rounded-[20px] transition-all hover:shadow-sm focus-within:ring-2 focus-within:ring-azul-vivo focus-within:ring-offset-2">
                  <KeyIcon className="w-5 h-5 text-texto-principal-oscuro flex-shrink-0" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    className="border-none shadow-none bg-transparent p-0 text-texto-principal-oscuro placeholder:text-texto-secundario focus-visible:ring-0 focus-visible:ring-offset-0 font-medium flex-1"
                    defaultValue="***********************************"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-texto-secundario" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-texto-secundario" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox
                  id="privacy-policy"
                  className="w-5 h-5 rounded-sm border-white data-[state=checked]:bg-white data-[state=checked]:text-azul-marino"
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-sm text-white font-light leading-relaxed cursor-pointer select-none"
                >
                  Acepto las políticas de privacidad
                </label>
              </div>

              {/* Login Button */}
              <Button
                onClick={handleLogin}
                className="bg-texto-activoenfocado hover:bg-texto-activoenfocado/90 h-[50px] w-full rounded-[25px] font-medium text-white text-base transition-all duration-200 hover:shadow-lg"
              >
                Iniciar sesión
              </Button>

              {/* Office 365 Login Button */}
              <Button
                variant="outline"
                className="bg-gris-neutro hover:bg-gris-neutro/90 h-[50px] w-full rounded-[25px] font-medium text-texto-principal-oscuro text-base border-none transition-all duration-200 hover:shadow-lg"
              >
                Iniciar sesión con Office 365
              </Button>

              {/* Recover Password Link */}
              <div className="flex justify-center pt-2">
                <Button
                  variant="link"
                  className="text-white hover:text-white/80 p-0 h-auto font-light transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <KeyIcon className="w-4 h-4" />
                    <span className="text-sm">Recuperar contraseña</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Navigation Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-8 h-1 bg-azul-vivo rounded-full" />
            <div className="w-8 h-1 bg-lightmodegreygrey-300 rounded-full" />
            <div className="w-8 h-1 bg-lightmodegreygrey-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};