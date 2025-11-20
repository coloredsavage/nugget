# Nugget: Your Daily Learning Companion

## Core Concept
Nugget is a mobile app that transforms your personal content into daily bite-sized learning moments. It's like the Bible app's "verse of the day," but for any knowledge you want to learn - from books, articles, videos, podcasts, or any content you upload.

## The Big Idea
Instead of passively collecting content to read "someday," Nugget actively delivers small, digestible pieces to you every day at a time you choose. You upload your materials, and AI intelligently chunks them into meaningful "nuggets" that build on each other.

## How It Works
1. **Upload Your Content**: PDFs, ebooks, web articles, YouTube videos, audio files, Google Docs - basically anything you want to learn from
2. **AI Processing**: Nugget's AI (GPT-4o-mini) intelligently breaks content into bite-sized, coherent pieces
3. **Daily Delivery**: Get a notification at your chosen time with your daily nugget right in the notification bar
4. **Build Streaks**: Mark as read by opening the app, track your learning streak, earn badges
5. **Go Deeper**: Tap to expand for full context, related concepts, or save for later

## Key Features

### Core Experience
- Daily nugget notifications with instant preview
- Prominent streak counter (gamification)
- "Continue Learning" section showing your active content
- Quick mark-as-read interaction

### Content Management
- Library with Current Nuggets, Archived, and Completed sections
- Multiple content type support (PDF, audio, video, web, docs)
- Upload progress and "nuggeting" status indicators
- Curated content for instant value

### Discovery & Curation
- Pre-curated content across topics (business, psychology, tech, languages, personal development)
- Search by interest with topic filters
- Trending and new releases sections
- Removes initial friction for new users

### Personalization
- Custom notification time
- Multiple topic selection
- Randomized or scheduled topic delivery
- Streak tracking and milestone celebrations

### Social & Engagement
- Share your streak
- Invite friends
- Badges and achievements system
- Learning stats and insights

## Design Philosophy
- **Dark theme** with vibrant **orange** brand accent
- Clean, modern UI with serif typography for headers (literary feel)
- Card-based nugget display for focus
- Minimal, intuitive navigation
- Habit-forming interaction patterns

## Technical Approach

### Platform
- iOS-first mobile app (Expo/React Native)
- TypeScript for type safety
- Cross-platform foundation for future Android support

### Tech Stack
- **Framework**: Expo (React Native)
- **Navigation**: Expo Router (file-based)
- **Styling**: NativeWind (Tailwind CSS)
- **Storage**: AsyncStorage (local, MVP)
- **Backend**: Supabase (ready for future)
- **AI**: OpenAI GPT-4o-mini

### Processing Strategy (MVP)
- Local document processing and nugget storage
- Reduces server costs and enhances privacy
- App Store updates can include improved AI algorithms
- Users manually reprocess content to benefit from updates

## Business Model

### Freemium
- **Free**: Curated content + limited user uploads
- **Premium**: Unlimited uploads, advanced AI features, offline access, priority processing

## Target Use Cases

### Sweet Spots
- **Languages**: Daily vocabulary, grammar, cultural context
- **Design/Tech**: Principles, best practices, trends, tool tips
- **Personal Development**: Actionable insights and concepts
- **Growth/Business**: Frameworks, case studies, strategies

### Tricky Areas
- Fiction (relies on narrative flow, not extractable concepts)
- Very short content (might only generate 2-3 nuggets)

## Key Differentiators
1. **User-uploaded content focus** - Learn from YOUR materials, not just pre-curated content
2. **AI-powered intelligent chunking** - Context-aware, meaningful pieces that build on each other
3. **Habit-forming notification system** - Inspired by Bible app's proven engagement model
4. **Dual approach** - Combines user content with curated content for smooth onboarding

## User Journey Hooks
- **Immediate value**: Notification shows nugget directly, no app opening required initially
- **Milestone dopamine**: Badges, streak celebrations, achievement unlocks
- **Loss aversion**: Streak counter creates motivation to maintain habit
- **30-day habit formation**: Designed to get users to solid habit in first month

## File Handling
- File size limit: ~50MB (reasonable for most books/PDFs)
- Smart chunking for large files with progress indication
- Minimum content threshold: ~1,000+ words for meaningful nuggets
- Graceful error handling with suggestions for unsupported formats

## Development Status
Currently in **initial setup phase**, building the foundation with comprehensive UI/UX design completed. Strategy is design-first, then complete development implementation.

---

That's Nugget! A personalized learning habit machine that turns your reading backlog into daily growth.
