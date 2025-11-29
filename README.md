# React + TypeScript + Vite
for this project, vite, react typescript was used without css library

# Team Availability Dashboard

Created a for managing team availability in real-time.
### Architecture
npm run dev/yarn dev to start the app:

Single Page Application, no routing was don

App.tsx is the landing page

component folder contain:
filter bar ui: mapping through an array of all status to select,
sumaary tsx file: card ui holding the availiablity status count,
summary cars file: holding each status with the name and updated count,
TeamList file: ui, a grid mapping through the list of team
TaamMember card: this hold the ui and logic for the changes on the team

## Structure & Logic Decisions


- **Custom Hook (`useLocalStorage`)**: useLocalStorage is a hook with localStorage logic  (setItem and getItem with key-value pairing) which is use for reusable state persistence, its returning a state(storevalue) and a function (setValue)
- **TypeScript Types**: Strong typing for `TeamMember`: team data structure and `AvailabilityStatus`: an enum for status for ensuring type safety
- **Memoey Optimization**:in the App.tsx file fltering and summary calculations are memoized using useMemo to prevent unnecessary recalculations



### Rule Logic 
1. **Return Time Tracking**: Captured when user transitions from offline to available
2. **Task Completion Counter**: Increase in the team card when user transitions from busy to available

