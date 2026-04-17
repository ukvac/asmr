const SAVE_KEY = "softSortStudioSaveV2";
const ROOM_ORDER = ["desk", "vanity", "kitchen", "bedroom", "tea"];
const AMBIENT_LABELS = {
  rain: "Rain hush",
  night: "Night hum",
  ocean: "Ocean drift"
};

const ROOMS = {
  desk: {
    title: "Cozy Desk",
    taskHeading: "Cozy Desk Reset",
    tip: "A warm monitor glow and a clear desk feel best.",
    story: "Place the essentials where they belong, then wipe away the soft haze left on the desk surface.",
    bg: "desk",
    items: [
      { id: "desk-notebook", label: "Notebook", x: 30.5, y: 57.8, w: 13.2, h: 18.8, render: renderNotebook },
      { id: "desk-headphones", label: "Headphones", x: 54.4, y: 54.6, w: 13.8, h: 19.4, render: renderHeadphones },
      { id: "desk-pencilcup", label: "Pencil cup", x: 13.4, y: 49.8, w: 10.8, h: 21.8, render: renderPencilCup },
      { id: "desk-clock", label: "Clock", x: 71.2, y: 24.5, w: 10.4, h: 15.2, render: renderClock }
    ],
    dust: [
      { id: "desk-dust-left", label: "Wipe desk left", x: 20.8, y: 75.8, w: 18.8, h: 10.6 },
      { id: "desk-dust-right", label: "Wipe desk right", x: 51.6, y: 75.8, w: 20.6, h: 10.8 },
      { id: "desk-dust-screen", label: "Polish screen base", x: 39.6, y: 42.8, w: 18.2, h: 8.4 }
    ]
  },
  vanity: {
    title: "Quiet Vanity",
    taskHeading: "Vanity Shelf Ritual",
    tip: "Small glass bottles and folded textures make this room feel calm.",
    story: "Set each self-care item in place, then slowly polish the mirror and shelf until they feel clear again.",
    bg: "vanity",
    items: [
      { id: "vanity-serum", label: "Serum bottle", x: 45.4, y: 30.8, w: 8.4, h: 18.8, render: renderSerum },
      { id: "vanity-cream", label: "Cream jar", x: 56.8, y: 33.4, w: 10.6, h: 12.2, render: renderCreamJar },
      { id: "vanity-roller", label: "Jade roller", x: 24.2, y: 57.2, w: 14.8, h: 8.6, render: renderJadeRoller },
      { id: "vanity-towel", label: "Folded towel", x: 76.2, y: 60.2, w: 14.2, h: 10.4, render: renderTowel }
    ],
    dust: [
      { id: "vanity-dust-mirror", label: "Polish mirror", x: 12.4, y: 16.2, w: 23.4, h: 26.4 },
      { id: "vanity-dust-shelf", label: "Wipe shelf", x: 43.2, y: 31.8, w: 28.8, h: 9.8 },
      { id: "vanity-dust-sink", label: "Clear sink edge", x: 10.6, y: 69.4, w: 24.2, h: 9.6 }
    ]
  },
  kitchen: {
    title: "Warm Kitchen",
    taskHeading: "Kitchen Counter Reset",
    tip: "Gentle reflections and neat jars make the whole counter feel quieter.",
    story: "Sort the breakfast corner, line up the jars, and wipe away the powdery smudges from the worktop.",
    bg: "kitchen",
    items: [
      { id: "kitchen-tea", label: "Tea tin", x: 28.6, y: 54.8, w: 9.8, h: 18.8, render: () => renderJar("tea") },
      { id: "kitchen-sugar", label: "Sugar jar", x: 39.8, y: 54.8, w: 9.8, h: 18.8, render: () => renderJar("sugar") },
      { id: "kitchen-mug", label: "Stone mug", x: 52.6, y: 58.2, w: 10.2, h: 14.2, render: renderMug },
      { id: "kitchen-bowl", label: "Lemon bowl", x: 70.2, y: 61.6, w: 14.2, h: 11.4, render: renderBowl }
    ],
    dust: [
      { id: "kitchen-dust-counter", label: "Wipe counter", x: 25.4, y: 78.2, w: 21.2, h: 9.6 },
      { id: "kitchen-dust-jars", label: "Polish jars area", x: 46.8, y: 78.2, w: 18.2, h: 9.6 },
      { id: "kitchen-dust-board", label: "Wipe chopping board", x: 79.6, y: 56.4, w: 11.2, h: 19.6 }
    ]
  },
  bedroom: {
    title: "Soft Bedroom",
    taskHeading: "Night Room Tidy",
    tip: "Warm light, folded fabric, and a clear bedside corner feel especially gentle here.",
    story: "Place the nighttime comforts where they belong, then smooth and dust the places your hands naturally rest.",
    bg: "bedroom",
    items: [
      { id: "bedroom-book", label: "Bedside book", x: 69.6, y: 61.2, w: 11.2, h: 10.8, render: renderBookStack },
      { id: "bedroom-candle", label: "Candle", x: 76.2, y: 52.4, w: 8.4, h: 12.2, render: renderCandle },
      { id: "bedroom-cushion", label: "Round cushion", x: 24.4, y: 76.2, w: 15.8, h: 11.6, render: renderRoundCushion },
      { id: "bedroom-blanket", label: "Folded blanket", x: 47.6, y: 68.2, w: 21.6, h: 12.6, render: renderBlanket }
    ],
    dust: [
      { id: "bedroom-dust-headboard", label: "Dust headboard", x: 16.4, y: 52.8, w: 25.2, h: 8.4 },
      { id: "bedroom-dust-nightstand", label: "Wipe nightstand", x: 71.8, y: 69.2, w: 15.4, h: 8.8 },
      { id: "bedroom-dust-bededge", label: "Smooth bed edge", x: 41.8, y: 81.2, w: 24.6, h: 8.2 }
    ]
  },
  tea: {
    title: "Tea Corner",
    taskHeading: "Tea Corner Calm",
    tip: "A low table, steam-soft colors, and a quiet shelf make this the final exhale.",
    story: "Arrange the tea ritual pieces gently, then clear the table and shelf so the whole room settles.",
    bg: "tea",
    items: [
      { id: "tea-pot", label: "Teapot", x: 44.4, y: 68.4, w: 14.8, h: 12.4, render: renderTeapot },
      { id: "tea-tray", label: "Tea tray", x: 59.8, y: 66.8, w: 17.2, h: 10.4, render: renderTeaTray },
      { id: "tea-incense", label: "Incense", x: 80.4, y: 37.6, w: 10.6, h: 8.4, render: renderIncense },
      { id: "tea-sprayer", label: "Plant mister", x: 14.4, y: 66.2, w: 10.8, h: 15.2, render: renderSprayer }
    ],
    dust: [
      { id: "tea-dust-table", label: "Wipe tea table", x: 37.2, y: 75.2, w: 28.2, h: 8.8 },
      { id: "tea-dust-shelf", label: "Dust tea shelf", x: 78.4, y: 26.8, w: 12.6, h: 18.6 },
      { id: "tea-dust-window", label: "Clear window edge", x: 8.6, y: 18.6, w: 21.8, h: 11.2 }
    ]
  }
};

