# React + TypeScript + Vite
for this project, vite, react typescript was used without css library

# Team Availability Dashboard

Created a for managing team availability in real-time.
### Architecture
npm run dev/yarn dev to start the app:

Single Page Application, no routing was don

App.tsx is the landing page

component folder contain:
filter bar ui: mapping through an array of all status to select
sumaary tsx file: card ui holding the availiablity status count
summary cars file: holding each status with the name and updated count 

## Structure & Logic Decisions


- **Custom Hook (`useLocalStorage`)**: Abstracts localStorage logic for reusable state persistence
- **TypeScript Types**: Strong typing for `TeamMember` and `AvailabilityStatus` ensures type safety
- **useMemo Optimization**: Filtering and summary calculations are memoized to prevent unnecessary recalculations

### State Management
- Single source of truth: `teamMembers` array stored in localStorage
- Status cycling: available → busy → offline → available (via toggle button)
- Computed values: Filter and summary derived from main state

### Business Logic
1. **Return Time Tracking**: Captured when user transitions from offline to available
2. **Task Completion Counter**: Incremented when user transitions from busy to available
3. **Filtering**: Manual implementation using array filter method

### Design Decisions
- Clean, modern UI with gradient background
- Color-coded status indicators (green/amber/gray)
- Responsive grid layout for summary cards
- Persistent state across sessions