<script>

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

  .Game-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.2em 2.2em;
  }

  .Game-item img {
    position: absolute;
    background: white;
    padding: 2.2em;
    border-radius: 50%;
    box-shadow: inset 0 0.2em 0 0.1em rgba(0, 0, 0, 0.2);
  }

  .Game-item::after {
    content: "";
    display: flex;
    background: linear-gradient(
      0deg,
      hsl(349, 71%, 52%) 0%,
      hsl(349, 70%, 56%) 100%
    );
    width: 10em;
    height: 10em;
    border-radius: 50%;
    box-shadow: inset 0 -0.1em 0 0.2em rgba(0, 0, 0, 0.3);
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
    <div class="Game-item">
      <img src="/images/icon-paper.svg" alt="" />
    </div>
    <div class="Game-item">
      <img src="/images/icon-scissors.svg" alt="" />
    </div>
    <div class="Game-item">
      <img src="/images/icon-rock.svg" alt="" />
    </div>
  </div>
  <div class="Game-rules">
    <button>Rules</button>
  </div>
</div>
