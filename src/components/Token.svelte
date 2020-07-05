<script>
  export let name;
  export let onClick;
  export let playing;
  export let isShadowAnimated;
  export let gridAreaBottom;

  const handleClick = event => {
    if (onClick) {
      onClick(name);
    }
  };
</script>

<style>
  .Token {
    width: 12em;
    height: 12em;
    padding: 1.2em;
    background: red;
    border-radius: 50%;
    display: flex;
    box-shadow: inset 0 -0.4em 0 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: 0.2s;
  }

  .Token > div {
    background: white;
    box-shadow: inset 0 0.4em 0 rgba(0, 0, 0, 0.2);
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Token img {
    width: 50%;
  }

  .Token:active {
    transform: scale(0.8);
  }

  .playing {
    width: 15em;
    height: 15em;
    padding: 1.8em;
    box-shadow: inset 0 -0.8em 0 0 rgba(0, 0, 0, 0.3);
  }

  .playing > div {
    box-shadow: inset 0 0.6em 0 rgba(0, 0, 0, 0.2);
  }
  .paper {
    background: linear-gradient(
      0deg,
      hsl(230, 89%, 62%) 0%,
      hsl(230, 89%, 65%) 100%
    );
  }

  .scissors {
    background: linear-gradient(
      0deg,
      hsl(39, 89%, 49%) 0%,
      hsl(40, 84%, 53%) 100%
    );
  }

  .rock {
    background: linear-gradient(
      0deg,
      hsl(349, 71%, 52%) 0%,
      hsl(349, 70%, 56%) 100%
    );
  }
  .gridAreaBottom {
    grid-area: bottom;
  }

  .isShadowAnimated {
    animation: 1s ease forwards ShadowAnimate;
  }

  @keyframes ShadowAnimate {
    0% {
    }
    100% {
      box-shadow: rgba(255, 255, 255, 0.04) 0px 0px 0px 40px,
        rgba(255, 255, 255, 0.04) 0px 0px 0px 80px,
        rgba(255, 255, 255, 0.02) 0px 0px 0px 120px;
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 1440px) {
    .Token {
      width: 15em;
      height: 15em;
      padding: 1.5em;
    }
  }
  @media screen and (max-width: 1024px) {
    .Token {
      width: 11em;
      height: 11em;
      padding: 1.2em;
    }
  }
  @media screen and (max-width: 768px) {
    .Token {
      width: 10em;
      height: 10em;
      padding: 1.1em;
    }
  }
  @media screen and (max-width: 500px) {
    .Token {
      width: 9em;
      height: 9em;
      padding: 1.1em;
    }
  }
  @media screen and (max-width: 425px) {
    .Token {
      width: 8em;
      height: 8em;
      padding: 0.9em;
    }
  }
</style>

<div
  class={`Token ${name}`}
  class:playing
  class:isShadowAnimated
  class:gridAreaBottom>
  <div on:click={handleClick}>
    <img src={`./images/icon-${name}.svg`} alt="" />
  </div>
</div>
