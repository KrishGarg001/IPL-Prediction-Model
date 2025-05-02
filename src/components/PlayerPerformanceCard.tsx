import { Player } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlayerPerformanceCardProps {
  player: Player;
}

const PlayerPerformanceCard = ({ player }: PlayerPerformanceCardProps) => {
  const { name, team, role, battingStats, bowlingStats } = player;

  return (
    <Card className="shadow-md overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 bg-gradient-to-br from-ipl-blue to-ipl-purple p-4 text-white">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
              <span className="text-ipl-blue font-bold text-lg">{name.charAt(0)}</span>
            </div>
            <h3 className="font-bold text-lg mb-1">{name}</h3>
            <div className="bg-white/20 rounded-full px-3 py-0.5 text-xs">{team}</div>
            <p className="mt-2 text-sm opacity-80">{role}</p>
          </div>
        </div>

        <div className="w-full sm:w-2/3">
          <Tabs defaultValue="batting" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="batting" className="flex-1">Batting</TabsTrigger>
              {bowlingStats && <TabsTrigger value="bowling" className="flex-1">Bowling</TabsTrigger>}
            </TabsList>
            <TabsContent value="batting" className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Matches</p>
                  <p className="text-lg font-bold">{battingStats.matches}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Runs</p>
                  <p className="text-lg font-bold">{battingStats.runs}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Average</p>
                  <p className="text-lg font-bold">{battingStats.average.toFixed(2)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Strike Rate</p>
                  <p className="text-lg font-bold">{battingStats.strikeRate.toFixed(2)}</p>
                </div>
              </div>
            </TabsContent>
            {bowlingStats && (
              <TabsContent value="bowling" className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Wickets</p>
                    <p className="text-lg font-bold">{bowlingStats.wickets}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Economy</p>
                    <p className="text-lg font-bold">{bowlingStats.economy.toFixed(2)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Average</p>
                    <p className="text-lg font-bold">{bowlingStats.average.toFixed(2)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Matches</p>
                    <p className="text-lg font-bold">{battingStats.matches}</p>
                  </div>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </Card>
  );
};

export default PlayerPerformanceCard;
