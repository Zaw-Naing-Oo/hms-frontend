## Hospital Engagement System

### Overview

The Hospital Engagement System provides a unified platform for hospitals to manage their operations efficiently. It includes features such as:

- **Landing Page:** Featuring a hero section, about us, how it works, blogs, and contact section.
- **Appointment Management:** Features to book appointments, view all appointments, filter appointments by doctor or date, and download appointment lists.
- **User Dashboards:** Separate dashboards for hospitals, patients, and admins to manage their respective data and activities.
- **Doctor Profiles:** Detailed profiles for doctors. Profiles can be shared on social media.
- **Blog Management:** Blogs can be posted by both admins and hospitals, with features to like, dislike, comment, and share.
- **Notice Management:** Admins can post notices directed to specific hospitals, patients, or all users, visible on their respective dashboards.
- **Filters and Search:** Advanced filtering options based on location, hospital name, specialities, and date to find doctors and appointments.
- **PDF Export:** Downloadable PDFs for patient and appointment details.

#### Prerequisites

- PNPM

#### Installation

1. Clone the repository:

```
git clone https://github.com/Zaw-Naing-Oo/hms-frontend.git
cd pc-hms-frontend
```

2. Install dependencies:

```
pnpm install
```

#### Running the Application

1. Create a `.env.local` file in the root directory of the project.
2. Add the following environment variables to `.env.local`:

```
VITE_BASE_URL=backend_url/api/v1
VITE_IMGBB_API_KEY=imgbb_api_key
```

3. Start the development server:

```
pnpm dev
```
