// Dashboards have some sort of navigation that is shared across multiple pages. 
// In Next.js, you can use a special layout.tsx file to create UI that is shared between multiple pages. Let's create a layout for the dashboard pages!
// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called partial rendering which preserves client-side React state in the layout when transitioning between pages.

// One major benefit of layouts in Next.js is partial rendering, meaning:
// ✅ When you navigate between pages, only the page content updates.
// ✅ The layout remains the same and doesn’t re-render.
// ✅ This helps preserve state inside the layout (e.g., sidebar, navbar, or global UI state).

// 🎯 Benefits of Partial Rendering
// 1️⃣ Faster navigation (only re-renders the page content).
// 2️⃣ Better user experience (no flickering of layout components).
// 3️⃣ State preservation (e.g., if you have a search bar or sidebar, it stays open).

// That's right, the layout file is the best way to create a shared layout that all pages in your application can use.

import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}