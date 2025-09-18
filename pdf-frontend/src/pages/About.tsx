export default function About() {
  return (
    <div className="min-h-screen bg-gray-100/50 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 text-center pt-20">
        <div className="max-w-5xl w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Sobre nosotros
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PDF Grinder es una herramienta web moderna y fácil de usar diseñada para simplificar el proceso de combinación de archivos PDF.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nuestra misión es proporcionar una experiencia de usuario excepcional con una interfaz intuitiva, 
                funcionalidades avanzadas de arrastrar y soltar, y resultados rápidos y confiables.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Desarrollado con las últimas tecnologías web para garantizar velocidad, seguridad y compatibilidad 
                con todos los dispositivos y navegadores modernos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}