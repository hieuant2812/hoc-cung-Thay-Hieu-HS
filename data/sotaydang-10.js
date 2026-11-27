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
    R`$3{,}14159$: chữ số sau hàng phần trăm là $1<5$, giữ nguyên: $3{,}14$.`,
    R`$1\,234\,567$: chữ số sau hàng nghìn là $5\ge5$, cộng $1$: $1\,235\,000$.`
   ] },
 { muc: "TH", de: R`Lấy $\sqrt2\approx1{,}41$. Đánh giá sai số tuyệt đối, biết $1{,}414<\sqrt2<1{,}415$.`,
   giai: [
    R`$1{,}414-1{,}41<\sqrt2-1{,}41<1{,}415-1{,}41$, tức $0{,}004<\Delta<0{,}005$.`,
    R`Vậy sai số tuyệt đối không vượt quá $0{,}005$.`
   ] },
 { muc: "TH", de: R`Cho số gần đúng $a=2\,841\,275$ với độ chính xác $d=300$. Hãy quy tròn $a$.`,
   giai: [
    R`$d=300$: không nhỏ hơn $100$ (đơn vị hàng trăm) nhưng nhỏ hơn $1000$ (đơn vị hàng nghìn).`,
    R`Quy tròn đến hàng nghìn: chữ số sau là $2<5$: $a\approx2\,841\,000$.`
   ] },
 { muc: "VD", de: R`Đo chiều dài cây cầu được $152\pm0{,}2$ m và chiều dài cái bút được $15\pm0{,}1$ cm. Phép đo nào chính xác hơn?`,
   giai: [
    R`Cầu: $\delta\le\dfrac{0{,}2}{152}\approx0{,}13\%$.`,
    R`Bút: $\delta\le\dfrac{0{,}1}{15}\approx0{,}67\%$.`,
    R`Sai số tương đối của phép đo cầu nhỏ hơn: **đo cầu chính xác hơn** (dù $d$ lớn hơn).`
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
    R`$\bar x=\dfrac{91}9\approx10{,}11$.`,
    R`$n=9$ lẻ: $M_e$ là số thứ $5$: $M_e=9$.`,
    R`Giá trị $8$ xuất hiện $2$ lần, nhiều nhất: $M_o=8$.`
   ] },
 { muc: "TH", de: R`Tìm tứ phân vị của mẫu ở ví dụ trên.`,
   giai: [
    R`$Q_2=M_e=9$.`,
    R`Nửa dưới (bỏ $9$): $5;7;8;8$ nên $Q_1=\dfrac{7+8}2=7{,}5$.`,
    R`Nửa trên: $10;12;14;18$ nên $Q_3=\dfrac{12+14}2=13$.`
   ] },
 { muc: "TH", de: R`Điểm kiểm tra của $10$ bạn: $6;\ 7;\ 7;\ 8;\ 8;\ 8;\ 9;\ 9;\ 10;\ 5$. Tìm $\bar x$, $M_e$, $Q_1$, $Q_3$.`,
   giai: [
    R`Sắp xếp: $5;6;7;7;8;8;8;9;9;10$. $\bar x=\dfrac{77}{10}=7{,}7$.`,
    R`$n=10$ chẵn: $M_e=\dfrac{8+8}2=8$.`,
    R`Nửa dưới $5;6;7;7;8$: $Q_1=7$. Nửa trên $8;8;9;9;10$: $Q_3=9$.`
   ] },
 { muc: "VD", de: R`Khảo sát số con của $20$ gia đình: $$\begin{array}{c|ccccc}\text{Số con}&0&1&2&3&4\\\hline\text{Số gia đình}&2&5&8&4&1\end{array}$$ Tìm $\bar x$, $M_e$, $M_o$, $Q_1$, $Q_3$.`,
   giai: [
    R`$\bar x=\dfrac{0\cdot2+1\cdot5+2\cdot8+3\cdot4+4\cdot1}{20}=\dfrac{37}{20}=1{,}85$.`,
    R`Tần số cộng dồn: $2;\ 7;\ 15;\ 19;\ 20$. Vị trí $10$ và $11$ đều có giá trị $2$: $M_e=2$.`,
    R`$Q_1$: trung vị $10$ số đầu, là trung bình số thứ $5$, $6$ (đều bằng $1$): $Q_1=1$.`,
    R`$Q_3$: trung bình số thứ $15$ (bằng $2$) và $16$ (bằng $3$): $Q_3=2{,}5$.`,
    R`$M_o=2$ (tần số $8$ lớn nhất).`
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
    R`$R=18-5=13$; $\Delta_Q=13-7{,}5=5{,}5$.`
   ] },
 { muc: "TH", de: R`Mẫu trên có giá trị bất thường không?`,
   giai: [
    R`$Q_3+1{,}5\Delta_Q=13+8{,}25=21{,}25$; $Q_1-1{,}5\Delta_Q=7{,}5-8{,}25=-0{,}75$.`,
    R`Mọi giá trị nằm trong $[-0{,}75;21{,}25]$: **không** có giá trị bất thường.`
   ] },
 { muc: "VD", de: R`Thời gian (phút) chạy về đích của $9$ bạn: $12;13;14;15;15;16;17;18;40$. Tìm giá trị bất thường.`,
   giai: [
    R`$n=9$: $M_e=15$. Nửa dưới $12;13;14;15$: $Q_1=13{,}5$. Nửa trên $16;17;18;40$: $Q_3=17{,}5$.`,
    R`$\Delta_Q=4$; $Q_3+1{,}5\Delta_Q=23{,}5$; $Q_1-1{,}5\Delta_Q=7{,}5$.`,
    R`$40>23{,}5$: giá trị $40$ là **bất thường**.`,
    R`Nhận xét: $R=40-12=28$ bị đẩy lên rất lớn chỉ vì một giá trị, còn $\Delta_Q=4$ vẫn phản ánh đúng nhóm chính.`
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
    R`$\bar x=6$. Các độ lệch: $-4;-2;0;2;4$; bình phương: $16;4;0;4;16$.`,
    R`$s^2=\dfrac{40}5=8$; $s=2\sqrt2\approx2{,}83$.`
   ] },
 { muc: "TH", de: R`Tính phương sai của mẫu cho bởi bảng $$\begin{array}{c|ccccc}x&5&6&7&8&9\\\hline n&1&2&4&2&1\end{array}$$`,
   giai: [
    R`$n=10$; $\bar x=\dfrac{5+12+28+16+9}{10}=7$.`,
    R`$\sum n_i(x_i-\bar x)^2=1\cdot4+2\cdot1+4\cdot0+2\cdot1+1\cdot4=12$.`,
    R`$s^2=\dfrac{12}{10}=1{,}2$; $s\approx1{,}10$.`
   ] },
 { muc: "VD", de: R`Điểm $6$ bài kiểm tra của An: $7;8;7;8;7;8$; của Bình: $5;10;6;9;7;8$. Ai học đều hơn?`,
   giai: [
    R`Cả hai có $\bar x=\dfrac{45}6=7{,}5$.`,
    R`An: mọi độ lệch là $\pm0{,}5$: $s^2_A=0{,}25$, $s_A=0{,}5$.`,
    R`Bình: độ lệch $\pm2{,}5;\pm1{,}5;\pm0{,}5$: $s^2_B=\dfrac{2(6{,}25+2{,}25+0{,}25)}6=\dfrac{17{,}5}6\approx2{,}92$, $s_B\approx1{,}71$.`,
    R`$s_A<s_B$: **An học đều hơn**.`
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
   giai: [ R`Điều kiện $x-3\ne0\iff x\ne3$. Vậy $D=\mathbb R\setminus\{3\}$.` ] },
 { muc: "NB", de: R`Tìm tập xác định của $y=\sqrt{4-2x}$.`,
   giai: [ R`Điều kiện $4-2x\ge0\iff x\le2$. Vậy $D=(-\infty;2]$.` ] },
 { muc: "TH", de: R`Tìm tập xác định của $y=\sqrt{x+1}+\dfrac1{x-2}$.`,
   giai: [ R`Điều kiện $\begin{cases}x+1\ge0\\x-2\ne0\end{cases}\iff\begin{cases}x\ge-1\\x\ne2\end{cases}$.`, R`$D=[-1;+\infty)\setminus\{2\}$.` ] },
 { muc: "VD", de: R`Tìm $m$ để hàm số $y=\sqrt{x-m+1}$ xác định trên $[2;+\infty)$.`,
   giai: [
    R`Hàm số xác định khi $x\ge m-1$: $D=[m-1;+\infty)$.`,
    R`Cần $[2;+\infty)\subset[m-1;+\infty)\iff m-1\le2\iff m\le3$.`
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
   giai: [ R`$f(0)=2$; $f(-1)=1+3+2=6$; $f(2)=4-6+2=0$.` ] },
 { muc: "TH", de: R`Điểm nào thuộc đồ thị $y=2x^2-1$: $A(1;1)$, $B(-1;3)$, $C(0;-1)$?`,
   giai: [
    R`$A$: $2\cdot1-1=1$ đúng: $A$ thuộc đồ thị.`,
    R`$B$: $2\cdot1-1=1\ne3$: $B$ không thuộc.`,
    R`$C$: $0-1=-1$ đúng: $C$ thuộc đồ thị.`
   ] },
 { muc: "VD", de: R`Giá cước taxi: $1$ km đầu $12\,000$ đồng; từ trên $1$ km đến $30$ km: $10\,000$ đồng/km; trên $30$ km: $8\,000$ đồng/km. Viết hàm số tính tiền $f(x)$ theo số km $x$ và tính tiền đi $20$ km, $40$ km.`,
   giai: [
    R`$f(x)=\begin{cases}12\,000x&\text{khi }0<x\le1\\12\,000+10\,000(x-1)&\text{khi }1<x\le30\\302\,000+8\,000(x-30)&\text{khi }x>30\end{cases}$ (vì $f(30)=12\,000+290\,000=302\,000$).`,
    R`$f(20)=12\,000+10\,000\cdot19=202\,000$ đồng.`,
    R`$f(40)=302\,000+8\,000\cdot10=382\,000$ đồng.`
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
   giai: [ R`$a=-3<0$ nên hàm số nghịch biến trên $\mathbb R$.` ] },
 { muc: "TH", de: R`Xét tính đơn điệu của $y=x^2$ trên $(0;+\infty)$ và $(-\infty;0)$.`,
   giai: [
    R`$T=\dfrac{x_2^2-x_1^2}{x_2-x_1}=x_1+x_2$.`,
    R`Trên $(0;+\infty)$: $x_1+x_2>0$, đồng biến. Trên $(-\infty;0)$: $x_1+x_2<0$, nghịch biến.`
   ] },
 { muc: "TH", de: R`Chứng minh $y=\dfrac1x$ nghịch biến trên $(0;+\infty)$.`,
   giai: [
    R`$f(x_2)-f(x_1)=\dfrac1{x_2}-\dfrac1{x_1}=\dfrac{x_1-x_2}{x_1x_2}$, nên $T=-\dfrac1{x_1x_2}$.`,
    R`$x_1,x_2>0$ nên $T<0$: hàm số nghịch biến trên $(0;+\infty)$.`
   ] },
 { muc: "VD", de: R`Tìm $m$ để $y=(m-2)x+1$ đồng biến trên $\mathbb R$.`,
   giai: [ R`Hàm bậc nhất đồng biến khi hệ số $a=m-2>0\iff m>2$.` ] }
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
    R`$x_I=-\dfrac{-4}{2}=2$; $y_I=4-8+3=-1$. Đỉnh $I(2;-1)$, trục $x=2$.`,
    R`$a=1>0$: Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y$/2}{$-\infty$,$2$,$+\infty$}
\tkzTabVar{+/$+\infty$,-/$-1$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`Giao $Oy$: $(0;3)$; giao $Ox$: $x^2-4x+3=0\iff x=1$ hoặc $x=3$. Điểm đối xứng với $(0;3)$ qua trục là $(4;3)$.`
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
    R`$x_I=-\dfrac4{2\cdot(-2)}=1$; $y_I=-2+4+1=3$.`,
    R`$a=-2<0$: Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y$/2}{$-\infty$,$1$,$+\infty$}
\tkzTabVar{-/$-\infty$,+/$3$,-/$-\infty$}
\end{tikzpicture}\end{center}`,
    R`Đồng biến trên $(-\infty;1)$, nghịch biến trên $(1;+\infty)$; GTLN bằng $3$ khi $x=1$.`
   ] },
 { muc: "VD", de: R`Tìm GTLN, GTNN của $y=x^2-4x+3$ trên đoạn $[0;3]$ và trên đoạn $[3;5]$.`,
   giai: [
    R`Trên $[0;3]$: hoành độ đỉnh $2\in[0;3]$. $f(2)=-1$, $f(0)=3$, $f(3)=0$. GTNN $=-1$ (tại $x=2$), GTLN $=3$ (tại $x=0$).`,
    R`Trên $[3;5]$: hàm đồng biến (vì $3>2$). GTNN $=f(3)=0$, GTLN $=f(5)=25-20+3=8$.`
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
    R`Qua $A$: $c=-1$. Qua $B$: $a+b-1=2\iff a+b=3$. Qua $C$: $a-b-1=0\iff a-b=1$.`,
    R`Giải: $a=2$, $b=1$. Vậy $y=2x^2+x-1$.`
   ] },
 { muc: "TH", de: R`Tìm $a$, $b$ để parabol $y=ax^2+bx+2$ có đỉnh $I(1;0)$.`,
   giai: [
    R`$-\dfrac b{2a}=1\iff b=-2a$. Đỉnh thuộc parabol: $a+b+2=0$.`,
    R`Thay $b=-2a$: $-a+2=0\iff a=2$, $b=-4$. Vậy $y=2x^2-4x+2=2(x-1)^2$.`
   ] },
 { muc: "VD", de: R`Parabol $y=ax^2+bx+c$ có dạng như hình (bề lõm hướng xuống, cắt $Oy$ phía trên $O$, đỉnh nằm bên phải $Oy$). Xác định dấu $a$, $b$, $c$.`,
   giai: [
    R`Bề lõm hướng xuống: $a<0$.`,
    R`Cắt $Oy$ tại điểm có tung độ dương: $c>0$.`,
    R`Đỉnh bên phải: $-\dfrac b{2a}>0$; vì $a<0$ nên $b>0$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8,>=stealth]
\draw[->] (-1.5,0)--(3.5,0) node[below]{$x$}; \draw[->] (0,-1.5)--(0,2.8) node[left]{$y$};
\draw[thick,smooth,samples=100,domain=-0.8:2.8,blue] plot(\x,{-\x*\x+2*\x+1});
\fill (1,2) circle (2pt); \fill (0,1) circle (2pt); \draw[dashed] (1,2)--(1,0);
\node[above] at (1,2){$I$}; \node[left] at (0,1){$c$}; \node[below left] at (0,0){$O$};
\end{tikzpicture}`, chuThich: R`Đồ thị minh hoạ: $y=-x^2+2x+1$ ($a=-1<0$, $b=2>0$, $c=1>0$).` }
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
    R`Đặt hệ trục: hai chân $(-4;0)$, $(4;0)$, đỉnh $(0;8)$. Parabol $y=ax^2+8$.`,
    R`Qua $(4;0)$: $16a+8=0\iff a=-\dfrac12$. Vậy $y=-\dfrac12x^2+8$.`,
    R`Tại $x=2$: $y=-2+8=6$ m.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.4,>=stealth]
