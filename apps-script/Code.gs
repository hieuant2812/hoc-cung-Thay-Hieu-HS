/* =====================================================================
   Học cùng Thầy Hiếu — MÁY CHỦ cho web học sinh (Google Apps Script)
   ---------------------------------------------------------------------
   Dán toàn bộ file này vào Apps Script của Trang tính (Tiện ích mở rộng →
   Apps Script), sửa KHOA_GV bên dưới, chạy hàm caiDat() một lần, rồi
   Triển khai → Ứng dụng web (Thực thi với tư cách: Tôi; Ai có quyền truy
   cập: Bất kỳ ai). Xem HUONG-DAN.md trong kho GitHub.

   Học sinh KHÔNG mở được Trang tính. Mọi yêu cầu đi qua doPost() dưới đây,
   nên đáp án và mật khẩu không bao giờ lộ ra ngoài.
   ===================================================================== */

/* ĐỔI DÒNG NÀY thành mật khẩu riêng của thầy (ít nhất 8 kí tự). */
const KHOA_GV = "doi-mat-khau-nay";

const PHIEN_BAN = "2026.11.28-4";
const HS_HAN_PHIEN_NGAY = 30;     // học sinh đăng nhập một lần dùng 30 ngày
const GV_HAN_PHIEN_GIO = 12;      // giáo viên: 12 giờ
const SO_LAN_SAI_TOI_DA = 5;      // sai mật khẩu 5 lần thì khoá 10 phút
const PHUT_KHOA_SAI = 10;
const VONG_BAM = 200;             // số vòng băm mật khẩu

/* Cấu trúc các trang tính. Cột đầu tiên là khoá. */
const BANG = {
  Lop: ["maLop", "tenLop", "khoi", "taoLuc", "dong", "bxh"],
  TaiKhoan: ["id", "tenDN", "hoTen", "maLop", "salt", "hash", "trangThai", "taoLuc", "lanSai", "khoaDen", "dangNhapCuoi", "pv"],
  CauHoi: ["k", "mon", "lop", "id", "loai", "muc", "chuong", "bai", "dangSo", "dkey", "de", "pa", "y", "da", "loigiai", "file", "capNhat"],
  Dang: ["k", "mon", "lop", "dkey", "ten"],
  NhatKy: ["luc", "ai", "viec", "chiTiet"],
  /* bài kiểm tra: maTran = {dkey: {TN: {NB: n, ...}, DS: {...}, TLN: {...}}} ; trangThai: nhap | mo | dong */
  BaiKT: ["maBai", "ten", "maLop", "mon", "lop", "maTran", "soCau", "thoiGian", "dongLuc", "trangThai", "congBo", "taoLuc", "moLuc", "tuyChon", "chuHS"],
  /* đề của từng học sinh: cau = [{k, loai, order}] ; traLoi = {"0": "B", "1": "ĐSĐS", "2": "2,5"} ; trangThai: lam | nop.
     Thêm cột mới thì luôn thêm ở CUỐI để dữ liệu cũ không lệch cột. */
  DeThi: ["k", "maBai", "hsId", "cau", "traLoi", "batDau", "hanNop", "luuLuc", "nopLuc", "trangThai", "diem", "chiTiet", "viPham", "khoa", "viPhamLuc"],
  TuHoc: ["hsId", "ngay", "dang", "soLoi", "homNay", "tongDung", "tongLam", "capNhat"],
  GiaoTuHoc: ["maGiao", "ten", "maLop", "mon", "lop", "dkeys", "muc", "soCauDung", "hanNop", "taoLuc"],
  TienDoGiao: ["k", "maGiao", "hsId", "dung", "lam", "ks", "xongLuc", "capNhat"],
  ThongBao: ["ma", "maLop", "noiDung", "taoLuc", "hetHan"]
};
const MUC = ["NB", "TH", "VD", "VDC"];
const LOAI = ["TN", "DS", "TLN"];
const PHUT_AN_HAN = 2;            // nhận bài muộn tối đa 2 phút sau giờ nộp (mạng chậm)
/* Các cột lưu dạng số; mọi cột khác lưu dạng chữ (có dấu ' phía trước để Trang tính không tự đổi "2,5" thành số hay "=..." thành công thức). */
const COT_SO = { lop: 1, chuong: 1, bai: 1, dangSo: 1, lanSai: 1, pv: 1, khoi: 1, soCau: 1, thoiGian: 1, diem: 1, viPham: 1, tongDung: 1, tongLam: 1, soCauDung: 1, dung: 1, lam: 1 };

/* ============================== cài đặt ============================== */
function caiDat() {
  if (!KHOA_GV || KHOA_GV === "doi-mat-khau-nay" || KHOA_GV.length < 8) throw new Error("Thầy hãy sửa KHOA_GV ở đầu file thành mật khẩu riêng (ít nhất 8 kí tự), bấm Lưu rồi chạy lại caiDat.");
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(BANG).forEach(function (ten) {
    let sh = ss.getSheetByName(ten);
    if (!sh) sh = ss.insertSheet(ten);
    const cot = BANG[ten];
    sh.getRange(1, 1, 1, cot.length).setValues([cot]).setFontWeight("bold");
    sh.setFrozenRows(1);
  });
  const p = PropertiesService.getScriptProperties();
  if (!p.getProperty("BI_MAT")) p.setProperty("BI_MAT", Utilities.getUuid() + Utilities.getUuid());
  const macDinh = ss.getSheetByName("Sheet1") || ss.getSheetByName("Trang tính1");
  if (macDinh && ss.getSheets().length > 1 && macDinh.getLastRow() === 0) ss.deleteSheet(macDinh);
  return "Đã cài đặt xong. Giờ thầy bấm Triển khai → Tùy chọn triển khai mới → Ứng dụng web.";
}

/* ============================== cổng vào ============================== */
function doGet() {
  return traVe({ ok: true, ten: "hoc-cung-thay-hieu-hs", phienBan: PHIEN_BAN });
}

function doPost(e) {
  let yc;
  try { yc = JSON.parse((e && e.postData && e.postData.contents) || "{}"); }
  catch (err) { return traVe({ ok: false, loi: "Yêu cầu không hợp lệ." }); }
  try {
    const fn = VIEC[yc.action];
    if (!fn) return traVe({ ok: false, loi: "Không có chức năng " + yc.action });
    const kq = fn(yc) || {};
    kq.ok = true;
    return traVe(kq);
  } catch (err) {
    const msg = err && err.nguoiDung ? err.message : "Máy chủ gặp lỗi, em thử lại sau ít phút.";
    if (!(err && err.nguoiDung)) ghiNhatKy("may-chu", "loi", String(err && err.stack || err));
    return traVe({ ok: false, loi: msg, ma: err && err.ma });
  }
}

