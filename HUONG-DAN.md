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

**Khi Claude gửi bản `Code.gs` mới:** dán đè, **sửa lại dòng `KHOA_GV`** như cũ, bấm Lưu (từ bản 2026.11.27, trang mới trong Trang tính tự được tạo, không cần chạy lại `caiDat`), rồi **Triển khai → Quản lý các bản triển khai → ✏️ → Phiên bản: Phiên bản mới → Triển khai**. Làm như vậy thì URL `/exec` giữ nguyên, không phải sửa `config.js`.

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

**Ra bài kiểm tra**
1. Thẻ **Bài kiểm tra** → **＋ Tạo bài mới**. Nhập tên bài, chọn lớp, môn, khối và thời gian làm bài.
2. Bấm **Tải cấu trúc ngân hàng**, tick các chương cần kiểm tra.
3. Nhập số câu trắc nghiệm, đúng/sai, trả lời ngắn và tỉ lệ mức độ → **✨ Gợi ý ma trận**. Thầy sửa từng ô nếu muốn; số nhỏ dưới mỗi ô là số câu đang có trong ngân hàng, ô đỏ là xin nhiều hơn số đang có.
4. Bấm **Tạo bài kiểm tra**. Mỗi em nhận một đề riêng: cùng dạng và mức độ ở mỗi ô, câu hỏi khác nhau, thứ tự câu và phương án được trộn.
5. Bỏ tick *Mở cho học sinh ngay* nếu muốn tạo trước; đến giờ thì bấm **Mở bài**.

**Trong giờ kiểm tra**
- Bấm **Theo dõi** để xem ai chưa vào, đang làm (đã làm bao nhiêu câu), đã nộp. Bảng tự cập nhật 20 giây một lần.
- Bài làm của học sinh được giữ trong máy và gửi lên theo lô, nên mạng chập chờn không mất bài. Hết giờ, máy tự nộp; nếu điện thoại tắt hẳn, máy chủ tự chấm các câu đã gửi sau khi hết giờ 2 phút.

**Sau giờ kiểm tra**
- Học sinh thấy điểm, đáp án và lời giải khi **cả lớp đã nộp**, khi thầy bấm **Đóng bài**, hoặc khi thầy bấm **Công bố kết quả** (bấm lại để thu hồi).
- **⬇ Tải bảng điểm** cho file mở được bằng Excel hoặc Google Trang tính.
- Điểm theo thang 2025 rồi quy về thang 10: trắc nghiệm 0,25; đúng/sai 0,1 – 0,25 – 0,5 – 1 theo số ý đúng; trả lời ngắn 0,5 (môn Toán).

**Xem lớp yếu ở đâu (thống kê)**
- Ở bảng **Theo dõi**, bấm **📊 Thống kê câu**. Web cho tỉ lệ đúng theo phần (TN, Đ/S, trả lời ngắn), theo mức độ, theo dạng (chuẩn kiến thức) và từng câu, câu yếu nhất ở trên. Ô đỏ (dưới 50%) là phần nên dạy lại.
- **⬇ Bảng điểm và nhận xét** tải file Excel có cột *Vi phạm* và *Nhận xét* viết sẵn cho từng em (mức điểm, dạng nắm vững, dạng cần ôn, số lần vi phạm), cuối file có danh sách em vi phạm. Thầy sửa nhận xét ngay trong Excel nếu muốn.

**Tự học của học sinh**
- Ở trang học sinh, ô **Tự học** mở trang luyện tập: em chọn dạng theo chương, chọn mức, làm 5 hoặc 10 câu, nộp là có đáp án và lời giải.
- Câu sai tự vào **sổ lỗi**. Ngày hôm sau em làm lại; đúng thì câu được hẹn lại sau 3 ngày, rồi 7 ngày; đúng 3 lần liền là thuộc, câu rời sổ lỗi.
- **Gợi ý** chọn dạng em làm sai nhiều nhất (đã làm ít nhất 3 câu, đúng dưới 70%), rồi tới dạng em chưa luyện.
- **Chuỗi ngày 🔥**: mỗi ngày làm đúng ít nhất 5 câu khác nhau là đạt (giờ Việt Nam). Mỗi câu chỉ tính lần đầu trong ngày, nên làm lại câu cũ không cộng thêm.
- Thẻ **🔥 Tự học** ở trang quản lí: chọn lớp và khoảng ngày (Tuần này, Tháng này, Học kì I, Học kì II hoặc tự chọn). Bảng xếp theo **chuỗi dài nhất trong khoảng đó**, em đứng đầu có 🏆 để thầy cộng điểm thưởng. Tải được ra Excel.

**Giao bài tự học có hạn**
1. Thẻ **🔥 Tự học** → **＋ Giao bài mới**: đặt tên, chọn lớp, môn, khối, mức (không bắt buộc), số câu đúng cần đạt, hạn nộp.
2. Bấm **Tải các dạng**, tick các dạng muốn giao → **Giao bài**.
3. Học sinh thấy ô 📌 nhắc ở trang chính (đỏ khi còn dưới 1 ngày hoặc đã quá hạn), bấm vào là làm ngay. Mỗi câu đúng chỉ tính một lần cho bài giao.
4. Bảng *Bài tự học thầy giao* ghi số em xong / đang làm / chưa làm và **tên các em chưa xong**. Khi thầy vào trang quản lí, bài nào đã quá hạn mà còn em chưa xong sẽ được báo ngay ở đầu trang.

