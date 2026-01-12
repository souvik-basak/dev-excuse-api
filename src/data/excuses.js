export const excuses = {
  levels: {
    junior: [
      "It worked in the tutorial",
      "I thought the deadline was tomorrow",
    ],
    mid: ["It works on my machine", "The issue is with the environment"],
    senior: ["That's a feature, not a bug", "We optimized for delivery speed"],
    classic: ["It works on my machine", "It passed all tests"],
  },

  categories: {
    debugging: [
      "The bug only happens in production",
      "I can’t reproduce it locally",
    ],
    deployment: ["CI/CD is acting weird", "The server needs a restart"],
  },
};