function traVe(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function loi(msg, ma) { const e = new Error(msg); e.nguoiDung = true; e.ma = ma || ""; return e; }

/* ============================== các chức năng ============================== */
const VIEC = {
  /* ---------- học sinh ---------- */
  "hs.dangKi": function (yc) {
    const maLop = chuanMaLop(yc.maLop);
    const hoTen = chuanTen(yc.hoTen);
    const tenDN = chuanTenDN(yc.tenDN);
    kiemMatKhau(yc.matKhau);
    if (hoTen.split(" ").length < 2) throw loi("Em nhập đủ họ và tên nhé.");
    return khoa(function () {
      const lop = timDong("Lop", maLop);
      if (!lop || lop.o.dong === "1") throw loi("Mã lớp không đúng hoặc lớp đã đóng. Em hỏi lại thầy mã lớp.");
      if (timTheo("TaiKhoan", "tenDN", tenDN)) throw loi("Tên đăng nhập này đã có người dùng. Em chọn tên khác.");
      const salt = ngauNhien(16);
      const id = "hs" + ngauNhien(10);
      them("TaiKhoan", { id: id, tenDN: tenDN, hoTen: hoTen, maLop: maLop, salt: salt, hash: bam(salt, yc.matKhau), trangThai: "cho", taoLuc: bayGio(), lanSai: 0, khoaDen: "", dangNhapCuoi: "", pv: 1 });
      ghiNhatKy(tenDN, "dang-ki", maLop);
      return { trangThai: "cho", tenLop: lop.o.tenLop };
    });
  },

  "hs.dangNhap": function (yc) {
    const tenDN = chuanTenDN(yc.tenDN);
    const tk = timTheo("TaiKhoan", "tenDN", tenDN);
    if (!tk) { Utilities.sleep(400); throw loi("Sai tên đăng nhập hoặc mật khẩu."); }
    const o = tk.o;
    if (o.khoaDen && new Date(o.khoaDen) > new Date()) throw loi("Em nhập sai nhiều lần. Thử lại sau " + PHUT_KHOA_SAI + " phút, hoặc nhờ thầy đặt lại mật khẩu.", "tam-khoa");
    if (bam(o.salt, String(yc.matKhau || "")) !== o.hash) {
      const lanSai = (+o.lanSai || 0) + 1;
      const sua = { lanSai: lanSai };
      if (lanSai >= SO_LAN_SAI_TOI_DA) { sua.lanSai = 0; sua.khoaDen = new Date(Date.now() + PHUT_KHOA_SAI * 60000).toISOString(); }
      suaDong("TaiKhoan", tk.hang, sua);
      throw loi("Sai tên đăng nhập hoặc mật khẩu.");
    }
    if (o.trangThai === "cho") throw loi("Tài khoản của em đang chờ thầy duyệt.", "cho-duyet");
    if (o.trangThai !== "ok") throw loi("Tài khoản của em đã bị khoá. Em liên hệ thầy.", "bi-khoa");
    suaDong("TaiKhoan", tk.hang, { lanSai: 0, khoaDen: "", dangNhapCuoi: bayGio() });
    const lop = timDong("Lop", o.maLop);
    return { token: taoToken({ u: o.id, r: "hs", pv: +o.pv || 1 }, HS_HAN_PHIEN_NGAY * 24), hs: hoSo(o, lop) };
  },

  "hs.toi": function (yc) {
    const tk = canHS(yc);
    return { hs: hoSo(tk.o, timDong("Lop", tk.o.maLop)) };
  },

  "hs.doiMatKhau": function (yc) {
    const tk = canHS(yc);
    if (bam(tk.o.salt, String(yc.matKhauCu || "")) !== tk.o.hash) throw loi("Mật khẩu cũ không đúng.");
    kiemMatKhau(yc.matKhauMoi);
    const salt = ngauNhien(16), pv = (+tk.o.pv || 1) + 1;
    suaDong("TaiKhoan", tk.hang, { salt: salt, hash: bam(salt, yc.matKhauMoi), pv: pv });
    return { token: taoToken({ u: tk.o.id, r: "hs", pv: pv }, HS_HAN_PHIEN_NGAY * 24) };
  },

  /* ---------- giáo viên ---------- */
  "gv.dangNhap": function (yc) {
    if (!KHOA_GV || KHOA_GV === "doi-mat-khau-nay") throw loi("Máy chủ chưa đặt KHOA_GV. Thầy sửa dòng KHOA_GV trong Apps Script rồi triển khai lại.");
    if (String(yc.khoa || "") !== KHOA_GV) { Utilities.sleep(800); throw loi("Sai khoá giáo viên."); }
    return { token: taoToken({ u: "gv", r: "gv", pv: 1 }, GV_HAN_PHIEN_GIO) };
  },

  "gv.dsLop": function (yc) {
    canGV(yc);
    const hs = docHet("TaiKhoan");
    const dem = {};
    hs.forEach(function (o) { const d = dem[o.maLop] = dem[o.maLop] || { tong: 0, cho: 0 }; d.tong++; if (o.trangThai === "cho") d.cho++; });
    return { lop: docHet("Lop").map(function (o) { return { maLop: o.maLop, tenLop: o.tenLop, khoi: +o.khoi || 0, dong: o.dong === "1", bxh: o.bxh === "1", soHS: (dem[o.maLop] || {}).tong || 0, choDuyet: (dem[o.maLop] || {}).cho || 0 }; }) };
  },

  "gv.taoLop": function (yc) {
    canGV(yc);
    const tenLop = chuanTen(yc.tenLop).toUpperCase();
    if (!tenLop) throw loi("Thầy nhập tên lớp, ví dụ 12A1.");
    return khoa(function () {
      const trung = docHet("Lop").filter(function (o) { return o.tenLop === tenLop && o.dong !== "1"; })[0];
      if (trung) throw loi("Đã có lớp " + tenLop + " (mã " + trung.maLop + "). Hai lớp trùng tên dễ làm học sinh vào nhầm lớp. Thầy đặt tên khác, ví dụ " + tenLop + "-2.");
      let ma;
      do { ma = maNgauNhien(6); } while (timDong("Lop", ma));
      them("Lop", { maLop: ma, tenLop: tenLop, khoi: +(String(tenLop).match(/^\d{1,2}/) || [0])[0] || 0, taoLuc: bayGio(), dong: "0" });
      return { maLop: ma, tenLop: tenLop };
    });
  },

  "gv.dongLop": function (yc) {
    canGV(yc);
    const lop = timDong("Lop", chuanMaLop(yc.maLop));
    if (!lop) throw loi("Không tìm thấy lớp.");
    suaDong("Lop", lop.hang, { dong: yc.dong ? "1" : "0" });
    return {};
  },

  "gv.dsHS": function (yc) {
    canGV(yc);
    const ma = yc.maLop ? chuanMaLop(yc.maLop) : "";
    return {
      hs: docHet("TaiKhoan").filter(function (o) { return !ma || o.maLop === ma; }).map(function (o) {
        return { id: o.id, tenDN: o.tenDN, hoTen: o.hoTen, maLop: o.maLop, trangThai: o.trangThai, taoLuc: o.taoLuc, dangNhapCuoi: o.dangNhapCuoi };
      })
    };
  },

  /* đổi trạng thái nhiều học sinh: ok (duyệt / mở khoá) | khoa | xoa */
  "gv.doiTrangThai": function (yc) {
    canGV(yc);
    const ids = (yc.ids || []).map(String), tt = String(yc.trangThai || "");
    if (["ok", "khoa", "xoa"].indexOf(tt) < 0) throw loi("Trạng thái không hợp lệ.");
    return khoa(function () {
      const sh = trang("TaiKhoan"), cot = BANG.TaiKhoan;
      const vals = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, cot.length).getValues() : [];
      const can = {}; ids.forEach(function (i) { can[i] = 1; });
      let n = 0; const xoa = [];
      vals.forEach(function (r, i) {
        if (!can[docO(r[0])]) return;
        n++;
        if (tt === "xoa") xoa.push(i + 2);
        else sh.getRange(i + 2, cot.indexOf("trangThai") + 1).setValue(o2c("trangThai", tt));
      });
      xoa.reverse().forEach(function (h) { sh.deleteRow(h); });
      ghiNhatKy("gv", "trang-thai-" + tt, ids.join(","));
      return { n: n };
    });
  },

  /* xoá lớp tạo nhầm: chỉ xoá được khi lớp không còn học sinh, bài kiểm tra hay bài giao (tránh mất dữ liệu) */
  "gv.xoaLop": function (yc) {
    canGV(yc);
    const ma = chuanMaLop(yc.maLop);
    return khoa(function () {
      const lop = timDong("Lop", ma);
      if (!lop) throw loi("Không tìm thấy lớp.");
      const hs = docCot("TaiKhoan", ["maLop"]).filter(function (o) { return o.maLop === ma; }).length;
      const bai = docCot("BaiKT", ["maLop", "chuHS"]).filter(function (o) { return o.maLop === ma && !o.chuHS; }).length;
      const giao = docCot("GiaoTuHoc", ["maLop"]).filter(function (o) { return o.maLop === ma; }).length;
      if (hs || bai || giao) throw loi("Lớp " + lop.o.tenLop + " còn " + [hs && hs + " học sinh", bai && bai + " bài kiểm tra", giao && giao + " bài tự học giao"].filter(Boolean).join(", ") + ". Thầy chuyển hoặc xoá các mục đó trước, rồi mới xoá lớp.");
      xoaTheo("Lop", function (o) { return o.maLop === ma; });
      xoaTheo("ThongBao", function (o) { return o.maLop === ma; });
      xoaTheo("BaiKT", function (o) { return o.maLop === ma; });           // chỉ còn bài thi thử của học sinh (đã không còn học sinh)
      ghiNhatKy("gv", "xoa-lop", ma + " " + lop.o.tenLop);
      return { tenLop: lop.o.tenLop };
    });
  },

  /* chuyển học sinh sang lớp khác (VD em đăng kí nhầm vào lớp cũ đã đóng) */
  "gv.chuyenLop": function (yc) {
    canGV(yc);
    const ids = (yc.ids || []).map(String), maLop = chuanMaLop(yc.maLop);
    const lop = timDong("Lop", maLop);
    if (!lop) throw loi("Không tìm thấy lớp " + maLop + ".");
    return khoa(function () {
      let n = 0;
      ids.forEach(function (id) { const t = timDong("TaiKhoan", id); if (t && t.o.maLop !== maLop) { suaDong("TaiKhoan", t.hang, { maLop: maLop }); n++; } });
      ghiNhatKy("gv", "chuyen-lop", maLop + ": " + ids.join(","));
      return { n: n, tenLop: lop.o.tenLop };
    });
  },

  "gv.datLaiMatKhau": function (yc) {
    canGV(yc);
    const tk = timDong("TaiKhoan", String(yc.id || ""));
    if (!tk) throw loi("Không tìm thấy học sinh.");
    const mk = maNgauNhien(8).toLowerCase();
    const salt = ngauNhien(16);
    suaDong("TaiKhoan", tk.hang, { salt: salt, hash: bam(salt, mk), pv: (+tk.o.pv || 1) + 1, lanSai: 0, khoaDen: "" });
    ghiNhatKy("gv", "dat-lai-mk", tk.o.tenDN);
    return { matKhauTam: mk, tenDN: tk.o.tenDN };
  },

  /* nạp câu hỏi: ghi đè câu cùng mã (mon|lop|id), thêm câu mới. Gửi theo từng gói khoảng 200 câu. */
  "gv.napCau": function (yc) {
    canGV(yc);
    const mon = chuanTen(yc.mon) || "Toán";
    const qs = yc.questions || [];
    if (qs.length > 500) throw loi("Mỗi lần gửi tối đa 500 câu.");
    return khoa(function () {
      const luc = bayGio();
      const dong = qs.map(function (q) {
        if (!q.id || !q.loai || !q.muc) throw loi("Câu thiếu id/loại/mức: " + JSON.stringify(q).slice(0, 80));
        const o = {
          k: mon + "|" + (+q.lop || 0) + "|" + q.id, mon: mon, lop: +q.lop || 0, id: q.id, loai: q.loai, muc: q.muc,
          chuong: +q.chuong || 0, bai: +q.bai || 0, dangSo: +q.dangSo || 0, dkey: q.dkey || "",
          de: q.de || "", pa: q.pa ? JSON.stringify(q.pa) : "", y: q.y ? JSON.stringify(q.y) : "", da: q.da == null ? "" : String(q.da),
          loigiai: q.loigiai || "", file: q.file || "", capNhat: luc
        };
        ["de", "pa", "y", "loigiai"].forEach(function (c) { if (String(o[c]).length > 49000) throw loi("Câu " + q.id + " quá dài (ô " + c + " vượt 49.000 kí tự)."); });
        return o;
      });
      const kq = ghiDe("CauHoi", dong);
      const dang = Object.keys(yc.dang || {}).map(function (k) {
        const lop = +k.split("|")[0] || 0, dkey = k.split("|")[1] || "";
        return { k: mon + "|" + lop + "|" + dkey, mon: mon, lop: lop, dkey: dkey, ten: String(yc.dang[k] || "") };
      });
      if (dang.length) ghiDe("Dang", dang);
      return { moi: kq.moi, capNhat: kq.capNhat };
    });
  },

  "gv.thongKeNH": function (yc) {
    canGV(yc);
    const sh = trang("CauHoi");
    const n = sh.getLastRow() - 1;
    const dem = {};
    if (n > 0) {
      const cot = BANG.CauHoi;
      const ci = [cot.indexOf("mon"), cot.indexOf("lop"), cot.indexOf("loai"), cot.indexOf("muc")];
      sh.getRange(2, 1, n, cot.indexOf("muc") + 1).getValues().forEach(function (r) {
        const k = docO(r[ci[0]]) + "|" + r[ci[1]];
        const d = dem[k] = dem[k] || { mon: docO(r[ci[0]]), lop: +r[ci[1]], tong: 0, TN: 0, DS: 0, TLN: 0, NB: 0, TH: 0, VD: 0, VDC: 0 };
        d.tong++; d[docO(r[ci[2]])] = (d[docO(r[ci[2]])] || 0) + 1; d[docO(r[ci[3]])] = (d[docO(r[ci[3]])] || 0) + 1;
      });
    }
    return { nganHang: Object.keys(dem).sort().map(function (k) { return dem[k]; }) };
  },

  "gv.xoaNganHang": function (yc) {
    canGV(yc);
    const mon = chuanTen(yc.mon), lop = +yc.lop;
    if (!mon || !lop) throw loi("Thiếu môn hoặc lớp.");
    return khoa(function () {
      const n1 = xoaTheo("CauHoi", function (o) { return o.mon === mon && +o.lop === lop; });
      xoaTheo("Dang", function (o) { return o.mon === mon && +o.lop === lop; });
      ghiNhatKy("gv", "xoa-ngan-hang", mon + " " + lop + ": " + n1);
      return { n: n1 };
    });
  }
};

