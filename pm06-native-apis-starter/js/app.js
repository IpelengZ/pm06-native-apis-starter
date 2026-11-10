/**
 * PM-06 Native APIs Lab — complete each TODO, then screenshot each section.
 */

// --- 1. Geolocation ---
document.getElementById("btn-geolocation")?.addEventListener("click", () => {
  const out = document.getElementById("geo-out");
 navigator.geolocation.getCurrentPosition(
    (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        out.textContent = `Lat: ${lat}, Lng: ${lng}`;
    },
    (error) => {
        out.textContent = `Error: ${error.message}`;
    }
);
  out.textContent = "TODO: implement geolocation in app.js";
});

// --- 2. Drag and drop ---
const dropZone = document.getElementById("drop-zone");
const dropOut = document.getElementById("drop-out");

if (dropZone) {
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file) {
            dropOut.textContent = `File dropped: ${file.name}`;
        } else {
            const text = e.dataTransfer.getData("text");
            dropOut.textContent = `Text dropped: ${text}`;
        }
    });
}

// --- 3. Event handling (click, input, keydown) ---
const eventInput = document.getElementById("event-input");
const eventOut = document.getElementById("event-out");
const events = [];
function logEvent(label) {
  events.unshift(label);
  if (eventOut) eventOut.textContent = events.slice(0, 5).join(" | ");
}
if (eventInput) {
    eventInput.addEventListener("input", () => {
        logEvent("Input event: " + eventInput.value);
    });

    eventInput.addEventListener("keydown", (e) => {
        logEvent("Keydown event: " + e.key);
    });
}

// --- 4. localStorage ---
document.getElementById("btn-save-name")?.addEventListener("click", () => {
  const name = document.getElementById("storage-name")?.value || "";
  const out = document.getElementById("storage-out");
  // TODO: localStorage.setItem("labUserName", name) and update out
  out.textContent = "TODO: save and display name from localStorage";
});

// TODO: on page load, read localStorage.getItem("labUserName") into storage-out

// --- 5. WebSocket (echo server) ---
let ws;
document.getElementById("btn-ws-send")?.addEventListener("click", () => {
  const msg = document.getElementById("ws-message")?.value || "hello";
  const out = document.getElementById("ws-out");
  // TODO: ws = new WebSocket("wss://ws.postman-echo.com/raw"); send msg; show reply in out
  out.textContent = "TODO: WebSocket send/receive";
});

// --- 6. Web Worker ---
document.getElementById("btn-worker-run")?.addEventListener("click", () => {
  const out = document.getElementById("worker-out");
  out.textContent = "Worker: running…";
  // TODO: const worker = new Worker("js/worker.js"); postMessage({ n: 10000000 }); onmessage update out
  out.textContent = "TODO: implement Web Worker";
});
