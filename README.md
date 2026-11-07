# ClientLocker

A private file locker that lets each person at an accounting firm, and each of its clients, open only the files they are allowed to see.

**Live link:** https://clientlocker-ten.vercel.app

## Recordings

None yet. The first recording is due at M2.

## Test logins

None yet. Login is being built for M2. Made-up accounts only.

## What it does

The first page is online. These are the 5 things a user will be able to do:

1. Log in and land on the screen for their role: partner, staff, client, or auditor.
2. As staff, upload a PDF, JPG, or PNG for an assigned client, and open it through a 10-minute link.
3. As a partner, give or remove someone's access to a client, with removal working on their next request.
4. As a partner, read one log of every upload, open, blocked attempt, and access change.
5. As a client, log in with an email link, and see and open only their own files.

## The AI feature

Not built yet. This is the plan for M3:

- What it does: reads a new file's first page and suggests which open checklist item it fills. A person confirms it.
- Which free model it uses: not chosen yet.
- What happens if the AI service is not available: the file stays saved, and the person picks the checklist item by hand.

## My stack

- **Next.js with TypeScript:** one project for the pages and the server endpoints.
- **Vercel:** free hosting.
- **GitHub Actions:** builds the project and scans for leaked keys with gitleaks on every push.
- **Claude Code:** AI tool used to write code.

The database, login, file storage, and email services will be chosen for M2 and listed here.

## Main design choices

The tables will be built for M2, starting from the brief: firms, people, clients, client_access, files, checklist_items, download_links, and activity_log.

## How to run it on your computer

```
npm install
npm run dev
```

It needs no settings yet. **Never put a real key or password in this file.**

## How to run the tests

```
No tests yet. They are due at M3.
```

## Made-up data

There is no sample data yet. All future data will be made up, with no real people or customers.

## What works

- Fully working: the first page, and the automatic check.
- Partly done: nothing yet.
- Skipped: nothing yet.

## What I would do differently with more time

- To be filled in at M4.