/* ============================== bài kiểm tra ============================== */
Object.assign(VIEC, {
  /* ---------- giáo viên ---------- */
  /* cấu trúc ngân hàng của một môn – lớp: các dạng và số câu từng loại × mức, để soạn ma trận */
  "gv.cauTrucNH": function (yc) {
    canGV(yc);
    const mon = chuanTen(yc.mon), lop = +yc.lop;
    const dang = {};
    docCot("CauHoi", ["mon", "lop", "loai", "muc", "chuong", "bai", "dangSo", "dkey"]).forEach(function (o) {
      if (o.mon !== mon || +o.lop !== lop) return;
      const d = dang[o.dkey] = dang[o.dkey] || { dkey: o.dkey, chuong: +o.chuong, bai: +o.bai, so: +o.dangSo, ten: "", n: 0, c: {} };
      d.n++; d.c[o.loai + "|" + o.muc] = (d.c[o.loai + "|" + o.muc] || 0) + 1;
    });
    docHet("Dang").forEach(function (o) { if (o.mon === mon && +o.lop === lop && dang[o.dkey]) dang[o.dkey].ten = o.ten; });
    return { dang: Object.keys(dang).map(function (k) { return dang[k]; }).sort(function (a, b) { return a.chuong - b.chuong || a.bai - b.bai || a.so - b.so; }) };
  },

  "gv.taoBai": function (yc) {
    canGV(yc);
    const ten = chuanTen(yc.ten), maLop = chuanMaLop(yc.maLop), mon = chuanTen(yc.mon), lop = +yc.lop;
    const thoiGian = Math.round(+yc.thoiGian || 0);
    if (!ten) throw loi("Thầy đặt tên bài kiểm tra.");
    if (!timDong("Lop", maLop)) throw loi("Không tìm thấy lớp.");
    if (thoiGian < 5 || thoiGian > 180) throw loi("Thời gian làm bài từ 5 đến 180 phút.");
    const M = chuanMaTran(yc.maTran);
    const slots = oCuaMaTran(M);
    if (!slots.length) throw loi("Ma trận chưa có câu nào.");
    if (slots.length > 60) throw loi("Một bài tối đa 60 câu.");
    // đủ câu cho mỗi ô?
    const pool = khoCau(mon, lop), thieu = [];
    const can = {}; slots.forEach(function (s) { const k = s.dkey + "|" + s.loai + "|" + s.muc; can[k] = (can[k] || 0) + 1; });
    Object.keys(can).forEach(function (k) { if ((pool[k] || []).length < can[k]) thieu.push(k.replace(/\|/g, " ") + ": cần " + can[k] + ", có " + (pool[k] || []).length); });
    if (thieu.length) throw loi("Ngân hàng không đủ câu ở: " + thieu.slice(0, 6).join("; ") + (thieu.length > 6 ? "…" : ""));
    let dongLuc = "", moLuc = "";
    if (yc.dongLuc) { const d = new Date(yc.dongLuc); if (isNaN(d)) throw loi("Giờ đóng bài không hợp lệ."); dongLuc = d.toISOString(); }
    if (yc.moLuc) { const d = new Date(yc.moLuc); if (isNaN(d)) throw loi("Giờ mở bài không hợp lệ."); if (d > new Date()) moLuc = d.toISOString(); }
    if (moLuc && dongLuc && dongLuc <= moLuc) throw loi("Giờ đóng bài phải sau giờ mở bài.");
    const tuyChon = { tronCau: yc.tronCau !== false, tronPA: yc.tronPA !== false, thiNghiem: yc.thiNghiem !== false };
    return khoa(function () {
      let ma; do { ma = "B" + maNgauNhien(5); } while (timDong("BaiKT", ma));
      them("BaiKT", { maBai: ma, ten: ten, maLop: maLop, mon: mon, lop: lop, maTran: JSON.stringify(M), soCau: slots.length, thoiGian: thoiGian, dongLuc: dongLuc, trangThai: yc.moNgay || moLuc ? "mo" : "nhap", congBo: "0", taoLuc: bayGio(), moLuc: moLuc, tuyChon: JSON.stringify(tuyChon), chuHS: "" });
      ghiNhatKy("gv", "tao-bai", ma + " " + ten);
      return { maBai: ma };
    });
  },

  "gv.dsBai": function (yc) {
    canGV(yc);
    const lop = {}; docHet("Lop").forEach(function (o) { lop[o.maLop] = o.tenLop; });
    const dem = {};
    docCot("DeThi", ["maBai", "trangThai"]).forEach(function (o) { const d = dem[o.maBai] = dem[o.maBai] || { vao: 0, nop: 0 }; d.vao++; if (o.trangThai === "nop") d.nop++; });
    return {
      bai: docHet("BaiKT").filter(function (o) { return !o.chuHS; }).reverse().map(function (o) {
        return { maBai: o.maBai, ten: o.ten, maLop: o.maLop, tenLop: lop[o.maLop] || o.maLop, mon: o.mon, lop: +o.lop, soCau: +o.soCau, thoiGian: +o.thoiGian, dongLuc: o.dongLuc, moLuc: o.moLuc, tuyChon: Object.assign({ tronCau: true, tronPA: true, thiNghiem: true }, docJSON(o.tuyChon, {})), trangThai: trangThaiBai(o), congBo: o.congBo === "1", taoLuc: o.taoLuc, daVao: (dem[o.maBai] || {}).vao || 0, daNop: (dem[o.maBai] || {}).nop || 0 };
      })
    };
  },

  /* mo | dong | nhap ; congBo: true/false */
  "gv.suaBai": function (yc) {
    canGV(yc);
    const b = timDong("BaiKT", String(yc.maBai || ""));
    if (!b) throw loi("Không tìm thấy bài kiểm tra.");
    const sua = {};
    if (yc.trangThai) { if (["mo", "dong", "nhap"].indexOf(yc.trangThai) < 0) throw loi("Trạng thái không hợp lệ."); sua.trangThai = yc.trangThai; if (yc.trangThai === "mo" && b.o.dongLuc && new Date(b.o.dongLuc) < new Date()) sua.dongLuc = ""; if (yc.trangThai === "mo" && b.o.moLuc) sua.moLuc = ""; }
    if (yc.congBo != null) sua.congBo = yc.congBo ? "1" : "0";
    suaDong("BaiKT", b.hang, sua);
    if (sua.trangThai === "dong") chamQuaHan(b.o.maBai, true);
    ghiNhatKy("gv", "sua-bai", b.o.maBai + " " + JSON.stringify(sua));
    return {};
  },

  "gv.xoaBai": function (yc) {
    canGV(yc);
    const ma = String(yc.maBai || "");
    return khoa(function () {
      const n = xoaTheo("BaiKT", function (o) { return o.maBai === ma; });
      const m = xoaTheo("DeThi", function (o) { return o.maBai === ma || o.maBai.indexOf(ma + "~") === 0; });
      ghiNhatKy("gv", "xoa-bai", ma + " (" + m + " bài làm)");
      return { n: n, baiLam: m };
    });
  },

  /* theo dõi một bài: từng học sinh của lớp, trạng thái, số câu đã làm, điểm */
  "gv.giamSat": function (yc) {
    canGV(yc);
    const b = timDong("BaiKT", String(yc.maBai || ""));
    if (!b) throw loi("Không tìm thấy bài kiểm tra.");
    chamQuaHan(b.o.maBai, trangThaiBai(b.o) === "dong");
    const de = {};
    docHet("DeThi").forEach(function (o) { if (o.maBai === b.o.maBai) de[o.hsId] = o; });
    const hs = docHet("TaiKhoan").filter(function (o) { return o.maLop === b.o.maLop && (o.trangThai === "ok" || de[o.id]); }).map(function (o) {
      const d = de[o.id];
      let soLam = 0; if (d) { try { soLam = Object.keys(JSON.parse(d.traLoi || "{}")).filter(function (k) { return String(JSON.parse(d.traLoi)[k]).trim() !== ""; }).length; } catch (e) { } }
      return { id: o.id, hoTen: o.hoTen, tenDN: o.tenDN, trangThai: d ? d.trangThai : "chua", soLam: soLam, batDau: d ? d.batDau : "", nopLuc: d ? d.nopLuc : "", diem: d && d.trangThai === "nop" ? +d.diem : null, luuLuc: d ? d.luuLuc : "", viPham: d ? +d.viPham || 0 : 0, khoa: !!(d && d.trangThai === "lam" && d.khoa === "1") };
    });
    return { bai: { maBai: b.o.maBai, ten: b.o.ten, soCau: +b.o.soCau, trangThai: trangThaiBai(b.o), congBo: b.o.congBo === "1", ketQuaMo: ketQuaDaMo(b.o), thiNghiem: thiNghiem(b.o) }, hs: hs, bayGio: bayGio() };
  },

  /* cho một học sinh làm lại bài: bài làm cũ được cất lại (đổi mã thành maBai~thờiđiểm), em vào lại sẽ nhận đề mới */
  "gv.choLamLai": function (yc) {
    canGV(yc);
    const b = timDong("BaiKT", String(yc.maBai || ""));
    if (!b) throw loi("Không tìm thấy bài kiểm tra.");
    if (trangThaiBai(b.o) !== "mo") throw loi("Bài đang không mở. Thầy mở lại bài (hoặc dời giờ đóng) trước, rồi mới cho làm lại.");
    const id = String(yc.hsId || "");
    return khoa(function () {
      const d = timDong("DeThi", b.o.maBai + "|" + id);
      if (!d) throw loi("Em này chưa vào bài, không cần cho làm lại.");
      const cu = b.o.maBai + "~" + Date.now();
      suaDong("DeThi", d.hang, { k: cu + "|" + id, maBai: cu, khoa: "" });
      ghiNhatKy("gv", "cho-lam-lai", b.o.maBai + " " + id + " (bài cũ: " + d.o.trangThai + ", điểm " + d.o.diem + ", vi phạm " + (+d.o.viPham || 0) + ")");
      return { cu: { trangThai: d.o.trangThai, diem: d.o.diem, viPham: +d.o.viPham || 0 } };
    });
  },

  /* mở khoá cho học sinh bị khoá vì rời màn hình lần 2 */
  "gv.moKhoaThi": function (yc) {
    canGV(yc);
    const ma = String(yc.maBai || ""), ids = [].concat(yc.hsId || []).map(String);
    return khoa(function () {
      let n = 0;
      ids.forEach(function (id) {
        const d = timDong("DeThi", ma + "|" + id);
        if (d && d.o.khoa === "1") { suaDong("DeThi", d.hang, { khoa: "" }); n++; }
      });
      return { n: n };
    });
  },

  /* ---------- học sinh ---------- */
  "hs.dsBai": function (yc) {
    const tk = canHS(yc);
    const cua = {};
    docHet("DeThi").forEach(function (o) { if (o.hsId === tk.o.id) cua[o.maBai] = o; });
    const bai = docHet("BaiKT").filter(function (o) {
      if (o.maLop !== tk.o.maLop || (o.chuHS && o.chuHS !== tk.o.id)) return false;
      const tt = trangThaiBai(o);
      if (o.chuHS) return !cua[o.maBai] || cua[o.maBai].trangThai === "lam";     // thi thử: chỉ hiện bài chưa nộp
      return tt === "mo" || tt === "hen" || cua[o.maBai];
    }).reverse().map(function (o) {
      const d = cua[o.maBai], mo = d && d.trangThai === "nop" && ketQuaDaMo(o);
      return { maBai: o.maBai, ten: o.ten, soCau: +o.soCau, thoiGian: +o.thoiGian, dongLuc: o.dongLuc, moLuc: o.moLuc, thiThu: !!o.chuHS, trangThai: trangThaiBai(o), cuaEm: d ? d.trangThai : "chua", hanNop: d ? d.hanNop : "", diem: mo ? +d.diem : null };
    });
    return { bai: bai, giao: giaoCuaHS(tk), thongBao: thongBaoCuaLop(tk.o.maLop), bayGio: bayGio() };
  },

  /* vào làm bài: lần đầu thì sinh đề riêng cho em, các lần sau trả lại đúng đề cũ và câu đã làm */
  "hs.vaoBai": function (yc) {
    const tk = canHS(yc);
    const b = timDong("BaiKT", String(yc.maBai || ""));
    if (!b || b.o.maLop !== tk.o.maLop || (b.o.chuHS && b.o.chuHS !== tk.o.id)) throw loi("Không tìm thấy bài kiểm tra.");
    const k = b.o.maBai + "|" + tk.o.id;
    let d = timDong("DeThi", k);
    if (d && d.o.trangThai === "nop") throw loi("Em đã nộp bài này rồi.", "da-nop");
    if (!d) {
      if (trangThaiBai(b.o) === "hen") throw loi("Bài mở lúc " + gioVN(b.o.moLuc) + ". Em quay lại đúng giờ nhé.", "chua-mo");
      if (trangThaiBai(b.o) !== "mo") throw loi("Bài kiểm tra chưa mở hoặc đã đóng.", "chua-mo");
      const cau = sinhDe(b.o, tk.o.id);           // sinh đề ngoài khoá cho nhanh
      d = khoa(function () {
        const coSan = timDong("DeThi", k);         // bấm hai lần: lấy bản đã có
        if (coSan) return coSan;
        const bd = new Date();
        let han = new Date(bd.getTime() + (+b.o.thoiGian) * 60000);
        if (b.o.dongLuc && new Date(b.o.dongLuc) < han) han = new Date(b.o.dongLuc);
        them("DeThi", { k: k, maBai: b.o.maBai, hsId: tk.o.id, cau: JSON.stringify(cau), traLoi: "{}", batDau: bd.toISOString(), hanNop: han.toISOString(), luuLuc: "", nopLuc: "", trangThai: "lam", diem: "", chiTiet: "", viPham: 0, khoa: "" });
        return timDong("DeThi", k);
      });
    }
    if (new Date() > new Date(new Date(d.o.hanNop).getTime() + PHUT_AN_HAN * 60000)) { cham(d); throw loi("Đã hết giờ làm bài, bài của em đã được nộp.", "da-nop"); }
    const cau = JSON.parse(d.o.cau);
    const q = docCauTheoKhoa(cau.map(function (c) { return c.k; }));
    return {
      bai: { maBai: b.o.maBai, ten: b.o.ten, mon: b.o.mon, soCau: cau.length },
      cau: cau.map(function (c, i) { return deChoHS(q[c.k], c, i); }),
      traLoi: JSON.parse(d.o.traLoi || "{}"), batDau: d.o.batDau, hanNop: d.o.hanNop, bayGio: bayGio(),
      thiNghiem: thiNghiem(b.o), viPham: +d.o.viPham || 0, khoa: d.o.khoa === "1"
    };
  },

  /* lưu câu trả lời (gửi theo lô): ghép với câu đã lưu, không xoá câu cũ */
  "hs.luuBai": function (yc) {
    const tk = canHS(yc);
    const d = timDong("DeThi", String(yc.maBai || "") + "|" + tk.o.id);
    if (!d) throw loi("Em chưa vào bài này.");
    if (d.o.trangThai === "nop") throw loi("Bài đã nộp.", "da-nop");
    if (new Date() > new Date(new Date(d.o.hanNop).getTime() + PHUT_AN_HAN * 60000)) { cham(d); throw loi("Đã hết giờ, bài của em đã được nộp.", "da-nop"); }
    if (d.o.khoa === "1") {
      if (yc.nop && new Date() >= new Date(d.o.hanNop)) { cham(d); return { daNop: true }; }   // hết giờ khi đang khoá: chấm phần đã lưu
      throw loi("Bài đang bị khoá. Em báo thầy mở khoá.", "bi-khoa-thi");
    }
    const tl = gopTraLoi(d, yc.traLoi);
    suaDong("DeThi", d.hang, { traLoi: JSON.stringify(tl), luuLuc: bayGio() });
    if (yc.nop) { d.o.traLoi = JSON.stringify(tl); cham(d); return { daNop: true }; }
    return { daLuu: Object.keys(tl).length, bayGio: bayGio() };
  },

  /* thi nghiêm: học sinh rời màn hình làm bài. Lần 1 cảnh báo, lần 2 khoá chờ thầy mở, lần 3 tự nộp.
     Gửi kèm các câu chưa kịp lưu để không mất bài. */
  "hs.viPham": function (yc) {
    const tk = canHS(yc);
    const b = timDong("BaiKT", String(yc.maBai || ""));
    if (!b) throw loi("Không tìm thấy bài kiểm tra.");
    const k = b.o.maBai + "|" + tk.o.id;
    return khoa(function () {
      const d = timDong("DeThi", k);
      if (!d) throw loi("Em chưa vào bài này.");
      if (d.o.trangThai === "nop") return { daNop: true, viPham: +d.o.viPham || 0 };
      if (!thiNghiem(b.o)) return { viPham: 0, khoa: false };
      let daLuu = false;
      if (d.o.khoa !== "1" && yc.traLoi) { d.o.traLoi = JSON.stringify(gopTraLoi(d, yc.traLoi)); suaDong("DeThi", d.hang, { traLoi: d.o.traLoi, luuLuc: bayGio() }); daLuu = true; }
      // cùng một lần rời màn hình có thể báo hai lần (mất mạng, tải lại trang): bỏ qua lần báo cách lần trước dưới 5 giây
      if (d.o.viPhamLuc && Date.now() - new Date(d.o.viPhamLuc).getTime() < 5000) return { viPham: +d.o.viPham || 0, khoa: d.o.khoa === "1", daLuu: daLuu };
      if (d.o.khoa === "1") return { viPham: +d.o.viPham || 0, khoa: true };   // đang khoá thì không tính thêm
      const n = (+d.o.viPham || 0) + 1;
      suaDong("DeThi", d.hang, { viPham: n, viPhamLuc: bayGio(), khoa: n === 2 ? "1" : "" });
      d.o.viPham = n;
      ghiNhatKy(tk.o.id, "vi-pham", b.o.maBai + " lần " + n);
      if (n >= 3) { cham(d); return { viPham: n, daNop: true }; }
      return { viPham: n, khoa: n === 2, daLuu: daLuu };
    });
  },

  /* học sinh đang bị khoá hỏi lại xem thầy đã mở chưa */
  "hs.trangThaiThi": function (yc) {
    const tk = canHS(yc);
    const d = timDong("DeThi", String(yc.maBai || "") + "|" + tk.o.id);
    if (!d) throw loi("Em chưa vào bài này.");
    return { daNop: d.o.trangThai === "nop", khoa: d.o.khoa === "1", viPham: +d.o.viPham || 0, bayGio: bayGio() };
  },

  "hs.ketQua": function (yc) {
    const tk = canHS(yc);
    const b = timDong("BaiKT", String(yc.maBai || ""));
    if (!b) throw loi("Không tìm thấy bài kiểm tra.");
    const d = timDong("DeThi", b.o.maBai + "|" + tk.o.id);
    if (!d || d.o.trangThai !== "nop") throw loi("Em chưa nộp bài này.");
    chamQuaHan(b.o.maBai, trangThaiBai(b.o) === "dong");
    if (!ketQuaDaMo(b.o)) {
      const tt = tinhNop(b.o);
      return { cho: true, daNop: tt.nop, tong: tt.tong };
    }
    const cau = JSON.parse(d.o.cau), tl = JSON.parse(d.o.traLoi || "{}"), ct = JSON.parse(d.o.chiTiet || "[]");
    const q = docCauTheoKhoa(cau.map(function (c) { return c.k; }));
    return {
      bai: { maBai: b.o.maBai, ten: b.o.ten, soCau: cau.length }, diem: +d.o.diem,
      cau: cau.map(function (c, i) {
        const x = q[c.k] || {};
        return { i: i, loai: c.loai, order: c.order, q: { loai: x.loai, de: x.de, pa: x.pa, y: x.y, da: x.da, loigiai: x.loigiai, id: x.id }, traLoi: tl[i] == null ? "" : tl[i], diem: ct[i] ? ct[i].d : 0, toiDa: ct[i] ? ct[i].m : 0 };
      })
    };
  }
});

