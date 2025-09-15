export const navLinks = [
  {
    id: 1,
    name: 'Inicio',
    href: '#home',
  },
  {
    id: 2,
    name: 'Acerca de nosotros',
    href: '#about',
  },
  {
    id: 3,
    name: 'Servicios',
    href: '#services',
  },
  {
    id: 4,
    name: 'Dónde encontrarnos',
    href: '#location',
  },
];


export const specialties = [
  {
    id: 1,
    title: "Neurología",
    doctor: "Dra. Inventada",
    description: "Prevención, diagnóstico, tratamiento y rehabilitación de todas la enfermedades y trastornos que afectan al cerebro y al sistema nervioso (central, periférico y autónomo)",
    image: "assets/brain.png",

  },
  {
    id: 2,
    title: "Traumatología",
    doctor: "Dr. Strange",
    description: "Médico especialista en cirugía ortopédica y traumatología en general y especialmente en columna vertebral y todos los problemas que afectan a esta región",
    image: "/assets/bones.png",
    scale: 5,

  },
  {
    id: 3,
    title: "Medicina Interna",
    doctor: "Dr. House",
    description: "Tratamos a pacientes cuyo diagnóstico es difícil, se encuentran afectados por varias enfermedades o presentan síntomas en varios órganos, aparatos o sistemas del organismo",
    image: "/assets/organ.png",

  },
  {
    id: 4,
    title: "Psiquiatría",
    doctor: "Dra. No se me ocurre un nombre",
    description: "Mediante la realización de psicoterapias evaluamos, diagnosticamos, tratamos y rehabilitamos a pacientes con trastornos de la personalidad ansiedad, depresión, hiperactividad, fobias...",
    image: "/assets/psychiatry.png",

  },
];


//Importante para el tema de un diseño adaptado a todo tipo de dispositivos
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

