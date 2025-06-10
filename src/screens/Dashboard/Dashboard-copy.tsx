import React, { useState, useRef, useEffect } from "react";
import { Bell, ChevronRight, Calendar, FileText, CreditCard, Users, BookOpen, Award, MapPin, Phone, Mail, GraduationCap, Search, Clock, CheckCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/layout";
import { Menu } from "../../components/menu";
import { useMenu } from "../../hooks/useMenu";
import { useNotifications } from "../../hooks/useNotifications";
import { NotificationButton } from "../../components/notifications/NotificationButton";
import { NotificationDropdown } from "../../components/notifications/NotificationDropdown";
import { NotificationDetail } from "../../components/notifications/NotificationDetail";
import { DashboardSummary } from "../../components/dashboard";
import { Notification } from "../../types/notification";
import { mainMenuItems } from "../../data/menuItems";
import { createDashboardSummaryData } from "../../data/dashboardSummaryData";

export const Dashboard = (): JSX.Element => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'clases' | 'horarios' | 'asistencia' | 'calificaciones'>('dashboard');
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [isNotificationDetailOpen, setIsNotificationDetailOpen] = useState(false);
  
  // Menu system
  const { isOpen: isMenuOpen, openMenu, closeMenu, toggleMenu } = useMenu({
    autoClose: true,
    onItemClick: (item) => {
      console.log('Menu item clicked:', item.label);
      // Handle navigation based on item
      switch (item.id) {
        case 'inicio':
          navigateToDashboard();
          break;
        case 'profile':
          navigateToProfile();
          break;
        case 'clases':
          navigateToClases();
          break;
        case 'horarios':
          navigateToHorarios();
          break;
        case 'asistencia':
          navigateToAsistencia();
          break;
        case 'calificaciones':
          navigateToCalificaciones();
          break;
        default:
          break;
      }
    }
  });
  
  // Notification system
  const {
    notifications,
    unreadCount,
    isDropdownOpen,
    markAsRead,
    markAllAsRead,
    toggleDropdown,
    closeDropdown
  } = useNotifications();
  
  // Mouse drag scrolling state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const navigateToProfile = () => {
    setCurrentView('profile');
  };

  const navigateToDashboard = () => {
    setCurrentView('dashboard');
  };

  const navigateToClases = () => {
    setCurrentView('clases');
  };

  const navigateToHorarios = () => {
    setCurrentView('horarios');
  };

  const navigateToAsistencia = () => {
    setCurrentView('asistencia');
  };

  const navigateToCalificaciones = () => {
    setCurrentView('calificaciones');
  };

  const handleNotificationClick = (notification: Notification) => {
    setSelectedNotification(notification);
    setIsNotificationDetailOpen(true);
    markAsRead(notification.id);
    closeDropdown();
  };

  const closeNotificationDetail = () => {
    setIsNotificationDetailOpen(false);
    setSelectedNotification(null);
  };

  // Mouse drag scrolling handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Set initial cursor style
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  }, []);

  const renderViewTitle = () => {
    switch (currentView) {
      case 'clases':
        return 'Mis Clases';
      case 'horarios':
        return 'Horarios';
      case 'asistencia':
        return 'Asistencia';
      case 'calificaciones':
        return 'Calificaciones';
      case 'profile':
        return 'Mi Perfil';
      default:
        return 'Dashboard';
    }
  };

  const renderBackButton = () => {
    if (currentView !== 'dashboard') {
      return (
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-azul-vivo"
          onClick={navigateToDashboard}
        >
          ← Volver
        </Button>
      );
    }
    return null;
  };

  // Create dashboard summary data with navigation callbacks
  const dashboardSummaryData = createDashboardSummaryData(
    navigateToAsistencia,
    navigateToClases
  );

  return (
    <div className="bg-gris-claro min-h-screen w-full">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        {/* Header using the new reusable component */}
        <Header
          onMenuClick={toggleMenu}
          onSearchClick={() => console.log('Search clicked')}
          notificationCount={unreadCount}
          onUserProfileClick={navigateToProfile}
          userName="Mario Ramirez P."
          rightContent={
            <div className="flex items-center gap-2">
              <Button variant="ghost\" size="icon\" className="text-texto-principal-oscuro hover:bg-gray-100">
                <Search className="w-6 h-6" />
              </Button>
              
              {/* Notification System */}
              <div className="relative">
                <NotificationButton
                  unreadCount={unreadCount}
                  onClick={toggleDropdown}
                />
                <NotificationDropdown
                  notifications={notifications}
                  isOpen={isDropdownOpen}
                  onClose={closeDropdown}
                  onNotificationClick={handleNotificationClick}
                  onMarkAllRead={markAllAsRead}
                  unreadCount={unreadCount}
                />
              </div>
              
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2 border-2 border-azul-vivo">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                  alt="Mario Ramirez P." 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          }
        />

        {/* Notification Detail Modal */}
        <NotificationDetail
          notification={selectedNotification}
          isOpen={isNotificationDetailOpen}
          onClose={closeNotificationDetail}
        />

        {/* Reusable Menu Component with Custom Background Color #142D69 */}
        <Menu
          items={mainMenuItems}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          title="Portal Estudiantes"
          position="left"
          width="w-80"
          backdropBlur={true}
          enableKeyboardNavigation={true}
          autoCloseOnClick={true}
          theme={{
            background: 'bg-[#142D69]',
            textColor: 'text-white',
            hoverBackground: 'hover:bg-white/10',
            hoverTextColor: 'hover:text-white',
            activeBackground: 'bg-white/20',
            activeTextColor: 'text-white',
            borderColor: 'border-white/20',
            iconColor: 'text-white/80',
            badgeBackground: 'bg-white',
            badgeTextColor: 'text-[#142D69]'
          }}
        />

        {/* Main Content - Added top padding to account for fixed header */}
        <div className="px-6 py-6 pt-24 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-texto-principal-oscuro font-semibold text-xl">{renderViewTitle()}</h1>
            {renderBackButton()}
          </div>

          {/* Conditional Content Based on Current View */}
          {currentView === 'dashboard' && (
            <>
              {/* Student Profile Card - Added to Dashboard */}
              <section>
                <h2 className="text-texto-principal-oscuro font-semibold text-lg mb-4">Mi Perfil</h2>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={navigateToProfile}>
                  <CardContent className="p-0">
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-azul-marino to-azul-vivo p-6 text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <img 
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                            alt="Mario Ramirez P." 
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">Mario Ramirez P.</h3>
                          <p className="text-white/90 text-sm">Código: D-466</p>
                          <p className="text-white/90 text-sm">Curso: 3er grado de secundaria</p>
                        </div>
                        <div className="flex-shrink-0">
                          <ChevronRight className="w-5 h-5 text-white/70" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Dashboard Summary using the new reusable component */}
              <DashboardSummary
                title="Resumen Diario"
                items={dashboardSummaryData}
                columns={2}
                enableHover={true}
                showTitle={true}
              />

              {/* Classes Today - Horizontal Scroll with Mouse Drag */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-texto-principal-oscuro font-semibold text-lg">Clases de Hoy</h2>
                  <Button variant="ghost" size="sm" className="text-azul-vivo" onClick={navigateToClases}>
                    Ver todo
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                
                <div 
                  ref={scrollRef}
                  className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide select-none"
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  style={{ cursor: 'grab' }}
                >
                  {/* Class Card 1 - Lengua Española */}
                  <Card className="min-w-[320px] max-w-[320px] flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 h-full">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Rounded square picture */}
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <img 
                              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                              alt="Lengua Española" 
                              className="w-full h-full rounded-xl object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            {/* Title */}
                            <h3 className="font-semibold text-texto-principal-oscuro text-base mb-3 leading-tight">
                              Lengua Española - Redacción y Ortografía
                            </h3>
                          </div>
                        </div>
                        
                        {/* Calendar info */}
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                          <span className="text-azul-vivo text-sm font-medium">Hoy</span>
                        </div>
                        
                        {/* Clock info */}
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-texto-secundario flex-shrink-0" />
                          <span className="text-texto-secundario text-sm">Antes del día de hoy</span>
                        </div>
                        
                        {/* Description - Now wraps naturally */}
                        <div className="flex-1">
                          <p className="text-texto-secundario text-sm leading-relaxed break-words">
                            Revisión de técnicas de redacción y reglas ortográficas fundamentales para mejorar la expresión escrita. Esta clase incluye ejercicios prácticos de escritura y corrección de textos.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Class Card 2 - Matemáticas */}
                  <Card className="min-w-[320px] max-w-[320px] flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 h-full">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Rounded square picture */}
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <img 
                              src="https://images.pexels.com/photos/6256/mathematics-computation-math-numbers.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                              alt="Matemáticas" 
                              className="w-full h-full rounded-xl object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            {/* Title */}
                            <h3 className="font-semibold text-texto-principal-oscuro text-base mb-3 leading-tight">
                              Matemáticas III - Álgebra Avanzada
                            </h3>
                          </div>
                        </div>
                        
                        {/* Calendar info */}
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                          <span className="text-azul-vivo text-sm font-medium">Hoy</span>
                        </div>
                        
                        {/* Clock info */}
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-texto-secundario flex-shrink-0" />
                          <span className="text-texto-secundario text-sm">10:00 AM - 11:30 AM</span>
                        </div>
                        
                        {/* Description - Now wraps naturally */}
                        <div className="flex-1">
                          <p className="text-texto-secundario text-sm leading-relaxed break-words">
                            Estudio de ecuaciones cuadráticas y sistemas de ecuaciones lineales con aplicaciones prácticas. Resolveremos problemas complejos usando métodos algebraicos avanzados.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Class Card 3 - Historia */}
                  <Card className="min-w-[320px] max-w-[320px] flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 h-full">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Rounded square picture */}
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <img 
                              src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                              alt="Historia" 
                              className="w-full h-full rounded-xl object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            {/* Title */}
                            <h3 className="font-semibold text-texto-principal-oscuro text-base mb-3 leading-tight">
                              Historia Universal - Civilizaciones Antiguas
                            </h3>
                          </div>
                        </div>
                        
                        {/* Calendar info */}
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                          <span className="text-azul-vivo text-sm font-medium">Hoy</span>
                        </div>
                        
                        {/* Clock info */}
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-texto-secundario flex-shrink-0" />
                          <span className="text-texto-secundario text-sm">2:00 PM - 3:30 PM</span>
                        </div>
                        
                        {/* Description - Now wraps naturally */}
                        <div className="flex-1">
                          <p className="text-texto-secundario text-sm leading-relaxed break-words">
                            Análisis de las principales civilizaciones de la antigüedad y su impacto en la cultura moderna. Exploraremos Egipto, Mesopotamia, Grecia y Roma en detalle.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </>
          )}

          {/* Clases View */}
          {currentView === 'clases' && (
            <section>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-azul-vivo" />
                    <h3 className="text-xl font-semibold text-texto-principal-oscuro mb-2">Mis Clases</h3>
                    <p className="text-texto-secundario">Aquí podrás ver todas tus clases programadas y materiales de estudio.</p>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Horarios View */}
          {currentView === 'horarios' && (
            <section>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <Calendar className="w-16 h-16 mx-auto mb-4 text-azul-vivo" />
                    <h3 className="text-xl font-semibold text-texto-principal-oscuro mb-2">Horarios</h3>
                    <p className="text-texto-secundario">Consulta tus horarios de clases y actividades académicas.</p>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Asistencia View */}
          {currentView === 'asistencia' && (
            <section>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-azul-vivo" />
                    <h3 className="text-xl font-semibold text-texto-principal-oscuro mb-2">Asistencia</h3>
                    <p className="text-texto-secundario">Revisa tu registro de asistencia y porcentaje de participación.</p>
                    <div className="mt-6 p-4 bg-azul-vivo/5 rounded-lg">
                      <div className="text-3xl font-bold text-azul-vivo mb-2">90%</div>
                      <div className="text-sm text-texto-secundario">Asistencia total del Periodo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Calificaciones View */}
          {currentView === 'calificaciones' && (
            <section>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-azul-vivo" />
                    <h3 className="text-xl font-semibold text-texto-principal-oscuro mb-2">Calificaciones</h3>
                    <p className="text-texto-secundario">Consulta tus calificaciones y progreso académico.</p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">8.5</div>
                        <div className="text-xs text-green-700">Promedio General</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                        <div className="text-xs text-blue-700">Materias Cursadas</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Profile View */}
          {currentView === 'profile' && (
            <section>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Profile Header */}
                  <div className="bg-gradient-to-r from-azul-marino to-azul-vivo p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <img 
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                          alt="Mario Ramirez P." 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">Mario Ramirez P.</h3>
                        <p className="text-white/90 text-sm">Código: D-466</p>
                        <p className="text-white/90 text-sm">Curso: 3er grado de secundaria</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="px-3 py-1 bg-white/20 rounded-full">
                            <span className="text-xs font-medium">Activo</span>
                          </div>
                          <div className="px-3 py-1 bg-color-secundario/20 rounded-full">
                            <span className="text-xs font-medium">Regular</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-6 space-y-4">
                    {/* Academic Information */}
                    <div>
                      <h4 className="text-texto-principal-oscuro font-semibold text-sm mb-3 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-azul-vivo" />
                        Información Académica
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-texto-secundario">Carrera:</span>
                          <p className="text-texto-principal-oscuro font-medium">Ingeniería en Sistemas</p>
                        </div>
                        <div>
                          <span className="text-texto-secundario">Periodo:</span>
                          <p className="text-texto-principal-oscuro font-medium">6to Periodo</p>
                        </div>
                        <div>
                          <span className="text-texto-secundario">Modalidad:</span>
                          <p className="text-texto-principal-oscuro font-medium">Presencial</p>
                        </div>
                        <div>
                          <span className="text-texto-secundario">Turno:</span>
                          <p className="text-texto-principal-oscuro font-medium">Matutino</p>
                        </div>
                      </div>
                    </div>

                    <hr className="border-lightmodegreygrey-200" />

                    {/* Contact Information */}
                    <div>
                      <h4 className="text-texto-principal-oscuro font-semibold text-sm mb-3">Información de Contacto</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                          <span className="text-texto-principal-oscuro">mario.ramirez@estudiante.edu.do</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                          <span className="text-texto-principal-oscuro">+1 (809) 555-0123</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                          <span className="text-texto-principal-oscuro">Santo Domingo, República Dominicana</span>
                        </div>
                      </div>
                    </div>

                    <hr className="border-lightmodegreygrey-200" />

                    {/* Academic Progress */}
                    <div>
                      <h4 className="text-texto-principal-oscuro font-semibold text-sm mb-3">Progreso Académico</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-azul-vivo/5 rounded-lg p-3">
                          <div className="text-lg font-bold text-azul-vivo">75%</div>
                          <div className="text-xs text-texto-secundario">Completado</div>
                        </div>
                        <div className="bg-color-secundario/5 rounded-lg p-3">
                          <div className="text-lg font-bold text-color-secundario">120</div>
                          <div className="text-xs text-texto-secundario">Créditos</div>
                        </div>
                        <div className="bg-color-primario-2/5 rounded-lg p-3">
                          <div className="text-lg font-bold text-color-primario-2">8.5</div>
                          <div className="text-xs text-texto-secundario">Índice</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 text-azul-vivo border-azul-vivo hover:bg-azul-vivo/5">
                        Editar Perfil
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-texto-secundario">
                        Ver Historial
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-lightmodegreygrey-200 px-6 py-3">
          <div className="flex items-center justify-around">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex flex-col items-center gap-1 ${currentView === 'dashboard' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
              onClick={navigateToDashboard}
            >
              <div className={`w-6 h-6 ${currentView === 'dashboard' ? 'bg-azul-vivo' : 'bg-texto-secundario'} rounded-sm flex items-center justify-center`}>
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-xs">Inicio</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex flex-col items-center gap-1 ${currentView === 'horarios' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
              onClick={navigateToHorarios}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-xs">Horarios</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex flex-col items-center gap-1 ${currentView === 'calificaciones' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
              onClick={navigateToCalificaciones}
            >
              <FileText className="w-6 h-6" />
              <span className="text-xs">Notas</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex flex-col items-center gap-1 ${currentView === 'profile' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
              onClick={navigateToProfile}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs">Perfil</span>
            </Button>
          </div>
        </nav>

        {/* Bottom Padding for Navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};