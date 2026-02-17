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
type: 'doughnut',
data: {
labels: ['Mobile', 'Desktop', 'Tablet'],
datasets: [
{
label: 'Traffic Source',
data: [45, 35, 20],
backgroundColor: [
'#3b82f6',
'#10b981',
'#f59e0b'
],
borderWidth: 0
}
]
},
options: {
responsive: true,
maintainAspectRatio: false,
plugins: {
legend: {
position: 'bottom' as const
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
<h3 class="text-lg font-semibold mb-4">Traffic Source</h3>
<div class="h-64 flex items-center justify-center">
<canvas bind:this={canvasElement}></canvas>
</div>
</div>
