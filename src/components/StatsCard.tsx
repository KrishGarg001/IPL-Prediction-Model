
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  progress?: number;
  progressColor?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  progress, 
  progressColor = "#3B82F6",
  trend 
}: StatsCardProps) => {
  return (
    <Card className="shadow-md h-full transition-all">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-8 w-8 rounded-lg bg-gray-100 p-1.5 flex items-center justify-center">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">
            {description}
          </p>
        )}
        
        {progress !== undefined && (
          <div className="mt-4">
            <Progress value={progress} className="h-2" indicatorColor={progressColor} />
            <p className="mt-2 text-xs text-gray-500">
              {progress}% of target
            </p>
          </div>
        )}
        
        {trend && (
          <div className="mt-2 flex items-center">
            <span 
              className={cn("text-xs font-medium inline-flex items-center",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}
            >
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </span>
            <span className="ml-2 text-xs text-gray-500">vs previous</span>
          </div>  
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
