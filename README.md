# Solar Panel App

## Overview

The Solar Panel App was developed as part of **Chingu Voyage 52**.  This App enables users to book appointments seamlessly.  The app communicates with an API to handle the booking data and confirms success upon completing the booking process.

[Live LINK]:(https://tinyurl.com/yk3wubft).

## Tech Stack

- **FrontEnd:** Next.JS, Tailwindcss 
- **Backend:** Node.JS, Express.js, Prisma, MongoDB
- **Monorepo Management:** Lerna

## Meet Our Team

- **Kristen Boraca** - UI / UX Designer 
[GitHub](https://github.com/khb2me/chingu_group20.git) / [LinkedIn](https://linkedin.com/in/liaccountname)
- **Gary Lei** - Frontend Developer
[GitHub](https://github.com/xsymmetry9/) / [LinkedIn](https://www.linkedin.com/in/gary-lei-b8b4a540)
- **Stephen Ho - Backend Developer**
[Github](https://github.com/swlho) / [LinkedIn](https://www.linkedin.com/in/swlho)
- **Azalya Rahmatika - Frontend Designer**
[Github](https://github.com/azalyarahmatika) / [LinkedIn](https://www.linkedin.com/in/azalyarahmatika/)
- Ryu - Frontend Designer

## Monorepo Architecture
This app uses a **monorepo structure** managed by [**Lerna**](https://lerna.js.org/docs/introduction)

### Getting started
To set up and run the project locally, follow these steps: 

```bash
# Install the depenencies for the project
npm install 

# Navigate to the backend package
cd packages/backend

# Generate prisma Client for database access 
npx prisma generate

# Navigate to the root folder
cd ../..

# Start the development server
npm run dev 
```