const DEFAULT_SAVE = {
  started: false,
  stars: 0,
  soundOn: true,
  ambientOn: true,
  ambientMode: "rain",
  currentRoom: ROOM_ORDER[0],
  rooms: Object.fromEntries(ROOM_ORDER.map(roomId => [roomId, {
    placed: [],
    cleaned: [],
    completed: false,
    awarded: false
  }]))
};

let state = loadSave();
let dragging = null;
let saveFlashTimer = null;
let audioCtx = null;
let masterGain = null;
let ambientGain = null;
let ambienceNodes = [];
let ambienceIntervals = [];
let ambienceRAF = null;
let oceanLfo = null;
let roomButtonCache = [];

const starsValue = document.getElementById("starsValue");
const roomsValue = document.getElementById("roomsValue");
const roomNameValue = document.getElementById("roomNameValue");
const taskHeading = document.getElementById("taskHeading");
const taskPill = document.getElementById("taskPill");
const roomStory = document.getElementById("roomStory");
const taskList = document.getElementById("taskList");
const progressBar = document.getElementById("progressBar");
const tray = document.getElementById("tray");
const dropzoneLayer = document.getElementById("dropzoneLayer");
const placedLayer = document.getElementById("placedLayer");
const dustLayer = document.getElementById("dustLayer");
const sparkleLayer = document.getElementById("sparkleLayer");
const sceneTitle = document.getElementById("sceneTitle");
const sceneTip = document.getElementById("sceneTip");
const ritualTitle = document.getElementById("ritualTitle");
const ritualCopy = document.getElementById("ritualCopy");
const menuOverlay = document.getElementById("menuOverlay");
const startBtn = document.getElementById("startBtn");
const newGameBtn = document.getElementById("newGameBtn");
const menuBtn = document.getElementById("menuBtn");
const muteBtn = document.getElementById("muteBtn");
const ambientToggleBtn = document.getElementById("ambientToggleBtn");
const resetBtn = document.getElementById("resetBtn");
const saveStatus = document.getElementById("saveStatus");
const taskTemplate = document.getElementById("taskTemplate");
const roomButtonTemplate = document.getElementById("roomButtonTemplate");
const roomNav = document.getElementById("roomNav");
const unlockLabel = document.getElementById("unlockLabel");
const menuProgressLabel = document.getElementById("menuProgressLabel");
const menuStars = document.getElementById("menuStars");
const menuRooms = document.getElementById("menuRooms");
const ambientButtons = [...document.querySelectorAll(".ambient-btn")];

bindEvents();
renderRoomButtons();
render();
updateMenuSummary();
if (state.started) hideMenu();
else showMenu();
document.body.dataset.ambient = state.ambientMode;

