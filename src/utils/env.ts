require("dotenv").config();

export default {
  feedVal: parseInt(process.env.FEED_VAL, 10),
  feedInterval: parseInt(process.env.FEED_INTERVAL, 10),
  hungerStrikeVal: parseInt(process.env.HUNGER_STRIKE_VAL, 10),
  hungerStrikeCountdown: parseInt(
    process.env.HUNGER_STRIKE_COUNTDOWN_MILLISECONDS,
    10
  ),
  buildingFeedCountdown: parseInt(
    process.env.BUILDING_FEED_COUNTDOWN_MILLISECONDS,
    10
  ),
};
