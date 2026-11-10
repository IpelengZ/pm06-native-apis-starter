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

    localStorage.setItem("labUserName", name);
    out.textContent = "Name saved: " + name;
});


// --- 5. WebSocket (echo server) ---
let ws;
document.getElementById("btn-ws-send")?.addEventListener("click", () => {
  const msg = document.getElementById("ws-message")?.value || "hello";
  const out = document.getElementById("ws-out");
  ws = new WebSocket("wss://ws.postman-echo.com/raw");

ws.onopen = () => {
    ws.send(msg);
    out.textContent = "Message sent: " + msg;
};

ws.onmessage = (event) => {
    out.textContent = "Server reply: " + event.data;
};

ws.onerror = () => {
    out.textContent = "WebSocket connection error";
};

ws.onclose = () => {
    console.log("WebSocket connection closed");
};
});

// --- 6. Web Worker ---
document.getElementById("btn-worker-run")?.addEventListener("click", () => {
    const out = document.getElementById("worker-out");
    out.textContent = "Worker: running…";

    const worker = new Worker("js/worker.js");

    worker.postMessage({ n: 10000000 });

    worker.onmessage = (event) => {
    out.textContent = "Worker result: " + event.data.sum;
};

    worker.onerror = (error) => {
        out.textContent = "Worker error: " + error.message;
    };
});