function bindEvents() {
  startBtn.addEventListener("click", () => {
    state.started = true;
    persist();
    hideMenu();
    ensureAudioReady();
    updateAudioState();
    toneUI(480, 0.05, "triangle", 0.032);
  });

  newGameBtn.addEventListener("click", () => {
    const shouldReset = state.started
      ? confirm("Start a brand new save? This clears your current room progress.")
      : true;
    if (!shouldReset) return;
    resetState();
    state.started = true;
    persist();
    hideMenu();
    render();
    updateMenuSummary();
    ensureAudioReady();
    updateAudioState();
    toneUI(420, 0.06, "sine", 0.03);
  });

  menuBtn.addEventListener("click", () => {
    showMenu();
    updateMenuSummary();
  });

  muteBtn.addEventListener("click", () => {
    state.soundOn = !state.soundOn;
    persist();
    updateAudioState();
    updateButtons();
  });

  ambientToggleBtn.addEventListener("click", () => {
    state.ambientOn = !state.ambientOn;
    persist();
    updateAudioState();
    updateButtons();
  });

  resetBtn.addEventListener("click", () => {
    if (!confirm("Reset your Soft Sort save?")) return;
    resetState();
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    render();
    updateMenuSummary();
    showMenu();
    stopAmbientMode();
    flashSaved("Save reset");
  });

  ambientButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      state.ambientMode = btn.dataset.ambientMode;
      document.body.dataset.ambient = state.ambientMode;
      persist();
      updateButtons();
      updateAudioState();
      toneUI(520, 0.04, "triangle", 0.028);
    });
  });

  window.addEventListener("pointermove", event => {
    if (!dragging) return;
    dragging.clone.style.left = `${event.clientX - dragging.offsetX}px`;
    dragging.clone.style.top = `${event.clientY - dragging.offsetY}px`;
    const zone = currentZoneForPoint(event.clientX, event.clientY, dragging.item.id);
    document.querySelectorAll(".dropzone").forEach(el => el.classList.remove("over"));
    if (zone) zone.classList.add("over");
  });

  window.addEventListener("pointerup", event => {
    if (!dragging) return;
    const zone = currentZoneForPoint(event.clientX, event.clientY, dragging.item.id);
    if (zone) placeItem(dragging.item.id);
    else toneUI(210, 0.04, "sine", 0.018);
    dragging.clone.remove();
    dragging = null;
    document.querySelectorAll(".dropzone").forEach(el => el.classList.remove("over"));
  });

  document.addEventListener("pointerdown", () => {
    if (!state.started) return;
    ensureAudioReady();
    updateAudioState();
  }, { once: true });
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return structuredClone(DEFAULT_SAVE);
    const parsed = JSON.parse(raw);
    const merged = deepMerge(structuredClone(DEFAULT_SAVE), parsed);
    if (!ROOM_ORDER.includes(merged.currentRoom)) merged.currentRoom = ROOM_ORDER[0];
    return merged;
  } catch {
    return structuredClone(DEFAULT_SAVE);
  }
}

function deepMerge(base, patch) {
  for (const key of Object.keys(patch || {})) {
    if (patch[key] && typeof patch[key] === "object" && !Array.isArray(patch[key]) && base[key]) {
      base[key] = deepMerge(base[key], patch[key]);
    } else {
      base[key] = patch[key];
    }
  }
  return base;
}

function resetState() {
  state = structuredClone(DEFAULT_SAVE);
  renderRoomButtons();
  updateButtons();
}

function persist() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  flashSaved("Saved");
}

function flashSaved(text) {
  saveStatus.textContent = text;
  saveStatus.classList.add("saved");
  clearTimeout(saveFlashTimer);
  saveFlashTimer = setTimeout(() => {
    saveStatus.textContent = "Saved";
    saveStatus.classList.add("saved");
  }, 1100);
}

function showMenu() {
  menuOverlay.classList.remove("hidden");
}

function hideMenu() {
  menuOverlay.classList.add("hidden");
}

function completedRoomCount() {
  return ROOM_ORDER.filter(roomId => state.rooms[roomId].completed).length;
}

function maxUnlockedIndex() {
  return Math.min(completedRoomCount(), ROOM_ORDER.length - 1);
}

function isRoomUnlocked(roomId) {
  return ROOM_ORDER.indexOf(roomId) <= maxUnlockedIndex();
}

function totalTaskCount(roomId) {
  const room = ROOMS[roomId];
  return room.items.length + room.dust.length;
}

function completedTaskCount(roomId) {
  const roomState = state.rooms[roomId];
  return roomState.placed.length + roomState.cleaned.length;
}

