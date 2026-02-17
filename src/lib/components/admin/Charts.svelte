<script lang="ts">
  import { onMount } from 'svelte';
  import type { ChartConfiguration } from 'chart.js/auto';
  
  let lineChart: HTMLCanvasElement;
  let barChart: HTMLCanvasElement;
  let pieChart: HTMLCanvasElement;
  
  onMount(() => {
    if (typeof window === 'undefined') return;
    
    const Chart = require('chart.js/auto');
    
    // Line Chart - Revenue vs Expenses
    if (lineChart) {
      new Chart(lineChart, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Revenue',
              data: [3000, 5000, 4500, 6000, 7000, 8500],
              borderColor: 'rgb(99, 102, 241)',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Expenses',
              data: [2000, 3000, 2500, 3500, 4000, 4500],
              borderColor: 'rgb(239, 68, 68)',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              fill: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: 'white'
              }
            }
          },
          scales: {
            x: {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
            },
            y: {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
            }
          }
        }
      } as ChartConfiguration);
    }
    
    // Bar Chart - User Activity
    if (barChart) {
      new Chart(barChart, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'New Users',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgba(34, 197, 94, 0.8)'
            },
            {
              label: 'Returning Users',
              data: [28, 48, 40, 19, 86, 27, 90],
              backgroundColor: 'rgba(251, 146, 60, 0.8)'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: 'white'
              }
            }
          },
          scales: {
            x: {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
            },
            y: {
              ticks: { color: 'white' },
              grid: { color: 'rgba(255,255,255,0.1)' }
            }
          }
        }
      } as ChartConfiguration);
    }
    
    // Pie Chart - Traffic Sources
    if (pieChart) {
      new Chart(pieChart, {
        type: 'doughnut',
        data: {
          labels: ['Mobile', 'Desktop', 'Tablet'],
          datasets: [
            {
              data: [55, 30, 15],
              backgroundColor: [
                'rgba(99, 102, 241, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(251, 146, 60, 0.8)'
              ]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: 'white'
              }
            }
          }
        }
      } as ChartConfiguration);
    }
  });
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
  <!-- Line Chart -->
  <div class="bg-white dark:bg-surface-800 rounded-lg shadow-sm p-6 lg:col-span-2">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-white mb-4">Revenue vs Expenses</h3>
    <div class="h-80">
      <canvas bind:this={lineChart}></canvas>
    </div>
  </div>
  
  <!-- Pie Chart -->
  <div class="bg-white dark:bg-surface-800 rounded-lg shadow-sm p-6">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-white mb-4">Traffic Sources</h3>
    <div class="h-80">
      <canvas bind:this={pieChart}></canvas>
    </div>
  </div>
</div>

<!-- Bar Chart -->
<div class="bg-white dark:bg-surface-800 rounded-lg shadow-sm p-6">
  <h3 class="text-lg font-semibold text-surface-900 dark:text-white mb-4">User Activity</h3>
  <div class="h-80">
    <canvas bind:this={barChart}></canvas>
  </div>
</div>
