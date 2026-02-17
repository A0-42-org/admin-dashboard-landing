<script lang="ts">
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Dashboard', href: '/admin' }
  ];
</script>

<nav class="bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <a href="/" class="text-2xl font-bold text-primary-600">
          AnalyticsPro
        </a>
      </div>
      
      <div class="hidden md:flex items-center space-x-4">
        {#each navItems as item}
          <a href={item.href} class="text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            {item.label}
          </a>
        {/each}
        <a href="/admin" class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Get Started
        </a>
      </div>
    </div>
  </div>
</nav>
