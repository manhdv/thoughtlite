---
title: "Framework đánh giá đầu tư: Return – Risk – Giá"
timestamp: 2026-01-23 11:19:00+07:00
series: "Đầu tư"
tags: ["đánh giá", "rủi ro"]
description: "Mục tiêu duy nhất: biết vì sao mình mua, và khi nào không nên mua."
toc: true
draft: false
---

## 1. Vấn đề cốt lõi

Câu hỏi đúng **không phải** là:

> Cổ phiếu này có tốt không?

Mà là:

> **Return kỳ vọng có xứng đáng với risk mình đang gánh ở mức giá hiện tại không?**

Toàn bộ framework xoay quanh **3 biến**:

* **Return kỳ vọng (Expected Return)**
* **Risk (đo bằng Drawdown / Volatility)**
* **Giá hiện tại (Valuation / Entry price)**

---

## 2. Risk‑free rate (Rf) là gì và lấy cái nào ở Việt Nam?

**Rf = lợi suất mà bạn gần như chắc chắn nhận được, không cần suy nghĩ.**

Ở Việt Nam, Rf hợp lý nhất:

* **Lãi suất tiết kiệm ≥12 tháng**
* Hoặc **trái phiếu chính phủ dài hạn** (ít người dùng thực tế)

Hiện tại (2025):

* Tiết kiệm ~ **5–5.5%/năm** → dùng làm **Rf thực dụng**

> Nếu đầu tư cổ phiếu mà return kỳ vọng **không vượt Rf đủ xa**, thì khỏi đầu tư cho khỏe.

---

## 3. Equity Risk Premium (ERP) — hiểu cho đúng

### 3.1 ERP là gì?

```
ERP = Return cổ phiếu – Risk‑free rate
```

Nó là **phần thưởng cho việc chịu rủi ro**.

### 3.2 Vì sao ERP Việt Nam hay bị báo là ~11–12%?

* Dữ liệu **quá khứ** (volatile, khủng hoảng nhiều)
* Thị trường mới nổi → premium cao

**Sai lầm phổ biến**:

* Lấy ERP vĩ mô đó **áp cứng cho danh mục cá nhân**

> ERP vĩ mô ≠ Required return cá nhân

---

## 4. Risk của danh mục: đừng đo bằng volatility

### 4.1 Volatility vô dụng với nhà đầu tư dài hạn

* Giá lên xuống hàng ngày **không giết bạn**
* **Drawdown mới giết bạn** (vì bạn có thể panic sell)

### 4.2 Thước đo thực dụng: Maximum Drawdown (DD)

* DD = mức sụt giảm lớn nhất từ đỉnh đến đáy

Ví dụ:

* VNIndex 2008: ~ -65%
* Covid: ~ -35%
* Danh mục cổ phiếu chất lượng: thường **-25% → -40%**

---

## 5. Required Return từ Drawdown: vì sao chia 5?

Một heuristic phổ biến:

```
Risk premium yêu cầu ≈ Max DD / 5
```

Ví dụ:

* DD 30% → yêu cầu ~ **6% premium**
* DD 40% → yêu cầu ~ **8% premium**

### Vì sao là 5?

* Không phải công thức vật lý
* Là **quy ước kinh nghiệm** từ:

  * Pain tolerance
  * Behavioral finance
  * Xác suất gặp DD đó trong chu kỳ

> Chia 3 → quá bảo thủ
> Chia 10 → quá lạc quan
> **5 là trung dung thực chiến**

---

## 6. Expected Return: tính thế nào cho gọn?

Cách đơn giản nhất:

```
Expected Return ≈ Dividend Yield
                + EPS Growth
                + ΔPE
```

### 6.1 Dividend Yield

* **Không phải payout ratio**
* Là **cổ tức / giá hiện tại**

### 6.2 EPS Growth

* Lấy **dài hạn**, haircut mạnh
* Thực tế hơn báo cáo

### 6.3 ΔPE là gì?

* Thay đổi định giá theo thời gian

Ví dụ:

* PE hiện tại: 18
* PE hợp lý dài hạn: 15

```
ΔPE ≈ (15/18)^(1/10) − 1 ≈ -2%/năm
```

→ Định giá cao = **ăn vào future return**

---

## 7. Ví dụ hoàn chỉnh: FPT

Giả định thận trọng:

* Dividend: ~3%
* EPS growth: ~7–8%
* ΔPE: -2% → 0%

```
Expected ≈ 8–11%
```

Risk:

* Max DD lịch sử: ~30–35%

Required:

```
Rf 5.3% + DD/5 ≈ 11–12%
```

> [!TIP]
> ["Tool đánh giá"](/jotting/expected-return)

**Kết luận**:

* Doanh nghiệp tốt
* Return kỳ vọng **tiệm cận** required
* → **Giá quyết định tất cả**

---

## 8. Vì sao quỹ ngoại không cần 16% CAGR?

* Họ **không tiêu bằng VND**
* Họ có lợi thế:

  * FX
  * Arbitrage
  * Quy mô

Nhà đầu tư cá nhân:

* Tiêu tiền nội địa
* Không có structural edge

→ **Hurdle rate cá nhân thấp hơn ERP vĩ mô**

---

## 9. Không có website nào kết luận hộ bạn

Website chỉ làm được:

* Cung cấp dữ liệu (EPS, PE, dividend)

Không site nào biết:

* Bạn chịu DD bao nhiêu
* Bạn hold được mấy năm

> Nếu có site nói BUY/SELL cho bạn → marketing

---

## 10. Checklist 5 phút

```
1. Rf hiện tại bao nhiêu?
2. Max DD mình chịu được?
3. Required return = Rf + DD/5
4. Expected return (DY + G + ΔPE)
5. Expected > Required?
```

Nếu **không vượt** → bỏ qua, không tiếc.

---

## 11. Câu chốt

> **Pro không dự đoán tương lai.
> Pro đặt ngưỡng và loại asset không đạt.**

Framework này không giúp bạn thắng thị trường.
Nó giúp bạn **không tự bắn vào chân mình**.
