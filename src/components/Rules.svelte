<script>
  let modalIsOpened = false;

  const handleClick = event => {
    modalIsOpened = !modalIsOpened;
  };
  const handleClickOverlay = event => {
    if (event.target.id === "overlay") {
      modalIsOpened = !modalIsOpened;
    }
  };
</script>

<style>
  .Rules-button {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .Rules-button button {
    background: transparent;
    border: 2px solid hsl(217, 16%, 45%);
    padding: 0.5em 2em;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    outline: none;
    border-radius: 0.5em;
    margin-bottom: 2em;
    margin-right: 2em;
    cursor: pointer;
    padding-top: 0.66em;
    transition: 0.8s;
  }

  .Rules-button button:hover {
    background: white;
    color: hsl(237, 49%, 15%);
  }
  .Rules-button button:active {
    transform: scale(0.8);
  }
  .Rules-modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: 3;
  }
  .Rules-modal {
    background: white;
    padding: 1.5em 2em;
    border-radius: 0.5em;
  }
  .Rules-modal > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;
  }
  .Rules-modal > div h1 {
    text-transform: uppercase;
    color: hsl(229, 25%, 31%);
  }
  .Rules-modal > div button {
    background: none;
    border: none;
    color: hsl(219, 32%, 86%);
    cursor: pointer;
    font-size: 1.5em;
    outline: none;
    transition: 0.5s;
  }
  .Rules-modal > div button:active {
    transform: scale(0.8);
  }
</style>

<div class="Rules">
  <div class="Rules-button">
    <button on:click={handleClick}>Rules</button>
  </div>
  {#if modalIsOpened}
    <div class="Rules-modal-overlay" id="overlay" on:click={handleClickOverlay}>
      <div class="Rules-modal">
        <div>
          <h1>Rules</h1>
          <button on:click={handleClick}>&#10006;</button>
        </div>
        <img src="./images/image-rules.svg" alt="" />
      </div>
    </div>
  {/if}
</div>
