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
    R`$\sin120^\circ=\sin(180^\circ-60^\circ)=\sin60^\circ=\dfrac{\sqrt3}2$.`,
    R`$\cos135^\circ=-\cos45^\circ=-\dfrac{\sqrt2}2$.`,
    R`$\tan150^\circ=-\tan30^\circ=-\dfrac{\sqrt3}3$.`
   ] },
 { muc: "NB", de: R`Cho $M$ trên nửa đường tròn đơn vị với $\widehat{xOM}=120^\circ$. Tìm toạ độ của $M$.`,
   giai: [
    R`$x_0=\cos120^\circ=-\dfrac12$; $y_0=\sin120^\circ=\dfrac{\sqrt3}2$.`,
    R`Vậy $M\left(-\dfrac12;\dfrac{\sqrt3}2\right)$ (nằm bên trái trục $Oy$ vì góc tù).`
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
\end{tikzpicture}`, chuThich: R`$\cos\alpha$ là hoành độ, $\sin\alpha$ là tung độ của $M$.` },
 { muc: "TH", de: R`Cho $\alpha$ là góc tù. Xét dấu $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.`,
   giai: [
    R`Góc tù thì $M$ nằm bên trái trục $Oy$: $x_0<0$, $y_0>0$.`,
    R`Vậy $\sin\alpha>0$, $\cos\alpha<0$, $\tan\alpha=\dfrac{y_0}{x_0}<0$, $\cot\alpha<0$.`
   ] },
 { muc: "TH", de: R`Tính $A=\cos150^\circ+\sin120^\circ+\tan135^\circ\cdot\cot45^\circ$.`,
   giai: [
    R`$\cos150^\circ=-\dfrac{\sqrt3}2$; $\sin120^\circ=\dfrac{\sqrt3}2$; $\tan135^\circ=-1$; $\cot45^\circ=1$.`,
    R`$A=-\dfrac{\sqrt3}2+\dfrac{\sqrt3}2+(-1)\cdot1=-1$.`
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
    R`$\cos^2\alpha=1-\dfrac9{25}=\dfrac{16}{25}$. Vì $\alpha$ tù nên $\cos\alpha<0$: $\cos\alpha=-\dfrac45$.`,
    R`$\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}=\dfrac{3/5}{-4/5}=-\dfrac34$; $\cot\alpha=\dfrac1{\tan\alpha}=-\dfrac43$.`
   ] },
 { muc: "TH", de: R`Cho $\cos\alpha=-\dfrac13$. Tính $\sin\alpha$ và $\tan\alpha$.`,
   giai: [
    R`$\sin^2\alpha=1-\dfrac19=\dfrac89$; vì $\sin\alpha\ge0$ nên $\sin\alpha=\dfrac{2\sqrt2}3$.`,
    R`$\tan\alpha=\dfrac{2\sqrt2/3}{-1/3}=-2\sqrt2$.`
   ] },
 { muc: "VD", de: R`Cho $\tan\alpha=2$. Tính $P=\dfrac{2\sin\alpha+\cos\alpha}{\sin\alpha-3\cos\alpha}$.`,
   giai: [
    R`$\tan\alpha=2$ nên $\cos\alpha\ne0$. Chia cả tử và mẫu cho $\cos\alpha$: $P=\dfrac{2\tan\alpha+1}{\tan\alpha-3}$.`,
    R`$P=\dfrac{2\cdot2+1}{2-3}=\dfrac5{-1}=-5$.`
   ] },
 { muc: "VD", de: R`Rút gọn $B=\cos10^\circ+\cos50^\circ+\cos130^\circ+\cos170^\circ$.`,
   giai: [
    R`$\cos170^\circ=\cos(180^\circ-10^\circ)=-\cos10^\circ$; $\cos130^\circ=-\cos50^\circ$.`,
    R`$B=\cos10^\circ+\cos50^\circ-\cos50^\circ-\cos10^\circ=0$.`
   ] },
 { muc: "TH", de: R`Chứng minh $(\sin\alpha+\cos\alpha)^2+(\sin\alpha-\cos\alpha)^2=2$.`,
   giai: [
    R`Khai triển: $(\sin\alpha+\cos\alpha)^2=\sin^2\alpha+2\sin\alpha\cos\alpha+\cos^2\alpha=1+2\sin\alpha\cos\alpha$.`,
    R`Tương tự $(\sin\alpha-\cos\alpha)^2=1-2\sin\alpha\cos\alpha$.`,
    R`Cộng lại được $2$ (điều phải chứng minh).`
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
    R`$a^2=b^2+c^2-2bc\cos A=9+25-2\cdot3\cdot5\cdot\left(-\dfrac12\right)=34+15=49$.`,
    R`$a=7$.`
   ], hinh: TGC },
 { muc: "TH", de: R`Cho tam giác $ABC$ có $a=7$, $b=5$, $c=8$. Tính góc $A$.`,
   giai: [
    R`$\cos A=\dfrac{b^2+c^2-a^2}{2bc}=\dfrac{25+64-49}{2\cdot5\cdot8}=\dfrac{40}{80}=\dfrac12$.`,
    R`Vậy $\widehat A=60^\circ$.`
   ] },
 { muc: "TH", de: R`Tam giác có ba cạnh $4$, $5$, $7$ là tam giác nhọn, vuông hay tù? Tính góc lớn nhất.`,
   giai: [
    R`Góc lớn nhất đối diện cạnh $7$. So sánh: $4^2+5^2=41<49=7^2$ nên góc đó tù: tam giác **tù**.`,
    R`$\cos\alpha=\dfrac{16+25-49}{2\cdot4\cdot5}=\dfrac{-8}{40}=-\dfrac15$, suy ra $\alpha\approx101{,}54^\circ$.`
   ] },
 { muc: "VD", de: R`Hai tàu cùng rời cảng, đi theo hai hướng hợp với nhau góc $60^\circ$, vận tốc $30$ km/h và $40$ km/h. Sau $2$ giờ, hai tàu cách nhau bao xa?`,
   giai: [
    R`Sau $2$ giờ: tàu thứ nhất đi $60$ km, tàu thứ hai đi $80$ km. Hai quãng đường và khoảng cách $d$ tạo thành tam giác có góc xen giữa $60^\circ$.`,
    R`$d^2=60^2+80^2-2\cdot60\cdot80\cdot\cos60^\circ=3600+6400-4800=5200$.`,
    R`$d=\sqrt{5200}=20\sqrt{13}\approx72{,}11$ km.`
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
    R`$R=\dfrac a{2\sin A}=\dfrac6{2\cdot\frac12}=6$.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$ có $\widehat A=60^\circ$, $\widehat B=45^\circ$, $b=4$. Tính $a$ và $c$.`,
   giai: [
    R`$a=\dfrac{b\sin A}{\sin B}=\dfrac{4\cdot\frac{\sqrt3}2}{\frac{\sqrt2}2}=\dfrac{4\sqrt3}{\sqrt2}=2\sqrt6\approx4{,}90$.`,
    R`$\widehat C=180^\circ-60^\circ-45^\circ=75^\circ$, với $\sin75^\circ=\dfrac{\sqrt6+\sqrt2}4$.`,
    R`$c=\dfrac{b\sin C}{\sin B}=\dfrac{4\cdot\frac{\sqrt6+\sqrt2}4}{\frac{\sqrt2}2}=\dfrac{2(\sqrt6+\sqrt2)}{\sqrt2}=2\sqrt3+2\approx5{,}46$.`
   ] },
 { muc: "TH", de: R`Tính bán kính đường tròn ngoại tiếp tam giác đều cạnh $a$.`,
   giai: [
    R`Mỗi góc bằng $60^\circ$: $R=\dfrac a{2\sin60^\circ}=\dfrac a{\sqrt3}=\dfrac{a\sqrt3}3$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $a=7$, $b=5$, $c=8$. Tính $R$.`,
   giai: [
    R`Tính góc $A$ bằng định lí côsin: $\cos A=\dfrac{25+64-49}{80}=\dfrac12$ nên $\widehat A=60^\circ$.`,
    R`$R=\dfrac a{2\sin A}=\dfrac7{2\cdot\frac{\sqrt3}2}=\dfrac7{\sqrt3}=\dfrac{7\sqrt3}3\approx4{,}04$.`
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
    R`$S=\dfrac12bc\sin A=\dfrac12\cdot6\cdot8\cdot\dfrac12=12$.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$ có $a=13$, $b=14$, $c=15$. Tính $S$, $R$, $r$ và đường cao $h_a$.`,
   giai: [
    R`$p=\dfrac{13+14+15}2=21$. Heron: $S=\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84$.`,
    R`$R=\dfrac{abc}{4S}=\dfrac{13\cdot14\cdot15}{4\cdot84}=\dfrac{2730}{336}=\dfrac{65}8$.`,
    R`$r=\dfrac Sp=\dfrac{84}{21}=4$.`,
    R`$h_a=\dfrac{2S}a=\dfrac{168}{13}\approx12{,}92$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $a=13$, $b=14$, $c=15$. Tính độ dài trung tuyến $m_b$ kẻ từ $B$.`,
   giai: [
    R`$m_b^2=\dfrac{2a^2+2c^2-b^2}4=\dfrac{2\cdot169+2\cdot225-196}4=\dfrac{592}4=148$.`,
    R`$m_b=\sqrt{148}=2\sqrt{37}\approx12{,}17$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $a=7$, $b=5$, $c=8$. Tính diện tích và bán kính đường tròn nội tiếp.`,
   giai: [
    R`Theo định lí côsin, $\cos A=\dfrac{25+64-49}{80}=\dfrac12$ nên $\widehat A=60^\circ$.`,
    R`$S=\dfrac12bc\sin A=\dfrac12\cdot5\cdot8\cdot\dfrac{\sqrt3}2=10\sqrt3$.`,
    R`$p=\dfrac{7+5+8}2=10$; $r=\dfrac Sp=\sqrt3$.`,
    R`(Kiểm tra bằng Heron: $\sqrt{10\cdot3\cdot5\cdot2}=\sqrt{300}=10\sqrt3$, khớp.)`
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
    R`$a^2=9+25-2\cdot3\cdot5\cdot\left(-\dfrac12\right)=49$ nên $a=7$.`,
    R`$\cos B=\dfrac{a^2+c^2-b^2}{2ac}=\dfrac{49+25-9}{70}=\dfrac{13}{14}$, suy ra $\widehat B\approx21{,}79^\circ$.`,
    R`$\widehat C=180^\circ-120^\circ-21{,}79^\circ\approx38{,}21^\circ$.`
   ] },
 { muc: "VD", de: R`Để đo chiều cao một tháp, người ta đứng tại hai điểm $A$, $B$ cách nhau $20$ m, thẳng hàng với chân tháp $H$ ($B$ ở giữa $A$ và $H$). Góc nâng tới đỉnh tháp $T$ từ $A$ là $30^\circ$, từ $B$ là $45^\circ$. Tính chiều cao tháp.`,
   giai: [
    R`Trong tam giác $ABT$: $\widehat{TAB}=30^\circ$; $\widehat{ABT}=180^\circ-45^\circ=135^\circ$; suy ra $\widehat{ATB}=15^\circ$.`,
    R`Định lí sin: $BT=\dfrac{AB\sin30^\circ}{\sin15^\circ}=\dfrac{20\cdot0{,}5}{\sin15^\circ}\approx38{,}64$ m.`,
    R`Tam giác $BHT$ vuông tại $H$: $TH=BT\sin45^\circ\approx27{,}32$ m.`,
    R`(Cách khác: $TH=h$ thì $AH=h\sqrt3$, $BH=h$; $h\sqrt3-h=20$ nên $h=\dfrac{20}{\sqrt3-1}=10(\sqrt3+1)\approx27{,}32$ m.)`
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
    R`$AB^2=200^2+300^2-2\cdot200\cdot300\cdot\cos60^\circ=40000+90000-60000=70000$.`,
    R`$AB=100\sqrt7\approx264{,}58$ m.`
   ] },
 { muc: "VD", de: R`Từ hai điểm $A$, $B$ trên một bờ sông cách nhau $100$ m, người ta ngắm cây $C$ ở bờ bên kia, đo được $\widehat{CAB}=60^\circ$, $\widehat{CBA}=75^\circ$. Tính $AC$ và khoảng cách từ $C$ đến bờ $AB$.`,
   giai: [
    R`$\widehat{ACB}=180^\circ-60^\circ-75^\circ=45^\circ$.`,
    R`Định lí sin: $AC=\dfrac{AB\sin B}{\sin C}=\dfrac{100\cdot\frac{\sqrt6+\sqrt2}4}{\frac{\sqrt2}2}=50(\sqrt3+1)\approx136{,}60$ m.`,
    R`Khoảng cách từ $C$ đến $AB$: $d=AC\sin60^\circ=50(\sqrt3+1)\cdot\dfrac{\sqrt3}2=25(3+\sqrt3)\approx118{,}30$ m.`
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
    R`Mỗi vectơ ứng với một cặp có thứ tự (điểm đầu, điểm cuối) gồm hai điểm khác nhau.`,
    R`Có $3$ cách chọn điểm đầu, $2$ cách chọn điểm cuối: $3\cdot2=6$ vectơ ($\overrightarrow{AB},\overrightarrow{BA},\overrightarrow{AC},\overrightarrow{CA},\overrightarrow{BC},\overrightarrow{CB}$).`
   ] },
 { muc: "NB", de: R`Cho hình bình hành $ABCD$. Tìm vectơ bằng $\overrightarrow{AB}$ và vectơ bằng $\overrightarrow{AD}$ (có điểm đầu, điểm cuối là đỉnh của hình bình hành).`,
   giai: [
    R`$AB\parallel DC$, $AB=DC$, cùng hướng: $\overrightarrow{AB}=\overrightarrow{DC}$.`,
    R`Tương tự $\overrightarrow{AD}=\overrightarrow{BC}$.`
   ] },
 { muc: "TH", de: R`Cho lục giác đều $ABCDEF$ tâm $O$. Tìm các vectơ bằng $\overrightarrow{OA}$ (khác $\overrightarrow{OA}$, có điểm đầu và cuối là $O$ hoặc các đỉnh).`,
   giai: [
    R`Lục giác đều chia thành $6$ tam giác đều chung đỉnh $O$; các tứ giác $OABC$, $OAFE$... là hình thoi.`,
    R`Các vectơ cùng hướng với $\overrightarrow{OA}$, độ dài bằng cạnh lục giác: $\overrightarrow{CB}$, $\overrightarrow{DO}$, $\overrightarrow{EF}$.`,
    R`Vậy có $3$ vectơ: $\overrightarrow{CB}=\overrightarrow{DO}=\overrightarrow{EF}=\overrightarrow{OA}$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1.3,>=stealth]
