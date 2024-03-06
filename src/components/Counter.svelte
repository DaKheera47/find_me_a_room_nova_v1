<script lang="ts">
    let count = 0;

    function add(num: number) {
        count += num;
    }

    function subtract() {
        count -= 1;
    }
</script>

<div class="counter">
    <button on:click={subtract}>-</button>
    <pre>{count}</pre>
    <button on:click={() => add(5)}>+</button>
</div>
<div class="message">
    <slot />
</div>

<style>
    .counter {
        display: grid;
        font-size: 2em;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-top: 2em;
        place-items: center;
    }

    .message {
        text-align: center;
    }
</style>
