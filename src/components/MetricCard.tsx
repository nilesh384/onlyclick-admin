import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    type: 'increase' | 'decrease';
  };
  icon: LucideIcon;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

export function MetricCard({ title, value, change, icon: Icon, variant = 'default' }: MetricCardProps) {
  const getCardClasses = () => {
    switch (variant) {
      case 'primary':
        return 'metric-card-primary';
      case 'success':
        return 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200';
      case 'warning':
        return 'bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200';
      default:
        return 'metric-card';
    }
  };

  const getIconClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-blue-600';
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-amber-600';
      default:
        return 'text-slate-600';
    }
  };

  return (
    <Card className={getCardClasses()}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={`h-5 w-5 ${getIconClasses()}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p className={`text-xs mt-1 ${
            change.type === 'increase' 
              ? 'text-green-600' 
              : 'text-red-600'
          }`}>
            {change.type === 'increase' ? '+' : ''}{change.value} from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}