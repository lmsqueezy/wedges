# Contributing to Wedges

👋 Hey there! We're thrilled that you're interested in contributing to Wedges. Before submitting your contribution, please take a moment to read through this guide.

## Repository Structure

Our repository is managed with [PNPM](https://pnpm.io/). Make sure you have PNPM installed to work with this repository.

It is structured as a [Turborepo](https://turbo.build/repo) monorepo and it contains two main directories:

1. **packages/wedges**:
   This is the heart of our project – the UI library itself. Here you'll find all the components, utilities, TailwindCSS plugin and core functionality of the Wedges UI library.

2. **apps/docs**:
   Contains the Next.js documentation site for the Wedges UI library. This is where we maintain the documentation, examples, and guides for using the library.

## Tooling and Technologies

In the Wedges project, we utilize a variety of tools to ensure code quality, consistency, and smooth development processes.

- **[Prettier](https://prettier.io/)**: for code formatting. Our codebase adheres to the configuration specified in `.prettierrc`.

- **[ESLint](https://eslint.org/)**: for code linting. Make sure to check and fix any linting issues before submitting your code.

- **[React Testing Library](https://testing-library.com/)**: for testing. We encourage writing tests for new features and bug fixes.

- **[Jest Framework](https://jestjs.io/)**: for running tests.

- **[husky](https://typicode.github.io/husky/#/)**: for Git hooks. It ensures that linters, and other checks are passed before commits and pushes.

- **[tsup](https://tsup.egoist.dev/)**: for bundling the library files. We bundle both ESM and CJS versions of the library.

- **[Changesets](https://github.com/atlassian/changesets)**: for changelog generation and release management.

## Commit Convention

Our project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

When preparing your commits for a Pull Request, ensure they adhere to our commit message format: `type(scope): description`. The `type` and `scope` help categorize the commit, making our history readable and organized.

### Types of Commits

Your commits should fall into one of the following categories:

- `feat` (or `feature`): Introduces new code or functionality to the project.

- `fix`: Addresses and resolves a bug. Linking to an issue if available is highly encouraged.

- `refactor`: Code changes that neither fix a bug nor add a feature, but improve the existing codebase.

- `docs`: Updates or additions to documentation, such as README files, usage guides, etc.

- `build`: Changes affecting the build system, including dependency updates and additions.

- `test`: Modifications involving tests, including adding new tests or refining existing ones.

- `ci`: Adjustments to our continuous integration setup, like GitHub Actions or other CI tools.

- `chore`: General maintenance and organizational tasks that don't fit other categories.

For example, a commit message might look like: `feat(components): introduce new Button styles`.

## Pull Request Guidelines

### Branch Workflow

- Develop in dedicated branches, not directly on the `main` branch.

- Use descriptive names for your branches.

### Checks and Tests

- Ensure GitHub Actions pass before submitting your PR. Run `pnpm lint` and `pnpm format` before pushing your branch.

- Ideally add tests for new features or bug fixes.

### Commits in PRs

- It's okay to have multiple small commits in your PR.

- We'll squash the commits when merging into `main`.

- Follow our [Commit Convention](#commit-convention).

### Adding New Features

- Provide tests for new features.

- Discuss new features in an issue or discussion topic before coding.

### Fixing Bugs

- Describe the bug in detail in your PR.

- Include steps to reproduce or a live demo if possible.

- Link the issue your PR fixes, using the format `fix #issue_number`.

Remember, clear and detailed PRs help us efficiently review and integrate your contributions!

### Updating Documentation

- For every code change, especially API modifications or new features, ensure corresponding updates in documentation.

- You'll find our documentation in the `apps/docs/public/docs` folder. We are using MDX format which allows us to embed JSX components within markdown.

- Wedges components are available to use in the mdx files.

## Creating a Pull Request (PR)

1. **Fork and Clone**: Begin by forking the main repository and cloning your fork.

2. **Branching**: Create a new branch off `main` using the format `[type/scope]`, like `feat/button-enhancement` or `docs/update-readme`. The `type` should align with conventional commit types.

3. **Development**: Make your changes and commit them adhering to the [commit guidelines](#commit-convention). Use `pnpm build` to test your changes.

4. **Document Changes**: Run `pnpm changeset` for a detailed change description. For minor updates (like CI changes), use `pnpm changeset add --empty`.

5. **Prepare for Submission**:

   - Use `pnpm dev` to start the development server
   - Use `pnpm build` to run tests and linters and to make sure your code builds without errors.
   - Ensure your Node version is 16 or higher.

### Submitting Your PR

6. **Final Steps**:

   - Ensure all tests pass and the package builds correctly.
   - Push your branch and open a PR to `main`.

### Available pnpm Commands

- `pnpm dev`: Starts the Next.js development server for the documentation site and tsup in development mode for the library.

- `pnpm build`: Creates production builds of the library and documentation site. It also runs linting checks.

- `pnpm lint`: Executes ESLint across the entire repository.

- `pnpm lint:fix`: Runs ESLint and fixes fixable issues throughout the repository.

- `pnpm format`: Executes Prettier for code formatting across the repository.

- `pnpm format:fix`: Runs Prettier and fixes format issues across the repository.

- `pnpm test`: Executes Jest tests across the repository.

- `pnpm clean`: Cleans the project by removing `dist`, `node_modules`, and other build directories.

- `pnpm changeset`: Manages changelog generation and release preparation.

## After Your Pull Request is Merged

Once your pull request is merged, it becomes a part of the Wedges project! We deeply appreciate your contributions and encourage you to keep participating. Feel free to tackle more issues or suggest new features.

Thank you for making Wedges better! 🎉
