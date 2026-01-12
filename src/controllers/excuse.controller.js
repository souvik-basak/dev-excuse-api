import { excuses } from "../data/excuses.js";

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getAllExcuses = [
  ...Object.values(excuses.levels).flat(),
  ...Object.values(excuses.categories).flat(),
];

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

  res.json({
    success: true,
    data: {
      excuse: getRandom(all),
    },
  });
};

export const getExcuseOfTheDay = (req, res) => {
  const all = [
    ...Object.values(excuses.levels).flat(),
    ...Object.values(excuses.categories).flat(),
  ];

  const today = new Date().toISOString().split("T")[0];

  const seed = today
    .replaceAll("-", "")
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  const index = seed % all.length;

  res.json({
    success: true,
    data: {
      excuse: all[index],
      date: today,
    },
  });
};

export const getMeta = (req, res) => {
  const levels = Object.keys(excuses.levels);
  const categories = Object.keys(excuses.categories);

  res.json({
    success: true,
    data: {
      levels,
      categories,
    },
  });
};
