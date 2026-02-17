<script lang="ts">
let { title = 'Analytics Dashboard' } = $props();
</script>

<section class="relative py-20 lg:py-32 overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-60/5" />
<div class="container mx-auto px-4 relative z-10">
<div class="text-center max-w-4xl mx-auto">
<h1 class="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-60 bg-clip-text text-transparent">
{title}
</h1>
<p class="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
Build your perfect dashboard with SvelteKit and Skeleton UI. Powerful charts, analytics, and data visualization tools.
</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/#pricing" class="btn variant-filled-primary text-lg px-8 py-4">
Get Started
</a>
<a href="/dashboard" class="btn variant-outline-secondary text-lg px-8 py-4">
View Demo
</a>
</div>
</div>
</div>
</section>
