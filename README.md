# EMB - Expo React Native App

A small Expo React Native app that uses `expo-maps` for displaying a map.

## Prerequisites

- Node.js and `npm`
- Java JDK and Android SDK (for running on Android emulators/devices)
- Android Studio (to create or run an emulator)

Make sure your Android emulator uses a Google Play system image (has Google Play services).

## Install

From the project root, run:

```bash
npm install
```

## Configure Google Maps API key

This project expects you to put your Google Maps API key in `app.json`. There is a placeholder value `{YOUR_API_KEY_HERE}` — replace that with your own API key.

Example `app.json` snippet (managed Expo workflow):

```json
{
  "expo": {
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_REAL_API_KEY_HERE"
        }
      }
    }
  }
}
```

Notes:
- Enable the **Maps SDK for Android** (Google Cloud Console) for your API key.
- You may need to enable billing on your Google Cloud project for Maps usage.
- If you restrict the API key, ensure the proper Android package name and SHA-1 are configured.

## Run on Android

Build and install the app on a connected device or emulator:

```bash
npx expo run:android
```

## Troubleshooting

- App crashes on launch after adding the map:
  - Confirm you replaced `{YOUR_API_KEY_HERE}` in `app.json` with a valid API key.
  - Make sure the emulator/device has Google Play services (use a Google Play image).
  - Check Android logs with: (Windows Terminal)

```bash
adb logcat *:E
```



