<script lang="ts">
const features = [
{
icon: '📊',
title: 'Real-time Analytics',
description: 'Track your data in real-time with powerful charts and visualizations.'
},
{
icon: '📈',
title: 'Advanced Charts',
description: 'Beautiful, responsive charts powered by Chart.js with full customization.'
},
{
icon: '🔐',
title: 'Secure & Reliable',
description: 'Enterprise-grade security with 99.9% uptime guarantee.'
},
{
icon: '⚡',
title: 'Lightning Fast',
description: 'Built with SvelteKit for optimal performance and SEO.'
},
{
icon: '📱',
title: 'Mobile Responsive',
description: 'Perfect experience on all devices with Tailwind CSS.'
},
{
icon: '🎨',
title: 'Customizable',
description: 'Fully customizable themes and components with Skeleton UI.'
}
];
</script>

<section id="features" class="py-20 bg-surface-50">
<div class="container mx-auto px-4">
<div class="text-center mb-16">
<h2 class="text-4xl font-bold mb-4">Powerful Features</h2>
<p class="text-xl text-foreground/70">Everything you need to build amazing dashboards</p>
</div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{#each features as feature}
<div class="card p-6 hover:shadow-lg transition-shadow">
<div class="text-4xl mb-4">{feature.icon}</div>
<h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
<p class="text-foreground/70">{feature.description}</p>
</div>
{/each}
</div>
</div>
</section>
