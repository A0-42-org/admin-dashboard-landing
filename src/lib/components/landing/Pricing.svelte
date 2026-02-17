<script lang="ts">
const plans = [
{
name: 'Starter',
price: '29',
description: 'Perfect for small projects',
features: [
'5 Dashboards',
'Basic Charts',
'10K API Calls',
'Email Support'
],
cta: 'Get Started',
popular: false
},
{
name: 'Pro',
price: '79',
description: 'Best for growing teams',
features: [
'Unlimited Dashboards',
'Advanced Charts',
'100K API Calls',
'Priority Support',
'Custom Themes'
],
cta: 'Get Started',
popular: true
},
{
name: 'Enterprise',
price: '199',
description: 'For large organizations',
features: [
'Everything in Pro',
'Unlimited API Calls',
'24/7 Support',
'SLA Guarantee',
'Dedicated Account Manager',
'Custom Integrations'
],
cta: 'Contact Sales',
popular: false
}
];
</script>

<section id="pricing" class="py-20 bg-surface-50">
<div class="container mx-auto px-4">
<div class="text-center mb-16">
<h2 class="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
<p class="text-xl text-foreground/70">Choose the plan that's right for you</p>
</div>
<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
{#each plans as plan}
<div class="card p-8 relative {plan.popular ? 'border-2 border-primary' : ''}">
{#if plan.popular}
<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-contrast-foreground px-4 py-1 rounded-full text-sm font-semibold">
Most Popular
</div>
{/if}
<h3 class="text-2xl font-bold mb-2">{plan.name}</h3>
<p class="text-foreground/70 mb-6">{plan.description}</p>
<div class="mb-6">
<span class="text-5xl font-bold">${plan.price}</span>
<span class="text-foreground/70">/month</span>
</div>
<ul class="space-y-3 mb-8">
{#each plan.features as feature}
<li class="flex items-center gap-2">
<span class="text-primary">✓</span>
<span class="text-foreground/90">{feature}</span>
</li>
{/each}
</ul>
<a href="/dashboard" class="btn {plan.popular ? 'variant-filled-primary' : 'variant-outline-secondary'} w-full">
{plan.cta}
</a>
</div>
{/each}
</div>
</div>
</section>
