# Soft Sort Studio — ASMR Cleaning & Sorting Game

A polished browser ASMR game built with plain HTML, CSS, and JavaScript for easy GitHub Pages hosting.

## What’s included
- Proper start / continue menu
- 5 rooms with hand-crafted scene visuals
- Drag-and-drop placement gameplay
- Swipe-to-clean dust / mist patches
- Sequential room unlocks
- Automatic save using `localStorage`
- Generated ambient audio modes: Rain, Night, Ocean
- Mobile-friendly responsive layout

## Files
- `index.html`
- `style.css`
- `script.js`
- `README.md`

## How saving works
The game automatically saves:
- current room
- placed items
- cleaned spots
- unlocked room progress
- star total
- sound + ambient settings

Save data is stored in the browser with `localStorage`, so it stays on the same browser/device.

## GitHub Pages hosting
1. Create a new GitHub repository.
2. Upload all files to the repository root.
3. Open **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the **main** branch and `/ (root)`.
6. Save.
7. GitHub will publish the game to your `github.io` URL.

## Notes
- Audio starts after the first click or tap, which is normal browser behavior.
- No server is required.
- Everything runs client-side, so it is ideal for GitHub Pages.

## Easy next upgrades
- custom art assets / illustrations
- more rooms and cosmetic unlocks
- particle trails for wiping
- a photo mode or zen mode
- optional background music layer
