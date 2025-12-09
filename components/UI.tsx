import React from 'react';
import { ChevronRight, ChevronLeft, Maximize2, Minimize2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "transition-all duration-200 rounded-lg font-medium flex items-center justify-center";
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 shadow-md hover:shadow-lg",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-gray-50 px-6 py-2",
    icon: "p-2 hover:bg-white/10 text-white rounded-full"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const SlideContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`h-full w-full flex flex-col p-8 md:p-16 max-w-7xl mx-auto ${className}`}>
    {children}
  </div>
);

export const SlideTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8 border-l-8 border-brand-500 pl-6 leading-tight">
    {children}
  </h2>
);

export const BulletPoint: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <li className="flex items-start gap-3 mb-4 animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
    <span className="mt-1.5 min-w-[10px] min-h-[10px] w-2.5 h-2.5 rounded-full bg-brand-500 block" />
    <span className="text-lg md:text-xl text-slate-700 leading-relaxed">{children}</span>
  </li>
);

export const Card: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col">
    <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-2">
      {icon && <div className="text-brand-600">{icon}</div>}
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <div className="text-slate-600 flex-grow">
      {children}
    </div>
  </div>
);
