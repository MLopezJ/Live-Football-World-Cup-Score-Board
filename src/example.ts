import { Team, Tournament } from "./index";
import { printLiveScoreboard } from "./printLiveScoreboard";

// create tournament
const worldCup = new Tournament("Fifa World Cup 2024");
console.log(`-- Tournament ${worldCup.getName()}  --\n`);

/**
 * Create teams:
 *  - Mexico
 *  - Canada
 *  - Spain
 *  - Brazil
 *  - Germany
 *  - France
 *  - Uruguay
 *  - Italy
 *  - Argentina
 *  - Australia
 */
const MEX = new Team("MEX");
const CAN = new Team("CAN");
const ESP = new Team("ESP");
const BRA = new Team("BRA");
const DEU = new Team("DEU");
const FRA = new Team("FRA");
const URY = new Team("URY");
const ITA = new Team("ITA");
const ARG = new Team("ARG");
const AUS = new Team("AUS");

// Register teams in the tournament
worldCup
  .addTeam(MEX)
  .addTeam(CAN)
  .addTeam(ESP)
  .addTeam(BRA)
  .addTeam(DEU)
  .addTeam(FRA)
  .addTeam(URY)
  .addTeam(ITA)
  .addTeam(ARG)
  .addTeam(AUS);

console.log("-- starting matches   --\n");
/**
 * Matches:
 * - MEX vs CAN
 * - ESP vs BRA
 * - DEU vs FRA
 * - URY vs ITA
 * - ARG vs AUS
 */
worldCup
  .addMatch(MEX, CAN)
  .addMatch(ESP, BRA)
  .addMatch(DEU, FRA)
  .addMatch(URY, ITA)
  .addMatch(ARG, AUS);

printLiveScoreboard(worldCup.getLiveScoreboard());

// Update scores
worldCup.getMatch(MEX, CAN)?.setGoal(0, 5);
worldCup.getMatch(ESP, BRA)?.setGoal(10, 2);
worldCup.getMatch(DEU, FRA)?.setGoal(2, 2);
worldCup.getMatch(URY, ITA)?.setGoal(6, 6);
worldCup.getMatch(ARG, AUS)?.setGoal(3, 1);

console.log(
  "-- Scores are beign updated. Check src/example.ts to get more information --\n",
);

printLiveScoreboard(worldCup.getLiveScoreboard());

// end URY_ITA game
worldCup.finishMatch(URY, ITA);
console.log("-- Game URY vs ITA finished --\n");

printLiveScoreboard(worldCup.getLiveScoreboard());
