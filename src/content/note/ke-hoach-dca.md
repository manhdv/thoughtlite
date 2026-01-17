---
title: "Kế hoạch DCA 20 năm"
description: "Khung DCA 20 năm, plan vs reality."
timestamp: 2026-01-17 13:03:00+07:00
series: Đầu tư
tags: ["kế hoạch"]
toc: false
top: 1
---

## So sánh kế hoạch DCA 20 năm (13.5% CAGR, 400 triệu/1 năm).

<div style="height:clamp(260px,42vh,520px);">
  <canvas id="moneyChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

<script>
(function waitForChart() {
  if (!window.Chart) {
    requestAnimationFrame(waitForChart);
    return;
  }

  const YEARS = 20;

  const labels = Array.from({ length: YEARS }, (_, i) => `Năm ${i + 1}`);

  const planned = [
    400,854,1369,1954,2618,
    3372,4228,5200,6303,7555,
    8976,10589,12420,14498,16857,
    19535,22575,26025,29941,34386
  ].slice(0, YEARS);

  const actual = [
    260,null,null,null,null,
    null,null,null,null,null,
    null,null,null,null,null,
    null,null,null,null,null
  ].slice(0, YEARS);

  const contributed = [
    220,null,null,null,null,
    null,null,null,null,null,
    null,null,null,null,null,
    null,null,null,null,null
  ].slice(0, YEARS);

  const ctx = document.getElementById("moneyChart");
  if (!ctx) return;

  const chart = new Chart(ctx, {
    data: {
      labels,
      datasets: [
        {
          type: "line",
          label: "Total Contributed",
          data: contributed,
          borderColor: "#fc0097",
          borderWidth: 2,
          tension: 0,
          pointRadius: 0
        },
        {
          type: "line",
          label: "Planned (13.5%)",
          data: planned,
          borderColor: "#2563eb",
          borderDash: [6, 4],
          borderWidth: 2,
          pointRadius: 0
        },
        {
          type: "bar",
          label: "Actual",
          data: actual,
          backgroundColor: "#22c55e",
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      scales: {
        y: {
          ticks: {
            callback: v => (v / 1000).toFixed(0) + " tỷ"
          }
        }
      }
    }
  });

  requestAnimationFrame(() => chart.resize());
})();
</script>
