
import { Match } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { format, parse } from "date-fns";

interface MatchPredictionCardProps {
  match: Match;
}

const MatchPredictionCard = ({ match }: MatchPredictionCardProps) => {
  const { team1, team2, venue, date, time, predictedWinner, winProbability } = match;

  // Format date
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  const formattedDate = format(parsedDate, "dd MMM yyyy");

  return (
    <Card className="overflow-hidden shadow-md transition-all hover:shadow-lg">
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary to-primary/80">
          <div className="text-sm text-white font-medium flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {formattedDate}
          </div>
          <div className="text-sm text-white font-medium flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {time} IST
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <div className="flex flex-col items-center mb-3 sm:mb-0">
              <div 
                className="h-12 w-12 rounded-full flex items-center justify-center mb-2" 
                style={{ backgroundColor: team1.primaryColor }}
              >
                <span className="text-white font-bold">{team1.shortName}</span>
              </div>
              <span className="font-semibold text-sm">{team1.name}</span>
            </div>

            <div className="text-center px-3">
              <div className="text-lg font-bold mb-1">VS</div>
              <div className="text-xs text-gray-500 flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {venue}
              </div>
            </div>

            <div className="flex flex-col items-center mt-3 sm:mt-0">
              <div 
                className="h-12 w-12 rounded-full flex items-center justify-center mb-2" 
                style={{ backgroundColor: team2.primaryColor }}
              >
                <span className="text-white font-bold">{team2.shortName}</span>
              </div>
              <span className="font-semibold text-sm">{team2.name}</span>
            </div>
          </div>

          {winProbability && (
            <div className="mt-6">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>{winProbability.team1}%</span>
                <span>Win Probability</span>
                <span>{winProbability.team2}%</span>
              </div>
              <div className="h-2 flex rounded-full overflow-hidden">
                <div 
                  className="transition-all" 
                  style={{ 
                    width: `${winProbability.team1}%`, 
                    backgroundColor: team1.primaryColor 
                  }}
                ></div>
                <div 
                  className="transition-all"
                  style={{ 
                    width: `${winProbability.team2}%`, 
                    backgroundColor: team2.primaryColor 
                  }}
                ></div>
              </div>
            </div>
          )}

          {predictedWinner && (
            <div className="mt-4 text-center">
              <div className="text-sm text-gray-600">Predicted Winner</div>
              <div className="font-bold text-lg">{predictedWinner.name}</div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default MatchPredictionCard;
