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
type: 'bar',
data: {
labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
datasets: [
{
label: 'New Users',
data: [65, 59, 80, 81, 56, 55, 40],
backgroundColor: '#3b82f6'
},
{
label: 'Returning Users',
data: [28, 48, 40, 19, 86, 27, 90],
backgroundColor: '#10b981'
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
<h3 class="text-lg font-semibold mb-4">User Activity</h3>
<div class="h-64">
<canvas bind:this={canvasElement}></canvas>
</div>
</div>
