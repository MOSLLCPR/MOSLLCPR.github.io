/* === FUNCIONES JAVASCRIPT === */
/* Función para compartir el enlace en móviles */
function compartirEnlace() {
  const url = window.location.href;
  const title = document.title || "Business Card";
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(() => {
      alert("No se pudo compartir el enlace.");
    });
  } else {
    // Fallback para desktop o navegadores sin soporte
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles: " + url);
  }
}

/* Función que muestra la lista de servicios disponibles */
/* PARA EDITAR: Cambiar el texto dentro de alert() por tus servicios */
function mostrarServicios() {
  alert(
    "MOS LLC es una compañía que se distingue por ofrecer una amplia variedad de servicios en dos áreas principales: construcción y gestorías.\n\n" +
    "En el área de construcción, contamos con experiencia en:\n" +
    "\n* Remodelación de edificaciones residenciales y comerciales" +
    "\n* Trabajos en Gypsum Board" +
    "\n* Servicios de plomería" +
    "\n* Servicios de electricidad\n\n" +
    "En el área de gestorías, ofrecemos asistencia ágil y confiable en trámites y servicios ante cualquier entidad gubernamental y ámbito privado, facilitando procesos para nuestros clientes y asegurando soluciones eficientes."
  );
}

/* Función para agregar contacto - Compatible con móviles */
function agregarContacto() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Joel Meléndez
N:Meléndez;Joel;;;
ORG:MOS LLC
TEL;TYPE=CELL:7873095482
EMAIL:Mosllc.admi@gmail.com
URL:https://mosllcpr.github.io/
ADR:;;Caguas;Puerto Rico;;;
NOTE:Transformamos ideas en realidades sólidas, realizando proyectos de construcción y servicios de gestorías. En MOS LLC combinamos calidad, seguridad y confianza, convirtiéndonos en un aliado estratégico para cada proyecto.
END:VCARD`;

  // Detectar si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Para dispositivos móviles, crear un enlace temporal y hacer click
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Joel_Melendez_Contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    
    // Limpiar después de un breve delay
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  } else {
    // Para desktop, usar el método tradicional
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Joel_Melendez_Contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
