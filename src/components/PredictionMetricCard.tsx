
import { PredictionMetric } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PredictionMetricCardProps {
  metric: PredictionMetric;
}

const PredictionMetricCard = ({ metric }: PredictionMetricCardProps) => {
  const { name, value, color, description } = metric;

  return (
    <Card className="shadow-sm">
      <CardContent className="pt-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-sm">{name}</h3>
            <span className="text-2xl font-bold">{value}%</span>
          </div>
          
          <Progress 
            value={value} 
            className="h-2 mb-2" 
            indicatorColor={color} 
          />
          
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionMetricCard;
