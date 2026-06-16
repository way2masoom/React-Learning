
// Simulate a slow component by blocking the main thread for a specified amount of time
const waitingForSomethig = (ms) => { 
    const start = Date.now();
    let now = start
    while (now - start < ms) {
        now = Date.now();
    }
}

export default function SlowComponent() {
    waitingForSomethig(5000);
    return null;
}