**Hẹn giờ mở phòng thi, đảo câu**
- Ô **Mở bài lúc**: bài tự mở đúng giờ (học sinh thấy “mở lúc …” nhưng chưa vào được). Bấm **Mở ngay** nếu muốn mở sớm. Ô **Đóng bài lúc** để tự đóng.
- **Đảo thứ tự câu** và **Đảo phương án A–D** bật sẵn; bỏ tick nếu thầy muốn mọi em cùng thứ tự (mỗi em vẫn nhận câu khác nhau theo ma trận).

**Thi nghiêm (chống rời màn hình)**
- Ô **Thi nghiêm** bật sẵn khi tạo bài. Học sinh rời khỏi màn hình làm bài (chuyển ứng dụng, mở tab khác, tắt màn hình, rời trang) thì:
  - **Lần 1:** hiện cảnh báo.
  - **Lần 2:** bài bị **khoá**, em không làm tiếp được. Trong bảng **Theo dõi** thầy thấy ô đỏ “🔒 Đang khoá chờ thầy mở” kèm nút **🔓 Mở khoá** (hoặc **Mở khoá tất cả**). Thầy bấm thì vài giây sau máy em tự mở lại.
  - **Lần 3:** bài **tự nộp** với các câu đã làm.
- Đồng hồ vẫn chạy khi bị khoá; hết giờ thì bài tự nộp như thường. Rời màn hình dưới 1 giây (thông báo hệ thống) hoặc tải lại trang nhanh không bị tính. Trang làm bài giữ màn hình điện thoại luôn sáng để máy không tự tắt màn hình giữa giờ.
- Số lần rời màn hình ghi ở cột *Vi phạm* trong bảng Theo dõi và file bảng điểm. Bỏ tick nếu bài làm ở nhà, không cần nghiêm. Thi thử THPT học sinh tự tạo không áp dụng.

**Học sinh xem lại bài, so sánh điểm, thi thử**
- Trang chính có ô **📈 Bài đã làm**: biểu đồ điểm các lần (kèm đường trung bình lớp), cho biết tăng hay giảm so với lần trước, bấm tên bài để xem lại bài làm và lời giải.
- **⏱ Thi thử THPT** (trong trang Tự học): em tự tạo một đề theo cấu trúc thi tốt nghiệp (12 trắc nghiệm, 4 đúng/sai, 6 trả lời ngắn, 90 phút), câu lấy từ ngân hàng chung, nộp là có điểm và lời giải. Mỗi ngày tối đa 3 lần. Bài thi thử không hiện trong danh sách bài kiểm tra của thầy.

**Thông báo lớp:** thẻ **Lớp học** → ô *📢 Thông báo lớp*: gõ nội dung, chọn lớp (hoặc tất cả các lớp) và số ngày hiện. Học sinh thấy ở đầu trang chính. Hết hạn thì tự ẩn; thầy xoá được bất kì lúc nào.

**Bảng xếp hạng (tuỳ chọn):** ở bảng lớp, cột *Xếp hạng* bấm **Đang tắt** để bật cho lớp đó. Học sinh lớp đó thấy top 10 tự học của tuần (từ thứ Hai) trong trang Tự học, xếp theo chuỗi ngày rồi số câu đúng, và biết mình đứng thứ mấy. Mặc định tắt.

**Sao lưu hằng tuần**
1. Trong Apps Script, ở ô chọn hàm chọn **`batSaoLuuHangTuan`** → **▷ Chạy**. Google hỏi thêm quyền Google Drive: *Xem xét quyền → chọn tài khoản → Nâng cao → Đi tới… → Cho phép*.
2. Máy sao lưu ngay một bản và từ đó tự sao lưu lúc 22 giờ tối Chủ nhật hằng tuần, vào thư mục **Sao lưu web học sinh** trên Drive của thầy, giữ 8 bản gần nhất.
3. Trang quản lí (thẻ Lớp học, ô *💾 Sao lưu dữ liệu*) cho biết lần sao lưu gần nhất; có nút **Sao lưu ngay** trước những việc lớn như xoá ngân hàng.
4. Khôi phục: mở bản sao trong thư mục đó, *Tệp → Tạo bản sao*, rồi dán mã `Code.gs` vào bản này và triển khai lại (hoặc chép lại trang tính cần dùng vào Trang tính đang chạy).

**Câu nói hay mỗi ngày:** cuối mỗi trang có một câu về việc học của danh nhân, đổi theo ngày. Thầy thêm, bớt câu trong file `assets/loihay.js`.

## 5. Giới hạn cần biết

- Apps Script trả lời mỗi yêu cầu trong khoảng 1–3 giây. Web đã được thiết kế để gửi ít lần và gửi theo lô; 50 học sinh cùng lúc là trong khả năng.
- Mọi việc quan trọng (đăng kí, xoá, đặt lại mật khẩu, lỗi máy chủ) được ghi vào trang `NhatKy` của Trang tính.
- Thầy có thể sao lưu bằng *Tệp → Tạo bản sao* của Trang tính.

**Xoá lớp tạo nhầm, chuyển lớp, đặt lại mật khẩu**
- Thẻ **👥 Lớp học** → bấm **Xem học sinh** ở lớp cần làm.
- **Đặt lại mật khẩu:** bấm **Đặt lại mật khẩu** ở dòng của em đó. Thầy đưa em mật khẩu tạm hiện ra; em đăng nhập rồi vào *Đổi mật khẩu*.
- **Chuyển lớp:** tick các em → chọn lớp ở ô *Chuyển sang lớp…* → **Chuyển mục đã chọn sang lớp này**.
- **Xoá lớp:** bấm **🗑 Xoá lớp**. Chỉ xoá được khi lớp không còn học sinh, bài kiểm tra hay bài tự học giao (chuyển hoặc xoá các mục đó trước), để không mất điểm của các em.
