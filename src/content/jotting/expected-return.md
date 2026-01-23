---
title: "Tool đánh giá Return – Risk"
description: "Cách đánh giá cổ phiếu bằng expected return, drawdown và hurdle rate. Không timing, không FOMO."
timestamp: 2026-01-23 12:37:00+07:00
series: "Tools"
tags: ["rủi ro", "hiệu quả"]
draft: false
---
> [!TIP] Hướng dẫn sử dụng
> ["Phương pháp định giá"](/note/danh-gia-risk-return)

<style>
  .er-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    max-width: 900px;
  }

  .er-grid label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 0.25rem;
  }

  .er-grid input {
    padding: 0.4rem 0.5rem;
    font-size: 0.9rem;
  }

  .er-result {
    margin-top: 1rem;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.75rem;
  }

  .er-box {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
  }

  .er-box strong {
    font-size: 1.2rem;
  }
</style>

<form id="er-form" class="er-grid">
  <label>
    Price
    <input type="number" name="price" value="103000" />
  </label>

  <label>
    EPS
    <input type="number" name="eps" value="5256" />
  </label>

  <label>
    PE current
    <input type="number" name="peNow" step="0.1" disabled />
  </label>

  <label>
    PE avg (10y)
    <input type="number" name="peAvg" value="17" step="0.1" />
  </label>

  <label>
    Dividend (annual)
    <input type="number" name="dividend" value="2000" />
  </label>

  <label>
    EPS growth (%)
    <input type="number" name="growth" value="8" step="0.1" />
  </label>

  <label>
    Risk-free rate (%)
    <input type="number" name="rf" value="5.5" step="0.1" />
  </label>

  <label>
    Max Drawdown (%)
    <input type="number" name="dd" value="30" step="1" />
  </label>
</form>
<div class="er-result"> <div class="er-box"> Expected return<br /> <strong><span id="expected">–</span>%</strong> </div> <div class="er-box"> Required return<br /> <strong><span id="required">–</span>%</strong> </div> <div class="er-box"> Gate<br /> <strong><span id="gate">–</span></strong> </div> </div>

<script>
  function calcExpectedReturn({ price, dividend, growthPct, peNow, peAvg }) {
    const dividendYield = (dividend / price) * 100;
    const deltaPE =
      (Math.pow(peAvg / peNow, 1 / 10) - 1) * 100;

    return growthPct + dividendYield + deltaPE;
  }

  function calcRequiredReturn(rfPct, ddPct) {
    return rfPct + ddPct / 5;
  }

  const form = document.getElementById("er-form");
  const expectedEl = document.getElementById("expected");
  const requiredEl = document.getElementById("required");
  const gateEl = document.getElementById("gate");
  const peNowInput = form.querySelector('[name="peNow"]');

  function update() {
    const data = new FormData(form);

    const price = Number(data.get("price"));
    const eps = Number(data.get("eps"));
    const peAvg = Number(data.get("peAvg"));
    const dividend = Number(data.get("dividend"));
    const growthPct = Number(data.get("growth"));
    const rfPct = Number(data.get("rf"));
    const ddPct = Number(data.get("dd"));

    if (!price || !eps || !peAvg) {
      expectedEl.textContent = "–";
      requiredEl.textContent = "–";
      gateEl.textContent = "–";
      return;
    }

    const peNow = price / eps;
    peNowInput.value = peNow.toFixed(2);

    const expected = calcExpectedReturn({
      price,
      dividend,
      growthPct,
      peNow,
      peAvg,
    });

    const required = calcRequiredReturn(rfPct, ddPct);

    expectedEl.textContent = expected.toFixed(2);
    requiredEl.textContent = required.toFixed(2);

    gateEl.textContent = expected > required ? "OPEN" : "CLOSED";
    gateEl.style.color = expected > required ? "green" : "red";
  }

  form.addEventListener("input", update);
  update();
</script>
