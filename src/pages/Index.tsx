import { useState } from "react";
import { 
  Activity, 
  BarChart3, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  CircleDollarSign, 
  Clock, 
  TrendingUp, 
  Trophy,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import MatchPredictionCard from "@/components/MatchPredictionCard";
import StatsCard from "@/components/StatsCard";
import TeamComparisonChart from "@/components/TeamComparisonChart";
import PlayerPerformanceCard from "@/components/PlayerPerformanceCard";
import PredictionMetricCard from "@/components/PredictionMetricCard";

import { 
  upcomingMatches, 
  teams, 
  players,
  predictionMetrics
} from "../data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 cricket-bg">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">IPL 2023 Predictions</h1>
              <p className="text-gray-500 mt-1">Advanced match predictions powered by machine learning</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard 
              title="Upcoming Matches" 
              value="12" 
              description="Over the next 7 days" 
              icon={<Calendar className="h-5 w-5 text-blue-500" />}
            />
            <StatsCard 
              title="Overall Model Accuracy" 
              value="78.2%" 
              progress={78} 
              progressColor="#10B981"
              icon={<Activity className="h-5 w-5 text-green-500" />}
              trend={{ value: 2.3, isPositive: true }}
            />
            <StatsCard 
              title="Top Performing Team" 
              value="CSK" 
              description="Chennai Super Kings (4 match streak)"
              icon={<Trophy className="h-5 w-5 text-yellow-500" />}
            />
            <StatsCard 
              title="Top Batsman" 
              value="V. Kohli" 
              description="Average: 59.2 | Strike Rate: 143.6"
              icon={<TrendingUp className="h-5 w-5 text-purple-500" />}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-ipl-blue" />
              Upcoming Matches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingMatches.map((match) => (
                <MatchPredictionCard key={match.id} match={match} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-ipl-blue" />
                Match Analysis: {upcomingMatches[0].team1.shortName} vs {upcomingMatches[0].team2.shortName}
              </h2>
              <TeamComparisonChart 
                team1={upcomingMatches[0].team1} 
                team2={upcomingMatches[0].team2} 
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-ipl-blue" />
                Key Players
              </h2>
              <div className="space-y-4">
                <PlayerPerformanceCard player={players[0]} />
                <PlayerPerformanceCard player={players[1]} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Prediction Accuracy Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {predictionMetrics.map((metric, index) => (
                <PredictionMetricCard key={index} metric={metric} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              IPL Match Whisperer &copy; 2023 | Powered by advanced machine learning
            </p>
            <p className="text-xs text-gray-400 mt-1">
              This is a demonstration for Artizence Technical Assessment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
