<script>
  import Token from "./Token.svelte";
  import { score } from "../stores/storeGame.js";

  const elements = ["paper", "scissors", "rock"];

  // let score = 0;
  let results = "";
  let housePick = "default";
  let playing = false;
  let pick = "";

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        housePick = pick;
      }, 75);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
  }

  async function onClick(name) {
    playing = true;
    pick = name;
    const house = await launchHousePick();
    // console.log(house)
    // console.log('la casa eligió ', house)
    const resultsA = playWithIA(name, house);
    results = resultsA;
    if (results === "win") {
      score.update(score => score + 1);
    }
  }

  function playWithIA(pick, housePick) {
    if (housePick === pick) {
      return "draw";
    }
    if (pick === "paper") {
      if (housePick === "scissors") {
        return "lose";
      }
      if (housePick === "rock") {
        return "win";
      }
    }
    if (pick === "scissors") {
      if (housePick === "paper") {
        return "win";
      }
      if (housePick === "rock") {
        return "lose";
      }
    }
    if (pick === "rock") {
      if (housePick === "paper") {
        return "lose";
      }
      if (housePick === "scissors") {
        return "win";
      }
    }
  }
  function handleTryAgainClick() {
    playing = false;
    results = "";
  }
</script>

<style>
  .Table {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 20em);
    width: 100%;
  }
  .Table-not-game {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    grid-template-areas:
      "TopLeft TopRight"
      "bottom bottom";
    position: relative;
    margin: 2em 0px;
    margin: 0 auto;
    width: 60%;
    height: 90%;

    background: url("./images/bg-triangle.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60% 60%;
  }
  .Table-in-game-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 85%;
  }
  .Table-in-game-subgroup {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }
  .Table-in-game {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
  }
  .Table-in-game p {
    color: white;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 3em;
    letter-spacing: 0.1em;
    text-align: center;
  }
  .Table-results {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 3em;
  }
  .Table-results h2 {
    color: white;
    text-transform: uppercase;
    font-size: 4em;
    text-align: center;
  }
  .Table-results button {
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: hsl(229, 25%, 31%);
    text-transform: uppercase;
    background: white;
    padding: 0.9em 2.5em;
    border: none;
    outline: none;
    border-radius: 0.5em;
    cursor: pointer;
    margin-top: 1.2em;
  }

  @media screen and (max-width: 1440px) {
    .Table {
      height: calc(100vh - 14em);
    }
    .Table-not-game {
      width: 80%;
    }
  }

  @media screen and (max-width: 500px) {
    .Table {
      height: calc(100vh - 12em);
    }
    .Table-not-game {
      width: 90%;
      height: 70%;
      background-size: 80% 60%;
    }
  }

  @media screen and (max-width: 425px) {
    .Table-not-game {
      width: 90%;
      height: 70%;
      background-size: 80% 60%;
    }
    .Table-in-game-group {
      width: 100%;
    }
    .Table-in-game {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    .Table-in-game p {
      margin-bottom: 1.5em;
    }
    .Table-results {
      width: 100%;
      margin-top: 3em;
    }
    .Table-results h2 {
      font-size: 3.5em;
    }
  }

  @media screen and (max-width: 320px) {
    .Table-not-game {
      width: 100%;
    }
  }
</style>

<div class="Table">
  {#if !playing}
    <div class="Table-not-game">
      <Token name="paper" {onClick} />
      <Token name="scissors" {onClick} />
      <Token name="rock" {onClick} gridAreaBottom={true} />
    </div>
  {:else}
    <div class="Table-in-game-group">
      <div class="Table-in-game-subgroup">
        <div class="Table-in-game">
          <p>You Picked</p>
          <Token {playing} name={pick} isShadowAnimated={results === 'win'} />
        </div>
        <div class="Table-in-game">
          <p>The house Picked</p>
          <Token
            {playing}
            name={housePick}
            isShadowAnimated={results === 'lose'} />
        </div>
      </div>
      <div class="Table-results">
        {#if results}
          <h2>YOU {results}</h2>
          <button on:click={handleTryAgainClick}>Play Again</button>
        {/if}
      </div>
    </div>
  {/if}
</div>
