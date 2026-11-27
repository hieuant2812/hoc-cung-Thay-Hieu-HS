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
    R`a) Là mệnh đề, **đúng**.`,
    R`b) Câu cảm thán: **không** là mệnh đề.`,
    R`c) Là mệnh đề, **sai** (vì $2+3=5$).`,
    R`d) Chưa xác định đúng sai khi chưa biết $x$: là **mệnh đề chứa biến**.`
   ] },
 { muc: "TH", de: R`Cho mệnh đề chứa biến $P(n)$: "$n^2+1$ chia hết cho $5$" ($n\in\mathbb N$). Xét tính đúng sai của $P(2)$, $P(3)$, $P(4)$.`,
   giai: [
    R`$P(2)$: $2^2+1=5$ chia hết cho $5$: đúng.`,
    R`$P(3)$: $3^2+1=10$ chia hết cho $5$: đúng.`,
    R`$P(4)$: $4^2+1=17$ không chia hết cho $5$: sai.`
   ] },
 { muc: "TH", de: R`Xét tính đúng sai: a) "$\sqrt2$ là số hữu tỉ." b) "Tổng ba góc trong một tam giác bằng $180^\circ$." c) "$17$ là số nguyên tố."`,
   giai: [
    R`a) Sai: $\sqrt2$ là số vô tỉ.`,
    R`b) Đúng (định lí tổng ba góc).`,
    R`c) Đúng: $17$ chỉ có hai ước là $1$ và $17$.`
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
    R`Phủ định: "$5$ không phải là số chẵn". Mệnh đề này **đúng** (mệnh đề ban đầu sai).`
   ] },
 { muc: "TH", de: R`Phủ định mệnh đề "$\forall x\in\mathbb R,\ x^2+1>0$" và xét tính đúng sai của mệnh đề phủ định.`,
   giai: [
    R`Phủ định: "$\exists x\in\mathbb R,\ x^2+1\le0$".`,
    R`Vì $x^2\ge0$ nên $x^2+1\ge1>0$ với mọi $x$: mệnh đề ban đầu đúng, mệnh đề phủ định **sai**.`
   ] },
 { muc: "TH", de: R`Phủ định mệnh đề "$\exists n\in\mathbb N,\ n^2=2$" và xét tính đúng sai.`,
   giai: [
    R`Phủ định: "$\forall n\in\mathbb N,\ n^2\ne2$".`,
    R`$1^2=1$, $2^2=4$, các số lớn hơn cho bình phương lớn hơn $4$: không có số tự nhiên nào bình phương bằng $2$. Mệnh đề phủ định **đúng**.`
   ] },
 { muc: "VD", de: R`Phát biểu bằng lời mệnh đề phủ định của "Mọi số nguyên tố đều là số lẻ". Mệnh đề nào đúng?`,
   giai: [
    R`Phủ định: "Có ít nhất một số nguyên tố không phải là số lẻ".`,
    R`Số $2$ là số nguyên tố chẵn, nên mệnh đề phủ định **đúng**, mệnh đề ban đầu sai.`
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
    R`Tam giác đều có ba cạnh bằng nhau nên có hai cạnh bằng nhau: là tam giác cân. Mệnh đề **đúng**.`,
    R`Mệnh đề đảo: "Nếu tam giác $ABC$ cân thì tam giác $ABC$ đều". Sai: tam giác có ba cạnh $2,2,3$ cân nhưng không đều.`
   ] },
 { muc: "TH", de: R`Phát biểu định lí "Nếu $a$ và $b$ cùng chia hết cho $3$ thì $a+b$ chia hết cho $3$" bằng thuật ngữ điều kiện cần, điều kiện đủ.`,
   giai: [
    R`"$a$ và $b$ cùng chia hết cho $3$ là **điều kiện đủ** để $a+b$ chia hết cho $3$."`,
    R`"$a+b$ chia hết cho $3$ là **điều kiện cần** để $a$ và $b$ cùng chia hết cho $3$."`
   ] },
 { muc: "TH", de: R`Xét tính đúng sai của "$x>2\Rightarrow x^2>4$" và mệnh đề đảo của nó.`,
   giai: [
    R`Nếu $x>2$ thì $x^2>2x>4$: mệnh đề **đúng**.`,
    R`Mệnh đề đảo "$x^2>4\Rightarrow x>2$": sai, phản ví dụ $x=-3$ có $x^2=9>4$ nhưng $x<2$.`
   ] },
 { muc: "VD", de: R`Phát biểu mệnh đề tương đương từ định lí Pythagore và định lí đảo, dùng thuật ngữ "điều kiện cần và đủ".`,
   giai: [
    R`Định lí Pythagore: tam giác $ABC$ vuông tại $A$ $\Rightarrow AB^2+AC^2=BC^2$. Định lí đảo: $AB^2+AC^2=BC^2\Rightarrow$ tam giác vuông tại $A$. Cả hai đều đúng.`,
    R`Vậy: "Tam giác $ABC$ vuông tại $A$ $\Leftrightarrow AB^2+AC^2=BC^2$".`,
    R`Phát biểu: "Điều kiện cần và đủ để tam giác $ABC$ vuông tại $A$ là $AB^2+AC^2=BC^2$."`
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
    R`$A=\{0;1;2;3;4\}$, có $5$ phần tử.`
   ] },
 { muc: "TH", de: R`Liệt kê các phần tử của $B=\{x\in\mathbb R\mid x^2-3x+2=0\}$ và $C=\{x\in\mathbb Z\mid|x|\le2\}$.`,
   giai: [
    R`$x^2-3x+2=0\Leftrightarrow x=1$ hoặc $x=2$. $B=\{1;2\}$.`,
    R`$|x|\le2\Leftrightarrow-2\le x\le2$, với $x$ nguyên: $C=\{-2;-1;0;1;2\}$.`
   ] },
 { muc: "TH", de: R`Liệt kê tất cả các tập con của $\{a;b;c\}$.`,
   giai: [
    R`Không phần tử: $\varnothing$. Một phần tử: $\{a\}$, $\{b\}$, $\{c\}$.`,
    R`Hai phần tử: $\{a;b\}$, $\{a;c\}$, $\{b;c\}$. Ba phần tử: $\{a;b;c\}$.`,
    R`Tổng cộng $8=2^3$ tập con.`
   ] },
 { muc: "VD", de: R`Cho $A=\{x\in\mathbb R\mid(x-1)(x^2-4)=0\}$ và $B=\{-2;1;2\}$. Chứng minh $A=B$.`,
   giai: [
    R`$(x-1)(x^2-4)=0\Leftrightarrow x=1$ hoặc $x^2=4\Leftrightarrow x\in\{1;-2;2\}$.`,
    R`Vậy $A=\{-2;1;2\}$: mọi phần tử của $A$ thuộc $B$ và ngược lại, nên $A=B$.`
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
    R`$A\cap B=\{2;4\}$.`,
    R`$A\cup B=\{1;2;3;4;5;6;8\}$.`,
    R`$A\setminus B=\{1;3;5\}$; $B\setminus A=\{6;8\}$.`
   ] },
 { muc: "TH", de: R`Cho $E=\{x\in\mathbb N\mid1\le x\le9\}$, $A=\{x\in E\mid x\text{ chia hết cho }3\}$. Tìm $C_EA$.`,
   giai: [
    R`$E=\{1;2;\dots;9\}$, $A=\{3;6;9\}$.`,
    R`$C_EA=E\setminus A=\{1;2;4;5;7;8\}$.`
   ] },
 { muc: "VD", de: R`Cho $A=\{1;2;3\}$. Có bao nhiêu tập hợp $X$ thoả mãn $A\cup X=\{1;2;3;4\}$?`,
   giai: [
    R`$X\subset\{1;2;3;4\}$ (vì $X\subset A\cup X$) và $4\in X$ (vì $4\notin A$).`,
    R`Vậy $X=\{4\}\cup Y$ với $Y$ là một tập con bất kì của $\{1;2;3\}$; ngược lại mọi tập như vậy đều thoả mãn.`,
    R`Số tập $Y$ là $2^3=8$, nên có $8$ tập $X$.`
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
    R`$A\cap B=(0;3)$: số $0$ không thuộc $B$, số $3$ không thuộc $A$.`,
    R`$A\cup B=[-1;5]$.`,
    R`$A\setminus B=[-1;0]$ (số $0$ thuộc $A$, không thuộc $B$ nên được lấy).`,
    R`$B\setminus A=[3;5]$ (số $3$ thuộc $B$, không thuộc $A$).`
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
    R`$C_{\mathbb R}A=\mathbb R\setminus A=(-\infty;-1)\cup[3;+\infty)$.`
   ] },
 { muc: "VD", de: R`Cho $A=[m;m+2]$, $B=(1;4)$. Tìm $m$ để a) $A\subset B$; b) $A\cap B=\varnothing$.`,
   giai: [
    R`a) $A\subset B\Leftrightarrow1<m$ và $m+2<4\Leftrightarrow1<m<2$.`,
    R`b) $A\cap B=\varnothing\Leftrightarrow$ $A$ nằm bên trái $B$: $m+2\le1\Leftrightarrow m\le-1$; hoặc $A$ nằm bên phải $B$: $m\ge4$.`,
    R`**Kết luận.** a) $1<m<2$; b) $m\le-1$ hoặc $m\ge4$.`
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
    R`Thích ít nhất một môn: $25+20-10=35$ em.`,
    R`Không thích môn nào: $40-35=5$ em.`,
    R`Chỉ thích Toán: $25-10=15$ em.`
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
    R`Số em chơi ít nhất một môn: $25+18+20-7-8-6+3=45$.`,
    R`Không chơi môn nào: $45-45=0$ em.`,
    R`Chỉ chơi bóng đá: $25-7-8+3=13$ em (trừ hai phần chung, nhưng phần cả ba bị trừ hai lần nên cộng lại $3$).`
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
    R`a) Có dạng $ax+by>c$ với $a=2$, $b=-3$: **có**.`,
    R`b) Có $x^2$: không. c) Có tích $xy$: không.`,
    R`d) $3x+0\cdot y\ge0$, $a=3\ne0$: **có**.`
   ] },
 { muc: "TH", de: R`Các cặp số $(1;-1)$ và $(0;0)$ có là nghiệm của bất phương trình $2x-3y>1$ không?`,
   giai: [
    R`$(1;-1)$: $2\cdot1-3\cdot(-1)=5>1$: **là** nghiệm.`,
    R`$(0;0)$: $0>1$ sai: **không** là nghiệm.`
   ] },
 { muc: "TH", de: R`Bạn An có $200$ nghìn đồng, muốn mua $x$ chiếc bút (giá $5$ nghìn/chiếc) và $y$ quyển vở (giá $8$ nghìn/quyển). Viết bất phương trình biểu thị điều kiện; An có mua được $10$ bút và $15$ vở không? $20$ bút và $15$ vở thì sao?`,
   giai: [
    R`Số tiền không vượt quá $200$: $5x+8y\le200$ ($x,y\in\mathbb N$).`,
    R`$(10;15)$: $50+120=170\le200$: mua được.`,
    R`$(20;15)$: $100+120=220>200$: không mua được.`
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
    R`Vẽ $d:x+2y=4$ qua $(4;0)$ và $(0;2)$.`,
    R`Thay $O(0;0)$: $0\le4$ đúng.`,
    R`Miền nghiệm là nửa mặt phẳng bờ $d$ chứa $O$, kể cả đường thẳng $d$ (phần tô màu).`
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
    R`Đường thẳng $d:2x-y=0$ đi qua $O$ và $(1;2)$, nên không lấy $O$ để thử.`,
    R`Thay $(1;0)$: $2>0$ đúng.`,
    R`Miền nghiệm là nửa mặt phẳng bờ $d$ chứa điểm $(1;0)$, **không** kể đường thẳng $d$ (vẽ nét đứt).`
   ] },
 { muc: "VD", de: R`Miền nghiệm (kể cả bờ) của một bất phương trình là nửa mặt phẳng có bờ đi qua $(2;0)$ và $(0;3)$, **không** chứa gốc toạ độ. Tìm bất phương trình đó.`,
   giai: [
    R`Đường thẳng qua $(2;0)$, $(0;3)$: $\dfrac x2+\dfrac y3=1\Leftrightarrow3x+2y=6$.`,
    R`Thay $O$ vào $3x+2y$: $0<6$. Miền nghiệm không chứa $O$ nên có dấu ngược lại, kể cả bờ: $3x+2y\ge6$.`
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
    R`$(1;1)$: $1\ge0$, $1\ge0$, $2\le4$, $0\le2$: thoả mãn cả bốn, **là** nghiệm.`,
    R`$(3;2)$: $3+2=5>4$: **không** là nghiệm.`
   ] },
 { muc: "TH", de: R`Biểu diễn miền nghiệm của hệ ở ví dụ 1, tìm các đỉnh và tính diện tích miền nghiệm.`,
   giai: [
    R`Vẽ bốn đường bờ: $x=0$, $y=0$, $x+y=4$, $x-y=2$. Thử $O$: $0\le4$, $0\le2$ đúng, nên miền nghiệm nằm phía chứa $O$ của hai đường xiên, trong góc phần tư thứ nhất.`,
    R`Các đỉnh: $O(0;0)$; $A(2;0)$ (giao $y=0$ và $x-y=2$); $B(3;1)$ (giải $x+y=4$, $x-y=2$); $C(0;4)$.`,
    R`Diện tích tứ giác $OABC$ = tam giác $OAB$ + tam giác $OBC$: $\dfrac12\cdot2\cdot1+\dfrac12\cdot4\cdot3=1+6=7$.`
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
    R`$F(O)=0$; $F(A)=4$; $F(B)=7$; $F(C)=4$.`,
    R`$\max F=7$ tại $B(3;1)$; $\min F=0$ tại $O(0;0)$.`
   ],
   hinh: MIEN },
 { muc: "VD", de: R`Trên cùng miền nghiệm đó, tìm GTLN, GTNN của $F=x-2y$.`,
   giai: [
    R`$F(O)=0$; $F(A)=2$; $F(B)=3-2=1$; $F(C)=-8$.`,
    R`$\max F=2$ tại $A(2;0)$; $\min F=-8$ tại $C(0;4)$.`
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
    R`Gọi $x$, $y$ là số sản phẩm I, II mỗi ngày ($x,y\ge0$).`,
    R`Ràng buộc: máy A: $2x+y\le10$; máy B: $x+y\le6$. Lãi: $F=40x+30y$.`,
    R`Miền nghiệm là tứ giác có đỉnh $O(0;0)$, $(5;0)$, $(4;2)$ (giải $2x+y=10$, $x+y=6$), $(0;6)$.`,
    R`$F(O)=0$; $F(5;0)=200$; $F(4;2)=160+60=220$; $F(0;6)=180$.`,
    R`**Kết luận.** Làm $4$ sản phẩm I và $2$ sản phẩm II, lãi lớn nhất $220$ nghìn đồng.`
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
    R`Gọi $x$, $y$ là số kg X, Y ($x,y\ge0$). Ràng buộc: $2x+y\ge6$; $x+2y\ge8$. Chi phí $F=3x+2y$.`,
    R`Miền nghiệm không bị chặn, có các đỉnh $(0;6)$, $\left(\dfrac43;\dfrac{10}3\right)$ (giải $2x+y=6$, $x+2y=8$), $(8;0)$.`,
    R`$F(0;6)=12$; $F\left(\frac43;\frac{10}3\right)=4+\dfrac{20}3=\dfrac{32}3\approx10{,}67$; $F(8;0)=24$.`,
    R`Vì $x,y\ge0$ và các hệ số của $F$ dương, $F$ chỉ lớn lên khi đi xa các đỉnh, nên GTNN đạt tại một đỉnh. **Kết luận.** Mua $\dfrac43$ kg X và $\dfrac{10}3$ kg Y, chi phí ít nhất $\dfrac{32}3\approx10{,}67$ nghìn đồng.`
   ] }
 ] }
});
})(window);