function render() {
  if (!isRoomUnlocked(state.currentRoom)) state.currentRoom = ROOM_ORDER[maxUnlockedIndex()];
  const room = ROOMS[state.currentRoom];
  const roomState = state.rooms[state.currentRoom];

  sceneTitle.textContent = room.title;
  sceneTip.textContent = room.tip;
  taskHeading.textContent = room.taskHeading;
  roomNameValue.textContent = room.title;
  starsValue.textContent = state.stars;
  roomsValue.textContent = `${completedRoomCount()} / ${ROOM_ORDER.length}`;
  roomStory.textContent = room.story;
  ritualTitle.textContent = room.taskHeading;
  ritualCopy.textContent = room.story;
  unlockLabel.textContent = `Room ${ROOM_ORDER.indexOf(state.currentRoom) + 1} of ${ROOM_ORDER.length}`;
  document.body.dataset.ambient = state.ambientMode;

  document.querySelectorAll("[data-room-bg]").forEach(bg => {
    bg.classList.toggle("active", bg.dataset.roomBg === room.bg);
  });

  renderTray(room, roomState);
  renderDropzones(room, roomState);
  renderPlaced(room, roomState);
  renderDust(room, roomState);
  renderTasks(room, roomState);
  renderRoomButtons();
  updateButtons();
  maybeShowCompletion(room, roomState);
  updateMenuSummary();
}

function renderTray(room, roomState) {
  tray.innerHTML = "";
  const remaining = room.items.filter(item => !roomState.placed.includes(item.id));
  if (!remaining.length) {
    tray.innerHTML = `<div class="soft-panel inventory-note" style="grid-column: 1 / -1;">Everything is placed. Just wipe the last soft patches and let the room settle.</div>`;
    return;
  }

  remaining.forEach(item => {
    const el = document.createElement("div");
    el.className = "tray-item";
    el.dataset.itemId = item.id;
    el.innerHTML = `${item.render()}<div class="item-label">${item.label}</div>`;
    makeDraggable(el, item);
    tray.appendChild(el);
  });
}

function renderDropzones(room, roomState) {
  dropzoneLayer.innerHTML = "";
  room.items.forEach(item => {
    const zone = document.createElement("div");
    zone.className = "dropzone";
    zone.dataset.itemId = item.id;
    zone.dataset.label = item.label;
    applyRect(zone, item);
    if (roomState.placed.includes(item.id)) zone.classList.add("done");
    dropzoneLayer.appendChild(zone);
  });
}

function renderPlaced(room, roomState) {
  placedLayer.innerHTML = "";
  room.items.filter(item => roomState.placed.includes(item.id)).forEach(item => {
    const placed = document.createElement("div");
    placed.className = "placed-item";
    applyRect(placed, item);
    placed.innerHTML = item.render(true);
    placedLayer.appendChild(placed);
  });
}

function renderDust(room, roomState) {
  dustLayer.innerHTML = "";
  room.dust.filter(d => !roomState.cleaned.includes(d.id)).forEach(d => {
    const dust = document.createElement("div");
    dust.className = "dust";
    dust.dataset.dustId = d.id;
    dust.dataset.label = d.label;
    applyRect(dust, d);
    enableWipe(dust, d);
    dustLayer.appendChild(dust);
  });
}

function renderTasks(room, roomState) {
  taskList.innerHTML = "";
  const tasks = [
    ...room.items.map(item => ({ label: `Place ${item.label}`, done: roomState.placed.includes(item.id) })),
    ...room.dust.map(d => ({ label: d.label, done: roomState.cleaned.includes(d.id) }))
  ];

  const doneCount = tasks.filter(task => task.done).length;
  taskPill.textContent = `${doneCount} / ${tasks.length} done`;
  progressBar.style.width = `${(doneCount / tasks.length) * 100}%`;

  tasks.forEach(task => {
    const frag = taskTemplate.content.cloneNode(true);
    const item = frag.querySelector(".task-item");
    const text = frag.querySelector(".task-text");
    text.textContent = task.label;
    if (task.done) item.classList.add("done");
    taskList.appendChild(frag);
  });
}

function renderRoomButtons() {
  roomNav.innerHTML = "";
  roomButtonCache = [];
  ROOM_ORDER.forEach((roomId, index) => {
    const room = ROOMS[roomId];
    const roomState = state.rooms[roomId];
    const frag = roomButtonTemplate.content.cloneNode(true);
    const btn = frag.querySelector(".room-card");
    const name = frag.querySelector(".room-card-name");
    const idx = frag.querySelector(".room-card-index");
    const meta = frag.querySelector(".room-card-meta");
    const unlocked = isRoomUnlocked(roomId);
    const complete = roomState.completed;

    name.textContent = room.title;
    idx.textContent = `0${index + 1}`;
    meta.textContent = complete
      ? `Complete · ${completedTaskCount(roomId)} / ${totalTaskCount(roomId)} tasks`
      : unlocked
        ? `${completedTaskCount(roomId)} / ${totalTaskCount(roomId)} tasks finished`
        : "Locked until the previous room is complete";

    btn.classList.toggle("active", roomId === state.currentRoom);
    btn.classList.toggle("locked", !unlocked);
    btn.disabled = !unlocked;
    btn.addEventListener("click", () => {
      state.currentRoom = roomId;
      persist();
      render();
      toneUI(480, 0.04, "triangle", 0.028);
    });
    roomNav.appendChild(frag);
    roomButtonCache.push(btn);
  });
}

