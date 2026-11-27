/* Sổ tay theo DẠNG ngân hàng – Toán 10. SOTAYDANG["10"][dkey] = {
     pp: [các bước phương pháp], luuY: [sai lầm thường gặp],
     vd: [{ muc: NB|TH|VD|VDC, de: đề, giai: [từng bước giải], hinh: tikzpicture (tuỳ chọn), chuThich }] }
   Viết bằng LaTeX như ngân hàng: $...$, $$...$$, BBT bằng \tkzTabInit/\tkzTabLine/\tkzTabVar, hình bằng tikzpicture.
   Mọi đáp số đã được kiểm lại bằng máy. Tên dạng lấy ở data/sotaydang-ten.js. */
(function (G) {
const D = (G.SOTAYDANG = G.SOTAYDANG || {})["10"] = (G.SOTAYDANG["10"] || {});
const R = String.raw;
/* ---------- Chương I · Mệnh đề và tập hợp ---------- */
Object.assign(D, {
"C1-B1-D01": {
 pp: [
  R`**Mệnh đề** là một câu khẳng định có tính đúng hoặc sai (không thể vừa đúng vừa sai).`,
  R`Câu hỏi, câu cảm thán, câu mệnh lệnh, câu nêu cảm nhận ("đẹp quá", "khó thật") **không** là mệnh đề.`,
  R`**Mệnh đề chứa biến** $P(x)$: câu chứa biến, chưa xác định được đúng hay sai; khi thay biến bằng một giá trị cụ thể thì được một mệnh đề.`,
  R`Muốn biết mệnh đề đúng hay sai: dựa vào định nghĩa, định lí, hoặc tính toán trực tiếp; mệnh đề sai chỉ cần một phản ví dụ.`
 ],
 luuY: [
  R`Cho rằng mệnh đề sai thì "không phải mệnh đề" ($2+3=6$ vẫn là mệnh đề, chỉ là mệnh đề sai).`
 ],
 vd: [
 { muc: "NB", de: R`Câu nào sau đây là mệnh đề? Nếu là mệnh đề, cho biết đúng hay sai. a) "Hà Nội là thủ đô của Việt Nam." b) "Hôm nay trời đẹp quá!" c) "$2+3=6$." d) "$x+1>3$."`,
   giai: [
    R`**Phân tích.** Muốn biết một câu có phải mệnh đề không, ta tự hỏi: câu này có khẳng định một điều gì đó để ta nói được là **đúng** hoặc **sai** không? Câu hỏi, câu cảm thán, câu cảm nhận thì không.`,
    R`**Bước 1.** Câu a) khẳng định một sự kiện có thật: Hà Nội đúng là thủ đô của Việt Nam. Đây là mệnh đề **đúng**.`,
    R`**Bước 2.** Câu b) là câu cảm thán (có dấu "!"), thể hiện cảm xúc của người nói, mỗi người có thể thấy khác nhau. Nên b) **không** là mệnh đề.`,
    R`**Bước 3.** Câu c) khẳng định $2+3=6$. Ta tính được $2+3=5\ne6$, nên đây là mệnh đề **sai**. Chú ý: sai vẫn là mệnh đề.`,
    R`**Bước 4.** Câu d) chứa biến $x$ chưa biết giá trị: với $x=5$ thì $6>3$ đúng, với $x=0$ thì $1>3$ sai. Chưa khẳng định được đúng hay sai nên d) là **mệnh đề chứa biến**.`,
    R`**Kết luận.** a) mệnh đề đúng; b) không là mệnh đề; c) mệnh đề sai; d) mệnh đề chứa biến.`
   ] },
 { muc: "TH", de: R`Cho mệnh đề chứa biến $P(n)$: "$n^2+1$ chia hết cho $5$" ($n\in\mathbb N$). Xét tính đúng sai của $P(2)$, $P(3)$, $P(4)$.`,
   giai: [
    R`**Phân tích.** $P(n)$ là mệnh đề chứa biến. Thay $n$ bằng một số cụ thể ta được một mệnh đề, rồi tính toán để biết đúng hay sai.`,
    R`**Bước 1.** Với $n=2$: $n^2+1=4+1=5$. Vì $5$ chia hết cho $5$ nên $P(2)$ **đúng**.`,
    R`**Bước 2.** Với $n=3$: $n^2+1=9+1=10=5\cdot2$, chia hết cho $5$. Vậy $P(3)$ **đúng**.`,
    R`**Bước 3.** Với $n=4$: $n^2+1=16+1=17$. Vì $17=5\cdot3+2$ (dư $2$) nên không chia hết cho $5$. Vậy $P(4)$ **sai**.`,
    R`**Kết luận.** $P(2)$, $P(3)$ đúng; $P(4)$ sai.`,
    R`**Nhận xét.** Cùng một mệnh đề chứa biến, giá trị này cho mệnh đề đúng, giá trị khác cho mệnh đề sai. Đó là lí do $P(n)$ "chưa phải" mệnh đề.`
   ] },
 { muc: "TH", de: R`Xét tính đúng sai: a) "$\sqrt2$ là số hữu tỉ." b) "Tổng ba góc trong một tam giác bằng $180^\circ$." c) "$17$ là số nguyên tố."`,
   giai: [
    R`**Phân tích.** Cả ba câu đều là mệnh đề. Để xét đúng sai, ta dựa vào **định nghĩa** hoặc **định lí** đã học.`,
    R`**Bước 1.** a) $\sqrt2$ là số vô tỉ (đã học ở lớp 9: $\sqrt2=1{,}41421\ldots$ là số thập phân vô hạn không tuần hoàn). Vậy "$\sqrt2$ là số hữu tỉ" là mệnh đề **sai**.`,
    R`**Bước 2.** b) Theo định lí tổng ba góc trong tam giác, tổng luôn bằng $180^\circ$. Mệnh đề **đúng**.`,
    R`**Bước 3.** c) Số nguyên tố là số tự nhiên lớn hơn $1$ chỉ có hai ước là $1$ và chính nó. Kiểm tra $17$ không chia hết cho $2$, $3$ (vì $4^2=16<17<25=5^2$ nên chỉ cần thử đến $4$). Vậy $17$ là số nguyên tố, mệnh đề **đúng**.`,
    R`**Kết luận.** a) sai; b) đúng; c) đúng.`,
    R`**Nhận xét.** Để kiểm tra $n$ có nguyên tố không, chỉ cần thử chia cho các số nguyên tố không vượt quá $\sqrt n$.`
   ] },
 { muc: "VD", de: R`Cho mệnh đề chứa biến $Q(x)$: "$x^2-3x+2=0$". Tìm tất cả các giá trị thực của $x$ để $Q(x)$ là mệnh đề đúng.`,
   giai: [
    R`**Phân tích.** $Q(x)$ đúng khi và chỉ khi $x$ là nghiệm của phương trình $x^2-3x+2=0$. Vậy ta chỉ cần giải phương trình.`,
    R`**Bước 1.** Phân tích thành nhân tử: $x^2-3x+2=x^2-x-2x+2=x(x-1)-2(x-1)=(x-1)(x-2)$.`,
    R`**Bước 2.** $(x-1)(x-2)=0\iff x=1$ hoặc $x=2$.`,
    R`**Kết luận.** $Q(x)$ đúng khi $x=1$ hoặc $x=2$; với mọi giá trị khác, $Q(x)$ sai.`,
    R`**Thử lại.** $Q(1)$: $1-3+2=0$ đúng; $Q(2)$: $4-6+2=0$ đúng.`
   ] }
 ] },
"C1-B1-D02": {
 pp: [
  R`**Phủ định** của $P$ là $\overline P$: "không phải $P$". $P$ đúng thì $\overline P$ sai và ngược lại.`,
  R`Phủ định các quan hệ: "$>$" thành "$\le$"; "$<$" thành "$\ge$"; "$=$" thành "$\ne$"; "chia hết" thành "không chia hết".`,
  R`**Kí hiệu:** phủ định của "$\forall x\in X,\ P(x)$" là "$\exists x\in X,\ \overline{P(x)}$"; phủ định của "$\exists x\in X,\ P(x)$" là "$\forall x\in X,\ \overline{P(x)}$".`,
  R`Bằng lời: "mọi ... đều ..." thành "có ít nhất một ... không ..."; "có ... " thành "mọi ... đều không ...".`
 ],
 luuY: [
  R`Phủ định "$x>2$" thành "$x<2$" (thiếu trường hợp bằng).`,
  R`Phủ định câu có "$\forall$" nhưng giữ nguyên "$\forall$".`
 ],
 vd: [
 { muc: "NB", de: R`Phát biểu mệnh đề phủ định của "$5$ là số chẵn" và cho biết tính đúng sai.`,
   giai: [
    R`**Phân tích.** Mệnh đề phủ định của $P$ là "không phải $P$", luôn có tính đúng sai **ngược** với $P$.`,
    R`**Bước 1.** Thêm "không" vào: phủ định là "$5$ không phải là số chẵn".`,
    R`**Bước 2.** Xét mệnh đề gốc: $5=2\cdot2+1$ là số lẻ, nên "$5$ là số chẵn" **sai**.`,
    R`**Kết luận.** Mệnh đề phủ định "$5$ không phải là số chẵn" là mệnh đề **đúng**.`
   ] },
 { muc: "TH", de: R`Phủ định mệnh đề "$\forall x\in\mathbb R,\ x^2+1>0$" và xét tính đúng sai của mệnh đề phủ định.`,
   giai: [
    R`**Phân tích.** Phủ định mệnh đề có kí hiệu $\forall$ theo quy tắc: đổi $\forall$ thành $\exists$, và phủ định phần tính chất phía sau.`,
    R`**Bước 1.** Đổi lượng từ: "$\forall x\in\mathbb R$" thành "$\exists x\in\mathbb R$".`,
    R`**Bước 2.** Phủ định tính chất: "$x^2+1>0$" thành "$x^2+1\le0$" (phủ định của $>$ là $\le$, không phải $<$).`,
    R`**Bước 3.** Mệnh đề phủ định: "$\exists x\in\mathbb R,\ x^2+1\le0$".`,
    R`**Bước 4.** Xét đúng sai: với mọi $x$ thực, $x^2\ge0$ nên $x^2+1\ge1>0$. Vậy mệnh đề gốc **đúng**, do đó mệnh đề phủ định **sai**.`,
    R`**Kết luận.** $\overline P$: "$\exists x\in\mathbb R,\ x^2+1\le0$", là mệnh đề sai.`
   ] },
 { muc: "TH", de: R`Phủ định mệnh đề "$\exists n\in\mathbb N,\ n^2=2$" và xét tính đúng sai.`,
   giai: [
    R`**Phân tích.** Phủ định mệnh đề có $\exists$: đổi $\exists$ thành $\forall$ và phủ định tính chất.`,
    R`**Bước 1.** Đổi "$\exists n\in\mathbb N$" thành "$\forall n\in\mathbb N$"; phủ định "$n^2=2$" thành "$n^2\ne2$".`,
    R`**Bước 2.** Mệnh đề phủ định: "$\forall n\in\mathbb N,\ n^2\ne2$".`,
    R`**Bước 3.** Xét đúng sai: $0^2=0$, $1^2=1$, $2^2=4$, và với $n\ge2$ thì $n^2\ge4$. Không có số tự nhiên nào có bình phương bằng $2$.`,
    R`**Kết luận.** Mệnh đề phủ định **đúng** (và mệnh đề gốc sai).`
   ] },
 { muc: "VD", de: R`Phát biểu bằng lời mệnh đề phủ định của "Mọi số nguyên tố đều là số lẻ". Mệnh đề nào đúng?`,
   giai: [
    R`**Phân tích.** "Mọi ... đều ..." là câu có lượng từ $\forall$. Phủ định của nó là "**có ít nhất một** ... **không** ...".`,
    R`**Bước 1.** Viết lại bằng kí hiệu: "$\forall p$ nguyên tố, $p$ là số lẻ".`,
    R`**Bước 2.** Phủ định: "$\exists p$ nguyên tố, $p$ không là số lẻ", tức là "Có ít nhất một số nguyên tố không phải là số lẻ".`,
    R`**Bước 3.** Tìm ví dụ: số $2$ là số nguyên tố (chỉ có ước $1$ và $2$) và $2$ là số chẵn.`,
    R`**Kết luận.** Mệnh đề phủ định **đúng**, mệnh đề "Mọi số nguyên tố đều là số lẻ" **sai**.`,
    R`**Nhận xét.** Muốn bác bỏ một câu "mọi ... đều ...", chỉ cần **một phản ví dụ**.`
   ] }
 ] },
"C1-B1-D03": {
 pp: [
  R`**Mệnh đề kéo theo** $P\Rightarrow Q$ ("Nếu $P$ thì $Q$") chỉ sai khi $P$ đúng và $Q$ sai.`,
  R`**Mệnh đề đảo** của $P\Rightarrow Q$ là $Q\Rightarrow P$. Mệnh đề đúng chưa chắc có mệnh đề đảo đúng.`,
  R`**Tương đương** $P\Leftrightarrow Q$ đúng khi cả $P\Rightarrow Q$ và $Q\Rightarrow P$ đều đúng.`,
  R`Khi $P\Rightarrow Q$ đúng: $P$ là **điều kiện đủ** để có $Q$; $Q$ là **điều kiện cần** để có $P$. Khi $P\Leftrightarrow Q$ đúng: $P$ là điều kiện cần và đủ để có $Q$.`
 ],
 luuY: [
  R`Đảo ngược vai trò "cần" và "đủ".`,
  R`Thấy mệnh đề đúng thì cho rằng mệnh đề đảo cũng đúng.`
 ],
 vd: [
 { muc: "NB", de: R`Xét tính đúng sai của mệnh đề "Nếu tam giác $ABC$ đều thì tam giác $ABC$ cân" và mệnh đề đảo của nó.`,
   giai: [
    R`**Phân tích.** $P$: "tam giác $ABC$ đều", $Q$: "tam giác $ABC$ cân". Xét $P\Rightarrow Q$ rồi xét mệnh đề đảo $Q\Rightarrow P$.`,
    R`**Bước 1.** Tam giác đều có $AB=BC=CA$, nên chắc chắn có hai cạnh bằng nhau. Theo định nghĩa, nó là tam giác cân. Vậy $P\Rightarrow Q$ **đúng**.`,
    R`**Bước 2.** Mệnh đề đảo $Q\Rightarrow P$: "Nếu tam giác $ABC$ cân thì tam giác $ABC$ đều".`,
    R`**Bước 3.** Tìm phản ví dụ: tam giác có ba cạnh $2$, $2$, $3$ là tam giác cân (hai cạnh bằng $2$) nhưng không đều. Vậy mệnh đề đảo **sai**.`,
    R`**Kết luận.** Mệnh đề đúng, mệnh đề đảo sai.`,
    R`**Nhận xét.** Mệnh đề đúng **chưa chắc** có mệnh đề đảo đúng.`
   ] },
 { muc: "TH", de: R`Phát biểu định lí "Nếu $a$ và $b$ cùng chia hết cho $3$ thì $a+b$ chia hết cho $3$" bằng thuật ngữ điều kiện cần, điều kiện đủ.`,
   giai: [
    R`**Phân tích.** Định lí dạng $P\Rightarrow Q$ đúng thì: $P$ là **điều kiện đủ** để có $Q$, còn $Q$ là **điều kiện cần** để có $P$.`,
    R`**Bước 1.** Xác định: $P$: "$a$ và $b$ cùng chia hết cho $3$"; $Q$: "$a+b$ chia hết cho $3$".`,
    R`**Bước 2.** Phát biểu theo điều kiện đủ: "$a$ và $b$ cùng chia hết cho $3$ là **điều kiện đủ** để $a+b$ chia hết cho $3$."`,
    R`**Bước 3.** Phát biểu theo điều kiện cần: "$a+b$ chia hết cho $3$ là **điều kiện cần** để $a$ và $b$ cùng chia hết cho $3$."`,
    R`**Nhận xét.** Mẹo nhớ: đứng **trước** dấu $\Rightarrow$ là điều kiện **đủ**, đứng **sau** là điều kiện **cần**. Chú ý $Q$ không đủ để có $P$: $a=1$, $b=2$ có $a+b=3$ chia hết cho $3$ nhưng $a$, $b$ không chia hết cho $3$.`
   ] },
 { muc: "TH", de: R`Xét tính đúng sai của "$x>2\Rightarrow x^2>4$" và mệnh đề đảo của nó.`,
   giai: [
    R`**Phân tích.** Xét $P\Rightarrow Q$ với $P$: "$x>2$", $Q$: "$x^2>4$". Để chứng minh đúng: lấy $P$ đúng rồi suy ra $Q$. Để chỉ ra sai: tìm một phản ví dụ.`,
    R`**Bước 1.** Giả sử $x>2$. Khi đó $x>0$, nhân hai vế của $x>2$ với $x$ được $x^2>2x$; mà $2x>4$. Suy ra $x^2>4$. Vậy mệnh đề **đúng**.`,
    R`**Bước 2.** Mệnh đề đảo: "$x^2>4\Rightarrow x>2$".`,
    R`**Bước 3.** Chọn $x=-3$: $x^2=9>4$ (giả thiết đúng) nhưng $-3<2$ (kết luận sai). Vậy mệnh đề đảo **sai**.`,
    R`**Kết luận.** Mệnh đề đúng, mệnh đề đảo sai.`,
    R`**Nhận xét.** Thực ra $x^2>4\iff x>2$ hoặc $x<-2$; quên trường hợp số âm là sai lầm hay gặp.`
   ] },
 { muc: "VD", de: R`Phát biểu mệnh đề tương đương từ định lí Pythagore và định lí đảo, dùng thuật ngữ "điều kiện cần và đủ".`,
   giai: [
    R`**Phân tích.** Mệnh đề tương đương $P\Leftrightarrow Q$ đúng khi cả $P\Rightarrow Q$ và $Q\Rightarrow P$ đều đúng. Định lí Pythagore và định lí đảo cho ta đúng hai chiều đó.`,
    R`**Bước 1.** Định lí Pythagore: "Tam giác $ABC$ vuông tại $A$ $\Rightarrow AB^2+AC^2=BC^2$" (đúng).`,
    R`**Bước 2.** Định lí đảo: "$AB^2+AC^2=BC^2\Rightarrow$ tam giác $ABC$ vuông tại $A$" (đúng).`,
    R`**Bước 3.** Gộp hai chiều: "Tam giác $ABC$ vuông tại $A$ $\Leftrightarrow AB^2+AC^2=BC^2$".`,
    R`**Kết luận.** "Điều kiện cần và đủ để tam giác $ABC$ vuông tại $A$ là $AB^2+AC^2=BC^2$."`
   ] }
 ] },
"C1-B2-D04": {
 pp: [
  R`**Hai cách cho tập hợp:** liệt kê các phần tử; hoặc chỉ ra tính chất đặc trưng. Đổi từ tính chất sang liệt kê: giải điều kiện (phương trình, bất phương trình) rồi lọc theo tập số ($\mathbb N$, $\mathbb Z$, $\mathbb R$).`,
  R`**Tập con:** $A\subset B$ khi mọi phần tử của $A$ đều thuộc $B$. **Bằng nhau:** $A=B\Leftrightarrow A\subset B$ và $B\subset A$.`,
  R`Tập có $n$ phần tử có $2^n$ tập con (kể cả $\varnothing$ và chính nó).`
 ],
 luuY: [
  R`Quên số $0$ trong $\mathbb N$, hoặc quên số âm trong $\mathbb Z$.`,
  R`Viết $a\subset A$ thay vì $a\in A$ (phần tử dùng $\in$, tập con dùng $\subset$).`
 ],
 vd: [
 { muc: "NB", de: R`Liệt kê các phần tử và tìm số phần tử của $A=\{x\in\mathbb N\mid x<5\}$.`,
   giai: [
    R`**Phân tích.** $A$ cho bởi tính chất: $x$ là số tự nhiên và $x<5$. Ta liệt kê các số tự nhiên thoả mãn, nhớ $\mathbb N$ bắt đầu từ $0$.`,
    R`**Bước 1.** Các số tự nhiên nhỏ hơn $5$: $0$, $1$, $2$, $3$, $4$.`,
    R`**Bước 2.** $A=\{0;1;2;3;4\}$.`,
    R`**Kết luận.** $A$ có $5$ phần tử.`,
    R`**Nhận xét.** Nếu đề cho $x\in\mathbb N^*$ thì bỏ số $0$, khi đó chỉ còn $4$ phần tử.`
   ] },
 { muc: "TH", de: R`Liệt kê các phần tử của $B=\{x\in\mathbb R\mid x^2-3x+2=0\}$ và $C=\{x\in\mathbb Z\mid|x|\le2\}$.`,
   giai: [
    R`**Phân tích.** Đổi từ tính chất sang liệt kê: giải điều kiện, rồi giữ lại những giá trị thuộc đúng tập số đề yêu cầu.`,
    R`**Bước 1.** Giải $x^2-3x+2=0$: $(x-1)(x-2)=0\iff x=1$ hoặc $x=2$. Cả hai đều là số thực nên $B=\{1;2\}$.`,
    R`**Bước 2.** Giải $|x|\le2\iff-2\le x\le2$.`,
    R`**Bước 3.** Giữ các số **nguyên** trong đoạn $[-2;2]$: $-2,-1,0,1,2$. Vậy $C=\{-2;-1;0;1;2\}$.`,
    R`**Kết luận.** $B=\{1;2\}$; $C=\{-2;-1;0;1;2\}$.`
   ] },
 { muc: "TH", de: R`Liệt kê tất cả các tập con của $\{a;b;c\}$.`,
   giai: [
    R`**Phân tích.** Liệt kê tập con theo số phần tử ($0$, $1$, $2$, $3$ phần tử) để không sót, không trùng.`,
    R`**Bước 1.** Tập con có $0$ phần tử: $\varnothing$ (tập rỗng là tập con của mọi tập).`,
    R`**Bước 2.** Có $1$ phần tử: $\{a\}$, $\{b\}$, $\{c\}$.`,
    R`**Bước 3.** Có $2$ phần tử: $\{a;b\}$, $\{a;c\}$, $\{b;c\}$.`,
    R`**Bước 4.** Có $3$ phần tử: $\{a;b;c\}$ (mọi tập là tập con của chính nó).`,
    R`**Kết luận.** Có $1+3+3+1=8$ tập con.`,
    R`**Thử lại.** Công thức: tập có $n$ phần tử có $2^n$ tập con, $2^3=8$, khớp.`
   ] },
 { muc: "VD", de: R`Cho $A=\{x\in\mathbb R\mid(x-1)(x^2-4)=0\}$ và $B=\{-2;1;2\}$. Chứng minh $A=B$.`,
   giai: [
    R`**Phân tích.** Hai tập bằng nhau khi chúng có cùng các phần tử. Ta liệt kê các phần tử của $A$ rồi so với $B$.`,
    R`**Bước 1.** Giải $(x-1)(x^2-4)=0$: tích bằng $0$ khi một thừa số bằng $0$.`,
    R`**Bước 2.** $x-1=0\iff x=1$; $x^2-4=0\iff x^2=4\iff x=2$ hoặc $x=-2$.`,
    R`**Bước 3.** Vậy $A=\{-2;1;2\}$.`,
    R`**Kết luận.** Mọi phần tử của $A$ đều thuộc $B$ ($A\subset B$) và mọi phần tử của $B$ đều thuộc $A$ ($B\subset A$), nên $A=B$.`
   ] }
 ] },
"C1-B2-D05": {
 pp: [
  R`**Giao** $A\cap B$: phần tử thuộc **cả hai** tập. **Hợp** $A\cup B$: phần tử thuộc **ít nhất một** tập.`,
  R`**Hiệu** $A\setminus B$: thuộc $A$ nhưng không thuộc $B$. **Phần bù** của $A$ trong $E$ ($A\subset E$): $C_EA=E\setminus A$.`,
  R`Liệt kê phần tử của từng tập, rồi đối chiếu lần lượt. Có thể vẽ biểu đồ Ven để dễ nhìn.`
 ],
 luuY: [
  R`Nhầm $A\setminus B$ với $B\setminus A$.`,
  R`Viết một phần tử hai lần trong $A\cup B$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $A=\{1;2;3;4;5\}$, $B=\{2;4;6;8\}$. Tìm $A\cap B$, $A\cup B$, $A\setminus B$, $B\setminus A$.`,
   giai: [
    R`**Phân tích.** Lần lượt xét từng phần tử: thuộc cả hai tập thì vào giao; thuộc ít nhất một tập thì vào hợp; thuộc $A$ mà không thuộc $B$ thì vào $A\setminus B$.`,
    R`**Bước 1.** Phần tử chung của $A$ và $B$: $2$ và $4$. Vậy $A\cap B=\{2;4\}$.`,
    R`**Bước 2.** Gộp tất cả, mỗi phần tử viết một lần: $A\cup B=\{1;2;3;4;5;6;8\}$.`,
    R`**Bước 3.** Lấy $A$ bỏ đi các phần tử chung $2$, $4$: $A\setminus B=\{1;3;5\}$.`,
    R`**Bước 4.** Lấy $B$ bỏ đi $2$, $4$: $B\setminus A=\{6;8\}$.`,
    R`**Thử lại.** $n(A\cup B)=n(A)+n(B)-n(A\cap B)=5+4-2=7$, khớp với $7$ phần tử ở Bước 2.`
   ] },
 { muc: "TH", de: R`Cho $E=\{x\in\mathbb N\mid1\le x\le9\}$, $A=\{x\in E\mid x\text{ chia hết cho }3\}$. Tìm $C_EA$.`,
   giai: [
    R`**Phân tích.** Phần bù của $A$ trong $E$ là các phần tử của $E$ không thuộc $A$. Cần liệt kê $E$ và $A$ trước.`,
    R`**Bước 1.** $E=\{1;2;3;4;5;6;7;8;9\}$.`,
    R`**Bước 2.** Các số trong $E$ chia hết cho $3$: $A=\{3;6;9\}$.`,
    R`**Bước 3.** Bỏ $3$, $6$, $9$ khỏi $E$.`,
    R`**Kết luận.** $C_EA=\{1;2;4;5;7;8\}$ (các số từ $1$ đến $9$ **không** chia hết cho $3$).`
   ] },
 { muc: "VD", de: R`Cho $A=\{1;2;3\}$. Có bao nhiêu tập hợp $X$ thoả mãn $A\cup X=\{1;2;3;4\}$?`,
   giai: [
    R`**Phân tích.** Tìm xem $X$ **bắt buộc** chứa gì và **được phép** chứa gì, rồi đếm số cách chọn phần còn tự do.`,
    R`**Bước 1.** Vì $X\subset A\cup X=\{1;2;3;4\}$ nên $X$ chỉ gồm các số trong $\{1;2;3;4\}$.`,
    R`**Bước 2.** Số $4$ thuộc $A\cup X$ nhưng không thuộc $A$, nên bắt buộc $4\in X$.`,
    R`**Bước 3.** Các số $1$, $2$, $3$ đã có trong $A$, nên $X$ chứa hay không đều được. Vậy $X=\{4\}\cup Y$ với $Y$ là tập con bất kì của $\{1;2;3\}$.`,
    R`**Bước 4.** Số tập con $Y$ của tập $3$ phần tử là $2^3=8$.`,
    R`**Kết luận.** Có $8$ tập $X$.`
   ] }
 ] },
"C1-B2-D06": {
 pp: [
  R`**Khoảng** $(a;b)$, **đoạn** $[a;b]$, **nửa khoảng** $[a;b)$, $(a;b]$; các khoảng vô hạn $(-\infty;a)$, $[a;+\infty)$... Ngoặc vuông: lấy đầu mút; ngoặc tròn: không lấy.`,
  R`**Cách làm:** biểu diễn từng tập trên trục số (gạch bỏ phần không thuộc tập), rồi đọc kết quả giao, hợp, hiệu.`,
  R`**Bài có tham số:** $A=[a;b]\subset B$ khi cả hai đầu mút của $A$ nằm trong $B$ (chú ý dấu "$<$" hay "$\le$" theo loại ngoặc); $A\cap B=\varnothing$ khi $A$ nằm hẳn bên trái hoặc hẳn bên phải $B$.`
 ],
 luuY: [
  R`Đầu mút bị lấy hay không: kiểm tra từng đầu mút có thuộc cả hai tập (giao) hay ít nhất một tập (hợp).`
 ],
 vd: [
 { muc: "NB", de: R`Cho $A=[-1;3)$, $B=(0;5]$. Tìm $A\cap B$, $A\cup B$, $A\setminus B$, $B\setminus A$.`,
   giai: [
    R`**Phân tích.** Biểu diễn $A$, $B$ trên cùng một trục số (hình dưới), đọc kết quả. Với mỗi đầu mút, hỏi: nó có thuộc tập kết quả không, để chọn ngoặc vuông hay tròn.`,
    R`**Bước 1.** Giao: phần hai đoạn chồng lên nhau là từ $0$ đến $3$. Số $0\notin B$, số $3\notin A$, nên cả hai đầu mút bị loại: $A\cap B=(0;3)$.`,
    R`**Bước 2.** Hợp: gộp lại phủ từ $-1$ đến $5$. Số $-1\in A$ và $5\in B$ nên lấy cả hai: $A\cup B=[-1;5]$.`,
    R`**Bước 3.** $A\setminus B$: phần của $A$ nằm ngoài $B$ là từ $-1$ đến $0$. Số $0\in A$ nhưng $0\notin B$ nên **được lấy**: $A\setminus B=[-1;0]$.`,
    R`**Bước 4.** $B\setminus A$: phần của $B$ nằm ngoài $A$ là từ $3$ đến $5$. Số $3\in B$, $3\notin A$ nên lấy: $B\setminus A=[3;5]$.`,
    R`**Kết luận.** $A\cap B=(0;3)$; $A\cup B=[-1;5]$; $A\setminus B=[-1;0]$; $B\setminus A=[3;5]$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.9]
\draw[->] (-2,0)--(6,0);
\draw[thick,blue] (-1,0.25)--(3,0.25); \draw[thick,red] (0,-0.25)--(5,-0.25);
\node[blue] at (-1,0.25){$[$}; \node[blue] at (3,0.25){$)$};
\node[red] at (0,-0.25){$($}; \node[red] at (5,-0.25){$]$};
\node[below] at (-1,-0.35){$-1$}; \node[below] at (0,-0.45){$0$}; \node[below] at (3,-0.35){$3$}; \node[below] at (5,-0.45){$5$};
\node[blue,above] at (1,0.3){$A$}; \node[red,right] at (5.2,-0.25){$B$};
\end{tikzpicture}`,
   chuThich: R`Phần chung của hai đoạn màu là $(0;3)$.` },
 { muc: "TH", de: R`Tìm phần bù của $A=[-1;3)$ trong $\mathbb R$.`,
   giai: [
    R`**Phân tích.** $C_{\mathbb R}A=\mathbb R\setminus A$: các số thực không thuộc $A$, tức là phần trục số còn lại khi bỏ đi $[-1;3)$.`,
    R`**Bước 1.** Phần bên trái $A$: các số nhỏ hơn $-1$. Số $-1\in A$ nên không lấy: $(-\infty;-1)$.`,
    R`**Bước 2.** Phần bên phải $A$: các số từ $3$ trở lên. Số $3\notin A$ nên **lấy**: $[3;+\infty)$.`,
    R`**Kết luận.** $C_{\mathbb R}A=(-\infty;-1)\cup[3;+\infty)$.`,
    R`**Nhận xét.** Lấy phần bù thì ngoặc ở mỗi đầu mút **đổi loại**: $[$ thành $)$, $)$ thành $[$.`
   ] },
 { muc: "VD", de: R`Cho $A=[m;m+2]$, $B=(1;4)$. Tìm $m$ để a) $A\subset B$; b) $A\cap B=\varnothing$.`,
   giai: [
    R`**Phân tích.** $A=[m;m+2]$ là một đoạn dài $2$ trượt trên trục số theo $m$. Ta so sánh hai đầu mút của $A$ với hai đầu mút của $B=(1;4)$.`,
    R`**Bước 1.** a) $A\subset B$ khi cả đoạn $A$ nằm trong khoảng mở $(1;4)$: đầu trái $m>1$ (không được bằng $1$ vì $1\notin B$) và đầu phải $m+2<4$.`,
    R`**Bước 2.** Giải: $m>1$ và $m<2$, tức là $1<m<2$.`,
    R`**Bước 3.** b) $A\cap B=\varnothing$ khi $A$ nằm hẳn bên trái $B$: $m+2\le1\iff m\le-1$ (được bằng vì $1\notin B$).`,
    R`**Bước 4.** Hoặc $A$ nằm hẳn bên phải $B$: $m\ge4$ (được bằng vì $4\notin B$).`,
    R`**Kết luận.** a) $1<m<2$; b) $m\le-1$ hoặc $m\ge4$.`,
    R`**Thử lại.** $m=1{,}5$: $A=[1{,}5;3{,}5]\subset(1;4)$ đúng. $m=-1$: $A=[-1;1]$ chỉ chạm $1$ mà $1\notin B$ nên không giao, đúng.`
   ] }
 ] },
"C1-B2-D07": {
 pp: [
  R`Vẽ biểu đồ Ven; điền số **từ phần giao trong cùng ra ngoài**.`,
  R`**Hai tập:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$.`,
  R`**Ba tập:** $n(A\cup B\cup C)=n(A)+n(B)+n(C)-n(A\cap B)-n(B\cap C)-n(C\cap A)+n(A\cap B\cap C)$.`,
  R`"Chỉ thích $A$" $=n(A)$ trừ các phần $A$ chung với tập khác.`
 ],
 luuY: [
  R`Cộng thẳng $n(A)+n(B)$ (đếm hai lần phần chung).`
 ],
 vd: [
 { muc: "TH", de: R`Lớp có $40$ học sinh: $25$ em thích Toán, $20$ em thích Văn, $10$ em thích cả hai môn. Hỏi bao nhiêu em thích ít nhất một môn, bao nhiêu em không thích môn nào, bao nhiêu em chỉ thích Toán?`,
   giai: [
    R`**Phân tích.** Gọi $T$, $V$ là tập học sinh thích Toán, thích Văn. Biết $n(T)=25$, $n(V)=20$, $n(T\cap V)=10$. Vẽ biểu đồ Ven và điền số từ **phần chung** ra ngoài.`,
    R`**Bước 1.** Phần chung (thích cả hai): $10$ em.`,
    R`**Bước 2.** Chỉ thích Toán $=n(T)-n(T\cap V)=25-10=15$ em; chỉ thích Văn $=20-10=10$ em.`,
    R`**Bước 3.** Thích ít nhất một môn: $n(T\cup V)=15+10+10=35$ em (cũng bằng $25+20-10$).`,
    R`**Bước 4.** Không thích môn nào $=40-35=5$ em.`,
    R`**Kết luận.** $35$ em thích ít nhất một môn, $5$ em không thích môn nào, $15$ em chỉ thích Toán.`,
    R`**Thử lại.** Cộng bốn ô của biểu đồ: $15+10+10+5=40$, đúng sĩ số.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.9]
\draw (-2.4,-1.9) rectangle (4.6,1.9);
\draw[thick,blue] (0,0) circle (1.5); \draw[thick,red] (2,0) circle (1.5);
\node at (-0.7,0){$15$}; \node at (1,0){$10$}; \node at (2.7,0){$10$}; \node at (4.1,-1.45){$5$};
\node[blue] at (-1.5,1.4){Toán}; \node[red] at (3.6,1.4){Văn};
\end{tikzpicture}`,
   chuThich: R`Điền $10$ vào phần chung trước, rồi $25-10=15$, $20-10=10$, phần ngoài $40-35=5$.` },
 { muc: "VD", de: R`Lớp có $45$ học sinh. Có $25$ em chơi bóng đá, $18$ em chơi cầu lông, $20$ em bơi; $7$ em chơi bóng đá và cầu lông, $8$ em chơi bóng đá và bơi, $6$ em chơi cầu lông và bơi, $3$ em chơi cả ba môn. Hỏi có bao nhiêu em không chơi môn nào, bao nhiêu em chỉ chơi bóng đá?`,
   giai: [
    R`**Phân tích.** Ba tập $B$ (bóng đá), $C$ (cầu lông), $S$ (bơi). Dùng công thức ba tập, hoặc điền biểu đồ Ven từ trong ra ngoài.`,
    R`**Bước 1.** Công thức: $n(B\cup C\cup S)=25+18+20-7-8-6+3=45$.`,
    R`**Bước 2.** Không chơi môn nào $=45-45=0$ em.`,
    R`**Bước 3.** Điền biểu đồ: ô giữa (cả ba) là $3$. Chỉ bóng đá và cầu lông: $7-3=4$; chỉ bóng đá và bơi: $8-3=5$.`,
    R`**Bước 4.** Chỉ chơi bóng đá $=25-4-5-3=13$ em.`,
    R`**Kết luận.** Không có em nào không chơi môn nào; có $13$ em chỉ chơi bóng đá.`,
    R`**Nhận xét.** Viết gọn $25-7-8+3$: trừ hai phần chung thì phần "cả ba" bị trừ hai lần, nên phải cộng lại một lần.`
   ] },
 { muc: "VD", de: R`Trong một nhóm $30$ học sinh, mỗi em biết ít nhất một trong hai ngoại ngữ Anh, Pháp. Có $24$ em biết tiếng Anh, $12$ em biết tiếng Pháp. Hỏi có bao nhiêu em biết cả hai thứ tiếng, bao nhiêu em chỉ biết tiếng Anh?`,
   giai: [
    R`**Phân tích.** Gọi $A$, $P$ là tập em biết tiếng Anh, tiếng Pháp. "Mỗi em biết ít nhất một" nghĩa là $n(A\cup P)=30$. Ẩn cần tìm là $n(A\cap P)$.`,
    R`**Bước 1.** Công thức: $n(A\cup P)=n(A)+n(P)-n(A\cap P)$.`,
    R`**Bước 2.** Thay số: $30=24+12-n(A\cap P)$, suy ra $n(A\cap P)=36-30=6$.`,
    R`**Bước 3.** Chỉ biết tiếng Anh $=24-6=18$ em.`,
    R`**Kết luận.** $6$ em biết cả hai thứ tiếng; $18$ em chỉ biết tiếng Anh.`,
    R`**Thử lại.** Chỉ Pháp $=12-6=6$. Tổng $18+6+6=30$, đúng.`
   ] }
 ] }
});
/* ---------- Chương II · Bất phương trình và hệ bất phương trình bậc nhất hai ẩn ---------- */
const MIEN = R`\begin{tikzpicture}[scale=0.75,>=stealth]
\fill[blue!15] (0,0)--(2,0)--(3,1)--(0,4)--cycle;
\draw[->] (-1,0)--(5,0) node[below]{$x$};
\draw[->] (0,-1)--(0,5) node[left]{$y$};
\draw[thick] (-0.5,4.5)--(4.5,-0.5);
\draw[thick] (1,-1)--(4.5,2.5);
\fill (0,0) circle (2pt); \fill (2,0) circle (2pt); \fill (3,1) circle (2pt); \fill (0,4) circle (2pt);
\node[below left] at (0,0){$O$}; \node[below right] at (2,0){$A(2;0)$}; \node[right] at (3.25,1){$B(3;1)$}; \node[left] at (0,4){$C(0;4)$};
\node[right] at (4.5,-0.7){$x+y=4$}; \node[right] at (4.5,2.5){$x-y=2$};
\end{tikzpicture}`;
Object.assign(D, {
"C2-B3-D08": {
 pp: [
  R`**Bất phương trình bậc nhất hai ẩn** có dạng $ax+by<c$ (hoặc $>$, $\le$, $\ge$), trong đó $a$, $b$ không đồng thời bằng $0$.`,
  R`Cặp số $(x_0;y_0)$ là **nghiệm** nếu $ax_0+by_0<c$ là mệnh đề đúng. Kiểm tra: thay toạ độ vào, tính rồi so sánh.`,
  R`Điểm $M(x_0;y_0)$ thuộc miền nghiệm $\Leftrightarrow$ $(x_0;y_0)$ là nghiệm.`,
  R`**Bài thực tế:** gọi ẩn (số lượng), viết điều kiện về tiền, thời gian, nguyên liệu... thành bất phương trình.`
 ],
 luuY: [
  R`Nhận nhầm $x^2+y\le2$ hay $xy>1$ là bất phương trình bậc nhất hai ẩn.`,
  R`Quên dấu bằng khi đề có "không quá", "tối đa" ($\le$) hay "ít nhất" ($\ge$).`
 ],
 vd: [
 { muc: "NB", de: R`Trong các bất phương trình sau, bất phương trình nào là bậc nhất hai ẩn? a) $2x-3y>1$; b) $x^2+y\le2$; c) $xy>1$; d) $3x\ge0$.`,
   giai: [
    R`**Phân tích.** Bất phương trình bậc nhất hai ẩn có dạng $ax+by<c$ (hoặc $>,\le,\ge$): mỗi ẩn chỉ có **bậc một**, không có tích $xy$, và $a$, $b$ không đồng thời bằng $0$. Kiểm tra từng bất phương trình theo tiêu chí đó.`,
    R`**Bước 1.** a) Có dạng $ax+by>c$ với $a=2$, $b=-3$: **có**.`,
    R`**Bước 2.** b) Có $x^2$: không. c) Có tích $xy$: không.`,
    R`**Bước 3.** d) $3x+0\cdot y\ge0$, $a=3\ne0$: **có**.`,
    R`**Kết luận.** Các bất phương trình a) và d) là bậc nhất hai ẩn.`,
    R`**Nhận xét.** d) chỉ có ẩn $x$ vẫn được coi là bậc nhất hai ẩn, với $b=0$.`
   ] },
 { muc: "TH", de: R`Các cặp số $(1;-1)$ và $(0;0)$ có là nghiệm của bất phương trình $2x-3y>1$ không?`,
   giai: [
    R`**Phân tích.** Một cặp số là nghiệm khi thay vào bất phương trình được **mệnh đề đúng**. Thay lần lượt từng cặp vào vế trái $2x-3y$, tính ra số rồi so với $1$.`,
    R`**Bước 1.** Cặp $(1;-1)$: $2x-3y=2\cdot1-3\cdot(-1)=2+3=5$.`,
    R`**Bước 2.** So sánh: $5>1$ đúng, nên $(1;-1)$ **là** nghiệm.`,
    R`**Bước 3.** Cặp $(0;0)$: $2\cdot0-3\cdot0=0$, mà $0>1$ sai, nên $(0;0)$ **không** là nghiệm.`,
    R`**Kết luận.** $(1;-1)$ là nghiệm; $(0;0)$ không là nghiệm.`,
    R`**Nhận xét.** Chú ý dấu khi thay số âm: $-3\cdot(-1)=+3$.`
   ] },
 { muc: "TH", de: R`Bạn An có $200$ nghìn đồng, muốn mua $x$ chiếc bút (giá $5$ nghìn/chiếc) và $y$ quyển vở (giá $8$ nghìn/quyển). Viết bất phương trình biểu thị điều kiện; An có mua được $10$ bút và $15$ vở không? $20$ bút và $15$ vở thì sao?`,
   giai: [
    R`**Phân tích.** Số tiền mua bút là $5x$, mua vở là $8y$; tổng "không vượt quá $200$" nghĩa là dấu $\le$. Sau đó thay từng phương án vào kiểm tra.`,
    R`**Bước 1.** Số tiền không vượt quá $200$: $5x+8y\le200$ ($x,y\in\mathbb N$).`,
    R`**Bước 2.** $(10;15)$: $50+120=170\le200$: mua được.`,
    R`**Bước 3.** $(20;15)$: $100+120=220>200$: không mua được.`,
    R`**Kết luận.** Điều kiện là $5x+8y\le200$. An mua được $10$ bút và $15$ vở (hết $170$ nghìn), nhưng không mua được $20$ bút và $15$ vở (cần $220$ nghìn).`
   ] }
 ] },
"C2-B3-D09": {
 pp: [
  R`**Bước 1.** Vẽ đường thẳng $d:ax+by=c$ (lấy hai điểm, thường là giao với hai trục).`,
  R`**Bước 2.** Lấy một điểm không thuộc $d$ (thường là $O(0;0)$; nếu $d$ qua $O$ thì lấy $(1;0)$ hoặc $(0;1)$), thay vào bất phương trình.`,
  R`**Bước 3.** Đúng: miền nghiệm là nửa mặt phẳng bờ $d$ **chứa** điểm đó; sai: nửa mặt phẳng **không chứa** điểm đó. Dấu $<$, $>$ thì không kể bờ (vẽ nét đứt); $\le$, $\ge$ thì kể cả bờ.`,
  R`**Từ hình vẽ ra bất phương trình:** viết phương trình bờ qua hai điểm đã biết; thay một điểm thuộc miền để chọn dấu.`
 ],
 luuY: [
  R`Gạch nhầm phần là miền nghiệm (SGK tô màu hoặc để trống miền nghiệm: đọc kĩ chú thích).`
 ],
 vd: [
 { muc: "TH", de: R`Biểu diễn miền nghiệm của bất phương trình $x+2y\le4$.`,
   giai: [
    R`**Phân tích.** Ba bước: vẽ đường bờ $x+2y=4$, thử một điểm không nằm trên bờ (thuận tiện nhất là $O$), rồi chọn nửa mặt phẳng. Dấu $\le$ nên **kể cả bờ** (nét liền).`,
    R`**Bước 1.** Vẽ $d:x+2y=4$ qua $(4;0)$ và $(0;2)$.`,
    R`**Bước 2.** Thay $O(0;0)$: $0\le4$ đúng.`,
    R`**Bước 3.** Miền nghiệm là nửa mặt phẳng bờ $d$ chứa $O$, kể cả đường thẳng $d$ (phần tô màu).`,
    R`**Kết luận.** Miền nghiệm là nửa mặt phẳng bờ $x+2y=4$ chứa gốc $O$, kể cả bờ.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8,>=stealth]
\fill[blue!15] (-1,-1)--(5,-1)--(5,-0.5)--(-1,2.5)--cycle;
\draw[->] (-1,0)--(5.2,0) node[below]{$x$};
\draw[->] (0,-1)--(0,3) node[left]{$y$};
\draw[thick] (-1,2.5)--(5,-0.5);
\node[below] at (4,0){$4$}; \node[left] at (0,2){$2$}; \node[below left] at (0,0){$O$};
\node[above] at (3.2,1.1){$x+2y=4$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Biểu diễn miền nghiệm của bất phương trình $2x-y>0$.`,
   giai: [
    R`**Phân tích.** Đường bờ $2x-y=0$ đi qua gốc toạ độ, nên **không thể** dùng $O$ để thử. Chọn một điểm khác dễ tính như $(1;0)$. Dấu $>$ nên bờ vẽ nét đứt.`,
    R`**Bước 1.** Đường thẳng $d:2x-y=0$ đi qua $O$ và $(1;2)$, nên không lấy $O$ để thử.`,
    R`**Bước 2.** Thay $(1;0)$: $2>0$ đúng.`,
    R`**Bước 3.** Miền nghiệm là nửa mặt phẳng bờ $d$ chứa điểm $(1;0)$, **không** kể đường thẳng $d$ (vẽ nét đứt).`,
    R`**Kết luận.** Miền nghiệm là nửa mặt phẳng bờ $2x-y=0$ chứa điểm $(1;0)$, không kể bờ.`
   ] },
 { muc: "VD", de: R`Miền nghiệm (kể cả bờ) của một bất phương trình là nửa mặt phẳng có bờ đi qua $(2;0)$ và $(0;3)$, **không** chứa gốc toạ độ. Tìm bất phương trình đó.`,
   giai: [
    R`**Phân tích.** Làm ngược lại quy trình vẽ: viết phương trình **đường bờ** qua hai điểm đã cho, rồi dùng điểm $O$ (không thuộc miền) để chọn chiều của dấu bất đẳng thức.`,
    R`**Bước 1.** Đường thẳng cắt hai trục tại $(2;0)$ và $(0;3)$ có phương trình đoạn chắn $\dfrac x2+\dfrac y3=1$. Nhân hai vế với $6$: $3x+2y=6$.`,
    R`**Bước 2.** Thay $O(0;0)$ vào vế trái: $3\cdot0+2\cdot0=0<6$. Vậy các điểm phía chứa $O$ thoả $3x+2y<6$.`,
    R`**Bước 3.** Miền nghiệm **không** chứa $O$ nên nằm phía còn lại: $3x+2y>6$; kể cả bờ nên lấy dấu $\ge$.`,
    R`**Kết luận.** Bất phương trình cần tìm là $3x+2y\ge6$.`,
    R`**Thử lại.** Điểm $(2;3)$ nằm xa $O$ hơn đường bờ: $6+6=12\ge6$ ✓; điểm $(2;0)$ trên bờ: $6\ge6$ ✓.`
   ] }
 ] },
"C2-B4-D10": {
 pp: [
  R`**Nghiệm của hệ**: cặp số thoả mãn **tất cả** các bất phương trình trong hệ.`,
  R`**Miền nghiệm của hệ**: phần giao các miền nghiệm của từng bất phương trình. Vẽ lần lượt từng đường bờ, xác định từng nửa mặt phẳng rồi lấy phần chung.`,
  R`Miền nghiệm thường là một đa giác; tìm các đỉnh bằng cách giải hệ hai phương trình đường bờ.`,
  R`**Diện tích** đa giác: chia thành tam giác, hình thang, hoặc lấy hình chữ nhật bao trừ đi các phần thừa.`
 ],
 luuY: [
  R`Quên các điều kiện $x\ge0$, $y\ge0$ khi chúng có trong hệ.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hệ $\begin{cases}x\ge0\\y\ge0\\x+y\le4\\x-y\le2\end{cases}$. Các cặp số $(1;1)$, $(3;2)$ có là nghiệm của hệ không?`,
   giai: [
    R`**Phân tích.** Một cặp số là nghiệm của hệ khi thoả mãn **tất cả** các bất phương trình của hệ. Chỉ cần một bất phương trình sai là đủ để kết luận không phải nghiệm.`,
    R`**Bước 1.** Cặp $(1;1)$: $x=1\ge0$ ✓; $y=1\ge0$ ✓; $x+y=2\le4$ ✓; $x-y=0\le2$ ✓. Thoả mãn cả bốn.`,
    R`**Bước 2.** Cặp $(3;2)$: $3\ge0$ ✓; $2\ge0$ ✓; $x+y=5\le4$ sai.`,
    R`**Kết luận.** $(1;1)$ là nghiệm của hệ; $(3;2)$ không là nghiệm.`,
    R`**Nhận xét.** Với $(3;2)$ không cần kiểm tra tiếp bất phương trình thứ tư, vì đã có một bất phương trình sai.`
   ] },
 { muc: "TH", de: R`Biểu diễn miền nghiệm của hệ ở ví dụ 1, tìm các đỉnh và tính diện tích miền nghiệm.`,
   giai: [
    R`**Phân tích.** Miền nghiệm của hệ là **phần chung** các miền nghiệm. Vẽ bốn đường bờ, giữ lại phần thoả mọi bất phương trình; các đỉnh là giao điểm các đường bờ, tìm bằng cách giải hệ hai phương trình.`,
    R`**Bước 1.** Vẽ bốn đường bờ: $x=0$, $y=0$, $x+y=4$, $x-y=2$. Thử $O$: $0\le4$, $0\le2$ đúng, nên miền nghiệm nằm phía chứa $O$ của hai đường xiên, trong góc phần tư thứ nhất.`,
    R`**Bước 2.** Các đỉnh: $O(0;0)$; $A(2;0)$ (giao $y=0$ và $x-y=2$); $B(3;1)$ (giải $x+y=4$, $x-y=2$); $C(0;4)$.`,
    R`**Bước 3.** Diện tích tứ giác $OABC$ = tam giác $OAB$ + tam giác $OBC$: $\dfrac12\cdot2\cdot1+\dfrac12\cdot4\cdot3=1+6=7$.`,
    R`**Kết luận.** Miền nghiệm là tứ giác $OABC$ với $O(0;0)$, $A(2;0)$, $B(3;1)$, $C(0;4)$; diện tích bằng $7$.`,
    R`**Thử lại.** Kiểm tra $B(3;1)$ thuộc cả hai đường xiên: $3+1=4$ ✓ và $3-1=2$ ✓.`
   ],
   hinh: MIEN,
   chuThich: R`Miền nghiệm là tứ giác $OABC$ (tô màu).` }
 ] },
"C2-B4-D11": {
 pp: [
  R`**Định lí:** giá trị lớn nhất, nhỏ nhất của $F=ax+by$ trên miền nghiệm là một đa giác đạt được tại **các đỉnh** của đa giác.`,
  R`**Bước 1.** Vẽ miền nghiệm, tìm toạ độ các đỉnh. **Bước 2.** Tính $F$ tại từng đỉnh. **Bước 3.** So sánh, chọn lớn nhất và nhỏ nhất.`
 ],
 luuY: [
  R`Bỏ sót một đỉnh (ví dụ đỉnh $O$).`
 ],
 vd: [
 { muc: "TH", de: R`Trên miền nghiệm $OABC$ ở dạng trước ($O(0;0)$, $A(2;0)$, $B(3;1)$, $C(0;4)$), tìm GTLN, GTNN của $F=2x+y$.`,
   giai: [
    R`**Phân tích.** Miền nghiệm là đa giác nên $F=2x+y$ đạt GTLN, GTNN **tại các đỉnh**. Chỉ cần tính $F$ tại bốn đỉnh $O$, $A$, $B$, $C$ rồi so sánh.`,
    R`**Bước 1.** Tính $F$ tại từng đỉnh: $F(O)=2\cdot0+0=0$; $F(A)=2\cdot2+0=4$; $F(B)=2\cdot3+1=7$; $F(C)=2\cdot0+4=4$.`,
    R`**Bước 2.** So sánh bốn giá trị $0;4;7;4$: lớn nhất là $7$, nhỏ nhất là $0$.`,
    R`**Kết luận.** $\max F=7$ tại $B(3;1)$; $\min F=0$ tại $O(0;0)$.`,
    R`**Nhận xét.** Không được bỏ sót đỉnh $O$: ở đây GTNN đạt đúng tại $O$.`
   ],
   hinh: MIEN },
 { muc: "VD", de: R`Trên cùng miền nghiệm đó, tìm GTLN, GTNN của $F=x-2y$.`,
   giai: [
    R`**Phân tích.** Cùng miền nghiệm, chỉ đổi biểu thức. Hệ số của $y$ âm nên $F$ nhỏ nhất ở đỉnh có $y$ lớn, lớn nhất ở đỉnh có $y$ nhỏ; vẫn tính đủ ở bốn đỉnh để chắc chắn.`,
    R`**Bước 1.** $F(O)=0-0=0$; $F(A)=2-0=2$; $F(B)=3-2\cdot1=1$; $F(C)=0-2\cdot4=-8$.`,
    R`**Bước 2.** So sánh $0;2;1;-8$: lớn nhất là $2$, nhỏ nhất là $-8$.`,
    R`**Kết luận.** $\max F=2$ tại $A(2;0)$; $\min F=-8$ tại $C(0;4)$.`
   ] }
 ] },
"C2-B4-D12": {
 pp: [
  R`**Bước 1.** Gọi ẩn $x$, $y$ (số lượng hai loại), ghi điều kiện $x\ge0$, $y\ge0$.`,
  R`**Bước 2.** Lập bảng số liệu; viết các ràng buộc (thời gian máy, nguyên liệu, tiền...) thành hệ bất phương trình.`,
  R`**Bước 3.** Viết biểu thức cần tối ưu $F=ax+by$ (lợi nhuận, chi phí).`,
  R`**Bước 4.** Vẽ miền nghiệm, tìm các đỉnh, tính $F$ tại các đỉnh, kết luận.`
 ],
 luuY: [
  R`Viết ngược chiều ràng buộc ("không vượt quá" là $\le$, "ít nhất" là $\ge$).`
 ],
 vd: [
 { muc: "VD", de: R`Một xưởng làm hai loại sản phẩm I và II. Mỗi sản phẩm I cần $2$ giờ trên máy A và $1$ giờ trên máy B, lãi $40$ nghìn đồng; mỗi sản phẩm II cần $1$ giờ trên máy A và $1$ giờ trên máy B, lãi $30$ nghìn đồng. Mỗi ngày máy A làm tối đa $10$ giờ, máy B tối đa $6$ giờ. Cần làm bao nhiêu sản phẩm mỗi loại để lãi lớn nhất?`,
   giai: [
    R`**Phân tích.** Bài toán tối ưu: gọi ẩn là số sản phẩm mỗi loại, viết **mỗi máy một ràng buộc** về thời gian, biểu thức lãi cần lớn nhất. Sau đó tìm đỉnh miền nghiệm và tính lãi tại các đỉnh.`,
    R`**Bước 1.** Gọi $x$, $y$ là số sản phẩm I, II mỗi ngày ($x,y\ge0$).`,
    R`**Bước 2.** Ràng buộc: máy A: $2x+y\le10$; máy B: $x+y\le6$. Lãi: $F=40x+30y$.`,
    R`**Bước 3.** Miền nghiệm là tứ giác có đỉnh $O(0;0)$, $(5;0)$, $(4;2)$ (giải $2x+y=10$, $x+y=6$), $(0;6)$.`,
    R`**Bước 4.** $F(O)=0$; $F(5;0)=200$; $F(4;2)=160+60=220$; $F(0;6)=180$.`,
    R`**Kết luận.** Làm $4$ sản phẩm I và $2$ sản phẩm II, lãi lớn nhất $220$ nghìn đồng.`,
    R`**Thử lại.** $(4;2)$: máy A dùng $2\cdot4+2=10$ giờ, máy B dùng $4+2=6$ giờ, đều trong giới hạn ✓.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.55,>=stealth]
\fill[blue!15] (0,0)--(5,0)--(4,2)--(0,6)--cycle;
\draw[->] (-0.8,0)--(7.5,0) node[below]{$x$};
\draw[->] (0,-0.8)--(0,10.8) node[left]{$y$};
\draw[thick] (-0.2,10.4)--(5.4,-0.8); \draw[thick] (-0.5,6.5)--(6.8,-0.8);
\fill (5,0) circle (3pt); \fill (4,2) circle (3pt); \fill (0,6) circle (3pt);
\node[below] at (5,-0.1){$5$}; \node[right] at (4.3,2.1){$(4;2)$}; \node[left] at (0,6){$6$}; \node[left] at (0,10){$10$};
\node[right] at (1.4,7.6){$2x+y=10$}; \node[right] at (6.8,-0.6){$x+y=6$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}` },
 { muc: "VD", de: R`Một người cần ít nhất $6$ đơn vị chất A và $8$ đơn vị chất B mỗi ngày. Mỗi kg thức ăn X chứa $2$ đơn vị A, $1$ đơn vị B, giá $3$ nghìn đồng; mỗi kg thức ăn Y chứa $1$ đơn vị A, $2$ đơn vị B, giá $2$ nghìn đồng. Cần mua bao nhiêu kg mỗi loại để chi phí ít nhất?`,
   giai: [
    R`**Phân tích.** "Ít nhất $6$ đơn vị A" cho ràng buộc dấu $\ge$. Miền nghiệm không bị chặn về phía xa gốc, nhưng chi phí có hệ số dương nên GTNN vẫn đạt tại một đỉnh.`,
    R`**Bước 1.** Gọi $x$, $y$ là số kg X, Y ($x,y\ge0$). Ràng buộc: $2x+y\ge6$; $x+2y\ge8$. Chi phí $F=3x+2y$.`,
    R`**Bước 2.** Miền nghiệm không bị chặn, có các đỉnh $(0;6)$, $\left(\dfrac43;\dfrac{10}3\right)$ (giải $2x+y=6$, $x+2y=8$), $(8;0)$.`,
    R`**Bước 3.** $F(0;6)=12$; $F\left(\frac43;\frac{10}3\right)=4+\dfrac{20}3=\dfrac{32}3\approx10{,}67$; $F(8;0)=24$.`,
    R`**Bước 4.** Vì $x,y\ge0$ và các hệ số của $F$ dương, $F$ chỉ lớn lên khi đi xa các đỉnh, nên GTNN đạt tại một đỉnh. **Kết luận.** Mua $\dfrac43$ kg X và $\dfrac{10}3$ kg Y, chi phí ít nhất $\dfrac{32}3\approx10{,}67$ nghìn đồng.`,
    R`**Thử lại.** $x=\dfrac43$, $y=\dfrac{10}3$: chất A $=\dfrac83+\dfrac{10}3=6$ ✓; chất B $=\dfrac43+\dfrac{20}3=8$ ✓.`
   ] }
 ] }
});
/* ---------- Chương III · Hệ thức lượng trong tam giác ---------- */
const TGC = R`\begin{tikzpicture}[scale=0.8]
\draw[thick] (0,0)--(5,0)--(1.5,2.8)--cycle;
\node[below left] at (0,0){$B$}; \node[below right] at (5,0){$C$}; \node[above] at (1.5,2.8){$A$};
\node[below] at (2.5,0){$a$}; \node[right] at (3.3,1.5){$b$}; \node[left] at (0.7,1.5){$c$};
\end{tikzpicture}`;
Object.assign(D, {
"C3-B5-D13": {
 pp: [
  R`Trên nửa đường tròn đơn vị (tâm $O$, bán kính $1$, nằm phía trên trục $Ox$), lấy điểm $M(x_0;y_0)$ sao cho $\widehat{xOM}=\alpha$ ($0^\circ\le\alpha\le180^\circ$).`,
  R`Khi đó $\sin\alpha=y_0$, $\cos\alpha=x_0$, $\tan\alpha=\dfrac{y_0}{x_0}$ ($\alpha\ne90^\circ$), $\cot\alpha=\dfrac{x_0}{y_0}$ ($\alpha\ne0^\circ,180^\circ$).`,
  R`**Dấu:** $\sin\alpha\ge0$ với mọi $\alpha$; $\alpha$ nhọn thì $\cos,\tan,\cot>0$; $\alpha$ tù thì $\cos,\tan,\cot<0$.`,
  R`**Hai góc bù nhau:** $\sin(180^\circ-\alpha)=\sin\alpha$; $\cos(180^\circ-\alpha)=-\cos\alpha$; $\tan(180^\circ-\alpha)=-\tan\alpha$; $\cot(180^\circ-\alpha)=-\cot\alpha$.`,
  R`**Giá trị đặc biệt:** $$\begin{array}{c|ccccc}\alpha&0^\circ&30^\circ&45^\circ&60^\circ&90^\circ\\\hline\sin\alpha&0&\frac12&\frac{\sqrt2}2&\frac{\sqrt3}2&1\\\cos\alpha&1&\frac{\sqrt3}2&\frac{\sqrt2}2&\frac12&0\\\tan\alpha&0&\frac{\sqrt3}3&1&\sqrt3&\|\end{array}$$ Góc tù $120^\circ,135^\circ,150^\circ$ thì dùng công thức góc bù.`
 ],
 luuY: [
  R`Quên đổi dấu $\cos$ khi chuyển sang góc bù: $\cos120^\circ=-\cos60^\circ=-\dfrac12$, không phải $\dfrac12$.`,
  R`$\tan90^\circ$ và $\cot0^\circ$, $\cot180^\circ$ không xác định.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $\sin120^\circ$, $\cos135^\circ$, $\tan150^\circ$.`,
   giai: [
    R`**Phân tích.** Góc tù đưa về góc nhọn bằng **góc bù** $180^\circ-\alpha$: hai góc bù nhau có $\sin$ bằng nhau, còn $\cos$, $\tan$, $\cot$ đối nhau.`,
    R`**Bước 1.** $\sin120^\circ=\sin(180^\circ-60^\circ)=\sin60^\circ=\dfrac{\sqrt3}2$.`,
    R`**Bước 2.** $\cos135^\circ=-\cos45^\circ=-\dfrac{\sqrt2}2$.`,
    R`**Bước 3.** $\tan150^\circ=-\tan30^\circ=-\dfrac{\sqrt3}3$.`,
    R`**Kết luận.** $\sin120^\circ=\dfrac{\sqrt3}2$, $\cos135^\circ=-\dfrac{\sqrt2}2$, $\tan150^\circ=-\dfrac{\sqrt3}3$.`,
    R`**Nhận xét.** Góc tù có $\cos$, $\tan$ âm; chỉ $\sin$ dương.`
   ] },
 { muc: "NB", de: R`Cho $M$ trên nửa đường tròn đơn vị với $\widehat{xOM}=120^\circ$. Tìm toạ độ của $M$.`,
   giai: [
    R`**Phân tích.** Điểm $M$ trên nửa đường tròn đơn vị với $\widehat{xOM}=\alpha$ có toạ độ $(\cos\alpha;\sin\alpha)$. Tính hai giá trị lượng giác của $120^\circ$ bằng góc bù $60^\circ$.`,
    R`**Bước 1.** $x_0=\cos120^\circ=-\dfrac12$; $y_0=\sin120^\circ=\dfrac{\sqrt3}2$.`,
    R`**Bước 2.** Vậy $M\left(-\dfrac12;\dfrac{\sqrt3}2\right)$ (nằm bên trái trục $Oy$ vì góc tù).`,
    R`**Kết luận.** $M\left(-\dfrac12;\dfrac{\sqrt3}2\right)$.`,
    R`**Thử lại.** $M$ nằm trên đường tròn đơn vị: $\dfrac14+\dfrac34=1$ ✓.`
   ],
   hinh: R`\begin{tikzpicture}[scale=2,>=stealth]
\draw[->] (-1.4,0)--(1.4,0) node[below]{$x$};
\draw[->] (0,-0.2)--(0,1.3) node[left]{$y$};
\draw[thick,blue] (1,0) arc (0:180:1);
\draw[thick] (0,0)--(-0.5,0.866);
\draw[dashed] (-0.5,0.866)--(-0.5,0); \draw[dashed] (-0.5,0.866)--(0,0.866);
\fill (-0.5,0.866) circle (0.8pt);
\node[above left] at (-0.5,0.866){$M$};
\node[below] at (-0.5,0){$-\frac12$}; \node[right] at (0,0.75){$\frac{\sqrt3}2$};
\node[below right] at (0,0){$O$}; \node[below] at (1,0){$1$}; \node[below] at (-1,0){$-1$};
\draw[red] (0.22,0) arc (0:120:0.22); \node at (0.33,0.36){$120^\circ$};
\end{tikzpicture}`,
   chuThich: R`$\cos\alpha$ là hoành độ, $\sin\alpha$ là tung độ của $M$.` },
 { muc: "TH", de: R`Cho $\alpha$ là góc tù. Xét dấu $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.`,
   giai: [
    R`**Phân tích.** Dấu của các giá trị lượng giác đọc từ **toạ độ** điểm $M$: $\cos$ là hoành độ, $\sin$ là tung độ, $\tan$ và $\cot$ là thương của chúng.`,
    R`**Bước 1.** Góc tù thì $M$ nằm bên trái trục $Oy$: $x_0<0$, $y_0>0$.`,
    R`**Bước 2.** Vậy $\sin\alpha>0$, $\cos\alpha<0$, $\tan\alpha=\dfrac{y_0}{x_0}<0$, $\cot\alpha<0$.`,
    R`**Kết luận.** $\sin\alpha>0$; $\cos\alpha$, $\tan\alpha$, $\cot\alpha$ đều âm.`
   ] },
 { muc: "TH", de: R`Tính $A=\cos150^\circ+\sin120^\circ+\tan135^\circ\cdot\cot45^\circ$.`,
   giai: [
    R`**Phân tích.** Tính riêng từng giá trị bằng góc bù, rồi thay vào biểu thức. Hai số hạng đầu sẽ triệt tiêu nhau.`,
    R`**Bước 1.** $\cos150^\circ=-\dfrac{\sqrt3}2$; $\sin120^\circ=\dfrac{\sqrt3}2$; $\tan135^\circ=-1$; $\cot45^\circ=1$.`,
    R`**Bước 2.** $A=-\dfrac{\sqrt3}2+\dfrac{\sqrt3}2+(-1)\cdot1=-1$.`,
    R`**Kết luận.** $A=-1$.`
   ] }
 ] },
"C3-B5-D14": {
 pp: [
  R`Các hệ thức cơ bản: $\sin^2\alpha+\cos^2\alpha=1$; $\tan\alpha\cdot\cot\alpha=1$; $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$; $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$.`,
  R`**Biết $\sin\alpha$, tìm $\cos\alpha$:** $\cos\alpha=\pm\sqrt{1-\sin^2\alpha}$, lấy dấu $+$ nếu $\alpha$ nhọn, dấu $-$ nếu $\alpha$ tù.`,
  R`**Biết $\cos\alpha$, tìm $\sin\alpha$:** $\sin\alpha=\sqrt{1-\cos^2\alpha}$ (luôn lấy dấu $+$ vì $0^\circ\le\alpha\le180^\circ$).`,
  R`**Biết $\tan\alpha$, tính biểu thức đẳng cấp** theo $\sin$, $\cos$: chia cả tử và mẫu cho $\cos\alpha$ (hoặc $\cos^2\alpha$).`,
  R`**Rút gọn:** đưa các góc tù về góc nhọn bằng công thức góc bù, rồi ghép cặp.`
 ],
 luuY: [
  R`Biết $\sin\alpha$ mà không xét góc nhọn hay tù thì có hai giá trị $\cos\alpha$.`,
  R`Viết $\sin\alpha=-\sqrt{\dots}$: sai, vì trong $[0^\circ;180^\circ]$ luôn có $\sin\alpha\ge0$.`
 ],
 vd: [
 { muc: "TH", de: R`Cho $\sin\alpha=\dfrac35$ với $90^\circ<\alpha<180^\circ$. Tính $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.`,
   giai: [
    R`**Phân tích.** Biết $\sin\alpha$, tìm $\cos\alpha$ bằng $\sin^2\alpha+\cos^2\alpha=1$. Khai căn được hai giá trị; $\alpha$ **tù** nên chọn $\cos\alpha<0$.`,
    R`**Bước 1.** $\cos^2\alpha=1-\dfrac9{25}=\dfrac{16}{25}$. Vì $\alpha$ tù nên $\cos\alpha<0$: $\cos\alpha=-\dfrac45$.`,
    R`**Bước 2.** $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}=\dfrac{3/5}{-4/5}=-\dfrac34$; $\cot\alpha=\dfrac1{\tan\alpha}=-\dfrac43$.`,
    R`**Kết luận.** $\cos\alpha=-\dfrac45$, $\tan\alpha=-\dfrac34$, $\cot\alpha=-\dfrac43$.`,
    R`**Thử lại.** $\left(\dfrac35\right)^2+\left(-\dfrac45\right)^2=1$ ✓.`
   ] },
 { muc: "TH", de: R`Cho $\cos\alpha=-\dfrac13$. Tính $\sin\alpha$ và $\tan\alpha$.`,
   giai: [
    R`**Phân tích.** Với $0^\circ\le\alpha\le180^\circ$ luôn có $\sin\alpha\ge0$, nên sau khi khai căn chỉ lấy giá trị **không âm**.`,
    R`**Bước 1.** $\sin^2\alpha=1-\dfrac19=\dfrac89$; vì $\sin\alpha\ge0$ nên $\sin\alpha=\dfrac{2\sqrt2}3$.`,
    R`**Bước 2.** $\tan\alpha=\dfrac{2\sqrt2/3}{-1/3}=-2\sqrt2$.`,
    R`**Kết luận.** $\sin\alpha=\dfrac{2\sqrt2}3$, $\tan\alpha=-2\sqrt2$.`,
    R`**Thử lại.** $\dfrac89+\dfrac19=1$ ✓.`
   ] },
 { muc: "VD", de: R`Cho $\tan\alpha=2$. Tính $P=\dfrac{2\sin\alpha+\cos\alpha}{\sin\alpha-3\cos\alpha}$.`,
   giai: [
    R`**Phân tích.** Tử và mẫu đều có dạng $m\sin\alpha+n\cos\alpha$: chia cả tử và mẫu cho $\cos\alpha$ để xuất hiện $\tan\alpha$ đã biết.`,
    R`**Bước 1.** $\tan\alpha=2$ nên $\cos\alpha\ne0$. Chia cả tử và mẫu cho $\cos\alpha$: $P=\dfrac{2\tan\alpha+1}{\tan\alpha-3}$.`,
    R`**Bước 2.** $P=\dfrac{2\cdot2+1}{2-3}=\dfrac5{-1}=-5$.`,
    R`**Kết luận.** $P=-5$.`,
    R`**Thử lại.** $\tan\alpha=2$ nghĩa là $\sin\alpha=2\cos\alpha$: $P=\dfrac{4\cos\alpha+\cos\alpha}{2\cos\alpha-3\cos\alpha}=\dfrac{5}{-1}=-5$ ✓.`
   ] },
 { muc: "VD", de: R`Rút gọn $B=\cos10^\circ+\cos50^\circ+\cos130^\circ+\cos170^\circ$.`,
   giai: [
    R`**Phân tích.** Các góc ghép thành cặp **bù nhau**: $10^\circ$ với $170^\circ$, $50^\circ$ với $130^\circ$. Hai góc bù nhau có $\cos$ đối nhau.`,
    R`**Bước 1.** $\cos170^\circ=\cos(180^\circ-10^\circ)=-\cos10^\circ$; $\cos130^\circ=-\cos50^\circ$.`,
    R`**Bước 2.** $B=\cos10^\circ+\cos50^\circ-\cos50^\circ-\cos10^\circ=0$.`,
    R`**Kết luận.** $B=0$.`
   ] },
 { muc: "TH", de: R`Chứng minh $(\sin\alpha+\cos\alpha)^2+(\sin\alpha-\cos\alpha)^2=2$.`,
   giai: [
    R`**Phân tích.** Khai triển hai bình phương rồi dùng $\sin^2\alpha+\cos^2\alpha=1$; các số hạng $2\sin\alpha\cos\alpha$ trái dấu sẽ triệt tiêu.`,
    R`**Bước 1.** Khai triển: $(\sin\alpha+\cos\alpha)^2=\sin^2\alpha+2\sin\alpha\cos\alpha+\cos^2\alpha=1+2\sin\alpha\cos\alpha$.`,
    R`**Bước 2.** Tương tự $(\sin\alpha-\cos\alpha)^2=1-2\sin\alpha\cos\alpha$.`,
    R`**Bước 3.** Cộng lại được $2$ (điều phải chứng minh).`
   ] }
 ] },
"C3-B6-D15": {
 pp: [
  R`Trong tam giác $ABC$ với $a=BC$, $b=CA$, $c=AB$: $$a^2=b^2+c^2-2bc\cos A$$ (tương tự cho $b^2$, $c^2$).`,
  R`**Hệ quả:** $\cos A=\dfrac{b^2+c^2-a^2}{2bc}$. Dùng khi biết **ba cạnh** để tìm góc.`,
  R`**Dùng khi:** biết hai cạnh và góc xen giữa thì tìm cạnh thứ ba; biết ba cạnh thì tìm góc.`,
  R`**Nhận dạng góc:** $A$ tù khi $b^2+c^2<a^2$; $A$ vuông khi $b^2+c^2=a^2$; $A$ nhọn khi $b^2+c^2>a^2$. Góc lớn nhất đối diện cạnh lớn nhất.`
 ],
 luuY: [
  R`Quên dấu của $\cos A$ khi $A$ tù: $\cos120^\circ=-\dfrac12$ nên $-2bc\cos A$ thành $+bc$.`,
  R`Quên lấy căn bậc hai ở bước cuối (tìm được $a^2$ chứ chưa phải $a$).`
 ],
 vd: [
 { muc: "NB", de: R`Cho tam giác $ABC$ có $b=3$, $c=5$, $\widehat A=120^\circ$. Tính $a$.`,
   giai: [
    R`**Phân tích.** Biết **hai cạnh và góc xen giữa**, tìm cạnh thứ ba: dùng định lí côsin $a^2=b^2+c^2-2bc\cos A$. Chú ý $\cos120^\circ$ âm.`,
    R`**Bước 1.** $a^2=b^2+c^2-2bc\cos A=9+25-2\cdot3\cdot5\cdot\left(-\dfrac12\right)=34+15=49$.`,
    R`**Bước 2.** $a=7$.`,
    R`**Kết luận.** $a=7$.`,
    R`**Nhận xét.** Góc $A$ tù nên $a$ phải lớn hơn $b$ và $c$: $7>5>3$, hợp lí.`
   ],
   hinh: TGC },
 { muc: "TH", de: R`Cho tam giác $ABC$ có $a=7$, $b=5$, $c=8$. Tính góc $A$.`,
   giai: [
    R`**Phân tích.** Biết **ba cạnh**, tìm góc: dùng hệ quả định lí côsin $\cos A=\dfrac{b^2+c^2-a^2}{2bc}$.`,
    R`**Bước 1.** $\cos A=\dfrac{b^2+c^2-a^2}{2bc}=\dfrac{25+64-49}{2\cdot5\cdot8}=\dfrac{40}{80}=\dfrac12$.`,
    R`**Bước 2.** Vậy $\widehat A=60^\circ$.`,
    R`**Kết luận.** $\widehat A=60^\circ$.`
   ] },
 { muc: "TH", de: R`Tam giác có ba cạnh $4$, $5$, $7$ là tam giác nhọn, vuông hay tù? Tính góc lớn nhất.`,
   giai: [
    R`**Phân tích.** Góc lớn nhất đối diện cạnh lớn nhất. Dấu của $\cos$ góc đó (tức dấu của $b^2+c^2-a^2$) cho biết góc nhọn, vuông hay tù.`,
    R`**Bước 1.** Góc lớn nhất đối diện cạnh $7$. So sánh: $4^2+5^2=41<49=7^2$ nên góc đó tù: tam giác **tù**.`,
    R`**Bước 2.** $\cos\alpha=\dfrac{16+25-49}{2\cdot4\cdot5}=\dfrac{-8}{40}=-\dfrac15$, suy ra $\alpha\approx101{,}54^\circ$.`,
    R`**Kết luận.** Tam giác tù, góc lớn nhất khoảng $101{,}54^\circ$.`
   ] },
 { muc: "VD", de: R`Hai tàu cùng rời cảng, đi theo hai hướng hợp với nhau góc $60^\circ$, vận tốc $30$ km/h và $40$ km/h. Sau $2$ giờ, hai tàu cách nhau bao xa?`,
   giai: [
    R`**Phân tích.** Quãng đường mỗi tàu đi được là hai cạnh, góc giữa hai hướng là góc xen giữa; khoảng cách hai tàu là cạnh thứ ba. Dùng định lí côsin.`,
    R`**Bước 1.** Sau $2$ giờ: tàu thứ nhất đi $60$ km, tàu thứ hai đi $80$ km. Hai quãng đường và khoảng cách $d$ tạo thành tam giác có góc xen giữa $60^\circ$.`,
    R`**Bước 2.** $d^2=60^2+80^2-2\cdot60\cdot80\cdot\cos60^\circ=3600+6400-4800=5200$.`,
    R`**Bước 3.** $d=\sqrt{5200}=20\sqrt{13}\approx72{,}11$ km.`,
    R`**Kết luận.** Sau $2$ giờ hai tàu cách nhau khoảng $72{,}11$ km.`
   ] }
 ] },
"C3-B6-D16": {
 pp: [
  R`**Định lí sin:** $$\dfrac a{\sin A}=\dfrac b{\sin B}=\dfrac c{\sin C}=2R$$ với $R$ là bán kính đường tròn ngoại tiếp.`,
  R`**Dùng khi:** biết hai góc và một cạnh (tìm các cạnh còn lại); biết một cạnh và góc đối diện (tìm $R$).`,
  R`Nhớ tính góc thứ ba bằng $\widehat A+\widehat B+\widehat C=180^\circ$.`,
  R`Suy ra: $a=2R\sin A$; $R=\dfrac a{2\sin A}$.`
 ],
 luuY: [
  R`Quên số $2$: $\dfrac a{\sin A}=2R$ chứ không phải $R$.`,
  R`Biết hai cạnh và góc **không** xen giữa, tìm góc bằng định lí sin có thể có hai đáp án (góc nhọn và góc tù bù nhau); phải kiểm tra tổng ba góc.`
 ],
 vd: [
 { muc: "NB", de: R`Cho tam giác $ABC$ có $a=6$, $\widehat A=30^\circ$. Tính bán kính $R$ của đường tròn ngoại tiếp.`,
   giai: [
    R`**Phân tích.** Biết một cạnh và **góc đối diện** với nó: dùng định lí sin $\dfrac a{\sin A}=2R$.`,
    R`**Bước 1.** Từ định lí sin: $R=\dfrac a{2\sin A}$.`,
    R`**Bước 2.** $\sin30^\circ=\dfrac12$, nên $R=\dfrac6{2\cdot\frac12}=\dfrac61=6$.`,
    R`**Kết luận.** $R=6$.`,
    R`**Nhận xét.** Góc $A=30^\circ$ thì $a=R$: cạnh đối diện góc $30^\circ$ bằng bán kính đường tròn ngoại tiếp.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$ có $\widehat A=60^\circ$, $\widehat B=45^\circ$, $b=4$. Tính $a$ và $c$.`,
   giai: [
    R`**Phân tích.** Biết **hai góc và một cạnh**: dùng định lí sin $\dfrac a{\sin A}=\dfrac b{\sin B}=\dfrac c{\sin C}$. Góc $C$ tính từ tổng ba góc bằng $180^\circ$.`,
    R`**Bước 1.** $a=\dfrac{b\sin A}{\sin B}=\dfrac{4\cdot\frac{\sqrt3}2}{\frac{\sqrt2}2}=\dfrac{4\sqrt3}{\sqrt2}=2\sqrt6\approx4{,}90$.`,
    R`**Bước 2.** $\widehat C=180^\circ-60^\circ-45^\circ=75^\circ$, với $\sin75^\circ=\dfrac{\sqrt6+\sqrt2}4$.`,
    R`**Bước 3.** $c=\dfrac{b\sin C}{\sin B}=\dfrac{4\cdot\frac{\sqrt6+\sqrt2}4}{\frac{\sqrt2}2}=\dfrac{2(\sqrt6+\sqrt2)}{\sqrt2}=2\sqrt3+2\approx5{,}46$.`,
    R`**Kết luận.** $a=2\sqrt6\approx4{,}90$; $c=2\sqrt3+2\approx5{,}46$.`,
    R`**Nhận xét.** Góc lớn hơn đối diện cạnh lớn hơn: $\widehat C>\widehat A>\widehat B$ và $c>a>b$ ✓.`
   ] },
 { muc: "TH", de: R`Tính bán kính đường tròn ngoại tiếp tam giác đều cạnh $a$.`,
   giai: [
    R`**Phân tích.** Tam giác đều có mọi góc bằng $60^\circ$; áp dụng định lí sin với một cạnh $a$ và góc đối diện $60^\circ$.`,
    R`**Bước 1.** $R=\dfrac a{2\sin60^\circ}=\dfrac a{2\cdot\frac{\sqrt3}2}=\dfrac a{\sqrt3}$.`,
    R`**Bước 2.** Trục căn ở mẫu: $\dfrac a{\sqrt3}=\dfrac{a\sqrt3}3$.`,
    R`**Kết luận.** $R=\dfrac{a\sqrt3}3$.`,
    R`**Thử lại.** Tâm đường tròn ngoại tiếp là trọng tâm, cách đỉnh $\dfrac23$ đường cao: $\dfrac23\cdot\dfrac{a\sqrt3}2=\dfrac{a\sqrt3}3$ ✓.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $a=7$, $b=5$, $c=8$. Tính $R$.`,
   giai: [
    R`**Phân tích.** Định lí sin cần một góc. Biết ba cạnh thì tìm một góc bằng định lí côsin trước, rồi mới dùng $R=\dfrac a{2\sin A}$.`,
    R`**Bước 1.** Tính góc $A$ bằng định lí côsin: $\cos A=\dfrac{25+64-49}{80}=\dfrac12$ nên $\widehat A=60^\circ$.`,
    R`**Bước 2.** $R=\dfrac a{2\sin A}=\dfrac7{2\cdot\frac{\sqrt3}2}=\dfrac7{\sqrt3}=\dfrac{7\sqrt3}3\approx4{,}04$.`,
    R`**Kết luận.** $R=\dfrac{7\sqrt3}3\approx4{,}04$.`
   ] }
 ] },
"C3-B6-D17": {
 pp: [
  R`**Diện tích:** $S=\dfrac12ab\sin C=\dfrac12bc\sin A=\dfrac12ca\sin B$; $S=\dfrac{abc}{4R}$; $S=pr$ với $p=\dfrac{a+b+c}2$.`,
  R`**Công thức Heron:** $S=\sqrt{p(p-a)(p-b)(p-c)}$ (khi biết ba cạnh).`,
  R`**Từ $S$ suy ra:** đường cao $h_a=\dfrac{2S}a$; $R=\dfrac{abc}{4S}$; $r=\dfrac Sp$.`,
  R`**Trung tuyến:** $m_a^2=\dfrac{2b^2+2c^2-a^2}4$ (tương tự $m_b$, $m_c$).`
 ],
 luuY: [
  R`Dùng $S=\dfrac12ab\sin C$ nhưng $C$ không phải góc xen giữa hai cạnh $a$, $b$.`,
  R`Nhầm $p$ là chu vi: $p$ là **nửa** chu vi.`
 ],
 vd: [
 { muc: "NB", de: R`Tính diện tích tam giác $ABC$ có $b=6$, $c=8$, $\widehat A=30^\circ$.`,
   giai: [
    R`**Phân tích.** Biết hai cạnh và góc xen giữa: dùng $S=\dfrac12bc\sin A$.`,
    R`**Bước 1.** Thay số: $S=\dfrac12\cdot6\cdot8\cdot\sin30^\circ$.`,
    R`**Bước 2.** $\sin30^\circ=\dfrac12$, nên $S=\dfrac12\cdot48\cdot\dfrac12=12$.`,
    R`**Kết luận.** Diện tích tam giác bằng $12$.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$ có $a=13$, $b=14$, $c=15$. Tính $S$, $R$, $r$ và đường cao $h_a$.`,
   giai: [
    R`**Phân tích.** Biết ba cạnh: tính $S$ bằng **Heron** với nửa chu vi $p$. Sau đó các đại lượng khác đều suy từ $S$: $R=\dfrac{abc}{4S}$, $r=\dfrac Sp$, $h_a=\dfrac{2S}a$.`,
    R`**Bước 1.** $p=\dfrac{13+14+15}2=21$. Heron: $S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84$.`,
    R`**Bước 2.** $R=\dfrac{abc}{4S}=\dfrac{13\cdot14\cdot15}{4\cdot84}=\dfrac{2730}{336}=\dfrac{65}8$.`,
    R`**Bước 3.** $r=\dfrac Sp=\dfrac{84}{21}=4$.`,
    R`**Bước 4.** $h_a=\dfrac{2S}a=\dfrac{168}{13}\approx12{,}92$.`,
    R`**Kết luận.** $S=84$, $R=\dfrac{65}8$, $r=4$, $h_a=\dfrac{168}{13}\approx12{,}92$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $a=13$, $b=14$, $c=15$. Tính độ dài trung tuyến $m_b$ kẻ từ $B$.`,
   giai: [
    R`**Phân tích.** Dùng công thức đường trung tuyến $m_b^2=\dfrac{2a^2+2c^2-b^2}4$; chú ý cạnh **bị trừ** là cạnh mà trung tuyến đi tới trung điểm của nó ($b$).`,
    R`**Bước 1.** $m_b^2=\dfrac{2a^2+2c^2-b^2}4=\dfrac{2\cdot169+2\cdot225-196}4=\dfrac{592}4=148$.`,
    R`**Bước 2.** $m_b=\sqrt{148}=2\sqrt{37}\approx12{,}17$.`,
    R`**Kết luận.** $m_b=2\sqrt{37}\approx12{,}17$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $a=7$, $b=5$, $c=8$. Tính diện tích và bán kính đường tròn nội tiếp.`,
   giai: [
    R`**Phân tích.** Có thể dùng Heron ngay, hoặc tìm góc $A$ (ra góc đặc biệt $60^\circ$) rồi dùng $S=\dfrac12bc\sin A$. Sau đó $r=\dfrac Sp$.`,
    R`**Bước 1.** Theo định lí côsin, $\cos A=\dfrac{25+64-49}{80}=\dfrac12$ nên $\widehat A=60^\circ$.`,
    R`**Bước 2.** $S=\dfrac12bc\sin A=\dfrac12\cdot5\cdot8\cdot\dfrac{\sqrt3}2=10\sqrt3$.`,
    R`**Bước 3.** $p=\dfrac{7+5+8}2=10$; $r=\dfrac Sp=\sqrt3$.`,
    R`**Bước 4.** (Kiểm tra bằng Heron: $\sqrt{10\cdot3\cdot5\cdot2}=\sqrt{300}=10\sqrt3$, khớp.)`,
    R`**Kết luận.** $S=10\sqrt3$, $r=\sqrt3$.`
   ] }
 ] },
"C3-B6-D18": {
 pp: [
  R`**Giải tam giác** là tìm đủ ba cạnh và ba góc khi biết một số yếu tố.`,
  R`Biết **hai cạnh, góc xen giữa**: định lí côsin tìm cạnh thứ ba, rồi hệ quả côsin tìm góc.`,
  R`Biết **ba cạnh**: hệ quả côsin tìm hai góc, góc còn lại bằng $180^\circ$ trừ đi.`,
  R`Biết **một cạnh, hai góc**: tính góc thứ ba, rồi định lí sin tìm hai cạnh.`,
  R`**Bài đo đạc:** vẽ hình, đánh dấu điểm đo, góc nâng (góc giữa tia ngắm và phương nằm ngang), chọn tam giác đã biết đủ yếu tố để giải trước.`
 ],
 luuY: [
  R`Góc nâng đo từ phương **nằm ngang**, không phải từ phương thẳng đứng.`,
  R`Làm tròn quá sớm ở bước giữa làm kết quả cuối sai lệch; nên giữ giá trị chính xác đến cuối.`
 ],
 vd: [
 { muc: "TH", de: R`Giải tam giác $ABC$ biết $b=3$, $c=5$, $\widehat A=120^\circ$.`,
   giai: [
    R`**Phân tích.** Giải tam giác là tìm đủ ba cạnh, ba góc. Biết hai cạnh và góc xen giữa: định lí côsin cho cạnh $a$, rồi hệ quả định lí côsin cho góc $B$, cuối cùng $C=180^\circ-A-B$.`,
    R`**Bước 1.** $a^2=9+25-2\cdot3\cdot5\cdot\left(-\dfrac12\right)=49$ nên $a=7$.`,
    R`**Bước 2.** $\cos B=\dfrac{a^2+c^2-b^2}{2ac}=\dfrac{49+25-9}{70}=\dfrac{13}{14}$, suy ra $\widehat B\approx21{,}79^\circ$.`,
    R`**Bước 3.** $\widehat C=180^\circ-120^\circ-21{,}79^\circ\approx38{,}21^\circ$.`,
    R`**Kết luận.** $a=7$, $\widehat B\approx21{,}79^\circ$, $\widehat C\approx38{,}21^\circ$.`,
    R`**Thử lại.** Định lí sin: $\dfrac{\sin120^\circ}7\approx0{,}1237$ và $\dfrac{\sin21{,}79^\circ}3\approx0{,}1237$ ✓.`
   ] },
 { muc: "VD", de: R`Để đo chiều cao một tháp, người ta đứng tại hai điểm $A$, $B$ cách nhau $20$ m, thẳng hàng với chân tháp $H$ ($B$ ở giữa $A$ và $H$). Góc nâng tới đỉnh tháp $T$ từ $A$ là $30^\circ$, từ $B$ là $45^\circ$. Tính chiều cao tháp.`,
   giai: [
    R`**Phân tích.** Không đo được trực tiếp $AH$. Xét tam giác $ABT$: biết cạnh $AB$ và hai góc, dùng **định lí sin** tìm $BT$; rồi dùng tam giác vuông $BHT$ để ra chiều cao.`,
    R`**Bước 1.** Trong tam giác $ABT$: $\widehat{TAB}=30^\circ$; $\widehat{ABT}=180^\circ-45^\circ=135^\circ$; suy ra $\widehat{ATB}=15^\circ$.`,
    R`**Bước 2.** Định lí sin: $BT=\dfrac{AB\sin30^\circ}{\sin15^\circ}=\dfrac{20\cdot0{,}5}{\sin15^\circ}\approx38{,}64$ m.`,
    R`**Bước 3.** Tam giác $BHT$ vuông tại $H$: $TH=BT\sin45^\circ\approx27{,}32$ m.`,
    R`**Bước 4.** (Cách khác: $TH=h$ thì $AH=h\sqrt3$, $BH=h$; $h\sqrt3-h=20$ nên $h=\dfrac{20}{\sqrt3-1}=10(\sqrt3+1)\approx27{,}32$ m.)`,
    R`**Kết luận.** Tháp cao khoảng $27{,}32$ m.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.12]
\draw[thick] (0,0)--(47.32,0);
\draw[ultra thick] (47.32,0)--(47.32,27.32);
\draw (0,0)--(47.32,27.32); \draw (20,0)--(47.32,27.32);
\fill (0,0) circle (0.6); \fill (20,0) circle (0.6);
\node[below] at (0,0){$A$}; \node[below] at (20,0){$B$}; \node[below] at (47.32,0){$H$}; \node[above] at (47.32,27.32){$T$};
\node at (7,1.6){$30^\circ$}; \node at (24.5,1.8){$45^\circ$}; \node[below] at (10,0){$20$ m};
\end{tikzpicture}` },
 { muc: "VD", de: R`Để đo khoảng cách giữa hai điểm $A$, $B$ ở hai bên một cái hồ, người ta chọn điểm $C$ đo được $CA=200$ m, $CB=300$ m, $\widehat{ACB}=60^\circ$. Tính $AB$.`,
   giai: [
    R`**Phân tích.** Không đi qua hồ được, nhưng biết hai cạnh $CA$, $CB$ và góc xen giữa: dùng định lí côsin.`,
    R`**Bước 1.** $AB^2=200^2+300^2-2\cdot200\cdot300\cdot\cos60^\circ=40000+90000-60000=70000$.`,
    R`**Bước 2.** $AB=100\sqrt7\approx264{,}58$ m.`,
    R`**Kết luận.** $AB=100\sqrt7\approx264{,}58$ m.`
   ] },
 { muc: "VD", de: R`Từ hai điểm $A$, $B$ trên một bờ sông cách nhau $100$ m, người ta ngắm cây $C$ ở bờ bên kia, đo được $\widehat{CAB}=60^\circ$, $\widehat{CBA}=75^\circ$. Tính $AC$ và khoảng cách từ $C$ đến bờ $AB$.`,
   giai: [
    R`**Phân tích.** Tam giác $ABC$ biết một cạnh và hai góc kề: tìm góc $C$, dùng định lí sin tìm $AC$; khoảng cách từ $C$ đến bờ là đường cao, tính trong tam giác vuông có góc $60^\circ$.`,
    R`**Bước 1.** $\widehat{ACB}=180^\circ-60^\circ-75^\circ=45^\circ$.`,
    R`**Bước 2.** Định lí sin: $AC=\dfrac{AB\sin B}{\sin C}=\dfrac{100\cdot\frac{\sqrt6+\sqrt2}4}{\frac{\sqrt2}2}=50(\sqrt3+1)\approx136{,}60$ m.`,
    R`**Bước 3.** Khoảng cách từ $C$ đến $AB$: $d=AC\sin60^\circ=50(\sqrt3+1)\cdot\dfrac{\sqrt3}2=25(3+\sqrt3)\approx118{,}30$ m.`,
    R`**Kết luận.** $AC\approx136{,}60$ m; khoảng cách từ $C$ đến bờ khoảng $118{,}30$ m.`
   ] }
 ] }
});
/* ---------- Chương IV · Vectơ ---------- */
Object.assign(D, {
"C4-B7-D19": {
 pp: [
  R`**Vectơ** $\overrightarrow{AB}$ là đoạn thẳng có hướng, điểm đầu $A$, điểm cuối $B$. Độ dài $|\overrightarrow{AB}|=AB$.`,
  R`**Giá** của vectơ là đường thẳng chứa nó. Hai vectơ **cùng phương** khi giá song song hoặc trùng nhau; cùng phương thì hoặc cùng hướng, hoặc ngược hướng.`,
  R`**Hai vectơ bằng nhau** khi cùng hướng **và** cùng độ dài. Hai vectơ **đối nhau** khi ngược hướng và cùng độ dài.`,
  R`**Vectơ-không** $\vec0=\overrightarrow{AA}$: độ dài $0$, cùng phương, cùng hướng với mọi vectơ.`,
  R`Với hình bình hành $ABCD$: $\overrightarrow{AB}=\overrightarrow{DC}$, $\overrightarrow{AD}=\overrightarrow{BC}$.`
 ],
 luuY: [
  R`Cùng độ dài chưa đủ để bằng nhau: $\overrightarrow{AB}$ và $\overrightarrow{AC}$ trong tam giác đều có cùng độ dài nhưng khác hướng.`,
  R`Viết $\overrightarrow{AB}=\overrightarrow{CD}$ cho hình bình hành $ABCD$ là sai (hai vectơ đó ngược hướng); phải là $\overrightarrow{AB}=\overrightarrow{DC}$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho ba điểm phân biệt $A$, $B$, $C$. Có bao nhiêu vectơ khác $\vec0$ có điểm đầu và điểm cuối là hai trong ba điểm đó?`,
   giai: [
    R`**Phân tích.** Vectơ có **phân biệt điểm đầu và điểm cuối**: $\overrightarrow{AB}$ khác $\overrightarrow{BA}$. Vì vậy đếm các cặp có thứ tự của hai điểm khác nhau.`,
    R`**Bước 1.** Mỗi vectơ ứng với một cặp có thứ tự (điểm đầu, điểm cuối) gồm hai điểm khác nhau.`,
    R`**Bước 2.** Có $3$ cách chọn điểm đầu, $2$ cách chọn điểm cuối: $3\cdot2=6$ vectơ ($\overrightarrow{AB},\overrightarrow{BA},\overrightarrow{AC},\overrightarrow{CA},\overrightarrow{BC},\overrightarrow{CB}$).`,
    R`**Kết luận.** Có $6$ vectơ khác $\vec0$.`
   ] },
 { muc: "NB", de: R`Cho hình bình hành $ABCD$. Tìm vectơ bằng $\overrightarrow{AB}$ và vectơ bằng $\overrightarrow{AD}$ (có điểm đầu, điểm cuối là đỉnh của hình bình hành).`,
   giai: [
    R`**Phân tích.** Hai vectơ bằng nhau khi cùng hướng, cùng độ dài. Trong hình bình hành, các cạnh đối **song song và bằng nhau**; chỉ cần chọn đúng thứ tự điểm để cùng hướng.`,
    R`**Bước 1.** $AB\parallel DC$, $AB=DC$, cùng hướng: $\overrightarrow{AB}=\overrightarrow{DC}$.`,
    R`**Bước 2.** Tương tự $\overrightarrow{AD}=\overrightarrow{BC}$.`,
    R`**Kết luận.** $\overrightarrow{AB}=\overrightarrow{DC}$ và $\overrightarrow{AD}=\overrightarrow{BC}$.`,
    R`**Nhận xét.** Viết $\overrightarrow{AB}=\overrightarrow{CD}$ là sai: hai vectơ này cùng độ dài nhưng **ngược hướng**.`
   ] },
 { muc: "TH", de: R`Cho lục giác đều $ABCDEF$ tâm $O$. Tìm các vectơ bằng $\overrightarrow{OA}$ (khác $\overrightarrow{OA}$, có điểm đầu và cuối là $O$ hoặc các đỉnh).`,
   giai: [
    R`**Phân tích.** Tìm các đoạn thẳng song song với $OA$, dài bằng $OA$ (bằng cạnh lục giác), rồi chọn chiều sao cho **cùng hướng** với $\overrightarrow{OA}$.`,
    R`**Bước 1.** Lục giác đều chia thành $6$ tam giác đều chung đỉnh $O$; các tứ giác $OABC$, $OAFE$... là hình thoi.`,
    R`**Bước 2.** Các vectơ cùng hướng với $\overrightarrow{OA}$, độ dài bằng cạnh lục giác: $\overrightarrow{CB}$, $\overrightarrow{DO}$, $\overrightarrow{EF}$.`,
    R`**Bước 3.** Vậy có $3$ vectơ: $\overrightarrow{CB}=\overrightarrow{DO}=\overrightarrow{EF}=\overrightarrow{OA}$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1.3,>=stealth]
\draw[thick] (1,0)--(0.5,0.866)--(-0.5,0.866)--(-1,0)--(-0.5,-0.866)--(0.5,-0.866)--cycle;
\draw[->,thick,red] (0,0)--(1,0); \draw[->,thick,blue] (-0.5,0.866)--(0.5,0.866);
\draw[->,thick,blue] (-1,0)--(0,0); \draw[->,thick,blue] (-0.5,-0.866)--(0.5,-0.866);
\node[right] at (1,0){$A$}; \node[above right] at (0.5,0.866){$B$}; \node[above left] at (-0.5,0.866){$C$};
\node[left] at (-1,0){$D$}; \node[below left] at (-0.5,-0.866){$E$}; \node[below right] at (0.5,-0.866){$F$};
\node[below] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Bốn vectơ cùng hướng, cùng độ dài: $\overrightarrow{OA}$ (đỏ) và $\overrightarrow{CB},\overrightarrow{DO},\overrightarrow{EF}$ (xanh).` },
 { muc: "TH", de: R`Cho tam giác đều $ABC$ cạnh $a$. Hai vectơ $\overrightarrow{AB}$ và $\overrightarrow{AC}$ có bằng nhau không? Tính $|\overrightarrow{AB}|$.`,
   giai: [
    R`**Phân tích.** Hai vectơ bằng nhau khi **cùng hướng và cùng độ dài**. Cùng độ dài chưa đủ; phải kiểm tra thêm hướng.`,
    R`**Bước 1.** Độ dài: $|\overrightarrow{AB}|=AB=a$, $|\overrightarrow{AC}|=AC=a$, bằng nhau.`,
    R`**Bước 2.** Hướng: giá của $\overrightarrow{AB}$ là đường $AB$, của $\overrightarrow{AC}$ là đường $AC$; hai đường cắt nhau tại $A$ theo góc $60^\circ$, nên hai vectơ **không cùng phương**, càng không cùng hướng.`,
    R`**Kết luận.** $\overrightarrow{AB}\ne\overrightarrow{AC}$, dù $|\overrightarrow{AB}|=|\overrightarrow{AC}|=a$.`
   ] }
 ] },
"C4-B8-D20": {
 pp: [
  R`**Quy tắc ba điểm:** $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ với mọi $A$, $B$, $C$ (điểm cuối vectơ trước là điểm đầu vectơ sau).`,
  R`**Quy tắc hình bình hành:** $ABCD$ là hình bình hành thì $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`,
  R`**Quy tắc hiệu:** $\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}$ (cùng điểm đầu thì hiệu là vectơ từ điểm cuối vectơ trừ đến điểm cuối vectơ bị trừ).`,
  R`**Chứng minh đẳng thức:** biến đổi một vế (chèn điểm bằng quy tắc ba điểm) hoặc chuyển vế đưa về đẳng thức hiển nhiên.`
 ],
 luuY: [
  R`$\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$, không phải $\overrightarrow{BC}$.`,
  R`Cộng độ dài thay cho cộng vectơ: $|\vec a+\vec b|$ nói chung khác $|\vec a|+|\vec b|$.`
 ],
 vd: [
 { muc: "NB", de: R`Rút gọn $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}$.`,
   giai: [
    R`**Phân tích.** Các vectơ nối đuôi nhau (điểm cuối vectơ trước là điểm đầu vectơ sau): dùng **quy tắc ba điểm** $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ nhiều lần.`,
    R`**Bước 1.** $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$; $\overrightarrow{AC}+\overrightarrow{CD}=\overrightarrow{AD}$.`,
    R`**Bước 2.** Kết quả: $\overrightarrow{AD}$.`,
    R`**Kết luận.** $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}=\overrightarrow{AD}$.`
   ] },
 { muc: "TH", de: R`Cho hình bình hành $ABCD$. Tính $\overrightarrow{AB}+\overrightarrow{AD}$ và $\overrightarrow{AB}-\overrightarrow{AD}$.`,
   giai: [
    R`**Phân tích.** Hai vectơ chung điểm đầu $A$: tổng dùng **quy tắc hình bình hành**, hiệu dùng **quy tắc hiệu** $\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}$.`,
    R`**Bước 1.** Quy tắc hình bình hành: $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`,
    R`**Bước 2.** Quy tắc hiệu: $\overrightarrow{AB}-\overrightarrow{AD}=\overrightarrow{DB}$.`,
    R`**Kết luận.** $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$; $\overrightarrow{AB}-\overrightarrow{AD}=\overrightarrow{DB}$.`,
    R`**Nhận xét.** Hiệu $\overrightarrow{AB}-\overrightarrow{AD}$ có hướng **từ $D$ đến $B$** (từ vectơ trừ đến vectơ bị trừ), không phải $\overrightarrow{BD}$.`
   ] },
 { muc: "TH", de: R`Chứng minh với bốn điểm bất kì $A$, $B$, $C$, $D$: $\overrightarrow{AB}+\overrightarrow{CD}=\overrightarrow{AD}+\overrightarrow{CB}$.`,
   giai: [
    R`**Phân tích.** Biến đổi vế trái thành vế phải bằng cách **chèn điểm** (quy tắc ba điểm): vế phải có $\overrightarrow{AD}$ nên chèn $D$ vào $\overrightarrow{AB}$.`,
    R`**Bước 1.** Chèn điểm $D$ vào $\overrightarrow{AB}$: $\overrightarrow{AB}=\overrightarrow{AD}+\overrightarrow{DB}$.`,
    R`**Bước 2.** Vế trái $=\overrightarrow{AD}+\overrightarrow{DB}+\overrightarrow{CD}=\overrightarrow{AD}+(\overrightarrow{CD}+\overrightarrow{DB})=\overrightarrow{AD}+\overrightarrow{CB}$ = vế phải.`,
    R`**Kết luận.** $\overrightarrow{AB}+\overrightarrow{CD}=\overrightarrow{AD}+\overrightarrow{CB}$ (điều phải chứng minh).`
   ] },
 { muc: "VD", de: R`Cho bốn điểm $M$, $N$, $A$, $B$. Rút gọn $\vec u=(\overrightarrow{MA}-\overrightarrow{MB})-(\overrightarrow{NA}-\overrightarrow{NB})$.`,
   giai: [
    R`**Phân tích.** Mỗi ngoặc là hiệu hai vectơ chung điểm đầu, dùng quy tắc hiệu: kết quả không phụ thuộc điểm đầu $M$ hay $N$.`,
    R`**Bước 1.** Quy tắc hiệu: $\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{BA}$ và $\overrightarrow{NA}-\overrightarrow{NB}=\overrightarrow{BA}$.`,
    R`**Bước 2.** $\vec u=\overrightarrow{BA}-\overrightarrow{BA}=\vec0$.`,
    R`**Kết luận.** $\vec u=\vec0$.`
   ] }
 ] },
"C4-B8-D21": {
 pp: [
  R`**Bước 1.** Dùng quy tắc ba điểm, hình bình hành, hiệu để đưa tổng (hiệu) về **một** vectơ.`,
  R`**Bước 2.** Tính độ dài vectơ đó bằng hình học: định lí Pi-ta-go, đường cao tam giác đều $\dfrac{a\sqrt3}2$, đường chéo hình vuông $a\sqrt2$...`,
  R`**Hợp lực:** $\vec F=\vec F_1+\vec F_2$ là đường chéo hình bình hành dựng trên $\vec F_1$, $\vec F_2$. Nếu hai lực vuông góc: $F=\sqrt{F_1^2+F_2^2}$.`,
  R`Với tam giác $ABC$, $M$ trung điểm $BC$: $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$.`
 ],
 luuY: [
  R`Viết $|\overrightarrow{AB}+\overrightarrow{AC}|=AB+AC$: sai.`
 ],
 vd: [
 { muc: "TH", de: R`Cho tam giác đều $ABC$ cạnh $a$. Tính $|\overrightarrow{AB}+\overrightarrow{AC}|$ và $|\overrightarrow{AB}-\overrightarrow{AC}|$.`,
   giai: [
    R`**Phân tích.** Độ dài của tổng **không** bằng tổng độ dài. Đưa tổng về một vectơ: $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$ ($M$ trung điểm $BC$), hiệu về $\overrightarrow{CB}$; rồi tính độ dài đoạn thẳng.`,
    R`**Bước 1.** Gọi $M$ là trung điểm $BC$: $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$, với $AM=\dfrac{a\sqrt3}2$.`,
    R`**Bước 2.** $|\overrightarrow{AB}+\overrightarrow{AC}|=2\cdot\dfrac{a\sqrt3}2=a\sqrt3$.`,
    R`**Bước 3.** $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$ nên $|\overrightarrow{AB}-\overrightarrow{AC}|=a$.`,
    R`**Kết luận.** $|\overrightarrow{AB}+\overrightarrow{AC}|=a\sqrt3$; $|\overrightarrow{AB}-\overrightarrow{AC}|=a$.`
   ] },
 { muc: "TH", de: R`Cho hình vuông $ABCD$ cạnh $a$. Tính $|\overrightarrow{AB}+\overrightarrow{AD}|$ và $|\overrightarrow{AB}+\overrightarrow{AC}|$.`,
   giai: [
    R`**Phân tích.** Tổng thứ nhất là đường chéo theo quy tắc hình bình hành. Tổng thứ hai không có sẵn hình: dùng toạ độ, hoặc đưa về $2\overrightarrow{AN}$ với $N$ là trung điểm $BC$.`,
    R`**Bước 1.** $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$, nên độ dài là $AC=a\sqrt2$.`,
    R`**Bước 2.** Đặt $A(0;0)$, $B(a;0)$, $C(a;a)$: $\overrightarrow{AB}+\overrightarrow{AC}=(2a;a)$, độ dài $\sqrt{4a^2+a^2}=a\sqrt5$.`,
    R`**Bước 3.** (Cách hình học: gọi $N$ trung điểm $BC$ thì tổng bằng $2\overrightarrow{AN}$, $AN=\sqrt{a^2+\frac{a^2}4}=\frac{a\sqrt5}2$.)`,
    R`**Kết luận.** $|\overrightarrow{AB}+\overrightarrow{AD}|=a\sqrt2$; $|\overrightarrow{AB}+\overrightarrow{AC}|=a\sqrt5$.`
   ] },
 { muc: "VD", de: R`Hai lực $\vec F_1$, $\vec F_2$ cùng tác động vào một vật, có độ lớn $3$ N và $4$ N, hướng vuông góc với nhau. Tính độ lớn hợp lực.`,
   giai: [
    R`**Phân tích.** Hợp lực là tổng hai vectơ lực, bằng đường chéo hình bình hành dựng trên hai lực. Hai lực vuông góc nên hình bình hành là hình chữ nhật, dùng Pythagore.`,
    R`**Bước 1.** Hợp lực là đường chéo của hình chữ nhật dựng trên hai lực.`,
    R`**Bước 2.** $F=\sqrt{3^2+4^2}=5$ N.`,
    R`**Kết luận.** Hợp lực có độ lớn $5$ N.`,
    R`**Nhận xét.** $5<3+4$: độ lớn hợp lực chỉ bằng tổng hai độ lớn khi hai lực cùng hướng.`
   ] },
 { muc: "VD", de: R`Hai lực $\vec F_1$, $\vec F_2$ cùng độ lớn $10$ N, hợp với nhau góc $60^\circ$. Tính độ lớn hợp lực.`,
   giai: [
    R`**Phân tích.** Hai lực cùng độ lớn nên hình bình hành là **hình thoi**: đường chéo vừa là phân giác vừa vuông góc với đường chéo kia, tính được qua $\cos30^\circ$.`,
    R`**Bước 1.** Dựng hình bình hành $OACB$ với $\overrightarrow{OA}=\vec F_1$, $\overrightarrow{OB}=\vec F_2$. Vì $OA=OB$ nên đó là hình thoi, $\vec F=\overrightarrow{OC}$.`,
    R`**Bước 2.** Đường chéo $OC$ là phân giác góc $60^\circ$; tam giác $OAC$ có $OA=AC=10$, $\widehat{AOC}=30^\circ$.`,
    R`**Bước 3.** Gọi $I$ là giao hai đường chéo: $OI=10\cos30^\circ=5\sqrt3$, nên $OC=2OI=10\sqrt3\approx17{,}32$ N.`,
    R`**Kết luận.** Hợp lực có độ lớn $10\sqrt3\approx17{,}32$ N.`,
    R`**Thử lại.** Dùng $|\vec F|^2=F_1^2+F_2^2+2F_1F_2\cos60^\circ=100+100+100=300$, nên $|\vec F|=10\sqrt3$ ✓.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.28,>=stealth]
\draw[->,thick,blue] (0,0)--(10,0); \draw[->,thick,blue] (0,0)--(5,8.66);
\draw[dashed] (10,0)--(15,8.66)--(5,8.66);
\draw[->,very thick,red] (0,0)--(15,8.66);
\node[below] at (5,0){$\vec F_1$}; \node[left] at (2.5,4.6){$\vec F_2$}; \node[above right] at (15,8.66){$\vec F$};
\node[below left] at (0,0){$O$}; \node at (2.6,0.9){$60^\circ$};
\end{tikzpicture}` }
 ] },
"C4-B9-D22": {
 pp: [
  R`$k\vec a$ cùng hướng với $\vec a$ nếu $k>0$, ngược hướng nếu $k<0$; $|k\vec a|=|k|\cdot|\vec a|$.`,
  R`**Trung điểm:** $I$ là trung điểm $AB$ $\iff\overrightarrow{IA}+\overrightarrow{IB}=\vec0\iff\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$ với mọi $M$.`,
  R`**Trọng tâm:** $G$ là trọng tâm tam giác $ABC$ $\iff\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0\iff\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}$.`,
  R`**Xác định điểm $M$ thoả đẳng thức:** chèn điểm để đưa về dạng $\overrightarrow{AM}=\vec v$ với $\vec v$ đã biết, rồi dựng $M$.`
 ],
 luuY: [
  R`Nhầm $\overrightarrow{AG}=\dfrac23\overrightarrow{AM}$ ($M$ trung điểm $BC$) thành $\dfrac13\overrightarrow{AM}$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $I$ là trung điểm của đoạn $AB$. Biểu diễn $\overrightarrow{AI}$ và $\overrightarrow{IA}$ theo $\overrightarrow{AB}$.`,
   giai: [
    R`**Phân tích.** $k\vec a$ cùng hướng $\vec a$ khi $k>0$, ngược hướng khi $k<0$, dài $|k|$ lần. So sánh hướng và độ dài của $\overrightarrow{AI}$ với $\overrightarrow{AB}$.`,
    R`**Bước 1.** $\overrightarrow{AI}$ cùng hướng $\overrightarrow{AB}$, dài bằng một nửa: $\overrightarrow{AI}=\dfrac12\overrightarrow{AB}$.`,
    R`**Bước 2.** $\overrightarrow{IA}=-\overrightarrow{AI}=-\dfrac12\overrightarrow{AB}$.`,
    R`**Kết luận.** $\overrightarrow{AI}=\dfrac12\overrightarrow{AB}$; $\overrightarrow{IA}=-\dfrac12\overrightarrow{AB}$.`
   ] },
 { muc: "TH", de: R`Cho đoạn $AB$. Xác định điểm $M$ thoả $\overrightarrow{MA}+2\overrightarrow{MB}=\vec0$.`,
   giai: [
    R`**Phân tích.** Muốn dựng $M$, đưa đẳng thức về dạng $\overrightarrow{AM}=k\overrightarrow{AB}$ với $A$, $B$ đã biết: **chèn điểm $A$** vào $\overrightarrow{MB}$.`,
    R`**Bước 1.** Chèn $A$: $\overrightarrow{MB}=\overrightarrow{MA}+\overrightarrow{AB}$. Thay vào: $3\overrightarrow{MA}+2\overrightarrow{AB}=\vec0$.`,
    R`**Bước 2.** $\overrightarrow{AM}=\dfrac23\overrightarrow{AB}$: $M$ nằm trên đoạn $AB$, $AM=\dfrac23AB$.`,
    R`**Kết luận.** $M$ thuộc đoạn $AB$ với $AM=\dfrac23AB$.`,
    R`**Thử lại.** Khi đó $MA=\dfrac23AB$, $MB=\dfrac13AB$ và hai vectơ ngược hướng, nên $\overrightarrow{MA}=-2\overrightarrow{MB}$ ✓.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$ có trọng tâm $G$, $M$ là trung điểm $BC$. Biểu diễn $\overrightarrow{AG}$ theo $\overrightarrow{AB}$, $\overrightarrow{AC}$.`,
   giai: [
    R`**Phân tích.** Trọng tâm nằm trên trung tuyến $AM$ với $AG=\dfrac23AM$; trung tuyến lại biểu diễn được bằng tính chất trung điểm.`,
    R`**Bước 1.** $\overrightarrow{AM}=\dfrac12\left(\overrightarrow{AB}+\overrightarrow{AC}\right)$.`,
    R`**Bước 2.** $\overrightarrow{AG}=\dfrac23\overrightarrow{AM}=\dfrac13\overrightarrow{AB}+\dfrac13\overrightarrow{AC}$.`,
    R`**Kết luận.** $\overrightarrow{AG}=\dfrac13\overrightarrow{AB}+\dfrac13\overrightarrow{AC}$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$. Xác định điểm $M$ thoả $\overrightarrow{MA}+\overrightarrow{MB}+2\overrightarrow{MC}=\vec0$.`,
   giai: [
    R`**Phân tích.** Gom $\overrightarrow{MA}+\overrightarrow{MB}$ thành $2\overrightarrow{MI}$ ($I$ trung điểm $AB$), đẳng thức chỉ còn hai vectơ, nhận ra ngay vị trí của $M$.`,
    R`**Bước 1.** Gọi $I$ là trung điểm $AB$: $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$.`,
    R`**Bước 2.** Đẳng thức thành $2\overrightarrow{MI}+2\overrightarrow{MC}=\vec0$, tức $\overrightarrow{MI}+\overrightarrow{MC}=\vec0$.`,
    R`**Bước 3.** Vậy $M$ là trung điểm của đoạn $IC$ (trung điểm trung tuyến kẻ từ $C$).`,
    R`**Kết luận.** $M$ là trung điểm của $IC$, với $I$ là trung điểm $AB$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8]
\draw[thick] (0,0)--(5,0)--(1.6,3.2)--cycle;
\draw[dashed] (1.6,3.2)--(2.5,0);
\fill (2.5,0) circle (2pt); \fill (2.05,1.6) circle (2pt);
\node[below left] at (0,0){$A$}; \node[below right] at (5,0){$B$}; \node[above] at (1.6,3.2){$C$};
\node[below] at (2.5,0){$I$}; \node[right] at (2.1,1.6){$M$};
\end{tikzpicture}` }
 ] },
"C4-B9-D23": {
 pp: [
  R`**Phân tích** $\vec x$ theo hai vectơ không cùng phương $\vec a$, $\vec b$: tìm $m$, $n$ duy nhất sao cho $\vec x=m\vec a+n\vec b$. Thường chọn $\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AC}$ rồi chèn điểm $A$.`,
  R`**Ba điểm thẳng hàng:** $A$, $B$, $C$ thẳng hàng $\iff\overrightarrow{AB}=k\overrightarrow{AC}$ với một số $k$.`,
  R`**Cách làm bài thẳng hàng:** phân tích hai vectơ (cùng điểm đầu) theo cùng một cặp $\vec a$, $\vec b$, rồi chỉ ra chúng tỉ lệ.`
 ],
 luuY: [
  R`Phân tích theo hai vectơ cùng phương: không duy nhất, không dùng được.`
 ],
 vd: [
 { muc: "TH", de: R`Cho tam giác $ABC$, $M$ là trung điểm $BC$. Phân tích $\overrightarrow{AM}$ theo $\overrightarrow{AB}$, $\overrightarrow{AC}$.`,
   giai: [
    R`**Phân tích.** Dùng tính chất trung điểm: với $M$ là trung điểm $BC$ thì $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$.`,
    R`**Bước 1.** $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$ (tính chất trung điểm).`,
    R`**Bước 2.** $\overrightarrow{AM}=\dfrac12\overrightarrow{AB}+\dfrac12\overrightarrow{AC}$.`,
    R`**Kết luận.** $\overrightarrow{AM}=\dfrac12\overrightarrow{AB}+\dfrac12\overrightarrow{AC}$.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$, điểm $N$ trên cạnh $AC$ với $AN=2NC$. Phân tích $\overrightarrow{BN}$ theo $\overrightarrow{AB}$, $\overrightarrow{AC}$.`,
   giai: [
    R`**Phân tích.** Đi từ $B$ đến $N$ qua $A$: $\overrightarrow{BN}=\overrightarrow{BA}+\overrightarrow{AN}$. Mỗi vectơ thành phần đều viết được theo $\overrightarrow{AB}$, $\overrightarrow{AC}$.`,
    R`**Bước 1.** $\overrightarrow{AN}=\dfrac23\overrightarrow{AC}$.`,
    R`**Bước 2.** $\overrightarrow{BN}=\overrightarrow{BA}+\overrightarrow{AN}=-\overrightarrow{AB}+\dfrac23\overrightarrow{AC}$.`,
    R`**Kết luận.** $\overrightarrow{BN}=-\overrightarrow{AB}+\dfrac23\overrightarrow{AC}$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$, $M$ là trung điểm $BC$, $I$ là trung điểm $AM$, $K$ thuộc cạnh $AC$ với $AK=\dfrac13AC$. Chứng minh $B$, $I$, $K$ thẳng hàng.`,
   giai: [
    R`**Phân tích.** Ba điểm $B$, $I$, $K$ thẳng hàng khi $\overrightarrow{BI}=k\overrightarrow{BK}$. Phân tích **cả hai** vectơ theo cùng hai vectơ gốc $\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AC}$ rồi so sánh.`,
    R`**Bước 1.** Đặt $\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AC}$. Ta có $\overrightarrow{AI}=\dfrac12\overrightarrow{AM}=\dfrac14\vec a+\dfrac14\vec b$; $\overrightarrow{AK}=\dfrac13\vec b$.`,
    R`**Bước 2.** $\overrightarrow{BI}=\overrightarrow{AI}-\overrightarrow{AB}=-\dfrac34\vec a+\dfrac14\vec b=\dfrac14(-3\vec a+\vec b)$.`,
    R`**Bước 3.** $\overrightarrow{BK}=\overrightarrow{AK}-\overrightarrow{AB}=-\vec a+\dfrac13\vec b=\dfrac13(-3\vec a+\vec b)$.`,
    R`**Bước 4.** Suy ra $\overrightarrow{BI}=\dfrac34\overrightarrow{BK}$: $B$, $I$, $K$ thẳng hàng.`,
    R`**Kết luận.** $B$, $I$, $K$ thẳng hàng, với $BI=\dfrac34BK$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8]
\draw[thick] (0,3.5)--(-1,0)--(5,0)--cycle;
\draw (0,3.5)--(2,0); \draw[dashed] (-1,0)--(1.667,2.333);
\fill (2,0) circle (2pt); \fill (1,1.75) circle (2pt); \fill (1.667,2.333) circle (2pt);
\node[above] at (0,3.5){$A$}; \node[below left] at (-1,0){$B$}; \node[below right] at (5,0){$C$};
\node[below] at (2,0){$M$}; \node[left] at (0.95,1.85){$I$}; \node[above right] at (1.667,2.333){$K$};
\end{tikzpicture}` }
 ] },
"C4-B10-D24": {
 pp: [
  R`$\vec u=x\vec i+y\vec j\iff\vec u=(x;y)$. Điểm $M(x;y)\iff\overrightarrow{OM}=(x;y)$.`,
  R`$\overrightarrow{AB}=(x_B-x_A;\,y_B-y_A)$ (cuối trừ đầu).`,
  R`Với $\vec u=(x_1;y_1)$, $\vec v=(x_2;y_2)$: $\vec u\pm\vec v=(x_1\pm x_2;y_1\pm y_2)$; $k\vec u=(kx_1;ky_1)$.`,
  R`**Độ dài:** $|\vec u|=\sqrt{x^2+y^2}$; $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$.`
 ],
 luuY: [
  R`Lấy đầu trừ cuối: $\overrightarrow{AB}=(x_A-x_B;\dots)$ là sai dấu.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $A(1;2)$, $B(4;6)$. Tìm toạ độ $\overrightarrow{AB}$ và độ dài $AB$.`,
   giai: [
    R`**Phân tích.** Toạ độ vectơ $\overrightarrow{AB}$ = toạ độ **điểm cuối trừ điểm đầu**. Độ dài $AB=\sqrt{x^2+y^2}$ với $(x;y)$ là toạ độ $\overrightarrow{AB}$.`,
    R`**Bước 1.** $\overrightarrow{AB}=(4-1;6-2)=(3;4)$.`,
    R`**Bước 2.** $AB=\sqrt{3^2+4^2}=5$.`,
    R`**Kết luận.** $\overrightarrow{AB}=(3;4)$, $AB=5$.`
   ] },
 { muc: "TH", de: R`Cho $\vec u=(2;-1)$, $\vec v=(-3;4)$. Tìm toạ độ $2\vec u-\vec v$ và tính $|\vec v|$.`,
   giai: [
    R`**Phân tích.** Phép toán vectơ thực hiện **theo từng toạ độ**: nhân $2$ vào cả hai toạ độ của $\vec u$, rồi trừ từng toạ độ.`,
    R`**Bước 1.** $2\vec u=(4;-2)$; $2\vec u-\vec v=(4-(-3);-2-4)=(7;-6)$.`,
    R`**Bước 2.** $|\vec v|=\sqrt{9+16}=5$.`,
    R`**Kết luận.** $2\vec u-\vec v=(7;-6)$; $|\vec v|=5$.`
   ] },
 { muc: "TH", de: R`Tìm $m$ để $\vec u=(m;2)$ có độ dài $\sqrt{13}$.`,
   giai: [
    R`**Phân tích.** $|\vec u|=\sqrt{x^2+y^2}$. Bình phương hai vế để bỏ căn, được phương trình bậc hai theo $m$.`,
    R`**Bước 1.** $|\vec u|^2=m^2+2^2=m^2+4$.`,
    R`**Bước 2.** Cho bằng $\left(\sqrt{13}\right)^2=13$: $m^2+4=13\iff m^2=9$.`,
    R`**Bước 3.** $m=3$ hoặc $m=-3$.`,
    R`**Kết luận.** $m=\pm3$.`,
    R`**Thử lại.** $\sqrt{(\pm3)^2+4}=\sqrt{13}$ ✓.`
   ] },
 { muc: "VD", de: R`Phân tích $\vec c=(4;-1)$ theo $\vec a=(1;1)$ và $\vec b=(2;-1)$.`,
   giai: [
    R`**Phân tích.** Viết $\vec c=x\vec a+y\vec b$, so sánh từng toạ độ được hệ hai phương trình bậc nhất hai ẩn $x$, $y$.`,
    R`**Bước 1.** Tìm $x$, $y$ để $\vec c=x\vec a+y\vec b$: $\begin{cases}x+2y=4\\x-y=-1\end{cases}$.`,
    R`**Bước 2.** Trừ hai phương trình: $3y=5$, $y=\dfrac53$; $x=y-1=\dfrac23$.`,
    R`**Bước 3.** Vậy $\vec c=\dfrac23\vec a+\dfrac53\vec b$. (Thử lại: $\frac23+\frac{10}3=4$, $\frac23-\frac53=-1$.)`,
    R`**Kết luận.** $\vec c=\dfrac23\vec a+\dfrac53\vec b$.`
   ] }
 ] },
"C4-B10-D25": {
 pp: [
  R`**Trung điểm** $I$ của $AB$: $I\left(\dfrac{x_A+x_B}2;\dfrac{y_A+y_B}2\right)$. **Trọng tâm** $G$: $G\left(\dfrac{x_A+x_B+x_C}3;\dfrac{y_A+y_B+y_C}3\right)$.`,
  R`**Hình bình hành** $ABCD$ $\iff\overrightarrow{AB}=\overrightarrow{DC}$, suy ra $D=A+C-B$ (cộng từng toạ độ).`,
  R`**Cùng phương:** $\vec u=(x_1;y_1)$, $\vec v=(x_2;y_2)$ cùng phương $\iff x_1y_2-x_2y_1=0$.`,
  R`**Thẳng hàng:** $A$, $B$, $C$ thẳng hàng $\iff\overrightarrow{AB}$, $\overrightarrow{AC}$ cùng phương.`
 ],
 luuY: [
  R`Hình bình hành $ABCD$ phải đúng thứ tự đỉnh: $D=A+C-B$, không phải $A+B-C$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $A(1;3)$, $B(5;-1)$, $C(0;4)$. Tìm trung điểm $I$ của $AB$ và trọng tâm $G$ của tam giác $ABC$.`,
   giai: [
    R`**Phân tích.** Trung điểm: **trung bình cộng** toạ độ hai đầu mút. Trọng tâm: trung bình cộng toạ độ ba đỉnh.`,
    R`**Bước 1.** $I\left(\dfrac{1+5}2;\dfrac{3-1}2\right)=(3;1)$.`,
    R`**Bước 2.** $G\left(\dfrac{1+5+0}3;\dfrac{3-1+4}3\right)=(2;2)$.`,
    R`**Kết luận.** $I(3;1)$, $G(2;2)$.`
   ] },
 { muc: "TH", de: R`Cho $A(1;1)$, $B(4;2)$, $C(5;5)$. Tìm $D$ để $ABCD$ là hình bình hành.`,
   giai: [
    R`**Phân tích.** $ABCD$ là hình bình hành khi $\overrightarrow{AB}=\overrightarrow{DC}$ (chú ý thứ tự đỉnh). Gọi $D(x;y)$, cho hai toạ độ bằng nhau.`,
    R`**Bước 1.** $ABCD$ là hình bình hành $\iff\overrightarrow{AB}=\overrightarrow{DC}$. $\overrightarrow{AB}=(3;1)$, $\overrightarrow{DC}=(5-x;5-y)$.`,
    R`**Bước 2.** $5-x=3$, $5-y=1$, nên $D(2;4)$.`,
    R`**Kết luận.** $D(2;4)$.`,
    R`**Thử lại.** $\overrightarrow{AD}=(1;3)$ và $\overrightarrow{BC}=(1;3)$ bằng nhau ✓.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.7,>=stealth]
\draw[gray!30] (0,0) grid (6,6);
\draw[->] (-0.3,0)--(6.5,0) node[below]{$x$}; \draw[->] (0,-0.3)--(0,6.5) node[left]{$y$};
\draw[thick,blue] (1,1)--(4,2)--(5,5)--(2,4)--cycle;
\fill (1,1) circle (2.5pt); \fill (4,2) circle (2.5pt); \fill (5,5) circle (2.5pt); \fill (2,4) circle (2.5pt);
\node[below left] at (1,1){$A$}; \node[below right] at (4,2){$B$}; \node[above right] at (5,5){$C$}; \node[above left] at (2,4){$D$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Tìm $m$ để $\vec u=(2;-3)$ và $\vec v=(m;6)$ cùng phương.`,
   giai: [
    R`**Phân tích.** Hai vectơ $(x_1;y_1)$, $(x_2;y_2)$ cùng phương khi $x_1y_2-x_2y_1=0$.`,
    R`**Bước 1.** Cùng phương $\iff2\cdot6-m\cdot(-3)=0\iff12+3m=0\iff m=-4$.`,
    R`**Kiểm tra.** $\vec v=(-4;6)=-2\vec u$.`,
    R`**Kết luận.** $m=-4$.`
   ] },
 { muc: "VD", de: R`Cho $A(1;2)$, $B(3;5)$. a) Tìm $m$ để $C(m;11)$ thẳng hàng với $A$, $B$. b) Tìm điểm $M$ trên trục $Ox$ thẳng hàng với $A$, $B$.`,
   giai: [
    R`**Phân tích.** Ba điểm thẳng hàng khi hai vectơ $\overrightarrow{AB}$, $\overrightarrow{AC}$ cùng phương. Điểm trên trục $Ox$ có tung độ bằng $0$.`,
    R`**Bước 1.** a) $\overrightarrow{AB}=(2;3)$, $\overrightarrow{AC}=(m-1;9)$. Cùng phương: $2\cdot9-3(m-1)=0\iff m=7$.`,
    R`**Bước 2.** b) $M(x;0)$: $\overrightarrow{AM}=(x-1;-2)$. Cùng phương với $(2;3)$: $3(x-1)-2\cdot(-2)=0\iff x=-\dfrac13$.`,
    R`**Bước 3.** Vậy $M\left(-\dfrac13;0\right)$.`,
    R`**Kết luận.** a) $m=7$; b) $M\left(-\dfrac13;0\right)$.`,
    R`**Thử lại.** a) $\overrightarrow{AC}=(6;9)=3\overrightarrow{AB}$ ✓.`
   ] }
 ] },
"C4-B11-D26": {
 pp: [
  R`**Góc giữa hai vectơ** $\vec a$, $\vec b$: vẽ $\overrightarrow{OA}=\vec a$, $\overrightarrow{OB}=\vec b$ chung gốc; $(\vec a,\vec b)=\widehat{AOB}\in[0^\circ;180^\circ]$.`,
  R`**Tích vô hướng:** $\vec a\cdot\vec b=|\vec a|\cdot|\vec b|\cdot\cos(\vec a,\vec b)$.`,
  R`$\vec a\perp\vec b\iff\vec a\cdot\vec b=0$; $\vec a^2=|\vec a|^2$.`,
  R`Muốn tìm góc giữa $\overrightarrow{AB}$ và $\overrightarrow{BC}$, phải dời về chung gốc: góc đó bằng $180^\circ-\widehat{ABC}$.`
 ],
 luuY: [
  R`Lấy ngay góc $\widehat{ABC}$ làm góc giữa $\overrightarrow{AB}$, $\overrightarrow{BC}$ (hai vectơ không chung gốc).`
 ],
 vd: [
 { muc: "NB", de: R`Cho tam giác đều $ABC$ cạnh $a$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$ và $\overrightarrow{AB}\cdot\overrightarrow{BC}$.`,
   giai: [
    R`**Phân tích.** $\vec a\cdot\vec b=|\vec a||\vec b|\cos(\vec a,\vec b)$. Khó nhất là **xác định góc**: góc giữa hai vectơ phải đo khi chúng **chung điểm đầu**. $\overrightarrow{AB}$ và $\overrightarrow{BC}$ nối đuôi nhau nên phải dời về chung gốc.`,
    R`**Bước 1.** $(\overrightarrow{AB},\overrightarrow{AC})=60^\circ$: $\overrightarrow{AB}\cdot\overrightarrow{AC}=a\cdot a\cdot\dfrac12=\dfrac{a^2}2$.`,
    R`**Bước 2.** $(\overrightarrow{AB},\overrightarrow{BC})=180^\circ-60^\circ=120^\circ$: $\overrightarrow{AB}\cdot\overrightarrow{BC}=a^2\cos120^\circ=-\dfrac{a^2}2$.`,
    R`**Kết luận.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=\dfrac{a^2}2$; $\overrightarrow{AB}\cdot\overrightarrow{BC}=-\dfrac{a^2}2$.`,
    R`**Nhận xét.** Lấy nhầm góc $60^\circ$ cho cặp sau sẽ sai dấu.`
   ] },
 { muc: "TH", de: R`Cho hình vuông $ABCD$ cạnh $a$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$, $\overrightarrow{AC}\cdot\overrightarrow{BD}$, $\overrightarrow{AB}\cdot\overrightarrow{CD}$.`,
   giai: [
    R`**Phân tích.** Xác định từng góc: $\overrightarrow{AB},\overrightarrow{AC}$ chung gốc tạo $45^\circ$; hai đường chéo vuông góc; $\overrightarrow{CD}$ ngược hướng với $\overrightarrow{AB}$ (góc $180^\circ$).`,
    R`**Bước 1.** $(\overrightarrow{AB},\overrightarrow{AC})=45^\circ$, $AC=a\sqrt2$: $\overrightarrow{AB}\cdot\overrightarrow{AC}=a\cdot a\sqrt2\cdot\dfrac{\sqrt2}2=a^2$.`,
    R`**Bước 2.** Hai đường chéo vuông góc: $\overrightarrow{AC}\cdot\overrightarrow{BD}=0$.`,
    R`**Bước 3.** $\overrightarrow{CD}$ ngược hướng $\overrightarrow{AB}$: $\overrightarrow{AB}\cdot\overrightarrow{CD}=a\cdot a\cdot\cos180^\circ=-a^2$.`,
    R`**Kết luận.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=a^2$; $\overrightarrow{AC}\cdot\overrightarrow{BD}=0$; $\overrightarrow{AB}\cdot\overrightarrow{CD}=-a^2$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $AB=3$, $AC=5$, $\widehat A=120^\circ$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$, rồi suy ra $BC$.`,
   giai: [
    R`**Phân tích.** Tính tích vô hướng theo định nghĩa, rồi dùng $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$ và bình phương hai vế: đây chính là cách chứng minh định lí côsin.`,
    R`**Bước 1.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=3\cdot5\cdot\cos120^\circ=-\dfrac{15}2$.`,
    R`**Bước 2.** $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$ nên $BC^2=AC^2+AB^2-2\overrightarrow{AB}\cdot\overrightarrow{AC}=25+9+15=49$.`,
    R`**Bước 3.** $BC=7$.`,
    R`**Kết luận.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=-\dfrac{15}2$ và $BC=7$.`
   ] }
 ] },
"C4-B11-D27": {
 pp: [
  R`$\vec a=(x_1;y_1)$, $\vec b=(x_2;y_2)$: $\vec a\cdot\vec b=x_1x_2+y_1y_2$.`,
  R`$\cos(\vec a,\vec b)=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\cdot\sqrt{x_2^2+y_2^2}}$; $\vec a\perp\vec b\iff x_1x_2+y_1y_2=0$.`,
  R`**Chân đường cao** $H$ từ $A$ xuống $BC$: đặt $H=B+t\overrightarrow{BC}$, giải $\overrightarrow{AH}\cdot\overrightarrow{BC}=0$.`,
  R`**Trực tâm** $H(x;y)$: giải hệ $\overrightarrow{AH}\cdot\overrightarrow{BC}=0$, $\overrightarrow{BH}\cdot\overrightarrow{AC}=0$.`
 ],
 luuY: [
  R`Góc giữa hai vectơ có thể tù ($\cos<0$); góc trong tam giác tại $A$ là góc giữa $\overrightarrow{AB}$ và $\overrightarrow{AC}$ (chung gốc $A$).`
 ],
 vd: [
 { muc: "NB", de: R`Cho $\vec a=(1;2)$, $\vec b=(3;-1)$. Tính $\vec a\cdot\vec b$ và $\cos(\vec a,\vec b)$.`,
   giai: [
    R`**Phân tích.** Tích vô hướng bằng toạ độ: $x_1x_2+y_1y_2$. Góc tính từ $\cos(\vec a,\vec b)=\dfrac{\vec a\cdot\vec b}{|\vec a|\cdot|\vec b|}$.`,
    R`**Bước 1.** $\vec a\cdot\vec b=1\cdot3+2\cdot(-1)=1$.`,
    R`**Bước 2.** $|\vec a|=\sqrt5$, $|\vec b|=\sqrt{10}$: $\cos(\vec a,\vec b)=\dfrac1{\sqrt{50}}=\dfrac{\sqrt2}{10}\approx0{,}14$ (góc $\approx81{,}87^\circ$).`,
    R`**Kết luận.** $\vec a\cdot\vec b=1$; $\cos(\vec a,\vec b)=\dfrac{\sqrt2}{10}$.`
   ] },
 { muc: "TH", de: R`Tìm $m$ để $\vec a=(2;-1)$ vuông góc với $\vec b=(m;4)$.`,
   giai: [
    R`**Phân tích.** Hai vectơ vuông góc khi và chỉ khi **tích vô hướng bằng $0$**. Tính tích vô hướng bằng toạ độ $x_1x_2+y_1y_2$ rồi giải phương trình.`,
    R`**Bước 1.** $\vec a\cdot\vec b=2\cdot m+(-1)\cdot4=2m-4$.`,
    R`**Bước 2.** $\vec a\perp\vec b\iff2m-4=0\iff m=2$.`,
    R`**Kết luận.** $m=2$.`,
    R`**Thử lại.** $\vec b=(2;4)$: $2\cdot2+(-1)\cdot4=0$ ✓.`
   ] },
 { muc: "TH", de: R`Cho $A(1;1)$, $B(3;0)$, $C(2;3)$. Chứng minh tam giác $ABC$ vuông tại $A$ và tính diện tích.`,
   giai: [
    R`**Phân tích.** Vuông tại $A$ khi $\overrightarrow{AB}\cdot\overrightarrow{AC}=0$. Khi đó diện tích bằng nửa tích hai cạnh góc vuông.`,
    R`**Bước 1.** $\overrightarrow{AB}=(2;-1)$, $\overrightarrow{AC}=(1;2)$; $\overrightarrow{AB}\cdot\overrightarrow{AC}=2-2=0$ nên vuông tại $A$.`,
    R`**Bước 2.** $AB=AC=\sqrt5$: $S=\dfrac12\cdot\sqrt5\cdot\sqrt5=\dfrac52$.`,
    R`**Kết luận.** Tam giác $ABC$ vuông cân tại $A$, diện tích bằng $\dfrac52$.`
   ] },
 { muc: "VD", de: R`Cho $A(2;5)$, $B(1;1)$, $C(5;3)$. Tìm chân đường cao $K$ kẻ từ $A$ và trực tâm $H$ của tam giác $ABC$.`,
   giai: [
    R`**Phân tích.** $K$ nằm trên đường thẳng $BC$ nên viết $K=B+t\overrightarrow{BC}$, rồi dùng $AK\perp BC$ tìm $t$. Trực tâm $H$ là giao của **hai đường cao**: mỗi đường cao cho một phương trình tích vô hướng bằng $0$.`,
    R`**Bước 1.** $\overrightarrow{BC}=(4;2)$. $K=B+t\overrightarrow{BC}=(1+4t;1+2t)$, $\overrightarrow{AK}=(4t-1;2t-4)$.`,
    R`**Bước 2.** $\overrightarrow{AK}\cdot\overrightarrow{BC}=4(4t-1)+2(2t-4)=20t-12=0\iff t=\dfrac35$, nên $K\left(\dfrac{17}5;\dfrac{11}5\right)$.`,
    R`**Bước 3.** Trực tâm $H(x;y)$: $\overrightarrow{AH}\cdot\overrightarrow{BC}=0\iff4(x-2)+2(y-5)=0\iff2x+y=9$.`,
    R`**Bước 4.** $\overrightarrow{AC}=(3;-2)$: $\overrightarrow{BH}\cdot\overrightarrow{AC}=0\iff3(x-1)-2(y-1)=0\iff3x-2y=1$.`,
    R`**Bước 5.** Giải hệ: $x=\dfrac{19}7$, $y=\dfrac{25}7$. Vậy $H\left(\dfrac{19}7;\dfrac{25}7\right)$.`,
    R`**Thử lại.** $\overrightarrow{CH}=\left(-\frac{16}7;\frac47\right)$, $\overrightarrow{AB}=(-1;-4)$, tích vô hướng $\frac{16}7-\frac{16}7=0$ đúng.`,
    R`**Kết luận.** $K\left(\dfrac{17}5;\dfrac{11}5\right)$, $H\left(\dfrac{19}7;\dfrac{25}7\right)$.`
   ] }
 ] },
"C4-B11-D28": {
 pp: [
  R`**Độ dài qua tích vô hướng:** $|\vec a\pm\vec b|^2=|\vec a|^2+|\vec b|^2\pm2\,\vec a\cdot\vec b$.`,
  R`Ngược lại, biết các độ dài thì $\vec a\cdot\vec b=\dfrac{|\vec a+\vec b|^2-|\vec a|^2-|\vec b|^2}2$.`,
  R`**Chứng minh đẳng thức:** chèn điểm, khai triển như nhân đa thức, dùng $\overrightarrow{IA}=-\overrightarrow{IB}$ khi $I$ là trung điểm.`,
  R`**Công của lực:** $A=\vec F\cdot\vec s=|\vec F|\cdot|\vec s|\cdot\cos\alpha$ ($\alpha$ là góc giữa lực và hướng dịch chuyển; đơn vị J).`
 ],
 luuY: [
  R`Viết $(\vec a+\vec b)^2=\vec a^2+\vec b^2$: thiếu $2\vec a\cdot\vec b$.`
 ],
 vd: [
 { muc: "TH", de: R`Cho $|\vec a|=3$, $|\vec b|=4$, $(\vec a,\vec b)=60^\circ$. Tính $|\vec a+\vec b|$ và $|\vec a-\vec b|$.`,
   giai: [
    R`**Phân tích.** Bình phương độ dài: $|\vec a\pm\vec b|^2=|\vec a|^2+|\vec b|^2\pm2\vec a\cdot\vec b$. Tính tích vô hướng trước.`,
    R`**Bước 1.** $\vec a\cdot\vec b=3\cdot4\cdot\dfrac12=6$.`,
    R`**Bước 2.** $|\vec a+\vec b|^2=9+16+12=37\Rightarrow|\vec a+\vec b|=\sqrt{37}$.`,
    R`**Bước 3.** $|\vec a-\vec b|^2=9+16-12=13\Rightarrow|\vec a-\vec b|=\sqrt{13}$.`,
    R`**Kết luận.** $|\vec a+\vec b|=\sqrt{37}$, $|\vec a-\vec b|=\sqrt{13}$.`
   ] },
 { muc: "TH", de: R`Cho $I$ là trung điểm $AB$, $M$ là điểm bất kì. Chứng minh $\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-IA^2$.`,
   giai: [
    R`**Phân tích.** Chèn điểm $I$ vào cả hai vectơ; vì $\overrightarrow{IB}=-\overrightarrow{IA}$, tích có dạng $(\vec u+\vec v)(\vec u-\vec v)=\vec u^2-\vec v^2$.`,
    R`**Bước 1.** $\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}$; $\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}=\overrightarrow{MI}-\overrightarrow{IA}$.`,
    R`**Bước 2.** $\overrightarrow{MA}\cdot\overrightarrow{MB}=(\overrightarrow{MI}+\overrightarrow{IA})(\overrightarrow{MI}-\overrightarrow{IA})=MI^2-IA^2$.`,
    R`**Kết luận.** $\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-IA^2$ (điều phải chứng minh).`
   ] },
 { muc: "VD", de: R`Một người kéo thùng hàng đi $50$ m bằng lực $20$ N, hướng lực hợp với hướng di chuyển góc $30^\circ$. Tính công của lực.`,
   giai: [
    R`**Phân tích.** Công của lực là tích vô hướng $A=\vec F\cdot\vec s=|\vec F|\cdot|\vec s|\cdot\cos(\vec F,\vec s)$. Chỉ thành phần lực theo hướng di chuyển mới sinh công.`,
    R`**Bước 1.** $|\vec F|=20$ N, $|\vec s|=50$ m, góc giữa lực và hướng di chuyển là $30^\circ$.`,
    R`**Bước 2.** $A=20\cdot50\cdot\cos30^\circ=1000\cdot\dfrac{\sqrt3}2=500\sqrt3$.`,
    R`**Kết luận.** Công của lực là $500\sqrt3\approx866$ J.`,
    R`**Nhận xét.** Nếu kéo theo đúng hướng di chuyển (góc $0^\circ$) thì công lớn nhất, bằng $1000$ J.`
   ] },
 { muc: "VD", de: R`Cho $|\vec a|=2$, $|\vec b|=3$, $|\vec a+\vec b|=4$. Tính $\vec a\cdot\vec b$, $\cos(\vec a,\vec b)$ và $|\vec a-\vec b|$.`,
   giai: [
    R`**Phân tích.** Làm ngược công thức: từ $|\vec a+\vec b|^2=|\vec a|^2+|\vec b|^2+2\vec a\cdot\vec b$ suy ra $\vec a\cdot\vec b$; rồi dùng nó cho góc và cho $|\vec a-\vec b|$.`,
    R`**Bước 1.** $\vec a\cdot\vec b=\dfrac{16-4-9}2=\dfrac32$.`,
    R`**Bước 2.** $\cos(\vec a,\vec b)=\dfrac{3/2}{2\cdot3}=\dfrac14$.`,
    R`**Bước 3.** $|\vec a-\vec b|^2=4+9-2\cdot\dfrac32=10\Rightarrow|\vec a-\vec b|=\sqrt{10}$.`,
    R`**Kết luận.** $\vec a\cdot\vec b=\dfrac32$, $\cos(\vec a,\vec b)=\dfrac14$, $|\vec a-\vec b|=\sqrt{10}$.`,
    R`**Thử lại.** Phải có $|\vec a+\vec b|^2+|\vec a-\vec b|^2=2\left(|\vec a|^2+|\vec b|^2\right)$: $16+10=26=2\cdot13$ ✓.`
   ] }
 ] }
});
/* ---------- Chương V · Các số đặc trưng của mẫu số liệu không ghép nhóm ---------- */
Object.assign(D, {
"C5-B12-D29": {
 pp: [
  R`$a$ là số gần đúng của số đúng $\bar a$. **Sai số tuyệt đối** $\Delta_a=|\bar a-a|$. Nếu $\Delta_a\le d$ thì $d$ là **độ chính xác**, viết $\bar a=a\pm d$.`,
  R`**Sai số tương đối** $\delta_a=\dfrac{\Delta_a}{|a|}\le\dfrac d{|a|}$; sai số tương đối càng nhỏ thì phép đo càng chính xác.`,
  R`**Quy tròn đến một hàng:** chữ số ngay sau hàng đó $\ge5$ thì cộng $1$ vào hàng đó, $<5$ thì giữ nguyên; các chữ số sau bỏ đi (phần thập phân) hoặc thay bằng $0$ (phần nguyên).`,
  R`**Biết độ chính xác $d$ mà không nói hàng:** quy tròn đến **hàng thấp nhất** mà $d$ nhỏ hơn một đơn vị của hàng đó.`
 ],
 luuY: [
  R`So sánh độ chính xác hai phép đo khác đơn vị, khác độ lớn: phải so **sai số tương đối**, không so $d$.`
 ],
 vd: [
 { muc: "NB", de: R`Quy tròn $3{,}14159$ đến hàng phần trăm và $1\,234\,567$ đến hàng nghìn.`,
   giai: [
    R`**Phân tích.** Quy tròn đến một hàng: nhìn **chữ số ngay sau** hàng đó. Nhỏ hơn $5$ thì giữ nguyên; từ $5$ trở lên thì cộng $1$ vào hàng đó. Các chữ số phía sau bỏ đi (phần thập phân) hoặc thay bằng $0$ (phần nguyên).`,
    R`**Bước 1.** $3{,}14159$: chữ số sau hàng phần trăm là $1<5$, giữ nguyên: $3{,}14$.`,
    R`**Bước 2.** $1\,234\,567$: chữ số sau hàng nghìn là $5\ge5$, cộng $1$: $1\,235\,000$.`,
    R`**Kết luận.** $3{,}14159\approx3{,}14$; $1\,234\,567\approx1\,235\,000$.`
   ] },
 { muc: "TH", de: R`Lấy $\sqrt2\approx1{,}41$. Đánh giá sai số tuyệt đối, biết $1{,}414<\sqrt2<1{,}415$.`,
   giai: [
    R`**Phân tích.** Sai số tuyệt đối là $\Delta=|\sqrt2-1{,}41|$. Không biết chính xác $\sqrt2$, nhưng biết nó nằm giữa hai số; trừ $1{,}41$ vào cả ba vế để chặn $\Delta$.`,
    R`**Bước 1.** $1{,}414-1{,}41<\sqrt2-1{,}41<1{,}415-1{,}41$, tức $0{,}004<\Delta<0{,}005$.`,
    R`**Bước 2.** Vậy sai số tuyệt đối không vượt quá $0{,}005$.`,
    R`**Kết luận.** Sai số tuyệt đối không vượt quá $0{,}005$.`
   ] },
 { muc: "TH", de: R`Cho số gần đúng $a=2\,841\,275$ với độ chính xác $d=300$. Hãy quy tròn $a$.`,
   giai: [
    R`**Phân tích.** Với độ chính xác $d$, quy tròn $a$ đến **hàng lớn hơn liền kề** hàng cao nhất của $d$: $d=300$ thuộc hàng trăm, nên quy tròn đến hàng nghìn.`,
    R`**Bước 1.** $d=300$: không nhỏ hơn $100$ (đơn vị hàng trăm) nhưng nhỏ hơn $1000$ (đơn vị hàng nghìn).`,
    R`**Bước 2.** Quy tròn đến hàng nghìn: chữ số sau là $2<5$: $a\approx2\,841\,000$.`,
    R`**Kết luận.** $a\approx2\,841\,000$.`,
    R`**Nhận xét.** Quy tròn đến hàng trăm ($2\,841\,300$) là không hợp lí: chữ số hàng trăm đã không đáng tin khi sai số tới $300$.`
   ] },
 { muc: "VD", de: R`Đo chiều dài cây cầu được $152\pm0{,}2$ m và chiều dài cái bút được $15\pm0{,}1$ cm. Phép đo nào chính xác hơn?`,
   giai: [
    R`**Phân tích.** Hai phép đo có đơn vị và độ lớn rất khác nhau, nên không so sánh được bằng $d$. Dùng **sai số tương đối** $\delta=\dfrac da$: phép đo nào có $\delta$ nhỏ hơn thì chính xác hơn.`,
    R`**Bước 1.** Cầu: $\delta\le\dfrac{0{,}2}{152}\approx0{,}13\%$.`,
    R`**Bước 2.** Bút: $\delta\le\dfrac{0{,}1}{15}\approx0{,}67\%$.`,
    R`**Bước 3.** Sai số tương đối của phép đo cầu nhỏ hơn: **đo cầu chính xác hơn** (dù $d$ lớn hơn).`
   ] }
 ] },
"C5-B13-D30": {
 pp: [
  R`**Bước 0.** Sắp xếp mẫu theo thứ tự không giảm: $x_1\le x_2\le\dots\le x_n$.`,
  R`**Số trung bình:** $\bar x=\dfrac{x_1+\dots+x_n}n$; với bảng tần số: $\bar x=\dfrac{n_1x_1+\dots+n_kx_k}n$.`,
  R`**Trung vị $M_e$:** $n$ lẻ thì là số ở giữa; $n$ chẵn thì là trung bình cộng hai số ở giữa.`,
  R`**Tứ phân vị:** $Q_2=M_e$; $Q_1$ là trung vị nửa dưới, $Q_3$ là trung vị nửa trên (khi $n$ lẻ, **không** tính $M_e$ vào hai nửa).`,
  R`**Mốt $M_o$:** giá trị có tần số lớn nhất (có thể có nhiều mốt).`
 ],
 luuY: [
  R`Quên sắp xếp trước khi tìm trung vị, tứ phân vị.`,
  R`Với bảng tần số, phải đếm theo vị trí cộng dồn, không lấy giá trị ở giữa bảng.`
 ],
 vd: [
 { muc: "NB", de: R`Cho mẫu: $5;\ 7;\ 8;\ 8;\ 9;\ 10;\ 12;\ 14;\ 18$. Tìm số trung bình, trung vị, mốt.`,
   giai: [
    R`**Phân tích.** Số trung bình: tổng chia số giá trị. Trung vị: **sắp xếp tăng dần** rồi lấy giá trị đứng giữa (mẫu đã sắp sẵn). Mốt: giá trị xuất hiện nhiều nhất.`,
    R`**Bước 1.** $\bar x=\dfrac{91}9\approx10{,}11$.`,
    R`**Bước 2.** $n=9$ lẻ: $M_e$ là số thứ $5$: $M_e=9$.`,
    R`**Bước 3.** Giá trị $8$ xuất hiện $2$ lần, nhiều nhất: $M_o=8$.`,
    R`**Kết luận.** $\bar x\approx10{,}11$; $M_e=9$; $M_o=8$.`,
    R`**Nhận xét.** $\bar x>M_e$ vì giá trị $18$ khá lớn kéo số trung bình lên.`
   ] },
 { muc: "TH", de: R`Tìm tứ phân vị của mẫu ở ví dụ trên.`,
   giai: [
    R`**Phân tích.** $Q_2$ là trung vị. $Q_1$, $Q_3$ là trung vị của **nửa dưới** và **nửa trên**; $n$ lẻ thì bỏ giá trị trung vị khỏi cả hai nửa.`,
    R`**Bước 1.** $Q_2=M_e=9$.`,
    R`**Bước 2.** Nửa dưới (bỏ $9$): $5;7;8;8$ nên $Q_1=\dfrac{7+8}2=7{,}5$.`,
    R`**Bước 3.** Nửa trên: $10;12;14;18$ nên $Q_3=\dfrac{12+14}2=13$.`,
    R`**Kết luận.** $Q_1=7{,}5$; $Q_2=9$; $Q_3=13$.`
   ] },
 { muc: "TH", de: R`Điểm kiểm tra của $10$ bạn: $6;\ 7;\ 7;\ 8;\ 8;\ 8;\ 9;\ 9;\ 10;\ 5$. Tìm $\bar x$, $M_e$, $Q_1$, $Q_3$.`,
   giai: [
    R`**Phân tích.** Mẫu chưa sắp xếp: phải **sắp tăng dần trước** khi tìm trung vị và tứ phân vị. $n=10$ chẵn nên trung vị là trung bình hai số giữa.`,
    R`**Bước 1.** Sắp xếp: $5;6;7;7;8;8;8;9;9;10$. $\bar x=\dfrac{77}{10}=7{,}7$.`,
    R`**Bước 2.** $n=10$ chẵn: $M_e=\dfrac{8+8}2=8$.`,
    R`**Bước 3.** Nửa dưới $5;6;7;7;8$: $Q_1=7$. Nửa trên $8;8;9;9;10$: $Q_3=9$.`,
    R`**Kết luận.** $\bar x=7{,}7$; $M_e=8$; $Q_1=7$; $Q_3=9$.`
   ] },
 { muc: "VD", de: R`Khảo sát số con của $20$ gia đình: $$\begin{array}{c|ccccc}\text{Số con}&0&1&2&3&4\\\hline\text{Số gia đình}&2&5&8&4&1\end{array}$$ Tìm $\bar x$, $M_e$, $M_o$, $Q_1$, $Q_3$.`,
   giai: [
    R`**Phân tích.** Mẫu cho bằng bảng tần số: lập **tần số cộng dồn** để biết mỗi vị trí (thứ $10$, $11$, $15$, …) ứng với giá trị nào.`,
    R`**Bước 1.** $\bar x=\dfrac{0\cdot2+1\cdot5+2\cdot8+3\cdot4+4\cdot1}{20}=\dfrac{37}{20}=1{,}85$.`,
    R`**Bước 2.** Tần số cộng dồn: $2;\ 7;\ 15;\ 19;\ 20$. Vị trí $10$ và $11$ đều có giá trị $2$: $M_e=2$.`,
    R`**Bước 3.** $Q_1$: trung vị $10$ số đầu, là trung bình số thứ $5$, $6$ (đều bằng $1$): $Q_1=1$.`,
    R`**Bước 4.** $Q_3$: trung bình số thứ $15$ (bằng $2$) và $16$ (bằng $3$): $Q_3=2{,}5$.`,
    R`**Bước 5.** $M_o=2$ (tần số $8$ lớn nhất).`,
    R`**Kết luận.** $\bar x=1{,}85$; $M_e=2$; $M_o=2$; $Q_1=1$; $Q_3=2{,}5$.`
   ] }
 ] },
"C5-B14-D31": {
 pp: [
  R`**Khoảng biến thiên:** $R=x_{\max}-x_{\min}$.`,
  R`**Khoảng tứ phân vị:** $\Delta_Q=Q_3-Q_1$ (độ phân tán của nửa giữa mẫu, ít bị ảnh hưởng bởi giá trị bất thường).`,
  R`**Giá trị bất thường:** $x>Q_3+1{,}5\Delta_Q$ hoặc $x<Q_1-1{,}5\Delta_Q$.`
 ],
 luuY: [
  R`$R$ rất nhạy với giá trị bất thường; muốn đo độ phân tán ổn định hơn thì dùng $\Delta_Q$.`
 ],
 vd: [
 { muc: "NB", de: R`Với mẫu $5;7;8;8;9;10;12;14;18$ (có $Q_1=7{,}5$, $Q_3=13$), tính $R$ và $\Delta_Q$.`,
   giai: [
    R`**Phân tích.** Khoảng biến thiên $R$ = giá trị lớn nhất trừ giá trị nhỏ nhất. Khoảng tứ phân vị $\Delta_Q=Q_3-Q_1$ (đã có sẵn $Q_1$, $Q_3$).`,
    R`**Bước 1.** Giá trị lớn nhất $18$, nhỏ nhất $5$: $R=18-5=13$.`,
    R`**Bước 2.** $\Delta_Q=Q_3-Q_1=13-7{,}5=5{,}5$.`,
    R`**Kết luận.** $R=13$; $\Delta_Q=5{,}5$.`,
    R`**Nhận xét.** $R$ dùng hai giá trị ở hai đầu nên dễ bị ảnh hưởng bởi giá trị bất thường; $\Delta_Q$ chỉ dùng nửa giữa nên ổn định hơn.`
   ] },
 { muc: "TH", de: R`Mẫu trên có giá trị bất thường không?`,
   giai: [
    R`**Phân tích.** Giá trị bất thường là giá trị nằm ngoài khoảng $\left[Q_1-1{,}5\Delta_Q;\ Q_3+1{,}5\Delta_Q\right]$. Tính hai ngưỡng, so với giá trị nhỏ nhất và lớn nhất.`,
    R`**Bước 1.** $Q_3+1{,}5\Delta_Q=13+8{,}25=21{,}25$; $Q_1-1{,}5\Delta_Q=7{,}5-8{,}25=-0{,}75$.`,
    R`**Bước 2.** Mọi giá trị nằm trong $[-0{,}75;21{,}25]$: **không** có giá trị bất thường.`,
    R`**Kết luận.** Mẫu không có giá trị bất thường.`
   ] },
 { muc: "VD", de: R`Thời gian (phút) chạy về đích của $9$ bạn: $12;13;14;15;15;16;17;18;40$. Tìm giá trị bất thường.`,
   giai: [
    R`**Phân tích.** Giá trị $40$ trông khác hẳn các giá trị khác. Kiểm tra bằng tiêu chuẩn $1{,}5\Delta_Q$: tìm $Q_1$, $Q_3$, rồi hai ngưỡng.`,
    R`**Bước 1.** $n=9$: $M_e=15$. Nửa dưới $12;13;14;15$: $Q_1=13{,}5$. Nửa trên $16;17;18;40$: $Q_3=17{,}5$.`,
    R`**Bước 2.** $\Delta_Q=4$; $Q_3+1{,}5\Delta_Q=23{,}5$; $Q_1-1{,}5\Delta_Q=7{,}5$.`,
    R`**Bước 3.** $40>23{,}5$: giá trị $40$ là **bất thường**.`,
    R`**Nhận xét.** $R=40-12=28$ bị đẩy lên rất lớn chỉ vì một giá trị, còn $\Delta_Q=4$ vẫn phản ánh đúng nhóm chính.`,
    R`**Kết luận.** Giá trị $40$ là giá trị bất thường.`
   ] }
 ] },
"C5-B14-D32": {
 pp: [
  R`**Phương sai:** $s^2=\dfrac1n\sum(x_i-\bar x)^2=\dfrac1n\sum x_i^2-\bar x^2$ (bảng tần số: nhân thêm tần số $n_i$).`,
  R`**Độ lệch chuẩn:** $s=\sqrt{s^2}$, cùng đơn vị với số liệu.`,
  R`**Các bước:** tính $\bar x$; lập cột $x_i-\bar x$ và $(x_i-\bar x)^2$; cộng lại, chia $n$.`,
  R`**So sánh độ ổn định:** hai mẫu cùng trung bình, mẫu nào có $s$ nhỏ hơn thì **ổn định (đồng đều) hơn**.`
 ],
 luuY: [
  R`Quên lấy căn khi đề hỏi độ lệch chuẩn; hoặc chia cho $n-1$ (chương trình lớp 10 chia cho $n$).`
 ],
 vd: [
 { muc: "NB", de: R`Tính phương sai và độ lệch chuẩn của mẫu $2;4;6;8;10$.`,
   giai: [
    R`**Phân tích.** Phương sai là **trung bình của bình phương độ lệch** so với số trung bình: tính $\bar x$, các độ lệch, bình phương, rồi lấy trung bình. Độ lệch chuẩn là căn bậc hai của phương sai.`,
    R`**Bước 1.** $\bar x=6$. Các độ lệch: $-4;-2;0;2;4$; bình phương: $16;4;0;4;16$.`,
    R`**Bước 2.** $s^2=\dfrac{40}5=8$; $s=2\sqrt2\approx2{,}83$.`,
    R`**Kết luận.** $s^2=8$; $s=2\sqrt2\approx2{,}83$.`,
    R`**Thử lại.** Công thức rút gọn: $\overline{x^2}=\dfrac{4+16+36+64+100}5=44$, $s^2=44-6^2=8$ ✓.`
   ] },
 { muc: "TH", de: R`Tính phương sai của mẫu cho bởi bảng $$\begin{array}{c|ccccc}x&5&6&7&8&9\\\hline n&1&2&4&2&1\end{array}$$`,
   giai: [
    R`**Phân tích.** Mẫu cho bằng bảng tần số: mỗi bình phương độ lệch được nhân với **tần số** của giá trị đó trước khi cộng.`,
    R`**Bước 1.** $n=10$; $\bar x=\dfrac{5+12+28+16+9}{10}=7$.`,
    R`**Bước 2.** $\sum n_i(x_i-\bar x)^2=1\cdot4+2\cdot1+4\cdot0+2\cdot1+1\cdot4=12$.`,
    R`**Bước 3.** $s^2=\dfrac{12}{10}=1{,}2$; $s\approx1{,}10$.`,
    R`**Kết luận.** $s^2=1{,}2$; $s\approx1{,}10$.`
   ] },
 { muc: "VD", de: R`Điểm $6$ bài kiểm tra của An: $7;8;7;8;7;8$; của Bình: $5;10;6;9;7;8$. Ai học đều hơn?`,
   giai: [
    R`**Phân tích.** "Học đều" nghĩa là điểm ít dao động. Hai bạn cùng trung bình, nên so sánh **độ lệch chuẩn**: nhỏ hơn thì đều hơn.`,
    R`**Bước 1.** Cả hai có $\bar x=\dfrac{45}6=7{,}5$.`,
    R`**Bước 2.** An: mọi độ lệch là $\pm0{,}5$: $s^2_A=0{,}25$, $s_A=0{,}5$.`,
    R`**Bước 3.** Bình: độ lệch $\pm2{,}5;\pm1{,}5;\pm0{,}5$: $s^2_B=\dfrac{2(6{,}25+2{,}25+0{,}25)}6=\dfrac{17{,}5}6\approx2{,}92$, $s_B\approx1{,}71$.`,
    R`**Bước 4.** $s_A<s_B$: **An học đều hơn**.`,
    R`**Kết luận.** An học đều hơn Bình.`
   ] }
 ] }
});
/* ---------- Chương VI · Hàm số, đồ thị và ứng dụng ---------- */
Object.assign(D, {
"C6-B15-D33": {
 pp: [
  R`**Tập xác định** $D$ là tập các giá trị $x$ làm biểu thức $f(x)$ có nghĩa.`,
  R`Điều kiện thường gặp: $\dfrac{A}{B}$ cần $B\ne0$; $\sqrt A$ cần $A\ge0$; $\dfrac{A}{\sqrt B}$ cần $B>0$.`,
  R`Có nhiều điều kiện thì lấy **giao**; viết kết quả dưới dạng khoảng, đoạn, hoặc $\mathbb R\setminus\{\dots\}$.`
 ],
 luuY: [
  R`Với $\dfrac1{\sqrt{B}}$ quên bỏ dấu bằng: phải $B>0$, không phải $B\ge0$.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm tập xác định của $y=\dfrac{2x+1}{x-3}$.`,
   giai: [
    R`**Phân tích.** Hàm số cho bằng phân thức chỉ xác định khi **mẫu khác $0$**. Tìm giá trị làm mẫu bằng $0$ rồi loại đi.`,
    R`**Bước 1.** Điều kiện xác định: $x-3\ne0$.`,
    R`**Bước 2.** Giải: $x\ne3$.`,
    R`**Kết luận.** $D=\mathbb R\setminus\{3\}$.`,
    R`**Nhận xét.** Tử $2x+1$ có bằng $0$ cũng không sao; chỉ mẫu mới cần điều kiện.`
   ] },
 { muc: "NB", de: R`Tìm tập xác định của $y=\sqrt{4-2x}$.`,
   giai: [
    R`**Phân tích.** Căn bậc hai chỉ xác định khi biểu thức dưới căn **không âm** ($\ge0$, được phép bằng $0$).`,
    R`**Bước 1.** Điều kiện: $4-2x\ge0$.`,
    R`**Bước 2.** Giải: $-2x\ge-4\iff x\le2$ (chia cho số âm, đổi chiều).`,
    R`**Kết luận.** $D=(-\infty;2]$.`,
    R`**Thử lại.** $x=2$: $\sqrt0=0$ xác định ✓; $x=3$: $\sqrt{-2}$ không xác định, đúng là bị loại ✓.`
   ] },
 { muc: "TH", de: R`Tìm tập xác định của $y=\sqrt{x+1}+\dfrac1{x-2}$.`,
   giai: [
    R`**Phân tích.** Hàm số có **hai** thành phần cần điều kiện: căn (biểu thức dưới căn $\ge0$) và phân thức (mẫu $\ne0$). Viết cả hai thành hệ rồi lấy giao.`,
    R`**Bước 1.** Điều kiện $\begin{cases}x+1\ge0\\x-2\ne0\end{cases}\iff\begin{cases}x\ge-1\\x\ne2\end{cases}$.`,
    R`**Bước 2.** $D=[-1;+\infty)\setminus\{2\}$.`,
    R`**Kết luận.** $D=[-1;+\infty)\setminus\{2\}$.`
   ] },
 { muc: "VD", de: R`Tìm $m$ để hàm số $y=\sqrt{x-m+1}$ xác định trên $[2;+\infty)$.`,
   giai: [
    R`**Phân tích.** Tìm tập xác định theo $m$, rồi yêu cầu đoạn $[2;+\infty)$ **nằm trọn trong** tập xác định đó.`,
    R`**Bước 1.** Hàm số xác định khi $x\ge m-1$: $D=[m-1;+\infty)$.`,
    R`**Bước 2.** Cần $[2;+\infty)\subset[m-1;+\infty)\iff m-1\le2\iff m\le3$.`,
    R`**Kết luận.** $m\le3$.`,
    R`**Thử lại.** $m=3$: hàm $y=\sqrt{x-2}$ xác định đúng trên $[2;+\infty)$ ✓; $m=4$: $D=[3;+\infty)$ không chứa $x=2$, nên bị loại ✓.`
   ] }
 ] },
"C6-B15-D34": {
 pp: [
  R`**Giá trị** của hàm số tại $x_0$: thay $x=x_0$ vào công thức, tính $f(x_0)$.`,
  R`**Điểm $M(x_0;y_0)$ thuộc đồ thị** $y=f(x)$ $\iff x_0\in D$ và $y_0=f(x_0)$.`,
  R`**Hàm cho bởi nhiều công thức** (giá cước, tiền điện...): xác định $x$ thuộc khoảng nào rồi dùng đúng công thức của khoảng đó.`
 ],
 luuY: [
  R`Bài giá cước bậc thang: mỗi khoảng chỉ tính phần vượt quá mốc trước, không nhân cả $x$ với đơn giá bậc cao.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $f(x)=x^2-3x+2$. Tính $f(0)$, $f(-1)$, $f(2)$.`,
   giai: [
    R`**Phân tích.** Tính giá trị hàm số tại $x_0$: **thay $x$ bằng $x_0$** vào công thức. Chú ý dấu khi thay số âm: $(-1)^2=1$, $-3\cdot(-1)=3$.`,
    R`**Bước 1.** $f(0)=0^2-3\cdot0+2=2$.`,
    R`**Bước 2.** $f(-1)=(-1)^2-3\cdot(-1)+2=1+3+2=6$.`,
    R`**Bước 3.** $f(2)=2^2-3\cdot2+2=4-6+2=0$.`,
    R`**Kết luận.** $f(0)=2$, $f(-1)=6$, $f(2)=0$.`,
    R`**Nhận xét.** $f(2)=0$ nghĩa là đồ thị cắt trục hoành tại điểm $(2;0)$.`
   ] },
 { muc: "TH", de: R`Điểm nào thuộc đồ thị $y=2x^2-1$: $A(1;1)$, $B(-1;3)$, $C(0;-1)$?`,
   giai: [
    R`**Phân tích.** Điểm $M(x_0;y_0)$ thuộc đồ thị $y=f(x)$ khi $f(x_0)=y_0$. Thay hoành độ vào, so kết quả với tung độ.`,
    R`**Bước 1.** $A$: $2\cdot1-1=1$ đúng: $A$ thuộc đồ thị.`,
    R`**Bước 2.** $B$: $2\cdot1-1=1\ne3$: $B$ không thuộc.`,
    R`**Bước 3.** $C$: $0-1=-1$ đúng: $C$ thuộc đồ thị.`,
    R`**Kết luận.** $A$ và $C$ thuộc đồ thị; $B$ không thuộc.`
   ] },
 { muc: "VD", de: R`Giá cước taxi: $1$ km đầu $12\,000$ đồng; từ trên $1$ km đến $30$ km: $10\,000$ đồng/km; trên $30$ km: $8\,000$ đồng/km. Viết hàm số tính tiền $f(x)$ theo số km $x$ và tính tiền đi $20$ km, $40$ km.`,
   giai: [
    R`**Phân tích.** Giá cước thay đổi theo từng khoảng quãng đường, nên hàm số được cho bởi **nhiều công thức**. Mỗi khoảng sau cộng dồn tiền của các khoảng trước; tính $f(30)$ để nối khoảng thứ hai sang thứ ba.`,
    R`**Bước 1.** $f(x)=\begin{cases}12\,000x&\text{khi }0<x\le1\\12\,000+10\,000(x-1)&\text{khi }1<x\le30\\302\,000+8\,000(x-30)&\text{khi }x>30\end{cases}$ (vì $f(30)=12\,000+290\,000=302\,000$).`,
    R`**Bước 2.** $f(20)=12\,000+10\,000\cdot19=202\,000$ đồng.`,
    R`**Bước 3.** $f(40)=302\,000+8\,000\cdot10=382\,000$ đồng.`,
    R`**Kết luận.** Đi $20$ km hết $202\,000$ đồng; đi $40$ km hết $382\,000$ đồng.`
   ] }
 ] },
"C6-B15-D35": {
 pp: [
  R`$f$ **đồng biến** trên $K$ nếu $x_1<x_2\Rightarrow f(x_1)<f(x_2)$; **nghịch biến** nếu $x_1<x_2\Rightarrow f(x_1)>f(x_2)$.`,
  R`**Cách xét:** với $x_1\ne x_2$ thuộc $K$, xét dấu $T=\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$: $T>0$ thì đồng biến, $T<0$ thì nghịch biến.`,
  R`**Đọc đồ thị:** đi từ trái sang phải, đồ thị đi lên là đồng biến, đi xuống là nghịch biến.`,
  R`Hàm bậc nhất $y=ax+b$: đồng biến trên $\mathbb R$ khi $a>0$, nghịch biến khi $a<0$.`
 ],
 luuY: [
  R`Nói "$y=\dfrac1x$ nghịch biến trên $\mathbb R\setminus\{0\}$" là sai; chỉ nói nghịch biến trên từng khoảng $(-\infty;0)$ và $(0;+\infty)$.`
 ],
 vd: [
 { muc: "NB", de: R`Hàm số $y=-3x+5$ đồng biến hay nghịch biến trên $\mathbb R$?`,
   giai: [
    R`**Phân tích.** Hàm bậc nhất $y=ax+b$ đồng biến khi $a>0$, nghịch biến khi $a<0$. Chỉ cần nhìn hệ số của $x$.`,
    R`**Bước 1.** Hệ số của $x$ là $a=-3$.`,
    R`**Bước 2.** $a<0$, nên khi $x$ tăng thì $y$ giảm.`,
    R`**Kết luận.** Hàm số $y=-3x+5$ nghịch biến trên $\mathbb R$.`,
    R`**Thử lại.** $x=0$ cho $y=5$; $x=1$ cho $y=2<5$: $x$ tăng, $y$ giảm ✓.`
   ] },
 { muc: "TH", de: R`Xét tính đơn điệu của $y=x^2$ trên $(0;+\infty)$ và $(-\infty;0)$.`,
   giai: [
    R`**Phân tích.** Xét tỉ số $T=\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$ với $x_1\ne x_2$ trong khoảng: $T>0$ thì đồng biến, $T<0$ thì nghịch biến. Rút gọn $T$ rồi xét dấu trên từng khoảng.`,
    R`**Bước 1.** $T=\dfrac{x_2^2-x_1^2}{x_2-x_1}=x_1+x_2$.`,
    R`**Bước 2.** Trên $(0;+\infty)$: $x_1+x_2>0$, đồng biến. Trên $(-\infty;0)$: $x_1+x_2<0$, nghịch biến.`,
    R`**Kết luận.** $y=x^2$ đồng biến trên $(0;+\infty)$, nghịch biến trên $(-\infty;0)$.`
   ] },
 { muc: "TH", de: R`Chứng minh $y=\dfrac1x$ nghịch biến trên $(0;+\infty)$.`,
   giai: [
    R`**Phân tích.** Dùng tỉ số $T$ như trên. Quy đồng hiệu $\dfrac1{x_2}-\dfrac1{x_1}$, rút gọn với $x_2-x_1$.`,
    R`**Bước 1.** $f(x_2)-f(x_1)=\dfrac1{x_2}-\dfrac1{x_1}=\dfrac{x_1-x_2}{x_1x_2}$, nên $T=-\dfrac1{x_1x_2}$.`,
    R`**Bước 2.** $x_1,x_2>0$ nên $T<0$: hàm số nghịch biến trên $(0;+\infty)$.`,
    R`**Kết luận.** $y=\dfrac1x$ nghịch biến trên $(0;+\infty)$.`
   ] },
 { muc: "VD", de: R`Tìm $m$ để $y=(m-2)x+1$ đồng biến trên $\mathbb R$.`,
   giai: [
    R`**Phân tích.** Đây vẫn là hàm bậc nhất, hệ số của $x$ là $m-2$. Đồng biến khi hệ số đó **dương**.`,
    R`**Bước 1.** Hệ số $a=m-2$.`,
    R`**Bước 2.** Đồng biến trên $\mathbb R\iff a>0\iff m-2>0\iff m>2$.`,
    R`**Kết luận.** $m>2$.`,
    R`**Nhận xét.** Khi $m=2$, hàm số thành $y=1$ (hàm hằng), không đồng biến cũng không nghịch biến.`
   ] }
 ] },
"C6-B16-D36": {
 pp: [
  R`$y=ax^2+bx+c$ ($a\ne0$) có đồ thị là parabol, **đỉnh** $I\left(-\dfrac b{2a};-\dfrac\Delta{4a}\right)$, **trục đối xứng** $x=-\dfrac b{2a}$.`,
  R`$a>0$: bề lõm hướng lên; nghịch biến trên $\left(-\infty;-\dfrac b{2a}\right)$, đồng biến trên $\left(-\dfrac b{2a};+\infty\right)$; GTNN là $-\dfrac\Delta{4a}$.`,
  R`$a<0$: bề lõm hướng xuống; đồng biến rồi nghịch biến; GTLN là $-\dfrac\Delta{4a}$.`,
  R`**GTLN, GTNN trên đoạn $[\alpha;\beta]$:** so sánh $f(\alpha)$, $f(\beta)$ và $f$ tại đỉnh (nếu hoành độ đỉnh thuộc đoạn).`,
  R`**Vẽ:** đỉnh, trục đối xứng, giao điểm với $Oy$ $(0;c)$, với $Ox$ (nếu có), thêm một cặp điểm đối xứng.`
 ],
 luuY: [
  R`Tung độ đỉnh nên tính bằng cách thay hoành độ đỉnh vào hàm số (ít nhầm dấu hơn công thức $-\frac\Delta{4a}$).`
 ],
 vd: [
 { muc: "NB", de: R`Cho $y=x^2-4x+3$. Tìm đỉnh, trục đối xứng, lập bảng biến thiên và vẽ đồ thị.`,
   giai: [
    R`**Phân tích.** Vẽ parabol theo thứ tự: tìm **đỉnh** $I\left(-\dfrac b{2a};f\left(-\dfrac b{2a}\right)\right)$, trục đối xứng, chiều bề lõm (dấu của $a$), rồi vài điểm đặc biệt (giao với hai trục và điểm đối xứng của chúng).`,
    R`**Bước 1.** $x_I=-\dfrac{-4}{2}=2$; $y_I=4-8+3=-1$. Đỉnh $I(2;-1)$, trục $x=2$.`,
    R`**Bước 2.** $a=1>0$: Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y$/2}{$-\infty$,$2$,$+\infty$}
\tkzTabVar{+/$+\infty$,-/$-1$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`**Bước 3.** Giao $Oy$: $(0;3)$; giao $Ox$: $x^2-4x+3=0\iff x=1$ hoặc $x=3$. Điểm đối xứng với $(0;3)$ qua trục là $(4;3)$.`,
    R`**Kết luận.** Đỉnh $I(2;-1)$, trục $x=2$; hàm nghịch biến trên $(-\infty;2)$, đồng biến trên $(2;+\infty)$; đồ thị cắt $Ox$ tại $(1;0)$, $(3;0)$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.7,>=stealth]
\draw[->] (-1,0)--(5,0) node[below]{$x$}; \draw[->] (0,-1.8)--(0,4.5) node[left]{$y$};
\draw[thick,smooth,samples=100,domain=-0.3:4.3,blue] plot(\x,{\x*\x-4*\x+3});
\draw[dashed] (2,-1)--(2,4); \fill (2,-1) circle (2pt); \fill (1,0) circle (2pt); \fill (3,0) circle (2pt); \fill (0,3) circle (2pt); \fill (4,3) circle (2pt);
\node[below right] at (2,-1){$I(2;-1)$}; \node[above left] at (1,0){$1$}; \node[above right] at (3,0){$3$}; \node[left] at (0,3){$3$};
\node[below left] at (0,0){$O$}; \node[right] at (2,3.8){$x=2$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Cho $y=-2x^2+4x+1$. Tìm khoảng đồng biến, nghịch biến và giá trị lớn nhất.`,
   giai: [
    R`**Phân tích.** $a<0$ nên parabol có bề lõm hướng xuống: đồng biến **trước** đỉnh, nghịch biến **sau** đỉnh, GTLN đạt tại đỉnh.`,
    R`**Bước 1.** $x_I=-\dfrac4{2\cdot(-2)}=1$; $y_I=-2+4+1=3$.`,
    R`**Bước 2.** $a=-2<0$: Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y$/2}{$-\infty$,$1$,$+\infty$}
\tkzTabVar{-/$-\infty$,+/$3$,-/$-\infty$}
\end{tikzpicture}\end{center}`,
    R`**Bước 3.** Đồng biến trên $(-\infty;1)$, nghịch biến trên $(1;+\infty)$; GTLN bằng $3$ khi $x=1$.`,
    R`**Kết luận.** Đồng biến trên $(-\infty;1)$, nghịch biến trên $(1;+\infty)$; GTLN bằng $3$.`
   ] },
 { muc: "VD", de: R`Tìm GTLN, GTNN của $y=x^2-4x+3$ trên đoạn $[0;3]$ và trên đoạn $[3;5]$.`,
   giai: [
    R`**Phân tích.** Trên một đoạn, GTLN, GTNN chỉ có thể đạt tại **đỉnh** (nếu hoành độ đỉnh thuộc đoạn) hoặc tại **hai đầu mút**. Kiểm tra đỉnh có nằm trong đoạn không trước.`,
    R`**Bước 1.** Trên $[0;3]$: hoành độ đỉnh $2\in[0;3]$. $f(2)=-1$, $f(0)=3$, $f(3)=0$. GTNN $=-1$ (tại $x=2$), GTLN $=3$ (tại $x=0$).`,
    R`**Bước 2.** Trên $[3;5]$: hàm đồng biến (vì $3>2$). GTNN $=f(3)=0$, GTLN $=f(5)=25-20+3=8$.`,
    R`**Kết luận.** Trên $[0;3]$: GTNN $-1$, GTLN $3$. Trên $[3;5]$: GTNN $0$, GTLN $8$.`
   ] }
 ] },
"C6-B16-D37": {
 pp: [
  R`**Xác định parabol** $y=ax^2+bx+c$: mỗi dữ kiện cho một phương trình theo $a$, $b$, $c$: đi qua điểm $(x_0;y_0)$; đỉnh $I(x_I;y_I)$ cho $-\dfrac b{2a}=x_I$ và $f(x_I)=y_I$; trục đối xứng...`,
  R`**Dấu từ đồ thị:** bề lõm lên thì $a>0$, xuống thì $a<0$; giao $Oy$ tại $(0;c)$ nên $c$ cùng dấu tung độ giao điểm.`,
  R`Dấu $b$: từ $x_I=-\dfrac b{2a}$. Đỉnh bên phải $Oy$ ($x_I>0$) thì $a$, $b$ **trái dấu**; bên trái thì **cùng dấu**.`
 ],
 luuY: [
  R`Kết luận dấu $b$ chỉ từ vị trí đỉnh mà quên xét dấu $a$.`
 ],
 vd: [
 { muc: "TH", de: R`Tìm parabol $y=ax^2+bx+c$ đi qua $A(0;-1)$, $B(1;2)$, $C(-1;0)$.`,
   giai: [
    R`**Phân tích.** Ba ẩn $a,b,c$ cần ba điều kiện: mỗi điểm thuộc parabol cho một phương trình. Điểm nằm trên trục tung ($x=0$) cho ngay $c$.`,
    R`**Bước 1.** Qua $A$: $c=-1$. Qua $B$: $a+b-1=2\iff a+b=3$. Qua $C$: $a-b-1=0\iff a-b=1$.`,
    R`**Bước 2.** Giải: $a=2$, $b=1$. Vậy $y=2x^2+x-1$.`,
    R`**Kết luận.** $y=2x^2+x-1$.`,
    R`**Thử lại.** $x=1$: $2+1-1=2$ ✓; $x=-1$: $2-1-1=0$ ✓.`
   ] },
 { muc: "TH", de: R`Tìm $a$, $b$ để parabol $y=ax^2+bx+2$ có đỉnh $I(1;0)$.`,
   giai: [
    R`**Phân tích.** Đỉnh $I(1;0)$ cho **hai** điều kiện: hoành độ đỉnh $-\dfrac b{2a}=1$, và $I$ thuộc parabol.`,
    R`**Bước 1.** $-\dfrac b{2a}=1\iff b=-2a$. Đỉnh thuộc parabol: $a+b+2=0$.`,
    R`**Bước 2.** Thay $b=-2a$: $-a+2=0\iff a=2$, $b=-4$. Vậy $y=2x^2-4x+2=2(x-1)^2$.`,
    R`**Kết luận.** $a=2$, $b=-4$.`
   ] },
 { muc: "VD", de: R`Parabol $y=ax^2+bx+c$ có dạng như hình (bề lõm hướng xuống, cắt $Oy$ phía trên $O$, đỉnh nằm bên phải $Oy$). Xác định dấu $a$, $b$, $c$.`,
   giai: [
    R`**Phân tích.** Đọc từ hình ba thông tin: chiều bề lõm (dấu $a$), giao điểm với $Oy$ (là $c$), vị trí đỉnh so với $Oy$ (dấu $-\dfrac b{2a}$).`,
    R`**Bước 1.** Bề lõm hướng xuống: $a<0$.`,
    R`**Bước 2.** Cắt $Oy$ tại điểm có tung độ dương: $c>0$.`,
    R`**Bước 3.** Đỉnh bên phải: $-\dfrac b{2a}>0$; vì $a<0$ nên $b>0$.`,
    R`**Kết luận.** $a<0$, $b>0$, $c>0$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8,>=stealth]
\draw[->] (-1.5,0)--(3.5,0) node[below]{$x$}; \draw[->] (0,-1.5)--(0,2.8) node[left]{$y$};
\draw[thick,smooth,samples=100,domain=-0.8:2.8,blue] plot(\x,{-\x*\x+2*\x+1});
\fill (1,2) circle (2pt); \fill (0,1) circle (2pt); \draw[dashed] (1,2)--(1,0);
\node[above] at (1,2){$I$}; \node[left] at (0,1){$c$}; \node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Đồ thị minh hoạ: $y=-x^2+2x+1$ ($a=-1<0$, $b=2>0$, $c=1>0$).` }
 ] },
"C6-B16-D38": {
 pp: [
  R`**Bước 1.** Chọn hệ trục thuận tiện (thường đặt đỉnh hoặc tâm đối xứng trên $Oy$).`,
  R`**Bước 2.** Lập hàm bậc hai từ dữ kiện (điểm đã biết, công thức chuyển động $h(t)=-\dfrac12gt^2+v_0t+h_0$, diện tích, doanh thu...).`,
  R`**Bước 3.** Giá trị lớn nhất, nhỏ nhất đạt tại **đỉnh**; thời điểm chạm đất là nghiệm dương của $h(t)=0$.`,
  R`**Bước 4.** Đối chiếu điều kiện thực tế (thời gian, độ dài dương...) và trả lời có đơn vị.`
 ],
 luuY: [
  R`Lấy cả nghiệm âm của thời gian, độ dài.`
 ],
 vd: [
 { muc: "VD", de: R`Một cổng hình parabol có chiều cao $8$ m, khoảng cách hai chân cổng $8$ m. Tính chiều cao của cổng tại điểm cách trục đối xứng $2$ m.`,
   giai: [
    R`**Phân tích.** Bài toán thực tế về parabol: **tự chọn hệ trục** sao cho trục đối xứng là $Oy$, chân cổng trên $Ox$. Khi đó parabol có dạng $y=ax^2+c$, chỉ còn tìm $a$.`,
    R`**Bước 1.** Đặt hệ trục: hai chân $(-4;0)$, $(4;0)$, đỉnh $(0;8)$. Parabol $y=ax^2+8$.`,
    R`**Bước 2.** Qua $(4;0)$: $16a+8=0\iff a=-\dfrac12$. Vậy $y=-\dfrac12x^2+8$.`,
    R`**Bước 3.** Tại $x=2$: $y=-2+8=6$ m.`,
    R`**Kết luận.** Tại điểm cách trục $2$ m, cổng cao $6$ m.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.4,>=stealth]
\draw[->] (-5.5,0)--(5.5,0) node[below]{$x$}; \draw[->] (0,-0.5)--(0,10.5) node[left]{$y$};
\draw[thick,smooth,samples=100,domain=-4:4,blue] plot(\x,{-0.5*\x*\x+8});
\draw[dashed] (2,0)--(2,6); \fill (2,6) circle (3pt);
\node[below] at (-4,0){$-4$}; \node[below] at (4,0){$4$}; \node[above left] at (0,8){$8$}; \node[right] at (2.1,6.3){$(2;6)$};
\end{tikzpicture}` },
 { muc: "VD", de: R`Một quả bóng được ném lên, độ cao $h(t)=-5t^2+20t+1$ (m) sau $t$ giây. Tìm độ cao lớn nhất và thời điểm bóng chạm đất.`,
   giai: [
    R`**Phân tích.** Độ cao lớn nhất ứng với **đỉnh** parabol ($a=-5<0$). Bóng chạm đất khi $h(t)=0$; chỉ lấy nghiệm $t>0$.`,
    R`**Bước 1.** Đỉnh: $t=-\dfrac{20}{2\cdot(-5)}=2$; $h(2)=-20+40+1=21$ m. Độ cao lớn nhất $21$ m tại $t=2$ s.`,
    R`**Bước 2.** Chạm đất: $-5t^2+20t+1=0\iff5t^2-20t-1=0$; $t=\dfrac{20\pm\sqrt{420}}{10}$.`,
    R`**Bước 3.** Lấy nghiệm dương: $t=\dfrac{20+\sqrt{420}}{10}\approx4{,}05$ s.`,
    R`**Kết luận.** Bóng cao nhất $21$ m lúc $t=2$ s và chạm đất sau khoảng $4{,}05$ s.`
   ] },
 { muc: "VD", de: R`Dùng $40$ m lưới rào một mảnh vườn hình chữ nhật, một cạnh tựa vào bức tường (không cần rào). Tìm kích thước để diện tích lớn nhất.`,
   giai: [
    R`**Phân tích.** Gọi một cạnh là $x$, biểu diễn cạnh kia qua chiều dài lưới; diện tích là hàm bậc hai của $x$ với $a<0$, lớn nhất tại đỉnh.`,
    R`**Bước 1.** Gọi $x$ (m) là cạnh vuông góc với tường ($0<x<20$); cạnh song song tường dài $40-2x$.`,
    R`**Bước 2.** $S=x(40-2x)=-2x^2+40x$; đỉnh tại $x=-\dfrac{40}{2\cdot(-2)}=10$.`,
    R`**Bước 3.** $S_{\max}=10\cdot20=200$ m² khi hai cạnh vuông góc tường $10$ m, cạnh song song tường $20$ m.`,
    R`**Kết luận.** Cạnh vuông góc tường $10$ m, cạnh song song tường $20$ m; diện tích lớn nhất $200$ m².`,
    R`**Thử lại.** Lưới dùng $10+10+20=40$ m ✓.`
   ] }
 ] },
"C6-B17-D39": {
 pp: [
  R`$f(x)=ax^2+bx+c$, $\Delta=b^2-4ac$.`,
  R`$\Delta<0$: $f(x)$ **cùng dấu** $a$ với mọi $x$.`,
  R`$\Delta=0$: $f(x)$ cùng dấu $a$ với mọi $x\ne-\dfrac b{2a}$, bằng $0$ tại $x=-\dfrac b{2a}$.`,
  R`$\Delta>0$, hai nghiệm $x_1<x_2$: **"trong trái, ngoài cùng"**: trái dấu $a$ khi $x_1<x<x_2$, cùng dấu $a$ khi $x<x_1$ hoặc $x>x_2$.`,
  R`**Tích, thương:** tìm nghiệm của từng nhân tử (tử, mẫu), xếp vào một bảng xét dấu, nhân dấu theo cột; nghiệm của mẫu ghi $\|$ (không xác định).`
 ],
 luuY: [
  R`Quên rằng "trong trái ngoài cùng" là so với dấu của $a$, không phải luôn "trong âm ngoài dương".`
 ],
 vd: [
 { muc: "NB", de: R`Xét dấu $f(x)=x^2-5x+6$.`,
   giai: [
    R`**Phân tích.** Tam thức có hai nghiệm phân biệt: **"trong trái, ngoài cùng"**, tức là giữa hai nghiệm trái dấu với $a$, ngoài hai nghiệm cùng dấu với $a$.`,
    R`**Bước 1.** $f(x)=0\iff x=2$ hoặc $x=3$; $a=1>0$.`,
    R`**Bước 2.** Bảng xét dấu:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.4,espcl=2]{$x$/0.8,$f(x)$/0.8}{$-\infty$,$2$,$3$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,}
\end{tikzpicture}\end{center}`,
    R`**Bước 3.** $f(x)>0$ khi $x<2$ hoặc $x>3$; $f(x)<0$ khi $2<x<3$.`,
    R`**Thử lại.** $f(2{,}5)=6{,}25-12{,}5+6=-0{,}25<0$ ✓ (nằm giữa hai nghiệm).`
   ] },
 { muc: "NB", de: R`Xét dấu $f(x)=-x^2+2x-3$.`,
   giai: [
    R`**Phân tích.** Tam thức bậc hai vô nghiệm ($\Delta<0$) thì **luôn cùng dấu với $a$**. Tính $\Delta'$ (vì $b=2$ chẵn) và xét dấu $a$.`,
    R`**Bước 1.** $a=-1$, $b'=1$, $c=-3$: $\Delta'=b'^2-ac=1-3=-2<0$.`,
    R`**Bước 2.** $\Delta'<0$ nên $f(x)$ cùng dấu với $a=-1<0$ với mọi $x$.`,
    R`**Kết luận.** $f(x)<0$ với mọi $x\in\mathbb R$.`,
    R`**Thử lại.** $f(0)=-3<0$, $f(1)=-2<0$ ✓.`
   ] },
 { muc: "TH", de: R`Xét dấu $f(x)=4x^2-4x+1$.`,
   giai: [
    R`**Phân tích.** $\Delta'=0$: tam thức có nghiệm kép, viết được thành $a(x-x_0)^2$, cùng dấu với $a$ ở mọi điểm trừ nghiệm kép.`,
    R`**Bước 1.** $\Delta'=(-2)^2-4\cdot1=0$: nghiệm kép $x_0=\dfrac12$.`,
    R`**Bước 2.** $f(x)=4x^2-4x+1=(2x-1)^2\ge0$, bằng $0$ chỉ khi $x=\dfrac12$.`,
    R`**Kết luận.** $f(x)>0$ với mọi $x\ne\dfrac12$; $f\left(\dfrac12\right)=0$.`
   ] },
 { muc: "VD", de: R`Xét dấu $g(x)=\dfrac{x^2-4}{x^2-4x+3}$.`,
   giai: [
    R`**Phân tích.** Biểu thức dạng thương: xét dấu riêng tử và mẫu, rồi lập **bảng xét dấu chung**. Tại nghiệm của mẫu, $g$ không xác định (ghi hai gạch).`,
    R`**Bước 1.** Tử $=0\iff x=\pm2$; mẫu $=0\iff x=1$ hoặc $x=3$ (tại đó $g$ không xác định).`,
    R`**Bước 2.** Xét dấu từng nhân tử rồi lấy thương:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=3.6,espcl=1.5]{$x$/0.8,$x^2-4$/0.8,$x^2-4x+3$/0.8,$g(x)$/0.8}{$-\infty$,$-2$,$1$,$2$,$3$,$+\infty$}
\tkzTabLine{,+,0,-,t,-,0,+,t,+,}
\tkzTabLine{,+,t,+,0,-,t,-,0,+,}
\tkzTabLine{,+,0,-,d,+,0,-,d,+,}
\end{tikzpicture}\end{center}`,
    R`**Bước 3.** $g(x)>0$ trên $(-\infty;-2)\cup(1;2)\cup(3;+\infty)$; $g(x)<0$ trên $(-2;1)\cup(2;3)$.`,
    R`**Thử lại.** $g(0)=\dfrac{-4}{3}<0$ ✓, khớp với $0\in(-2;1)$.`
   ] }
 ] },
"C6-B17-D40": {
 pp: [
  R`**Bước 1.** Đưa về dạng $f(x)>0$ ($\ge,<,\le$) với $f$ là tam thức bậc hai.`,
  R`**Bước 2.** Tìm nghiệm, xét dấu $f(x)$ ("trong trái, ngoài cùng").`,
  R`**Bước 3.** Chọn các khoảng phù hợp; có dấu "$=$" thì lấy cả nghiệm (đoạn đóng).`,
  R`**Hệ:** giải từng bất phương trình rồi lấy giao (vẽ trên trục số).`,
  R`**$f(x)>0$ với mọi $x$** $\iff a>0$ và $\Delta<0$; **$f(x)\ge0$ với mọi $x$** $\iff a>0$ và $\Delta\le0$.`
 ],
 luuY: [
  R`Chia hai vế cho số âm mà quên đổi chiều.`
 ],
 vd: [
 { muc: "NB", de: R`Giải $x^2-3x-4<0$.`,
   giai: [
    R`**Phân tích.** Tìm nghiệm của tam thức, rồi dùng quy tắc "trong trái, ngoài cùng": $a>0$ nên tam thức **âm giữa hai nghiệm**.`,
    R`**Bước 1.** Nghiệm $x=-1$, $x=4$; $a>0$ nên âm ở giữa hai nghiệm.`,
    R`**Bước 2.** Tập nghiệm $S=(-1;4)$.`,
    R`**Thử lại.** $x=0$: $-4<0$ ✓; $x=5$: $25-15-4=6>0$, đúng là ngoài tập nghiệm ✓.`
   ] },
 { muc: "TH", de: R`Giải $-2x^2+3x+5\ge0$.`,
   giai: [
    R`**Phân tích.** $a<0$: có thể nhân hai vế với $-1$ cho dễ (nhớ đổi chiều), rồi giải như trường hợp $a>0$.`,
    R`**Bước 1.** Nhân $-1$, đổi chiều: $2x^2-3x-5\le0$. Nghiệm $x=-1$, $x=\dfrac52$.`,
    R`**Bước 2.** $S=\left[-1;\dfrac52\right]$.`,
    R`**Kết luận.** $S=\left[-1;\dfrac52\right]$.`
   ] },
 { muc: "TH", de: R`Giải hệ $\begin{cases}x^2-4x+3>0\\x^2-6x+8\le0\end{cases}$.`,
   giai: [
    R`**Phân tích.** Giải riêng từng bất phương trình, rồi lấy **giao** hai tập nghiệm (vẽ trên trục số cho chắc).`,
    R`**Bước 1.** $x^2-4x+3>0\iff x<1$ hoặc $x>3$.`,
    R`**Bước 2.** $x^2-6x+8\le0\iff2\le x\le4$.`,
    R`**Bước 3.** Giao: $S=(3;4]$.`,
    R`**Kết luận.** $S=(3;4]$.`,
    R`**Thử lại.** $x=4$: $16-16+3=3>0$ ✓ và $16-24+8=0\le0$ ✓.`
   ] },
 { muc: "VD", de: R`Tìm tập xác định của $y=\sqrt{-x^2+x+6}$.`,
   giai: [
    R`**Phân tích.** Căn xác định khi biểu thức dưới căn $\ge0$: đưa về một bất phương trình bậc hai.`,
    R`**Bước 1.** Điều kiện $-x^2+x+6\ge0\iff x^2-x-6\le0\iff-2\le x\le3$.`,
    R`**Bước 2.** $D=[-2;3]$.`,
    R`**Kết luận.** $D=[-2;3]$.`
   ] },
 { muc: "VD", de: R`Tìm $m$ để $x^2-2mx+m+2>0$ với mọi $x\in\mathbb R$.`,
   giai: [
    R`**Phân tích.** Tam thức dương với mọi $x$ khi $a>0$ và $\Delta<0$ (đồ thị nằm hoàn toàn phía trên $Ox$). Ở đây $a=1>0$ sẵn, chỉ cần $\Delta'<0$.`,
    R`**Bước 1.** $a=1>0$, cần $\Delta'=m^2-(m+2)<0\iff m^2-m-2<0$.`,
    R`**Bước 2.** $m^2-m-2=0\iff m=-1$ hoặc $m=2$; nên $-1<m<2$.`,
    R`**Kết luận.** $-1<m<2$.`,
    R`**Thử lại.** $m=0$: $x^2+2>0$ đúng mọi $x$ ✓; $m=2$: $x^2-4x+4=(x-2)^2$ bằng $0$ tại $x=2$, bị loại ✓.`
   ] }
 ] },
"C6-B17-D41": {
 pp: [
  R`**Bước 1.** Gọi ẩn, ghi điều kiện thực tế ($x>0$, $x$ nguyên...).`,
  R`**Bước 2.** Lập bất phương trình bậc hai từ yêu cầu ("có lãi" là $P>0$, "không thấp hơn" là $\ge$, "không quá" là $\le$...).`,
  R`**Bước 3.** Giải, giao với điều kiện thực tế, trả lời có đơn vị.`
 ],
 luuY: [
  R`Quên giao với điều kiện thực tế (ví dụ bề rộng viền phải dương).`
 ],
 vd: [
 { muc: "VD", de: R`Bóng ném lên có độ cao $h(t)=-5t^2+20t+1$ (m). Trong khoảng thời gian nào bóng ở độ cao ít nhất $16$ m?`,
   giai: [
    R`**Phân tích.** "Độ cao ít nhất $16$ m" là bất phương trình $h(t)\ge16$. Chuyển vế, chia cho $-5$ (đổi chiều) để được tam thức đơn giản.`,
    R`**Bước 1.** $-5t^2+20t+1\ge16\iff-5t^2+20t-15\ge0\iff t^2-4t+3\le0$.`,
    R`**Bước 2.** $\iff1\le t\le3$. Bóng ở độ cao từ $16$ m trở lên từ giây thứ $1$ đến giây thứ $3$ (trong $2$ giây).`,
    R`**Kết luận.** Bóng ở độ cao ít nhất $16$ m khi $1\le t\le3$ (giây).`
   ] },
 { muc: "VD", de: R`Lợi nhuận khi sản xuất $x$ sản phẩm là $P(x)=-x^2+200x-7500$ (nghìn đồng). Sản xuất bao nhiêu sản phẩm thì có lãi?`,
   giai: [
    R`**Phân tích.** "Có lãi" nghĩa là $P(x)>0$. Giải bất phương trình bậc hai, rồi chú ý $x$ là **số nguyên** (số sản phẩm).`,
    R`**Bước 1.** Có lãi $\iff P(x)>0\iff x^2-200x+7500<0$.`,
    R`**Bước 2.** $x^2-200x+7500=0\iff x=50$ hoặc $x=150$; nên $50<x<150$.`,
    R`**Bước 3.** Vậy sản xuất từ $51$ đến $149$ sản phẩm thì có lãi.`,
    R`**Kết luận.** Sản xuất từ $51$ đến $149$ sản phẩm thì có lãi.`,
    R`**Nhận xét.** Tại $x=50$ hoặc $x=150$, lợi nhuận bằng $0$: hoà vốn.`
   ] },
 { muc: "VD", de: R`Một tấm ảnh $20\times30$ cm được lồng vào khung có viền rộng đều $x$ cm. Tìm $x$ để diện tích cả khung không vượt quá $1000$ cm².`,
   giai: [
    R`**Phân tích.** Diện tích cả khung là tích hai kích thước (mỗi chiều thêm $2x$). Lập bất phương trình bậc hai và kết hợp điều kiện $x>0$.`,
    R`**Bước 1.** Kích thước cả khung $(20+2x)\times(30+2x)$, điều kiện $x>0$.`,
    R`**Bước 2.** $(20+2x)(30+2x)\le1000\iff4x^2+100x-400\le0\iff x^2+25x-100\le0$.`,
    R`**Bước 3.** Nghiệm $x=\dfrac{-25\pm\sqrt{1025}}2$; nên $\dfrac{-25-5\sqrt{41}}2\le x\le\dfrac{-25+5\sqrt{41}}2\approx3{,}51$.`,
    R`**Bước 4.** Kết hợp $x>0$: $0<x\le\dfrac{-25+5\sqrt{41}}2\approx3{,}51$ cm.`,
    R`**Kết luận.** Viền rộng không quá khoảng $3{,}51$ cm.`
   ] }
 ] },
"C6-B18-D42": {
 pp: [
  R`$\sqrt{f(x)}=\sqrt{g(x)}\iff\begin{cases}g(x)\ge0\\f(x)=g(x)\end{cases}$ (chọn biểu thức đơn giản hơn để đặt điều kiện $\ge0$).`,
  R`**Cách làm:** bình phương hai vế, giải phương trình $f(x)=g(x)$, rồi **thử lại** điều kiện để loại nghiệm ngoại lai.`
 ],
 luuY: [
  R`Quên kiểm tra điều kiện, giữ cả nghiệm làm biểu thức dưới căn âm.`
 ],
 vd: [
 { muc: "NB", de: R`Giải $\sqrt{2x-3}=\sqrt{x+1}$.`,
   giai: [
    R`**Phân tích.** Dạng $\sqrt{f(x)}=\sqrt{g(x)}$: bình phương hai vế được $f(x)=g(x)$, rồi **thử lại** để chắc các biểu thức dưới căn không âm.`,
    R`**Bước 1.** Bình phương: $2x-3=x+1\iff x=4$.`,
    R`**Thử lại.** $2\cdot4-3=5\ge0$. Vậy $x=4$.`
   ] },
 { muc: "TH", de: R`Giải $\sqrt{x^2-3x+1}=\sqrt{x-2}$.`,
   giai: [
    R`**Phân tích.** Chỉ cần đặt điều kiện cho **biểu thức đơn giản hơn** ($x-2\ge0$): khi $f(x)=g(x)$ và $g(x)\ge0$ thì $f(x)\ge0$ tự động.`,
    R`**Bước 1.** Điều kiện $x-2\ge0\iff x\ge2$.`,
    R`**Bước 2.** Bình phương: $x^2-3x+1=x-2\iff x^2-4x+3=0\iff x=1$ hoặc $x=3$.`,
    R`**Bước 3.** $x=1$ không thoả $x\ge2$; $x=3$ thoả. Vậy $x=3$.`,
    R`**Thử lại.** $x=3$: $\sqrt{9-9+1}=1=\sqrt{3-2}$ ✓.`
   ] },
 { muc: "TH", de: R`Giải $\sqrt{x^2+x-1}=\sqrt{2x+1}$.`,
   giai: [
    R`**Phân tích.** Như trên: điều kiện cho vế bậc nhất $2x+1\ge0$, bình phương, giải bậc hai rồi đối chiếu điều kiện.`,
    R`**Bước 1.** Điều kiện $2x+1\ge0\iff x\ge-\dfrac12$.`,
    R`**Bước 2.** $x^2+x-1=2x+1\iff x^2-x-2=0\iff x=-1$ hoặc $x=2$.`,
    R`**Bước 3.** Loại $x=-1$ (khi đó $2x+1=-1<0$). Vậy $x=2$.`,
    R`**Kết luận.** $x=2$.`,
    R`**Thử lại.** $\sqrt{4+2-1}=\sqrt5=\sqrt{2\cdot2+1}$ ✓.`
   ] }
 ] },
"C6-B18-D43": {
 pp: [
  R`$\sqrt{f(x)}=g(x)\iff\begin{cases}g(x)\ge0\\f(x)=g^2(x)\end{cases}$.`,
  R`**Cách làm:** đặt điều kiện $g(x)\ge0$, bình phương, giải phương trình bậc hai, đối chiếu điều kiện.`,
  R`**Thực tế:** độ dài cạnh huyền, quãng đường đi chéo thường có dạng $\sqrt{x^2+a^2}$; lập phương trình rồi giải như trên.`
 ],
 luuY: [
  R`Quên điều kiện $g(x)\ge0$ (vế phải không âm) nên nhận cả nghiệm sai.`
 ],
 vd: [
 { muc: "NB", de: R`Giải $\sqrt{x+2}=x$.`,
   giai: [
    R`**Phân tích.** Dạng $\sqrt{f(x)}=g(x)$: vế trái không âm nên **bắt buộc** $g(x)\ge0$. Đặt điều kiện đó, rồi bình phương hai vế.`,
    R`**Bước 1.** Điều kiện $x\ge0$. Bình phương: $x+2=x^2\iff x^2-x-2=0\iff x=2$ hoặc $x=-1$.`,
    R`**Bước 2.** Loại $x=-1$. Vậy $x=2$.`,
    R`**Thử lại.** $\sqrt{2+2}=2$ ✓. (Với $x=-1$: $\sqrt1=1\ne-1$, đúng là nghiệm ngoại lai.)`
   ] },
 { muc: "TH", de: R`Giải $\sqrt{2x+7}=x+2$.`,
   giai: [
    R`**Phân tích.** Điều kiện vế phải $x+2\ge0$. Bình phương vế phải nhớ dùng hằng đẳng thức $(x+2)^2=x^2+4x+4$.`,
    R`**Bước 1.** Điều kiện $x\ge-2$. Bình phương: $2x+7=x^2+4x+4\iff x^2+2x-3=0\iff x=1$ hoặc $x=-3$.`,
    R`**Bước 2.** Loại $x=-3$. Vậy $x=1$ (thử lại: $\sqrt9=3=1+2$).`,
    R`**Kết luận.** $x=1$.`
   ] },
 { muc: "VD", de: R`Điểm $A$ cách bờ sông thẳng $3$ km, $H$ là hình chiếu của $A$ trên bờ. Điểm $B$ trên bờ cách $H$ $5$ km. Tìm điểm $M$ trên đoạn $HB$ sao cho $AM=MB$.`,
   giai: [
    R`**Phân tích.** Đặt $HM=x$; $AM$ là cạnh huyền của tam giác vuông $AHM$, $MB=5-x$. Điều kiện $AM=MB$ trở thành phương trình chứa căn dạng $\sqrt{f(x)}=g(x)$.`,
    R`**Bước 1.** Đặt $HM=x$ ($0\le x\le5$): $AM=\sqrt{x^2+9}$, $MB=5-x$.`,
    R`**Bước 2.** $\sqrt{x^2+9}=5-x$ (vế phải $\ge0$ vì $x\le5$). Bình phương: $x^2+9=25-10x+x^2\iff x=1{,}6$.`,
    R`**Bước 3.** Vậy $M$ cách $H$ $1{,}6$ km (khi đó $AM=MB=3{,}4$ km).`,
    R`**Kết luận.** Điểm $M$ cách $H$ $1{,}6$ km.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8]
\draw[thick] (-0.5,0)--(5.5,0);
\draw (0,0)--(0,3)--(1.6,0); \draw (0,0.25)--(0.25,0.25)--(0.25,0);
\fill (0,3) circle (2pt); \fill (1.6,0) circle (2pt); \fill (5,0) circle (2pt);
\node[above] at (0,3){$A$}; \node[below] at (0,0){$H$}; \node[below] at (1.6,0){$M$}; \node[below] at (5,0){$B$};
\node[left] at (0,1.5){$3$}; \node[below] at (0.8,0){$x$};
\end{tikzpicture}` }
 ] }
});
/* ---------- Chương VII · Phương pháp toạ độ trong mặt phẳng ---------- */
Object.assign(D, {
"C7-B19-D44": {
 pp: [
  R`Đường thẳng $\Delta:\ ax+by+c=0$ có **vectơ pháp tuyến** $\vec n=(a;b)$, **vectơ chỉ phương** $\vec u=(-b;a)$ hoặc $(b;-a)$.`,
  R`Phương trình tham số $\begin{cases}x=x_0+u_1t\\y=y_0+u_2t\end{cases}$ cho ngay $\vec u=(u_1;u_2)$ và điểm $(x_0;y_0)$.`,
  R`**Hệ số góc:** $k=-\dfrac ab$ ($b\ne0$); nếu $\vec u=(u_1;u_2)$ với $u_1\ne0$ thì $k=\dfrac{u_2}{u_1}$.`,
  R`$\vec n$ và $\vec u$ luôn vuông góc: từ cái này suy ra cái kia bằng cách đổi chỗ hai toạ độ và đổi dấu một toạ độ.`
 ],
 luuY: [
  R`Lấy nhầm $(a;b)$ làm vectơ chỉ phương của $ax+by+c=0$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $d:\ 2x-3y+5=0$. Tìm một vectơ pháp tuyến, một vectơ chỉ phương và hệ số góc của $d$.`,
   giai: [ R`$\vec n=(2;-3)$; $\vec u=(3;2)$; $k=-\dfrac2{-3}=\dfrac23$.` ] },
 { muc: "TH", de: R`Cho $d:\ \begin{cases}x=1+2t\\y=3-t\end{cases}$. Tìm vectơ chỉ phương, vectơ pháp tuyến và hệ số góc.`,
   giai: [ R`$\vec u=(2;-1)$; $\vec n=(1;2)$; $k=\dfrac{-1}2$.` ] },
 { muc: "TH", de: R`Tìm vectơ chỉ phương, vectơ pháp tuyến và hệ số góc của đường thẳng $AB$ với $A(1;2)$, $B(4;8)$.`,
   giai: [ R`$\overrightarrow{AB}=(3;6)$, chọn $\vec u=(1;2)$.`, R`$\vec n=(2;-1)$; $k=\dfrac21=2$.` ] }
 ] },
"C7-B19-D45": {
 pp: [
  R`**Qua $M(x_0;y_0)$, có pháp tuyến $\vec n=(a;b)$:** $a(x-x_0)+b(y-y_0)=0$.`,
  R`**Qua $M$, có chỉ phương $\vec u=(u_1;u_2)$:** tham số $x=x_0+u_1t$, $y=y_0+u_2t$; hoặc đổi $\vec u$ thành $\vec n$ để viết dạng tổng quát.`,
  R`**Qua hai điểm $A$, $B$:** $\vec u=\overrightarrow{AB}$. **Đoạn chắn** qua $(a;0)$, $(0;b)$: $\dfrac xa+\dfrac yb=1$.`,
  R`**Song song** với $ax+by+c=0$: dạng $ax+by+c'=0$; **vuông góc**: dạng $bx-ay+c'=0$; thay toạ độ điểm đã biết để tìm $c'$.`,
  R`**Trong tam giác:** đường cao từ $A$ có $\vec n=\overrightarrow{BC}$; trung tuyến đi qua $A$ và trung điểm $BC$; trung trực $BC$ qua trung điểm $BC$, có $\vec n=\overrightarrow{BC}$.`
 ],
 luuY: [
  R`Đường song song với $d$ phải có $c'\ne c$ (khác $d$).`
 ],
 vd: [
 { muc: "NB", de: R`Viết phương trình đường thẳng qua $A(1;-2)$ có vectơ pháp tuyến $\vec n=(3;4)$.`,
   giai: [ R`$3(x-1)+4(y+2)=0\iff3x+4y+5=0$.` ] },
 { muc: "TH", de: R`Viết phương trình tham số và tổng quát của đường thẳng $AB$ với $A(1;2)$, $B(3;-2)$.`,
   giai: [
    R`$\overrightarrow{AB}=(2;-4)$, chọn $\vec u=(1;-2)$: tham số $\begin{cases}x=1+t\\y=2-2t\end{cases}$.`,
    R`$\vec n=(2;1)$: $2(x-1)+(y-2)=0\iff2x+y-4=0$ (thử $B$: $6-2-4=0$).`
   ] },
 { muc: "TH", de: R`Cho $d:\ x-2y+3=0$, $M(2;1)$. Viết phương trình đường thẳng qua $M$ và a) song song với $d$; b) vuông góc với $d$.`,
   giai: [
    R`a) Dạng $x-2y+c=0$; qua $M$: $2-2+c=0\iff c=0$. Vậy $x-2y=0$.`,
    R`b) Dạng $2x+y+c=0$; qua $M$: $4+1+c=0\iff c=-5$. Vậy $2x+y-5=0$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ với $A(1;4)$, $B(-1;0)$, $C(3;2)$. Viết phương trình đường cao $AH$, trung tuyến $AM$, đường trung trực của $BC$.`,
   giai: [
    R`$\overrightarrow{BC}=(4;2)$, chọn $\vec n=(2;1)$. Đường cao $AH$: $2(x-1)+(y-4)=0\iff2x+y-6=0$.`,
    R`Trung điểm $BC$: $M(1;1)$. $\overrightarrow{AM}=(0;-3)$: trung tuyến $AM$ là $x=1$, tức $x-1=0$.`,
    R`Trung trực $BC$ qua $M(1;1)$, pháp tuyến $(2;1)$: $2x+y-3=0$.`
   ] },
 { muc: "TH", de: R`Viết phương trình đường thẳng qua $A(3;0)$ và $B(0;-2)$.`,
   giai: [ R`Đoạn chắn: $\dfrac x3+\dfrac y{-2}=1\iff2x-3y-6=0$.` ] }
 ] },
"C7-B20-D46": {
 pp: [
  R`Xét $d_1:\ a_1x+b_1y+c_1=0$, $d_2:\ a_2x+b_2y+c_2=0$; giải hệ hai phương trình.`,
  R`Hệ có **một nghiệm**: cắt nhau (nghiệm là toạ độ giao điểm); **vô nghiệm**: song song; **vô số nghiệm**: trùng nhau.`,
  R`Nhanh (khi $a_2,b_2,c_2\ne0$): $\dfrac{a_1}{a_2}\ne\dfrac{b_1}{b_2}$: cắt; $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}\ne\dfrac{c_1}{c_2}$: song song; cả ba bằng nhau: trùng.`,
  R`Một đường cho dạng tham số: thay $x$, $y$ theo $t$ vào đường kia, xét số nghiệm $t$.`
 ],
 luuY: [
  R`So sánh tỉ số khi có hệ số bằng $0$: nên giải hệ trực tiếp.`
 ],
 vd: [
 { muc: "NB", de: R`Xét vị trí tương đối của $d_1:\ x-2y+1=0$ và $d_2:\ -2x+4y+3=0$.`,
   giai: [ R`$\dfrac1{-2}=\dfrac{-2}4\ne\dfrac13$: hai đường thẳng **song song**.` ] },
 { muc: "TH", de: R`Xét vị trí tương đối và tìm giao điểm (nếu có) của $d_1:\ 2x+y-4=0$, $d_2:\ x-y+1=0$.`,
   giai: [ R`$\dfrac21\ne\dfrac1{-1}$: cắt nhau.`, R`Cộng hai phương trình: $3x-3=0\iff x=1$, $y=2$. Giao điểm $(1;2)$.` ] },
 { muc: "TH", de: R`Tìm $m$ để $d_1:\ x+my-1=0$ song song với $d_2:\ 2x+4y+3=0$.`,
   giai: [ R`Cần $\dfrac12=\dfrac m4\ne\dfrac{-1}3$: $m=2$ (và $\frac12\ne-\frac13$ đúng).` ] },
 { muc: "VD", de: R`Xét vị trí tương đối của $d:\ \begin{cases}x=1+t\\y=2+3t\end{cases}$ và $\Delta:\ 3x-y+5=0$.`,
   giai: [
    R`Thay vào $\Delta$: $3(1+t)-(2+3t)+5=0\iff6=0$: vô nghiệm.`,
    R`Vậy $d\parallel\Delta$.`
   ] }
 ] },
"C7-B20-D47": {
 pp: [
  R`Góc giữa hai đường thẳng $\varphi\in[0^\circ;90^\circ]$: $$\cos\varphi=\dfrac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\cdot\sqrt{a_2^2+b_2^2}}$$ (dùng hai vectơ pháp tuyến, hoặc hai vectơ chỉ phương).`,
  R`$d_1\perp d_2\iff a_1a_2+b_1b_2=0$.`
 ],
 luuY: [
  R`Quên dấu giá trị tuyệt đối nên được góc tù; góc giữa hai đường thẳng không vượt quá $90^\circ$.`
 ],
 vd: [
 { muc: "NB", de: R`Tính góc giữa $d_1:\ x-y+1=0$ và $d_2:\ y-2=0$.`,
   giai: [ R`$\vec n_1=(1;-1)$, $\vec n_2=(0;1)$: $\cos\varphi=\dfrac{|0-1|}{\sqrt2\cdot1}=\dfrac{\sqrt2}2$.`, R`$\varphi=45^\circ$.` ] },
 { muc: "TH", de: R`Tính góc giữa $d_1:\ 2x+y-1=0$ và $d_2:\ x-3y+2=0$.`,
   giai: [ R`$\cos\varphi=\dfrac{|2-3|}{\sqrt5\cdot\sqrt{10}}=\dfrac1{\sqrt{50}}\approx0{,}141$.`, R`$\varphi\approx81{,}87^\circ$.` ] },
 { muc: "TH", de: R`Chứng minh $d_1:\ x+2y=0$ và $d_2:\ 2x-y+3=0$ vuông góc.`,
   giai: [ R`$\vec n_1\cdot\vec n_2=1\cdot2+2\cdot(-1)=0$: $d_1\perp d_2$.` ] },
 { muc: "VD", de: R`Tìm $m$ để $d:\ mx+y-1=0$ tạo với $\Delta:\ x-y=0$ một góc $45^\circ$.`,
   giai: [
    R`$\cos45^\circ=\dfrac{|m-1|}{\sqrt{m^2+1}\cdot\sqrt2}\iff|m-1|=\sqrt{m^2+1}$.`,
    R`Bình phương: $m^2-2m+1=m^2+1\iff m=0$.`,
    R`Vậy $m=0$ ($d:\ y=1$ nằm ngang, tạo với đường $y=x$ góc $45^\circ$).`
   ] }
 ] },
"C7-B20-D48": {
 pp: [
  R`$d(M,\Delta)=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$ với $M(x_0;y_0)$, $\Delta:\ ax+by+c=0$.`,
  R`**Hai đường song song:** lấy một điểm trên đường này, tính khoảng cách tới đường kia.`,
  R`**Diện tích tam giác:** $S=\dfrac12\cdot BC\cdot d(A,BC)$.`,
  R`**Tìm điểm theo khoảng cách:** gọi toạ độ theo một tham số, lập phương trình chứa giá trị tuyệt đối, xét hai trường hợp.`
 ],
 luuY: [
  R`Đường thẳng cho dạng tham số phải đổi về dạng tổng quát trước khi dùng công thức.`
 ],
 vd: [
 { muc: "NB", de: R`Tính khoảng cách từ $M(1;2)$ đến $\Delta:\ 3x+4y-1=0$.`,
   giai: [ R`$d=\dfrac{|3+8-1|}{\sqrt{9+16}}=\dfrac{10}5=2$.` ] },
 { muc: "TH", de: R`Tính khoảng cách giữa hai đường song song $3x-4y+1=0$ và $3x-4y-9=0$.`,
   giai: [ R`Điểm $A(1;1)$ thuộc đường thứ nhất ($3-4+1=0$).`, R`$d=\dfrac{|3-4-9|}5=2$.` ] },
 { muc: "TH", de: R`Tính diện tích tam giác $A(1;4)$, $B(-1;0)$, $C(3;2)$.`,
   giai: [
    R`$\overrightarrow{BC}=(4;2)$, $BC=2\sqrt5$. Đường $BC$: pháp tuyến $(1;-2)$, qua $B$: $x-2y+1=0$.`,
    R`$d(A,BC)=\dfrac{|1-8+1|}{\sqrt5}=\dfrac6{\sqrt5}$.`,
    R`$S=\dfrac12\cdot2\sqrt5\cdot\dfrac6{\sqrt5}=6$.`
   ] },
 { muc: "VD", de: R`Tìm điểm $M$ trên trục $Ox$ cách $\Delta:\ 3x+4y-6=0$ một khoảng bằng $3$.`,
   giai: [
    R`$M(m;0)$: $\dfrac{|3m-6|}5=3\iff|3m-6|=15$.`,
    R`$3m-6=15\iff m=7$; $3m-6=-15\iff m=-3$.`,
    R`Vậy $M(7;0)$ hoặc $M(-3;0)$.`
   ] }
 ] },
"C7-B21-D49": {
 pp: [
  R`**Dạng chính tắc:** $(x-a)^2+(y-b)^2=R^2$: tâm $I(a;b)$, bán kính $R$.`,
  R`**Dạng khai triển:** $x^2+y^2-2ax-2by+c=0$ là đường tròn $\iff a^2+b^2-c>0$; khi đó tâm $I(a;b)$, $R=\sqrt{a^2+b^2-c}$.`,
  R`**Nhận dạng:** hệ số của $x^2$, $y^2$ phải **bằng nhau** (chia cho hệ số đó để về $1$), **không có** số hạng $xy$, và $a^2+b^2-c>0$.`
 ],
 luuY: [
  R`Đọc tâm sai dấu: $x^2+y^2-4x+6y-3=0$ có tâm $(2;-3)$, không phải $(-2;3)$.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm tâm và bán kính của $(x-1)^2+(y+2)^2=9$.`,
   giai: [ R`$I(1;-2)$, $R=3$.` ] },
 { muc: "TH", de: R`Tìm tâm và bán kính của $x^2+y^2-4x+6y-3=0$.`,
   giai: [ R`$-2a=-4\Rightarrow a=2$; $-2b=6\Rightarrow b=-3$; $c=-3$.`, R`$R=\sqrt{4+9+3}=4$; tâm $I(2;-3)$.` ] },
 { muc: "TH", de: R`Phương trình nào là phương trình đường tròn? a) $x^2+y^2-2x+4y+6=0$; b) $2x^2+2y^2-4x+8y-2=0$; c) $x^2+2y^2-1=0$.`,
   giai: [
    R`a) $a=1$, $b=-2$, $c=6$: $1+4-6=-1<0$: không phải.`,
    R`b) Chia $2$: $x^2+y^2-2x+4y-1=0$; $1+4+1=6>0$: là đường tròn tâm $(1;-2)$, $R=\sqrt6$.`,
    R`c) Hệ số $x^2$, $y^2$ khác nhau: không phải.`
   ] },
 { muc: "VD", de: R`Tìm $m$ để $x^2+y^2-2mx+2y+m+1=0$ là phương trình đường tròn.`,
   giai: [
    R`$a=m$, $b=-1$, $c=m+1$. Cần $m^2+1-(m+1)>0\iff m^2-m>0$.`,
    R`$\iff m<0$ hoặc $m>1$.`
   ] }
 ] },
"C7-B21-D50": {
 pp: [
  R`Muốn viết phương trình đường tròn, tìm **tâm** $I$ và **bán kính** $R$.`,
  R`**Đường kính $AB$:** tâm là trung điểm $AB$, $R=\dfrac{AB}2$.`,
  R`**Tâm $I$, tiếp xúc $\Delta$:** $R=d(I,\Delta)$.`,
  R`**Qua ba điểm:** dùng dạng $x^2+y^2-2ax-2by+c=0$, thay ba điểm được hệ ba ẩn $a$, $b$, $c$.`
 ],
 luuY: [
  R`Viết $R$ thay cho $R^2$ ở vế phải.`
 ],
 vd: [
 { muc: "NB", de: R`Viết phương trình đường tròn tâm $I(1;-2)$, bán kính $3$.`,
   giai: [ R`$(x-1)^2+(y+2)^2=9$.` ] },
 { muc: "TH", de: R`Viết phương trình đường tròn đường kính $AB$ với $A(1;1)$, $B(5;3)$.`,
   giai: [ R`Tâm $I(3;2)$; $AB=\sqrt{16+4}=2\sqrt5$, $R=\sqrt5$.`, R`$(x-3)^2+(y-2)^2=5$.` ] },
 { muc: "TH", de: R`Viết phương trình đường tròn tâm $I(2;1)$ tiếp xúc với $\Delta:\ 3x-4y+3=0$.`,
   giai: [ R`$R=d(I,\Delta)=\dfrac{|6-4+3|}5=1$.`, R`$(x-2)^2+(y-1)^2=1$.` ] },
 { muc: "VD", de: R`Viết phương trình đường tròn đi qua $A(1;2)$, $B(5;2)$, $C(1;-3)$.`,
   giai: [
    R`Dạng $x^2+y^2-2ax-2by+c=0$. Thay $A$, $B$, $C$: $\begin{cases}-2a-4b+c=-5\\-10a-4b+c=-29\\-2a+6b+c=-10\end{cases}$.`,
    R`Trừ phương trình (1) khỏi (2): $-8a=-24\iff a=3$. Trừ (1) khỏi (3): $10b=-5\iff b=-\dfrac12$.`,
    R`$c=-5+2a+4b=-5+6-2=-1$. $R^2=9+\dfrac14+1=\dfrac{41}4$.`,
    R`Phương trình: $(x-3)^2+\left(y+\dfrac12\right)^2=\dfrac{41}4$.`,
    R`(Kiểm tra: $\overrightarrow{AB}\cdot\overrightarrow{AC}=0$ nên tam giác vuông tại $A$, tâm là trung điểm $BC$, đúng $(3;-\frac12)$.)`
   ] }
 ] },
"C7-B21-D51": {
 pp: [
  R`**Vị trí đường thẳng $\Delta$ và đường tròn $(I;R)$:** tính $d=d(I,\Delta)$. $d>R$: không cắt; $d=R$: tiếp xúc; $d<R$: cắt tại hai điểm, dây cung dài $2\sqrt{R^2-d^2}$.`,
  R`**Tiếp tuyến tại $M\in(C)$:** đi qua $M$, pháp tuyến $\overrightarrow{IM}$.`,
  R`**Tiếp tuyến song song / vuông góc với đường cho trước:** viết dạng có tham số $c$, giải $d(I,\Delta)=R$.`
 ],
 luuY: [
  R`Quên trường hợp thứ hai của $|\dots|=R$: thường có **hai** tiếp tuyến song song với một phương.`
 ],
 vd: [
 { muc: "TH", de: R`Viết phương trình tiếp tuyến của $(C):\ (x-1)^2+(y-2)^2=25$ tại $M(4;6)$.`,
   giai: [
    R`Kiểm tra $M\in(C)$: $9+16=25$. $\overrightarrow{IM}=(3;4)$.`,
    R`Tiếp tuyến: $3(x-4)+4(y-6)=0\iff3x+4y-36=0$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.35,>=stealth]
\draw[->] (-5,0)--(9,0) node[below]{$x$}; \draw[->] (0,-4)--(0,10) node[left]{$y$};
\draw[thick,blue] (1,2) circle (5);
\draw[thick,red] (-0.5,9.375)--(8.5,2.625);
\draw (1,2)--(4,6); \fill (1,2) circle (2.5pt); \fill (4,6) circle (2.5pt);
\node[below] at (1,2){$I$}; \node[above right] at (4,6){$M$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Xét vị trí tương đối của $\Delta:\ 3x+4y+4=0$ và $(C):\ (x-1)^2+(y-2)^2=25$.`,
   giai: [ R`$d(I,\Delta)=\dfrac{|3+8+4|}5=3<5=R$: $\Delta$ cắt $(C)$ tại hai điểm.` ] },
 { muc: "VD", de: R`Viết phương trình tiếp tuyến của $(C):\ x^2+y^2=4$ song song với $\Delta:\ 3x-4y+1=0$.`,
   giai: [
    R`Tiếp tuyến dạng $3x-4y+c=0$ ($c\ne1$). Tâm $O$, $R=2$.`,
    R`$\dfrac{|c|}5=2\iff c=\pm10$.`,
    R`Hai tiếp tuyến: $3x-4y+10=0$ và $3x-4y-10=0$.`
   ] },
 { muc: "VD", de: R`Một trạm phát sóng đặt tại $I(2;3)$ phủ sóng bán kính $5$ km. Con đường thẳng có phương trình $3x+4y-8=0$. Đường có đi qua vùng phủ sóng không? Đoạn đường có sóng dài bao nhiêu?`,
   giai: [
    R`$d(I,\Delta)=\dfrac{|6+12-8|}5=2<5$: đường đi qua vùng phủ sóng.`,
    R`Độ dài dây cung: $2\sqrt{5^2-2^2}=2\sqrt{21}\approx9{,}17$ km.`
   ] }
 ] },
"C7-B22-D52": {
 pp: [
  R`**Elip** là tập điểm $M$ có $MF_1+MF_2=2a$ (không đổi, $2a>F_1F_2=2c$).`,
  R`**Phương trình chính tắc:** $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ với $a>b>0$, $b^2=a^2-c^2$.`,
  R`Tiêu điểm $F_1(-c;0)$, $F_2(c;0)$; đỉnh $(\pm a;0)$, $(0;\pm b)$; trục lớn $2a$, trục nhỏ $2b$, tiêu cự $2c$.`
 ],
 luuY: [
  R`Nhầm $c^2=a^2+b^2$ (đó là của hypebol); với elip $c^2=a^2-b^2$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho elip $\dfrac{x^2}{25}+\dfrac{y^2}9=1$. Tìm tiêu điểm, các đỉnh, độ dài các trục.`,
   giai: [
    R`$a=5$, $b=3$, $c=\sqrt{25-9}=4$. Tiêu điểm $F_1(-4;0)$, $F_2(4;0)$.`,
    R`Đỉnh $(\pm5;0)$, $(0;\pm3)$. Trục lớn $10$, trục nhỏ $6$, tiêu cự $8$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.5,>=stealth]
\draw[->] (-6.5,0)--(6.5,0) node[below]{$x$}; \draw[->] (0,-4)--(0,5) node[left]{$y$};
\draw[thick,blue] (0,0) ellipse (5 and 3);
\fill (-4,0) circle (2.5pt); \fill (4,0) circle (2.5pt);
\node[below] at (-4,0){$F_1$}; \node[below] at (4,0){$F_2$};
\node[below left] at (-5,0){$-5$}; \node[below right] at (5,0){$5$}; \node[above right] at (0,3){$3$}; \node[below right] at (0,-3){$-3$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Viết phương trình chính tắc của elip đi qua $M(0;2)$ và có một tiêu điểm $F_2(\sqrt5;0)$.`,
   giai: [ R`$M(0;2)$ là đỉnh trên trục nhỏ: $b=2$. $c=\sqrt5$, nên $a^2=b^2+c^2=9$.`, R`$\dfrac{x^2}9+\dfrac{y^2}4=1$.` ] },
 { muc: "VD", de: R`Điểm $M$ thuộc elip $\dfrac{x^2}{25}+\dfrac{y^2}9=1$ có $MF_1=3$. Tính $MF_2$.`,
   giai: [ R`$MF_1+MF_2=2a=10$ nên $MF_2=7$.` ] },
 { muc: "VD", de: R`Một cổng có dạng nửa elip rộng $8$ m, cao $3$ m. Tính chiều cao của cổng tại điểm cách tâm $2$ m.`,
   giai: [
    R`Chọn hệ trục: nửa elip $\dfrac{x^2}{16}+\dfrac{y^2}9=1$, $y\ge0$ ($a=4$, $b=3$).`,
    R`Tại $x=2$: $y^2=9\left(1-\dfrac4{16}\right)=\dfrac{27}4$, $y=\dfrac{3\sqrt3}2\approx2{,}60$ m.`
   ] }
 ] },
"C7-B22-D53": {
 pp: [
  R`**Hypebol** là tập điểm $M$ có $|MF_1-MF_2|=2a$ (không đổi, $0<2a<2c$).`,
  R`**Phương trình chính tắc:** $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ với $a,b>0$, $c^2=a^2+b^2$.`,
  R`Tiêu điểm $(\pm c;0)$; đỉnh $(\pm a;0)$; tiệm cận $y=\pm\dfrac bax$.`
 ],
 luuY: [
  R`Bài cho $MF_1$, tìm $MF_2$: có thể được **hai** đáp số ($MF_1-MF_2=\pm2a$), cần kiểm tra $MF_2\ge c-a$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hypebol $\dfrac{x^2}{16}-\dfrac{y^2}9=1$. Tìm tiêu điểm, đỉnh, tiệm cận.`,
   giai: [ R`$a=4$, $b=3$, $c=\sqrt{16+9}=5$. Tiêu điểm $(\pm5;0)$, đỉnh $(\pm4;0)$.`, R`Tiệm cận $y=\pm\dfrac34x$.` ],
   hinh: R`\begin{tikzpicture}[scale=0.4,>=stealth]
\draw[->] (-8,0)--(8,0) node[below]{$x$}; \draw[->] (0,-5.5)--(0,5.5) node[left]{$y$};
\draw[dashed,gray] (-7.5,-5.625)--(7.5,5.625); \draw[dashed,gray] (-7.5,5.625)--(7.5,-5.625);
\draw[thick,blue,smooth,samples=200,domain=4:7.5] plot(\x,{0.75*sqrt(\x*\x-16)});
\draw[thick,blue,smooth,samples=200,domain=4:7.5] plot(\x,{-0.75*sqrt(\x*\x-16)});
\draw[thick,blue,smooth,samples=200,domain=-7.5:-4] plot(\x,{0.75*sqrt(\x*\x-16)});
\draw[thick,blue,smooth,samples=200,domain=-7.5:-4] plot(\x,{-0.75*sqrt(\x*\x-16)});
\fill (-5,0) circle (2.5pt); \fill (5,0) circle (2.5pt);
\node[below] at (-5.4,0){$F_1$}; \node[below] at (5.4,0){$F_2$}; \node[below left] at (0,0){$O$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Viết phương trình chính tắc của hypebol có tiêu điểm $(\pm5;0)$ và đỉnh $(\pm3;0)$.`,
   giai: [ R`$c=5$, $a=3$, $b^2=c^2-a^2=16$.`, R`$\dfrac{x^2}9-\dfrac{y^2}{16}=1$.` ] },
 { muc: "VD", de: R`Điểm $M$ thuộc hypebol $\dfrac{x^2}{16}-\dfrac{y^2}9=1$ có $MF_1=10$. Tính $MF_2$.`,
   giai: [
    R`$|MF_1-MF_2|=2a=8$ nên $MF_2=2$ hoặc $MF_2=18$.`,
    R`Cả hai đều $\ge c-a=1$, nên đều nhận: $MF_2=2$ (nhánh phải, $M$ có hoành độ $4{,}8$) hoặc $MF_2=18$ (nhánh trái, hoành độ $-11{,}2$).`
   ] }
 ] },
"C7-B22-D54": {
 pp: [
  R`**Parabol** là tập điểm $M$ cách đều tiêu điểm $F$ và đường chuẩn $\Delta$.`,
  R`**Phương trình chính tắc:** $y^2=2px$ ($p>0$): tiêu điểm $F\left(\dfrac p2;0\right)$, đường chuẩn $x=-\dfrac p2$; với $M(x;y)$ thuộc parabol: $MF=x+\dfrac p2$.`,
  R`**Nhận dạng ba conic:** $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ là elip; $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ là hypebol; $y^2=2px$ là parabol (đưa về dạng chính tắc trước khi nhận dạng).`
 ],
 luuY: [
  R`Nhầm tiêu điểm của $y^2=8x$ là $(8;0)$ hay $(4;0)$: phải tính $2p=8\Rightarrow p=4$, $F(2;0)$.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm tiêu điểm và đường chuẩn của parabol $y^2=8x$.`,
   giai: [ R`$2p=8\Rightarrow p=4$: $F(2;0)$, đường chuẩn $x=-2$.` ],
   hinh: R`\begin{tikzpicture}[scale=0.5,>=stealth]
\draw[->] (-5.5,0)--(6,0) node[below]{$x$}; \draw[->] (0,-6)--(0,6) node[left]{$y$};
\draw[thick,blue,smooth,samples=200,domain=0:4.5] plot(\x,{sqrt(8*\x)});
\draw[thick,blue,smooth,samples=200,domain=0:4.5] plot(\x,{-sqrt(8*\x)});
\draw[thick,red] (-2,-5.5)--(-2,5.5); \fill (2,0) circle (2.5pt);
\node[below] at (2,0){$F$}; \node[left] at (-2,4.5){$x=-2$}; \node[below left] at (0,0){$O$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Viết phương trình chính tắc của parabol có tiêu điểm $F(3;0)$.`,
   giai: [ R`$\dfrac p2=3\Rightarrow p=6$: $y^2=12x$.` ] },
 { muc: "TH", de: R`Tìm điểm $M$ trên parabol $y^2=8x$ sao cho $MF=5$.`,
   giai: [ R`$MF=x+2=5\Rightarrow x=3$; $y^2=24\Rightarrow y=\pm2\sqrt6$.`, R`$M(3;2\sqrt6)$ hoặc $M(3;-2\sqrt6)$.` ] },
 { muc: "VD", de: R`Một chảo ăng-ten (đèn pha) có mặt cắt là parabol, đường kính miệng $40$ cm, sâu $10$ cm. Bóng đèn đặt tại tiêu điểm. Tính khoảng cách từ bóng đèn đến đỉnh chảo.`,
   giai: [
    R`Đặt đỉnh tại $O$, trục chảo là $Ox$: parabol $y^2=2px$ đi qua $(10;20)$.`,
    R`$400=20p\Rightarrow p=20$; tiêu điểm $F(10;0)$.`,
    R`Bóng đèn cách đỉnh $10$ cm.`
   ] },
 { muc: "TH", de: R`Nhận dạng: a) $4x^2-9y^2=36$; b) $\dfrac{x^2}9+\dfrac{y^2}4=1$; c) $y^2=6x$.`,
   giai: [ R`a) Chia $36$: $\dfrac{x^2}9-\dfrac{y^2}4=1$: hypebol.`, R`b) Elip. c) Parabol ($p=3$).` ] }
 ] }
});
/* ---------- Chương VIII · Đại số tổ hợp ---------- */
Object.assign(D, {
"C8-B23-D55": {
 pp: [
  R`**Quy tắc cộng:** công việc làm theo **một trong** các phương án (không trùng nhau), phương án 1 có $m$ cách, phương án 2 có $n$ cách: có $m+n$ cách.`,
  R`**Quy tắc nhân:** công việc gồm **các công đoạn liên tiếp**, công đoạn 1 có $m$ cách, ứng với mỗi cách đó công đoạn 2 có $n$ cách: có $m\cdot n$ cách.`,
  R`Dấu hiệu: "hoặc" thì cộng, "và (rồi)" thì nhân.`,
  R`**Sơ đồ hình cây:** mỗi tầng là một công đoạn, mỗi nhánh là một lựa chọn; số kết quả bằng số nhánh cuối.`
 ],
 luuY: [
  R`Dùng quy tắc cộng khi các phương án có phần trùng nhau: phải trừ phần trùng.`
 ],
 vd: [
 { muc: "NB", de: R`Một bạn có $5$ áo và $3$ quần. a) Có bao nhiêu cách chọn một bộ quần áo? b) Có bao nhiêu cách chọn một món (áo hoặc quần)?`,
   giai: [ R`a) Chọn áo **và** quần: $5\cdot3=15$ cách.`, R`b) Chọn áo **hoặc** quần: $5+3=8$ cách.` ] },
 { muc: "TH", de: R`Từ $A$ đến $B$ có $3$ con đường, từ $B$ đến $C$ có $4$ con đường. a) Có bao nhiêu cách đi từ $A$ đến $C$ qua $B$? b) Đi từ $A$ đến $C$ rồi về $A$ (qua $B$), không đi lại con đường đã đi, có bao nhiêu cách?`,
   giai: [
    R`a) $3\cdot4=12$ cách.`,
    R`b) Lượt đi: $12$ cách. Lượt về: $C\to B$ còn $3$ đường, $B\to A$ còn $2$ đường: $6$ cách.`,
    R`Tổng: $12\cdot6=72$ cách.`
   ] },
 { muc: "VD", de: R`Số $360$ có bao nhiêu ước nguyên dương?`,
   giai: [
    R`$360=2^3\cdot3^2\cdot5$. Mỗi ước có dạng $2^a3^b5^c$ với $a\in\{0;1;2;3\}$, $b\in\{0;1;2\}$, $c\in\{0;1\}$.`,
    R`Chọn $a$, rồi $b$, rồi $c$: $4\cdot3\cdot2=24$ ước.`
   ] }
 ] },
"C8-B23-D56": {
 pp: [
  R`Gọi số cần lập là $\overline{a_1a_2\dots a_n}$; **ưu tiên chọn chữ số có điều kiện trước** (chữ số đầu khác $0$, chữ số cuối chẵn/lẻ/chia hết cho $5$...).`,
  R`"Khác nhau": mỗi chữ số đã dùng thì bớt một lựa chọn ở bước sau. "Không cần khác nhau": mỗi vị trí đủ lựa chọn.`,
  R`Khi có chữ số $0$ và điều kiện ở chữ số cuối: **chia trường hợp** chữ số cuối bằng $0$ và khác $0$.`
 ],
 luuY: [
  R`Quên chữ số đầu tiên phải khác $0$.`
 ],
 vd: [
 { muc: "NB", de: R`Từ các chữ số $1;2;3;4;5$ lập được bao nhiêu số có $3$ chữ số? Bao nhiêu số có $3$ chữ số khác nhau?`,
   giai: [ R`Không cần khác nhau: $5\cdot5\cdot5=125$ số.`, R`Khác nhau: $5\cdot4\cdot3=60$ số.` ] },
 { muc: "TH", de: R`Từ các chữ số $0;1;2;3;4;5$ lập được bao nhiêu số có $4$ chữ số khác nhau? Trong đó bao nhiêu số chẵn?`,
   giai: [
    R`$a_1\ne0$: $5$ cách; $a_2$: $5$ cách; $a_3$: $4$; $a_4$: $3$. Có $5\cdot5\cdot4\cdot3=300$ số.`,
    R`Số chẵn, trường hợp $a_4=0$: $a_1,a_2,a_3$ chọn từ $5$ chữ số còn lại: $5\cdot4\cdot3=60$.`,
    R`Trường hợp $a_4\in\{2;4\}$ ($2$ cách): $a_1$ khác $0$ và khác $a_4$: $4$ cách; $a_2$: $4$; $a_3$: $3$. Có $2\cdot4\cdot4\cdot3=96$.`,
    R`Tổng số chẵn: $60+96=156$.`
   ] },
 { muc: "VD", de: R`Có bao nhiêu số tự nhiên có $3$ chữ số khác nhau và chia hết cho $5$?`,
   giai: [
    R`Chữ số cuối là $0$ hoặc $5$.`,
    R`Cuối là $0$: $a_1$ có $9$ cách, $a_2$ có $8$ cách: $72$ số.`,
    R`Cuối là $5$: $a_1\ne0,5$: $8$ cách; $a_2$: $8$ cách: $64$ số.`,
    R`Tổng: $72+64=136$ số.`
   ] }
 ] },
"C8-B24-D57": {
 pp: [
  R`**Hoán vị:** $P_n=n!$. **Chỉnh hợp** (chọn $k$ phần tử **có thứ tự**): $A_n^k=\dfrac{n!}{(n-k)!}$. **Tổ hợp** (chọn $k$ phần tử **không thứ tự**): $C_n^k=\dfrac{n!}{k!(n-k)!}$.`,
  R`$A_n^k=k!\cdot C_n^k$; $C_n^k=C_n^{n-k}$.`,
  R`**Giải phương trình:** đặt điều kiện ($n$ nguyên dương, $n\ge k$), viết theo công thức thành phương trình đa thức, giải, đối chiếu điều kiện.`,
  R`Hay dùng: $A_n^2=n(n-1)$; $C_n^2=\dfrac{n(n-1)}2$; $C_n^3=\dfrac{n(n-1)(n-2)}6$.`
 ],
 luuY: [
  R`Quên điều kiện $n\in\mathbb N$, $n\ge k$ nên giữ nghiệm âm hoặc không nguyên.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $P_5$, $A_5^2$, $C_5^2$.`,
   giai: [ R`$P_5=120$; $A_5^2=5\cdot4=20$; $C_5^2=\dfrac{20}2=10$.` ] },
 { muc: "TH", de: R`Giải phương trình $A_n^2=20$.`,
   giai: [ R`Điều kiện $n\ge2$. $n(n-1)=20\iff n^2-n-20=0\iff n=5$ hoặc $n=-4$.`, R`Nhận $n=5$.` ] },
 { muc: "TH", de: R`Giải phương trình $C_n^2=28$.`,
   giai: [ R`$\dfrac{n(n-1)}2=28\iff n^2-n-56=0\iff n=8$ hoặc $n=-7$. Nhận $n=8$.` ] },
 { muc: "VD", de: R`Giải phương trình $C_n^1+C_n^2=21$.`,
   giai: [ R`Điều kiện $n\ge2$. $n+\dfrac{n(n-1)}2=21\iff n^2+n-42=0$.`, R`$n=6$ hoặc $n=-7$. Nhận $n=6$.` ] }
 ] },
"C8-B24-D58": {
 pp: [
  R`**Xếp $n$ người vào $n$ chỗ:** $n!$.`,
  R`**Chọn $k$ người có phân công vai trò** (lớp trưởng, lớp phó...): $A_n^k$. **Chọn $k$ người không phân biệt vai trò:** $C_n^k$.`,
  R`**Đứng cạnh nhau:** "buộc" nhóm thành một khối, xếp các khối rồi nhân với số cách xếp bên trong khối.`,
  R`**"Ít nhất một":** thường lấy tất cả trừ trường hợp "không có"; hoặc chia trường hợp rồi cộng.`
 ],
 luuY: [
  R`Dùng $A$ khi không có thứ tự (hoặc $C$ khi có thứ tự). Tự hỏi: đổi chỗ hai người được chọn có tạo cách mới không?`
 ],
 vd: [
 { muc: "NB", de: R`Có bao nhiêu cách xếp $5$ bạn thành một hàng dọc?`,
   giai: [ R`$P_5=5!=120$ cách.` ] },
 { muc: "TH", de: R`Lớp có $30$ học sinh. Có bao nhiêu cách chọn một lớp trưởng, một lớp phó, một thủ quỹ (không kiêm nhiệm)? Bao nhiêu cách chọn $3$ bạn đi trực nhật?`,
   giai: [ R`Có phân công vai trò: $A_{30}^3=30\cdot29\cdot28=24\,360$ cách.`, R`Không phân biệt vai trò: $C_{30}^3=4060$ cách.` ] },
 { muc: "VD", de: R`Xếp $5$ nam và $4$ nữ thành một hàng ngang. Có bao nhiêu cách để a) $4$ nữ đứng cạnh nhau; b) nam nữ đứng xen kẽ?`,
   giai: [
    R`a) Coi $4$ nữ là một khối: xếp $5$ nam và $1$ khối: $6!=720$; trong khối: $4!=24$. Tổng $720\cdot24=17\,280$.`,
    R`b) $9$ vị trí, $5$ nam $4$ nữ xen kẽ thì nam ở vị trí lẻ $1,3,5,7,9$, nữ ở vị trí chẵn: $5!\cdot4!=2880$.`
   ] },
 { muc: "VD", de: R`Từ $6$ nam và $5$ nữ chọn $4$ người. Có bao nhiêu cách chọn a) có ít nhất $1$ nữ; b) có đúng $2$ nữ?`,
   giai: [
    R`a) Tất cả: $C_{11}^4=330$; không có nữ: $C_6^4=15$. Có ít nhất $1$ nữ: $330-15=315$.`,
    R`b) Chọn $2$ nữ và $2$ nam: $C_5^2\cdot C_6^2=10\cdot15=150$.`
   ] }
 ] },
"C8-B24-D59": {
 pp: [
  R`$n$ điểm, không có $3$ điểm thẳng hàng: số đoạn thẳng $C_n^2$; số tam giác $C_n^3$; số vectơ khác $\vec0$ là $A_n^2$.`,
  R`Đa giác lồi $n$ cạnh: số đường chéo $C_n^2-n$.`,
  R`Điểm nằm trên hai đường thẳng song song: tam giác lấy $2$ điểm trên đường này, $1$ điểm trên đường kia (cộng hai trường hợp).`,
  R`Thi đấu vòng tròn một lượt: $C_n^2$ trận; hai lượt (sân nhà, sân khách): $A_n^2$ trận.`
 ],
 luuY: [
  R`Ba điểm thẳng hàng không tạo thành tam giác.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $10$ điểm, không có $3$ điểm nào thẳng hàng. Có bao nhiêu đoạn thẳng, bao nhiêu tam giác có đỉnh là các điểm đó?`,
   giai: [ R`Đoạn thẳng: $C_{10}^2=45$. Tam giác: $C_{10}^3=120$.` ] },
 { muc: "TH", de: R`Một đa giác lồi có $10$ cạnh có bao nhiêu đường chéo?`,
   giai: [ R`Mỗi cặp đỉnh cho một cạnh hoặc một đường chéo: $C_{10}^2-10=45-10=35$.` ] },
 { muc: "TH", de: R`Trên đường thẳng $d_1$ có $5$ điểm, trên $d_2\parallel d_1$ có $6$ điểm. Có bao nhiêu tam giác, bao nhiêu tứ giác (hình thang) có đỉnh lấy từ $11$ điểm đó?`,
   giai: [
    R`Tam giác: $2$ điểm trên $d_1$, $1$ trên $d_2$: $C_5^2\cdot6=60$; $1$ trên $d_1$, $2$ trên $d_2$: $5\cdot C_6^2=75$. Tổng $135$.`,
    R`Tứ giác: $2$ điểm mỗi đường: $C_5^2\cdot C_6^2=150$.`
   ] },
 { muc: "VD", de: R`Giải bóng đá có $10$ đội thi đấu vòng tròn. Có bao nhiêu trận nếu đá một lượt? Hai lượt (sân nhà, sân khách)?`,
   giai: [ R`Một lượt: mỗi cặp đội một trận: $C_{10}^2=45$.`, R`Hai lượt: mỗi cặp có thứ tự (chủ nhà, khách): $A_{10}^2=90$.` ] }
 ] },
"C8-B25-D60": {
 pp: [
  R`$(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$.`,
  R`$(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$.`,
  R`Số hạng tổng quát: $C_n^ka^{n-k}b^k$ ($n=4$ hoặc $5$). Muốn tìm hệ số của $x^m$: viết số hạng tổng quát, gom luỹ thừa của $x$, giải số mũ bằng $m$.`,
  R`Với $(a-b)^n$: các dấu đan xen $+,-,+,\dots$ (thay $b$ bằng $-b$).`
 ],
 luuY: [
  R`Quên luỹ thừa hệ số: số hạng của $(2x)^3$ là $8x^3$, không phải $2x^3$.`
 ],
 vd: [
 { muc: "NB", de: R`Khai triển $(x+2)^4$.`,
   giai: [ R`$x^4+4x^3\cdot2+6x^2\cdot4+4x\cdot8+16=x^4+8x^3+24x^2+32x+16$.` ] },
 { muc: "TH", de: R`Khai triển $(2x-1)^5$.`,
   giai: [
    R`Dùng $(a-b)^5$ với $a=2x$, $b=1$: $(2x)^5-5(2x)^4+10(2x)^3-10(2x)^2+5(2x)-1$.`,
    R`$=32x^5-80x^4+80x^3-40x^2+10x-1$.`
   ] },
 { muc: "TH", de: R`Tìm hệ số của $x^3$ trong khai triển $(1+2x)^5$.`,
   giai: [ R`Số hạng chứa $x^3$: $C_5^3(2x)^3=10\cdot8x^3$.`, R`Hệ số là $80$.` ] },
 { muc: "VD", de: R`Tìm số hạng không chứa $x$ trong khai triển $\left(x+\dfrac2x\right)^4$.`,
   giai: [
    R`Số hạng tổng quát: $C_4^kx^{4-k}\left(\dfrac2x\right)^k=C_4^k2^kx^{4-2k}$.`,
    R`Không chứa $x$: $4-2k=0\iff k=2$. Số hạng: $C_4^2\cdot4=24$.`
   ] }
 ] }
});
/* ---------- Chương IX · Tính xác suất theo định nghĩa cổ điển ---------- */
Object.assign(D, {
"C9-B26-D61": {
 pp: [
  R`**Phép thử ngẫu nhiên:** không đoán trước được kết quả. **Không gian mẫu** $\Omega$: tập mọi kết quả có thể; $n(\Omega)$ là số phần tử.`,
  R`**Biến cố** $A$ là một tập con của $\Omega$; các phần tử của $A$ là kết quả **thuận lợi** cho $A$.`,
  R`**Biến cố đối** $\bar A=\Omega\setminus A$ (xảy ra khi và chỉ khi $A$ không xảy ra).`,
  R`Liệt kê bằng bảng (hai xúc xắc: bảng $6\times6$) hoặc sơ đồ cây; khi số phần tử lớn thì **đếm** bằng quy tắc nhân, tổ hợp.`
 ],
 luuY: [
  R`Gieo hai đồng xu: $SN$ và $NS$ là **hai** kết quả khác nhau (nên $n(\Omega)=4$, không phải $3$).`
 ],
 vd: [
 { muc: "NB", de: R`Gieo một con xúc xắc. Mô tả không gian mẫu và biến cố $A$: "Số chấm là số chẵn".`,
   giai: [ R`$\Omega=\{1;2;3;4;5;6\}$, $n(\Omega)=6$.`, R`$A=\{2;4;6\}$, $n(A)=3$.` ] },
 { muc: "TH", de: R`Gieo hai đồng xu. Mô tả $\Omega$, biến cố $A$: "Có ít nhất một mặt sấp" và $\bar A$.`,
   giai: [
    R`Sơ đồ cây cho $\Omega=\{SS;SN;NS;NN\}$, $n(\Omega)=4$.`,
    R`$A=\{SS;SN;NS\}$; $\bar A=\{NN\}$ (cả hai mặt ngửa).`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8]
\fill (0,0) circle (2pt);
\node at (2,1){$S$}; \node at (2,-1){$N$};
\node at (4,1.5){$S$}; \node at (4,0.5){$N$}; \node at (4,-0.5){$S$}; \node at (4,-1.5){$N$};
\draw (0.1,0.05)--(1.7,0.9); \draw (0.1,-0.05)--(1.7,-0.9);
\draw (2.3,1.1)--(3.7,1.45); \draw (2.3,0.9)--(3.7,0.55); \draw (2.3,-0.9)--(3.7,-0.55); \draw (2.3,-1.1)--(3.7,-1.45);
\node at (6,1.5){$SS$}; \node at (6,0.5){$SN$}; \node at (6,-0.5){$NS$}; \node at (6,-1.5){$NN$};
\node at (2,2){Lần 1}; \node at (4,2.1){Lần 2}; \node at (6,2.1){Kết quả};
\end{tikzpicture}` },
 { muc: "TH", de: R`Gieo hai con xúc xắc. Tính $n(\Omega)$ và liệt kê biến cố $B$: "Tổng số chấm bằng $7$".`,
   giai: [ R`$n(\Omega)=6\cdot6=36$.`, R`$B=\{(1;6),(2;5),(3;4),(4;3),(5;2),(6;1)\}$, $n(B)=6$.` ] },
 { muc: "VD", de: R`Một hộp có $5$ bi đỏ và $3$ bi xanh. Lấy ngẫu nhiên $2$ bi. Tính $n(\Omega)$ và số kết quả thuận lợi cho biến cố $A$: "Hai bi cùng màu".`,
   giai: [
    R`$n(\Omega)=C_8^2=28$.`,
    R`Cùng đỏ: $C_5^2=10$; cùng xanh: $C_3^2=3$. $n(A)=10+3=13$.`
   ] }
 ] },
"C9-B26-D62": {
 pp: [
  R`**Định nghĩa cổ điển:** các kết quả đồng khả năng thì $P(A)=\dfrac{n(A)}{n(\Omega)}$.`,
  R`$0\le P(A)\le1$; $P(\Omega)=1$; $P(\varnothing)=0$.`,
  R`**Các bước:** mô tả $\Omega$, tính $n(\Omega)$; xác định các kết quả thuận lợi, tính $n(A)$; lấy thương.`
 ],
 luuY: [
  R`Đếm trùng phần tử khi dùng "hoặc" (ví dụ số chia hết cho $3$ hoặc $5$: số $15$ bị đếm hai lần).`
 ],
 vd: [
 { muc: "NB", de: R`Gieo một con xúc xắc. Tính xác suất được mặt có số chấm chẵn.`,
   giai: [ R`$n(\Omega)=6$, $n(A)=3$: $P(A)=\dfrac36=\dfrac12$.` ] },
 { muc: "TH", de: R`Gieo hai con xúc xắc. Tính xác suất a) tổng số chấm bằng $7$; b) tổng số chấm không nhỏ hơn $10$.`,
   giai: [
    R`a) $n(A)=6$ (xem dạng trên): $P=\dfrac6{36}=\dfrac16$.`,
    R`b) Tổng $\ge10$: $(4;6),(6;4),(5;5),(5;6),(6;5),(6;6)$: $6$ kết quả, $P=\dfrac16$.`
   ] },
 { muc: "TH", de: R`Gieo ba đồng xu. Tính xác suất có ít nhất hai mặt sấp.`,
   giai: [ R`$n(\Omega)=2^3=8$. Thuận lợi: $SSN$, $SNS$, $NSS$, $SSS$: $4$ kết quả.`, R`$P=\dfrac48=\dfrac12$.` ] },
 { muc: "VD", de: R`Rút ngẫu nhiên một thẻ từ $20$ thẻ đánh số $1$ đến $20$. Tính xác suất số trên thẻ chia hết cho $3$ hoặc $5$.`,
   giai: [
    R`Chia hết cho $3$: $3,6,\dots,18$: $6$ số. Chia hết cho $5$: $5,10,15,20$: $4$ số. Chia hết cho cả hai: $15$: $1$ số.`,
    R`$n(A)=6+4-1=9$, $P(A)=\dfrac9{20}$.`
   ] }
 ] },
"C9-B27-D63": {
 pp: [
  R`Chọn đồng thời $k$ đối tượng từ $n$: $n(\Omega)=C_n^k$; xếp thứ tự: $n(\Omega)=A_n^k$ hoặc $n!$.`,
  R`Tính $n(A)$ bằng quy tắc nhân, cộng với tổ hợp (chọn bao nhiêu từ mỗi nhóm), cùng cách đếm như $n(\Omega)$.`,
  R`$P(A)=\dfrac{n(A)}{n(\Omega)}$, rút gọn phân số.`
 ],
 luuY: [
  R`$\Omega$ đếm không thứ tự mà $A$ lại đếm có thứ tự (hoặc ngược lại): phải dùng **cùng một cách đếm**.`
 ],
 vd: [
 { muc: "TH", de: R`Hộp có $5$ bi đỏ, $3$ bi xanh, lấy ngẫu nhiên $2$ bi. Tính xác suất a) hai bi đỏ; b) hai bi cùng màu.`,
   giai: [ R`$n(\Omega)=C_8^2=28$.`, R`a) $P=\dfrac{C_5^2}{28}=\dfrac{10}{28}=\dfrac5{14}$.`, R`b) $P=\dfrac{10+3}{28}=\dfrac{13}{28}$.` ] },
 { muc: "TH", de: R`Lớp có $20$ nam, $15$ nữ. Chọn ngẫu nhiên $3$ bạn. Tính xác suất cả $3$ bạn đều là nữ.`,
   giai: [ R`$n(\Omega)=C_{35}^3=6545$; $n(A)=C_{15}^3=455$.`, R`$P=\dfrac{455}{6545}=\dfrac{13}{187}\approx0{,}07$.` ] },
 { muc: "VD", de: R`Chọn ngẫu nhiên $4$ người từ $6$ nam và $5$ nữ. Tính xác suất chọn được đúng $2$ nữ.`,
   giai: [ R`$n(\Omega)=C_{11}^4=330$; $n(A)=C_5^2\cdot C_6^2=150$.`, R`$P=\dfrac{150}{330}=\dfrac5{11}$.` ] },
 { muc: "VD", de: R`Xếp ngẫu nhiên $5$ nam và $4$ nữ thành một hàng ngang. Tính xác suất $4$ nữ đứng cạnh nhau.`,
   giai: [ R`$n(\Omega)=9!=362\,880$. Buộc $4$ nữ thành một khối: $n(A)=6!\cdot4!=17\,280$.`, R`$P=\dfrac{17\,280}{362\,880}=\dfrac1{21}$.` ] }
 ] },
"C9-B27-D64": {
 pp: [
  R`$P(\bar A)=1-P(A)$.`,
  R`**Dùng khi** đề hỏi "**ít nhất một**", "có ... trở lên": biến cố đối thường là "không có cái nào", dễ đếm hơn nhiều.`,
  R`**Bài thực tế:** chuyển lời văn thành biến cố, xác định $\Omega$, đếm phần đối rồi lấy $1$ trừ đi.`
 ],
 luuY: [
  R`Đối của "ít nhất một" là "không có cái nào", không phải "đúng một".`
 ],
 vd: [
 { muc: "TH", de: R`Gieo hai con xúc xắc. Tính xác suất có ít nhất một mặt $6$ chấm.`,
   giai: [ R`$\bar A$: "không có mặt $6$": mỗi con có $5$ khả năng, $n(\bar A)=25$.`, R`$P(A)=1-\dfrac{25}{36}=\dfrac{11}{36}$.` ] },
 { muc: "TH", de: R`Chọn ngẫu nhiên $4$ người từ $6$ nam và $5$ nữ. Tính xác suất có ít nhất $1$ nữ.`,
   giai: [ R`$\bar A$: "cả $4$ đều nam": $C_6^4=15$. $n(\Omega)=330$.`, R`$P(A)=1-\dfrac{15}{330}=1-\dfrac1{22}=\dfrac{21}{22}$.` ] },
 { muc: "VD", de: R`Gieo một đồng xu $5$ lần. Tính xác suất có ít nhất một lần xuất hiện mặt ngửa.`,
   giai: [ R`$n(\Omega)=2^5=32$. $\bar A$: "cả $5$ lần đều sấp": $1$ kết quả.`, R`$P(A)=1-\dfrac1{32}=\dfrac{31}{32}$.` ] },
 { muc: "VD", de: R`Lớp có $35$ học sinh, trong đó $5$ bạn chưa làm bài tập. Thầy gọi ngẫu nhiên $3$ bạn kiểm tra. Tính xác suất có ít nhất một bạn chưa làm bài.`,
   giai: [
    R`$n(\Omega)=C_{35}^3=6545$. $\bar A$: "cả $3$ bạn đều đã làm bài": $C_{30}^3=4060$.`,
    R`$P(A)=1-\dfrac{4060}{6545}=\dfrac{2485}{6545}=\dfrac{71}{187}\approx0{,}38$.`
   ] }
 ] }
});
})(window);