/* ---------- ma trận, sinh đề, chấm ---------- */
function chuanMaTran(M) {
  const out = {};
  Object.keys(M || {}).forEach(function (dk) {
    if (!/^C\d+-B\d+-D\d+$/.test(dk)) return;
    LOAI.forEach(function (L) { MUC.forEach(function (m) {
      const n = Math.max(0, Math.min(40, Math.round(+((M[dk] || {})[L] || {})[m] || 0)));
      if (n) { out[dk] = out[dk] || {}; out[dk][L] = out[dk][L] || {}; out[dk][L][m] = n; }
    }); });
  });
  return out;
}
function soDkey(dk) { const m = dk.match(/C(\d+)-B(\d+)-D(\d+)/); return m ? [+m[1], +m[2], +m[3]] : [0, 0, 0]; }
function oCuaMaTran(M) {
  const dks = Object.keys(M).sort(function (a, b) { const x = soDkey(a), y = soDkey(b); return x[0] - y[0] || x[1] - y[1] || x[2] - y[2]; });
  const slots = [];
  LOAI.forEach(function (L) { dks.forEach(function (dk) { MUC.forEach(function (m) { for (let i = 0; i < (((M[dk] || {})[L] || {})[m] || 0); i++) slots.push({ loai: L, dkey: dk, muc: m }); }); }); });
  return slots;
}
function khoCau(mon, lop) {
  const pool = {};
  docCot("CauHoi", ["k", "mon", "lop", "loai", "muc", "dkey"]).forEach(function (o) {
    if (o.mon !== mon || +o.lop !== +lop) return;
    const k = o.dkey + "|" + o.loai + "|" + o.muc; (pool[k] = pool[k] || []).push(o.k);
  });
  return pool;
}
function rng(seed) { let a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function bamSo(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function tron(arr, R) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

/* sinh đề cho một học sinh: mỗi ô của ma trận bốc một câu cùng dạng, cùng loại, cùng mức;
   ưu tiên câu ít bạn cùng bài đã nhận; trộn thứ tự câu trong từng phần và thứ tự phương án câu TN */
function sinhDe(bai, hsId) {
  const R = rng(bamSo("de|" + bai.maBai + "|" + hsId + "|" + Date.now()));
  const slots = oCuaMaTran(JSON.parse(bai.maTran));
  const pool = khoCau(bai.mon, bai.lop);
  const tc = docJSON(bai.tuyChon, { tronCau: true, tronPA: true });
  const daDung = {};
  docCot("DeThi", ["maBai", "cau"]).forEach(function (o) {
    if (o.maBai !== bai.maBai) return;
    try { JSON.parse(o.cau).forEach(function (c) { daDung[c.k] = (daDung[c.k] || 0) + 1; }); } catch (e) { }
  });
  const lay = {};
  const chon = slots.map(function (s) {
    const ung = tron(pool[s.dkey + "|" + s.loai + "|" + s.muc] || [], R).filter(function (k) { return !lay[k]; });
    if (!ung.length) throw loi("Ngân hàng không còn đủ câu cho bài này. Em báo thầy nhé.");
    ung.sort(function (a, b) { return (daDung[a] || 0) - (daDung[b] || 0); });   // sort ổn định: giữ thứ tự ngẫu nhiên khi bằng nhau
    lay[ung[0]] = 1;
    return { k: ung[0], loai: s.loai, order: s.loai === "TN" ? (tc.tronPA ? tron([0, 1, 2, 3], R) : [0, 1, 2, 3]) : s.loai === "DS" ? [0, 1, 2, 3] : [] };
  });
  const out = [];
  LOAI.forEach(function (L) { const nhom = chon.filter(function (c) { return c.loai === L; }); (tc.tronCau ? tron(nhom, R) : nhom).forEach(function (c) { out.push(c); }); });
  return out;
}

/* câu gửi cho học sinh lúc làm bài: KHÔNG có đáp án, lời giải; phương án TN đã đảo sẵn */
function deChoHS(x, c, i) {
  if (!x) return { i: i, loai: c.loai, de: "(Câu hỏi đã bị xoá khỏi ngân hàng)", pa: [], y: [] };
  const o = { i: i, loai: c.loai, de: x.de };
  if (c.loai === "TN") o.pa = c.order.map(function (j) { return x.pa[j]; });
  if (c.loai === "DS") o.y = c.order.map(function (j) { return { t: x.y[j].t }; });
  return o;
}
function docCauTheoKhoa(ks) {
  const sh = trang("CauHoi"), n = sh.getLastRow() - 1, out = {};
  if (n < 1) return out;
  const can = {}; ks.forEach(function (k) { can[k] = 1; });
  const hang = [];
  sh.getRange(2, 1, n, 1).getValues().forEach(function (r, i) { if (can[docO(r[0])]) hang.push(i + 2); });
  hang.sort(function (a, b) { return a - b; });
  for (let i = 0; i < hang.length;) {          // gom các hàng liền nhau thành một lần đọc
    let j = i; while (j + 1 < hang.length && hang[j + 1] === hang[j] + 1) j++;
    sh.getRange(hang[i], 1, j - i + 1, BANG.CauHoi.length).getValues().forEach(function (r) {
      const o = hangThanhO("CauHoi", r);
      o.pa = o.pa ? JSON.parse(o.pa) : null; o.y = o.y ? JSON.parse(o.y) : null;
      out[o.k] = o;
    });
    i = j + 1;
  }
  return out;
}
function gopTraLoi(d, moi) {
  let tl = {}; try { tl = JSON.parse(d.o.traLoi || "{}"); } catch (e) { }
  const n = JSON.parse(d.o.cau).length;
  Object.keys(moi || {}).forEach(function (k) { const i = +k; if (i >= 0 && i < n) tl[i] = String(moi[k] == null ? "" : moi[k]).slice(0, 40); });
  return tl;
}
function chuanSo(s) { return String(s == null ? "" : s).replace(/\$/g, "").replace(/\s+/g, "").replace(/,/g, ".").replace(/^\+/, "").toLowerCase(); }
function dungTLN(tra, da) {
  const a = chuanSo(tra), b = chuanSo(da);
  if (!a) return false;
  if (a === b) return true;
  const x = parseFloat(a), y = parseFloat(b);
  return /^-?\d*\.?\d+$/.test(a) && /^-?\d*\.?\d+$/.test(b) && Math.abs(x - y) < 1e-9;
}
/* thi nghiêm bật sẵn cho bài thầy giao; thi thử của học sinh thì không */
function thiNghiem(bai) { return !bai.chuHS && docJSON(bai.tuyChon, {}).thiNghiem !== false; }
/* chấm theo thang 2025, quy về thang 10 */
function cham(d) {
  if (d.o.trangThai === "nop") return;
  const bai = timDong("BaiKT", d.o.maBai).o;
  const cau = JSON.parse(d.o.cau), tl = JSON.parse(d.o.traLoi || "{}");
  const q = docCauTheoKhoa(cau.map(function (c) { return c.k; }));
  const toan = /^To[aá]n/i.test(bai.mon);
  let diem = 0, toiDa = 0;
  const ct = cau.map(function (c, i) {
    const r = chamCau(q[c.k], c, tl[i], toan);
    diem += r.d; toiDa += r.m;
    return { d: r.d, m: r.m };
  });
  const thang10 = toiDa ? Math.round(diem / toiDa * 1000) / 100 : 0;
  suaDong("DeThi", d.hang, { trangThai: "nop", nopLuc: bayGio(), diem: thang10, chiTiet: JSON.stringify(ct) });
  d.o.trangThai = "nop"; d.o.diem = thang10;
}
/* chấm một câu theo thang 2025: d = điểm đạt, m = điểm tối đa, dung = đúng trọn vẹn */
function chamCau(x, c, traLoi, toan) {
  const t = String(traLoi == null ? "" : traLoi).trim();
  let m = 0, s = 0;
  if (c.loai === "TN") { m = 0.25; if (x && t && "ABCD".indexOf(t) === c.order.indexOf(0)) s = m; }
  else if (c.loai === "DS") {
    m = 1;
    if (x && x.y && t.length === 4) { let dung = 0; c.order.forEach(function (j, p) { const chon = t.charAt(p); if (chon === "Đ" || chon === "S") if ((chon === "Đ") === !!x.y[j].d) dung++; }); s = [0, 0.1, 0.25, 0.5, 1][dung]; }
  } else { m = toan ? 0.5 : 0.25; if (x && dungTLN(t, x.da)) s = m; }
  return { d: s, m: m, dung: s === m && m > 0 };
}
/* bài quá giờ mà chưa nộp (em tắt máy, mất mạng): tự nộp những câu đã lưu */
function chamQuaHan(maBai, dongHet) {
  const sh = trang("DeThi"), n = sh.getLastRow() - 1;
  if (n < 1) return;
  const now = Date.now();
  sh.getRange(2, 1, n, BANG.DeThi.length).getValues().forEach(function (r, i) {
    const o = hangThanhO("DeThi", r);
    if (o.maBai !== maBai || o.trangThai !== "lam") return;
    if (dongHet || now > new Date(o.hanNop).getTime() + PHUT_AN_HAN * 60000) cham({ hang: i + 2, o: o });
  });
}
function trangThaiBai(o) {
  if (o.trangThai === "mo" && o.dongLuc && new Date(o.dongLuc) < new Date()) return "dong";
  if (o.trangThai === "mo" && o.moLuc && new Date(o.moLuc) > new Date()) return "hen";
  return o.trangThai;
}
function tinhNop(bai) {
  const nop = {}; let soNop = 0;
  docCot("DeThi", ["maBai", "hsId", "trangThai"]).forEach(function (o) { if (o.maBai === bai.maBai && o.trangThai === "nop") { nop[o.hsId] = 1; soNop++; } });
  const ds = docCot("TaiKhoan", ["id", "maLop", "trangThai"]).filter(function (o) { return o.maLop === bai.maLop && o.trangThai === "ok"; });
  return { nop: soNop, tong: ds.length, het: ds.every(function (o) { return nop[o.id]; }) };
}
/* kết quả mở khi: thầy công bố, hoặc bài đã đóng, hoặc mọi em của lớp đã nộp */
function ketQuaDaMo(bai) {
  if (bai.congBo === "1" || trangThaiBai(bai) === "dong") return true;
  return tinhNop(bai).het;
}
/* đọc một số cột (đỡ tốn hơn đọc cả bảng) */
function docCot(ten, cot) {
  const sh = trang(ten), n = sh.getLastRow() - 1;
  if (n < 1) return [];
  const idx = cot.map(function (c) { return BANG[ten].indexOf(c); });
  const max = Math.max.apply(null, idx) + 1;
  return sh.getRange(2, 1, n, max).getValues().map(function (r) {
    const o = {}; cot.forEach(function (c, j) { o[c] = COT_SO[c] ? r[idx[j]] : docO(r[idx[j]]); }); return o;
  });
}

/* ============================== xác thực ============================== */
function taoToken(tt, gio) {
  tt.exp = Date.now() + gio * 3600000;
  const than = Utilities.base64EncodeWebSafe(JSON.stringify(tt));
  return than + "." + kyTen(than);
}
function docToken(token) {
  const p = String(token || "").split(".");
  if (p.length !== 2 || kyTen(p[0]) !== p[1]) return null;
  let tt;
  try { tt = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(p[0])).getDataAsString()); } catch (e) { return null; }
  if (!tt || !tt.exp || tt.exp < Date.now()) return null;
  return tt;
}
function kyTen(s) {
  const bm = PropertiesService.getScriptProperties().getProperty("BI_MAT");
  if (!bm) throw loi("Máy chủ chưa chạy caiDat().");
  return Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(s, bm));
}
function canHS(yc) {
  const tt = docToken(yc.token);
  if (!tt || tt.r !== "hs") throw loi("Phiên đăng nhập đã hết. Em đăng nhập lại nhé.", "het-phien");
  const tk = timDong("TaiKhoan", tt.u);
  if (!tk || (+tk.o.pv || 1) !== tt.pv) throw loi("Phiên đăng nhập đã hết. Em đăng nhập lại nhé.", "het-phien");
  if (tk.o.trangThai !== "ok") throw loi("Tài khoản của em đang bị khoá hoặc chờ duyệt.", "bi-khoa");
  return tk;
}
function canGV(yc) {
  const tt = docToken(yc.token);
  if (!tt || tt.r !== "gv") throw loi("Phiên giáo viên đã hết. Thầy đăng nhập lại.", "het-phien");
  return tt;
}
function bam(salt, mk) {
  let h = salt + "|" + mk;
  for (let i = 0; i < VONG_BAM; i++) h = hex(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, h + "|" + salt, Utilities.Charset.UTF_8));
  return h;
}
function hex(bytes) { return bytes.map(function (b) { return ("0" + (b & 255).toString(16)).slice(-2); }).join(""); }
function ngauNhien(n) { return Utilities.getUuid().replace(/-/g, "").slice(0, n) + (n > 32 ? ngauNhien(n - 32) : ""); }
function maNgauNhien(n) {
  const chu = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let s = ""; for (let i = 0; i < n; i++) s += chu.charAt(Math.floor(Math.random() * chu.length));
  return s;
}

