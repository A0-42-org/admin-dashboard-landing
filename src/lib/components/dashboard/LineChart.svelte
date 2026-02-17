<script lang="ts">
import { onMount } from 'svelte';
import Chart from 'chart.js/auto';

let canvasElement: HTMLCanvasElement;
let chartInstance: Chart;

onMount(() => {
if (!canvasElement) return;

const ctx = canvasElement.getContext('2d');
if (!ctx) return;

chartInstance = new Chart(ctx, {
type: 'line',
data: {
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
datasets: [
{
label: 'Revenue',
data: [30000, 45000, 35000, 50000, 49000, 60000],
borderColor: '#3b82f6',
backgroundColor: 'rgba(59, 130, 246, 0.1)',
fill: true,
tension: 0.4
},
{
label: 'Expenses',
data: [20000, 25000, 20000, 30000, 28000, 35000],
borderColor: '#ef4444',
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
position: 'top' as const
}
},
scales: {
y: {
beginAtZero: true
}
}
}
});

return () => {
if (chartInstance) {
chartInstance.destroy();
}
};
});
</script>

<div class="card p-6">
<h3 class="text-lg font-semibold mb-4">Revenue vs Expenses</h3>
<div class="h-64">
<canvas bind:this={canvasElement}></canvas>
</div>
</div>
