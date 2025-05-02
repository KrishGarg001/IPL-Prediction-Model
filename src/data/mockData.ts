
import { Team, Player, Match, PredictionMetric } from "../types";

export const teams: Team[] = [
  {
    id: 1,
    name: "Mumbai Indians",
    shortName: "MI",
    logo: "/teams/mi.png",
    primaryColor: "#004BA0",
    secondaryColor: "#D1AB3E",
    winPercentage: 58.4,
    recentForm: ["W", "L", "W", "W", "L"]
  },
  {
    id: 2,
    name: "Chennai Super Kings",
    shortName: "CSK",
    logo: "/teams/csk.png",
    primaryColor: "#F9CD05",
    secondaryColor: "#0081CF",
    winPercentage: 60.2,
    recentForm: ["W", "W", "W", "L", "W"]
  },
  {
    id: 3,
    name: "Royal Challengers Bangalore",
    shortName: "RCB",
    logo: "/teams/rcb.png",
    primaryColor: "#EC1C24",
    secondaryColor: "#000000",
    winPercentage: 49.8,
    recentForm: ["L", "W", "L", "W", "L"]
  },
  {
    id: 4,
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    logo: "/teams/kkr.png",
    primaryColor: "#3A225D",
    secondaryColor: "#D5AF3C",
    winPercentage: 52.5,
    recentForm: ["W", "W", "L", "L", "W"]
  },
  {
    id: 5,
    name: "Delhi Capitals",
    shortName: "DC",
    logo: "/teams/dc.png",
    primaryColor: "#0078BC",
    secondaryColor: "#EF1C25",
    winPercentage: 46.3,
    recentForm: ["L", "L", "W", "L", "W"]
  },
  {
    id: 6,
    name: "Rajasthan Royals",
    shortName: "RR",
    logo: "/teams/rr.png",
    primaryColor: "#EA1A85",
    secondaryColor: "#004BA0",
    winPercentage: 48.7,
    recentForm: ["W", "L", "L", "W", "W"]
  },
  {
    id: 7,
    name: "Punjab Kings",
    shortName: "PBKS",
    logo: "/teams/pbks.png",
    primaryColor: "#ED1B24",
    secondaryColor: "#A7A9AC",
    winPercentage: 47.1,
    recentForm: ["L", "W", "L", "L", "W"]
  },
  {
    id: 8,
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    logo: "/teams/srh.png",
    primaryColor: "#F7A721",
    secondaryColor: "#DC172D",
    winPercentage: 51.6,
    recentForm: ["W", "W", "L", "W", "W"]
  }
];

export const players: Player[] = [
  {
    id: 1,
    name: "Virat Kohli",
    team: "RCB",
    role: "Batsman",
    image: "/players/kohli.png",
    battingStats: {
      matches: 223,
      runs: 7263,
      average: 37.25,
      strikeRate: 130.02,
      highScore: 113
    }
  },
  {
    id: 2,
    name: "Jasprit Bumrah",
    team: "MI",
    role: "Bowler",
    image: "/players/bumrah.png",
    battingStats: {
      matches: 120,
      runs: 56,
      average: 4.0,
      strikeRate: 84.85,
      highScore: 10
    },
    bowlingStats: {
      wickets: 145,
      economy: 7.39,
      average: 23.31
    }
  },
  {
    id: 3,
    name: "MS Dhoni",
    team: "CSK",
    role: "Wicketkeeper",
    image: "/players/dhoni.png",
    battingStats: {
      matches: 234,
      runs: 5082,
      average: 39.09,
      strikeRate: 135.20,
      highScore: 84
    }
  },
  {
    id: 4,
    name: "Ravindra Jadeja",
    team: "CSK",
    role: "All-rounder",
    image: "/players/jadeja.png",
    battingStats: {
      matches: 210,
      runs: 2692,
      average: 27.47,
      strikeRate: 127.71,
      highScore: 62
    },
    bowlingStats: {
      wickets: 152,
      economy: 7.61,
      average: 29.41
    }
  }
];

export const upcomingMatches: Match[] = [
  {
    id: 1,
    team1: teams[0], // MI
    team2: teams[1], // CSK
    venue: "Wankhede Stadium, Mumbai",
    date: "2023-04-10",
    time: "19:30",
    predictedWinner: teams[0],
    winProbability: {
      team1: 56,
      team2: 44
    }
  },
  {
    id: 2,
    team1: teams[2], // RCB
    team2: teams[3], // KKR
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    date: "2023-04-11",
    time: "19:30",
    predictedWinner: teams[3],
    winProbability: {
      team1: 48,
      team2: 52
    }
  },
  {
    id: 3,
    team1: teams[4], // DC
    team2: teams[5], // RR
    venue: "Arun Jaitley Stadium, Delhi",
    date: "2023-04-12",
    time: "15:30",
    predictedWinner: teams[5],
    winProbability: {
      team1: 42,
      team2: 58
    }
  },
  {
    id: 4,
    team1: teams[6], // PBKS
    team2: teams[7], // SRH
    venue: "Punjab Cricket Association Stadium, Mohali",
    date: "2023-04-13",
    time: "19:30",
    predictedWinner: teams[7],
    winProbability: {
      team1: 45,
      team2: 55
    }
  }
];

export const predictionMetrics: PredictionMetric[] = [
  {
    name: "Model Accuracy",
    value: 78,
    color: "#10B981",
    description: "Overall prediction accuracy for match winners"
  },
  {
    name: "Batting Performance",
    value: 82,
    color: "#3B82F6",
    description: "Accuracy in predicting team run rates"
  },
  {
    name: "Bowling Performance",
    value: 75,
    color: "#6366F1", 
    description: "Accuracy in predicting team wicket-taking ability"
  },
  {
    name: "Player Form",
    value: 71,
    color: "#8B5CF6",
    description: "Accuracy in predicting individual player performances"
  }
];
