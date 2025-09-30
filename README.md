# Social Support Portal

## What is this project about?

This is a web application that helps people apply for social support services. Think of it as a digital form that guides users through the process of requesting help from social services.

The application makes it easy for people to:

- Fill out their personal information step by step
- Get AI-powered help when writing about their situation
- Switch between English and Arabic languages
- Use it on their phone or computer
- Get helpful notifications when things go right or wrong

It's built with modern web technologies to ensure it's fast, reliable, and user-friendly. The form is broken down into simple steps so users don't feel overwhelmed, and there's an AI assistant that can help them write better descriptions of their situation if they're having trouble finding the right words.

## Architecture and Project Flow

### How the project is organized

The code is structured in a logical way that makes it easy to understand and maintain:

```
src/
├── components/          # All the UI pieces
│   ├── common/         # Stuff used everywhere (navigation, footer)
│   ├── forms/          # The application form components
│   ├── landing/        # The homepage sections
│   └── pages/          # Different pages of the app
├── services/           # Handles talking to external APIs
├── localization/       # English and Arabic translations
├── hooks/              # Reusable logic for forms and other features
└── test/               # All the test files
```

### Technology choices and why

- **React + TypeScript**: Makes the code more reliable and easier to debug
- **Vite**: Super fast development and building
- **Tailwind CSS**: Makes styling consistent and responsive
- **React Hook Form**: Handles form validation and submission smoothly
- **Axios**: Manages API calls with proper error handling
- **Vitest**: Fast and reliable testing

### How data flows through the app

1. User fills out a form step
2. React Hook Form validates the data
3. When they submit, Axios sends it to the backend API
4. The app shows success/error messages
5. If successful, they get redirected to the home page

The whole process is designed to be smooth and give users clear feedback at every step.

## Getting Started

### Clone and run the project

1. **Get the code**

   ```bash
   git clone <your-repository-url>
   cd social-support-portal
   ```

2. **Install what you need**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root folder:

   ```env
   VITE_API_BASE_URL=http://open_api_endpoint/api
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Go to `http://localhost:5173` and you should see the app running!

### Running tests

The project has tests to make sure everything works correctly. Here's how to run them:

**Run all tests once:**

```bash
npm test -- --run
```

The tests check things like:

- Do all the components render properly?
- Do the links work when clicked?
- Do the forms validate correctly?
- Do error pages show up when something goes wrong?

### Other useful commands

```bash
npm run build        # Create production version
npm run preview      # See how the production version looks
npm run lint         # Check code quality
```

That's it! The project should be up and running. If you run into any issues, check that you have Node.js installed and that all the dependencies were installed correctly.

---

## Application Overview

### Description of Application

This application is a social support portal designed for people who need financial assistance. Applicants complete a guided form that collects their personal information, family and financial details, and a description of their situation. The portal also includes an AI assistant to help users clearly and respectfully describe their circumstances.

### Key Features

- **Responsive and mobile-friendly**: Optimized layouts across phones, tablets, and desktops
- **Clean, descriptive design**: Intuitive UI that reduces friction while filling forms
- **Theme support**: Light/dark modes for comfort and accessibility
- **Language support**: Full i18n with English and Arabic
- **AI Assist**: Context-aware helper to improve situation descriptions

---

## Architecture (Top Layer)

This high-level view illustrates the layered design and how responsibilities are separated across the application.

![Top Layer Architecture](https://i.postimg.cc/YLjVMDnk/Screenshot-2025-09-30-at-2-20-25-PM.png)

### Layers at a glance

- **Presentation (UI)**: React + shadcn/ui + Tailwind, routed views, modals, and form steps
- **State & Forms**: React Hook Form for validation and submission, local storage for draft persistence
- **Domain & i18n**: Centralized enums/constants, typed translations, label/value formatting
- **Services**: Axios client with interceptors, OpenAI integration with guardrails and classification
- **Error Handling**: ErrorBoundary with localized fallback and dynamic error routes

---

## Flow Architecture

This diagram highlights the essential routes and core components, and how data flows between them.

[Architecture-Diagram.png](https://postimg.cc/ZWKhMjmL)

Key points:

- Multi-step application form with clear progression and section review
- Centralized service layer for API access and AI calls
- Localization and theming applied as cross-cutting concerns
- Dynamic error pages (e.g., `/error/:status`) for a consistent failure experience

---

## Form Flow (Key Feature)

The following action diagram shows the detailed flow of the stepper-based application process and how data moves through each stage.

![Form Action Flow](https://i.postimg.cc/p9Y3ZFhh/Flow-doagram.png)

Highlights:

- Step-specific validation and smooth transitions
- Autosave/restore using local storage to prevent data loss
- Final review page with translated labels and formatted values
