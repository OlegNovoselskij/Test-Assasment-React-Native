## testTaskApp — React Native Demo (Hooks + Reusable UI)

### Download APK
- [Download debug APK](android/app/build/outputs/apk/debug/app-debug.apk)

### Get from GitHub and run fast
```bash
# clone (replace with your repo URL)
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# install deps
npm install
# or
yarn

# Prebuilt debug APK is already in repo:
# android/app/build/outputs/apk/debug/app-debug.apk
# Install it on device/emulator via ADB:
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

Notes:
- Enable Developer options + USB debugging on device.
- If ADB can't see device: `adb devices`, reconnect cable, or start emulator in Android Studio.

This is a concise React Native demo showcasing clean hooks and reusable UI components.

### Features
- Countdown timer (`useCountdown`) with start/pause/reset
- Debounced counter (`useDebounce`)
- Press-and-hold interaction (`usePressAndHold`)
- Reusable UI: `CardWrapper`, `SectionTitle`, `HelperText`, `Button`

### Tech stack
- React Native (TypeScript)
- Metro bundler

---

## Project structure
```
src/
  components/
    CountdownSection.tsx
    DebouncedCounterSection.tsx
    PressAndHoldSection.tsx
    ui/
      Button.tsx
      CardWrapper.tsx
      HelperText.tsx
      SectionTitle.tsx
  hooks/
    useCountdown.ts
    useDebounce.ts
    usePressAndHold.ts
```

---

## Prerequisites
- Node.js LTS and npm (or Yarn)
- JDK 17
- Android SDK + at least one Android Virtual Device (via Android Studio)

Follow the official RN setup: `https://reactnative.dev/docs/set-up-your-environment`.

---

