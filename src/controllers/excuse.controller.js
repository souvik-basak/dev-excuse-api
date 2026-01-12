import { excuses } from "../data/excuses.js";

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getExcuse = (req, res) => {
  const { level, category } = req.query;

  if (level) {
    const data = excuses.levels[level];

    if (!data) {
      return res.status(400).json({
        success: false,
        error: `Invalid level. Allowed values: ${Object.keys(
          excuses.levels
        ).join(", ")}`,
      });
    }

    return res.json({
      success: true,
      data: {
        excuse: getRandom(data),
        level,
      },
    });
  }

  if (category) {
    const data = excuses.categories[category];

    if (!data) {
      return res.status(400).json({
        success: false,
        error: `Invalid category. Allowed values: ${Object.keys(
          excuses.categories
        ).join(", ")}`,
      });
    }

    return res.json({
      success: true,
      data: {
        excuse: getRandom(data),
        category,
      },
    });
  }

  const all = [
    ...Object.values(excuses.levels).flat(),
    ...Object.values(excuses.categories).flat(),
  ];

  res.json({
    success: true,
    data: {
      excuse: getRandom(all),
    },
  });
};
