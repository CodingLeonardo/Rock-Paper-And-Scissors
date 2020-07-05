<script>
  import { score } from "../stores/storeGame.js";

  let score_value;

  const unsubscribe = score.subscribe(value => {
    score_value = value;
  });
</script>

<style>
  .Header h1,
  p {
    margin: 0;
  }

  .Header {
    width: 60%;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid hsl(217, 16%, 45%);
    margin: 0 auto;
    height: 9em;
    padding: 0 1em;
  }

  .Header-title {
    color: white;
  }

  .Header-title p {
    font-size: 1.8em;
    line-height: 1em;
    text-transform: uppercase;
  }

  .Header-score {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    border-radius: 0.5em;
    padding: 1em 2.5em;
  }

  .Header-score p {
    color: hsl(229, 64%, 46%);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .Header-score h1 {
    color: hsl(217, 16%, 45%);
    line-height: 1em;
    font-size: 3.5em;
  }

  @media screen and (max-width: 768px) {
    .Header {
      border-radius: 0.5em;
      height: 7em;
      width: 70%;
    }
    .Header-title p {
      font-size: 1.4em;
    }

    .Header-score {
      border-radius: 0.3em;
      padding: 0.5em 1.5em;
    }
    .Header-score p {
      color: hsl(229, 64%, 46%);
      text-transform: uppercase;
      margin-top: 0.2em;
      font-size: 0.8em;
      letter-spacing: 0.1em;
    }

    .Header-score h1 {
      color: hsl(217, 16%, 45%);
      line-height: 1em;
      font-size: 3.5em;
    }
  }
  @media screen and (max-width: 425px) {
    .Header {
      border-radius: 0.5em;
      height: 7em;
      width: 90%;
    }
    .Header-title p {
      font-size: 1.4em;
    }

    .Header-score {
      border-radius: 0.3em;
      padding: 0.5em 1.5em;
    }
    .Header-score p {
      color: hsl(229, 64%, 46%);
      text-transform: uppercase;
      margin-top: 0.2em;
      font-size: 0.8em;
      letter-spacing: 0.1em;
    }

    .Header-score h1 {
      color: hsl(217, 16%, 45%);
      line-height: 1em;
      font-size: 3.5em;
    }
  }
</style>

<div class="Header">
  <div class="Header-title">
    <p>Rock</p>
    <p>Paper</p>
    <p>Scissors</p>
  </div>
  <div class="Header-score">
    <p>Score</p>
    <h1>{score_value}</h1>
  </div>
</div>
