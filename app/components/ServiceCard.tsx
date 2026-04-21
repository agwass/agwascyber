import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface Action {
  label: string;
  onClick: () => void;
}

interface ServiceCardProps {
  icon?: LucideIcon;
  logo?: string; // New prop for image logos
  title: string;
  description: string;
  actions: Action[];
  primaryColor?: string;
}

export function ServiceCard({ 
  icon: Icon, 
  logo,
  title, 
  description, 
  actions,
  primaryColor = 'bg-blue-600'
}: ServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-xl border border-[#E6EAF0] p-5 flex flex-col gap-4 
                 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] 
                 hover:-translate-y-1 transition-all duration-200"
    >
      {/* Card Header - Icon/Logo + Title */}
      <div className="flex items-center gap-3">
        <div className={`${logo ? 'bg-white border border-gray-200' : primaryColor} rounded-lg p-2 flex items-center justify-center w-14 h-14 flex-shrink-0`}>
          {logo ? (
            <img src={logo} alt={title} className="w-full h-full object-contain" />
          ) : Icon ? (
            <Icon className="w-8 h-8 text-white" />
          ) : null}
        </div>
        <h3 className="text-[17px] font-semibold text-[#0F172A]">{title}</h3>
      </div>
      
      {/* Description Text */}
      <p className="text-[14px] leading-5 text-[#475569]">
        {description}
      </p>
      
      {/* Action Button Group */}
      <div className="flex flex-col gap-2.5">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`
              w-full px-4 py-3 rounded-lg text-[14px] font-medium
              flex items-center justify-between transition-all duration-200
              ${index === 0 
                ? 'bg-green-700 text-white hover:bg-green-800 active:scale-[0.98]' 
                : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-gray-50 active:scale-[0.98]'
              }
            `}
          >
            {action.label}
            <ArrowRight className="w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
}