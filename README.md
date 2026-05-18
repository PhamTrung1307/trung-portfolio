# Trung Portfolio

Portfolio cá nhân cho Fresher/Junior .NET Developer, xây dựng bằng React, Vite và Tailwind CSS.

## Cài đặt

```bash
npm install
```

## Chạy local

```bash
npm run dev
```

Mở đường dẫn Vite hiển thị trong terminal, thường là `http://localhost:5173`.

## Build production

```bash
npm run build
```

Thư mục build sẽ được tạo tại `dist`.

## Deploy

### Vercel

1. Push source code lên GitHub.
2. Vào Vercel, chọn **Add New Project**.
3. Import repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

### Netlify

1. Push source code lên GitHub.
2. Vào Netlify, chọn **Add new site** từ Git.
3. Chọn repository.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Deploy.

## Cách cập nhật nội dung

Các thông tin dễ chỉnh sửa nằm trong `src/data/portfolio.js`:

- Link CV
- GitHub
- Email
- Số điện thoại
- LinkedIn
- Link GitHub/Demo của từng project
- Timeline học tập/kinh nghiệm

Sau khi chỉnh sửa, chạy:

```bash
npm run build
```

Nếu đã deploy qua Vercel hoặc Netlify và kết nối với GitHub, chỉ cần commit và push thay đổi, website sẽ tự deploy lại.