/* ============================== kiểm dữ liệu vào ============================== */
function chuanTen(s) { return String(s || "").normalize("NFC").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 80); }
function chuanMaLop(s) { return String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8); }
function chuanTenDN(s) {
  const t = String(s || "").trim().toLowerCase();
  if (!/^[a-z0-9._]{4,24}$/.test(t)) throw loi("Tên đăng nhập gồm 4–24 kí tự: chữ không dấu, số, dấu chấm hoặc gạch dưới.");
  return t;
}
function kiemMatKhau(mk) {
  mk = String(mk || "");
  if (mk.length < 8) throw loi("Mật khẩu cần ít nhất 8 kí tự.");
  if (mk.length > 64) throw loi("Mật khẩu quá dài.");
}
function hoSo(o, lop) { return { id: o.id, tenDN: o.tenDN, hoTen: o.hoTen, maLop: o.maLop, tenLop: lop ? lop.o.tenLop : "" }; }
function bayGio() { return new Date().toISOString(); }

/* ============================== đọc ghi trang tính ============================== */
const DA_XEM_COT = {};
function trang(ten) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(ten);
  if (!sh && BANG[ten]) {                       // bản mới thêm bảng: tự tạo, thầy không phải chạy lại caiDat
    sh = ss.insertSheet(ten);
    sh.getRange(1, 1, 1, BANG[ten].length).setValues([BANG[ten]]).setFontWeight("bold");
    sh.setFrozenRows(1);
  }
  if (!sh) throw loi("Máy chủ chưa chạy caiDat() (thiếu trang " + ten + ").");
  if (BANG[ten] && !DA_XEM_COT[ten]) {         // bản mới thêm cột vào cuối bảng: ghi tên cột còn thiếu
    DA_XEM_COT[ten] = 1;
    if (sh.getLastColumn() < BANG[ten].length) sh.getRange(1, 1, 1, BANG[ten].length).setValues([BANG[ten]]).setFontWeight("bold");
  }
  return sh;
}
function khoa(fn) {
  const lk = LockService.getScriptLock();
  if (!lk.tryLock(20000)) throw loi("Máy chủ đang bận, em thử lại sau vài giây.", "ban");
  try { return fn(); } finally { lk.releaseLock(); }
}
/* chữ lưu kèm dấu ' để Trang tính giữ nguyên; khi đọc thì bỏ dấu đó */
function o2c(cot, v) {
  if (COT_SO[cot]) return v === "" || v == null ? "" : +v || 0;
  const s = v == null ? "" : String(v);
  return s === "" ? "" : "'" + s;
}
function docO(v) {
  if (v instanceof Date) return v.toISOString();
  const s = v == null ? "" : String(v);
  return s.charAt(0) === "'" ? s.slice(1) : s;
}
function hangThanhO(ten, r) {
  const o = {}; BANG[ten].forEach(function (c, i) { o[c] = COT_SO[c] ? r[i] : docO(r[i]); }); return o;
}
function oThanhHang(ten, o) { return BANG[ten].map(function (c) { return o2c(c, o[c]); }); }
function docHet(ten) {
  const sh = trang(ten), n = sh.getLastRow() - 1;
  if (n < 1) return [];
  return sh.getRange(2, 1, n, BANG[ten].length).getValues().map(function (r) { return hangThanhO(ten, r); });
}
function timDong(ten, khoaChinh) { return timTheo(ten, BANG[ten][0], khoaChinh); }
function timTheo(ten, cot, giaTri) {
  const sh = trang(ten), n = sh.getLastRow() - 1;
  if (n < 1 || giaTri === "" || giaTri == null) return null;
  const ci = BANG[ten].indexOf(cot) + 1;
  const col = sh.getRange(2, ci, n, 1).getValues();
  for (let i = 0; i < n; i++) {
    if (docO(col[i][0]) === String(giaTri)) {
      const r = sh.getRange(i + 2, 1, 1, BANG[ten].length).getValues()[0];
      return { hang: i + 2, o: hangThanhO(ten, r) };
    }
  }
  return null;
}
function them(ten, o) { trang(ten).appendRow(oThanhHang(ten, o)); }
function suaDong(ten, hang, sua) {
  const sh = trang(ten), cot = BANG[ten];
  Object.keys(sua).forEach(function (c) { sh.getRange(hang, cot.indexOf(c) + 1).setValue(o2c(c, sua[c])); });
}
/* ghi đè theo khoá (cột đầu): dòng cũ thay tại chỗ (gom các dòng liền nhau thành một lần ghi), dòng mới thêm vào cuối một lần */
function ghiDe(ten, dsO) {
  const sh = trang(ten), cot = BANG[ten], n = sh.getLastRow() - 1;
  const viTri = {};
  if (n > 0) sh.getRange(2, 1, n, 1).getValues().forEach(function (r, i) { viTri[docO(r[0])] = i + 2; });
  const cu = [], moi = [], daCo = {};
  dsO.forEach(function (o) {
    if (daCo[o.k]) { daCo[o.k].o = o; return; }   // trùng trong cùng gói: lấy bản sau
    const x = { o: o, hang: viTri[o.k] || 0 }; daCo[o.k] = x;
    (x.hang ? cu : moi).push(x);
  });
  cu.sort(function (a, b) { return a.hang - b.hang; });
  for (let i = 0; i < cu.length;) {
    let j = i; while (j + 1 < cu.length && cu[j + 1].hang === cu[j].hang + 1) j++;
    sh.getRange(cu[i].hang, 1, j - i + 1, cot.length).setValues(cu.slice(i, j + 1).map(function (x) { return oThanhHang(ten, x.o); }));
    i = j + 1;
  }
  if (moi.length) sh.getRange(sh.getLastRow() + 1, 1, moi.length, cot.length).setValues(moi.map(function (x) { return oThanhHang(ten, x.o); }));
  return { moi: moi.length, capNhat: cu.length };
}
/* xoá các dòng thoả điều kiện: viết lại phần còn lại một lần cho nhanh */
function xoaTheo(ten, dk) {
  const sh = trang(ten), cot = BANG[ten], n = sh.getLastRow() - 1;
  if (n < 1) return 0;
  const vals = sh.getRange(2, 1, n, cot.length).getValues();
  const giu = vals.filter(function (r) { return !dk(hangThanhO(ten, r)); });
  const xoa = n - giu.length;
  if (!xoa) return 0;
  sh.getRange(2, 1, n, cot.length).clearContent();
  if (giu.length) sh.getRange(2, 1, giu.length, cot.length).setValues(giu.map(function (r) { return r.map(function (v, i) { return COT_SO[cot[i]] ? v : o2c(cot[i], docO(v)); }); }));
  return xoa;
}
function ghiNhatKy(ai, viec, chiTiet) {
  try { trang("NhatKy").appendRow([o2c("luc", bayGio()), o2c("ai", ai), o2c("viec", viec), o2c("chiTiet", String(chiTiet || "").slice(0, 1000))]); } catch (e) { }
}

