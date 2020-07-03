<script>
  import Header from "./Header.svelte";
  import Table from "./Table.svelte";
  import Rules from "./Rules.svelte";
  import { score } from "../stores/storeGame.js";
</script>

<style>
  .Game {
    background: linear-gradient(
      0deg,
      hsl(237, 49%, 15%) 0%,
      hsl(214, 47%, 23%) 100%
    );
    padding: 1em;
    height: 100vh;
  }
</style>

<div class="Game">
  <Header score={$score} />
  <Table />
  <Rules />
  <div class="Game-rules" />
</div>