\draw[thick] (1,0)--(0.5,0.866)--(-0.5,0.866)--(-1,0)--(-0.5,-0.866)--(0.5,-0.866)--cycle;
\draw[->,thick,red] (0,0)--(1,0); \draw[->,thick,blue] (-0.5,0.866)--(0.5,0.866);
\draw[->,thick,blue] (-1,0)--(0,0); \draw[->,thick,blue] (-0.5,-0.866)--(0.5,-0.866);
\node[right] at (1,0){$A$}; \node[above right] at (0.5,0.866){$B$}; \node[above left] at (-0.5,0.866){$C$};
\node[left] at (-1,0){$D$}; \node[below left] at (-0.5,-0.866){$E$}; \node[below right] at (0.5,-0.866){$F$};
\node[below] at (0,0){$O$};
\end{tikzpicture}`, chuThich: R`Bốn vectơ cùng hướng, cùng độ dài: $\overrightarrow{OA}$ (đỏ) và $\overrightarrow{CB},\overrightarrow{DO},\overrightarrow{EF}$ (xanh).` },
 { muc: "TH", de: R`Cho tam giác đều $ABC$ cạnh $a$. Hai vectơ $\overrightarrow{AB}$ và $\overrightarrow{AC}$ có bằng nhau không? Tính $|\overrightarrow{AB}|$.`,
   giai: [
    R`$|\overrightarrow{AB}|=|\overrightarrow{AC}|=a$ nhưng hai vectơ có giá khác nhau (không cùng phương) nên **không** bằng nhau.`
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
    R`$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$; $\overrightarrow{AC}+\overrightarrow{CD}=\overrightarrow{AD}$.`,
    R`Kết quả: $\overrightarrow{AD}$.`
   ] },
 { muc: "TH", de: R`Cho hình bình hành $ABCD$. Tính $\overrightarrow{AB}+\overrightarrow{AD}$ và $\overrightarrow{AB}-\overrightarrow{AD}$.`,
   giai: [
    R`Quy tắc hình bình hành: $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`,
    R`Quy tắc hiệu: $\overrightarrow{AB}-\overrightarrow{AD}=\overrightarrow{DB}$.`
   ] },
 { muc: "TH", de: R`Chứng minh với bốn điểm bất kì $A$, $B$, $C$, $D$: $\overrightarrow{AB}+\overrightarrow{CD}=\overrightarrow{AD}+\overrightarrow{CB}$.`,
   giai: [
    R`Chèn điểm $D$ vào $\overrightarrow{AB}$: $\overrightarrow{AB}=\overrightarrow{AD}+\overrightarrow{DB}$.`,
    R`Vế trái $=\overrightarrow{AD}+\overrightarrow{DB}+\overrightarrow{CD}=\overrightarrow{AD}+(\overrightarrow{CD}+\overrightarrow{DB})=\overrightarrow{AD}+\overrightarrow{CB}$ = vế phải.`
   ] },
 { muc: "VD", de: R`Cho bốn điểm $M$, $N$, $A$, $B$. Rút gọn $\vec u=(\overrightarrow{MA}-\overrightarrow{MB})-(\overrightarrow{NA}-\overrightarrow{NB})$.`,
   giai: [
    R`Quy tắc hiệu: $\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{BA}$ và $\overrightarrow{NA}-\overrightarrow{NB}=\overrightarrow{BA}$.`,
    R`$\vec u=\overrightarrow{BA}-\overrightarrow{BA}=\vec0$.`
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
    R`Gọi $M$ là trung điểm $BC$: $\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$, với $AM=\dfrac{a\sqrt3}2$.`,
    R`$|\overrightarrow{AB}+\overrightarrow{AC}|=2\cdot\dfrac{a\sqrt3}2=a\sqrt3$.`,
    R`$\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$ nên $|\overrightarrow{AB}-\overrightarrow{AC}|=a$.`
   ] },
 { muc: "TH", de: R`Cho hình vuông $ABCD$ cạnh $a$. Tính $|\overrightarrow{AB}+\overrightarrow{AD}|$ và $|\overrightarrow{AB}+\overrightarrow{AC}|$.`,
   giai: [
    R`$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$, nên độ dài là $AC=a\sqrt2$.`,
    R`Đặt $A(0;0)$, $B(a;0)$, $C(a;a)$: $\overrightarrow{AB}+\overrightarrow{AC}=(2a;a)$, độ dài $\sqrt{4a^2+a^2}=a\sqrt5$.`,
    R`(Cách hình học: gọi $N$ trung điểm $BC$ thì tổng bằng $2\overrightarrow{AN}$, $AN=\sqrt{a^2+\frac{a^2}4}=\frac{a\sqrt5}2$.)`
   ] },
 { muc: "VD", de: R`Hai lực $\vec F_1$, $\vec F_2$ cùng tác động vào một vật, có độ lớn $3$ N và $4$ N, hướng vuông góc với nhau. Tính độ lớn hợp lực.`,
   giai: [
    R`Hợp lực là đường chéo của hình chữ nhật dựng trên hai lực.`,
    R`$F=\sqrt{3^2+4^2}=5$ N.`
   ] },
 { muc: "VD", de: R`Hai lực $\vec F_1$, $\vec F_2$ cùng độ lớn $10$ N, hợp với nhau góc $60^\circ$. Tính độ lớn hợp lực.`,
   giai: [
    R`Dựng hình bình hành $OACB$ với $\overrightarrow{OA}=\vec F_1$, $\overrightarrow{OB}=\vec F_2$. Vì $OA=OB$ nên đó là hình thoi, $\vec F=\overrightarrow{OC}$.`,
    R`Đường chéo $OC$ là phân giác góc $60^\circ$; tam giác $OAC$ có $OA=AC=10$, $\widehat{AOC}=30^\circ$.`,
    R`Gọi $I$ là giao hai đường chéo: $OI=10\cos30^\circ=5\sqrt3$, nên $OC=2OI=10\sqrt3\approx17{,}32$ N.`
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
    R`$\overrightarrow{AI}$ cùng hướng $\overrightarrow{AB}$, dài bằng một nửa: $\overrightarrow{AI}=\dfrac12\overrightarrow{AB}$.`,
    R`$\overrightarrow{IA}=-\overrightarrow{AI}=-\dfrac12\overrightarrow{AB}$.`
   ] },
 { muc: "TH", de: R`Cho đoạn $AB$. Xác định điểm $M$ thoả $\overrightarrow{MA}+2\overrightarrow{MB}=\vec0$.`,
   giai: [
    R`Chèn $A$: $\overrightarrow{MB}=\overrightarrow{MA}+\overrightarrow{AB}$. Thay vào: $3\overrightarrow{MA}+2\overrightarrow{AB}=\vec0$.`,
    R`$\overrightarrow{AM}=\dfrac23\overrightarrow{AB}$: $M$ nằm trên đoạn $AB$, $AM=\dfrac23AB$.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$ có trọng tâm $G$, $M$ là trung điểm $BC$. Biểu diễn $\overrightarrow{AG}$ theo $\overrightarrow{AB}$, $\overrightarrow{AC}$.`,
   giai: [
    R`$\overrightarrow{AM}=\dfrac12\left(\overrightarrow{AB}+\overrightarrow{AC}\right)$.`,
    R`$\overrightarrow{AG}=\dfrac23\overrightarrow{AM}=\dfrac13\overrightarrow{AB}+\dfrac13\overrightarrow{AC}$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$. Xác định điểm $M$ thoả $\overrightarrow{MA}+\overrightarrow{MB}+2\overrightarrow{MC}=\vec0$.`,
   giai: [
    R`Gọi $I$ là trung điểm $AB$: $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$.`,
    R`Đẳng thức thành $2\overrightarrow{MI}+2\overrightarrow{MC}=\vec0$, tức $\overrightarrow{MI}+\overrightarrow{MC}=\vec0$.`,
    R`Vậy $M$ là trung điểm của đoạn $IC$ (trung điểm trung tuyến kẻ từ $C$).`
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
    R`$\overrightarrow{AB}+\overrightarrow{AC}=2\overrightarrow{AM}$ (tính chất trung điểm).`,
    R`$\overrightarrow{AM}=\dfrac12\overrightarrow{AB}+\dfrac12\overrightarrow{AC}$.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$, điểm $N$ trên cạnh $AC$ với $AN=2NC$. Phân tích $\overrightarrow{BN}$ theo $\overrightarrow{AB}$, $\overrightarrow{AC}$.`,
   giai: [
    R`$\overrightarrow{AN}=\dfrac23\overrightarrow{AC}$.`,
    R`$\overrightarrow{BN}=\overrightarrow{BA}+\overrightarrow{AN}=-\overrightarrow{AB}+\dfrac23\overrightarrow{AC}$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$, $M$ là trung điểm $BC$, $I$ là trung điểm $AM$, $K$ thuộc cạnh $AC$ với $AK=\dfrac13AC$. Chứng minh $B$, $I$, $K$ thẳng hàng.`,
   giai: [
    R`Đặt $\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AC}$. Ta có $\overrightarrow{AI}=\dfrac12\overrightarrow{AM}=\dfrac14\vec a+\dfrac14\vec b$; $\overrightarrow{AK}=\dfrac13\vec b$.`,
    R`$\overrightarrow{BI}=\overrightarrow{AI}-\overrightarrow{AB}=-\dfrac34\vec a+\dfrac14\vec b=\dfrac14(-3\vec a+\vec b)$.`,
    R`$\overrightarrow{BK}=\overrightarrow{AK}-\overrightarrow{AB}=-\vec a+\dfrac13\vec b=\dfrac13(-3\vec a+\vec b)$.`,
    R`Suy ra $\overrightarrow{BI}=\dfrac34\overrightarrow{BK}$: $B$, $I$, $K$ thẳng hàng.`
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
    R`$\overrightarrow{AB}=(4-1;6-2)=(3;4)$.`,
    R`$AB=\sqrt{3^2+4^2}=5$.`
   ] },
 { muc: "TH", de: R`Cho $\vec u=(2;-1)$, $\vec v=(-3;4)$. Tìm toạ độ $2\vec u-\vec v$ và tính $|\vec v|$.`,
   giai: [
    R`$2\vec u=(4;-2)$; $2\vec u-\vec v=(4-(-3);-2-4)=(7;-6)$.`,
    R`$|\vec v|=\sqrt{9+16}=5$.`
   ] },
 { muc: "TH", de: R`Tìm $m$ để $\vec u=(m;2)$ có độ dài $\sqrt{13}$.`,
   giai: [
    R`$|\vec u|^2=m^2+4=13\iff m^2=9\iff m=\pm3$.`
   ] },
 { muc: "VD", de: R`Phân tích $\vec c=(4;-1)$ theo $\vec a=(1;1)$ và $\vec b=(2;-1)$.`,
   giai: [
    R`Tìm $x$, $y$ để $\vec c=x\vec a+y\vec b$: $\begin{cases}x+2y=4\\x-y=-1\end{cases}$.`,
    R`Trừ hai phương trình: $3y=5$, $y=\dfrac53$; $x=y-1=\dfrac23$.`,
    R`Vậy $\vec c=\dfrac23\vec a+\dfrac53\vec b$. (Thử lại: $\frac23+\frac{10}3=4$, $\frac23-\frac53=-1$.)`
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
    R`$I\left(\dfrac{1+5}2;\dfrac{3-1}2\right)=(3;1)$.`,
    R`$G\left(\dfrac{1+5+0}3;\dfrac{3-1+4}3\right)=(2;2)$.`
   ] },
 { muc: "TH", de: R`Cho $A(1;1)$, $B(4;2)$, $C(5;5)$. Tìm $D$ để $ABCD$ là hình bình hành.`,
   giai: [
    R`$ABCD$ là hình bình hành $\iff\overrightarrow{AB}=\overrightarrow{DC}$. $\overrightarrow{AB}=(3;1)$, $\overrightarrow{DC}=(5-x;5-y)$.`,
    R`$5-x=3$, $5-y=1$, nên $D(2;4)$.`
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
    R`Cùng phương $\iff2\cdot6-m\cdot(-3)=0\iff12+3m=0\iff m=-4$.`,
    R`Kiểm tra: $\vec v=(-4;6)=-2\vec u$.`
   ] },
 { muc: "VD", de: R`Cho $A(1;2)$, $B(3;5)$. a) Tìm $m$ để $C(m;11)$ thẳng hàng với $A$, $B$. b) Tìm điểm $M$ trên trục $Ox$ thẳng hàng với $A$, $B$.`,
   giai: [
    R`a) $\overrightarrow{AB}=(2;3)$, $\overrightarrow{AC}=(m-1;9)$. Cùng phương: $2\cdot9-3(m-1)=0\iff m=7$.`,
    R`b) $M(x;0)$: $\overrightarrow{AM}=(x-1;-2)$. Cùng phương với $(2;3)$: $3(x-1)-2\cdot(-2)=0\iff x=-\dfrac13$.`,
    R`Vậy $M\left(-\dfrac13;0\right)$.`
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
    R`$(\overrightarrow{AB},\overrightarrow{AC})=60^\circ$: $\overrightarrow{AB}\cdot\overrightarrow{AC}=a\cdot a\cdot\dfrac12=\dfrac{a^2}2$.`,
    R`$(\overrightarrow{AB},\overrightarrow{BC})=180^\circ-60^\circ=120^\circ$: $\overrightarrow{AB}\cdot\overrightarrow{BC}=a^2\cos120^\circ=-\dfrac{a^2}2$.`
   ] },
 { muc: "TH", de: R`Cho hình vuông $ABCD$ cạnh $a$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$, $\overrightarrow{AC}\cdot\overrightarrow{BD}$, $\overrightarrow{AB}\cdot\overrightarrow{CD}$.`,
   giai: [
    R`$(\overrightarrow{AB},\overrightarrow{AC})=45^\circ$, $AC=a\sqrt2$: $\overrightarrow{AB}\cdot\overrightarrow{AC}=a\cdot a\sqrt2\cdot\dfrac{\sqrt2}2=a^2$.`,
    R`Hai đường chéo vuông góc: $\overrightarrow{AC}\cdot\overrightarrow{BD}=0$.`,
    R`$\overrightarrow{CD}$ ngược hướng $\overrightarrow{AB}$: $\overrightarrow{AB}\cdot\overrightarrow{CD}=a\cdot a\cdot\cos180^\circ=-a^2$.`
   ] },
 { muc: "VD", de: R`Cho tam giác $ABC$ có $AB=3$, $AC=5$, $\widehat A=120^\circ$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$, rồi suy ra $BC$.`,
   giai: [
    R`$\overrightarrow{AB}\cdot\overrightarrow{AC}=3\cdot5\cdot\cos120^\circ=-\dfrac{15}2$.`,
    R`$\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$ nên $BC^2=AC^2+AB^2-2\overrightarrow{AB}\cdot\overrightarrow{AC}=25+9+15=49$.`,
    R`$BC=7$.`
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
    R`$\vec a\cdot\vec b=1\cdot3+2\cdot(-1)=1$.`,
    R`$|\vec a|=\sqrt5$, $|\vec b|=\sqrt{10}$: $\cos(\vec a,\vec b)=\dfrac1{\sqrt{50}}=\dfrac{\sqrt2}{10}\approx0{,}14$ (góc $\approx81{,}87^\circ$).`
   ] },
 { muc: "TH", de: R`Tìm $m$ để $\vec a=(2;-1)$ vuông góc với $\vec b=(m;4)$.`,
   giai: [
    R`$\vec a\cdot\vec b=2m-4=0\iff m=2$.`
   ] },
 { muc: "TH", de: R`Cho $A(1;1)$, $B(3;0)$, $C(2;3)$. Chứng minh tam giác $ABC$ vuông tại $A$ và tính diện tích.`,
   giai: [
    R`$\overrightarrow{AB}=(2;-1)$, $\overrightarrow{AC}=(1;2)$; $\overrightarrow{AB}\cdot\overrightarrow{AC}=2-2=0$ nên vuông tại $A$.`,
    R`$AB=AC=\sqrt5$: $S=\dfrac12\cdot\sqrt5\cdot\sqrt5=\dfrac52$.`
   ] },
 { muc: "VD", de: R`Cho $A(2;5)$, $B(1;1)$, $C(5;3)$. Tìm chân đường cao $K$ kẻ từ $A$ và trực tâm $H$ của tam giác $ABC$.`,
   giai: [
    R`$\overrightarrow{BC}=(4;2)$. $K=B+t\overrightarrow{BC}=(1+4t;1+2t)$, $\overrightarrow{AK}=(4t-1;2t-4)$.`,
    R`$\overrightarrow{AK}\cdot\overrightarrow{BC}=4(4t-1)+2(2t-4)=20t-12=0\iff t=\dfrac35$, nên $K\left(\dfrac{17}5;\dfrac{11}5\right)$.`,
    R`Trực tâm $H(x;y)$: $\overrightarrow{AH}\cdot\overrightarrow{BC}=0\iff4(x-2)+2(y-5)=0\iff2x+y=9$.`,
    R`$\overrightarrow{AC}=(3;-2)$: $\overrightarrow{BH}\cdot\overrightarrow{AC}=0\iff3(x-1)-2(y-1)=0\iff3x-2y=1$.`,
    R`Giải hệ: $x=\dfrac{19}7$, $y=\dfrac{25}7$. Vậy $H\left(\dfrac{19}7;\dfrac{25}7\right)$.`,
    R`Thử lại: $\overrightarrow{CH}=\left(-\frac{16}7;\frac47\right)$, $\overrightarrow{AB}=(-1;-4)$, tích vô hướng $\frac{16}7-\frac{16}7=0$ đúng.`
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
    R`$\vec a\cdot\vec b=3\cdot4\cdot\dfrac12=6$.`,
    R`$|\vec a+\vec b|^2=9+16+12=37\Rightarrow|\vec a+\vec b|=\sqrt{37}$.`,
    R`$|\vec a-\vec b|^2=9+16-12=13\Rightarrow|\vec a-\vec b|=\sqrt{13}$.`
   ] },
 { muc: "TH", de: R`Cho $I$ là trung điểm $AB$, $M$ là điểm bất kì. Chứng minh $\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-IA^2$.`,
   giai: [
    R`$\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}$; $\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}=\overrightarrow{MI}-\overrightarrow{IA}$.`,
    R`$\overrightarrow{MA}\cdot\overrightarrow{MB}=(\overrightarrow{MI}+\overrightarrow{IA})(\overrightarrow{MI}-\overrightarrow{IA})=MI^2-IA^2$.`
   ] },
 { muc: "VD", de: R`Một người kéo thùng hàng đi $50$ m bằng lực $20$ N, hướng lực hợp với hướng di chuyển góc $30^\circ$. Tính công của lực.`,
   giai: [
    R`$A=|\vec F|\cdot|\vec s|\cdot\cos30^\circ=20\cdot50\cdot\dfrac{\sqrt3}2=500\sqrt3\approx866$ J.`
   ] },
 { muc: "VD", de: R`Cho $|\vec a|=2$, $|\vec b|=3$, $|\vec a+\vec b|=4$. Tính $\vec a\cdot\vec b$, $\cos(\vec a,\vec b)$ và $|\vec a-\vec b|$.`,
   giai: [
    R`$\vec a\cdot\vec b=\dfrac{16-4-9}2=\dfrac32$.`,
    R`$\cos(\vec a,\vec b)=\dfrac{3/2}{2\cdot3}=\dfrac14$.`,
    R`$|\vec a-\vec b|^2=4+9-2\cdot\dfrac32=10\Rightarrow|\vec a-\vec b|=\sqrt{10}$.`
   ] }
 ] }
});
})(window);