/* ============================== thống kê bài kiểm tra ============================== */
Object.assign(VIEC, {
  /* tỉ lệ đúng theo từng câu, từng dạng, từng mức; dạng yếu của từng em (để viết nhận xét) */
  "gv.thongKeBai": function (yc) {
    canGV(yc);
    const b = timDong("BaiKT", String(yc.maBai || ""));
    if (!b) throw loi("Không tìm thấy bài kiểm tra.");
    chamQuaHan(b.o.maBai, trangThaiBai(b.o) === "dong");
    const bai = docHet("DeThi").filter(function (o) { return o.maBai === b.o.maBai && o.trangThai === "nop"; });
    const theoK = {}, cuaHS = {};
    bai.forEach(function (o) {
      let cau, ct; try { cau = JSON.parse(o.cau); ct = JSON.parse(o.chiTiet || "[]"); } catch (e) { return; }
      cuaHS[o.hsId] = [];
      cau.forEach(function (c, i) {
        const r = ct[i] || { d: 0, m: 0 };
        const t = theoK[c.k] = theoK[c.k] || { k: c.k, loai: c.loai, lam: 0, d: 0, m: 0, dung: 0 };
        t.lam++; t.d += r.d; t.m += r.m; if (r.m && r.d >= r.m) t.dung++;
        cuaHS[o.hsId].push([c.k, r.d, r.m]);
      });
    });
    const q = docCauTheoKhoa(Object.keys(theoK));
    const tenDang = {};
    docHet("Dang").forEach(function (o) { if (o.mon === b.o.mon && +o.lop === +b.o.lop) tenDang[o.dkey] = o.ten; });
    const gom = function (khoaCua) {
      const g = {};
      Object.keys(theoK).forEach(function (k) {
        const t = theoK[k], x = q[k] || {}, kk = khoaCua(t, x);
        const a = g[kk] = g[kk] || { khoa: kk, lam: 0, d: 0, m: 0, soCau: 0 };
        a.lam += t.lam; a.d += t.d; a.m += t.m; a.soCau++;
      });
      return Object.keys(g).map(function (kk) { const a = g[kk]; a.tiLe = a.m ? Math.round(a.d / a.m * 1000) / 1000 : 0; delete a.d; delete a.m; return a; });
    };
    const cau = Object.keys(theoK).map(function (k) {
      const t = theoK[k], x = q[k] || {};
      return { k: k, id: x.id || k.split("|").pop(), loai: t.loai, muc: x.muc || "", dkey: x.dkey || "", tenDang: tenDang[x.dkey] || "", de: String(x.de || "").slice(0, 600), lam: t.lam, dung: t.dung, tiLe: t.m ? Math.round(t.d / t.m * 1000) / 1000 : 0 };
    }).sort(function (a, b) { return a.tiLe - b.tiLe || b.lam - a.lam; });
    const dang = gom(function (t, x) { return x.dkey || "?"; }).map(function (a) { a.ten = tenDang[a.khoa] || ""; return a; }).sort(function (a, b) { return a.tiLe - b.tiLe; });
    const muc = gom(function (t, x) { return x.muc || "?"; }).sort(function (a, b) { return MUC.indexOf(a.khoa) - MUC.indexOf(b.khoa); });
    const loai = gom(function (t) { return t.loai; }).sort(function (a, b) { return LOAI.indexOf(a.khoa) - LOAI.indexOf(b.khoa); });
    // dạng yếu (< 50%) và dạng vững (≥ 80%) của từng em
    const hs = {};
    Object.keys(cuaHS).forEach(function (id) {
      const g = {};
      cuaHS[id].forEach(function (r) { const dk = (q[r[0]] || {}).dkey || "?"; const a = g[dk] = g[dk] || [0, 0]; a[0] += r[1]; a[1] += r[2]; });
      const yeu = [], vung = [];
      Object.keys(g).forEach(function (dk) { if (!g[dk][1]) return; const tl = g[dk][0] / g[dk][1]; const ten = tenDang[dk] || dk; if (tl < 0.5) yeu.push(ten); else if (tl >= 0.8) vung.push(ten); });
      hs[id] = { yeu: yeu, vung: vung };
    });
    return { bai: { maBai: b.o.maBai, ten: b.o.ten }, soBai: bai.length, cau: cau, dang: dang, muc: muc, loai: loai, hs: hs };
  }
});

/* ============================== tự học ============================== */
const MUC_TIEU_NGAY = 5;          // mỗi ngày làm đúng 5 câu (khác nhau) là giữ chuỗi
const LICH_ON = [1, 3, 7, 14];    // câu sai: hẹn làm lại sau 1 ngày; đúng thì giãn ra 3, 7, 14 ngày; đúng 3 lần là thuộc
const SO_LOI_TOI_DA = 400;

function ngayVN(t) { return new Date((t == null ? Date.now() : t) + 7 * 3600000).toISOString().slice(0, 10); }
function congNgay(d, n) { const x = new Date(d + "T00:00:00Z"); x.setUTCDate(x.getUTCDate() + n); return x.toISOString().slice(0, 10); }
function docJSON(s, macDinh) { try { return s ? JSON.parse(s) : macDinh; } catch (e) { return macDinh; } }
function docTuHoc(hsId) {
  const r = timDong("TuHoc", hsId), o = r ? r.o : {};
  const t = { hang: r ? r.hang : 0, hsId: hsId, ngay: docJSON(o.ngay, {}), dang: docJSON(o.dang, {}), soLoi: docJSON(o.soLoi, {}), homNay: docJSON(o.homNay, {}), tongDung: +o.tongDung || 0, tongLam: +o.tongLam || 0 };
  const hn = ngayVN();
  if (t.homNay.d !== hn) t.homNay = { d: hn, ks: {}, p: [] };
  return t;
}
function ghiTuHoc(t) {
  const o = { hsId: t.hsId, ngay: JSON.stringify(t.ngay), dang: JSON.stringify(t.dang), soLoi: JSON.stringify(t.soLoi), homNay: JSON.stringify(t.homNay), tongDung: t.tongDung, tongLam: t.tongLam, capNhat: bayGio() };
  if (t.hang) trang("TuHoc").getRange(t.hang, 1, 1, BANG.TuHoc.length).setValues([oThanhHang("TuHoc", o)]);
  else them("TuHoc", o);
}
/* chuỗi ngày đạt mục tiêu: hiện tại (tính tới hôm nay, hoặc hôm qua nếu hôm nay chưa đủ) và dài nhất */
function chuoiNgay(ngay, tu, den) {
  const dat = function (d) { return ngay[d] && ngay[d][0] >= MUC_TIEU_NGAY; };
  const hn = ngayVN();
  let hienTai = 0, d = dat(hn) ? hn : congNgay(hn, -1);
  while (dat(d)) { hienTai++; d = congNgay(d, -1); }
  const ds = Object.keys(ngay).filter(function (x) { return dat(x) && (!tu || x >= tu) && (!den || x <= den); }).sort();
  let daiNhat = 0, dang = 0, truoc = "";
  ds.forEach(function (x) { dang = truoc && congNgay(truoc, 1) === x ? dang + 1 : 1; if (dang > daiNhat) daiNhat = dang; truoc = x; });
  let dung = 0, lam = 0;
  Object.keys(ngay).forEach(function (x) { if ((!tu || x >= tu) && (!den || x <= den)) { dung += ngay[x][0]; lam += ngay[x][1]; } });
  return { hienTai: hienTai, daiNhat: daiNhat, soNgayDat: ds.length, dung: dung, lam: lam };
}
/* dạng của một bộ ngân hàng (môn – lớp) kèm số câu */
function dangCuaNH(mon, lop) {
  const dang = {};
  docCot("CauHoi", ["mon", "lop", "chuong", "bai", "dangSo", "dkey"]).forEach(function (o) {
    if (o.mon !== mon || +o.lop !== +lop || !o.dkey) return;
    const d = dang[o.dkey] = dang[o.dkey] || { dkey: o.dkey, chuong: +o.chuong, bai: +o.bai, so: +o.dangSo, ten: "", n: 0 };
    d.n++;
  });
  docHet("Dang").forEach(function (o) { if (o.mon === mon && +o.lop === +lop && dang[o.dkey]) dang[o.dkey].ten = o.ten; });
  return Object.keys(dang).map(function (k) { return dang[k]; }).sort(function (a, b) { return a.chuong - b.chuong || a.bai - b.bai || a.so - b.so; });
}
/* gợi ý: dạng em làm sai nhiều nhất (đã làm ít nhất 3 câu), rồi tới dạng chưa làm bao giờ */
function goiYDang(t, mon, lop, ds) {
  const diem = ds.map(function (d) {
    const s = t.dang[mon + "|" + lop + "|" + d.dkey] || [0, 0];
    return { dkey: d.dkey, ten: d.ten, dung: s[0], lam: s[1], tiLe: s[1] ? s[0] / s[1] : null, moi: !s[1] };
  });
  const yeu = diem.filter(function (x) { return x.lam >= 3 && x.tiLe < 0.7; }).sort(function (a, b) { return a.tiLe - b.tiLe; });
  const moi = diem.filter(function (x) { return x.moi; });
  return yeu.concat(moi).slice(0, 3).map(function (x) { return { dkey: x.dkey, ten: x.ten, tiLe: x.tiLe, lam: x.lam, lyDo: x.moi ? "chua-lam" : "yeu" }; });
}

