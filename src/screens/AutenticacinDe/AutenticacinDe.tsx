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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[430px] h-[932px] relative">
        {/* Logo */}
        <img
          className="absolute w-[249px] h-[193px] top-44 left-[91px]"
          alt="Logo central gral rd"
          src="/logo-central-gral-rd-minerd-1.svg"
        />

        {/* Login Form */}
        <Card className="absolute w-[430px] h-[449px] top-[483px] left-0 bg-azul-marino rounded-[30px_30px_0px_0px] overflow-hidden border-none shadow-none">
          <CardContent className="flex flex-col w-[353px] items-center justify-center gap-[25px] absolute top-[22px] left-[45px] p-0">
            {/* Username Input */}
            <div className="flex h-[50px] items-center gap-2 px-[13px] py-[13.5px] relative self-stretch w-full bg-white rounded-[20px]">
              <UserIcon className="w-[16.67px] h-5 text-texto-principal-oscuro" />
              <Input
                className="border-none shadow-none h-4 p-0 font-titulos font-[number:var(--titulos-font-weight)] text-texto-principal-oscuro text-[length:var(--titulos-font-size)] tracking-[var(--titulos-letter-spacing)] leading-[var(--titulos-line-height)] [font-style:var(--titulos-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                defaultValue="D-466"
              />
            </div>

            {/* Password Input */}
            <div className="flex h-[50px] items-center gap-2 px-[13px] py-[13.5px] relative self-stretch w-full bg-white rounded-[20px]">
              <KeyIcon className="w-5 h-5 text-texto-principal-oscuro" />
              <Input
                type={showPassword ? "text" : "password"}
                className="border-none shadow-none h-8 p-0 font-['Public_Sans',Helvetica] font-normal text-[#131b2e9e] text-[17px] tracking-[0] leading-[23.0px] focus-visible:ring-0 focus-visible:ring-offset-0"
                defaultValue="***********************************"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex w-[353px] h-[22px] items-center gap-[18.36px] relative">
              <div className="inline-flex items-center gap-[5.74px] relative flex-[0_0_auto]">
                <Checkbox id="privacy-policy" className="w-5 h-5 rounded-sm" />
                <label
                  htmlFor="privacy-policy"
                  className="relative w-fit mt-[-1.15px] font-['Public_Sans',Helvetica] font-normal text-blanco text-[13.8px] text-center tracking-[-0.14px] leading-[20.7px] whitespace-nowrap cursor-pointer"
                >
                  <span className="font-light tracking-[-0.02px]">
                    Acepto las políticas de privacidad
                  </span>
                </label>
              </div>
            </div>

            {/* Login Button */}
            <Button 
              onClick={handleLogin}
              className="bg-texto-activoenfocado h-[50px] w-full rounded-[48px] font-['Public_Sans',Helvetica] font-medium text-white text-[17px] hover:bg-texto-activoenfocado/90"
            >
              Iniciar sesión
            </Button>

            {/* Office 365 Login Button */}
            <Button
              variant="outline"
              className="bg-gris-neutro h-[50px] w-full rounded-[48px] font-['Public_Sans',Helvetica] font-medium text-[#1a1e28] text-[17px] border-none hover:bg-gris-neutro/90 hover:text-[#1a1e28]"
            >
              Iniciar sesión con Office 365
            </Button>

            {/* Recover Password Link */}
            <Button variant="link" className="h-6 relative w-[196px] p-0">
              <div className="flex h-5 items-end gap-1.5 relative w-[196px]">
                <KeyIcon className="w-5 h-5 text-white" />
                <span className="relative w-44 h-5 mt-[-1.00px] mr-[-6.00px] font-['Public_Sans',Helvetica] font-light text-white text-[17px] text-center tracking-[0] leading-[23.0px] whitespace-nowrap overflow-hidden text-ellipsis">
                  Recuperar contraseña
                </span>
              </div>
            </Button>
          </CardContent>

          {/* Bottom Indicators */}
          <div className="absolute w-[430px] h-8 top-[470px] left-0">
            <div className="relative w-[120px] h-1 top-5 left-[155px] bg-white rounded-[360px]" />
          </div>

          <div className="absolute w-[430px] h-8 top-[417px] left-0">
            <div className="relative w-[120px] h-1 top-5 left-[155px] bg-white rounded-[360px]" />
          </div>
        </Card>
      </div>
    </div>
  );
};