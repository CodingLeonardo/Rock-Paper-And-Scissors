<script>
  import Item from "./Item.svelte";
</script>

<style>
  .Game {
    background: url("/images/bg-triangle.svg"),
      linear-gradient(0deg, hsl(237, 49%, 15%) 0%, hsl(214, 47%, 23%) 100%);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding: 1em;
    height: 100vh;
  }

  .Game h1,
  p {
    margin: 0;
  }

  .Game-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    border: 3px solid hsl(217, 16%, 45%);
    border-radius: 1em;
    padding: 1em;
    padding-left: 1.5em;
    margin-top: 1.6em;
  }

  .Game-title {
    color: white;
  }

  .Game-title p {
    font-size: 1.8em;
    line-height: 1em;
    text-transform: uppercase;
  }

  .Game-score {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    border-radius: 0.5em;
    padding: 1em 2.5em;
  }

  .Game-score p {
    color: hsl(229, 64%, 46%);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .Game-score h1 {
    color: hsl(217, 16%, 45%);
    line-height: 1em;
    font-size: 3.5em;
  }

  .Game-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
    margin: 0 auto;
    margin-top: 2.5em;
  }

  .Game-rules {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .Game-rules button {
    background: transparent;
    border: 2px solid hsl(217, 16%, 45%);
    padding: 0.5em 2em;
    text-transform: uppercase;
    color: white;
    border-radius: 0.5em;
    margin-bottom: 2em;
    margin-right: 2em;
    cursor: pointer;
    padding-top: 0.66em;
    transition: 0.8s;
  }
</style>

<div class="Game">
  <div class="Game-top">
    <div class="Game-title">
      <p>Rock</p>
      <p>Paper</p>
      <p>Scissors</p>
    </div>
    <div class="Game-score">
      <p>Score</p>
      <h1>12</h1>
    </div>
  </div>
  <div class="Game-content">
    <Item src="/images/icon-paper.svg" name="paper" />
    <Item src="/images/icon-scissors.svg" name="scissors" />
    <Item src="/images/icon-rock.svg" name="rock" />
  </div>
  <div class="Game-rules">
    <button>Rules</button>
  </div>
</div>
