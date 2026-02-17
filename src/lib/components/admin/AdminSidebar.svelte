<script lang="ts">
  import { page } from '$app/stores';
  
  interface NavItem {
    label: string;
    href: string;
    icon: string;
  }
  
  const navItems: NavItem[] = [
    { label: 'Dashboard', href: '/admin', icon: '📊' },
    { label: 'Analytics', href: '/admin/analytics', icon: '📈' },
    { label: 'Users', href: '/admin/users', icon: '👥' },
    { label: 'Settings', href: '/admin/settings', icon: '⚙️' }
  ];
  
  const isActive = (href: string) => $page.url.pathname === href || ($page.url.pathname.startsWith(href) && href !== '/admin');
</script>

<aside class="bg-surface-900 dark:bg-surface-950 text-surface-300 w-64 min-h-screen flex flex-col fixed left-0 top-0">
  <div class="p-6 border-b border-surface-800">
    <a href="/" class="text-2xl font-bold text-white">AnalyticsPro</a>
  </div>
  
  <nav class="flex-1 p-4">
    <ul class="space-y-2">
      {#each navItems as item}
        <li>
          <a href={item.href} class:flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors {isActive(item.href) ? 'bg-primary-600 text-white' : 'hover:bg-surface-800'}>
            <span class="text-xl">{item.icon}</span>
            <span class="font-medium">{item.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  
  <div class="p-4 border-t border-surface-800">
    <a href="/" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-surface-800 transition-colors">
      <span class="text-xl">🏠</span>
      <span class="font-medium">Back to Site</span>
    </a>
  </div>
</aside>
