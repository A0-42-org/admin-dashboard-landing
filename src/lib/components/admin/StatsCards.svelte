<script lang="ts">
  interface StatCard {
    title: string;
    value: string;
    change: string;
    positive: boolean;
    icon: string;
  }
  
  const stats: StatCard[] = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      positive: true,
      icon: '💰'
    },
    {
      title: 'New Users',
      value: '+2,350',
      change: '+180.1% from last month',
      positive: true,
      icon: '👥'
    },
    {
      title: 'Active Sessions',
      value: '+573',
      change: '+201 from last month',
      positive: true,
      icon: '🎯'
    },
    {
      title: 'Conversion Rate',
      value: '+19%',
      change: '+4% from last month',
      positive: true,
      icon: '📈'
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {#each stats as stat}
    <div class="bg-white dark:bg-surface-800 rounded-lg shadow-sm p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="text-3xl">{stat.icon}</div>
        <div class="flex items-center space-x-1">
          <span class="text-sm {stat.positive ? 'text-green-500' : 'text-red-500'}">
            {stat.positive ? '↑' : '↓'}
          </span>
          <span class="text-sm text-surface-600 dark:text-surface-400">
            {stat.change}
          </span>
        </div>
      </div>
      
      <h3 class="text-lg font-semibold text-surface-900 dark:text-white mb-1">{stat.title}</h3>
      <p class="text-3xl font-bold text-surface-900 dark:text-white">{stat.value}</p>
    </div>
  {/each}
</div>
