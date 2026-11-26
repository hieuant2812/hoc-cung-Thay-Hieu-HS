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

const PHIEN_BAN = "2026.11.26";
const HS_HAN_PHIEN_NGAY = 30;     // học sinh đăng nhập một lần dùng 30 ngày
const GV_HAN_PHIEN_GIO = 12;      // giáo viên: 12 giờ
const SO_LAN_SAI_TOI_DA = 5;      // sai mật khẩu 5 lần thì khoá 10 phút
const PHUT_KHOA_SAI = 10;
const VONG_BAM = 200;             // số vòng băm mật khẩu

/* Cấu trúc các trang tính. Cột đầu tiên là khoá. */
const BANG = {
  Lop: ["maLop", "tenLop", "khoi", "taoLuc", "dong"],
  TaiKhoan: ["id", "tenDN", "hoTen", "maLop", "salt", "hash", "trangThai", "taoLuc", "lanSai", "khoaDen", "dangNhapCuoi", "pv"],
  CauHoi: ["k", "mon", "lop", "id", "loai", "muc", "chuong", "bai", "dangSo", "dkey", "de", "pa", "y", "da", "loigiai", "file", "capNhat"],
  Dang: ["k", "mon", "lop", "dkey", "ten"],
  NhatKy: ["luc", "ai", "viec", "chiTiet"]
};
/* Các cột lưu dạng số; mọi cột khác lưu dạng chữ (có dấu ' phía trước để Trang tính không tự đổi "2,5" thành số hay "=..." thành công thức). */
const COT_SO = { lop: 1, chuong: 1, bai: 1, dangSo: 1, lanSai: 1, pv: 1, khoi: 1 };

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
    return { lop: docHet("Lop").map(function (o) { return { maLop: o.maLop, tenLop: o.tenLop, khoi: +o.khoi || 0, dong: o.dong === "1", soHS: (dem[o.maLop] || {}).tong || 0, choDuyet: (dem[o.maLop] || {}).cho || 0 }; }) };
  },

  "gv.taoLop": function (yc) {
    canGV(yc);
    const tenLop = chuanTen(yc.tenLop).toUpperCase();
    if (!tenLop) throw loi("Thầy nhập tên lớp, ví dụ 12A1.");
    return khoa(function () {
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
function trang(ten) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ten);
  if (!sh) throw loi("Máy chủ chưa chạy caiDat() (thiếu trang " + ten + ").");
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
