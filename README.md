# ProseWrite Landing Page

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Structure

```
├── src/
│   ├── app/                 # Main application pages and layouts
│   │   ├── layout.tsx      # Root layout (common UI for all pages)
│   │   ├── page.tsx        # Homepage component
│   │   └── globals.css     # Global styles
│   │
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (buttons, inputs, etc.)
│   │   └── ...            # Feature-specific components
│   │
│   └── lib/               # Utility functions and shared logic
│
├── public/                # Static files (images, fonts, etc.)
└── ...config files       # Various configuration files
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Making Changes

### Pages and Routing

- Main page content is in `src/app/page.tsx`
- Add new pages by creating files in `src/app/` directory
  - Example: `src/app/about/page.tsx` creates `/about` route
- Shared layout elements are in `src/app/layout.tsx`

### Components

- Reusable UI components are in `src/components/`
  - Base UI components (buttons, inputs) in `src/components/ui/`
  - Feature components (header, sections) directly in `src/components/`
- Create new components here when building reusable UI elements

### Styling

- Uses Tailwind CSS for styling
- Global styles in `src/app/globals.css`
- Configure Tailwind in `tailwind.config.ts`
- Add custom styles to components using Tailwind classes

### Static Files

- Place images, fonts, and other static files in `public/` directory
- Reference them in code starting from the root:
  ```jsx
  <img src="/image.png" /> // For public/image.png
  ```

## Development Tips

- The site auto-updates as you edit files
- Use TypeScript for better type safety and IDE support
- Components are organized by feature/section
- Check the browser console for errors
- Use the Network tab to debug data fetching

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS

## Deployment

### Deploy to Azure Static Web Apps

1. Prerequisites:

   - Azure account
   - GitHub account
   - [Azure Static Web Apps CLI](https://learn.microsoft.com/azure/static-web-apps/get-started-cli?tabs=npm)

2. Build Configuration:

   - The project includes `staticwebapp.config.json` for Azure Static Web Apps configuration
   - Build output is configured for Next.js static export

3. Deployment Steps:

   ```bash
   # Build the project
   npm run build

   # Deploy using Azure CLI
   az staticwebapp create \
     --name <app-name> \
     --resource-group <resource-group> \
     --source <repository-url> \
     --branch main \
     --app-location "/" \
     --output-location ".next" \
     --login-with-github
   ```

4. Continuous Deployment:

   - Azure Static Web Apps automatically sets up GitHub Actions
   - Pushes to main branch trigger automatic deployments
   - Check `.github/workflows` for the deployment workflow

5. Custom Domain Setup:
   - Add custom domains through Azure Portal
   - Navigate to your Static Web App > Custom domains
   - Follow the DNS configuration instructions

For detailed instructions, visit [Azure Static Web Apps documentation](https://learn.microsoft.com/azure/static-web-apps/deploy-nextjs).
