<script lang="ts">
  // Pas besoin d'importer des composants Skeleton UI qui n'existent pas
  // On utilise du HTML standard avec Tailwind CSS

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for small teams getting started',
      features: [
        '5 team members',
        '10 projects',
        'Basic analytics',
        'Email support',
        '5GB storage'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      description: 'Best for growing businesses',
      features: [
        '25 team members',
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'Custom reports',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Enterprise analytics',
        '24/7 phone support',
        'Unlimited storage',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];
</script>

<section id="pricing" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Simple, Transparent Pricing
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Choose plan that's right for your business. All plans include a 14-day free trial.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each pricingPlans as plan}
        <div class="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg {plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} p-8 flex flex-col">
          {#if plan.popular}
            <div class="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Most Popular
            </div>
          {/if}
          
          <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
          
          <div class="mb-6">
            <span class="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
            <span class="text-gray-600 dark:text-gray-400">/month</span>
          </div>
          
          <ul class="space-y-3 mb-8 flex-grow">
            {#each plan.features as feature}
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-600 dark:text-gray-400">{feature}</span>
              </li>
            {/each}
          </ul>
          
          <a href="/admin" class="w-full inline-block px-6 py-3 text-center font-semibold rounded-lg transition-colors {plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-2 border-gray-300 hover:border-gray-400 text-gray-900 dark:text-white dark:border-gray-600 dark:hover:border-gray-500'}">
            {plan.cta}
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
