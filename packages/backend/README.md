# v52-tier2-team-20-backend

## Instructions to run the server locally:

1. Clone down the repo
2. Run ``npm install``
3. Create a .env file in the packages/backend folder and populate it with the following key/values:

``PORT=8000`` <br>
``DATABASE_URL="mongodb+srv://v52team20:**[PASSWORD]**@cluster0.en5nt.mongodb.net/**[DATABASE_NAME]**?&retryWrites=true&w=majority&appName=Cluster0"``

**For the password and database name, refer to the Discord chat or message me**

4. Run ``npx prisma generate`` (make sure you are in the packages/backend before running this cmd)
5. From the root folder, run ``npm run dev``

Visit http://localhost:8000/api/v1 for the list of available API endpoints