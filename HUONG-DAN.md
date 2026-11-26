# Web học sinh — hướng dẫn cài đặt

Web này tách riêng khỏi web giáo viên. Nó có hai phần:

- **Trang học sinh** (`index.html`): các em tạo tài khoản bằng mã lớp, đăng nhập, rồi vào Tự học và Kiểm tra.
- **Trang quản lí** (`gv.html`): thầy tạo lớp, duyệt học sinh, đặt lại mật khẩu và nạp ngân hàng đề.

Dữ liệu (tài khoản, ngân hàng đề, sau này là bài làm) nằm trong **một Trang tính Google của thầy**. Học sinh không mở được Trang tính này; mọi yêu cầu đi qua mã Apps Script, nên đáp án và mật khẩu không lộ ra ngoài.

Thầy làm một lần, khoảng 15 phút.

## 1. Tạo Trang tính và dán mã máy chủ

1. Vào **sheets.google.com**, tạo bảng tính trống, đặt tên `May chu web hoc sinh`.
2. Menu **Tiện ích mở rộng → Apps Script**.
3. Xoá hết mã có sẵn trong `Mã.gs`, dán toàn bộ nội dung file [`apps-script/Code.gs`](apps-script/Code.gs) vào.
4. Sửa dòng `const KHOA_GV = "doi-mat-khau-nay";` thành mật khẩu riêng của thầy (ít nhất 8 kí tự). Đây là khoá để vào trang quản lí. **Không ghi khoá này vào `config.js` hay bất kì file nào trên GitHub.**
5. Bấm 💾 **Lưu**.
6. Ở ô chọn hàm (cạnh nút ▷ Chạy), chọn **`caiDat`** → bấm **▷ Chạy**. Google hỏi quyền: *Xem xét quyền → chọn tài khoản → Nâng cao → Đi tới … (không an toàn) → Cho phép*. Đây là mã của chính thầy nên cho phép là bình thường.
7. Quay lại Trang tính: thấy các trang `Lop`, `TaiKhoan`, `CauHoi`, `Dang`, `NhatKy` là xong.

## 2. Triển khai thành ứng dụng web

1. Trong Apps Script: **Triển khai → Tùy chọn triển khai mới**.
2. Bấm ⚙ cạnh *Chọn loại* → **Ứng dụng web**.
3. *Thực thi với tư cách*: **Tôi**. *Người có quyền truy cập*: **Bất kỳ ai**.
4. Bấm **Triển khai**, chép **URL ứng dụng web** (đuôi `/exec`).
5. Trên github.com, mở kho `hoc-cung-Thay-Hieu-HS` → file `config.js` → bấm ✏️ → dán URL vào dòng `mayChu: ""` (giữa hai dấu ngoặc kép) → **Commit changes**.

> URL `/exec` để công khai không sao: không có khoá giáo viên thì không làm được gì ngoài đăng kí/đăng nhập học sinh.

**Khi Claude gửi bản `Code.gs` mới:** dán đè, bấm Lưu, rồi **Triển khai → Quản lý các bản triển khai → ✏️ → Phiên bản: Phiên bản mới → Triển khai**. Làm như vậy thì URL `/exec` giữ nguyên, không phải sửa `config.js`.

## 3. Bật GitHub Pages

1. github.com → kho `hoc-cung-Thay-Hieu-HS` → **Settings → Pages**.
2. *Branch*: `main`, thư mục `/ (root)` → **Save**.
3. Sau 1–2 phút web có địa chỉ `https://hieuant2812.github.io/hoc-cung-Thay-Hieu-HS/`.
   - Trang học sinh: địa chỉ trên.
   - Trang quản lí: thêm `gv.html` vào cuối.

## 4. Dùng hằng ngày

**Tạo lớp và cho học sinh vào**
1. Mở `gv.html`, nhập khoá giáo viên.
2. Thẻ **Lớp học** → gõ tên lớp (VD `12A1`) → **Tạo lớp**. Web cấp **mã lớp** 6 kí tự.
3. Gửi học sinh đường dẫn trang học sinh và mã lớp. Các em bấm **Tạo tài khoản**, nhập mã lớp, họ tên, tên đăng nhập, mật khẩu.
4. Thầy bấm **Xem học sinh** → **Duyệt tất cả đang chờ** (hoặc chọn từng em). Em nào lạ thì chọn rồi **Xoá**.
5. Đủ học sinh rồi thì bấm **Đóng lớp** để không ai đăng kí thêm bằng mã đó.

**Học sinh quên mật khẩu:** bấm **Đặt lại mật khẩu** ở dòng của em đó → web hiện mật khẩu tạm → em đăng nhập rồi vào **Đổi mật khẩu**. Sai mật khẩu 5 lần liền thì tài khoản tạm khoá 10 phút.

**Nạp ngân hàng đề**
1. Thẻ **Ngân hàng đề** → chọn **Môn** (và **Lớp** nếu file không ghi rõ lớp).
2. Kéo thả file `.tex`, `.zip` (kể cả zip lồng nhau) hoặc cả thư mục — đúng định dạng của trang Ra đề (`\cauTN`, `\cauDS`, `\cauTLN`).
3. Web báo số câu đọc được và các câu lỗi (bấm *Xem các câu lỗi*). Bấm **Đưa … câu lên máy chủ**.
4. Câu trùng mã được ghi đè bằng bản mới, nên nạp lại cả bộ cũng không bị trùng. Nếu mạng rớt giữa chừng, thầy nạp lại là được.

> Ngân hàng dùng chung cho cả **tự học** và **kiểm tra** (thầy chọn ngày 26/11/2026). Đừng tải file `.tex`/`.zip` của ngân hàng lên kho GitHub này — kho để công khai.

## 5. Giới hạn cần biết

- Apps Script trả lời mỗi yêu cầu trong khoảng 1–3 giây. Web đã được thiết kế để gửi ít lần và gửi theo lô; 50 học sinh cùng lúc là trong khả năng.
- Mọi việc quan trọng (đăng kí, xoá, đặt lại mật khẩu, lỗi máy chủ) được ghi vào trang `NhatKy` của Trang tính.
- Thầy có thể sao lưu bằng *Tệp → Tạo bản sao* của Trang tính.
