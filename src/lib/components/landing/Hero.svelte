<script lang="ts">
  import { Button } from '@skeletonlabs/skeleton-svelte';
</script>

<section class="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-surface-900 dark:to-surface-800 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-surface-900 dark:text-white mb-6">
        Powerful Analytics for Your Business
      </h1>
      <p class="text-xl text-surface-600 dark:text-surface-300 mb-8 max-w-2xl mx-auto">
        Transform your data into actionable insights with our advanced analytics dashboard. Track performance, identify trends, and make data-driven decisions.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/admin" variant="filled" size="lg">
          Get Started Free
        </Button>
        <Button href="#features" variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </div>
    
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white dark:bg-surface-800 p-6 rounded-lg shadow-lg">
        <div class="text-primary-600 text-3xl mb-3">📊</div>
        <h3 class="text-lg font-semibold mb-2">Real-time Analytics</h3>
        <p class="text-surface-600 dark:text-surface-400">Track your metrics in real-time with our powerful dashboard.</p>
      </div>
      <div class="bg-white dark:bg-surface-800 p-6 rounded-lg shadow-lg">
        <div class="text-primary-600 text-3xl mb-3">🎯</div>
        <h3 class="text-lg font-semibold mb-2">Custom Reports</h3>
        <p class="text-surface-600 dark:text-surface-400">Create custom reports tailored to your business needs.</p>
      </div>
      <div class="bg-white dark:bg-surface-800 p-6 rounded-lg shadow-lg">
        <div class="text-primary-600 text-3xl mb-3">🚀</div>
        <h3 class="text-lg font-semibold mb-2">Easy Integration</h3>
        <p class="text-surface-600 dark:text-surface-400">Integrate with your existing tools in minutes.</p>
      </div>
    </div>
  </div>
</section>