function maybeShowCompletion(room, roomState) {
  document.querySelectorAll(".completion-banner").forEach(el => el.remove());
  const total = totalTaskCount(state.currentRoom);
  const done = completedTaskCount(state.currentRoom);
  if (done !== total) return;

  roomState.completed = true;
  if (!roomState.awarded) {
    roomState.awarded = true;
    state.stars += 5;
    persist();
    spawnSparkles(12);
    toneComplete();
  }

  const nextIndex = ROOM_ORDER.indexOf(state.currentRoom) + 1;
  const banner = document.createElement("div");
  banner.className = "completion-banner";
  banner.textContent = nextIndex < ROOM_ORDER.length
    ? `${room.title} complete · 5 stars earned · next room unlocked ✨`
    : "All rooms complete — the whole home feels still ✨";
  document.getElementById("scene").appendChild(banner);
  renderRoomButtons();
  updateMenuSummary();
}

function updateButtons() {
  muteBtn.textContent = `Sound: ${state.soundOn ? "On" : "Off"}`;
  muteBtn.setAttribute("aria-pressed", String(!state.soundOn));
  ambientToggleBtn.textContent = `Ambient: ${state.ambientOn ? "On" : "Off"}`;
  ambientToggleBtn.classList.toggle("active", state.ambientOn);
  ambientButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.ambientMode === state.ambientMode));
  startBtn.textContent = state.started ? "Continue session" : "Begin slow cleaning";
}

function updateMenuSummary() {
  const count = completedRoomCount();
  menuStars.textContent = state.stars;
  menuRooms.textContent = `${count} / ${ROOM_ORDER.length}`;
  menuProgressLabel.textContent = state.started
    ? `${ROOMS[state.currentRoom].title} · ${completedTaskCount(state.currentRoom)} / ${totalTaskCount(state.currentRoom)} tasks done`
    : "Fresh start";
}

function applyRect(element, rect) {
  element.style.left = `${rect.x}%`;
  element.style.top = `${rect.y}%`;
  element.style.width = `${rect.w}%`;
  element.style.height = `${rect.h}%`;
}

function makeDraggable(element, item) {
  element.addEventListener("pointerdown", event => {
    ensureAudioReady();
    const itemRect = element.getBoundingClientRect();
    const clone = element.cloneNode(true);
    clone.style.position = "fixed";
    clone.style.left = `${itemRect.left}px`;
    clone.style.top = `${itemRect.top}px`;
    clone.style.width = `${itemRect.width}px`;
    clone.style.height = `${itemRect.height}px`;
    clone.style.zIndex = 9999;
    clone.style.pointerEvents = "none";
    clone.style.opacity = "0.95";
    clone.style.transform = "scale(0.98)";
    document.body.appendChild(clone);
    dragging = {
      item,
      clone,
      offsetX: event.clientX - itemRect.left,
      offsetY: event.clientY - itemRect.top
    };
    highlightZone(item.id);
    tonePlaceGrab();
    element.setPointerCapture(event.pointerId);
  });
}

function currentZoneForPoint(clientX, clientY, itemId) {
  return [...document.querySelectorAll(`.dropzone[data-item-id="${itemId}"]:not(.done)`)].find(zone => {
    const rect = zone.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });
}

