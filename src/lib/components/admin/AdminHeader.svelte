<script lang="ts">
  const currentDate = $derived(new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));
</script>

<header class="bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 fixed top-0 right-0 left-64 z-40 h-16">
  <div class="px-6 h-full flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold text-surface-900 dark:text-white">Dashboard</h1>
      <p class="text-sm text-surface-600 dark:text-surface-400">{currentDate}</p>
    </div>
    
    <div class="flex items-center space-x-4">
      <div class="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          class="bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      
      <div class="flex items-center space-x-3">
        <button class="relative p-2 text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <span class="sr-only">Notifications</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
            3
          </span>
        </button>
        
        <div class="flex items-center space-x-3 pl-4 border-l border-surface-200 dark:border-surface-700">
          <div class="text-right">
            <p class="text-sm font-medium text-surface-900 dark:text-white">John Doe</p>
            <p class="text-xs text-surface-600 dark:text-surface-400">Admin</p>
          </div>
          <div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
