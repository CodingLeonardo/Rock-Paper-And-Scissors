const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/Rock-Paper-And-Scissors", // <-- replace yourproject with your repo name
  {
    branch: "gh-pages",
    repo: "https://github.com/CodingLeonardo/Rock-Paper-And-Scissors.git",
    user: {
      name: "Leonardo Rivero",
      email: "codingleonardo@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