\draw[->] (-5.5,0)--(5.5,0) node[below]{$x$}; \draw[->] (0,-0.5)--(0,10.5) node[left]{$y$};
\draw[thick,smooth,samples=100,domain=-4:4,blue] plot(\x,{-0.5*\x*\x+8});
\draw[dashed] (2,0)--(2,6); \fill (2,6) circle (3pt);
\node[below] at (-4,0){$-4$}; \node[below] at (4,0){$4$}; \node[above left] at (0,8){$8$}; \node[right] at (2.1,6.3){$(2;6)$};
\end{tikzpicture}` },
 { muc: "VD", de: R`Một quả bóng được ném lên, độ cao $h(t)=-5t^2+20t+1$ (m) sau $t$ giây. Tìm độ cao lớn nhất và thời điểm bóng chạm đất.`,
   giai: [
    R`Đỉnh: $t=-\dfrac{20}{2\cdot(-5)}=2$; $h(2)=-20+40+1=21$ m. Độ cao lớn nhất $21$ m tại $t=2$ s.`,
    R`Chạm đất: $-5t^2+20t+1=0\iff5t^2-20t-1=0$; $t=\dfrac{20\pm\sqrt{420}}{10}$.`,
    R`Lấy nghiệm dương: $t=\dfrac{20+\sqrt{420}}{10}\approx4{,}05$ s.`
   ] },
 { muc: "VD", de: R`Dùng $40$ m lưới rào một mảnh vườn hình chữ nhật, một cạnh tựa vào bức tường (không cần rào). Tìm kích thước để diện tích lớn nhất.`,
   giai: [
    R`Gọi $x$ (m) là cạnh vuông góc với tường ($0<x<20$); cạnh song song tường dài $40-2x$.`,
    R`$S=x(40-2x)=-2x^2+40x$; đỉnh tại $x=-\dfrac{40}{2\cdot(-2)}=10$.`,
    R`$S_{\max}=10\cdot20=200$ m² khi hai cạnh vuông góc tường $10$ m, cạnh song song tường $20$ m.`
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
    R`$f(x)=0\iff x=2$ hoặc $x=3$; $a=1>0$.`,
    R`Bảng xét dấu:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.4,espcl=2]{$x$/0.8,$f(x)$/0.8}{$-\infty$,$2$,$3$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,}
