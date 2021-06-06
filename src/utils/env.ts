require("dotenv").config();

export default {
  feedVal: parseInt(process.env.FEED_VAL, 10),
  farmFeedVal: parseInt(process.env.FARM_FEED_VAL, 10),
  hungerStrikeVal: parseInt(process.env.HUNGER_STRIKE_VAL, 10),
};
