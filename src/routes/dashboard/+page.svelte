<script lang="ts">
import AdminSidebar from '$lib/components/dashboard/AdminSidebar.svelte';
import AdminHeader from '$lib/components/dashboard/AdminHeader.svelte';
import StatsCards from '$lib/components/dashboard/StatsCards.svelte';
import LineChart from '$lib/components/dashboard/LineChart.svelte';
import BarChart from '$lib/components/dashboard/BarChart.svelte';
import PieChart from '$lib/components/dashboard/PieChart.svelte';
</script>

<svelte:head>
<title>Dashboard - Admin</title>
<meta name="description" content="Admin dashboard with charts and analytics" />
</svelte:head>

<div class="flex min-h-screen bg-background">
<AdminSidebar />
<div class="flex-1 flex flex-col">
<AdminHeader />
<main class="flex-1 p-6 overflow-auto">
<div class="max-w-7xl mx-auto space-y-6">
<StatsCards />
<div class="grid md:grid-cols-2 gap-6">
<LineChart />
<BarChart />
</div>
<div class="grid md:grid-cols-3 gap-6">
<PieChart />
<div class="card p-6">
<h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
<div class="space-y-3">
<div class="flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-primary"></div>
<span class="text-foreground/70">New user registered</span>
<span class="ml-auto text-foreground/50 text-sm">2m ago</span>
</div>
<div class="flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-success"></div>
<span class="text-foreground/70">Payment received</span>
<span class="ml-auto text-foreground/50 text-sm">5m ago</span>
</div>
<div class="flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-warning"></div>
<span class="text-foreground/70">Server alert</span>
<span class="ml-auto text-foreground/50 text-sm">10m ago</span>
</div>
</div>
</div>
<div class="card p-6">
<h3 class="text-lg font-semibold mb-4">Quick Stats</h3>
<div class="space-y-4">
<div>
<div class="flex justify-between mb-1">
<span class="text-foreground/70">Storage</span>
<span class="text-foreground/50">75%</span>
</div>
<div class="h-2 bg-surface-100 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 75%"></div>
</div>
</div>
<div>
<div class="flex justify-between mb-1">
<span class="text-foreground/70">Bandwidth</span>
<span class="text-foreground/50">45%</span>
</div>
<div class="h-2 bg-surface-100 rounded-full overflow-hidden">
<div class="h-full bg-success rounded-full" style="width: 45%"></div>
</div>
</div>
<div>
<div class="flex justify-between mb-1">
<span class="text-foreground/70">CPU</span>
<span class="text-foreground/50">32%</span>
</div>
<div class="h-2 bg-surface-100 rounded-full overflow-hidden">
<div class="h-full bg-warning rounded-full" style="width: 32%"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
