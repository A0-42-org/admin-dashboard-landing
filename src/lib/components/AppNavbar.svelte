<script lang="ts">
import { page } from '$app/stores';
</script>

<nav class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div class="container mx-auto px-4 h-16 flex items-center justify-between">
<a href="/" class="flex items-center space-x-2">
<span class="text-2xl font-bold bg-gradient-to-r from-primary to-primary-60 bg-clip-text text-transparent">
AnalyticsPro
</span>
</a>
<div class="hidden md:flex items-center space-x-6">
<a href="/#features" class="text-foreground/70 hover:text-foreground transition-colors">
Features
</a>
<a href="/#pricing" class="text-foreground/70 hover:text-foreground transition-colors">
Pricing
</a>
<a href="/dashboard" class="btn variant-filled-primary">
Dashboard
</a>
</div>
</div>
</nav>
