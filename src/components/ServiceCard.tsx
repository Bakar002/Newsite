import { ReactNode } from 'react';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  variant?: 'default' | 'featured';
}

const ServiceCard = ({ title, description, icon, link, variant = 'default' }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <Card className={`p-6 h-full transition-all hover:shadow-card hover:-translate-y-1 group ${
        variant === 'featured' ? 'bg-hero-gradient text-primary-foreground border-0' : ''
      }`}>
        <div className="flex flex-col h-full">
          <div className={`mb-4 ${variant === 'featured' ? 'opacity-90' : ''}`}>
            {icon}
          </div>
          <h3 className={`text-xl font-bold mb-3 ${
            variant === 'featured' ? 'text-primary-foreground' : 'text-foreground'
          }`}>
            {title}
          </h3>
          <p className={`flex-grow mb-4 ${
            variant === 'featured' ? 'text-primary-foreground/90' : 'text-muted-foreground'
          }`}>
            {description}
          </p>
          <div className={`flex items-center gap-2 font-medium ${
            variant === 'featured' ? 'text-primary-foreground' : 'text-primary'
          }`}>
            <span className="group-hover:gap-3 transition-all">
              Meer info
            </span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
