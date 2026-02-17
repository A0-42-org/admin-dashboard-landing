<script lang="ts">
  import AdminSidebar from '$lib/components/admin/AdminSidebar.svelte';
  import AdminHeader from '$lib/components/admin/AdminHeader.svelte';
  import StatsCards from '$lib/components/admin/StatsCards.svelte';
  import Charts from '$lib/components/admin/Charts.svelte';
</script>

<div class="flex min-h-screen bg-surface-50 dark:bg-surface-950">
  <AdminSidebar />
  
  <div class="flex-1 ml-64">
    <AdminHeader />
    
    <main class="p-6 pt-20">
      <StatsCards />
      <Charts />
    </main>
  </div>
</div>
