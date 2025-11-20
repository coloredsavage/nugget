# Nugget iOS App - Detailed Setup Checklist

## 📦 Phase 1: Project Initialization
- [ ] Run `npx create-expo-app@latest nugget --template blank-typescript`
- [ ] Verify project creation and initial file structure
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Test initial app runs with `npx expo start`
- [ ] Initialize git repository with `git init`
- [ ] Add remote repository: `git remote add origin https://github.com/coloredsavage/nugget.git`
- [ ] Create initial `.gitignore` file
- [ ] Create initial commit
- [ ] Push to GitHub

## 🧭 Phase 2: Navigation Setup (Expo Router)
- [ ] Install Expo Router: `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`
- [ ] Update `package.json` with Expo Router entry point
- [ ] Update `app.json` for Expo Router support
- [ ] Create `app/_layout.tsx` (root layout)
- [ ] Create `app/(tabs)/_layout.tsx` (tab navigation layout)
- [ ] Create `app/(tabs)/index.tsx` (Home tab)
- [ ] Create `app/(tabs)/library.tsx` (Library tab)
- [ ] Create `app/(tabs)/discover.tsx` (Discover tab)
- [ ] Create `app/(tabs)/share.tsx` (Share tab)
- [ ] Create `app/(tabs)/more.tsx` (More tab)
- [ ] Test tab navigation works correctly

## 🎨 Phase 3: Styling Setup (NativeWind)
- [ ] Install NativeWind: `npm install nativewind tailwindcss react-native-reanimated`
- [ ] Initialize Tailwind: `npx tailwindcss init`
- [ ] Configure `tailwind.config.js` with dark theme and orange brand color
- [ ] Create `global.css` for Tailwind directives
- [ ] Update `babel.config.js` for NativeWind
- [ ] Update `metro.config.js` for CSS support
- [ ] Create `constants/Colors.ts` with brand colors (orange primary, dark theme)
- [ ] Create `constants/Typography.ts` for font configurations
- [ ] Test styling works with sample components

## 📱 Phase 4: Core Dependencies
- [ ] Install Supabase: `npm install @supabase/supabase-js`
- [ ] Install AsyncStorage: `npx expo install @react-native-async-storage/async-storage`
- [ ] Install Notifications: `npx expo install expo-notifications`
- [ ] Install Document Picker: `npx expo install expo-document-picker`
- [ ] Install File System: `npx expo install expo-file-system`
- [ ] Install date utilities: `npm install date-fns`
- [ ] Install vector icons: `npx expo install @expo/vector-icons`
- [ ] Create `.env.example` file for environment variables
- [ ] Create `.env` file (gitignored) for local API keys

## 🏗️ Phase 5: Project Structure
- [ ] Create `components/` directory
- [ ] Create `components/nuggets/` directory
- [ ] Create `components/streaks/` directory
- [ ] Create `components/ui/` directory
- [ ] Create `lib/` directory
- [ ] Create `lib/storage/` for AsyncStorage utilities
- [ ] Create `lib/ai/` for AI integration helpers
- [ ] Create `lib/processors/` for file processing
- [ ] Create `types/` directory
- [ ] Create `constants/` directory
- [ ] Create `hooks/` directory for custom React hooks
- [ ] Create `assets/` directory organization (fonts, images, icons)

## 📐 Phase 6: TypeScript Types & Interfaces
- [ ] Create `types/nugget.ts` (Nugget data model)
- [ ] Create `types/content.ts` (Content/upload data model)
- [ ] Create `types/user.ts` (User preferences, streak data)
- [ ] Create `types/badge.ts` (Achievement/badge data model)
- [ ] Create `types/navigation.ts` (Navigation type safety)
- [ ] Add proper exports in `types/index.ts`

## 💾 Phase 7: Local Storage Setup (MVP Strategy)
- [ ] Create `lib/storage/asyncStorage.ts` with core save/load functions
- [ ] Create `lib/storage/nuggetStorage.ts` for nugget CRUD operations
- [ ] Create `lib/storage/contentStorage.ts` for content library management
- [ ] Create `lib/storage/userStorage.ts` for preferences and streak data
- [ ] Create `lib/storage/initializeStorage.ts` for first-time setup
- [ ] Test storage functions work correctly