function highlightZone(itemId) {
  const zone = document.querySelector(`.dropzone[data-item-id="${itemId}"]`);
  if (!zone) return;
  zone.animate([
    { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(128,184,173,0)" },
    { transform: "scale(1.03)", boxShadow: "0 0 0 12px rgba(128,184,173,0.14)" },
    { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(128,184,173,0)" }
  ], { duration: 650, easing: "ease-out" });
}

function placeItem(itemId) {
  const roomState = state.rooms[state.currentRoom];
  if (roomState.placed.includes(itemId)) return;
  roomState.placed.push(itemId);
  persist();
  spawnSparkles(8);
  tonePlaced();
  render();
}

function enableWipe(element, dustConfig) {
  let progress = 0;
  let lastX = null;
  let active = false;

  const finish = () => {
    const roomState = state.rooms[state.currentRoom];
    if (roomState.cleaned.includes(dustConfig.id)) return;
    roomState.cleaned.push(dustConfig.id);
    element.remove();
    persist();
    spawnSparkles(10);
    toneWipeFinish();
    render();
  };

  const onMove = event => {
    if (!active) return;
    if (lastX === null) lastX = event.clientX;
    const delta = Math.abs(event.clientX - lastX) + 6;
    lastX = event.clientX;
    progress += delta;
    const opacity = Math.max(0.03, 1 - progress / 290);
    element.style.opacity = opacity;
    element.classList.add("cleaning");
    if (progress % 40 < 10) toneWipePass();
    if (progress > 250) finish();
  };

  element.addEventListener("pointerdown", event => {
    ensureAudioReady();
    active = true;
    lastX = event.clientX;
    element.setPointerCapture(event.pointerId);
    toneUI(280, 0.03, "triangle", 0.02);
  });
  element.addEventListener("pointermove", onMove);
  element.addEventListener("pointerup", () => {
    active = false;
    lastX = null;
    element.classList.remove("cleaning");
  });
  element.addEventListener("pointercancel", () => {
    active = false;
    lastX = null;
    element.classList.remove("cleaning");
  });
}

function spawnSparkles(count = 8) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${25 + Math.random() * 54}%`;
    sparkle.style.top = `${24 + Math.random() * 46}%`;
    sparkle.style.animationDelay = `${Math.random() * 0.12}s`;
    sparkleLayer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 950);
  }
}

function ensureAudioReady() {
  if (audioCtx) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    return;
  }
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    ambientGain = audioCtx.createGain();
    masterGain.gain.value = 0.6;
    ambientGain.gain.value = 0.08;
    ambientGain.connect(masterGain);
    masterGain.connect(audioCtx.destination);
  } catch {
    audioCtx = null;
  }
}

function updateAudioState() {
  if (!audioCtx || !masterGain || !ambientGain) return;
  const now = audioCtx.currentTime;
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.linearRampToValueAtTime(state.soundOn ? 0.68 : 0.0001, now + 0.08);
  if (!state.soundOn || !state.ambientOn || !state.started) {
    stopAmbientMode();
    return;
  }
  startAmbientMode(state.ambientMode);
}

function stopAmbientMode() {
  ambienceNodes.forEach(node => {
    try { node.stop?.(); } catch {}
    try { node.disconnect?.(); } catch {}
  });
  ambienceNodes = [];
  ambienceIntervals.forEach(id => clearInterval(id));
  ambienceIntervals = [];
  if (ambienceRAF) cancelAnimationFrame(ambienceRAF);
  ambienceRAF = null;
  if (oceanLfo) {
    try { oceanLfo.stop(); } catch {}
    oceanLfo = null;
  }
}

function startAmbientMode(mode) {
  if (!audioCtx || !ambientGain) return;
  stopAmbientMode();
  document.body.dataset.ambient = mode;
  const now = audioCtx.currentTime;
  ambientGain.gain.setTargetAtTime(mode === "night" ? 0.045 : 0.06, now, 0.2);

  if (mode === "rain") {
    const chain = createNoiseChain("brown", 0.05, 280, 1800);
    chain.source.connect(chain.input);
    chain.output.connect(ambientGain);
    chain.source.start();
    ambienceNodes.push(chain.source, chain.input, chain.lowpass, chain.output);
    const rainDrops = setInterval(() => {
      if (!state.soundOn || !state.ambientOn) return;
      playDrop();
    }, 1200 + Math.random() * 900);
    ambienceIntervals.push(rainDrops);
  }

  if (mode === "night") {
    const base1 = audioCtx.createOscillator();
    const base2 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    const gain2 = audioCtx.createGain();
    base1.type = "sine";
    base2.type = "triangle";
    base1.frequency.value = 148;
    base2.frequency.value = 222;
    gain1.gain.value = 0.012;
    gain2.gain.value = 0.006;
    base1.connect(gain1).connect(ambientGain);
    base2.connect(gain2).connect(ambientGain);
    base1.start();
    base2.start();
    ambienceNodes.push(base1, base2, gain1, gain2);
    const crickets = setInterval(() => {
      if (!state.soundOn || !state.ambientOn) return;
      playCricket();
    }, 1700 + Math.random() * 1800);
    ambienceIntervals.push(crickets);
  }

  if (mode === "ocean") {
    const chain = createNoiseChain("white", 0.028, 120, 700);
    chain.source.connect(chain.input);
    chain.output.connect(ambientGain);
    chain.source.start();
    const waveGain = audioCtx.createGain();
    waveGain.gain.value = 0.024;
    const waveOsc = audioCtx.createOscillator();
    waveOsc.type = "sine";
    waveOsc.frequency.value = 96;
    waveOsc.connect(waveGain).connect(ambientGain);
    waveOsc.start();
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 220;
    lfo.connect(lfoGain).connect(chain.lowpass.frequency);
    lfo.start();
    ambienceNodes.push(chain.source, chain.input, chain.lowpass, chain.output, waveGain, waveOsc, lfo, lfoGain);
    oceanLfo = lfo;
  }
}

function createNoiseChain(kind, gainValue, highpassFreq, lowpassFreq) {
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 2.4, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1;
    if (kind === "brown") {
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    } else {
      data[i] = white;
    }
  }
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  const highpass = audioCtx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.value = highpassFreq;
  const lowpass = audioCtx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = lowpassFreq;
  const gain = audioCtx.createGain();
  gain.gain.value = gainValue;
  highpass.connect(lowpass);
  lowpass.connect(gain);
  return { source, input: highpass, lowpass, output: gain };
}

function toneUI(freq, duration, type = "sine", gainValue = 0.02) {
  if (!state.soundOn) return;
  ensureAudioReady();
  if (!audioCtx || !masterGain) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain).connect(masterGain);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

function tonePlaceGrab() {
  toneUI(390, 0.03, "sine", 0.018);
}

function tonePlaced() {
  toneUI(510, 0.05, "triangle", 0.03);
  setTimeout(() => toneUI(640, 0.05, "sine", 0.018), 46);
}

function toneWipePass() {
  toneUI(240 + Math.random() * 80, 0.02, "triangle", 0.008);
}

function toneWipeFinish() {
  toneUI(710, 0.05, "sine", 0.018);
  setTimeout(() => toneUI(850, 0.04, "triangle", 0.012), 65);
}

function toneComplete() {
  toneUI(520, 0.08, "sine", 0.03);
  setTimeout(() => toneUI(660, 0.08, "triangle", 0.028), 90);
  setTimeout(() => toneUI(820, 0.12, "sine", 0.02), 170);
}

function playDrop() {
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(620 + Math.random() * 420, now);
  osc.frequency.exponentialRampToValueAtTime(220 + Math.random() * 140, now + 0.15);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.008, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  osc.connect(gain).connect(ambientGain);
  osc.start(now);
  osc.stop(now + 0.2);
}

function playCricket() {
  const now = audioCtx.currentTime;
  for (let i = 0; i < 2; i++) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1800 + Math.random() * 600, now + i * 0.06);
    gain.gain.setValueAtTime(0.0001, now + i * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.005, now + i * 0.07);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12);
    osc.connect(gain).connect(ambientGain);
    osc.start(now + i * 0.06);
    osc.stop(now + i * 0.14);
  }
}

function svg(inner, viewBox = "0 0 100 100") {
  return `<div class="icon-wrap"><svg viewBox="${viewBox}" aria-hidden="true" focusable="false">${inner}</svg></div>`;
}

function renderNotebook() {
  return svg(`
    <defs>
      <linearGradient id="nbg" x1="0" x2="1">
        <stop offset="0" stop-color="#f6ebe0"/>
        <stop offset="1" stop-color="#e7d0bc"/>
      </linearGradient>
    </defs>
    <rect x="16" y="12" rx="12" ry="12" width="68" height="76" fill="url(#nbg)"/>
    <rect x="22" y="12" rx="4" ry="4" width="7" height="76" fill="#8bb7af"/>
    <rect x="33" y="28" width="40" height="4" rx="2" fill="#c8b8ad" opacity=".75"/>
    <rect x="33" y="40" width="40" height="4" rx="2" fill="#c8b8ad" opacity=".75"/>
    <rect x="33" y="52" width="40" height="4" rx="2" fill="#c8b8ad" opacity=".75"/>
  `);
}

function renderHeadphones() {
  return svg(`
    <path d="M24 52 V40 a26 26 0 0 1 52 0 v12" fill="none" stroke="#78aa9f" stroke-width="8" stroke-linecap="round"/>
    <rect x="19" y="49" width="15" height="26" rx="8" fill="#efc7d6"/>
    <rect x="66" y="49" width="15" height="26" rx="8" fill="#efc7d6"/>
    <rect x="29" y="54" width="42" height="7" rx="3.5" fill="#86beb0" opacity=".55"/>
  `);
}

function renderPencilCup() {
  return svg(`
    <defs>
      <linearGradient id="cupg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#f8eff3"/>
        <stop offset="1" stop-color="#e3bdd0"/>
      </linearGradient>
    </defs>
    <rect x="24" y="28" width="52" height="54" rx="12" fill="url(#cupg)"/>
    <rect x="32" y="6" width="7" height="34" rx="3.5" fill="#9bc59b" transform="rotate(-10 35 24)"/>
    <rect x="46" y="8" width="7" height="32" rx="3.5" fill="#f1d499" transform="rotate(4 50 24)"/>
    <rect x="58" y="4" width="7" height="36" rx="3.5" fill="#93b8d8" transform="rotate(10 62 24)"/>
  `);
}

function renderClock() {
  return svg(`
    <circle cx="50" cy="50" r="32" fill="#fff7ea" stroke="#8bb8af" stroke-width="7"/>
    <line x1="50" y1="50" x2="50" y2="33" stroke="#78aa9f" stroke-width="5" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="64" y2="50" stroke="#efc7d6" stroke-width="5" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4" fill="#78aa9f"/>
  `);
}

function renderSerum() {
  return svg(`
    <rect x="32" y="12" width="36" height="14" rx="4" fill="#ffffff"/>
    <rect x="27" y="24" width="46" height="58" rx="10" fill="#cce2ec"/>
    <rect x="35" y="34" width="30" height="34" rx="8" fill="#ffffff" opacity=".42"/>
  `);
}

function renderCreamJar() {
  return svg(`
    <ellipse cx="50" cy="34" rx="26" ry="12" fill="#f8efe7"/>
    <rect x="24" y="34" width="52" height="28" rx="10" fill="#e6c8aa"/>
    <rect x="18" y="24" width="64" height="14" rx="7" fill="#ffffff"/>
  `);
}

function renderJadeRoller() {
  return svg(`
    <line x1="22" y1="50" x2="74" y2="50" stroke="#d3b292" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="24" cy="50" rx="10" ry="13" fill="#9fcdc0"/>
    <ellipse cx="76" cy="50" rx="12" ry="16" fill="#9fcdc0"/>
    <line x1="50" y1="36" x2="50" y2="64" stroke="#d3b292" stroke-width="4" stroke-linecap="round"/>
  `);
}

function renderTowel() {
  return svg(`
    <rect x="18" y="36" width="64" height="24" rx="10" fill="#f6dbe5"/>
    <rect x="24" y="28" width="52" height="20" rx="10" fill="#efc3d3"/>
    <rect x="28" y="20" width="44" height="18" rx="9" fill="#f8e8ef"/>
  `);
}

function renderJar(kind) {
  const fill = { tea: "#b6d9b8", sugar: "#f3ead5", coffee: "#c8a07d" }[kind] || "#d8d8d8";
  return svg(`
    <rect x="26" y="20" width="48" height="58" rx="12" fill="#f3f2ec"/>
    <rect x="26" y="50" width="48" height="28" rx="10" fill="${fill}"/>
    <rect x="22" y="14" width="56" height="12" rx="6" fill="#d5b089"/>
    <rect x="32" y="28" width="36" height="16" rx="6" fill="#ffffff" opacity=".36"/>
  `);
}

function renderMug() {
  return svg(`
    <rect x="24" y="26" width="42" height="42" rx="12" fill="#faf7f2"/>
    <path d="M66 34 h8 a10 10 0 0 1 0 20 h-8" fill="none" stroke="#d7c7b7" stroke-width="6" stroke-linecap="round"/>
    <path d="M36 18 c-2 -6 6 -8 4 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity=".65"/>
    <path d="M50 16 c-2 -6 6 -8 4 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity=".65"/>
  `, "0 0 100 90");
}

function renderBowl() {
  return svg(`
    <path d="M18 50 h64 a28 28 0 0 1 -64 0 z" fill="#f7eee5"/>
    <circle cx="34" cy="34" r="10" fill="#f3d864"/>
    <circle cx="50" cy="42" r="10" fill="#f3d864"/>
    <circle cx="66" cy="34" r="10" fill="#f3d864"/>
  `);
}

function renderBookStack() {
  return svg(`
    <rect x="20" y="56" width="60" height="12" rx="6" fill="#f1d3ae"/>
    <rect x="24" y="42" width="54" height="12" rx="6" fill="#f8f3ee"/>
    <rect x="18" y="28" width="58" height="12" rx="6" fill="#c6b6db"/>
  `);
}

function renderCandle() {
  return svg(`
    <rect x="34" y="26" width="32" height="40" rx="10" fill="#f8efe7"/>
    <path d="M50 18 c6 6 7 12 0 16 c-7 -4 -6 -10 0 -16z" fill="#ffd080"/>
    <rect x="48" y="20" width="4" height="10" rx="2" fill="#8d6e63"/>
  `);
}

function renderRoundCushion() {
  return svg(`
    <ellipse cx="50" cy="52" rx="30" ry="20" fill="#e1b4c3"/>
    <ellipse cx="50" cy="52" rx="18" ry="10" fill="#ebbfd0"/>
  `);
}

function renderBlanket() {
  return svg(`
    <rect x="14" y="26" width="72" height="46" rx="18" fill="#f2e1de"/>
    <path d="M28 30 v38" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity=".55"/>
    <path d="M40 30 v38" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity=".55"/>
    <path d="M52 30 v38" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity=".55"/>
  `);
}

function renderTeapot() {
  return svg(`
    <ellipse cx="46" cy="54" rx="24" ry="18" fill="#f4f1ea"/>
    <path d="M30 46 c-10 -4 -14 8 -6 12" fill="none" stroke="#d8cfc6" stroke-width="6" stroke-linecap="round"/>
    <path d="M62 50 c12 -6 18 -2 18 4 c0 8 -8 10 -16 8" fill="none" stroke="#d8cfc6" stroke-width="6" stroke-linecap="round"/>
    <path d="M38 34 c8 -10 22 -10 30 0" fill="none" stroke="#d8cfc6" stroke-width="6" stroke-linecap="round"/>
  `);
}

function renderTeaTray() {
  return svg(`
    <rect x="14" y="38" width="72" height="22" rx="11" fill="#d0a37d"/>
    <circle cx="34" cy="50" r="8" fill="#f8f7f2"/>
    <circle cx="50" cy="50" r="8" fill="#f8f7f2"/>
    <circle cx="66" cy="50" r="8" fill="#f8f7f2"/>
  `);
}

function renderIncense() {
  return svg(`
    <rect x="20" y="54" width="60" height="8" rx="4" fill="#b58862"/>
    <line x1="48" y1="18" x2="52" y2="54" stroke="#714c3e" stroke-width="3" stroke-linecap="round"/>
    <path d="M54 12 c8 6 8 12 2 16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity=".5"/>
  `);
}

function renderSprayer() {
  return svg(`
    <rect x="28" y="24" width="44" height="46" rx="12" fill="#d4eced"/>
    <rect x="34" y="16" width="20" height="12" rx="4" fill="#ffffff"/>
    <path d="M54 20 h16 v8 h-16" fill="#ffffff"/>
    <rect x="40" y="34" width="20" height="22" rx="8" fill="#ffffff" opacity=".4"/>
  `);
}
