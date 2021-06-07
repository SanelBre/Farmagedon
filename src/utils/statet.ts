type UUID = string;

const State: Record<UUID, ReturnType<typeof setInterval>> = {};

export default State;
