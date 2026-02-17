<script lang="ts">
const user = {
name: 'John Doe',
avatar: 'JD',
email: 'john@example.com'
};
</script>

<header class="h-16 bg-surface-50 border-b flex items-center justify-between px-6">
<div class="flex items-center gap-4">
<button class="lg:hidden p-2 hover:bg-surface-100 rounded-lg">
<span class="text-lg">☰</span>
</button>
<h1 class="text-xl font-semibold">Dashboard</h1>
</div>
<div class="flex items-center gap-4">
<button class="p-2 hover:bg-surface-100 rounded-lg relative">
<span class="text-lg">🔔</span>
<span class="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<div class="flex items-center gap-3 pl-4 border-l">
<div class="text-right hidden sm:block">
<p class="text-sm font-medium">{user.name}</p>
<p class="text-xs text-foreground/70">{user.email}</p>
</div>
<div class="w-10 h-10 rounded-full bg-primary text-primary-contrast-foreground flex items-center justify-center font-semibold">
{user.avatar}
</div>
</div>
</div>
</header>
