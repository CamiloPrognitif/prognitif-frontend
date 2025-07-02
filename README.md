🩺 Prognitif – Frontend Assessment

🎯 Objective Rebuild the “Patient Monitoring” view of Prognitif in React Native (Expo), ensuring:

* Well-presented information
* Interactivity (edit health info, CRUD for events)
* Aesthetics and organization using Tailwind/shadcn
* Smooth UX (tabs, modal, real-time updates)
* Cross-platform: Android & iOS (Expo)

✅ Success Criteria

* Read and edit health information
* Navigate between health info sections (Diagnosis, Limitations…)
* Mocked vitals updating in real time
* Events list: view, add, edit, and mark as seen via modal
* Bottom navigation to switch views
* Deploy to a Git repository and produce an installable Expo build

🔗 Important Links

* 🐙 Source code: [https://github.com/R4D4M4NTHYS24/prognitif-ui](https://github.com/R4D4M4NTHYS24/prognitif-ui)
* 📱 Expo Build (Android & iOS): [https://expo.dev/accounts/r4d4m4nthys/projects/prognitif/builds/2468ce60-8ed0-46f1-a8d2-3786dec91bee](https://expo.dev/accounts/r4d4m4nthys/projects/prognitif/builds/2468ce60-8ed0-46f1-a8d2-3786dec91bee)

🖼️ Screenshots

**Recommended image sizes:**

* **Width:** 600px max (to fit documentation layout)
* **Height:** 400px max (to avoid excessive vertical space)
* **Format:** PNG or JPG at 72 DPI
* **Crop/Padding:** minimal whitespace; focus on UI area

Below are some relevant screens for reference:

Below are some relevant screens for reference:

![Overview Screen](./screenshots/overview.png)

![Edit Health Info Modal](./screenshots/edit-health-info.png)

![Add Event Modal](./screenshots/add-event.png)

🚀 Installation & Running

```bash
# 1. Clone the repo
git clone https://github.com/R4D4M4NTHYS24/prognitif-ui.git
cd prognitif-ui

# 2. Install dependencies
npm install

# 3. Start Metro + Expo Go
npx expo start
# → Ctrl+C to exit
```

📱 EAS Builds

```bash
# Preview profile (internal APK/IPA)
npx eas build --platform android --profile preview
npx eas build --platform ios --profile preview
```

Once ready, scan the QR code or download directly from the Expo link.

🛠 Architecture & Highlights

* Feature-driven structure: separation of UI, hooks, and services
* Services decouple AsyncStorage and vitals logic
* Types & Constants centralized in `/src/types` and `/src/constants`
* Path aliases (`@components`, `@hooks`, `@services`, …) for clean imports
* Tailwind + shadcn: UI built entirely with `twrnc` classes and design tokens in `tailwind.config.js`
* Snapshot tests for key components (EventList) and a basic test for the vitals hook

🏗️ Folder Structure

```
prognitif-ui/
├── assets/                   # icons, splash, adaptive icon, favicon…
├── src/
│   ├── components/           # stateless UI components
│   │   ├── Breadcrumb.tsx
│   │   ├── EventList.tsx
│   │   ├── HealthInfoModal.tsx
│   │   ├── ModalForm.tsx
│   │   ├── UserCard.tsx
│   │   ├── VitalsCard.tsx
│   │   └── VitalsSimulator.tsx
│   ├── constants/            # global constants
│   │   ├── healthInfo.ts
│   │   └── vitals.ts
│   ├── hooks/                # business logic
│   │   ├── useEventsCrud.ts
│   │   └── useMockVitals.ts
│   ├── screens/              # main screens
│   │   └── OverviewScreen.tsx
│   ├── services/             # persistence and simulation
│   │   ├── eventsService.ts
│   │   └── vitalsService.ts
│   ├── types/                # interfaces and barrels
│   │   ├── Event.ts
│   │   ├── Section.ts
│   │   ├── Vital.ts
│   │   └── index.ts
│   ├── utils/                # utilities (e.g., theme.ts)
│   └── App.tsx               # entrypoint
├── tailwind.config.js        # design tokens (colors, spacing…)
├── tsconfig.json             # path aliases (`@components`, `@hooks`…)
├── app.json                  # Expo configuration (icon, splash…)
└── eas.json                  # EAS build profiles
```
