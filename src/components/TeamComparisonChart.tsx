
import { Team } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer, 
  Legend 
} from "recharts";

interface TeamComparisonChartProps {
  team1: Team;
  team2: Team;
}

const TeamComparisonChart = ({ team1, team2 }: TeamComparisonChartProps) => {
  // Mock data - in a real app, this would come from your API
  const data = [
    {
      attribute: "Batting",
      [team1.shortName]: 85,
      [team2.shortName]: 78
    },
    {
      attribute: "Bowling",
      [team1.shortName]: 72,
      [team2.shortName]: 83
    },
    {
      attribute: "Fielding",
      [team1.shortName]: 80,
      [team2.shortName]: 75
    },
    {
      attribute: "Power Play",
      [team1.shortName]: 88,
      [team2.shortName]: 80
    },
    {
      attribute: "Death Overs",
      [team1.shortName]: 75,
      [team2.shortName]: 85
    },
    {
      attribute: "Form",
      [team1.shortName]: 90,
      [team2.shortName]: 82
    },
  ];

  return (
    <Card className="shadow-md h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Team Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="attribute" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar
                name={team1.shortName}
                dataKey={team1.shortName}
                stroke={team1.primaryColor}
                fill={team1.primaryColor}
                fillOpacity={0.5}
              />
              <Radar
                name={team2.shortName}
                dataKey={team2.shortName}
                stroke={team2.primaryColor}
                fill={team2.primaryColor}
                fillOpacity={0.5}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamComparisonChart;
