<script lang="ts">
    export let listOfRooms: string[] = [];

    let selection = "CM034";
    async function onChange(event: Event) {
        const select = event.target as HTMLSelectElement;
        const selectedRoom = select.value;
        console.log(selectedRoom);
        selection = selectedRoom;
    }

    let data = "";

    async function getRoomData(roomName: string = "CM034") {
        const response = await fetch("http://127.0.0.1:3000/scrape-room", {
            method: "POST",
            headers: {
                // Include this header to indicate the type of content being sent
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                roomName: roomName,
            }),
        });

        data = await response.json();
    }
</script>

<div>
    <form
        on:submit={(e) => {
            e.preventDefault();
            getRoomData(selection);
        }}
    >
        <select
            name=""
            id=""
            bind:value={selection}
            on:change={onChange}
        >
            {#each listOfRooms as room}
                <option
                    value={room}
                    selected={room === selection}>{room}</option
                >
            {/each}
        </select>

        <button
            type="submit"
            class="border border-green-500 px-4 py-2 rounded hover:text-white hover:bg-green-500 transition text-green-500"
            >Get Room Data</button
        >
    </form>

    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
