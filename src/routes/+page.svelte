<script lang="ts">
import AppNavbar from '$lib/components/AppNavbar.svelte';
import Hero from '$lib/components/landing/Hero.svelte';
import Pricing from '$lib/components/landing/Pricing.svelte';
import Features from '$lib/components/landing/Features.svelte';
import AppFooter from '$lib/components/AppFooter.svelte';
</script>

<svelte:head>
<title>Admin Dashboard & Analytics Platform</title>
<meta name="description" content="Complete admin dashboard with charts and analytics" />
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
<AppNavbar />
<main>
<Hero />
<Features />
<Pricing />
</main>
<AppFooter />
</div>