Object.assign(VIEC, {
  /* trang tự học: tiến độ hôm nay, chuỗi ngày, sổ lỗi, các dạng có trong ngân hàng, gợi ý */
  "hs.tuHoc": function (yc) {
    const tk = canHS(yc);
    const lopHS = timDong("Lop", tk.o.maLop), khoi = lopHS ? +lopHS.o.khoi || 0 : 0;
    const t = docTuHoc(tk.o.id), hn = ngayVN();
    const nh = {};
    docCot("CauHoi", ["mon", "lop"]).forEach(function (o) { const k = o.mon + "|" + o.lop; nh[k] = nh[k] || { mon: o.mon, lop: +o.lop, n: 0 }; nh[k].n++; });
    const dsNH = Object.keys(nh).map(function (k) { return nh[k]; }).sort(function (a, b) { return a.mon.localeCompare(b.mon) || a.lop - b.lop; });
    let mon = chuanTen(yc.mon), lop = +yc.lop || 0;
    if (!nh[mon + "|" + lop]) {
      const hop = dsNH.filter(function (x) { return x.lop === khoi; });
      const c = hop.filter(function (x) { return /^To[aá]n/i.test(x.mon); })[0] || hop[0] || dsNH[0];
      mon = c ? c.mon : ""; lop = c ? c.lop : 0;
    }
    const ds = mon ? dangCuaNH(mon, lop) : [];
    ds.forEach(function (d) { const s = t.dang[mon + "|" + lop + "|" + d.dkey] || [0, 0]; d.dung = s[0]; d.lam = s[1]; });
    const lich = [];
    for (let i = 34; i >= 0; i--) { const d = congNgay(hn, -i); lich.push({ d: d, dung: (t.ngay[d] || [0])[0] }); }
    const soLoiKeys = Object.keys(t.soLoi);
    return {
      mon: mon, lop: lop, khoi: khoi, nganHang: dsNH, dang: ds, goiY: goiYDang(t, mon, lop, ds),
      homNay: { d: hn, dung: (t.ngay[hn] || [0, 0])[0], lam: (t.ngay[hn] || [0, 0])[1], mucTieu: MUC_TIEU_NGAY },
      chuoi: chuoiNgay(t.ngay), tongDung: t.tongDung, tongLam: t.tongLam,
      soLoi: { tong: soLoiKeys.length, denHan: soLoiKeys.filter(function (k) { return t.soLoi[k][1] <= hn; }).length },
      lich: lich, giao: giaoCuaHS(tk), bxh: lopHS && lopHS.o.bxh === "1" ? bangXepHang(tk) : null
    };
  },

  /* lấy một lượt câu luyện: cheDo = dang (các dạng em chọn) | goiy | loi (sổ lỗi) | tron */
  "hs.tuHoc.lay": function (yc) {
    const tk = canHS(yc);
    const t = docTuHoc(tk.o.id), hn = ngayVN();
    const n = Math.max(1, Math.min(10, Math.round(+yc.n || MUC_TIEU_NGAY)));
    const mon = chuanTen(yc.mon), lop = +yc.lop || 0, cheDo = String(yc.cheDo || "dang");
    const R = rng(bamSo("luyen|" + tk.o.id + "|" + Date.now()));
    let chon = [], giao = null;
    if (cheDo === "giao") {
      const gx = timDong("GiaoTuHoc", String(yc.maGiao || ""));
      if (!gx || gx.o.maLop !== tk.o.maLop) throw loi("Không tìm thấy bài tự học được giao.");
      giao = gx.o;
    }
    if (cheDo === "loi") {
      const ks = Object.keys(t.soLoi).sort(function (a, b) { return t.soLoi[a][1] < t.soLoi[b][1] ? -1 : t.soLoi[a][1] > t.soLoi[b][1] ? 1 : 0; });
      const denHan = ks.filter(function (k) { return t.soLoi[k][1] <= hn; });
      chon = (denHan.length ? denHan : ks).slice(0, n);
      if (!chon.length) throw loi("Sổ lỗi của em đang trống. Giỏi lắm!", "trong");
    } else {
      const monL = giao ? giao.mon : mon, lopL = giao ? +giao.lop : lop;
      if (!monL || !lopL) throw loi("Em chọn môn và lớp trước nhé.");
      let dks = null;
      if (giao) { dks = {}; docJSON(giao.dkeys, []).forEach(function (d) { dks[d] = 1; }); }
      if (cheDo === "dang") { dks = {}; (yc.dkeys || []).slice(0, 60).forEach(function (d) { dks[String(d)] = 1; }); if (!Object.keys(dks).length) throw loi("Em chọn ít nhất một dạng."); }
      if (cheDo === "goiy") { dks = {}; goiYDang(t, mon, lop, dangCuaNH(mon, lop)).forEach(function (g) { dks[g.dkey] = 1; }); }
      const muc = giao ? giao.muc : MUC.indexOf(yc.muc) >= 0 ? yc.muc : "";
      const pool = docCot("CauHoi", ["k", "mon", "lop", "muc", "dkey"]).filter(function (o) {
        return o.mon === monL && +o.lop === lopL && (!dks || dks[o.dkey]) && (!muc || o.muc === muc);
      }).map(function (o) { return o.k; });
      if (!pool.length) throw loi("Chưa có câu nào cho lựa chọn này.");
      const chuaLam = pool.filter(function (k) { return !t.homNay.ks[k]; });
      chon = tron(chuaLam.length >= n ? chuaLam : pool, R).slice(0, n);
    }
    const q = docCauTheoKhoa(chon);
    const cau = chon.filter(function (k) { return q[k]; }).map(function (k) {
      const x = q[k];
      return { k: k, loai: x.loai, order: x.loai === "TN" ? tron([0, 1, 2, 3], R) : x.loai === "DS" ? [0, 1, 2, 3] : [] };
    });
    if (!cau.length) throw loi("Các câu này đã bị xoá khỏi ngân hàng.");
    const phien = taoToken({ r: "luyen", u: tk.o.id, id: ngauNhien(10), g: giao ? giao.maGiao : "", c: cau.map(function (c) { return [c.k, c.order.join("")]; }) }, 12);
    const tenDang = {};
    docHet("Dang").forEach(function (o) { tenDang[o.mon + "|" + o.lop + "|" + o.dkey] = o.ten; });
    return {
      phien: phien,
      cau: cau.map(function (c, i) { const x = q[c.k], o = deChoHS(x, c, i); o.muc = x.muc; o.dang = tenDang[x.mon + "|" + x.lop + "|" + x.dkey] || ""; return o; })
    };
  },

  /* nộp một lượt: chấm, trả lời giải; tính vào tiến độ (mỗi câu chỉ tính lần đầu trong ngày) và sổ lỗi */
  "hs.tuHoc.nop": function (yc) {
    const tk = canHS(yc);
    const tt = docToken(yc.phien);
    if (!tt || tt.r !== "luyen" || tt.u !== tk.o.id) throw loi("Lượt luyện này đã quá hạn. Em bấm lấy câu mới nhé.", "het-luot");
    const cau = tt.c.map(function (a) { return { k: a[0], order: a[1] ? a[1].split("").map(Number) : [] }; });
    const q = docCauTheoKhoa(cau.map(function (c) { return c.k; }));
    const tl = yc.traLoi || {};
    return khoa(function () {
      const t = docTuHoc(tk.o.id), hn = t.homNay.d;
      if (t.homNay.p.indexOf(tt.id) >= 0) throw loi("Lượt này em đã nộp rồi.", "da-nop");
      t.homNay.p.push(tt.id); if (t.homNay.p.length > 60) t.homNay.p = t.homNay.p.slice(-60);
      const ng = t.ngay[hn] = t.ngay[hn] || [0, 0];
      const kq = cau.map(function (c, i) {
        const x = q[c.k];
        if (!x) return { i: i, loai: "", q: null, traLoi: "", d: 0, m: 0, dung: false };
        c.loai = x.loai;
        const tra = String(tl[i] == null ? "" : tl[i]).trim().slice(0, 40);
        const r = chamCau(x, c, tra, /^To[aá]n/i.test(x.mon));
        const o = { i: i, loai: x.loai, order: c.order, traLoi: tra, d: r.d, m: r.m, dung: r.dung, q: { loai: x.loai, de: x.de, pa: x.pa, y: x.y, da: x.da, loigiai: x.loigiai, id: x.id } };
        if (!tra || (x.loai === "DS" && !/[ĐS]/.test(tra))) { o.boTrong = true; return o; }
        if (!t.homNay.ks[c.k]) {                    // lần đầu trong ngày: tính vào tiến độ
          t.homNay.ks[c.k] = 1; o.tinh = true;
          ng[1]++; t.tongLam++; if (r.dung) { ng[0]++; t.tongDung++; }
          const dk = x.mon + "|" + x.lop + "|" + x.dkey, s = t.dang[dk] = t.dang[dk] || [0, 0];
          s[1]++; if (r.dung) s[0]++;
        }
        if (!r.dung) t.soLoi[c.k] = [0, congNgay(hn, LICH_ON[0])];
        else if (t.soLoi[c.k] && t.soLoi[c.k][1] <= hn) {
          const lan = t.soLoi[c.k][0] + 1;
          if (lan >= 3) { delete t.soLoi[c.k]; o.thuoc = true; } else t.soLoi[c.k] = [lan, congNgay(hn, LICH_ON[lan])];
        }
        return o;
      });
      const ks = Object.keys(t.soLoi);
      if (ks.length > SO_LOI_TOI_DA) ks.slice(0, ks.length - SO_LOI_TOI_DA).forEach(function (k) { delete t.soLoi[k]; });
      const han = congNgay(hn, -400);
      Object.keys(t.ngay).forEach(function (d) { if (d < han) delete t.ngay[d]; });
      ghiTuHoc(t);
      const tdGiao = tt.g ? ghiTienDoGiao(tt.g, tk.o.id, kq, cau) : null;
      return { giao: tdGiao, cau: kq, homNay: { d: hn, dung: ng[0], lam: ng[1], mucTieu: MUC_TIEU_NGAY }, chuoi: chuoiNgay(t.ngay), soLoi: { tong: Object.keys(t.soLoi).length, denHan: Object.keys(t.soLoi).filter(function (k) { return t.soLoi[k][1] <= hn; }).length } };
    });
  },

  /* giáo viên: chuyên cần tự học của một lớp trong một khoảng ngày (tuần, tháng, học kì) */
  "gv.tuHoc": function (yc) {
    canGV(yc);
    const maLop = chuanMaLop(yc.maLop);
    const re = /^\d{4}-\d{2}-\d{2}$/;
    const tu = re.test(yc.tu) ? yc.tu : "", den = re.test(yc.den) ? yc.den : "";
    const th = {}; docHet("TuHoc").forEach(function (o) { th[o.hsId] = o; });
    const hs = docHet("TaiKhoan").filter(function (o) { return o.maLop === maLop && o.trangThai === "ok"; }).map(function (o) {
      const x = th[o.id] || {}, ngay = docJSON(x.ngay, {});
      const k = chuoiNgay(ngay, tu, den), hn = chuoiNgay(ngay);
      const cuoi = Object.keys(ngay).sort().pop() || "";
      return { id: o.id, hoTen: o.hoTen, tenDN: o.tenDN, chuoiDaiNhat: k.daiNhat, soNgayDat: k.soNgayDat, dung: k.dung, lam: k.lam, chuoiHienTai: hn.hienTai, soLoi: Object.keys(docJSON(x.soLoi, {})).length, ngayCuoi: cuoi };
    });
    return { hs: hs, tu: tu, den: den, homNay: ngayVN(), mucTieu: MUC_TIEU_NGAY };
  }
});

/* ============================== giao bài tự học, lịch sử điểm, thi thử ============================== */
function gioVN(iso) { const d = new Date(new Date(iso).getTime() + 7 * 3600000).toISOString(); return d.slice(11, 16) + " " + d.slice(8, 10) + "/" + d.slice(5, 7); }

/* bài tự học được giao cho lớp của em, kèm tiến độ của em */
function giaoCuaHS(tk) {
  const ds = docHet("GiaoTuHoc").filter(function (o) { return o.maLop === tk.o.maLop; });
  if (!ds.length) return [];
  const td = {};
  docCot("TienDoGiao", ["maGiao", "hsId", "dung", "xongLuc"]).forEach(function (o) { if (o.hsId === tk.o.id) td[o.maGiao] = o; });
  const now = new Date();
  return ds.map(function (o) {
    const x = td[o.maGiao] || {};
    return { maGiao: o.maGiao, ten: o.ten, mon: o.mon, lop: +o.lop, soCauDung: +o.soCauDung, hanNop: o.hanNop, dung: +x.dung || 0, xong: !!x.xongLuc, quaHan: new Date(o.hanNop) < now };
  }).filter(function (g) { return !g.xong || !g.quaHan; })                     // bài đã xong và đã qua hạn thì thôi hiện
    .sort(function (a, b) { return a.xong - b.xong || (a.hanNop < b.hanNop ? -1 : 1); });
}
/* cộng câu đúng (mỗi câu một lần) vào tiến độ bài được giao */
function ghiTienDoGiao(maGiao, hsId, kq, cau) {
  const gx = timDong("GiaoTuHoc", maGiao);
  if (!gx) return null;
  const k = maGiao + "|" + hsId, r = timDong("TienDoGiao", k);
  const o = r ? r.o : { k: k, maGiao: maGiao, hsId: hsId, dung: 0, lam: 0, ks: "{}", xongLuc: "" };
  const ks = docJSON(o.ks, {});
  kq.forEach(function (c, i) {
    if (c.boTrong || !c.q) return;
    const key = cau[i].k;
    if (ks[key] == null) { o.lam = (+o.lam || 0) + 1; ks[key] = 0; }
    if (c.dung && !ks[key]) { ks[key] = 1; o.dung = (+o.dung || 0) + 1; }
  });
  o.ks = JSON.stringify(ks); o.capNhat = bayGio();
  if (!o.xongLuc && +o.dung >= +gx.o.soCauDung) o.xongLuc = bayGio();
  if (r) trang("TienDoGiao").getRange(r.hang, 1, 1, BANG.TienDoGiao.length).setValues([oThanhHang("TienDoGiao", o)]);
  else them("TienDoGiao", o);
  return { maGiao: maGiao, ten: gx.o.ten, dung: +o.dung, soCauDung: +gx.o.soCauDung, xong: !!o.xongLuc };
}
/* ma trận thi thử theo cấu trúc đề THPT từ 2025: 12 TN, 4 Đ/S, 6 trả lời ngắn; câu thiếu ở mức này lấy bù mức khác */
const CAU_TRUC_THPT = { TN: { NB: 6, TH: 4, VD: 2 }, DS: { TH: 2, VD: 2 }, TLN: { TH: 2, VD: 3, VDC: 1 } };
function maTranThiThu(mon, lop, R) {
  const pool = khoCau(mon, lop), con = {};
  Object.keys(pool).forEach(function (k) { con[k] = pool[k].length; });
  const dks = tron(Object.keys(pool).map(function (k) { return k.split("|")[0]; }).filter(function (v, i, a) { return a.indexOf(v) === i; }), R);
  const M = {};
  let viTri = 0;
  LOAI.forEach(function (L) {
    const muon = CAU_TRUC_THPT[L];
    let thieu = 0;
    const layMuc = function (m, n) {
      let lay = 0, vong = 0;
      while (lay < n && vong < dks.length * 4) {
        const dk = dks[viTri++ % dks.length], k = dk + "|" + L + "|" + m;
        vong++;
        if (con[k] > 0) { con[k]--; lay++; M[dk] = M[dk] || {}; M[dk][L] = M[dk][L] || {}; M[dk][L][m] = (M[dk][L][m] || 0) + 1; }
      }
      return n - lay;
    };
    Object.keys(muon).forEach(function (m) { thieu += layMuc(m, muon[m]); });
    MUC.forEach(function (m) { if (thieu > 0) thieu = layMuc(m, thieu); });
  });
  return M;
}