\end{tikzpicture}\end{center}`,
    R`$f(x)>0$ khi $x<2$ hoặc $x>3$; $f(x)<0$ khi $2<x<3$.`
   ] },
 { muc: "NB", de: R`Xét dấu $f(x)=-x^2+2x-3$.`,
   giai: [ R`$\Delta'=1-3=-2<0$, $a=-1<0$: $f(x)<0$ với mọi $x\in\mathbb R$.` ] },
 { muc: "TH", de: R`Xét dấu $f(x)=4x^2-4x+1$.`,
   giai: [ R`$\Delta'=4-4=0$; $f(x)=(2x-1)^2$. Vậy $f(x)>0$ với mọi $x\ne\dfrac12$ và $f\left(\dfrac12\right)=0$.` ] },
 { muc: "VD", de: R`Xét dấu $g(x)=\dfrac{x^2-4}{x^2-4x+3}$.`,
   giai: [
    R`Tử $=0\iff x=\pm2$; mẫu $=0\iff x=1$ hoặc $x=3$ (tại đó $g$ không xác định).`,
    R`Xét dấu từng nhân tử rồi lấy thương:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=3.6,espcl=1.5]{$x$/0.8,$x^2-4$/0.8,$x^2-4x+3$/0.8,$g(x)$/0.8}{$-\infty$,$-2$,$1$,$2$,$3$,$+\infty$}
\tkzTabLine{,+,0,-,t,-,0,+,t,+,}
\tkzTabLine{,+,t,+,0,-,t,-,0,+,}
\tkzTabLine{,+,0,-,d,+,0,-,d,+,}
\end{tikzpicture}\end{center}`,
    R`$g(x)>0$ trên $(-\infty;-2)\cup(1;2)\cup(3;+\infty)$; $g(x)<0$ trên $(-2;1)\cup(2;3)$.`
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
   giai: [ R`Nghiệm $x=-1$, $x=4$; $a>0$ nên âm ở giữa hai nghiệm.`, R`Tập nghiệm $S=(-1;4)$.` ] },
 { muc: "TH", de: R`Giải $-2x^2+3x+5\ge0$.`,
   giai: [ R`Nhân $-1$, đổi chiều: $2x^2-3x-5\le0$. Nghiệm $x=-1$, $x=\dfrac52$.`, R`$S=\left[-1;\dfrac52\right]$.` ] },
 { muc: "TH", de: R`Giải hệ $\begin{cases}x^2-4x+3>0\\x^2-6x+8\le0\end{cases}$.`,
   giai: [
    R`$x^2-4x+3>0\iff x<1$ hoặc $x>3$.`,
    R`$x^2-6x+8\le0\iff2\le x\le4$.`,
    R`Giao: $S=(3;4]$.`
   ] },
 { muc: "VD", de: R`Tìm tập xác định của $y=\sqrt{-x^2+x+6}$.`,
   giai: [ R`Điều kiện $-x^2+x+6\ge0\iff x^2-x-6\le0\iff-2\le x\le3$.`, R`$D=[-2;3]$.` ] },
 { muc: "VD", de: R`Tìm $m$ để $x^2-2mx+m+2>0$ với mọi $x\in\mathbb R$.`,
   giai: [
    R`$a=1>0$, cần $\Delta'=m^2-(m+2)<0\iff m^2-m-2<0$.`,
    R`$m^2-m-2=0\iff m=-1$ hoặc $m=2$; nên $-1<m<2$.`
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
    R`$-5t^2+20t+1\ge16\iff-5t^2+20t-15\ge0\iff t^2-4t+3\le0$.`,
    R`$\iff1\le t\le3$. Bóng ở độ cao từ $16$ m trở lên từ giây thứ $1$ đến giây thứ $3$ (trong $2$ giây).`
   ] },
 { muc: "VD", de: R`Lợi nhuận khi sản xuất $x$ sản phẩm là $P(x)=-x^2+200x-7500$ (nghìn đồng). Sản xuất bao nhiêu sản phẩm thì có lãi?`,
   giai: [
    R`Có lãi $\iff P(x)>0\iff x^2-200x+7500<0$.`,
    R`$x^2-200x+7500=0\iff x=50$ hoặc $x=150$; nên $50<x<150$.`,
    R`Vậy sản xuất từ $51$ đến $149$ sản phẩm thì có lãi.`
   ] },
 { muc: "VD", de: R`Một tấm ảnh $20\times30$ cm được lồng vào khung có viền rộng đều $x$ cm. Tìm $x$ để diện tích cả khung không vượt quá $1000$ cm².`,
   giai: [
    R`Kích thước cả khung $(20+2x)\times(30+2x)$, điều kiện $x>0$.`,
    R`$(20+2x)(30+2x)\le1000\iff4x^2+100x-400\le0\iff x^2+25x-100\le0$.`,
    R`Nghiệm $x=\dfrac{-25\pm\sqrt{1025}}2$; nên $\dfrac{-25-5\sqrt{41}}2\le x\le\dfrac{-25+5\sqrt{41}}2\approx3{,}51$.`,
    R`Kết hợp $x>0$: $0<x\le\dfrac{-25+5\sqrt{41}}2\approx3{,}51$ cm.`
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
   giai: [ R`Bình phương: $2x-3=x+1\iff x=4$.`, R`Thử lại: $2\cdot4-3=5\ge0$. Vậy $x=4$.` ] },
 { muc: "TH", de: R`Giải $\sqrt{x^2-3x+1}=\sqrt{x-2}$.`,
   giai: [
    R`Điều kiện $x-2\ge0\iff x\ge2$.`,
    R`Bình phương: $x^2-3x+1=x-2\iff x^2-4x+3=0\iff x=1$ hoặc $x=3$.`,
    R`$x=1$ không thoả $x\ge2$; $x=3$ thoả. Vậy $x=3$.`
   ] },
 { muc: "TH", de: R`Giải $\sqrt{x^2+x-1}=\sqrt{2x+1}$.`,
   giai: [
    R`Điều kiện $2x+1\ge0\iff x\ge-\dfrac12$.`,
    R`$x^2+x-1=2x+1\iff x^2-x-2=0\iff x=-1$ hoặc $x=2$.`,
    R`Loại $x=-1$ (khi đó $2x+1=-1<0$). Vậy $x=2$.`
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
   giai: [ R`Điều kiện $x\ge0$. Bình phương: $x+2=x^2\iff x^2-x-2=0\iff x=2$ hoặc $x=-1$.`, R`Loại $x=-1$. Vậy $x=2$.` ] },
 { muc: "TH", de: R`Giải $\sqrt{2x+7}=x+2$.`,
   giai: [
    R`Điều kiện $x\ge-2$. Bình phương: $2x+7=x^2+4x+4\iff x^2+2x-3=0\iff x=1$ hoặc $x=-3$.`,
    R`Loại $x=-3$. Vậy $x=1$ (thử lại: $\sqrt9=3=1+2$).`
   ] },
 { muc: "VD", de: R`Điểm $A$ cách bờ sông thẳng $3$ km, $H$ là hình chiếu của $A$ trên bờ. Điểm $B$ trên bờ cách $H$ $5$ km. Tìm điểm $M$ trên đoạn $HB$ sao cho $AM=MB$.`,
   giai: [
    R`Đặt $HM=x$ ($0\le x\le5$): $AM=\sqrt{x^2+9}$, $MB=5-x$.`,
    R`$\sqrt{x^2+9}=5-x$ (vế phải $\ge0$ vì $x\le5$). Bình phương: $x^2+9=25-10x+x^2\iff x=1{,}6$.`,
    R`Vậy $M$ cách $H$ $1{,}6$ km (khi đó $AM=MB=3{,}4$ km).`
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
})(window);
