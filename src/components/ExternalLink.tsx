// src/components/ExternalLink.tsx
import { Link, LinkProps } from "@heroui/link";
import { useAnalytics } from '@/hooks/useAnalytics';

interface ExternalLinkProps extends LinkProps {
  trackingName?: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  children, 
  trackingName,
  ...props 
}) => {
  const { trackEvent } = useAnalytics();
  
  const handleExternalLinkClick = () => {
    trackEvent('external_link_click', {
      destination: href,
      link_name: trackingName
    });
  };
  
  return (
    <Link
      isExternal
      href={href}
      onClick={handleExternalLinkClick}
      {...props}
    >
      {children}
    </Link>
  );
};