Object.assign(VIEC, {
  /* ---------- giao bài tự học ---------- */
  "gv.giao.tao": function (yc) {
    canGV(yc);
    const ten = chuanTen(yc.ten), maLop = chuanMaLop(yc.maLop), mon = chuanTen(yc.mon) || "Toán", lop = +yc.lop || 0;
    const soCauDung = Math.round(+yc.soCauDung || 0), muc = MUC.indexOf(yc.muc) >= 0 ? yc.muc : "";
    const dkeys = (yc.dkeys || []).map(String).filter(function (d) { return /^C\d+-B\d+-D\d+$/.test(d); }).slice(0, 60);
    if (!ten) throw loi("Thầy đặt tên bài tự học.");
    if (!timDong("Lop", maLop)) throw loi("Không tìm thấy lớp.");
    if (!dkeys.length) throw loi("Thầy chọn ít nhất một dạng.");
    if (soCauDung < 1 || soCauDung > 100) throw loi("Số câu đúng cần đạt từ 1 đến 100.");
    const han = new Date(yc.hanNop);
    if (isNaN(han) || han < new Date()) throw loi("Hạn nộp phải sau thời điểm hiện tại.");
    const co = docCot("CauHoi", ["mon", "lop", "muc", "dkey"]).filter(function (o) { return o.mon === mon && +o.lop === lop && dkeys.indexOf(o.dkey) >= 0 && (!muc || o.muc === muc); }).length;
    if (co < soCauDung) throw loi("Các dạng đã chọn chỉ có " + co + " câu, ít hơn số câu đúng cần đạt (" + soCauDung + ").");
    return khoa(function () {
      let ma; do { ma = "G" + maNgauNhien(5); } while (timDong("GiaoTuHoc", ma));
      them("GiaoTuHoc", { maGiao: ma, ten: ten, maLop: maLop, mon: mon, lop: lop, dkeys: JSON.stringify(dkeys), muc: muc, soCauDung: soCauDung, hanNop: han.toISOString(), taoLuc: bayGio() });
      ghiNhatKy("gv", "giao-tu-hoc", ma + " " + ten);
      return { maGiao: ma };
    });
  },
  /* danh sách bài giao, kèm số em xong / đang làm / chưa làm và tên các em chưa xong */
  "gv.giao.ds": function (yc) {
    canGV(yc);
    const maLop = yc.maLop ? chuanMaLop(yc.maLop) : "";
    const lop = {}; docHet("Lop").forEach(function (o) { lop[o.maLop] = o.tenLop; });
    const hsLop = {};
    docCot("TaiKhoan", ["id", "hoTen", "maLop", "trangThai"]).forEach(function (o) { if (o.trangThai === "ok") (hsLop[o.maLop] = hsLop[o.maLop] || []).push(o); });
    const td = {};
    docCot("TienDoGiao", ["maGiao", "hsId", "dung", "xongLuc"]).forEach(function (o) { (td[o.maGiao] = td[o.maGiao] || {})[o.hsId] = o; });
    const now = new Date();
    return {
      giao: docHet("GiaoTuHoc").filter(function (o) { return !maLop || o.maLop === maLop; }).reverse().map(function (o) {
        const ds = hsLop[o.maLop] || [], t = td[o.maGiao] || {};
        const hs = ds.map(function (h) { const x = t[h.id] || {}; return { id: h.id, hoTen: h.hoTen, dung: +x.dung || 0, xongLuc: x.xongLuc || "", trangThai: x.xongLuc ? "xong" : +x.dung > 0 || x.hsId ? "dang" : "chua" }; });
        return { maGiao: o.maGiao, ten: o.ten, maLop: o.maLop, tenLop: lop[o.maLop] || o.maLop, mon: o.mon, lop: +o.lop, dkeys: docJSON(o.dkeys, []), muc: o.muc, soCauDung: +o.soCauDung, hanNop: o.hanNop, taoLuc: o.taoLuc, quaHan: new Date(o.hanNop) < now, hs: hs };
      })
    };
  },
  "gv.giao.xoa": function (yc) {
    canGV(yc);
    const ma = String(yc.maGiao || "");
    return khoa(function () {
      const n = xoaTheo("GiaoTuHoc", function (o) { return o.maGiao === ma; });
      xoaTheo("TienDoGiao", function (o) { return o.maGiao === ma; });
      return { n: n };
    });
  },

  /* ---------- học sinh: các bài đã làm, so sánh điểm ---------- */
  "hs.lichSu": function (yc) {
    const tk = canHS(yc);
    const bai = {}; docHet("BaiKT").forEach(function (o) { bai[o.maBai] = o; });
    const cua = [], tong = {};
    docCot("DeThi", ["maBai", "hsId", "trangThai", "diem", "nopLuc"]).forEach(function (o) {
      if (o.trangThai !== "nop") return;
      if (o.hsId === tk.o.id) cua.push(o);
      const t = tong[o.maBai] = tong[o.maBai] || [0, 0]; t[0] += +o.diem || 0; t[1]++;
    });
    return {
      bai: cua.filter(function (o) { return bai[o.maBai]; }).map(function (o) {
        const b = bai[o.maBai], mo = ketQuaDaMo(b);
        return { maBai: o.maBai, ten: b.ten, thiThu: !!b.chuHS, soCau: +b.soCau, nopLuc: o.nopLuc, diem: mo ? +o.diem : null, tbLop: mo && !b.chuHS && tong[o.maBai][1] > 1 ? Math.round(tong[o.maBai][0] / tong[o.maBai][1] * 100) / 100 : null };
      }).sort(function (a, b) { return a.nopLuc < b.nopLuc ? -1 : 1; })
    };
  },

  /* ---------- học sinh: thi thử theo cấu trúc THPT, có bấm giờ, chấm và xem lời giải ngay ---------- */
  "hs.thiThu.tao": function (yc) {
    const tk = canHS(yc);
    const mon = chuanTen(yc.mon) || "Toán", lop = +yc.lop || 12;
    const cuaEm = {}; docCot("DeThi", ["maBai", "hsId", "trangThai"]).forEach(function (o) { if (o.hsId === tk.o.id) cuaEm[o.maBai] = o.trangThai; });
    const hn = ngayVN();
    let homNay = 0, dangLam = null;
    docCot("BaiKT", ["maBai", "chuHS", "taoLuc"]).forEach(function (o) {
      if (o.chuHS !== tk.o.id) return;
      if (ngayVN(new Date(o.taoLuc).getTime()) === hn) homNay++;
      if (cuaEm[o.maBai] !== "nop") dangLam = o.maBai;
    });
    if (dangLam) return { maBai: dangLam, dangDo: true };
    if (homNay >= 3) throw loi("Mỗi ngày em thi thử tối đa 3 lần. Mai em thi tiếp nhé.");
    const M = maTranThiThu(mon, lop, rng(bamSo("tt|" + tk.o.id + "|" + Date.now())));
    const so = oCuaMaTran(M).length;
    if (so < 5) throw loi("Ngân hàng " + mon + " " + lop + " chưa đủ câu để thi thử.");
    const thoiGian = Math.max(15, Math.min(90, Math.round(so * 90 / 22)));
    return khoa(function () {
      let ma; do { ma = "T" + maNgauNhien(5); } while (timDong("BaiKT", ma));
      them("BaiKT", { maBai: ma, ten: "Thi thử THPT · " + mon + " " + lop, maLop: tk.o.maLop, mon: mon, lop: lop, maTran: JSON.stringify(M), soCau: so, thoiGian: thoiGian, dongLuc: "", trangThai: "mo", congBo: "1", taoLuc: bayGio(), moLuc: "", tuyChon: JSON.stringify({ tronCau: true, tronPA: true }), chuHS: tk.o.id });
      return { maBai: ma, soCau: so, thoiGian: thoiGian };
    });
  }
});

/* ============================== sao lưu, thông báo lớp, bảng xếp hạng ============================== */
const THU_MUC_SAO_LUU = "Sao lưu web học sinh";
const GIU_BAN_SAO_LUU = 8;        // giữ 8 bản gần nhất (khoảng 2 tháng nếu sao lưu mỗi tuần)

/* chép cả Trang tính vào thư mục "Sao lưu web học sinh" trên Drive của thầy; bản cũ quá 8 bản thì bỏ vào thùng rác */
function saoLuu() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const it = DriveApp.getFoldersByName(THU_MUC_SAO_LUU);
  const thuMuc = it.hasNext() ? it.next() : DriveApp.createFolder(THU_MUC_SAO_LUU);
  const dau = ss.getName() + " - sao lưu ";
  const ten = dau + new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 16).replace("T", " ");
  DriveApp.getFileById(ss.getId()).makeCopy(ten, thuMuc);
  const ban = [], fi = thuMuc.getFiles();
  while (fi.hasNext()) { const f = fi.next(); if (f.getName().indexOf(dau) === 0) ban.push(f); }
  ban.sort(function (a, b) { return b.getDateCreated() - a.getDateCreated(); });
  ban.slice(GIU_BAN_SAO_LUU).forEach(function (f) { f.setTrashed(true); });
  PropertiesService.getScriptProperties().setProperty("SAO_LUU_CUOI", bayGio());
  ghiNhatKy("he-thong", "sao-luu", ten);
  return "Đã sao lưu: " + ten;
}
/* thầy chạy hàm này MỘT LẦN trong Apps Script: hẹn sao lưu tự động 22 giờ tối Chủ nhật hằng tuần, và sao lưu ngay một bản */
function batSaoLuuHangTuan() {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === "saoLuu") ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("saoLuu").timeBased().onWeekDay(ScriptApp.WeekDay.SUNDAY).atHour(22).inTimezone("Asia/Ho_Chi_Minh").create();
  return saoLuu() + ". Từ nay máy tự sao lưu lúc 22 giờ tối Chủ nhật hằng tuần.";
}

function thongBaoCuaLop(maLop) {
  const now = bayGio();
  return docHet("ThongBao").filter(function (o) { return (o.maLop === maLop || o.maLop === "*") && (!o.hetHan || o.hetHan > now); })
    .reverse().slice(0, 5).map(function (o) { return { ma: o.ma, noiDung: o.noiDung, taoLuc: o.taoLuc }; });
}
/* bảng xếp hạng tuần (thứ Hai tới hôm nay) của lớp: chuỗi dài nhất trong tuần, rồi số ngày đạt, rồi số câu đúng */
function dauTuan() { const hn = ngayVN(); const t = new Date(hn + "T00:00:00Z").getUTCDay(); return congNgay(hn, -((t + 6) % 7)); }
function bangXepHang(tk) {
  const tu = dauTuan();
  const th = {}; docHet("TuHoc").forEach(function (o) { th[o.hsId] = o; });
  const ds = docCot("TaiKhoan", ["id", "hoTen", "maLop", "trangThai"]).filter(function (o) { return o.maLop === tk.o.maLop && o.trangThai === "ok"; }).map(function (o) {
    const c = chuoiNgay(docJSON((th[o.id] || {}).ngay, {}), tu, "");
    return { id: o.id, hoTen: o.hoTen, chuoi: c.daiNhat, ngay: c.soNgayDat, dung: c.dung };
  }).sort(function (a, b) { return b.chuoi - a.chuoi || b.ngay - a.ngay || b.dung - a.dung || a.hoTen.localeCompare(b.hoTen); });
  let hang = 0, truoc = "";
  ds.forEach(function (x, i) { const k = x.chuoi + "|" + x.ngay + "|" + x.dung; if (k !== truoc) hang = i + 1; truoc = k; x.hang = hang; });
  const em = ds.filter(function (x) { return x.id === tk.o.id; })[0];
  return { tu: tu, top: ds.filter(function (x) { return x.dung > 0; }).slice(0, 10).map(function (x) { return { hang: x.hang, hoTen: x.hoTen, chuoi: x.chuoi, ngay: x.ngay, dung: x.dung, laEm: x.id === tk.o.id }; }), em: em ? { hang: em.hang, chuoi: em.chuoi, ngay: em.ngay, dung: em.dung, tong: ds.length } : null };
}

Object.assign(VIEC, {
  "gv.heThong": function (yc) {
    canGV(yc);
    const p = PropertiesService.getScriptProperties();
    let hen = false;
    try { hen = ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === "saoLuu"; }); } catch (e) { }
    return { saoLuuCuoi: p.getProperty("SAO_LUU_CUOI") || "", henSaoLuu: hen, phienBan: PHIEN_BAN };
  },
  "gv.saoLuu": function (yc) {
    canGV(yc);
    try { return { kq: saoLuu(), luc: bayGio() }; }
    catch (e) { throw loi("Chưa sao lưu được: thầy cần chạy hàm batSaoLuuHangTuan một lần trong Apps Script để cấp quyền Drive. (" + e.message + ")"); }
  },
  "gv.caiLop": function (yc) {
    canGV(yc);
    const lop = timDong("Lop", chuanMaLop(yc.maLop));
    if (!lop) throw loi("Không tìm thấy lớp.");
    suaDong("Lop", lop.hang, { bxh: yc.bxh ? "1" : "0" });
    return {};
  },
  "gv.thongBao.tao": function (yc) {
    canGV(yc);
    const maLop = yc.maLop === "*" ? "*" : chuanMaLop(yc.maLop);
    if (maLop !== "*" && !timDong("Lop", maLop)) throw loi("Không tìm thấy lớp.");
    const noiDung = String(yc.noiDung || "").normalize("NFC").replace(/[<>]/g, "").trim().slice(0, 600);
    if (!noiDung) throw loi("Thầy nhập nội dung thông báo.");
    const ngay = Math.max(0, Math.min(90, Math.round(+yc.soNgay || 0)));
    return khoa(function () {
      let ma; do { ma = "N" + maNgauNhien(6); } while (timDong("ThongBao", ma));
      them("ThongBao", { ma: ma, maLop: maLop, noiDung: noiDung, taoLuc: bayGio(), hetHan: ngay ? new Date(Date.now() + ngay * 86400000).toISOString() : "" });
      return { ma: ma };
    });
  },
  "gv.thongBao.ds": function (yc) {
    canGV(yc);
    const lop = {}; docHet("Lop").forEach(function (o) { lop[o.maLop] = o.tenLop; });
    const now = bayGio();
    return { thongBao: docHet("ThongBao").reverse().map(function (o) { return { ma: o.ma, maLop: o.maLop, tenLop: o.maLop === "*" ? "Tất cả các lớp" : lop[o.maLop] || o.maLop, noiDung: o.noiDung, taoLuc: o.taoLuc, hetHan: o.hetHan, conHan: !o.hetHan || o.hetHan > now }; }) };
  },
  "gv.thongBao.xoa": function (yc) {
    canGV(yc);
    const ma = String(yc.ma || "");
    return khoa(function () { return { n: xoaTheo("ThongBao", function (o) { return o.ma === ma; }) }; });
  }
});
