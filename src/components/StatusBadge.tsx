import { Badge } from "@/components/ui/badge";

type StatusType = 'completed' | 'pending' | 'cancelled' | 'in-progress' | 'approved' | 'rejected' | 'available' | 'busy';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusConfig = (status: StatusType) => {
    switch (status) {
      case 'completed':
      case 'approved':
        return {
          variant: 'secondary' as const,
          className: 'status-completed',
          text: status === 'completed' ? 'Completed' : 'Approved'
        };
      case 'pending':
        return {
          variant: 'secondary' as const,
          className: 'status-pending',
          text: 'Pending'
        };
      case 'cancelled':
      case 'rejected':
        return {
          variant: 'secondary' as const,
          className: 'status-cancelled',
          text: status === 'cancelled' ? 'Cancelled' : 'Rejected'
        };
      case 'in-progress':
        return {
          variant: 'secondary' as const,
          className: 'status-in-progress',
          text: 'In Progress'
        };
      case 'available':
        return {
          variant: 'secondary' as const,
          className: 'status-completed',
          text: 'Available'
        };
      case 'busy':
        return {
          variant: 'secondary' as const,
          className: 'status-pending',
          text: 'Busy'
        };
      default:
        return {
          variant: 'secondary' as const,
          className: '',
          text: status
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge 
      variant={config.variant} 
      className={`${config.className} ${className || ''}`}
    >
      {config.text}
    </Badge>
  );
}