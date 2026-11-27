/* cauhoi.js — vẽ câu hỏi để làm (nút A–D, Đúng/Sai, ô đáp số) và vẽ câu đã chấm.
   Dùng chung cho trang làm bài kiểm tra (lam.html) và trang tự học (tuhoc.html).
   Cần: assets/nhd/core.js (NHD.renderQuestion, NHD.keyOf, NHD.texToHtml), API.esc */
(function () {
  "use strict";
  const NHAN = { TN: "Phần I · Trắc nghiệm nhiều lựa chọn", DS: "Phần II · Đúng / Sai", TLN: "Phần III · Trả lời ngắn" };
  const esc = s => API.esc(s);
  const day = s => String(s).replace(".", ",");

  /* câu để làm: c = { i, loai, de, pa, y } (không có đáp án) */
  function veCau(c, n, nhan) {
    const item = { q: { loai: c.loai, de: c.de, pa: c.pa, y: c.y, k: "c" + c.i }, order: [0, 1, 2, 3] };
    let h = `<section class="cau" id="cau${c.i}" data-i="${c.i}" data-loai="${c.loai}">${nhan || ""}${NHD.renderQuestion(item, n, "exam", { hinh: true })}`;
    if (c.loai === "TN") h += `<div class="chon4">${"ABCD".split("").map(L => `<button type="button" data-v="${L}">${L}</button>`).join("")}</div>`;
    if (c.loai === "DS") h += `<div class="chonDS">${"abcd".split("").map((y, p) => `<div class="dsr"><b>${y})</b><button type="button" data-p="${p}" data-v="Đ">Đúng</button><button type="button" data-p="${p}" data-v="S">Sai</button></div>`).join("")}</div>`;
    if (c.loai === "TLN") h += `<div class="tln"><label>Đáp số: <input type="text" inputmode="decimal" autocomplete="off" maxlength="12" placeholder="VD: -2,5"></label><button type="button" class="btn sm ghost dau-tru" aria-label="Đổi dấu âm / dương" title="Thêm hoặc bỏ dấu trừ">±</button></div>`;
    return h + `</section>`;
  }
  /* gắn nút cho mọi câu trong khung; layA(i) lấy câu trả lời hiện tại, chon(i, v) ghi câu trả lời mới */
  function gan(khung, layA, chon) {
    khung.querySelectorAll(".cau[data-i]").forEach(sec => {
      const i = +sec.dataset.i, L = sec.dataset.loai;
      if (L === "TN") sec.querySelectorAll(".chon4 button").forEach(b => b.onclick = () => chon(i, layA(i) === b.dataset.v ? "" : b.dataset.v));
      if (L === "DS") sec.querySelectorAll(".chonDS button").forEach(b => b.onclick = () => {
        const cu = (layA(i) || "____").padEnd(4, "_").split(""), p = +b.dataset.p;
        cu[p] = cu[p] === b.dataset.v ? "_" : b.dataset.v; chon(i, cu.join(""));
      });
      if (L === "TLN") {
        const inp = sec.querySelector("input");
        const chuan = s => s.replace(/[\u2212\u2012\u2013\u2014\uFE63\uFF0D]/g, "-").trim();   // dấu trừ kiểu khác → "-"
        inp.oninput = () => chon(i, chuan(inp.value));
        const nut = sec.querySelector(".dau-tru");                       // bàn phím số iPhone không có dấu trừ
        if (nut) nut.onclick = () => { const v = chuan(inp.value); inp.value = v.charAt(0) === "-" ? v.slice(1) : "-" + v; chon(i, inp.value.trim()); };
      }
    });
  }
  /* tô nút đã chọn; trả về { xong, motPhan } */
  function danhDau(sec, v) {
    v = v || "";
    const L = sec.dataset.loai;
    if (L === "TN") sec.querySelectorAll(".chon4 button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v === v)));
    if (L === "DS") sec.querySelectorAll(".chonDS button").forEach(b => b.setAttribute("aria-pressed", String(v.charAt(+b.dataset.p) === b.dataset.v)));
    if (L === "TLN") { const inp = sec.querySelector("input"); if (document.activeElement !== inp) inp.value = v; }
    return { xong: daLam(L, v), motPhan: L === "DS" && /[ĐS]/.test(v) && !daLam(L, v) };
  }
  const daLam = (loai, v) => loai === "DS" ? /^[ĐS]{4}$/.test(v || "") : !!v;

  /* câu đã chấm: c = { loai, order, q:{…có đáp án, lời giải}, traLoi, diem|d, toiDa|m } */
  function veKetQua(c, n, them) {
    const d = c.diem != null ? c.diem : c.d, m = c.toiDa != null ? c.toiDa : c.m;
    const item = { q: c.q, order: c.order && c.order.length ? c.order : [0, 1, 2, 3] };
    const dapAn = c.q && c.q.loai ? NHD.keyOf(item) : "";
    const em = c.traLoi ? (c.loai === "DS" ? c.traLoi.split("").map(x => x === "_" ? "–" : x).join(" ") : c.traLoi) : "(bỏ trống)";
    const lop = d >= m && m > 0 ? "dung" : d > 0 ? "mot-phan" : "sai";
    return `<section class="cau kq ${lop}">${them || ""}${c.q && c.q.loai ? NHD.renderQuestion(item, n, "key", { sol: true, hinh: true }) : "(Câu hỏi đã bị xoá)"}
      <div class="kq-dong"><span>Em chọn: <b>${esc(em)}</b></span><span>Đáp án: <b>${c.loai === "DS" ? esc(String(dapAn).split("").join(" ")) : c.loai === "TLN" ? NHD.texToHtml(String(dapAn)) : esc(dapAn)}</b></span><span class="d">${day(d)} / ${day(m)} đ</span></div></section>`;
  }

  window.CH = { NHAN, veCau, gan, danhDau, daLam, veKetQua, day };
})();
