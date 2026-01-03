# RecruitPro (VentureMond) - Frontend Implementation Plan

## Goal
Complete the frontend logic and UI for the VentureMond Recruitment Platform to serve as a high-fidelity demo. The focus is on **mock functionality** without a backend.

## Status Overview
- [x] **Rebranding**: Updated Logos, Favicons, and "RecruitPro" text references to "VentureMond".
- [x] **Auth Flow**: Implemented dummy Login/Signup redirection.
- [x] **Dashboard Styling**: Fixed logo contrast on dark sidebars.

## Remaining Tasks

### 1. Job Seeker Features (Frontend Mock)
- [ ] **Profile Management**:
    - [ ] Create a static "Edit Profile" form with pre-filled mock data.
    - [ ] "Save" button should show a toast success message (no actual save).
    - [ ] Add Resume Upload UI (visual only, file picker + progress bar simulation).
- [ ] **Job Search**:
    - [ ] Populate "Find Jobs" page with a hardcoded list of diverse job cards.
    - [ ] Implement client-side filtering (by usage of React `useState` and `filter` on the mock list).
- [ ] **Applications**:
    - [ ] "Apply Now" button on job details triggers a modal.
    - [ ] Success state updates the button to "Applied".
    - [ ] "My Applications" page lists these "applied" jobs (using local state or just static list).

### 2. Employer Features (Frontend Mock)
- [ ] **Post a Job**:
    - [ ] Create a multi-step form for Job Details (Title, Description, Requirements, Salary).
    - [ ] "Post Job" action redirects to the Dashboard with a success toast.
- [ ] **Candidate Management**:
    - [ ] "Applicants" view showing a list of mock candidates.
    - [ ] Clicking a candidate shows a mock profile/resume view.
    - [ ] Actions: "Shortlist", "Reject", "Schedule Interview" (Update UI state only).

### 3. Admin Features (Frontend Mock)
- [ ] **User Management**: Table view of users with "Ban/Approve" buttons (UI toggles).
- [ ] **Job Moderation**: List of jobs pending approval.

## Technical Approach
- **Data**: Create a `src/data/mockData.ts` file to centralize all dummy jobs, users, and applications.
