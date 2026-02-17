<script lang="ts">
  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Track your metrics in real-time with our powerful dashboard. Get instant insights into your business performance.',
      icon: '📊'
    },
    {
      title: 'Custom Reports',
      description: 'Create custom reports tailored to your business needs. Export data in multiple formats for easy sharing.',
      icon: '🎯'
    },
    {
      title: 'Easy Integration',
      description: 'Integrate with your existing tools in minutes. Our platform supports 100+ popular integrations.',
      icon: '🚀'
    },
    {
      title: 'Data Security',
      description: 'Your data is protected with enterprise-grade security. We follow industry best practices for data protection.',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Our support team is available around the clock to help you with any questions or issues.',
      icon: '💬'
    },
    {
      title: 'Mobile Friendly',
      description: 'Access your dashboard from anywhere with our responsive design. Works perfectly on all devices.',
      icon: '📱'
    }
  ];
</script>

<section id="features" class="py-20 bg-white dark:bg-surface-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white mb-4">
        Everything You Need
      </h2>
      <p class="text-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
        Powerful features to help you analyze, track, and optimize your business performance.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="bg-surface-50 dark:bg-surface-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div class="text-primary-600 text-4xl mb-4">{feature.icon}</div>
          <h3 class="text-xl font-semibold mb-3 text-surface-900 dark:text-white">
            {feature.title}
          </h3>
          <p class="text-surface-600 dark:text-surface-400">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
