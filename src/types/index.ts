
export interface Team {
  id: number;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  winPercentage: number;
  recentForm: ('W' | 'L' | 'D')[];
}

export interface Player {
  id: number;
  name: string;
  team: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicketkeeper';
  image?: string;
  battingStats: {
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
    highScore: number;
  };
  bowlingStats?: {
    wickets: number;
    economy: number;
    average: number;
  };
}

export interface Match {
  id: number;
  team1: Team;
  team2: Team;
  venue: string;
  date: string;
  time: string;
  predictedWinner?: Team;
  winProbability?: {
    team1: number;
    team2: number;
  };
}

export interface PredictionMetric {
  name: string;
  value: number;
  color: string;
  description: string;
}
