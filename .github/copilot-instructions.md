# TDL (The Dung Life) - AI Coding Agent Instructions

## Project Overview

**TDL** is a Vue 3 + Vite-based idle/clicking game featuring:
- NFT integration with Web3 wallet support (MetaMask)
- Firebase authentication (email/Google) and data persistence
- Game mechanics: mining, hunting, exploration, production, crafting (NFTs)
- Referral system and marketplace functionality
- Multiple game modes with level progression and energy systems

**Key Architecture**: Single-page app with centralized Pinia-like store (`appStore.js`), modular utility functions, and Firebase Firestore as game data backend.

---

## Critical Architecture Patterns

### 1. State Management & User Persistence
- **Primary Store**: `src/store/appStore.js` - Reactive state via `reactive()`, no Pinia (custom reactive pattern)
- **User Storage Hierarchy**: 
  - Firebase Firestore (server, authoritative for game data)
  - `localStorage` (persistent client cache, preferred for users)
  - `sessionStorage` (temporary, fallback)
  - **Pattern**: Load from local storage first via `getCurrentUser()`, sync with Firebase async
- **Example**: User data at `currentUser` property includes wallet info, game progress, NFT inventory

### 2. Authentication Flow
- **Multi-auth Support**: Email/password + Google OAuth via Firebase Auth (`src/firebase/config.js`)
- **Wallet Integration**: MetaMask via ethers.js (`src/utils/wallet.js`)
- **Login Type Tracking**: Store maintains `loginType` ('email' | 'wallet') to handle different flows
- **Google Redirect Pattern**: `handleGoogleRedirect()` in `firebaseAuth.js` processes OAuth redirect results
- **Note**: Email login currently references "Kakao" legacy code; ignore or refactor

### 3. Game Data Structure
- **Flat Reactive State** in `appStore.js`:
  - Resources: `coins` (points/P), `totalCoin` (currency/C), `catFragments`
  - Cats by mode (4-slot arrays): `miningCats`, `huntingCats`, `explorationCats`, `productionCats`
  - Levels: `level` (user), `miningLevel`, `huntingLevel`, etc.
  - Inventory: dynamic array for items
- **Firebase Schema**: User docs at `/users/{userId}`, game stats in `gameData` field
- **Update Pattern**: Use `updateUserGameData()` to sync changes back to Firestore

### 4. Firebase Configuration
- **Config File**: `src/firebase/config.js` (477 lines, handles initialization + Firestore methods)
- **Environment Variables** (required in `.env`):
  ```
  VITE_FIREBASE_API_KEY
  VITE_FIREBASE_AUTH_DOMAIN
  VITE_FIREBASE_PROJECT_ID
  VITE_FIREBASE_STORAGE_BUCKET
  VITE_FIREBASE_MESSAGING_SENDER_ID
  VITE_FIREBASE_APP_ID
  ```
- **Init Validation**: Code checks for missing env vars and logs helpful errors; restart dev server if updating `.env`

### 5. Component & Page Structure
- **Layout**: `App.vue` (main entry, handles redirects + auth state), `Header.vue`, `Footer.vue`
- **Pages**: Located in `src/pages/` (19 Vue files)
  - Game modes: `MiningPage.vue`, `HuntingPage.vue`, `ExplorationPage.vue`, `ProductionPage.vue`, `FactoryPage.vue` (NFT crafting)
  - Social: `NFTPage.vue`, `ShopPage.vue`, `ExchangePage.vue`, `MarketplacePage.vue` (implied)
  - User: `UserProfilePage.vue`, `SettingsPage.vue`, `InventoryPage.vue`
- **Routing**: Vue Router with hash-based history (for GitHub Pages compatibility)

---

## Developer Workflows

### Build & Deployment
```bash
npm install          # Install dependencies (Node 20.19+ required)
npm run dev          # Start Vite dev server (hot reload)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run deploy       # Build + push to GitHub Pages branch
```

### Environment Setup
1. Create `.env` in project root (copy from README.md template)
2. Add Firebase credentials from Firebase Console
3. **Critical**: Restart dev server after `.env` changes
4. Dev mode loads `createTestAccount.js` utility for testing

### Testing Patterns
- Use `getCurrentUser()` + `localStorage`/`sessionStorage` to mock logged-in state
- `createTestAccount.js` utility available in dev mode for bootstrapping test data
- Check browser DevTools console for Firebase validation errors

---

## Project-Specific Conventions & Patterns

### Code Organization
- **Utilities** (`src/utils/`): Single-responsibility modules for specific domains
  - `wallet.js` - MetaMask integration (ethers.js)
  - `firebaseAuth.js` - Auth flows (email, Google redirect)
  - `userUtils.js` - User CRUD, localStorage sync
  - `energyUtils.js`, `nftLevelUtils.js`, `rarityUtils.js` - Game mechanics
  - `formatUtils.js` - Number/string formatting (e.g., `formatNumber()`)
  
- **Naming Convention**: 
  - Game resources use shorthand: `coins` (points), `totalCoin` (currency), `catFragments`
  - NFT rarity tiers (check `rarityUtils.js`): color-coded classification
  - Energy system (check `energyUtils.js`): regeneration-based action limiting

### Async Data Patterns
- **Firebase Operations**: Always wrapped in try-catch; errors logged to console
- **Wallet Calls**: Wrapped in error handling with user-friendly messages
- **Loading State**: `store.isLoading` flag controls UI blocking during operations
- **Redirect Handling**: `App.vue` checks for Google OAuth redirect result on mount

### Style & Layout
- **CSS Files**: `src/styles/` with `common.css`, `layout.css`, `main.css` (utility + global)
- **Responsive Design**: Mobile-first (inferred from game UI patterns)
- **Vue 3 Composition API**: `<script setup>` syntax used throughout

### Common Gotchas
1. **localStorage vs sessionStorage**: Use `localStorage` for persistent cross-tab data; `sessionStorage` as fallback
2. **Env Vars**: Only accessible via `import.meta.env.VITE_*` (Vite convention); restart dev server after changes
3. **Firebase Auth State**: Multiple auth checks in `App.vue`; order matters (Google redirect first)
4. **Wallet Connection**: MetaMask-specific; check for browser support before calling wallet functions
5. **Base Path**: Production build uses `/tdl/` base path for GitHub Pages; dev uses `./`

---

## Cross-Component Communication

- **Via Store (`appStore.js`)**: Read/write game state reactively; all game logic flows through store
- **Via Props/Emits**: Child pages accept game mode context (e.g., mining mode → mine NFTs)
- **Via Firebase**: Server-side truth for user data; async updates via `updateUserGameData()`
- **Via URL Router**: Navigation between pages preserves store state (no reset on route change)

---

## When Implementing Features

1. **New Game Mechanic**: Add to `appStore.js` state, create utility in `utils/`, connect in relevant page component
2. **New Auth Flow**: Update `firebaseAuth.js` (flows) + `App.vue` (init logic)
3. **New Page**: Create `.vue` in `pages/`, add route in `main.js`, link in `Header.vue`
4. **Firebase Schema Change**: Update `firebase/config.js` getter/setter functions, then sync `appStore.js`
5. **New Wallet Feature**: Extend `wallet.js`, test MetaMask provider availability, add error handling

---

## Key Files Reference
- **Entry**: `src/main.js` (routes), `src/App.vue` (auth/init), `src/firebase/config.js` (backend)
- **State**: `src/store/appStore.js` (game state + actions)
- **Game Modes**: `src/pages/{Mining,Hunting,Exploration,Production,Factory}Page.vue`
- **Web3**: `src/utils/wallet.js`, `src/utils/firebaseAuth.js`
