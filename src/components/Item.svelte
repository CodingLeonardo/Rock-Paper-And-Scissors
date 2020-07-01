<script>
  export let src;
  export let name;
</script>

<style>
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

  .paper::after {
    background: linear-gradient(
      0deg,
      hsl(230, 89%, 62%) 0%,
      hsl(230, 89%, 65%) 100%
    );
  }

  .scissors::after {
    background: linear-gradient(
      0deg,
      hsl(39, 89%, 49%) 0%,
      hsl(40, 84%, 53%) 100%
    );
  }

  .rock::after {
    background: linear-gradient(
      0deg,
      hsl(349, 71%, 52%) 0%,
      hsl(349, 70%, 56%) 100%
    );
  }
</style>

<div class={`Game-item ${name}`}>
  <img {src} alt="" />
</div>
