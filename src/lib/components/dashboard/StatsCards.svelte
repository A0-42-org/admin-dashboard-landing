<script lang="ts">
const stats = [
{ label: 'Total Revenue', value: '$54,239', change: '+12%', positive: true },
{ label: 'Active Users', value: '2,847', change: '+8%', positive: true },
{ label: 'Conversion Rate', value: '3.2%', change: '-2%', positive: false },
{ label: 'Bounce Rate', value: '42%', change: '+5%', positive: false }
];
</script>

<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
{#each stats as stat}
<div class="card p-6">
<div class="flex items-center justify-between mb-2">
<h3 class="text-foreground/70 font-medium">{stat.label}</h3>
<span class="text-sm font-medium {stat.positive ? 'text-success' : 'text-error'}">
{stat.positive ? '↑' : '↓'} {stat.change}
</span>
</div>
<p class="text-3xl font-bold">{stat.value}</p>
</div>
{/each}
</div>
