---
title: "Package debian từ upstream Git tag"
timestamp: 2026-01-22 11:53:00+07:00
description: "Chính xác các bước để package phần mềm portfolio performance thành debian package."
tags: ["debian", "linux"]
series: Linux
draft: false
toc: true
---

## Repository sử dụng

- Upstream: https://github.com/portfolio-performance/portfolio
- Fork của tôi: git@github.com:example/portfolio.git

Upstream phát hành code bằng Git tag (ví dụ: `0.81.2`, `0.82.0`, ...).

Nguyên tắc cốt lõi:

Tag là snapshot (read-only)  
Branch là nơi làm việc

---

## 0. Chuẩn bị repository local

Clone fork:

```bash
git clone git@github.com:example/portfolio.git
cd portfolio
```

Thêm upstream (chỉ làm một lần):

```bash
git remote add upstream git@github.com:portfolio-performance/portfolio.git
git fetch upstream --tags
```

Kiểm tra tag:

```bash
git tag
```

## 1.Packaging version đầu tiên (0.81.2)

### 1.1 Tạo branch từ tag upstream

```bash
git checkout -b debian-0.81.2 0.81.2
```

Kết quả:
Code đúng upstream 0.81.2
Không dùng HEAD
Không merge fork hiện tại

### 1.2 Tạo thư mục debian

Thư mục source phải có dạng <package>-<version>.
Ví dụ:

```bash
cd ..
mv portfolio portfolio-performance-0.81.2
cd portfolio-performance-0.81.2
```

Tạo khung Debian:

```bash
dh_make \
  --createorig \
  --yes \
  --single \
  --packagename portfolio-performance \
  --email example@gmail.com
```

Dọn file mẫu:
```bash
rm debian/*.ex debian/*.EX
```

Chỉnh các file cần thiết:
- debian/control
- debian/rules
- debian/changelog
- debian/copyright

### 1.3 Commit Debian packaging

```bash
git add debian
git commit -m "debian: initial packaging for 0.81.2"
```

### 1.4 Push branch lên fork

```bash
git push origin debian-0.81.2
```

## 2. Khi upstream ra version mới (0.82.0)
### 2.1 Fetch tag mới

```bash
git fetch upstream --tags
```

### 2.2 Tạo branch mới từ tag upstream

```bash
git checkout -b debian-0.82.0 0.82.0
```

Lúc này code là upstream 0.82.0, chưa có thư mục debian.

### 2.3 Mang thư mục debian từ version cũ sang

```bash
git checkout debian-0.81.2 -- debian
```

Git sẽ copy nguyên thư mục debian từ branch cũ sang branch mới, không merge code.

### 2.4 Commit việc reuse

```bash
git commit -m "debian: carry packaging forward from 0.81.2"
```

### 2.5 Bump version Debian

```bash
dch -v 0.82.0-1
```

Ví dụ nội dung changelog:

```bash
portfolio-performance (0.82.0-1) unstable; urgency=medium

  * New upstream release 0.82.0

 -- Example <example@gmail.com>  Tue, 21 Jan 2026 10:00:00 +0000
```

Commit changelog:

```bash
git commit -am "debian: bump version to 0.82.0-1"
```

### 2.6 Push branch mới lên fork

```bash
git push origin debian-0.82.0
```

Fork lúc này có hai branch:

- debian-0.81.2

- debian-0.82.0

Mỗi branch tương ứng với một upstream release.

**Những điều không được làm**
- Không commit trực tiếp trên tag
- Không merge fork HEAD vào tag
- Không build Debian từ code chưa được upstream release

## Kết luận
Debian package luôn được tạo từ:
`upstream tag + thư mục debian`
Fork có thể mới hơn, nhưng Debian chỉ quan tâm snapshot được gắn tag.