## 🎯 Phase 8: Core Components
- [ ] Create `components/ui/Card.tsx` (reusable card component)
- [ ] Create `components/ui/Button.tsx` (branded button component)
- [ ] Create `components/ui/Badge.tsx` (badge/tag component)
- [ ] Create `components/nuggets/NuggetCard.tsx` (daily nugget display)
- [ ] Create `components/nuggets/NuggetPreview.tsx` (notification preview)
- [ ] Create `components/streaks/StreakCounter.tsx` (prominent streak display)
- [ ] Create `components/streaks/StreakCalendar.tsx` (visual streak history)

## 📄 Phase 9: Screen Implementation - Home Tab
- [ ] Design Home screen layout structure
- [ ] Add StreakCounter component to Home
- [ ] Add daily Nugget card display
- [ ] Add "Continue Learning" section
- [ ] Add quick actions (mark as read, expand, save)
- [ ] Implement placeholder data for testing
- [ ] Style with dark theme and orange accents

## 📚 Phase 10: Screen Implementation - Library Tab
- [ ] Design Library screen layout
- [ ] Add tabs: Current Nuggets, Archived, Completed
- [ ] Create content list component
- [ ] Add upload progress indicators
- [ ] Add "Add Content" button with placeholder
- [ ] Implement placeholder content items
- [ ] Style consistently with Home

## 🔍 Phase 11: Screen Implementation - Discover Tab
- [ ] Design Discover screen layout
- [ ] Add search bar component
- [ ] Add topic filter chips
- [ ] Create curated content card component
- [ ] Add sections: Trending, New Releases, By Topic
- [ ] Implement placeholder curated content
- [ ] Style for browsing experience

## 🤝 Phase 12: Screen Implementation - Share Tab
- [ ] Design Share screen layout
- [ ] Add streak sharing preview
- [ ] Add invite friends section
- [ ] Add social sharing buttons (placeholder)
- [ ] Style for engagement

## ⚙️ Phase 13: Screen Implementation - More Tab
- [ ] Design More/Settings screen layout
- [ ] Add Account section
- [ ] Add Notifications settings (time picker placeholder)
- [ ] Add Preferences section (topics, randomization)
- [ ] Add Badges/Achievements view
- [ ] Add About/Help section
- [ ] Style settings interface

## 🔔 Phase 14: Notification Setup (Basic)
- [ ] Request notification permissions
- [ ] Create notification configuration file
- [ ] Set up basic notification scheduling structure
- [ ] Create notification handler functions
- [ ] Test notification permissions work

## 📱 Phase 15: EAS Configuration
- [ ] Install EAS CLI: `npm install -g eas-cli`
- [ ] Run `eas login` with your Expo account
- [ ] Run `eas build:configure` for iOS
- [ ] Update `eas.json` with iOS build settings
- [ ] Configure bundle identifier for iOS
- [ ] Set up development build configuration
- [ ] Test EAS configuration is valid

## 🧪 Phase 16: Testing & Refinement
- [ ] Test app runs on iOS simulator
- [ ] Test all tab navigation
- [ ] Test dark theme renders correctly
- [ ] Verify orange brand colors throughout
- [ ] Test placeholder data displays correctly
- [ ] Check TypeScript compilation (no errors)
- [ ] Verify no console warnings/errors
- [ ] Test on physical iOS device (if available)

## 📝 Phase 17: Documentation & Git
- [ ] Create `README.md` with project overview
- [ ] Document setup instructions
- [ ] Document project structure
- [ ] Document environment variables needed
- [ ] Create comprehensive git commit
- [ ] Push all changes to GitHub
- [ ] Create initial release tag (v0.1.0)

## ✅ Phase 18: Final Verification
- [ ] Verify all dependencies are in `package.json`
- [ ] Verify `.gitignore` excludes sensitive files
- [ ] Verify app builds without errors
- [ ] Verify all screens are accessible
- [ ] Verify styling is consistent
- [ ] Create final commit: "Initial Nugget app setup complete"
- [ ] Push to GitHub

---

**Total: ~100+ checkboxes** organized into 18 phases for complete base setup of your Nugget app!
