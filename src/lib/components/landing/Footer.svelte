<script lang="ts">
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' }
  ];
  
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' }
  ];
</script>

<footer class="bg-surface-900 dark:bg-surface-950 text-surface-300 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 class="text-white text-xl font-bold mb-4">AnalyticsPro</h3>
        <p class="text-surface-400">
          Transform your data into actionable insights with our advanced analytics dashboard.
        </p>
      </div>
      
      <div>
        <h4 class="text-white font-semibold mb-4">Product</h4>
        <ul class="space-y-2">
          {#each footerLinks as link}
            <li>
              <a href={link.href} class="text-surface-400 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <div>
        <h4 class="text-white font-semibold mb-4">Company</h4>
        <ul class="space-y-2">
          <li><a href="/about" class="text-surface-400 hover:text-white transition-colors">About</a></li>
          <li><a href="/blog" class="text-surface-400 hover:text-white transition-colors">Blog</a></li>
          <li><a href="/careers" class="text-surface-400 hover:text-white transition-colors">Careers</a></li>
          <li><a href="/contact" class="text-surface-400 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-white font-semibold mb-4">Legal</h4>
        <ul class="space-y-2">
          {#each legalLinks as link}
            <li>
              <a href={link.href} class="text-surface-400 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
    <div class="border-t border-surface-800 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-surface-400 text-sm">
          © {currentYear} AnalyticsPro. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="/twitter" class="text-surface-400 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="/linkedin" class="text-surface-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="/github" class="text-surface-400 hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
