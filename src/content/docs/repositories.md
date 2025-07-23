# Repositories

The purpose of this doc is to outline and define what a repository is along with its purpose.

## Repository

A repository or "repo" is simply a workspace within your organization that holds multiple files (e.g. modules).

**A repository has the following file types:**

- **system**: the core mechanics and officially licensed system. Each file has access to the systems within the repository.
- **core book**: the official game or "core rule book" of the franchise version
- **supplement**: supplemental game material like a "zine" or anything that adds new options
- **adventure**: a book devoted to an adventure for a game
- **canvas**: the ideation canvas for validating the idea before building
- **lore**: world building content for a game

## Version Control

The secondary purpose of a repo is to auto-version control the content within it. This is done by automatically creating a new branch for each change made to the repository and managing the game system version.

> Note: to learn more about version control, see [Version Control](/docs/version-control).

- **main**: the main "branch" of the game system. It is protected and cannot be deleted or modified by anyone except the app itself. This is the "official" content of the game system.
- **history**: (e.g., commits) a collection of changes made to the repository
- **work in progress**: (e.g., branches) a safe space outside of the main branch where changes are made to introduce new features.

### How it Works

Each time a change is made to the repository, a new branch is created and the game system version is incremented. This is done automatically by the app.

Once the change is "saved", the app will compare the new branch to the main branch and create a new commit. The commit will be added to the history branch.

If there is a change that introduces a conflict, the app will prompt the user to resolve the conflict. This is done to prevent any potential data loss or corruption.

### Why is this important?

Version control is important because it allows you to track changes to your game system over time. This is useful for debugging, testing, and collaborating with others.
