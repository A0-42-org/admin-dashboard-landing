<script lang="ts">
const menuItems = [
{ icon: '📊', label: 'Dashboard', href: '/dashboard', active: true },
{ icon: '📈', label: 'Analytics', href: '/dashboard/analytics' },
{ icon: '👥', label: 'Users', href: '/dashboard/users' },
{ icon: '💰', label: 'Payments', href: '/dashboard/payments' },
{ icon: '⚙️', label: 'Settings', href: '/dashboard/settings' }
];
</script>

<aside class="w-64 bg-surface-50 border-r h-full flex flex-col">
<div class="p-6 border-b">
<h2 class="text-xl font-bold bg-gradient-to-r from-primary to-primary-60 bg-clip-text text-transparent">
AnalyticsPro
</h2>
</div>
<nav class="flex-1 p-4">
<ul class="space-y-2">
{#each menuItems as item}
<li>
<a href={item.href} class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors {item.active ? 'bg-primary text-primary-contrast-foreground' : 'hover:bg-surface-100 text-foreground/70 hover:text-foreground'}">
<span class="text-lg">{item.icon}</span>
<span class="font-medium">{item.label}</span>
</a>
</li>
{/each}
</ul>
</nav>
<div class="p-4 border-t">
<a href="/" class="flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-foreground transition-colors">
<span class="text-lg">🏠</span>
<span class="font-medium">Back to Home</span>
</a>
</div>
</aside>
