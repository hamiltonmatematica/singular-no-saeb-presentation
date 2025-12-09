import React, { useState, useEffect, useCallback } from 'react';
import { 
  SlideIntro, SlideTrack, SlideMunicipality, SlideDataUsage, 
  SlideMonitoring, SlideTriModel, SlidePracticeModel, 
  SlideResults, SlideManagers, SlideClosing 
} from './components/SlideContent';
import { Button } from './components/UI';
import { ChevronLeft, ChevronRight, Maximize, MonitorPlay } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Constants for tracks
  const mathTracks = [
    "Números e operações",
    "Resolução de problemas",
    "Geometria, Grandezas e medidas",
    "Estatística e probabilidade",
    "Funções (principalmente no EM)",
    "Álgebra e proporcionalidade"
  ];

  const portTracks = [
    "Identificação de tema e ideia principal e Inferência",
    "Gêneros textuais",
    "Efeitos de sentido",
    "Coesão e coerência",
    "Linguagem formal e informal",
    "Análise de textos multimodais"
  ];

  // Define slides array
  const slides = [
    <SlideIntro />,
    <SlideTrack subject="Matemática" tracks={mathTracks} color="blue" />,
    <SlideTrack subject="Língua Portuguesa" tracks={portTracks} color="emerald" />,
    <SlideMunicipality />,
    <SlideDataUsage />,
    <SlideMonitoring />,
    <SlideTriModel />,
    <SlidePracticeModel />,
    <SlideResults />,
    <SlideManagers />,
    <SlideClosing />
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-50 relative overflow-hidden">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 pointer-events-none">
        <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm pointer-events-auto">
          <span className="font-bold text-brand-900">Singular</span>
          <span className="text-brand-500 mx-2">|</span>
          <span className="text-slate-500 text-sm">SAEB Presentation</span>
        </div>
        <button 
          onClick={toggleFullscreen}
          className="bg-white/80 backdrop-blur p-2 rounded-full shadow-sm hover:bg-white pointer-events-auto text-slate-700 transition-colors"
        >
          {isFullscreen ? <MonitorPlay size={20}/> : <Maximize size={20}/>}
        </button>
      </div>

      {/* Main Slide Area */}
      <main className="flex-grow relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 
              index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
            }`}
          >
            {slide}
          </div>
        ))}
      </main>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-slate-200 p-4 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="secondary" onClick={prevSlide} disabled={currentSlide === 0} className="disabled:opacity-50">
            <ChevronLeft size={20} className="mr-2"/> Anterior
          </Button>

          <div className="flex flex-col items-center w-full max-w-xs px-8">
            <span className="text-sm font-medium text-slate-600 mb-2">
              Slide {currentSlide + 1} de {totalSlides}
            </span>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-500 transition-all duration-300 ease-out"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>

          <Button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className="disabled:opacity-50">
            Próximo <ChevronRight size={20} className="ml-2"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
