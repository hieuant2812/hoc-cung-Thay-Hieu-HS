/* Sổ tay theo DẠNG ngân hàng – Toán 12. SOTAYDANG["12"][dkey] = {
     pp: [các bước phương pháp], luuY: [sai lầm thường gặp],
     vd: [{ muc: NB|TH|VD|VDC, de: đề, giai: [từng bước giải], hinh: tikzpicture (tuỳ chọn), chuThich }] }
   Viết bằng LaTeX như ngân hàng: $...$, $$...$$, BBT bằng \tkzTabInit/\tkzTabLine/\tkzTabVar, hình bằng tikzpicture.
   Mọi đáp số đã được kiểm lại bằng máy (giá trị, nghiệm, dấu đạo hàm). Tên dạng lấy ở data/sotaydang-ten.js. */
(function (G) {
const D = (G.SOTAYDANG = G.SOTAYDANG || {})["12"] = (G.SOTAYDANG["12"] || {});
const R = String.raw;
Object.assign(D, {
"C1-B1-D02": {
 pp: [
  R`**Bước 1.** Tìm tập xác định $D$ của hàm số.`,
  R`**Bước 2.** Tính đạo hàm $y'$. Tìm các điểm $x_i$ mà tại đó $y'=0$ hoặc $y'$ không xác định.`,
  R`**Bước 3.** Sắp xếp các điểm $x_i$ theo thứ tự tăng dần, xét dấu $y'$ trên từng khoảng và lập bảng biến thiên.`,
  R`**Bước 4.** Kết luận: hàm số đồng biến trên các khoảng $y'>0$, nghịch biến trên các khoảng $y'<0$.`
 ],
 luuY: [
  R`Không dùng dấu hợp "$\cup$" để nối hai khoảng đơn điệu. Ví dụ, $y=\dfrac{2x-1}{x+1}$ đồng biến trên **từng khoảng** $(-\infty;-1)$ và $(-1;+\infty)$, nhưng **không** đồng biến trên $(-\infty;-1)\cup(-1;+\infty)$: lấy $x_1=-2<x_2=0$ thì $y(-2)=5>y(0)=-1$.`,
  R`Hàm số $y=\dfrac{ax+b}{cx+d}$ ($c\ne0$, $ad-bc\ne0$) có $y'=\dfrac{ad-bc}{(cx+d)^2}$ luôn cùng dấu với $ad-bc$, nên không có cực trị.`,
  R`Khoảng đơn điệu là khoảng của biến $x$, không phải khoảng giá trị của $y$.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm các khoảng đơn điệu của hàm số $y=x^3-3x^2+2$.`,
   giai: [
    R`Tập xác định: $D=\mathbb R$.`,
    R`Đạo hàm: $y'=3x^2-6x=3x(x-2)$.`,
    R`Cho $y'=0\Leftrightarrow 3x(x-2)=0\Leftrightarrow x=0$ hoặc $x=2$.`,
    R`Tính giá trị tại các điểm đó: $y(0)=0-0+2=2$; $y(2)=8-12+2=-2$. Giới hạn: $\lim\limits_{x\to-\infty}y=-\infty$, $\lim\limits_{x\to+\infty}y=+\infty$.`,
    R`Xét dấu $y'$: $y'=3x(x-2)$ là tam thức bậc hai có hệ số $a=3>0$, nên $y'>0$ khi $x<0$ hoặc $x>2$; $y'<0$ khi $0<x<2$. Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$0$,$2$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,}
\tkzTabVar{-/$-\infty$,+/$2$,-/$-2$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số đồng biến trên các khoảng $(-\infty;0)$ và $(2;+\infty)$; nghịch biến trên khoảng $(0;2)$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.9,>=stealth]
\begin{scope}\clip (-1.5,-2.8) rectangle (3.5,3.2);
\draw[thick,smooth,samples=200,domain=-1.5:3.5,blue] plot(\x,{\x*\x*\x-3*\x*\x+2});
\end{scope}
\draw[->] (-1.5,0)--(3.6,0) node[below]{$x$};
\draw[->] (0,-2.8)--(0,3.4) node[left]{$y$};
\draw[dashed] (2,0)--(2,-2)--(0,-2);
\node[below left] at (0,0){$O$};
\node[above] at (2,0){$2$};
\node[left] at (0,-2){$-2$};
\node[right] at (0,2){$2$};
\end{tikzpicture}`,
   chuThich: R`Đồ thị đi lên trên $(-\infty;0)$, đi xuống trên $(0;2)$, rồi đi lên trên $(2;+\infty)$, khớp với bảng biến thiên.` },

 { muc: "TH", de: R`Hàm số $y=-x^3+3x+1$ nghịch biến trên những khoảng nào?`,
   giai: [
    R`Tập xác định: $D=\mathbb R$.`,
    R`Đạo hàm: $y'=-3x^2+3=-3(x^2-1)=-3(x-1)(x+1)$.`,
    R`Cho $y'=0\Leftrightarrow x^2=1\Leftrightarrow x=-1$ hoặc $x=1$.`,
    R`Giá trị: $y(-1)=-(-1)^3+3\cdot(-1)+1=1-3+1=-1$; $y(1)=-1+3+1=3$. Giới hạn: $\lim\limits_{x\to-\infty}y=+\infty$, $\lim\limits_{x\to+\infty}y=-\infty$ (hệ số của $x^3$ âm).`,
    R`Tam thức $y'=-3x^2+3$ có $a=-3<0$ nên $y'<0$ ở ngoài khoảng hai nghiệm và $y'>0$ ở trong khoảng hai nghiệm. Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$1$,$+\infty$}
\tkzTabLine{,-,0,+,0,-,}
\tkzTabVar{+/$+\infty$,-/$-1$,+/$3$,-/$-\infty$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số nghịch biến trên các khoảng $(-\infty;-1)$ và $(1;+\infty)$ (và đồng biến trên khoảng $(-1;1)$).`
   ] },

 { muc: "TH", de: R`Xét tính đơn điệu của hàm số $y=\dfrac{2x-1}{x+1}$.`,
   giai: [
    R`Tập xác định: $D=\mathbb R\setminus\{-1\}$ (vì mẫu $x+1\ne0$).`,
    R`Đạo hàm (công thức $\left(\dfrac{ax+b}{cx+d}\right)'=\dfrac{ad-bc}{(cx+d)^2}$ với $a=2,\ b=-1,\ c=1,\ d=1$):
$$y'=\dfrac{2\cdot1-(-1)\cdot1}{(x+1)^2}=\dfrac{3}{(x+1)^2}.$$`,
    R`Với mọi $x\ne-1$ ta có $(x+1)^2>0$ nên $y'=\dfrac{3}{(x+1)^2}>0$. Đạo hàm không có nghiệm và không xác định tại $x=-1$.`,
    R`Giới hạn: $\lim\limits_{x\to\pm\infty}y=\dfrac21=2$; $\lim\limits_{x\to-1^-}y=+\infty$ (tử $\to-3<0$, mẫu $\to0^-$); $\lim\limits_{x\to-1^+}y=-\infty$ (tử $\to-3<0$, mẫu $\to0^+$). Bảng biến thiên (hai vạch kép tại $x=-1$ là chỗ hàm số không xác định):
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=3]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$+\infty$}
\tkzTabLine{,+,d,+,}
\tkzTabVar{-/$2$,+D-/$+\infty$/$-\infty$,+/$2$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số đồng biến trên từng khoảng $(-\infty;-1)$ và $(-1;+\infty)$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.55,>=stealth]
\begin{scope}\clip (-6,-4.5) rectangle (5,8);
\draw[thick,smooth,samples=200,domain=-6:-1.35,blue] plot(\x,{(2*\x-1)/(\x+1)});
\draw[thick,smooth,samples=200,domain=-0.6:5,blue] plot(\x,{(2*\x-1)/(\x+1)});
\end{scope}
\draw[dashed,red] (-1,-4.5)--(-1,8);
\draw[dashed,red] (-6,2)--(5,2);
\draw[->] (-6,0)--(5.3,0) node[below]{$x$};
\draw[->] (0,-4.5)--(0,8.3) node[left]{$y$};
\node[below right] at (0,0){$O$};
\node[below left] at (-1,0){$-1$};
\node[above right] at (0,2){$2$};
\end{tikzpicture}`,
   chuThich: R`Đường đứt màu đỏ là tiệm cận đứng $x=-1$ và tiệm cận ngang $y=2$. Mỗi nhánh của đồ thị đều đi lên.` },

 { muc: "VD", de: R`Tìm các khoảng đơn điệu của hàm số $y=\dfrac{x^2-2x+2}{x-1}$.`,
   giai: [
    R`Tập xác định: $D=\mathbb R\setminus\{1\}$.`,
    R`Chia tử cho mẫu: $x^2-2x+2=(x-1)^2+1$, nên $y=\dfrac{(x-1)^2+1}{x-1}=x-1+\dfrac{1}{x-1}$.`,
    R`Đạo hàm: $y'=1-\dfrac{1}{(x-1)^2}=\dfrac{(x-1)^2-1}{(x-1)^2}=\dfrac{x(x-2)}{(x-1)^2}$.`,
    R`Cho $y'=0\Leftrightarrow x(x-2)=0\Leftrightarrow x=0$ hoặc $x=2$ (đều thuộc $D$). Giá trị: $y(0)=\dfrac{2}{-1}=-2$; $y(2)=\dfrac{4-4+2}{1}=2$.`,
    R`Dấu của $y'$ là dấu của tử $x(x-2)$ (vì mẫu $(x-1)^2>0$): $y'>0$ khi $x<0$ hoặc $x>2$; $y'<0$ khi $0<x<1$ hoặc $1<x<2$.`,
    R`Giới hạn: $\lim\limits_{x\to-\infty}y=-\infty$, $\lim\limits_{x\to+\infty}y=+\infty$; $\lim\limits_{x\to1^-}y=-\infty$, $\lim\limits_{x\to1^+}y=+\infty$ (vì $\dfrac1{x-1}\to\mp\infty$). Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$0$,$1$,$2$,$+\infty$}
\tkzTabLine{,+,0,-,d,-,0,+,}
\tkzTabVar{-/$-\infty$,+/$-2$,-D+/$-\infty$/$+\infty$,-/$2$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số đồng biến trên các khoảng $(-\infty;0)$ và $(2;+\infty)$; nghịch biến trên các khoảng $(0;1)$ và $(1;2)$.`
   ] }
 ]
}
});
/* ---------- Chương I · Bài 1. Tính đơn điệu và cực trị ---------- */
Object.assign(D, {
"C1-B1-D01": {
 pp: [
  R`**Đọc bảng biến thiên:** trên khoảng nào mũi tên ở dòng $y$ đi lên thì hàm số đồng biến trên khoảng đó, đi xuống thì nghịch biến. Khoảng luôn đọc ở dòng $x$.`,
  R`**Đọc đồ thị:** nhìn từ trái sang phải, đồ thị đi lên thì hàm số đồng biến, đi xuống thì nghịch biến. Khoảng vẫn là khoảng của $x$ (chiếu xuống trục hoành).`,
  R`**Đọc dấu đạo hàm:** $f'(x)>0$ trên khoảng $K$ thì $f$ đồng biến trên $K$; $f'(x)<0$ thì nghịch biến. Nếu $f'(x)\ge0$ và $f'(x)=0$ chỉ tại hữu hạn điểm thì $f$ vẫn đồng biến.`,
  R`Đáp án đúng có thể là **một khoảng con** của khoảng đơn điệu tìm được.`
 ],
 luuY: [
  R`Đọc nhầm khoảng giá trị của $y$ thành khoảng đơn điệu. Ví dụ bảng biến thiên có $y$ đi từ $-1$ lên $3$ thì $(-1;3)$ **không** phải là khoảng đồng biến.`,
  R`Khoảng đơn điệu phải nằm trọn trong một "đoạn mũi tên". Khoảng $(-2;0)$ chứa điểm cực trị $x=-1$ thì hàm số không đơn điệu trên đó.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hàm số $y=f(x)$ có bảng biến thiên như sau:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$1$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,}
\tkzTabVar{-/$-\infty$,+/$3$,-/$-1$,+/$+\infty$}
\end{tikzpicture}\end{center}
Hàm số nghịch biến trên khoảng nào dưới đây? **A.** $(-1;3)$. **B.** $(-1;1)$. **C.** $(-\infty;1)$. **D.** $(-1;+\infty)$.`,
   giai: [
    R`Ở dòng $y'$, dấu "$-$" nằm giữa $x=-1$ và $x=1$; tương ứng ở dòng $y$ mũi tên đi xuống từ $3$ xuống $-1$.`,
    R`Vậy hàm số nghịch biến trên khoảng $(-1;1)$ (và đồng biến trên $(-\infty;-1)$, $(1;+\infty)$).`,
    R`Loại A vì $(-1;3)$ là khoảng giá trị của $y$, không phải khoảng của $x$. Loại C, D vì các khoảng này chứa điểm cực trị nên hàm số không nghịch biến trên cả khoảng.`,
    R`**Đáp án B.**`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có đồ thị như hình bên. Tìm các khoảng đồng biến, nghịch biến của hàm số.`,
   hinhDe: R`\begin{tikzpicture}[scale=1,>=stealth]
\begin{scope}\clip (-2.3,-2.8) rectangle (2.3,2.8);
\draw[thick,smooth,samples=200,domain=-2.3:2.3,blue] plot(\x,{\x*\x*\x-3*\x});
\end{scope}
\draw[->] (-2.5,0)--(2.6,0) node[below]{$x$};
\draw[->] (0,-2.8)--(0,3) node[left]{$y$};
\draw[dashed] (-1,0)--(-1,2)--(0,2);
\draw[dashed] (1,0)--(1,-2)--(0,-2);
\node[below right] at (0,0){$O$};
\node[below] at (-1,0){$-1$};
\node[above] at (1,0){$1$};
\node[right] at (0,2){$2$};
\node[left] at (0,-2){$-2$};
\end{tikzpicture}`,
   giai: [
    R`Nhìn đồ thị từ trái sang phải: từ $-\infty$ đến $x=-1$ đồ thị đi lên (lên tới điểm $(-1;2)$).`,
    R`Từ $x=-1$ đến $x=1$ đồ thị đi xuống (từ điểm $(-1;2)$ xuống điểm $(1;-2)$).`,
    R`Từ $x=1$ đến $+\infty$ đồ thị lại đi lên.`,
    R`**Kết luận.** Hàm số đồng biến trên các khoảng $(-\infty;-1)$ và $(1;+\infty)$; nghịch biến trên khoảng $(-1;1)$.`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x(x-1)^2(x+2)$ với mọi $x\in\mathbb R$. Tìm các khoảng đơn điệu của hàm số.`,
   giai: [
    R`Cho $f'(x)=0\Leftrightarrow x=0$ hoặc $x=1$ hoặc $x=-2$.`,
    R`Thừa số $(x-1)^2\ge0$ nên không làm đổi dấu $f'(x)$; dấu của $f'(x)$ là dấu của tích $x(x+2)$, chỉ đổi dấu khi qua $x=-2$ và $x=0$.`,
    R`Thử từng khoảng: $x=-3$: $f'(-3)=(-3)\cdot16\cdot(-1)=48>0$; $x=-1$: $f'(-1)=(-1)\cdot4\cdot1=-4<0$; $x=\tfrac12$: $f'\!\left(\tfrac12\right)=\tfrac12\cdot\tfrac14\cdot\tfrac52>0$; $x=2$: $f'(2)=2\cdot1\cdot4=8>0$. Bảng xét dấu:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.4,espcl=2]{$x$/0.8,$f'(x)$/0.8}{$-\infty$,$-2$,$0$,$1$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,0,+,}
\end{tikzpicture}\end{center}`,
    R`Trên $(0;+\infty)$ ta có $f'(x)\ge0$ và chỉ bằng $0$ tại $x=1$, nên hàm số đồng biến trên cả khoảng $(0;+\infty)$.`,
    R`**Kết luận.** Hàm số đồng biến trên $(-\infty;-2)$ và $(0;+\infty)$; nghịch biến trên $(-2;0)$.`
   ] }
 ] },

"C1-B1-D03": {
 pp: [
  R`Nếu $f'(x)$ **đổi dấu từ $+$ sang $-$** khi $x$ đi qua $x_0$ thì $x_0$ là **điểm cực đại**; đổi dấu từ $-$ sang $+$ thì $x_0$ là **điểm cực tiểu**.`,
  R`Trên bảng biến thiên: chỗ mũi tên đổi từ đi lên sang đi xuống là cực đại, từ đi xuống sang đi lên là cực tiểu. Trên đồ thị: "đỉnh đồi" là cực đại, "đáy thung lũng" là cực tiểu.`,
  R`Phân biệt ba khái niệm: **điểm cực trị của hàm số** là $x_0$; **giá trị cực trị** là $f(x_0)$; **điểm cực trị của đồ thị** là điểm $(x_0;f(x_0))$.`
 ],
 luuY: [
  R`Hàm số vẫn có thể đạt cực trị tại điểm $f'(x)$ không xác định, miễn là hàm số xác định (liên tục) tại đó và $f'$ đổi dấu qua điểm này.`,
  R`Giá trị cực đại không nhất thiết lớn hơn giá trị cực tiểu (xem ví dụ phân thức ở dạng C1-B1-D04).`
 ],
 vd: [
 { muc: "NB", de: R`Cho hàm số $y=f(x)$ có bảng biến thiên như sau:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$0$,$2$,$+\infty$}
\tkzTabLine{,-,0,+,0,-,}
\tkzTabVar{+/$+\infty$,-/$-1$,+/$3$,-/$-\infty$}
\end{tikzpicture}\end{center}
Tìm điểm cực đại, giá trị cực đại, điểm cực tiểu, giá trị cực tiểu của hàm số và điểm cực tiểu của đồ thị.`,
   giai: [
    R`Qua $x=0$, $y'$ đổi dấu từ $-$ sang $+$ nên $x=0$ là điểm cực tiểu, giá trị cực tiểu $y_{CT}=f(0)=-1$.`,
    R`Qua $x=2$, $y'$ đổi dấu từ $+$ sang $-$ nên $x=2$ là điểm cực đại, giá trị cực đại $y_{\text{CĐ}}=f(2)=3$.`,
    R`Điểm cực tiểu của đồ thị là $(0;-1)$ (điểm cực đại của đồ thị là $(2;3)$).`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ liên tục trên $\mathbb R$ và có bảng xét dấu đạo hàm như sau ($f'(x)$ không xác định tại $x=0$):
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.4,espcl=2]{$x$/0.8,$f'(x)$/0.8}{$-\infty$,$-1$,$0$,$2$,$+\infty$}
\tkzTabLine{,-,0,+,d,-,0,+,}
\end{tikzpicture}\end{center}
Hàm số có bao nhiêu điểm cực trị?`,
   giai: [
    R`Qua $x=-1$: $f'$ đổi dấu từ $-$ sang $+$, nên $x=-1$ là điểm cực tiểu.`,
    R`Qua $x=0$: $f'$ không xác định nhưng $f$ liên tục tại $x=0$ và $f'$ đổi dấu từ $+$ sang $-$, nên $x=0$ là điểm cực đại.`,
    R`Qua $x=2$: $f'$ đổi dấu từ $-$ sang $+$, nên $x=2$ là điểm cực tiểu.`,
    R`**Kết luận.** Hàm số có $3$ điểm cực trị. (Nhiều bạn chỉ đếm chỗ $f'=0$ nên ra $2$ là sai.)`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có đồ thị như hình bên. Tìm số điểm cực trị, giá trị cực đại và giá trị cực tiểu của hàm số.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.9,>=stealth]
\begin{scope}\clip (-2,-0.8) rectangle (2,2.6);
\draw[thick,smooth,samples=200,domain=-2:2,blue] plot(\x,{-\x*\x*\x*\x+2*\x*\x+1});
\end{scope}
\draw[->] (-2.2,0)--(2.3,0) node[below]{$x$};
\draw[->] (0,-0.8)--(0,2.8) node[left]{$y$};
\draw[dashed] (-1,0)--(-1,2)--(1,2)--(1,0);
\node[below] at (-1,0){$-1$};
\node[below] at (1,0){$1$};
\node[below left] at (0,0){$O$};
\node[above left] at (0,2){$2$};
\node[below right] at (0,1){$1$};
\end{tikzpicture}`,
   giai: [
    R`Đồ thị có hai "đỉnh" tại $x=-1$ và $x=1$, cùng độ cao $y=2$: đó là hai điểm cực đại.`,
    R`Đồ thị có một "đáy" tại $x=0$ với $y=1$: đó là điểm cực tiểu.`,
    R`**Kết luận.** Hàm số có $3$ điểm cực trị; giá trị cực đại $y_{\text{CĐ}}=2$ (đạt tại $x=\pm1$), giá trị cực tiểu $y_{CT}=1$ (đạt tại $x=0$).`
   ] }
 ] },

"C1-B1-D04": {
 pp: [
  R`**Quy tắc 1 (bảng biến thiên).** Tìm tập xác định; tính $f'(x)$; tìm các điểm $f'(x)=0$ hoặc $f'$ không xác định; lập bảng biến thiên; điểm mà $f'$ đổi dấu là điểm cực trị.`,
  R`**Quy tắc 2 (đạo hàm cấp hai).** Nếu $f'(x_0)=0$ và $f''(x_0)<0$ thì $x_0$ là điểm cực đại; nếu $f'(x_0)=0$ và $f''(x_0)>0$ thì $x_0$ là điểm cực tiểu. (Khi $f''(x_0)=0$ phải quay về quy tắc 1.)`
 ],
 luuY: [
  R`Hàm phân thức bậc nhất trên bậc nhất $y=\dfrac{ax+b}{cx+d}$ không có cực trị.`,
  R`Với hàm phân thức, giá trị cực đại có thể **nhỏ hơn** giá trị cực tiểu (ví dụ 3).`
 ],
 vd: [
 { muc: "NB", de: R`Tìm cực trị của hàm số $y=2x^3-6x+1$.`,
   giai: [
    R`Tập xác định $D=\mathbb R$. Đạo hàm $y'=6x^2-6=6(x-1)(x+1)$.`,
    R`$y'=0\Leftrightarrow x=-1$ hoặc $x=1$.`,
    R`Dùng quy tắc 2: $y''=12x$. Ta có $y''(-1)=-12<0$ nên $x=-1$ là điểm cực đại; $y''(1)=12>0$ nên $x=1$ là điểm cực tiểu.`,
    R`Tính giá trị: $y(-1)=2\cdot(-1)^3-6\cdot(-1)+1=-2+6+1=5$; $y(1)=2-6+1=-3$.`,
    R`**Kết luận.** Hàm số đạt cực đại tại $x=-1$, $y_{\text{CĐ}}=5$; đạt cực tiểu tại $x=1$, $y_{CT}=-3$.`
   ] },
 { muc: "TH", de: R`Tìm cực trị của hàm số $y=x^4-2x^2+3$.`,
   giai: [
    R`Tập xác định $D=\mathbb R$. Đạo hàm $y'=4x^3-4x=4x(x-1)(x+1)$.`,
    R`$y'=0\Leftrightarrow x=0$ hoặc $x=\pm1$. Giá trị: $y(0)=3$; $y(\pm1)=1-2+3=2$.`,
    R`Xét dấu $y'=4x(x^2-1)$: khi $x<-1$ thì $4x<0$, $x^2-1>0$ nên $y'<0$; khi $-1<x<0$ thì $4x<0$, $x^2-1<0$ nên $y'>0$; khi $0<x<1$ thì $y'<0$; khi $x>1$ thì $y'>0$. Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$0$,$1$,$+\infty$}
\tkzTabLine{,-,0,+,0,-,0,+,}
\tkzTabVar{+/$+\infty$,-/$2$,+/$3$,-/$2$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số đạt cực đại tại $x=0$, $y_{\text{CĐ}}=3$; đạt cực tiểu tại $x=-1$ và $x=1$, $y_{CT}=2$.`
   ] },
 { muc: "VD", de: R`Tìm cực trị của hàm số $y=\dfrac{x^2+3}{x-1}$.`,
   giai: [
    R`Tập xác định $D=\mathbb R\setminus\{1\}$.`,
    R`$y'=\dfrac{2x(x-1)-(x^2+3)\cdot1}{(x-1)^2}=\dfrac{x^2-2x-3}{(x-1)^2}=\dfrac{(x+1)(x-3)}{(x-1)^2}$.`,
    R`$y'=0\Leftrightarrow x=-1$ hoặc $x=3$ (đều thuộc $D$). Giá trị: $y(-1)=\dfrac{1+3}{-2}=-2$; $y(3)=\dfrac{9+3}{2}=6$.`,
    R`Mẫu $(x-1)^2>0$ nên dấu $y'$ là dấu của $(x+1)(x-3)$: dương khi $x<-1$ hoặc $x>3$, âm khi $-1<x<3$ ($x\ne1$). Giới hạn: $\lim\limits_{x\to1^-}y=-\infty$, $\lim\limits_{x\to1^+}y=+\infty$ (tử $\to4>0$), $\lim\limits_{x\to-\infty}y=-\infty$, $\lim\limits_{x\to+\infty}y=+\infty$. Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$1$,$3$,$+\infty$}
\tkzTabLine{,+,0,-,d,-,0,+,}
\tkzTabVar{-/$-\infty$,+/$-2$,-D+/$-\infty$/$+\infty$,-/$6$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số đạt cực đại tại $x=-1$, $y_{\text{CĐ}}=-2$; đạt cực tiểu tại $x=3$, $y_{CT}=6$. Chú ý $y_{\text{CĐ}}<y_{CT}$.`
   ] },
 { muc: "VD", de: R`Tìm cực trị của hàm số $y=xe^{-x}$.`,
   giai: [
    R`Tập xác định $D=\mathbb R$.`,
    R`$y'=1\cdot e^{-x}+x\cdot(-e^{-x})=(1-x)e^{-x}$.`,
    R`Vì $e^{-x}>0$ với mọi $x$ nên dấu của $y'$ là dấu của $1-x$: $y'>0$ khi $x<1$, $y'<0$ khi $x>1$.`,
    R`Giá trị: $y(1)=e^{-1}=\dfrac1e$. Giới hạn: $\lim\limits_{x\to-\infty}xe^{-x}=-\infty$, $\lim\limits_{x\to+\infty}\dfrac{x}{e^x}=0$. Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=3]{$x$/0.8,$y'$/0.8,$y$/2.8}{$-\infty$,$1$,$+\infty$}
\tkzTabLine{,+,0,-,}
\tkzTabVar{-/$-\infty$,+/$\tfrac1e$,-/$0$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số đạt cực đại tại $x=1$, $y_{\text{CĐ}}=\dfrac1e$; hàm số không có cực tiểu.`
   ] }
 ] },

"C1-B1-D05": {
 pp: [
  R`Cho **đồ thị của $y=f'(x)$** (không phải đồ thị của $f$): phần đồ thị nằm **trên** trục $Ox$ ứng với $f'(x)>0$ nên $f$ đồng biến; phần nằm **dưới** $Ox$ ứng với $f'(x)<0$ nên $f$ nghịch biến.`,
  R`Điểm cực trị của $f$ là hoành độ giao điểm mà đồ thị $f'$ **cắt xuyên qua** $Ox$: cắt từ trên xuống ($+\to-$) là cực đại, từ dưới lên ($-\to+$) là cực tiểu. Chỗ đồ thị $f'$ chỉ **tiếp xúc** $Ox$ thì không phải cực trị.`,
  R`Cho **biểu thức của $f'(x)$** dạng tích: nghiệm bội lẻ làm $f'$ đổi dấu (là điểm cực trị), nghiệm bội chẵn không làm đổi dấu (không là điểm cực trị).`
 ],
 luuY: [
  R`Nhầm đồ thị của $f'$ với đồ thị của $f$: "đỉnh" của đồ thị $f'$ không phải là cực trị của $f$.`
 ],
 vd: [
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có đạo hàm trên $\mathbb R$, đồ thị hàm số $y=f'(x)$ là parabol như hình bên. Tìm các khoảng đơn điệu và các điểm cực trị của hàm số $f$.`,
   hinhDe: R`\begin{tikzpicture}[scale=1,>=stealth]
\begin{scope}\clip (-2.2,-2.6) rectangle (3.2,3.2);
\draw[thick,smooth,samples=200,domain=-2.2:3.2,red] plot(\x,{\x*\x-\x-2});
\end{scope}
\draw[->] (-2.4,0)--(3.4,0) node[below]{$x$};
\draw[->] (0,-2.6)--(0,3.4) node[left]{$y$};
\node[below left] at (-1,0){$-1$};
\node[below right] at (2,0){$2$};
\node[left] at (0,-2){$-2$};
\node[below left] at (0,0){$O$};
\node[red] at (1.3,2.5){$y=f'(x)$};
\end{tikzpicture}`,
   giai: [
    R`Đồ thị $f'$ cắt trục hoành tại $x=-1$ và $x=2$.`,
    R`Khi $x<-1$ hoặc $x>2$ đồ thị nằm trên $Ox$ nên $f'(x)>0$; khi $-1<x<2$ đồ thị nằm dưới $Ox$ nên $f'(x)<0$.`,
    R`Do đó $f$ đồng biến trên $(-\infty;-1)$ và $(2;+\infty)$; nghịch biến trên $(-1;2)$.`,
    R`Qua $x=-1$, $f'$ đổi dấu $+\to-$ nên $f$ đạt cực đại tại $x=-1$; qua $x=2$, $f'$ đổi dấu $-\to+$ nên $f$ đạt cực tiểu tại $x=2$.`
   ] },
 { muc: "VD", de: R`Cho hàm số $y=f(x)$ có đồ thị $y=f'(x)$ như hình bên (đồ thị $f'$ tiếp xúc trục hoành tại $x=1$). Hàm số $f$ có bao nhiêu điểm cực trị?`,
   hinhDe: R`\begin{tikzpicture}[scale=0.95,>=stealth]
\begin{scope}\clip (-2.6,-3) rectangle (2.3,5);
\draw[thick,smooth,samples=200,domain=-2.6:2.3,red] plot(\x,{(\x+2)*(\x-1)*(\x-1)});
\end{scope}
\draw[->] (-2.8,0)--(2.5,0) node[below]{$x$};
\draw[->] (0,-3)--(0,5.2) node[left]{$y$};
\node[below left] at (-2,0){$-2$};
\node[below] at (1,0){$1$};
\node[below left] at (0,0){$O$};
\node[right] at (0,2){$2$};
\node[red] at (1.4,-1.5){$y=f'(x)$};
\end{tikzpicture}`,
   giai: [
    R`Đồ thị $f'$ có hai điểm chung với $Ox$: $x=-2$ và $x=1$.`,
    R`Tại $x=-2$ đồ thị **cắt xuyên** $Ox$ từ dưới lên ($f'$ đổi dấu từ $-$ sang $+$) nên $x=-2$ là điểm cực tiểu của $f$.`,
    R`Tại $x=1$ đồ thị chỉ **chạm** $Ox$ rồi đi lên lại: $f'(x)\ge0$ ở hai bên nên $f'$ không đổi dấu, $x=1$ không là điểm cực trị.`,
    R`**Kết luận.** Hàm số $f$ có đúng $1$ điểm cực trị (cực tiểu tại $x=-2$).`
   ] },
 { muc: "VD", de: R`Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x^2(x-1)(x+3)^3$. Tìm các điểm cực trị của hàm số.`,
   giai: [
    R`$f'(x)=0\Leftrightarrow x=0$ (nghiệm bội $2$), $x=1$ (nghiệm đơn), $x=-3$ (nghiệm bội $3$).`,
    R`Nghiệm bội chẵn $x=0$ không làm $f'$ đổi dấu; nghiệm bội lẻ $x=1$ và $x=-3$ làm $f'$ đổi dấu.`,
    R`Thử dấu: $f'(2)=4\cdot1\cdot125>0$; $f'(-4)=16\cdot(-5)\cdot(-1)=80>0$; $f'\!\left(\tfrac12\right)<0$ và $f'(-1)<0$. Bảng xét dấu:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.4,espcl=2]{$x$/0.8,$f'(x)$/0.8}{$-\infty$,$-3$,$0$,$1$,$+\infty$}
\tkzTabLine{,+,0,-,0,-,0,+,}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Hàm số đạt cực đại tại $x=-3$ và đạt cực tiểu tại $x=1$; có $2$ điểm cực trị ($x=0$ không phải điểm cực trị).`
   ] }
 ] },

"C1-B1-D06": {
 pp: [
  R`**Bước 1.** Giải $y'=0$, tìm toạ độ hai điểm cực trị $A(x_1;y_1)$, $B(x_2;y_2)$ của đồ thị.`,
  R`**Bước 2.** Tuỳ yêu cầu: đường thẳng $AB$ (qua hai điểm); độ dài $AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$; diện tích tam giác $OAB$ là $S=\dfrac12\left|x_1y_2-x_2y_1\right|$.`,
  R`Với hàm bậc ba, có thể lấy $y$ chia cho $y'$: phần dư (bậc nhất) chính là phương trình đường thẳng qua hai điểm cực trị.`,
  R`Bài có tham số $m$: trước hết tìm điều kiện để có hai cực trị ($y'=0$ có hai nghiệm phân biệt), giải xong phải đối chiếu điều kiện.`
 ],
 luuY: [
  R`Quên điều kiện có hai điểm cực trị, hoặc quên lấy giá trị tuyệt đối khi tính diện tích.`
 ],
 vd: [
 { muc: "TH", de: R`Viết phương trình đường thẳng đi qua hai điểm cực trị của đồ thị hàm số $y=x^3-3x^2+2$ và tính khoảng cách giữa hai điểm đó.`,
   giai: [
    R`$y'=3x^2-6x=3x(x-2)=0\Leftrightarrow x=0$ hoặc $x=2$.`,
    R`$y(0)=2$, $y(2)=8-12+2=-2$. Hai điểm cực trị: $A(0;2)$, $B(2;-2)$.`,
    R`Hệ số góc của $AB$: $k=\dfrac{-2-2}{2-0}=-2$. Đường thẳng $AB$: $y=-2(x-0)+2$, tức $y=-2x+2$.`,
    R`Kiểm tra bằng phép chia: $x^3-3x^2+2=\left(\tfrac13x-\tfrac13\right)(3x^2-6x)+(-2x+2)$, phần dư đúng là $-2x+2$.`,
    R`$AB=\sqrt{(2-0)^2+(-2-2)^2}=\sqrt{4+16}=\sqrt{20}=2\sqrt5$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1,>=stealth]
\begin{scope}\clip (-1.4,-2.8) rectangle (3.2,3.2);
\draw[thick,smooth,samples=200,domain=-1.4:3.2,blue] plot(\x,{\x*\x*\x-3*\x*\x+2});
\draw[red,thick,domain=-1.2:3.2] plot(\x,{-2*\x+2});
\end{scope}
\draw[->] (-1.5,0)--(3.4,0) node[below]{$x$};
\draw[->] (0,-2.8)--(0,3.4) node[left]{$y$};
\fill (0,2) circle (2pt) node[left]{$A$};
\fill (2,-2) circle (2pt) node[below right]{$B$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Đường màu đỏ $y=-2x+2$ đi qua hai điểm cực trị $A$, $B$.` },
 { muc: "TH", de: R`Gọi $A$, $B$ là hai điểm cực trị của đồ thị hàm số $y=-x^3+3x+1$. Tính diện tích tam giác $OAB$ ($O$ là gốc toạ độ).`,
   giai: [
    R`$y'=-3x^2+3=0\Leftrightarrow x=\pm1$.`,
    R`$y(-1)=1-3+1=-1$, $y(1)=-1+3+1=3$. Vậy $A(-1;-1)$, $B(1;3)$.`,
    R`$S_{OAB}=\dfrac12\left|x_Ay_B-x_By_A\right|=\dfrac12\left|(-1)\cdot3-1\cdot(-1)\right|=\dfrac12\left|-3+1\right|=\dfrac12\cdot2=1$.`,
    R`**Kết luận.** $S_{OAB}=1$ (đơn vị diện tích).`
   ] },
 { muc: "VD", de: R`Tìm $m$ để đồ thị hàm số $y=x^3-3mx^2+4m^3$ có hai điểm cực trị $A$, $B$ sao cho tam giác $OAB$ có diện tích bằng $4$.`,
   giai: [
    R`$y'=3x^2-6mx=3x(x-2m)$; $y'=0\Leftrightarrow x=0$ hoặc $x=2m$.`,
    R`Có hai điểm cực trị $\Leftrightarrow$ hai nghiệm phân biệt $\Leftrightarrow 2m\ne0\Leftrightarrow m\ne0$.`,
    R`$y(0)=4m^3$; $y(2m)=8m^3-12m^3+4m^3=0$. Vậy $A(0;4m^3)$ nằm trên $Oy$, $B(2m;0)$ nằm trên $Ox$.`,
    R`Tam giác $OAB$ vuông tại $O$ nên $S=\dfrac12\cdot OA\cdot OB=\dfrac12\cdot\left|4m^3\right|\cdot\left|2m\right|=4m^4$.`,
    R`$S=4\Leftrightarrow 4m^4=4\Leftrightarrow m^4=1\Leftrightarrow m=\pm1$ (thoả $m\ne0$).`,
    R`**Kết luận.** $m=1$ hoặc $m=-1$.`
   ] }
 ] }
});

/* ---------- Chương I · Bài 2. Giá trị lớn nhất, giá trị nhỏ nhất ---------- */
Object.assign(D, {
"C1-B2-D01": {
 pp: [
  R`Trên **đoạn** $[a;b]$: so sánh các giá trị ghi ở dòng $y$ tại hai đầu mút và tại các điểm cực trị nằm trong đoạn; số lớn nhất là GTLN, số nhỏ nhất là GTNN.`,
  R`Trên đồ thị: GTLN là tung độ của điểm **cao nhất**, GTNN là tung độ của điểm **thấp nhất** trong phần đồ thị ứng với miền đang xét.`,
  R`Trên **khoảng** hoặc $\mathbb R$: giá trị chỉ "tiến tới" (giới hạn) mà không đạt được thì không phải là GTLN, GTNN.`
 ],
 luuY: [
  R`Lấy nhầm giá trị cực đại làm GTLN mà quên so sánh với giá trị tại đầu mút.`,
  R`Nhầm giá trị giới hạn (ví dụ $5$ khi $x\to+\infty$) là GTLN.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hàm số $y=f(x)$ liên tục trên đoạn $[-1;3]$ và có bảng biến thiên như sau:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2]{$x$/0.8,$y'$/0.8,$y$/2}{$-1$,$0$,$2$,$3$}
\tkzTabLine{,+,0,-,0,+,}
\tkzTabVar{-/$-1$,+/$3$,-/$-2$,+/$1$}
\end{tikzpicture}\end{center}
Tìm GTLN và GTNN của hàm số trên đoạn $[-1;3]$.`,
   giai: [
    R`Các giá trị cần so sánh: $f(-1)=-1$, $f(0)=3$, $f(2)=-2$, $f(3)=1$.`,
    R`Số lớn nhất là $3$, số nhỏ nhất là $-2$.`,
    R`**Kết luận.** $\max\limits_{[-1;3]}f(x)=f(0)=3$; $\min\limits_{[-1;3]}f(x)=f(2)=-2$.`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có đồ thị trên đoạn $[-2;2]$ như hình bên. Tìm GTLN, GTNN của $f$ trên đoạn $[-2;2]$ và trên đoạn $[-1;0]$.`,
   hinhDe: R`\begin{tikzpicture}[scale=1,>=stealth]
\draw[thick,smooth,samples=200,domain=-2:2,blue] plot(\x,{-\x*\x*\x+3*\x});
\draw[->] (-2.5,0)--(2.6,0) node[below]{$x$};
\draw[->] (0,-2.6)--(0,2.8) node[left]{$y$};
\draw[dashed] (-2,0)--(-2,2)--(1,2)--(1,0);
\draw[dashed] (-1,0)--(-1,-2)--(2,-2)--(2,0);
\node[below] at (-2,0){$-2$};
\node[above] at (-1,0){$-1$};
\node[below] at (1,0){$1$};
\node[above] at (2,0){$2$};
\node[right] at (0,2.2){$2$};
\node[left] at (0,-2.2){$-2$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   giai: [
    R`Trên $[-2;2]$: điểm cao nhất của đồ thị có tung độ $2$ (tại $x=-2$ và $x=1$), điểm thấp nhất có tung độ $-2$ (tại $x=-1$ và $x=2$). Vậy $\max\limits_{[-2;2]}f=2$, $\min\limits_{[-2;2]}f=-2$.`,
    R`Trên $[-1;0]$: đồ thị đi lên từ điểm $(-1;-2)$ tới điểm $(0;0)$. Vậy $\max\limits_{[-1;0]}f=f(0)=0$, $\min\limits_{[-1;0]}f=f(-1)=-2$.`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có bảng biến thiên như sau:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$2$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,}
\tkzTabVar{-/$1$,+/$4$,-/$-3$,+/$5$}
\end{tikzpicture}\end{center}
Hàm số có GTLN, GTNN trên $\mathbb R$ không?`,
   giai: [
    R`Trên $(-\infty;-1]$ hàm số đồng biến, giá trị đi từ gần $1$ (không đạt) lên $4$. Trên $[-1;2]$ giá trị giảm từ $4$ xuống $-3$. Trên $[2;+\infty)$ giá trị tăng từ $-3$ tiến tới $5$ nhưng không bao giờ bằng $5$.`,
    R`Giá trị nhỏ nhất đạt được là $-3$ tại $x=2$, nên $\min\limits_{\mathbb R}f(x)=-3$.`,
    R`Hàm số nhận mọi giá trị gần $5$ (lớn hơn $4$) nhưng không nhận giá trị $5$, nên không có số nào là giá trị lớn nhất.`,
    R`**Kết luận.** $\min\limits_{\mathbb R}f(x)=-3$; hàm số **không có** GTLN trên $\mathbb R$.`
   ] }
 ] },

"C1-B2-D02": {
 pp: [
  R`**Bước 1.** Tính $f'(x)$, tìm các điểm $x_i$ **thuộc đoạn** $[a;b]$ mà $f'(x_i)=0$ hoặc $f'$ không xác định.`,
  R`**Bước 2.** Tính $f(a)$, $f(b)$ và các $f(x_i)$.`,
  R`**Bước 3.** Số lớn nhất là $\max\limits_{[a;b]}f$, số nhỏ nhất là $\min\limits_{[a;b]}f$.`,
  R`Nếu $f$ đơn điệu trên $[a;b]$ thì GTLN, GTNN đạt tại hai đầu mút.`
 ],
 luuY: [
  R`Quên loại nghiệm của $f'$ nằm ngoài đoạn, hoặc quên tính giá trị tại hai đầu mút.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm GTLN, GTNN của hàm số $y=x^3-3x+2$ trên đoạn $[0;2]$.`,
   giai: [
    R`$y'=3x^2-3=0\Leftrightarrow x=1$ hoặc $x=-1$. Chỉ nhận $x=1\in[0;2]$, loại $x=-1\notin[0;2]$.`,
    R`$y(0)=2$; $y(1)=1-3+2=0$; $y(2)=8-6+2=4$.`,
    R`**Kết luận.** $\max\limits_{[0;2]}y=4$ (tại $x=2$); $\min\limits_{[0;2]}y=0$ (tại $x=1$).`
   ] },
 { muc: "TH", de: R`Tìm GTLN, GTNN của hàm số $y=x^4-2x^2+3$ trên đoạn $[-2;1]$.`,
   giai: [
    R`$y'=4x^3-4x=4x(x^2-1)=0\Leftrightarrow x=0$ hoặc $x=\pm1$; cả ba giá trị đều thuộc $[-2;1]$.`,
    R`$y(-2)=16-8+3=11$; $y(-1)=1-2+3=2$; $y(0)=3$; $y(1)=2$.`,
    R`**Kết luận.** $\max\limits_{[-2;1]}y=11$ (tại $x=-2$); $\min\limits_{[-2;1]}y=2$ (tại $x=\pm1$).`
   ] },
 { muc: "TH", de: R`Tìm GTLN, GTNN của hàm số $y=\dfrac{x-1}{x+2}$ trên đoạn $[0;3]$.`,
   giai: [
    R`Hàm số xác định trên $[0;3]$ (vì $x=-2\notin[0;3]$).`,
    R`$y'=\dfrac{1\cdot2-(-1)\cdot1}{(x+2)^2}=\dfrac{3}{(x+2)^2}>0$, nên hàm số đồng biến trên $[0;3]$.`,
    R`$\min\limits_{[0;3]}y=y(0)=\dfrac{-1}{2}=-\dfrac12$; $\max\limits_{[0;3]}y=y(3)=\dfrac{2}{5}$.`
   ] },
 { muc: "VD", de: R`Tìm GTLN, GTNN của hàm số $y=x+\sqrt{4-x^2}$.`,
   giai: [
    R`Tập xác định: $4-x^2\ge0\Leftrightarrow D=[-2;2]$.`,
    R`$y'=1-\dfrac{x}{\sqrt{4-x^2}}$ với $x\in(-2;2)$.`,
    R`$y'=0\Leftrightarrow\sqrt{4-x^2}=x\Leftrightarrow\begin{cases}x\ge0\\4-x^2=x^2\end{cases}\Leftrightarrow\begin{cases}x\ge0\\x^2=2\end{cases}\Leftrightarrow x=\sqrt2$.`,
    R`$y(-2)=-2+0=-2$; $y(\sqrt2)=\sqrt2+\sqrt{2}=2\sqrt2$; $y(2)=2+0=2$.`,
    R`**Kết luận.** $\max y=2\sqrt2$ (tại $x=\sqrt2$); $\min y=-2$ (tại $x=-2$).`
   ] }
 ] },

"C1-B2-D03": {
 pp: [
  R`Trên khoảng, nửa khoảng hoặc $\mathbb R$ (không phải đoạn), **lập bảng biến thiên** trên miền đó, kể cả các giới hạn ở hai đầu.`,
  R`Đọc bảng: giá trị lớn nhất (nhỏ nhất) phải **đạt được** tại một điểm của miền; giá trị chỉ là giới hạn thì không tính.`,
  R`Có thể kiểm tra lại bằng bất đẳng thức (Cô-si, bình phương) nếu thấy nhanh hơn.`
 ],
 luuY: [
  R`Áp dụng máy móc cách "tính tại hai đầu mút" khi đầu mút không thuộc miền.`
 ],
 vd: [
 { muc: "TH", de: R`Tìm giá trị nhỏ nhất của hàm số $y=x+\dfrac4x$ trên khoảng $(0;+\infty)$.`,
   giai: [
    R`$y'=1-\dfrac{4}{x^2}=\dfrac{x^2-4}{x^2}$. Trên $(0;+\infty)$: $y'=0\Leftrightarrow x=2$.`,
    R`$y'<0$ khi $0<x<2$, $y'>0$ khi $x>2$; $y(2)=2+2=4$; $\lim\limits_{x\to0^+}y=+\infty$, $\lim\limits_{x\to+\infty}y=+\infty$.
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.6]{$x$/0.8,$y'$/0.8,$y$/2}{$0$,$2$,$+\infty$}
\tkzTabLine{d,-,0,+,}
\tkzTabVar{D+/$+\infty$,-/$4$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** $\min\limits_{(0;+\infty)}y=4$ tại $x=2$; hàm số không có GTLN trên khoảng này. (Kiểm tra bằng Cô-si: $x+\dfrac4x\ge2\sqrt{x\cdot\dfrac4x}=4$.)`
   ] },
 { muc: "TH", de: R`Tìm GTLN, GTNN của hàm số $y=\dfrac{x}{x^2+1}$ trên $\mathbb R$.`,
   giai: [
    R`$y'=\dfrac{(x^2+1)-x\cdot2x}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}$; $y'=0\Leftrightarrow x=\pm1$.`,
    R`$y(-1)=-\dfrac12$, $y(1)=\dfrac12$; $\lim\limits_{x\to\pm\infty}y=0$. $y'>0$ khi $-1<x<1$, $y'<0$ khi $|x|>1$.
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2.8}{$-\infty$,$-1$,$1$,$+\infty$}
\tkzTabLine{,-,0,+,0,-,}
\tkzTabVar{+/$0$,-/$-\tfrac12$,+/$\tfrac12$,-/$0$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** $\max\limits_{\mathbb R}y=\dfrac12$ (tại $x=1$); $\min\limits_{\mathbb R}y=-\dfrac12$ (tại $x=-1$).`
   ] },
 { muc: "VD", de: R`Tìm giá trị nhỏ nhất của hàm số $y=x-\ln x$.`,
   giai: [
    R`Tập xác định $D=(0;+\infty)$.`,
    R`$y'=1-\dfrac1x=\dfrac{x-1}{x}$; trên $D$: $y'=0\Leftrightarrow x=1$; $y'<0$ khi $0<x<1$, $y'>0$ khi $x>1$.`,
    R`$y(1)=1-0=1$; $\lim\limits_{x\to0^+}(x-\ln x)=+\infty$; $\lim\limits_{x\to+\infty}(x-\ln x)=+\infty$.
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.6]{$x$/0.8,$y'$/0.8,$y$/2}{$0$,$1$,$+\infty$}
\tkzTabLine{d,-,0,+,}
\tkzTabVar{D+/$+\infty$,-/$1$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** $\min y=1$ tại $x=1$; hàm số không có GTLN.`
   ] }
 ] },

"C1-B2-D04": {
 pp: [
  R`**Bước 1.** Đặt ẩn $x$ (kèm đơn vị) cho đại lượng thay đổi, tìm điều kiện của $x$ từ thực tế (độ dài dương, không vượt kích thước cho trước…).`,
  R`**Bước 2.** Lập hàm số của đại lượng cần lớn nhất / nhỏ nhất theo $x$ (thể tích, diện tích, chi phí…).`,
  R`**Bước 3.** Tìm GTLN / GTNN của hàm số trên miền điều kiện (lập bảng biến thiên), rồi trả lời đúng câu hỏi (giá trị $x$ hay giá trị lớn nhất, có đơn vị).`
 ],
 luuY: [
  R`Bỏ quên điều kiện của ẩn nên nhận cả nghiệm vô lí (độ dài âm, cắt quá nửa tấm bìa…).`
 ],
 vd: [
 { muc: "TH", de: R`Từ một tấm bìa hình vuông cạnh $12$ cm, người ta cắt ở bốn góc bốn hình vuông bằng nhau cạnh $x$ (cm) rồi gấp lại thành một cái hộp không nắp. Tìm $x$ để thể tích hộp lớn nhất.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.3]
\draw[thick] (0,0) rectangle (12,12);
\draw[fill=gray!30] (0,0) rectangle (2,2);
\draw[fill=gray!30] (10,0) rectangle (12,2);
\draw[fill=gray!30] (0,10) rectangle (2,12);
\draw[fill=gray!30] (10,10) rectangle (12,12);
\draw[dashed] (2,2) rectangle (10,10);
\node[below] at (1,0){$x$};
\node[below] at (6,0){$12-2x$};
\end{tikzpicture}`,
   giai: [
    R`Đáy hộp là hình vuông cạnh $12-2x$, chiều cao $x$. Điều kiện $0<x<6$.`,
    R`Thể tích $V(x)=x(12-2x)^2$ (cm$^3$).`,
    R`$V'(x)=(12-2x)^2+x\cdot2(12-2x)\cdot(-2)=(12-2x)(12-2x-4x)=(12-2x)(12-6x)$.`,
    R`Trên $(0;6)$: $12-2x>0$ nên $V'(x)=0\Leftrightarrow x=2$; $V'>0$ khi $0<x<2$, $V'<0$ khi $2<x<6$. Bảng biến thiên:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.4,espcl=2.6]{$x$/0.8,$V'$/0.8,$V$/2}{$0$,$2$,$6$}
\tkzTabLine{,+,0,-,}
\tkzTabVar{-/$0$,+/$128$,-/$0$}
\end{tikzpicture}\end{center}`,
    R`**Kết luận.** Thể tích lớn nhất bằng $V(2)=2\cdot8^2=128$ cm$^3$ khi $x=2$ cm.`
   ] },
 { muc: "TH", de: R`Bác An có $60$ m lưới, muốn rào một mảnh vườn hình chữ nhật dựa vào một bức tường có sẵn (mặt dựa tường không cần rào). Tính diện tích lớn nhất có thể rào được.`,
   giai: [
    R`Gọi $x$ (m) là độ dài mỗi cạnh vuông góc với tường. Cạnh song song với tường dài $60-2x$ (m). Điều kiện $0<x<30$.`,
    R`Diện tích $S(x)=x(60-2x)=60x-2x^2$.`,
    R`$S'(x)=60-4x=0\Leftrightarrow x=15$; $S'>0$ khi $x<15$, $S'<0$ khi $x>15$, nên $S$ lớn nhất tại $x=15$.`,
    R`$S(15)=15\cdot30=450$.`,
    R`**Kết luận.** Diện tích lớn nhất là $450$ m$^2$ (hai cạnh vuông góc tường dài $15$ m, cạnh song song tường dài $30$ m).`
   ] },
 { muc: "VD", de: R`Cần xây một bể chứa nước hình hộp chữ nhật không nắp, đáy là hình vuông, thể tích $32$ m$^3$. Tìm kích thước của bể để tốn ít vật liệu nhất (tổng diện tích đáy và bốn mặt bên nhỏ nhất).`,
   giai: [
    R`Gọi cạnh đáy là $x$ (m), chiều cao là $h$ (m), $x>0$. Từ $x^2h=32$ suy ra $h=\dfrac{32}{x^2}$.`,
    R`Diện tích cần xây: $S=x^2+4xh=x^2+4x\cdot\dfrac{32}{x^2}=x^2+\dfrac{128}{x}$.`,
    R`$S'=2x-\dfrac{128}{x^2}=\dfrac{2x^3-128}{x^2}$; $S'=0\Leftrightarrow x^3=64\Leftrightarrow x=4$. $S'<0$ khi $0<x<4$, $S'>0$ khi $x>4$ nên $S$ nhỏ nhất tại $x=4$.`,
    R`Khi đó $h=\dfrac{32}{16}=2$ và $S=16+\dfrac{128}{4}=48$ (m$^2$).`,
    R`**Kết luận.** Bể có đáy vuông cạnh $4$ m, cao $2$ m; diện tích vật liệu nhỏ nhất $48$ m$^2$.`
   ] }
 ] }
});
/* ---------- Chương I · Bài 3. Đường tiệm cận ---------- */
Object.assign(D, {
"C1-B3-D01": {
 pp: [
  R`**Tiệm cận đứng** $x=x_0$: chỉ cần **ít nhất một** trong bốn giới hạn $\lim\limits_{x\to x_0^+}f(x)$, $\lim\limits_{x\to x_0^-}f(x)$ bằng $+\infty$ hoặc $-\infty$.`,
  R`**Tiệm cận ngang** $y=y_0$: $\lim\limits_{x\to+\infty}f(x)=y_0$ hoặc $\lim\limits_{x\to-\infty}f(x)=y_0$ (số hữu hạn).`,
  R`Trên bảng biến thiên: ô có $\pm\infty$ sát vạch kép tại $x_0$ cho tiệm cận đứng $x=x_0$; số ghi ở hai cột đầu, cuối (ứng với $x\to\mp\infty$) cho tiệm cận ngang.`
 ],
 luuY: [
  R`Hai giới hạn ở $\pm\infty$ khác nhau thì có **hai** tiệm cận ngang; bằng nhau thì chỉ tính **một**.`,
  R`Giới hạn ở $\pm\infty$ bằng $\pm\infty$ thì không cho tiệm cận ngang.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hàm số $y=f(x)$ có bảng biến thiên như sau:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=3]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$1$,$+\infty$}
\tkzTabLine{,-,d,-,}
\tkzTabVar{+/$2$,-D+/$-\infty$/$+\infty$,-/$2$}
\end{tikzpicture}\end{center}
Tìm các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số.`,
   giai: [
    R`Từ bảng: $\lim\limits_{x\to1^-}f(x)=-\infty$ và $\lim\limits_{x\to1^+}f(x)=+\infty$, nên $x=1$ là tiệm cận đứng.`,
    R`$\lim\limits_{x\to-\infty}f(x)=2$ và $\lim\limits_{x\to+\infty}f(x)=2$, nên $y=2$ là tiệm cận ngang (chỉ một đường).`,
    R`**Kết luận.** Đồ thị có tiệm cận đứng $x=1$ và tiệm cận ngang $y=2$.`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có bảng biến thiên như sau:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=3]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$+\infty$}
\tkzTabLine{,+,d,+,}
\tkzTabVar{-/$1$,+D-/$+\infty$/$-\infty$,+/$3$}
\end{tikzpicture}\end{center}
Đồ thị hàm số có tổng cộng bao nhiêu đường tiệm cận đứng và tiệm cận ngang?`,
   giai: [
    R`$\lim\limits_{x\to-1^-}f(x)=+\infty$ nên $x=-1$ là tiệm cận đứng.`,
    R`$\lim\limits_{x\to-\infty}f(x)=1$ nên $y=1$ là tiệm cận ngang; $\lim\limits_{x\to+\infty}f(x)=3$ nên $y=3$ cũng là tiệm cận ngang.`,
    R`**Kết luận.** Có $3$ đường tiệm cận: $x=-1$, $y=1$, $y=3$.`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ xác định trên $\mathbb R\setminus\{3\}$ có $\lim\limits_{x\to\pm\infty}f(x)=2$, $\lim\limits_{x\to3^-}f(x)=5$, $\lim\limits_{x\to3^+}f(x)=-\infty$. Tìm các đường tiệm cận của đồ thị hàm số.`,
   giai: [
    R`$\lim\limits_{x\to\pm\infty}f(x)=2$ nên $y=2$ là tiệm cận ngang.`,
    R`Tại $x=3$: giới hạn trái bằng $5$ (hữu hạn) nhưng giới hạn phải bằng $-\infty$. Chỉ cần một phía vô cực là đủ, nên $x=3$ là tiệm cận đứng.`,
    R`**Kết luận.** Đồ thị có tiệm cận đứng $x=3$ và tiệm cận ngang $y=2$.`
   ] }
 ] },

"C1-B3-D02": {
 pp: [
  R`**Tiệm cận đứng:** tìm nghiệm $x_0$ của mẫu, **rút gọn** phân thức (nếu tử và mẫu có nhân tử chung), rồi tính giới hạn một bên tại $x_0$. Chỉ khi giới hạn là $\pm\infty$ mới là tiệm cận đứng.`,
  R`**Tiệm cận ngang:** tính $\lim\limits_{x\to+\infty}f(x)$ và $\lim\limits_{x\to-\infty}f(x)$ (nếu tập xác định cho phép). Với $y=\dfrac{ax+b}{cx+d}$ ($c\ne0$, $ad-bc\ne0$): tiệm cận đứng $x=-\dfrac dc$, tiệm cận ngang $y=\dfrac ac$.`,
  R`Hàm có căn: xét tập xác định trước; nếu $x$ không tiến được tới $-\infty$ (hoặc $+\infty$) thì không xét giới hạn phía đó.`
 ],
 luuY: [
  R`Thấy mẫu bằng $0$ là kết luận ngay tiệm cận đứng mà không rút gọn (ví dụ 2).`,
  R`Với $x\to-\infty$ thì $\sqrt{x^2}=|x|=-x$, hay quên dấu trừ (ví dụ 4).`
 ],
 vd: [
 { muc: "NB", de: R`Tìm tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\dfrac{2x+1}{x-3}$.`,
   giai: [
    R`Tập xác định $D=\mathbb R\setminus\{3\}$.`,
    R`$\lim\limits_{x\to3^+}\dfrac{2x+1}{x-3}=+\infty$ (tử $\to7>0$, mẫu $\to0^+$), nên $x=3$ là tiệm cận đứng.`,
    R`$\lim\limits_{x\to\pm\infty}\dfrac{2x+1}{x-3}=\lim\limits_{x\to\pm\infty}\dfrac{2+\frac1x}{1-\frac3x}=2$, nên $y=2$ là tiệm cận ngang.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.4,>=stealth]
\begin{scope}\clip (-5,-5) rectangle (11,12);
\draw[thick,smooth,samples=200,domain=-5:2.4,blue] plot(\x,{(2*\x+1)/(\x-3)});
\draw[thick,smooth,samples=200,domain=3.6:11,blue] plot(\x,{(2*\x+1)/(\x-3)});
\end{scope}
\draw[dashed,red] (3,-5)--(3,12);
\draw[dashed,red] (-5,2)--(11,2);
\draw[->] (-5,0)--(11.5,0) node[below]{$x$};
\draw[->] (0,-5)--(0,12.5) node[left]{$y$};
\node[below right] at (3,0){$3$};
\node[above left] at (0,2){$2$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Hai đường đứt màu đỏ là tiệm cận đứng $x=3$ và tiệm cận ngang $y=2$.` },
 { muc: "TH", de: R`Đồ thị hàm số $y=\dfrac{x^2-1}{x^2-3x+2}$ có bao nhiêu đường tiệm cận đứng và tiệm cận ngang?`,
   giai: [
    R`Mẫu $x^2-3x+2=(x-1)(x-2)=0\Leftrightarrow x=1$ hoặc $x=2$. Tập xác định $D=\mathbb R\setminus\{1;2\}$.`,
    R`Rút gọn: $y=\dfrac{(x-1)(x+1)}{(x-1)(x-2)}=\dfrac{x+1}{x-2}$ với $x\ne1$.`,
    R`Tại $x=1$: $\lim\limits_{x\to1}y=\dfrac{1+1}{1-2}=-2$ (hữu hạn) nên $x=1$ **không** là tiệm cận đứng.`,
    R`Tại $x=2$: $\lim\limits_{x\to2^+}\dfrac{x+1}{x-2}=+\infty$ nên $x=2$ là tiệm cận đứng.`,
    R`$\lim\limits_{x\to\pm\infty}y=\lim\limits_{x\to\pm\infty}\dfrac{1-\frac{1}{x^2}}{1-\frac3x+\frac{2}{x^2}}=1$ nên $y=1$ là tiệm cận ngang.`,
    R`**Kết luận.** Có $2$ đường tiệm cận: $x=2$ và $y=1$.`
   ] },
 { muc: "VD", de: R`Tìm các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\dfrac{\sqrt{x+4}-2}{x}$.`,
   giai: [
    R`Tập xác định: $x+4\ge0$ và $x\ne0$, tức $D=[-4;+\infty)\setminus\{0\}$. Vì vậy chỉ xét $x\to+\infty$, không xét $x\to-\infty$.`,
    R`Nhân liên hợp: $y=\dfrac{(\sqrt{x+4}-2)(\sqrt{x+4}+2)}{x(\sqrt{x+4}+2)}=\dfrac{x}{x(\sqrt{x+4}+2)}=\dfrac{1}{\sqrt{x+4}+2}$ với $x\ne0$.`,
    R`$\lim\limits_{x\to0}y=\dfrac{1}{2+2}=\dfrac14$ (hữu hạn) nên $x=0$ không là tiệm cận đứng.`,
    R`$\lim\limits_{x\to+\infty}\dfrac{1}{\sqrt{x+4}+2}=0$ nên $y=0$ là tiệm cận ngang.`,
    R`**Kết luận.** Đồ thị chỉ có một tiệm cận: tiệm cận ngang $y=0$.`
   ] },
 { muc: "VD", de: R`Tìm các tiệm cận ngang của đồ thị hàm số $y=\dfrac{2x}{\sqrt{x^2+1}}$.`,
   giai: [
    R`Tập xác định $D=\mathbb R$ (vì $x^2+1>0$), nên không có tiệm cận đứng.`,
    R`Khi $x\to+\infty$: $\sqrt{x^2+1}=x\sqrt{1+\frac1{x^2}}$, nên $y=\dfrac{2x}{x\sqrt{1+\frac1{x^2}}}=\dfrac{2}{\sqrt{1+\frac1{x^2}}}\to2$.`,
    R`Khi $x\to-\infty$: $\sqrt{x^2+1}=|x|\sqrt{1+\frac1{x^2}}=-x\sqrt{1+\frac1{x^2}}$, nên $y=\dfrac{2x}{-x\sqrt{1+\frac1{x^2}}}\to-2$.`,
    R`**Kết luận.** Đồ thị có hai tiệm cận ngang $y=2$ và $y=-2$.`
   ] }
 ] },

"C1-B3-D03": {
 pp: [
  R`Đường thẳng $y=ax+b$ ($a\ne0$) là **tiệm cận xiên** nếu $\lim\limits_{x\to+\infty}\left[f(x)-(ax+b)\right]=0$ hoặc $\lim\limits_{x\to-\infty}\left[f(x)-(ax+b)\right]=0$.`,
  R`**Cách tìm chung:** $a=\lim\dfrac{f(x)}{x}$ (khác $0$, hữu hạn), rồi $b=\lim\left[f(x)-ax\right]$; tính riêng cho $x\to+\infty$ và $x\to-\infty$.`,
  R`**Phân thức bậc hai trên bậc nhất:** chia tử cho mẫu, viết $y=ax+b+\dfrac{k}{cx+d}$ ($k\ne0$); khi đó $y=ax+b$ là tiệm cận xiên và $x=-\dfrac dc$ là tiệm cận đứng.`
 ],
 luuY: [
  R`Với hàm chứa căn, tiệm cận xiên ở $+\infty$ và ở $-\infty$ có thể khác nhau (ví dụ 3).`
 ],
 vd: [
 { muc: "TH", de: R`Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{x^2+x+1}{x-1}$.`,
   giai: [
    R`Chia đa thức: $x^2+x+1=(x-1)(x+2)+3$, nên $y=x+2+\dfrac{3}{x-1}$.`,
    R`$\lim\limits_{x\to\pm\infty}\left[y-(x+2)\right]=\lim\limits_{x\to\pm\infty}\dfrac{3}{x-1}=0$, nên $y=x+2$ là tiệm cận xiên.`,
    R`$\lim\limits_{x\to1^+}y=+\infty$ (vì $\dfrac{3}{x-1}\to+\infty$), nên $x=1$ là tiệm cận đứng.`,
    R`**Kết luận.** Tiệm cận đứng $x=1$, tiệm cận xiên $y=x+2$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.35,>=stealth]
\begin{scope}\clip (-7,-9) rectangle (8,13);
\draw[thick,smooth,samples=200,domain=-7:0.7,blue] plot(\x,{(\x*\x+\x+1)/(\x-1)});
\draw[thick,smooth,samples=200,domain=1.25:8,blue] plot(\x,{(\x*\x+\x+1)/(\x-1)});
\draw[dashed,red] (-7,-5)--(8,10);
\end{scope}
\draw[dashed,red] (1,-9)--(1,13);
\draw[->] (-7,0)--(8.5,0) node[below]{$x$};
\draw[->] (0,-9)--(0,13.5) node[left]{$y$};
\node[below right] at (1,0){$1$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Đồ thị tiến sát đường $y=x+2$ khi $x\to\pm\infty$ và sát đường $x=1$ khi $x\to1$.` },
 { muc: "TH", de: R`Tìm tiệm cận xiên của đồ thị hàm số $y=\dfrac{2x^2-3x+2}{x}$.`,
   giai: [
    R`Tập xác định $D=\mathbb R\setminus\{0\}$. Chia từng hạng tử: $y=2x-3+\dfrac2x$.`,
    R`$\lim\limits_{x\to\pm\infty}\left[y-(2x-3)\right]=\lim\limits_{x\to\pm\infty}\dfrac2x=0$.`,
    R`**Kết luận.** Tiệm cận xiên là $y=2x-3$ (ngoài ra $x=0$ là tiệm cận đứng).`
   ] },
 { muc: "VD", de: R`Tìm các tiệm cận xiên của đồ thị hàm số $y=\sqrt{x^2+2x+3}$.`,
   giai: [
    R`Tập xác định $D=\mathbb R$ (vì $x^2+2x+3=(x+1)^2+2>0$).`,
    R`**Khi $x\to+\infty$:** $a=\lim\dfrac{\sqrt{x^2+2x+3}}{x}=\lim\sqrt{1+\frac2x+\frac3{x^2}}=1$; $b=\lim\left(\sqrt{x^2+2x+3}-x\right)=\lim\dfrac{2x+3}{\sqrt{x^2+2x+3}+x}=\lim\dfrac{2+\frac3x}{\sqrt{1+\frac2x+\frac3{x^2}}+1}=1$. Tiệm cận xiên $y=x+1$.`,
    R`**Khi $x\to-\infty$:** $\sqrt{x^2+2x+3}=-x\sqrt{1+\frac2x+\frac3{x^2}}$ nên $a=\lim\dfrac{\sqrt{x^2+2x+3}}{x}=-1$; $b=\lim\left(\sqrt{x^2+2x+3}+x\right)=\lim\dfrac{2x+3}{\sqrt{x^2+2x+3}-x}=\lim\dfrac{2+\frac3x}{-\sqrt{1+\frac2x+\frac3{x^2}}-1}=-1$. Tiệm cận xiên $y=-x-1$.`,
    R`**Kết luận.** Đồ thị có hai tiệm cận xiên: $y=x+1$ (khi $x\to+\infty$) và $y=-x-1$ (khi $x\to-\infty$).`
   ] }
 ] },

"C1-B3-D04": {
 pp: [
  R`Viết phương trình các tiệm cận, tìm **giao điểm $I$ của hai tiệm cận** (với $y=\dfrac{ax+b}{cx+d}$: $I\left(-\dfrac dc;\dfrac ac\right)$).`,
  R`Khoảng cách từ $M(x_M;y_M)$ đến tiệm cận đứng $x=x_0$ là $|x_M-x_0|$, đến tiệm cận ngang $y=y_0$ là $|y_M-y_0|$.`,
  R`Diện tích hình tạo bởi tiệm cận và các trục: vẽ hình, xác định các đỉnh rồi tính.`
 ],
 luuY: [
  R`Quên dấu giá trị tuyệt đối khi tính khoảng cách hoặc độ dài cạnh.`
 ],
 vd: [
 { muc: "TH", de: R`Hai đường tiệm cận của đồ thị hàm số $y=\dfrac{2x+1}{x-1}$ cùng hai trục toạ độ tạo thành một hình chữ nhật. Tính diện tích hình chữ nhật đó.`,
   giai: [
    R`Tiệm cận đứng $x=1$, tiệm cận ngang $y=2$; chúng cắt nhau tại $I(1;2)$.`,
    R`Hình chữ nhật có các đỉnh $O(0;0)$, $(1;0)$, $I(1;2)$, $(0;2)$; hai cạnh dài $1$ và $2$.`,
    R`**Kết luận.** Diện tích bằng $1\cdot2=2$.`
   ] },
 { muc: "TH", de: R`Tính khoảng cách từ gốc toạ độ $O$ đến giao điểm hai đường tiệm cận của đồ thị hàm số $y=\dfrac{3x-1}{x+2}$.`,
   giai: [
    R`Tiệm cận đứng $x=-2$; tiệm cận ngang $y=3$. Giao điểm $I(-2;3)$.`,
    R`$OI=\sqrt{(-2)^2+3^2}=\sqrt{13}$.`
   ] },
 { muc: "VD", de: R`Cho $M$ là điểm bất kì thuộc đồ thị $(C)$ của hàm số $y=\dfrac{x+2}{x-1}$. Chứng minh tích các khoảng cách từ $M$ đến hai đường tiệm cận của $(C)$ không đổi.`,
   giai: [
    R`Tiệm cận đứng $x=1$, tiệm cận ngang $y=1$.`,
    R`Gọi $M\left(a;\dfrac{a+2}{a-1}\right)$ với $a\ne1$.`,
    R`Khoảng cách từ $M$ đến tiệm cận đứng: $d_1=|a-1|$.`,
    R`Khoảng cách từ $M$ đến tiệm cận ngang: $d_2=\left|\dfrac{a+2}{a-1}-1\right|=\left|\dfrac{a+2-a+1}{a-1}\right|=\dfrac{3}{|a-1|}$.`,
    R`$d_1\cdot d_2=|a-1|\cdot\dfrac{3}{|a-1|}=3$, không phụ thuộc vào $a$.`,
    R`**Kết luận.** Tích hai khoảng cách luôn bằng $3$.`
   ] }
 ] }
});

/* ---------- Chương I · Bài 4. Khảo sát và vẽ đồ thị ---------- */
Object.assign(D, {
"C1-B4-D01": {
 pp: [
  R`Hàm bậc ba $y=ax^3+bx^2+cx+d$: **$a>0$** thì nhánh bên phải đi lên, **$a<0$** thì nhánh bên phải đi xuống.`,
  R`Đồ thị cắt $Oy$ tại điểm $(0;d)$: điểm này nằm trên $Ox$ thì $d>0$, dưới $Ox$ thì $d<0$.`,
  R`$y'=3ax^2+2bx+c$. Nếu có hai điểm cực trị $x_1,x_2$ thì $x_1+x_2=-\dfrac{2b}{3a}$ và $x_1x_2=\dfrac{c}{3a}$; từ vị trí hai điểm cực trị suy ra dấu của $b$, $c$.`,
  R`Không có cực trị khi $y'$ không đổi dấu ($b^2-3ac\le0$).`
 ],
 luuY: [
  R`Suy dấu $b$, $c$ từ tổng, tích hai nghiệm nhưng quên chia cho dấu của $a$.`
 ],
 vd: [
 { muc: "NB", de: R`Đồ thị ở hình bên là của hàm số nào? **A.** $y=-x^3+3x+1$. **B.** $y=x^3-3x+1$. **C.** $y=x^3+3x+1$. **D.** $y=x^4-2x^2+1$.`,
   hinhDe: R`\begin{tikzpicture}[scale=1,>=stealth]
\begin{scope}\clip (-2.2,-1.9) rectangle (2.2,3.6);
\draw[thick,smooth,samples=200,domain=-2.2:2.2,blue] plot(\x,{\x*\x*\x-3*\x+1});
\end{scope}
\draw[->] (-2.4,0)--(2.5,0) node[below]{$x$};
\draw[->] (0,-1.9)--(0,3.8) node[left]{$y$};
\draw[dashed] (-1,0)--(-1,3)--(0,3);
\draw[dashed] (1,0)--(1,-1)--(0,-1);
\node[below left] at (-1,0){$-1$};
\node[above] at (1,0){$1$};
\node[right] at (0,3){$3$};
\node[left] at (0,-1){$-1$};
\end{tikzpicture}`,
   giai: [
    R`Đồ thị có dạng chữ "N" của hàm bậc ba nên loại D (hàm bậc bốn).`,
    R`Nhánh bên phải đi lên nên $a>0$: loại A.`,
    R`Đồ thị có hai điểm cực trị. Với C: $y'=3x^2+3>0$ nên không có cực trị, loại C.`,
    R`Kiểm tra B: $y'=3x^2-3=0\Leftrightarrow x=\pm1$; $y(-1)=3$, $y(1)=-1$, $y(0)=1$, khớp với hình.`,
    R`**Đáp án B.**`
   ] },
 { muc: "TH", de: R`Hàm số $y=ax^3+bx^2+cx+d$ có đồ thị như hình bên (hai điểm cực trị tại $x=0$ và $x=2$). Xác định dấu của $a$, $b$, $c$, $d$.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.9,>=stealth]
\begin{scope}\clip (-1.2,-2.2) rectangle (3.3,3.6);
\draw[thick,smooth,samples=200,domain=-1.2:3.3,blue] plot(\x,{-\x*\x*\x+3*\x*\x-1});
\end{scope}
\draw[->] (-1.4,0)--(3.5,0) node[below]{$x$};
\draw[->] (0,-2.2)--(0,3.8) node[left]{$y$};
\draw[dashed] (2,0)--(2,3)--(0,3);
\node[below] at (2,0){$2$};
\node[left] at (0,3){$3$};
\node[left] at (0,-1){$-1$};
\end{tikzpicture}`,
   giai: [
    R`Nhánh bên phải đi xuống nên $a<0$.`,
    R`Đồ thị cắt $Oy$ tại điểm $(0;-1)$ nằm dưới $Ox$ nên $d<0$.`,
    R`Hai điểm cực trị $x_1=0$, $x_2=2$ là nghiệm của $y'=3ax^2+2bx+c$.`,
    R`Tích $x_1x_2=\dfrac{c}{3a}=0$ nên $c=0$.`,
    R`Tổng $x_1+x_2=-\dfrac{2b}{3a}=2>0$ nên $\dfrac ba<0$; vì $a<0$ nên $b>0$.`,
    R`**Kết luận.** $a<0$, $b>0$, $c=0$, $d<0$. (Hàm số trong hình là $y=-x^3+3x^2-1$.)`
   ] },
 { muc: "TH", de: R`Bảng biến thiên dưới đây là của hàm số nào? **A.** $y=x^3-3x+1$. **B.** $y=-x^3+3x+1$. **C.** $y=-x^3+3x-1$. **D.** $y=-x^3-3x+1$.
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$1$,$+\infty$}
\tkzTabLine{,-,0,+,0,-,}
\tkzTabVar{+/$+\infty$,-/$-1$,+/$3$,-/$-\infty$}
\end{tikzpicture}\end{center}`,
   giai: [
    R`Khi $x\to+\infty$ thì $y\to-\infty$ nên $a<0$: loại A.`,
    R`D có $y'=-3x^2-3<0$ nên không có cực trị: loại D.`,
    R`B: $y(-1)=1-3+1=-1$, $y(1)=-1+3+1=3$, khớp bảng. C: $y(1)=-1+3-1=1\ne3$, loại C.`,
    R`**Đáp án B.**`
   ] }
 ] },

"C1-B4-D02": {
 pp: [
  R`Hàm $y=\dfrac{ax+b}{cx+d}$: tiệm cận đứng $x=-\dfrac dc$, tiệm cận ngang $y=\dfrac ac$; cắt $Oy$ tại $\left(0;\dfrac bd\right)$, cắt $Ox$ tại $\left(-\dfrac ba;0\right)$.`,
  R`Hàm đồng biến trên từng khoảng khi $ad-bc>0$ (mỗi nhánh đi lên), nghịch biến khi $ad-bc<0$.`,
  R`Nhận dạng: đối chiếu lần lượt tiệm cận, giao điểm với các trục, chiều biến thiên để loại đáp án. Xét dấu hệ số: viết mỗi dữ kiện thành dấu của một tích như $cd<0$, $ac>0$…`
 ],
 luuY: [
  R`Nhầm tiệm cận ngang $y=\dfrac ac$ thành $y=\dfrac ca$ hoặc $y=\dfrac bd$.`
 ],
 vd: [
 { muc: "NB", de: R`Đồ thị ở hình bên là của hàm số nào? **A.** $y=\dfrac{x+1}{x-1}$. **B.** $y=\dfrac{x-1}{x+1}$. **C.** $y=\dfrac{2x+1}{x-1}$. **D.** $y=\dfrac{x+1}{1-x}$.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.45,>=stealth]
\begin{scope}\clip (-5,-5) rectangle (6,7);
\draw[thick,smooth,samples=200,domain=-5:0.7,blue] plot(\x,{(\x+1)/(\x-1)});
\draw[thick,smooth,samples=200,domain=1.3:6,blue] plot(\x,{(\x+1)/(\x-1)});
\end{scope}
\draw[dashed,red] (1,-5)--(1,7);
\draw[dashed,red] (-5,1)--(6,1);
\draw[->] (-5,0)--(6.5,0) node[below]{$x$};
\draw[->] (0,-5)--(0,7.5) node[left]{$y$};
\node[below right] at (1,0){$1$};
\node[above left] at (0,1){$1$};
\node[below] at (-1,0){$-1$};
\node[left] at (0,-1){$-1$};
\end{tikzpicture}`,
   giai: [
    R`Tiệm cận đứng $x=1$: loại B (tiệm cận đứng $x=-1$).`,
    R`Tiệm cận ngang $y=1$: loại C (tiệm cận ngang $y=2$) và D (tiệm cận ngang $y=-1$).`,
    R`Kiểm tra A: cắt $Oy$ tại $(0;-1)$, cắt $Ox$ tại $(-1;0)$, $y'=\dfrac{-2}{(x-1)^2}<0$ (mỗi nhánh đi xuống), khớp hình.`,
    R`**Đáp án A.**`
   ] },
 { muc: "TH", de: R`Cho hàm số $y=\dfrac{ax+b}{x+c}$ có đồ thị với tiệm cận đứng $x=2$, tiệm cận ngang $y=1$ và đi qua điểm $\left(0;-\dfrac12\right)$. Tính $a+b+c$.`,
   giai: [
    R`Tiệm cận đứng $x=-c=2$ nên $c=-2$.`,
    R`Tiệm cận ngang $y=\dfrac a1=1$ nên $a=1$.`,
    R`Đồ thị qua $\left(0;-\dfrac12\right)$: $\dfrac{b}{c}=-\dfrac12\Rightarrow\dfrac{b}{-2}=-\dfrac12\Rightarrow b=1$.`,
    R`**Kết luận.** $a+b+c=1+1-2=0$ (hàm số là $y=\dfrac{x+1}{x-2}$).`
   ] },
 { muc: "VD", de: R`Hàm số $y=\dfrac{ax+b}{cx+d}$ có đồ thị với tiệm cận đứng nằm bên phải $Oy$, tiệm cận ngang nằm phía trên $Ox$, cắt trục $Oy$ tại điểm có tung độ âm và cắt trục $Ox$ tại điểm có hoành độ âm. Xác định dấu của các tích $cd$, $ac$, $bd$, $ab$, $ad$.`,
   giai: [
    R`Tiệm cận đứng $x=-\dfrac dc>0\Rightarrow\dfrac dc<0\Rightarrow cd<0$.`,
    R`Tiệm cận ngang $y=\dfrac ac>0\Rightarrow ac>0$.`,
    R`Giao $Oy$: $\dfrac bd<0\Rightarrow bd<0$.`,
    R`Giao $Ox$: $-\dfrac ba<0\Rightarrow\dfrac ba>0\Rightarrow ab>0$.`,
    R`Từ $ac>0$ ($a$, $c$ cùng dấu) và $cd<0$ ($c$, $d$ trái dấu) suy ra $a$, $d$ trái dấu: $ad<0$.`,
    R`**Kết luận.** $cd<0$, $ac>0$, $bd<0$, $ab>0$, $ad<0$. (Ví dụ $y=\dfrac{x+1}{x-2}$ thoả các điều kiện này.)`
   ] }
 ] },

"C1-B4-D03": {
 pp: [
  R`**Hàm bậc ba** $y=ax^3+bx^2+cx+d$: tâm đối xứng là điểm $I(x_0;y(x_0))$ với $y''(x_0)=0$, tức $x_0=-\dfrac{b}{3a}$.`,
  R`**Hàm $y=\dfrac{ax+b}{cx+d}$:** tâm đối xứng là giao điểm hai tiệm cận $I\left(-\dfrac dc;\dfrac ac\right)$. **Hàm bậc hai trên bậc nhất:** tâm đối xứng là giao điểm của tiệm cận đứng và tiệm cận xiên.`,
  R`**Hàm trùng phương** $y=ax^4+bx^2+c$ (hàm chẵn): đồ thị nhận trục $Oy$ làm trục đối xứng.`,
  R`Chứng minh $I(x_0;y_0)$ là tâm đối xứng: đổi trục $x=X+x_0$, $y=Y+y_0$, chứng tỏ hàm $Y=g(X)$ là hàm lẻ.`
 ],
 luuY: [
  R`Lấy tâm đối xứng của hàm bậc ba là trung điểm của "hai giá trị cực trị" mà quên tính toạ độ $x$ tương ứng.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm tâm đối xứng của đồ thị hàm số $y=x^3-3x^2+2$.`,
   giai: [
    R`$y'=3x^2-6x$, $y''=6x-6$; $y''=0\Leftrightarrow x=1$.`,
    R`$y(1)=1-3+2=0$.`,
    R`**Kết luận.** Tâm đối xứng là $I(1;0)$.`
   ] },
 { muc: "NB", de: R`Tìm tâm đối xứng của đồ thị hàm số $y=\dfrac{2x-3}{x+1}$.`,
   giai: [
    R`Tiệm cận đứng $x=-1$, tiệm cận ngang $y=2$.`,
    R`**Kết luận.** Tâm đối xứng là giao điểm hai tiệm cận, $I(-1;2)$.`
   ] },
 { muc: "TH", de: R`Tìm tâm đối xứng của đồ thị hàm số $y=\dfrac{x^2-2x+2}{x-1}$.`,
   giai: [
    R`Viết $y=\dfrac{(x-1)^2+1}{x-1}=x-1+\dfrac{1}{x-1}$.`,
    R`Tiệm cận đứng $x=1$, tiệm cận xiên $y=x-1$.`,
    R`Giao điểm: thay $x=1$ vào $y=x-1$ được $y=0$.`,
    R`**Kết luận.** Tâm đối xứng là $I(1;0)$.`
   ] },
 { muc: "VD", de: R`Chứng minh điểm $I(1;0)$ là tâm đối xứng của đồ thị hàm số $y=x^3-3x^2+2$.`,
   giai: [
    R`Đổi trục: đặt $x=X+1$, $y=Y+0$.`,
    R`Thay vào: $Y=(X+1)^3-3(X+1)^2+2=X^3+3X^2+3X+1-3X^2-6X-3+2=X^3-3X$.`,
    R`Hàm $g(X)=X^3-3X$ có $g(-X)=-X^3+3X=-g(X)$ nên là hàm lẻ, đồ thị nhận gốc mới $I$ làm tâm đối xứng.`,
    R`**Kết luận.** $I(1;0)$ là tâm đối xứng của đồ thị.`
   ] }
 ] },

"C1-B4-D04": {
 pp: [
  R`Số nghiệm của phương trình $f(x)=m$ bằng **số giao điểm** của đồ thị $y=f(x)$ với đường thẳng nằm ngang $y=m$; đọc bằng bảng biến thiên hoặc đồ thị.`,
  R`Phương trình dạng $k\cdot f(x)+h=0$: đưa về $f(x)=-\dfrac hk$ trước khi đọc.`,
  R`Giao của hai đồ thị $y=f(x)$, $y=g(x)$: giải **phương trình hoành độ giao điểm** $f(x)=g(x)$ (nhớ điều kiện xác định).`
 ],
 luuY: [
  R`Đường $y=m$ đi qua đúng giá trị cực trị thì số giao điểm giảm (tiếp xúc), cần xét dấu "$<$" hay "$\le$" cẩn thận.`
 ],
 vd: [
 { muc: "TH", de: R`Cho hàm số $y=f(x)$ có bảng biến thiên như sau:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$y'$/0.8,$y$/2}{$-\infty$,$-1$,$1$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,}
\tkzTabVar{-/$-\infty$,+/$3$,-/$-1$,+/$+\infty$}
\end{tikzpicture}\end{center}
Phương trình $2f(x)-3=0$ có bao nhiêu nghiệm thực?`,
   giai: [
    R`$2f(x)-3=0\Leftrightarrow f(x)=\dfrac32$.`,
    R`Số nghiệm bằng số giao điểm của đồ thị với đường thẳng $y=\dfrac32$.`,
    R`Vì $-1<\dfrac32<3$, đường thẳng $y=\dfrac32$ cắt mỗi đoạn mũi tên một lần: trên $(-\infty;-1)$ (giá trị đi từ $-\infty$ lên $3$), trên $(-1;1)$ (từ $3$ xuống $-1$), trên $(1;+\infty)$ (từ $-1$ lên $+\infty$).`,
    R`**Kết luận.** Phương trình có $3$ nghiệm.`
   ] },
 { muc: "TH", de: R`Tìm $m$ để phương trình $x^3-3x+1=m$ có ba nghiệm phân biệt.`,
   giai: [
    R`Xét $f(x)=x^3-3x+1$: $f'(x)=3x^2-3=0\Leftrightarrow x=\pm1$; $f(-1)=3$, $f(1)=-1$.
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.2,espcl=2.4]{$x$/0.8,$f'(x)$/0.8,$f(x)$/2}{$-\infty$,$-1$,$1$,$+\infty$}
\tkzTabLine{,+,0,-,0,+,}
\tkzTabVar{-/$-\infty$,+/$3$,-/$-1$,+/$+\infty$}
\end{tikzpicture}\end{center}`,
    R`Đường thẳng $y=m$ cắt đồ thị tại ba điểm phân biệt khi và chỉ khi $m$ nằm **giữa** giá trị cực tiểu và giá trị cực đại.`,
    R`**Kết luận.** $-1<m<3$.`
   ] },
 { muc: "VD", de: R`Tìm toạ độ giao điểm của đồ thị hàm số $y=\dfrac{2x+1}{x-1}$ và đường thẳng $y=x+1$.`,
   giai: [
    R`Phương trình hoành độ giao điểm: $\dfrac{2x+1}{x-1}=x+1$ với $x\ne1$.`,
    R`$\Leftrightarrow2x+1=(x+1)(x-1)=x^2-1\Leftrightarrow x^2-2x-2=0\Leftrightarrow x=1\pm\sqrt3$ (đều khác $1$).`,
    R`$x=1+\sqrt3\Rightarrow y=2+\sqrt3$; $x=1-\sqrt3\Rightarrow y=2-\sqrt3$.`,
    R`**Kết luận.** Hai giao điểm $\left(1+\sqrt3;2+\sqrt3\right)$ và $\left(1-\sqrt3;2-\sqrt3\right)$.`
   ] },
 { muc: "VD", de: R`Tìm $m$ để đường thẳng $y=m$ cắt đồ thị hàm số $y=x^4-2x^2+3$ tại bốn điểm phân biệt.`,
   giai: [
    R`$y'=4x^3-4x=4x(x^2-1)=0\Leftrightarrow x=0$ hoặc $x=\pm1$; $y(0)=3$, $y(\pm1)=2$.`,
    R`Đồ thị có hình chữ "W": hai điểm thấp nhất $(\pm1;2)$, điểm cực đại $(0;3)$, hai nhánh đi lên $+\infty$.`,
    R`Đường $y=m$ cắt tại $4$ điểm khi nằm giữa giá trị cực tiểu và giá trị cực đại: $2<m<3$. (Với $m=3$ chỉ còn $3$ điểm; với $m=2$ còn $2$ điểm.)`,
    R`**Kết luận.** $2<m<3$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1,>=stealth]
\begin{scope}\clip (-2,-0.4) rectangle (2,4.6);
\draw[thick,smooth,samples=200,domain=-2:2,blue] plot(\x,{\x*\x*\x*\x-2*\x*\x+3});
\end{scope}
\draw[red,thick] (-2.1,2.5)--(2.1,2.5) node[right]{$y=m$};
\draw[->] (-2.3,0)--(2.4,0) node[below]{$x$};
\draw[->] (0,-0.4)--(0,4.8) node[left]{$y$};
\draw[dashed] (-1,0)--(-1,2)--(1,2)--(1,0);
\node[below] at (-1,0){$-1$};
\node[below] at (1,0){$1$};
\node[above left] at (0,3){$3$};
\node[below right] at (0,2){$2$};
\end{tikzpicture}`,
   chuThich: R`Khi $2<m<3$ đường đỏ cắt đồ thị tại $4$ điểm.` }
 ] }
});

/* ---------- Chương I · Bài 5. Ứng dụng đạo hàm vào thực tiễn ---------- */
Object.assign(D, {
"C1-B5-D01": {
 pp: [
  R`Vật chuyển động có quãng đường (hoặc toạ độ, độ cao) $s(t)$: **vận tốc** $v(t)=s'(t)$, **gia tốc** $a(t)=v'(t)=s''(t)$.`,
  R`Vận tốc lớn nhất / nhỏ nhất: tìm GTLN, GTNN của $v(t)$ trên khoảng thời gian đề cho. Độ cao lớn nhất: lúc $h'(t)=0$ (vận tốc bằng $0$).`,
  R`Ghi rõ đơn vị: m/s cho vận tốc, m/s$^2$ cho gia tốc.`
 ],
 luuY: [
  R`Nhầm "vận tốc tại thời điểm $t$" với "quãng đường đi được sau $t$ giây".`
 ],
 vd: [
 { muc: "NB", de: R`Một chất điểm chuyển động theo phương trình $s(t)=t^3-3t^2+5t$ ($s$ tính bằng mét, $t$ tính bằng giây). Tính vận tốc và gia tốc của chất điểm tại thời điểm $t=2$.`,
   giai: [
    R`Vận tốc: $v(t)=s'(t)=3t^2-6t+5$, nên $v(2)=12-12+5=5$ (m/s).`,
    R`Gia tốc: $a(t)=v'(t)=6t-6$, nên $a(2)=12-6=6$ (m/s$^2$).`
   ] },
 { muc: "TH", de: R`Với chất điểm ở ví dụ 1, tìm thời điểm vận tốc của chất điểm nhỏ nhất và tính vận tốc đó.`,
   giai: [
    R`$v(t)=3t^2-6t+5$ với $t\ge0$; $v'(t)=6t-6=0\Leftrightarrow t=1$.`,
    R`$v'<0$ khi $0\le t<1$, $v'>0$ khi $t>1$, nên $v$ nhỏ nhất tại $t=1$.`,
    R`$v(1)=3-6+5=2$. (Cũng thấy ngay: $v=3(t-1)^2+2\ge2$.)`,
    R`**Kết luận.** Vận tốc nhỏ nhất là $2$ m/s tại thời điểm $t=1$ giây.`
   ] },
 { muc: "TH", de: R`Một quả bóng được ném thẳng đứng lên từ độ cao $2$ m, độ cao của bóng sau $t$ giây là $h(t)=2+24{,}5t-4{,}9t^2$ (m). Tìm độ cao lớn nhất mà quả bóng đạt được.`,
   giai: [
    R`Vận tốc $h'(t)=24{,}5-9{,}8t$; $h'(t)=0\Leftrightarrow t=\dfrac{24{,}5}{9{,}8}=2{,}5$ (s).`,
    R`$h'>0$ khi $t<2{,}5$ (bóng đi lên), $h'<0$ khi $t>2{,}5$ (bóng rơi xuống), nên $h$ lớn nhất tại $t=2{,}5$.`,
    R`$h(2{,}5)=2+24{,}5\cdot2{,}5-4{,}9\cdot2{,}5^2=2+61{,}25-30{,}625=32{,}625$.`,
    R`**Kết luận.** Độ cao lớn nhất là $32{,}625$ m, đạt sau $2{,}5$ giây.`
   ] }
 ] },

"C1-B5-D02": {
 pp: [
  R`$C(x)$: tổng chi phí để sản xuất $x$ sản phẩm. **Chi phí biên** $C'(x)$: chi phí xấp xỉ để làm thêm sản phẩm thứ $x+1$.`,
  R`**Chi phí trung bình** $\overline{C}(x)=\dfrac{C(x)}{x}$. **Doanh thu** $R(x)=x\cdot p(x)$ với $p(x)$ là giá bán. **Lợi nhuận** $P(x)=R(x)-C(x)$.`,
  R`Bài toán "lợi nhuận lớn nhất", "chi phí trung bình nhỏ nhất": lập hàm, đạo hàm, lập bảng biến thiên trên miền $x>0$ (hoặc miền đề cho).`
 ],
 luuY: [
  R`Quên rằng $x$ là số sản phẩm nên phải dương (và có khi phải nguyên).`
 ],
 vd: [
 { muc: "NB", de: R`Chi phí sản xuất $x$ sản phẩm là $C(x)=0{,}01x^2+5x+400$ (nghìn đồng). Tính chi phí biên khi $x=100$ và nêu ý nghĩa.`,
   giai: [
    R`$C'(x)=0{,}02x+5$, nên $C'(100)=2+5=7$.`,
    R`**Ý nghĩa.** Khi đã sản xuất $100$ sản phẩm, làm thêm sản phẩm thứ $101$ tốn khoảng $7$ nghìn đồng.`
   ] },
 { muc: "TH", de: R`Với hàm chi phí ở ví dụ 1, cần sản xuất bao nhiêu sản phẩm để chi phí trung bình cho mỗi sản phẩm nhỏ nhất?`,
   giai: [
    R`$\overline{C}(x)=\dfrac{C(x)}{x}=0{,}01x+5+\dfrac{400}{x}$ với $x>0$.`,
    R`$\overline{C}'(x)=0{,}01-\dfrac{400}{x^2}=0\Leftrightarrow x^2=40\,000\Leftrightarrow x=200$ (vì $x>0$).`,
    R`$\overline{C}'<0$ khi $0<x<200$, $\overline{C}'>0$ khi $x>200$, nên $\overline{C}$ nhỏ nhất tại $x=200$.`,
    R`$\overline{C}(200)=2+5+2=9$.`,
    R`**Kết luận.** Sản xuất $200$ sản phẩm, chi phí trung bình nhỏ nhất là $9$ nghìn đồng/sản phẩm.`
   ] },
 { muc: "VD", de: R`Một cửa hàng bán $x$ sản phẩm với giá $p(x)=50-0{,}1x$ (nghìn đồng/sản phẩm), chi phí $C(x)=10x+500$ (nghìn đồng), $0<x<500$. Tìm $x$ để lợi nhuận lớn nhất.`,
   giai: [
    R`Doanh thu $R(x)=x(50-0{,}1x)=50x-0{,}1x^2$.`,
    R`Lợi nhuận $P(x)=R(x)-C(x)=50x-0{,}1x^2-10x-500=-0{,}1x^2+40x-500$.`,
    R`$P'(x)=-0{,}2x+40=0\Leftrightarrow x=200$; $P'>0$ khi $x<200$, $P'<0$ khi $x>200$.`,
    R`$P(200)=-4000+8000-500=3500$.`,
    R`**Kết luận.** Bán $200$ sản phẩm thì lợi nhuận lớn nhất, bằng $3\,500$ nghìn đồng (tức $3{,}5$ triệu đồng).`
   ] }
 ] },

"C1-B5-D03": {
 pp: [
  R`Đại lượng $Q(t)$ thay đổi theo thời gian (nồng độ thuốc, số lượng vi khuẩn, nồng độ chất phản ứng…): **tốc độ thay đổi** tại thời điểm $t$ là $Q'(t)$.`,
  R`"$Q$ lớn nhất": giải $Q'(t)=0$. "Tốc độ tăng lớn nhất": tìm GTLN của $Q'(t)$, tức giải $Q''(t)=0$.`
 ],
 luuY: [
  R`Nhầm "số lượng lớn nhất" ($Q$ max) với "tốc độ tăng lớn nhất" ($Q'$ max).`
 ],
 vd: [
 { muc: "TH", de: R`Nồng độ một loại thuốc trong máu sau khi uống $t$ giờ là $C(t)=\dfrac{5t}{t^2+4}$ (mg/L), $t\ge0$. Sau bao lâu nồng độ thuốc cao nhất? Tính nồng độ đó.`,
   giai: [
    R`$C'(t)=\dfrac{5(t^2+4)-5t\cdot2t}{(t^2+4)^2}=\dfrac{5(4-t^2)}{(t^2+4)^2}$.`,
    R`Với $t\ge0$: $C'(t)=0\Leftrightarrow t=2$; $C'>0$ khi $0\le t<2$, $C'<0$ khi $t>2$.`,
    R`$C(2)=\dfrac{10}{8}=1{,}25$.`,
    R`**Kết luận.** Sau $2$ giờ nồng độ cao nhất, bằng $1{,}25$ mg/L.`
   ] },
 { muc: "TH", de: R`Số lượng vi khuẩn sau $t$ giờ là $N(t)=1000+30t^2-t^3$ ($0\le t\le30$). Khi nào tốc độ tăng của số vi khuẩn lớn nhất? Tốc độ đó bằng bao nhiêu?`,
   giai: [
    R`Tốc độ tăng: $N'(t)=60t-3t^2$.`,
    R`Tìm GTLN của $N'(t)$ trên $[0;30]$: $N''(t)=60-6t=0\Leftrightarrow t=10$.`,
    R`$N'(0)=0$, $N'(10)=600-300=300$, $N'(30)=1800-2700=-900$.`,
    R`**Kết luận.** Tốc độ tăng lớn nhất là $300$ con/giờ, tại thời điểm $t=10$ giờ.`
   ] },
 { muc: "TH", de: R`Trong một phản ứng hoá học, nồng độ chất tạo thành sau $t$ giây là $x(t)=\dfrac{t}{t+1}$ (mol/L). Tính tốc độ phản ứng tại thời điểm $t=1$ giây. Tốc độ phản ứng tăng hay giảm theo thời gian?`,
   giai: [
    R`Tốc độ phản ứng: $x'(t)=\dfrac{1\cdot(t+1)-t\cdot1}{(t+1)^2}=\dfrac{1}{(t+1)^2}$.`,
    R`$x'(1)=\dfrac14=0{,}25$ (mol/(L·s)).`,
    R`$x''(t)=-\dfrac{2}{(t+1)^3}<0$ với $t\ge0$ nên tốc độ phản ứng giảm dần theo thời gian.`
   ] }
 ] },

"C1-B5-D04": {
 pp: [
  R`Vẽ hình, đặt ẩn $x$ cho đại lượng thay đổi và ghi miền giá trị của $x$.`,
  R`Lập hàm của đại lượng cần tối ưu (độ dài dây, diện tích, cường độ dòng điện $i=q'(t)$…), rồi tìm GTLN / GTNN bằng đạo hàm.`
 ],
 luuY: [
  R`Bình phương hai vế khi giải $f'(x)=0$ chứa căn mà không kiểm tra lại điều kiện cùng dấu.`
 ],
 vd: [
 { muc: "NB", de: R`Điện lượng truyền qua tiết diện dây dẫn sau $t$ giây là $q(t)=t^3-3t^2+4$ (C). Tính cường độ dòng điện tại thời điểm $t=3$ giây.`,
   giai: [
    R`Cường độ dòng điện $i(t)=q'(t)=3t^2-6t$.`,
    R`$i(3)=27-18=9$ (A).`
   ] },
 { muc: "VD", de: R`Hai cột điện $AA'$ và $BB'$ cao $3$ m và $5$ m, chân cột $A$, $B$ cách nhau $10$ m. Cần chọn điểm $M$ trên đoạn $AB$ để kéo dây từ đỉnh $A'$ xuống $M$ rồi lên đỉnh $B'$ sao cho tổng độ dài dây ngắn nhất.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.45]
\draw[thick] (0,0)--(10,0);
\draw[thick] (0,0)--(0,3) node[above]{$A'$};
\draw[thick] (10,0)--(10,5) node[above]{$B'$};
\draw[red,thick] (0,3)--(3.75,0)--(10,5);
\node[below] at (0,0){$A$};
\node[below] at (10,0){$B$};
\node[below] at (3.75,0){$M$};
\node[below] at (1.9,0){$x$};
\node[left] at (0,1.5){$3$};
\node[right] at (10,2.5){$5$};
\end{tikzpicture}`,
   giai: [
    R`Đặt $AM=x$ (m), $0\le x\le10$. Khi đó $MB=10-x$.`,
    R`Tổng độ dài dây $L(x)=A'M+MB'=\sqrt{x^2+9}+\sqrt{(10-x)^2+25}$.`,
    R`$L'(x)=\dfrac{x}{\sqrt{x^2+9}}-\dfrac{10-x}{\sqrt{(10-x)^2+25}}$.`,
    R`$L'(x)=0\Leftrightarrow\dfrac{x}{\sqrt{x^2+9}}=\dfrac{10-x}{\sqrt{(10-x)^2+25}}$. Hai vế không âm, bình phương: $x^2\left[(10-x)^2+25\right]=(10-x)^2(x^2+9)\Leftrightarrow25x^2=9(10-x)^2$.`,
    R`Vì $x\ge0$, $10-x\ge0$ nên $5x=3(10-x)\Leftrightarrow x=\dfrac{30}{8}=3{,}75$.`,
    R`So sánh: $L(0)=3+\sqrt{125}\approx14{,}18$; $L(10)=\sqrt{109}+5\approx15{,}44$; $L(3{,}75)=\sqrt{23{,}0625}+\sqrt{64{,}0625}=\sqrt{164}=2\sqrt{41}\approx12{,}81$.`,
    R`**Kết luận.** Chọn $M$ cách $A$ một khoảng $3{,}75$ m; tổng độ dài dây ngắn nhất là $2\sqrt{41}\approx12{,}81$ m.`
   ] },
 { muc: "VD", de: R`Một hình chữ nhật có một cạnh nằm trên đường kính, hai đỉnh còn lại nằm trên nửa đường tròn bán kính $2$. Tìm diện tích lớn nhất của hình chữ nhật.`,
   giai: [
    R`Đặt hệ trục với tâm $O$ là trung điểm cạnh nằm trên đường kính. Gọi hai đỉnh trên nửa đường tròn là $(x;\sqrt{4-x^2})$ và $(-x;\sqrt{4-x^2})$ với $0<x<2$.`,
    R`Hai cạnh dài $2x$ và $\sqrt{4-x^2}$, diện tích $S(x)=2x\sqrt{4-x^2}$.`,
    R`$S'(x)=2\sqrt{4-x^2}+2x\cdot\dfrac{-x}{\sqrt{4-x^2}}=\dfrac{2(4-x^2)-2x^2}{\sqrt{4-x^2}}=\dfrac{8-4x^2}{\sqrt{4-x^2}}$.`,
    R`$S'(x)=0\Leftrightarrow x^2=2\Leftrightarrow x=\sqrt2$; $S'>0$ khi $0<x<\sqrt2$, $S'<0$ khi $\sqrt2<x<2$.`,
    R`$S(\sqrt2)=2\sqrt2\cdot\sqrt2=4$.`,
    R`**Kết luận.** Diện tích lớn nhất bằng $4$, khi hình chữ nhật có kích thước $2\sqrt2\times\sqrt2$.`
   ] }
 ] }
});
/* ---------- Chương II · Vectơ và hệ trục toạ độ trong không gian ---------- */
const HOP = R`\draw[thick] (0,0)--(3,0)--(4,1.2);
\draw[dashed] (4,1.2)--(1,1.2)--(0,0);
\draw[thick] (0,2.5)--(3,2.5)--(4,3.7)--(1,3.7)--cycle;
\draw[thick] (0,0)--(0,2.5);
\draw[thick] (3,0)--(3,2.5);
\draw[thick] (4,1.2)--(4,3.7);
\draw[dashed] (1,1.2)--(1,3.7);
\node[below left] at (0,0){$A$};
\node[below right] at (3,0){$B$};
\node[right] at (4,1.2){$C$};
\node[above left] at (1,1.2){$D$};
\node[left] at (0,2.5){$A'$};
\node[below right] at (3,2.5){$B'$};
\node[above right] at (4,3.7){$C'$};
\node[above left] at (1,3.7){$D'$};`;
Object.assign(D, {
"C2-B6-D01": {
 pp: [
  R`**Quy tắc ba điểm:** $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$; $\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}$. **Quy tắc hình bình hành:** $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`,
  R`**Quy tắc hình hộp:** với hình hộp $ABCD.A'B'C'D'$ ta có $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
  R`Trong hình hộp, các cạnh song song cùng hướng cho các vectơ bằng nhau (ví dụ $\overrightarrow{B'C'}=\overrightarrow{BC}=\overrightarrow{AD}$). Dùng điều này để đưa các vectơ về **chung gốc** rồi cộng.`,
  R`$I$ là trung điểm $AB$ thì $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$ với mọi $M$; $G$ là trọng tâm tam giác $ABC$ thì $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.`
 ],
 luuY: [
  R`Viết $\overrightarrow{AB}+\overrightarrow{CD}$ thành $\overrightarrow{AD}$ (sai): quy tắc ba điểm chỉ dùng khi điểm cuối của vectơ này trùng điểm đầu của vectơ kia.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.9,>=stealth]
` + HOP + R`
\draw[->,red,thick] (0,0)--(4,3.7);
\end{tikzpicture}`,
   giai: [
    R`$ABCD$ là hình bình hành nên $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.`,
    R`$ACC'A'$ là hình bình hành (vì $AA'$ và $CC'$ song song, bằng nhau) nên $\overrightarrow{AA'}=\overrightarrow{CC'}$.`,
    R`Do đó $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC}+\overrightarrow{CC'}=\overrightarrow{AC'}$ (quy tắc ba điểm).`
   ] },
 { muc: "TH", de: R`Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn $\vec u=\overrightarrow{AB}+\overrightarrow{B'C'}+\overrightarrow{D'D}$.`,
   giai: [
    R`$\overrightarrow{B'C'}=\overrightarrow{AD}$ (cùng hướng, cùng độ dài với cạnh $AD$).`,
    R`$\overrightarrow{D'D}=\overrightarrow{A'A}$.`,
    R`$\vec u=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{A'A}=\overrightarrow{AC}+\overrightarrow{A'A}=\overrightarrow{A'A}+\overrightarrow{AC}=\overrightarrow{A'C}$.`,
    R`**Kết luận.** $\vec u=\overrightarrow{A'C}$.`
   ] },
 { muc: "TH", de: R`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính độ dài vectơ $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$.`,
   giai: [
    R`Theo quy tắc hình hộp, $\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}$.`,
    R`$AC=a\sqrt2$ (đường chéo hình vuông). Tam giác $ACC'$ vuông tại $C$ nên $AC'=\sqrt{AC^2+CC'^2}=\sqrt{2a^2+a^2}=a\sqrt3$.`,
    R`**Kết luận.** Độ dài bằng $a\sqrt3$.`
   ] },
 { muc: "VD", de: R`Cho tứ diện $ABCD$; $M$, $N$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh $\overrightarrow{MN}=\dfrac12\left(\overrightarrow{AD}+\overrightarrow{BC}\right)$.`,
   giai: [
    R`Chèn điểm theo hai đường: $\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AD}+\overrightarrow{DN}$ và $\overrightarrow{MN}=\overrightarrow{MB}+\overrightarrow{BC}+\overrightarrow{CN}$.`,
    R`Cộng vế theo vế: $2\overrightarrow{MN}=\left(\overrightarrow{MA}+\overrightarrow{MB}\right)+\left(\overrightarrow{AD}+\overrightarrow{BC}\right)+\left(\overrightarrow{DN}+\overrightarrow{CN}\right)$.`,
    R`$M$ là trung điểm $AB$ nên $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$; $N$ là trung điểm $CD$ nên $\overrightarrow{DN}+\overrightarrow{CN}=\vec0$.`,
    R`Vậy $2\overrightarrow{MN}=\overrightarrow{AD}+\overrightarrow{BC}$, tức $\overrightarrow{MN}=\dfrac12\left(\overrightarrow{AD}+\overrightarrow{BC}\right)$.`
   ] }
 ] },

"C2-B6-D02": {
 pp: [
  R`Chọn ba vectơ **không đồng phẳng** làm "cơ sở" (thường là ba cạnh chung đỉnh, ví dụ $\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AD}$, $\vec c=\overrightarrow{AA'}$). Mọi vectơ đều viết được duy nhất dạng $m\vec a+n\vec b+p\vec c$.`,
  R`Để biểu diễn $\overrightarrow{AX}$: đi từ $A$ tới $X$ theo các cạnh (quy tắc ba điểm), thay mỗi đoạn bằng $\pm\vec a$, $\pm\vec b$, $\pm\vec c$ hoặc một phần của chúng.`,
  R`**Điểm chia:** $\overrightarrow{AM}=k\overrightarrow{AB}\Rightarrow\overrightarrow{OM}=(1-k)\overrightarrow{OA}+k\overrightarrow{OB}$. **Đồng phẳng:** $\vec a,\vec b,\vec c$ đồng phẳng khi $\vec c=m\vec a+n\vec b$ (với $\vec a,\vec b$ không cùng phương).`
 ],
 luuY: [
  R`Sai dấu khi đi ngược chiều cạnh: $\overrightarrow{BA}=-\vec a$, không phải $\vec a$.`
 ],
 vd: [
 { muc: "TH", de: R`Cho hình hộp $ABCD.A'B'C'D'$, đặt $\overrightarrow{AB}=\vec a$, $\overrightarrow{AD}=\vec b$, $\overrightarrow{AA'}=\vec c$. Gọi $M$ là trung điểm $CC'$. Biểu diễn các vectơ $\overrightarrow{AC'}$, $\overrightarrow{BD'}$, $\overrightarrow{AM}$ theo $\vec a$, $\vec b$, $\vec c$.`,
   giai: [
    R`$\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CC'}=\vec a+\vec b+\vec c$ (vì $\overrightarrow{BC}=\overrightarrow{AD}$, $\overrightarrow{CC'}=\overrightarrow{AA'}$).`,
    R`$\overrightarrow{BD'}=\overrightarrow{BA}+\overrightarrow{AD}+\overrightarrow{DD'}=-\vec a+\vec b+\vec c$.`,
    R`$\overrightarrow{AM}=\overrightarrow{AC}+\overrightarrow{CM}=(\vec a+\vec b)+\dfrac12\overrightarrow{CC'}=\vec a+\vec b+\dfrac12\vec c$.`
   ] },
 { muc: "TH", de: R`Cho tứ diện $OABC$ và $G$ là trọng tâm tam giác $ABC$. Chứng minh $\overrightarrow{OG}=\dfrac13\left(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}\right)$.`,
   giai: [
    R`$\overrightarrow{OA}=\overrightarrow{OG}+\overrightarrow{GA}$, $\overrightarrow{OB}=\overrightarrow{OG}+\overrightarrow{GB}$, $\overrightarrow{OC}=\overrightarrow{OG}+\overrightarrow{GC}$.`,
    R`Cộng lại: $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}=3\overrightarrow{OG}+\left(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}\right)=3\overrightarrow{OG}+\vec0$.`,
    R`Vậy $\overrightarrow{OG}=\dfrac13\left(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}\right)$.`
   ] },
 { muc: "VD", de: R`Cho tứ diện $ABCD$; $M$, $N$ lần lượt là trung điểm của $AB$, $CD$. Chứng minh ba vectơ $\overrightarrow{AD}$, $\overrightarrow{BC}$, $\overrightarrow{MN}$ đồng phẳng.`,
   giai: [
    R`Theo ví dụ 4 của dạng C2-B6-D01: $\overrightarrow{MN}=\dfrac12\overrightarrow{AD}+\dfrac12\overrightarrow{BC}$.`,
    R`$\overrightarrow{AD}$ và $\overrightarrow{BC}$ không cùng phương (vì $AD$, $BC$ là hai cạnh chéo nhau của tứ diện).`,
    R`$\overrightarrow{MN}$ biểu diễn được theo $\overrightarrow{AD}$, $\overrightarrow{BC}$ nên ba vectơ đồng phẳng.`
   ] }
 ] },

"C2-B6-D03": {
 pp: [
  R`$\vec a\cdot\vec b=|\vec a|\cdot|\vec b|\cdot\cos(\vec a,\vec b)$. Góc $(\vec a,\vec b)$ được đo khi hai vectơ **chung điểm đầu**, nằm trong $[0^\circ;180^\circ]$.`,
  R`Nếu hai vectơ chưa chung gốc: thay một vectơ bằng vectơ bằng nó (tịnh tiến) cho chung gốc rồi đọc góc trong tam giác.`,
  R`$\vec a\perp\vec b\Leftrightarrow\vec a\cdot\vec b=0$. Có thể tách vectơ theo quy tắc ba điểm rồi khai triển tích vô hướng.`
 ],
 luuY: [
  R`Đọc góc giữa $\overrightarrow{AC}$ và $\overrightarrow{CB'}$ bằng góc $\widehat{ACB'}$: sai, vì hai vectơ không chung điểm đầu (đúng là $180^\circ-\widehat{ACB'}$).`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính $\overrightarrow{AB}\cdot\overrightarrow{A'C'}$.`,
   giai: [
    R`$\overrightarrow{A'C'}=\overrightarrow{AC}$ nên $\overrightarrow{AB}\cdot\overrightarrow{A'C'}=\overrightarrow{AB}\cdot\overrightarrow{AC}$.`,
    R`$AB=a$, $AC=a\sqrt2$, $(\overrightarrow{AB},\overrightarrow{AC})=\widehat{BAC}=45^\circ$.`,
    R`$\overrightarrow{AB}\cdot\overrightarrow{AC}=a\cdot a\sqrt2\cdot\cos45^\circ=a\cdot a\sqrt2\cdot\dfrac{\sqrt2}{2}=a^2$.`
   ] },
 { muc: "TH", de: R`Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa hai vectơ $\overrightarrow{AC}$ và $\overrightarrow{DA'}$.`,
   giai: [
    R`Tịnh tiến: $\overrightarrow{DA'}=\overrightarrow{CB'}$ (vì $DCB'A'$ là hình bình hành).`,
    R`Tam giác $ACB'$ có ba cạnh là ba đường chéo mặt của hình lập phương nên là tam giác đều, $\widehat{ACB'}=60^\circ$.`,
    R`Hai vectơ $\overrightarrow{AC}$ và $\overrightarrow{CB'}$ nối tiếp nhau tại $C$, nên góc giữa chúng là $180^\circ-\widehat{ACB'}=120^\circ$.`,
    R`Kiểm tra bằng toạ độ ($A$ gốc, cạnh $1$): $\overrightarrow{AC}=(1;1;0)$, $\overrightarrow{DA'}=(0;-1;1)$, $\cos=\dfrac{-1}{\sqrt2\cdot\sqrt2}=-\dfrac12$.`,
    R`**Kết luận.** $(\overrightarrow{AC},\overrightarrow{DA'})=120^\circ$.`
   ] },
 { muc: "VD", de: R`Cho tứ diện đều $ABCD$ cạnh $a$. Chứng minh $AB\perp CD$.`,
   giai: [
    R`$\overrightarrow{AB}\cdot\overrightarrow{CD}=\overrightarrow{AB}\cdot\left(\overrightarrow{AD}-\overrightarrow{AC}\right)=\overrightarrow{AB}\cdot\overrightarrow{AD}-\overrightarrow{AB}\cdot\overrightarrow{AC}$.`,
    R`Các mặt là tam giác đều nên $\widehat{BAD}=\widehat{BAC}=60^\circ$: $\overrightarrow{AB}\cdot\overrightarrow{AD}=a^2\cos60^\circ=\dfrac{a^2}{2}$, $\overrightarrow{AB}\cdot\overrightarrow{AC}=\dfrac{a^2}{2}$.`,
    R`Vậy $\overrightarrow{AB}\cdot\overrightarrow{CD}=\dfrac{a^2}2-\dfrac{a^2}2=0$, nên $AB\perp CD$.`
   ] }
 ] },

"C2-B6-D04": {
 pp: [
  R`Nhiều lực cùng tác động vào một điểm: **hợp lực** $\vec F=\vec F_1+\vec F_2+\dots$. Hai lực tạo góc $\alpha$: $|\vec F|^2=F_1^2+F_2^2+2F_1F_2\cos\alpha$.`,
  R`Ba lực đôi một vuông góc: $|\vec F|=\sqrt{F_1^2+F_2^2+F_3^2}$ (giống đường chéo hình hộp chữ nhật).`,
  R`**Công** của lực $\vec F$ làm vật dời theo vectơ $\vec d$: $A=\vec F\cdot\vec d=|\vec F|\cdot|\vec d|\cdot\cos(\vec F,\vec d)$ (J).`
 ],
 luuY: [
  R`Cộng độ lớn các lực ($F_1+F_2$) thay vì cộng vectơ.`
 ],
 vd: [
 { muc: "NB", de: R`Một lực $\vec F$ có độ lớn $50$ N kéo một vật dịch chuyển $10$ m; góc giữa lực và hướng dịch chuyển là $60^\circ$. Tính công của lực.`,
   giai: [
    R`$A=|\vec F|\cdot|\vec d|\cdot\cos60^\circ=50\cdot10\cdot\dfrac12=250$ (J).`
   ] },
 { muc: "TH", de: R`Ba lực đôi một vuông góc, có độ lớn $3$ N, $4$ N, $12$ N cùng tác động vào một vật. Tính độ lớn hợp lực.`,
   giai: [
    R`Đặt ba lực dọc ba cạnh chung đỉnh của một hình hộp chữ nhật; hợp lực là đường chéo của hình hộp.`,
    R`$|\vec F|=\sqrt{3^2+4^2+12^2}=\sqrt{9+16+144}=\sqrt{169}=13$ (N).`
   ] },
 { muc: "TH", de: R`Hai lực $\vec F_1$, $\vec F_2$ có độ lớn $6$ N và $8$ N cùng tác động vào một điểm, góc giữa chúng là $60^\circ$. Tính độ lớn hợp lực.`,
   giai: [
    R`$|\vec F|^2=\left(\vec F_1+\vec F_2\right)^2=F_1^2+F_2^2+2\vec F_1\cdot\vec F_2=36+64+2\cdot6\cdot8\cdot\cos60^\circ=100+48=148$.`,
    R`$|\vec F|=\sqrt{148}=2\sqrt{37}\approx12{,}17$ (N).`
   ] }
 ] },

"C2-B7-D05": {
 pp: [
  R`$M(x;y;z)\Leftrightarrow\overrightarrow{OM}=x\vec i+y\vec j+z\vec k$; $\vec a=(a_1;a_2;a_3)\Leftrightarrow\vec a=a_1\vec i+a_2\vec j+a_3\vec k$. Thành phần vắng mặt thì bằng $0$.`,
  R`**Hình chiếu** của $M(x;y;z)$: lên $(Oxy)$ là $(x;y;0)$, lên $(Oyz)$ là $(0;y;z)$, lên $(Oxz)$ là $(x;0;z)$; lên trục $Ox$ là $(x;0;0)$, $Oy$: $(0;y;0)$, $Oz$: $(0;0;z)$.`,
  R`**Đối xứng** của $M$: qua $O$ là $(-x;-y;-z)$; qua mặt $(Oxy)$ là $(x;y;-z)$ (đổi dấu toạ độ **không** có trong tên mặt); qua trục $Ox$ là $(x;-y;-z)$ (giữ toạ độ của trục, đổi dấu hai toạ độ còn lại).`,
  R`$\overrightarrow{AB}=(x_B-x_A;\,y_B-y_A;\,z_B-z_A)$.`
 ],
 luuY: [
  R`Viết $\vec a=2\vec i-3\vec k$ thành $(2;-3)$ hoặc $(2;-3;0)$; đúng là $(2;0;-3)$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho điểm $M(2;-3;5)$. Tìm toạ độ hình chiếu của $M$ lên mặt phẳng $(Oxy)$, lên trục $Oz$; điểm đối xứng với $M$ qua mặt phẳng $(Oxz)$ và qua trục $Oy$.`,
   giai: [
    R`Hình chiếu lên $(Oxy)$: giữ $x$, $y$, cho $z=0$: $(2;-3;0)$.`,
    R`Hình chiếu lên $Oz$: $(0;0;5)$.`,
    R`Đối xứng qua $(Oxz)$: đổi dấu $y$: $(2;3;5)$.`,
    R`Đối xứng qua trục $Oy$: giữ $y$, đổi dấu $x$ và $z$: $(-2;-3;-5)$.`
   ] },
 { muc: "TH", de: R`Cho $\vec a=2\vec i-3\vec k$ và $\overrightarrow{OM}=\vec j-4\vec i$. Tìm toạ độ của $\vec a$ và điểm $M$.`,
   giai: [
    R`$\vec a=2\vec i+0\vec j-3\vec k$ nên $\vec a=(2;0;-3)$.`,
    R`$\overrightarrow{OM}=-4\vec i+1\vec j+0\vec k$ nên $M(-4;1;0)$.`
   ] },
 { muc: "VD", de: R`Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $2$. Chọn hệ trục $Oxyz$ có gốc $A$, tia $Ox$ chứa $B$, tia $Oy$ chứa $D$, tia $Oz$ chứa $A'$. Tìm toạ độ các đỉnh $C$, $C'$ và trung điểm $M$ của $B'C'$.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.9,>=stealth]
` + HOP + R`
\draw[->] (3,0)--(3.8,0) node[below]{$x$};
\draw[->] (1,1.2)--(1.6,1.92) node[above]{$y$};
\draw[->] (0,2.5)--(0,3.2) node[left]{$z$};
\fill (3.5,3.1) circle (2pt) node[above]{$M$};
\end{tikzpicture}`,
   giai: [
    R`$A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $A'(0;0;2)$.`,
    R`$\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}=(2;2;0)$ nên $C(2;2;0)$.`,
    R`$\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=(2;2;2)$ nên $C'(2;2;2)$. Tương tự $B'(2;0;2)$.`,
    R`$M$ là trung điểm $B'C'$: $M\left(\dfrac{2+2}2;\dfrac{0+2}2;\dfrac{2+2}2\right)=(2;1;2)$.`
   ] }
 ] },

"C2-B7-D06": {
 pp: [
  R`Trung điểm $I$ của $AB$: $I\left(\dfrac{x_A+x_B}2;\dfrac{y_A+y_B}2;\dfrac{z_A+z_B}2\right)$.`,
  R`Trọng tâm $G$ của tam giác $ABC$: $G\left(\dfrac{x_A+x_B+x_C}3;\dfrac{y_A+y_B+y_C}3;\dfrac{z_A+z_B+z_C}3\right)$.`,
  R`**Điểm chia:** từ hệ thức vectơ (ví dụ $\overrightarrow{MA}=k\overrightarrow{MB}$) viết từng toạ độ $x_A-x_M=k(x_B-x_M)$… rồi giải. Giao điểm của đường thẳng $AB$ với mặt toạ độ: viết $M=A+t\overrightarrow{AB}$ rồi cho toạ độ tương ứng bằng $0$.`
 ],
 luuY: [
  R`Quên chia cho $2$ (hoặc $3$), hoặc cộng nhầm toạ độ âm.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $A(1;2;-3)$, $B(3;-4;1)$. Tìm toạ độ trung điểm $I$ của đoạn $AB$.`,
   giai: [
    R`$I\left(\dfrac{1+3}2;\dfrac{2+(-4)}2;\dfrac{-3+1}2\right)=(2;-1;-1)$.`
   ] },
 { muc: "TH", de: R`Cho $A(1;0;2)$, $B(2;-1;3)$, $C(0;4;1)$. Tìm toạ độ trọng tâm $G$ của tam giác $ABC$.`,
   giai: [
    R`$x_G=\dfrac{1+2+0}3=1$; $y_G=\dfrac{0-1+4}3=1$; $z_G=\dfrac{2+3+1}3=2$.`,
    R`**Kết luận.** $G(1;1;2)$.`
   ] },
 { muc: "TH", de: R`Cho $A(1;2;-3)$, $B(3;-4;1)$. Tìm điểm $M$ thoả mãn $\overrightarrow{MA}=-2\overrightarrow{MB}$.`,
   giai: [
    R`$\overrightarrow{MA}=-2\overrightarrow{MB}\Leftrightarrow A-M=-2(B-M)\Leftrightarrow3M=A+2B$ (viết cho từng toạ độ).`,
    R`$x_M=\dfrac{1+2\cdot3}3=\dfrac73$; $y_M=\dfrac{2+2\cdot(-4)}3=-2$; $z_M=\dfrac{-3+2\cdot1}3=-\dfrac13$.`,
    R`**Kết luận.** $M\left(\dfrac73;-2;-\dfrac13\right)$ ($M$ nằm trên đoạn $AB$, $MA=2MB$).`
   ] },
 { muc: "VD", de: R`Cho $A(1;2;-3)$, $B(3;-4;1)$. Tìm giao điểm $M$ của đường thẳng $AB$ với mặt phẳng $(Oxy)$.`,
   giai: [
    R`$\overrightarrow{AB}=(2;-6;4)$. Điểm $M$ thuộc đường thẳng $AB$ có dạng $M=A+t\overrightarrow{AB}=(1+2t;\,2-6t;\,-3+4t)$.`,
    R`$M\in(Oxy)\Leftrightarrow z_M=0\Leftrightarrow-3+4t=0\Leftrightarrow t=\dfrac34$.`,
    R`$M\left(1+\dfrac32;\,2-\dfrac92;\,0\right)=\left(\dfrac52;-\dfrac52;0\right)$.`
   ] }
 ] },

"C2-B8-D07": {
 pp: [
  R`$\vec a\pm\vec b=(a_1\pm b_1;a_2\pm b_2;a_3\pm b_3)$; $k\vec a=(ka_1;ka_2;ka_3)$.`,
  R`$|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}$; $AB=\left|\overrightarrow{AB}\right|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.`
 ],
 luuY: [
  R`Bình phương số âm: $(-4)^2=16$, không phải $-16$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $\vec a=(1;-2;3)$, $\vec b=(2;0;-1)$. Tính $\vec a+\vec b$, $2\vec a-3\vec b$ và $|\vec a|$.`,
   giai: [
    R`$\vec a+\vec b=(1+2;-2+0;3-1)=(3;-2;2)$.`,
    R`$2\vec a=(2;-4;6)$, $3\vec b=(6;0;-3)$, nên $2\vec a-3\vec b=(2-6;-4-0;6+3)=(-4;-4;9)$.`,
    R`$|\vec a|=\sqrt{1+4+9}=\sqrt{14}$.`
   ] },
 { muc: "TH", de: R`Cho $A(1;2;3)$, $B(3;0;2)$. Tính độ dài đoạn $AB$.`,
   giai: [
    R`$\overrightarrow{AB}=(2;-2;-1)$.`,
    R`$AB=\sqrt{2^2+(-2)^2+(-1)^2}=\sqrt{9}=3$.`
   ] },
 { muc: "TH", de: R`Cho tam giác $ABC$ với $A(1;2;3)$, $B(3;0;2)$, $C(1;0;1)$. Tính chu vi tam giác.`,
   giai: [
    R`$AB=3$ (ví dụ 2).`,
    R`$\overrightarrow{AC}=(0;-2;-2)$, $AC=\sqrt{0+4+4}=2\sqrt2$.`,
    R`$\overrightarrow{BC}=(-2;0;-1)$, $BC=\sqrt{4+0+1}=\sqrt5$.`,
    R`**Kết luận.** Chu vi bằng $3+2\sqrt2+\sqrt5$.`
   ] }
 ] },

"C2-B8-D08": {
 pp: [
  R`$\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3$.`,
  R`$\cos(\vec a,\vec b)=\dfrac{\vec a\cdot\vec b}{|\vec a|\cdot|\vec b|}$ (với $\vec a,\vec b\ne\vec0$). Góc $\widehat{BAC}$ là góc giữa $\overrightarrow{AB}$ và $\overrightarrow{AC}$.`,
  R`$\vec a\perp\vec b\Leftrightarrow a_1b_1+a_2b_2+a_3b_3=0$.`
 ],
 luuY: [
  R`Tính góc $\widehat{BAC}$ bằng $\overrightarrow{BA}$ và $\overrightarrow{AC}$ (sai gốc), góc nhận được là góc bù.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $\vec a=(1;-2;3)$, $\vec b=(2;0;-1)$. Tính $\vec a\cdot\vec b$.`,
   giai: [
    R`$\vec a\cdot\vec b=1\cdot2+(-2)\cdot0+3\cdot(-1)=2+0-3=-1$.`
   ] },
 { muc: "TH", de: R`Tính góc giữa hai vectơ $\vec a=(1;1;0)$ và $\vec b=(1;0;1)$.`,
   giai: [
    R`$\vec a\cdot\vec b=1+0+0=1$; $|\vec a|=\sqrt2$, $|\vec b|=\sqrt2$.`,
    R`$\cos(\vec a,\vec b)=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12$ nên $(\vec a,\vec b)=60^\circ$.`
   ] },
 { muc: "TH", de: R`Tìm $m$ để $\vec a=(m;2;-1)$ vuông góc với $\vec b=(3;m;4)$.`,
   giai: [
    R`$\vec a\perp\vec b\Leftrightarrow3m+2m-4=0\Leftrightarrow5m=4\Leftrightarrow m=\dfrac45$.`
   ] },
 { muc: "VD", de: R`Cho $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$. Tính góc $\widehat{BAC}$ và cho biết tam giác $ABC$ là tam giác gì.`,
   giai: [
    R`$\overrightarrow{AB}=(-1;1;0)$, $\overrightarrow{AC}=(-1;0;1)$.`,
    R`$\cos\widehat{BAC}=\dfrac{(-1)(-1)+1\cdot0+0\cdot1}{\sqrt2\cdot\sqrt2}=\dfrac12$ nên $\widehat{BAC}=60^\circ$.`,
    R`$AB=AC=\sqrt2$ và $BC=\left|(0;-1;1)\right|=\sqrt2$.`,
    R`**Kết luận.** $\widehat{BAC}=60^\circ$; tam giác $ABC$ đều cạnh $\sqrt2$.`
   ] }
 ] },

"C2-B8-D09": {
 pp: [
  R`$\vec a$, $\vec b$ ($\vec b\ne\vec0$) **cùng phương** $\Leftrightarrow$ có số $k$ để $\vec a=k\vec b$, tức các toạ độ tỉ lệ (khi mẫu khác $0$): $\dfrac{a_1}{b_1}=\dfrac{a_2}{b_2}=\dfrac{a_3}{b_3}$.`,
  R`$A$, $B$, $C$ **thẳng hàng** $\Leftrightarrow\overrightarrow{AB}$, $\overrightarrow{AC}$ cùng phương.`,
  R`$ABCD$ là **hình bình hành** $\Leftrightarrow\overrightarrow{AB}=\overrightarrow{DC}$ (và $A,B,C$ không thẳng hàng), suy ra $D=A+C-B$ theo từng toạ độ.`
 ],
 luuY: [
  R`Viết $\overrightarrow{AB}=\overrightarrow{CD}$ cho hình bình hành $ABCD$ (sai thứ tự đỉnh).`
 ],
 vd: [
 { muc: "TH", de: R`Cho $A(1;2;-1)$, $B(2;3;1)$, $C(4;5;5)$. Ba điểm $A$, $B$, $C$ có thẳng hàng không?`,
   giai: [
    R`$\overrightarrow{AB}=(1;1;2)$, $\overrightarrow{AC}=(3;3;6)$.`,
    R`$\overrightarrow{AC}=3\overrightarrow{AB}$ nên hai vectơ cùng phương.`,
    R`**Kết luận.** $A$, $B$, $C$ thẳng hàng.`
   ] },
 { muc: "TH", de: R`Tìm $m$, $n$ để hai vectơ $\vec a=(2;m;3)$ và $\vec b=(4;-2;n)$ cùng phương.`,
   giai: [
    R`Cần $\vec b=k\vec a$: từ hoành độ $4=2k\Rightarrow k=2$.`,
    R`Tung độ: $-2=2m\Rightarrow m=-1$. Cao độ: $n=2\cdot3=6$.`,
    R`**Kết luận.** $m=-1$, $n=6$.`
   ] },
 { muc: "VD", de: R`Cho $A(1;0;2)$, $B(2;-1;3)$, $C(0;4;1)$. Tìm toạ độ điểm $D$ để $ABCD$ là hình bình hành.`,
   giai: [
    R`$\overrightarrow{AB}=(1;-1;1)$, $\overrightarrow{AC}=(-1;4;-1)$ không cùng phương ($\frac{-1}{1}\ne\frac{4}{-1}$) nên $A$, $B$, $C$ không thẳng hàng.`,
    R`$ABCD$ là hình bình hành $\Leftrightarrow\overrightarrow{AB}=\overrightarrow{DC}\Leftrightarrow(1;-1;1)=(0-x_D;4-y_D;1-z_D)$.`,
    R`$\Leftrightarrow x_D=-1$, $y_D=5$, $z_D=0$.`,
    R`**Kết luận.** $D(-1;5;0)$.`
   ] }
 ] },

"C2-B8-D10": {
 pp: [
  R`**Toạ độ hoá:** chọn gốc tại đỉnh có ba cạnh đôi một vuông góc (đỉnh hình hộp chữ nhật, chân đường cao hình chóp…), đặt ba trục theo ba cạnh đó, viết toạ độ các đỉnh.`,
  R`Chuyển yêu cầu hình học sang toạ độ: độ dài, góc (tích vô hướng), vuông góc, trung điểm, trọng tâm.`,
  R`**Điểm cách đều** $A$, $B$: $MA^2=MB^2$ (bình phương để bỏ căn).`
 ],
 luuY: [
  R`Đặt hệ trục ở đỉnh mà ba cạnh không đôi một vuông góc nên toạ độ sai.`
 ],
 vd: [
 { muc: "TH", de: R`Tìm điểm $M$ trên trục $Ox$ cách đều hai điểm $A(1;2;3)$ và $B(3;0;2)$.`,
   giai: [
    R`$M\in Ox$ nên $M(x;0;0)$.`,
    R`$MA^2=(x-1)^2+4+9$, $MB^2=(x-3)^2+0+4$.`,
    R`$MA^2=MB^2\Leftrightarrow x^2-2x+14=x^2-6x+13\Leftrightarrow4x=-1\Leftrightarrow x=-\dfrac14$.`,
    R`**Kết luận.** $M\left(-\dfrac14;0;0\right)$.`
   ] },
 { muc: "TH", de: R`Cho $A(1;0;1)$, $B(2;1;3)$, $C(3;-1;2)$. Chứng minh tam giác $ABC$ đều và tính diện tích.`,
   giai: [
    R`$\overrightarrow{AB}=(1;1;2)$, $AB=\sqrt6$; $\overrightarrow{AC}=(2;-1;1)$, $AC=\sqrt6$; $\overrightarrow{BC}=(1;-2;-1)$, $BC=\sqrt6$.`,
    R`Ba cạnh bằng nhau nên tam giác $ABC$ đều cạnh $\sqrt6$.`,
    R`$S=\dfrac{\sqrt3}{4}\cdot\left(\sqrt6\right)^2=\dfrac{6\sqrt3}{4}=\dfrac{3\sqrt3}2$.`
   ] },
 { muc: "VD", de: R`Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $2$, $SA$ vuông góc với đáy và $SA=2$. Tính góc giữa hai đường thẳng $SB$ và $AC$.`,
   hinhDe: R`\begin{tikzpicture}[scale=0.9]
\draw[thick] (0,0)--(3,0)--(4,1.2);
\draw[dashed] (4,1.2)--(1,1.2)--(0,0);
\draw[dashed] (0,0)--(4,1.2);
\draw[thick] (0,2.8)--(0,0);
\draw[thick] (0,2.8)--(3,0);
\draw[thick] (0,2.8)--(4,1.2);
\draw[dashed] (0,2.8)--(1,1.2);
\node[left] at (0,2.8){$S$};
\node[below left] at (0,0){$A$};
\node[below right] at (3,0){$B$};
\node[right] at (4,1.2){$C$};
\node[above right] at (1,1.2){$D$};
\end{tikzpicture}`,
   giai: [
    R`Ba cạnh $AB$, $AD$, $AS$ đôi một vuông góc. Chọn $A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $S(0;0;2)$, khi đó $C(2;2;0)$.`,
    R`$\overrightarrow{SB}=(2;0;-2)$, $\overrightarrow{AC}=(2;2;0)$.`,
    R`$\cos\left(\overrightarrow{SB},\overrightarrow{AC}\right)=\dfrac{4+0+0}{2\sqrt2\cdot2\sqrt2}=\dfrac48=\dfrac12$.`,
    R`Góc giữa hai đường thẳng là góc không tù, có $\cos=\left|\dfrac12\right|=\dfrac12$.`,
    R`**Kết luận.** Góc giữa $SB$ và $AC$ bằng $60^\circ$.`
   ] }
 ] },

"C2-B8-D11": {
 pp: [
  R`Đặt hệ trục theo đề (thường gốc là trạm, sân bay, chân cột; đơn vị km hoặc m), viết toạ độ các vị trí.`,
  R`Khoảng cách giữa hai vị trí là độ dài vectơ nối chúng. Chuyển động thẳng đều: sau $k$ lần thời gian, độ dời gấp $k$ lần.`,
  R`Vị trí nằm trên đoạn $AB$ đã đi được phần $t$ quãng đường: $M=A+t\overrightarrow{AB}$.`
 ],
 luuY: [
  R`Trộn đơn vị (m với km) khi tính khoảng cách.`
 ],
 vd: [
 { muc: "TH", de: R`Một máy bay cất cánh từ sân bay $O$, bay thẳng với vận tốc không đổi. Sau $1$ phút máy bay ở vị trí $A(2;3;0{,}5)$ (đơn vị km). Tính khoảng cách $OA$ và vị trí máy bay sau $2$ phút.`,
   giai: [
    R`$OA=\sqrt{2^2+3^2+0{,}5^2}=\sqrt{13{,}25}\approx3{,}64$ km.`,
    R`Bay thẳng đều nên sau $2$ phút độ dời gấp đôi: $\overrightarrow{OB}=2\overrightarrow{OA}=(4;6;1)$.`,
    R`**Kết luận.** Sau $2$ phút máy bay ở vị trí $B(4;6;1)$.`
   ] },
 { muc: "TH", de: R`Một tuyến cáp treo thẳng đi từ ga $A(0;0;0)$ đến ga $B(600;800;300)$ (đơn vị m). Tính chiều dài tuyến cáp và vị trí cabin khi đi được $\dfrac14$ quãng đường.`,
   giai: [
    R`$AB=\sqrt{600^2+800^2+300^2}=\sqrt{1\,090\,000}\approx1044$ m.`,
    R`Vị trí cabin: $M=A+\dfrac14\overrightarrow{AB}=\left(150;200;75\right)$.`
   ] },
 { muc: "TH", de: R`Một trạm phát sóng đặt tại gốc $O(0;0;0)$ phủ sóng trong bán kính $5$ km. Một khách du lịch ở vị trí $M(3;4;1)$ (đơn vị km) có nhận được sóng không?`,
   giai: [
    R`$OM=\sqrt{3^2+4^2+1^2}=\sqrt{26}\approx5{,}10$ km.`,
    R`$OM>5$ nên $M$ nằm ngoài vùng phủ sóng.`,
    R`**Kết luận.** Khách du lịch không nhận được sóng.`
   ] }
 ] }
});
/* ---------- Chương III · Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm ---------- */
const BANG1 = R`$$\begin{array}{|c|c|c|c|c|c|}\hline \text{Thời gian (phút)}&[0;20)&[20;40)&[40;60)&[60;80)&[80;100)\\\hline \text{Số học sinh}&5&9&12&10&4\\\hline\end{array}$$`;
const BANG2 = R`$$\begin{array}{|c|c|c|c|c|c|}\hline \text{Cân nặng (kg)}&[40;45)&[45;50)&[50;55)&[55;60)&[60;65)\\\hline \text{Số học sinh}&6&14&18&8&4\\\hline\end{array}$$`;
const BANGB = R`$$\begin{array}{|c|c|c|c|c|c|}\hline \text{Thời gian (phút)}&[0;20)&[20;40)&[40;60)&[60;80)&[80;100)\\\hline \text{Lớp A}&5&9&12&10&4\\\hline \text{Lớp B}&2&10&18&8&2\\\hline\end{array}$$`;
Object.assign(D, {
"C3-B9-D01": {
 pp: [
  R`Mẫu ghép nhóm có các nhóm $[a_1;a_2),[a_2;a_3),\dots,[a_k;a_{k+1})$. **Khoảng biến thiên** $R=a_{k+1}-a_1$: lấy đầu mút phải của nhóm cuối trừ đầu mút trái của nhóm đầu (chỉ tính các nhóm có tần số khác $0$).`,
  R`Đọc bảng hoặc biểu đồ: cột cao bao nhiêu thì tần số bấy nhiêu; tỉ lệ phần trăm của một nhóm bằng tần số chia cỡ mẫu $n$.`
 ],
 luuY: [
  R`Lấy giá trị đại diện (giá trị giữa) của nhóm đầu, nhóm cuối để trừ: sai, phải dùng đầu mút.`
 ],
 vd: [
 { muc: "NB", de: R`Thời gian tập thể dục mỗi ngày của $40$ học sinh lớp A được ghi lại như sau:` + BANG1 + R`Tính khoảng biến thiên của mẫu số liệu.`,
   giai: [
    R`Nhóm đầu là $[0;20)$, có đầu mút trái $a_1=0$. Nhóm cuối là $[80;100)$, có đầu mút phải $a_6=100$.`,
    R`$R=100-0=100$ (phút).`
   ] },
 { muc: "TH", de: R`Điểm kiểm tra (thang $50$) của một nhóm học sinh: $[10;15)$: $0$ em; $[15;20)$: $3$ em; $[20;25)$: $7$ em; $[25;30)$: $8$ em; $[30;35)$: $4$ em; $[35;40)$: $2$ em; $[40;45)$: $0$ em. Tính khoảng biến thiên.`,
   giai: [
    R`Hai nhóm $[10;15)$ và $[40;45)$ có tần số $0$ nên bỏ đi.`,
    R`Nhóm đầu có tần số khác $0$ là $[15;20)$, nhóm cuối là $[35;40)$.`,
    R`$R=40-15=25$ (điểm).`
   ] },
 { muc: "TH", de: R`Với bảng số liệu ở ví dụ 1, có bao nhiêu phần trăm học sinh tập thể dục từ $60$ phút trở lên mỗi ngày?`,
   giai: [
    R`Số học sinh tập từ $60$ phút trở lên thuộc hai nhóm $[60;80)$ và $[80;100)$: $10+4=14$ em.`,
    R`Tỉ lệ $\dfrac{14}{40}=0{,}35=35\%$.`
   ] }
 ] },

"C3-B9-D02": {
 pp: [
  R`Tính cỡ mẫu $n$ và lập **tần số tích luỹ** $C_1, C_2,\dots$ (cộng dồn từ nhóm đầu).`,
  R`Tứ phân vị thứ $k$ ($k=1,2,3$) nằm trong nhóm đầu tiên $[u_m;u_{m+1})$ có tần số tích luỹ $\ge\dfrac{kn}{4}$. Gọi $n_m$ là tần số nhóm đó, $C$ là tần số tích luỹ của nhóm **ngay trước** nó.`,
  R`$$Q_k=u_m+\dfrac{\frac{kn}{4}-C}{n_m}\cdot\left(u_{m+1}-u_m\right).$$ Trung vị chính là $Q_2$.`
 ],
 luuY: [
  R`Dùng nhầm tần số tích luỹ của chính nhóm chứa $Q_k$ thay cho nhóm đứng trước.`
 ],
 vd: [
 { muc: "TH", de: R`Với mẫu số liệu thời gian tập thể dục của $40$ học sinh lớp A:` + BANG1 + R`Tìm trung vị $Q_2$.`,
   giai: [
    R`$n=40$. Tần số tích luỹ: $5;\ 14;\ 26;\ 36;\ 40$.`,
    R`$\dfrac{2n}{4}=20$. Nhóm đầu tiên có tần số tích luỹ $\ge20$ là $[40;60)$ (tích luỹ $26$). Vậy $u_m=40$, $n_m=12$, $C=14$, độ dài nhóm $20$.`,
    R`$Q_2=40+\dfrac{20-14}{12}\cdot20=40+10=50$ (phút).`
   ] },
 { muc: "TH", de: R`Với mẫu số liệu ở ví dụ 1, tìm $Q_1$ và $Q_3$.`,
   giai: [
    R`$\dfrac n4=10$: nhóm đầu tiên có tích luỹ $\ge10$ là $[20;40)$ (tích luỹ $14$); $C=5$, $n_m=9$. $Q_1=20+\dfrac{10-5}{9}\cdot20=20+\dfrac{100}{9}=\dfrac{280}{9}\approx31{,}11$ (phút).`,
    R`$\dfrac{3n}4=30$: nhóm đầu tiên có tích luỹ $\ge30$ là $[60;80)$ (tích luỹ $36$); $C=26$, $n_m=10$. $Q_3=60+\dfrac{30-26}{10}\cdot20=60+8=68$ (phút).`
   ] },
 { muc: "VD", de: R`Cân nặng của $50$ học sinh được cho trong bảng:` + BANG2 + R`Tìm các tứ phân vị của mẫu số liệu.`,
   giai: [
    R`$n=50$. Tần số tích luỹ: $6;\ 20;\ 38;\ 46;\ 50$. Độ dài mỗi nhóm là $5$.`,
    R`$Q_1$: $\dfrac n4=12{,}5$, thuộc nhóm $[45;50)$ ($C=6$, $n_m=14$): $Q_1=45+\dfrac{12{,}5-6}{14}\cdot5=45+\dfrac{65}{28}=\dfrac{1325}{28}\approx47{,}32$ (kg).`,
    R`$Q_2$: $\dfrac{2n}4=25$, thuộc nhóm $[50;55)$ ($C=20$, $n_m=18$): $Q_2=50+\dfrac{25-20}{18}\cdot5=50+\dfrac{25}{18}=\dfrac{925}{18}\approx51{,}39$ (kg).`,
    R`$Q_3$: $\dfrac{3n}4=37{,}5$, thuộc nhóm $[50;55)$: $Q_3=50+\dfrac{37{,}5-20}{18}\cdot5=50+\dfrac{175}{36}=\dfrac{1975}{36}\approx54{,}86$ (kg).`
   ] }
 ] },

"C3-B9-D03": {
 pp: [
  R`**Khoảng tứ phân vị** $\Delta_Q=Q_3-Q_1$: độ rộng của "nửa giữa" số liệu; càng nhỏ thì phần giữa của mẫu càng tập trung.`,
  R`**Giá trị ngoại lệ:** giá trị nhỏ hơn $Q_1-1{,}5\Delta_Q$ hoặc lớn hơn $Q_3+1{,}5\Delta_Q$.`,
  R`So sánh hai mẫu: mẫu nào có $\Delta_Q$ (hoặc khoảng biến thiên) nhỏ hơn thì đồng đều hơn.`
 ],
 luuY: [
  R`So sánh độ phân tán bằng số trung bình: số trung bình không đo độ phân tán.`
 ],
 vd: [
 { muc: "TH", de: R`Với mẫu số liệu thời gian tập thể dục của lớp A ($Q_1=\dfrac{280}{9}$, $Q_3=68$, xem dạng C3-B9-D02), tính khoảng tứ phân vị.`,
   giai: [
    R`$\Delta_Q=Q_3-Q_1=68-\dfrac{280}{9}=\dfrac{612-280}{9}=\dfrac{332}{9}\approx36{,}89$ (phút).`
   ] },
 { muc: "TH", de: R`Mẫu số liệu của lớp A có giá trị ngoại lệ không?`,
   giai: [
    R`$1{,}5\Delta_Q=1{,}5\cdot\dfrac{332}{9}=\dfrac{166}{3}\approx55{,}33$.`,
    R`$Q_1-1{,}5\Delta_Q\approx31{,}11-55{,}33<0$ và $Q_3+1{,}5\Delta_Q\approx68+55{,}33=123{,}33$.`,
    R`Mọi số liệu nằm trong $[0;100)$, tức nằm giữa hai ngưỡng trên, nên mẫu không có giá trị ngoại lệ.`
   ] },
 { muc: "VD", de: R`Thời gian tập thể dục mỗi ngày của học sinh hai lớp A và B được cho trong bảng:` + BANGB + R`Dựa vào khoảng tứ phân vị, lớp nào có thời gian tập đồng đều hơn?`,
   giai: [
    R`Lớp A: $\Delta_Q=\dfrac{332}{9}\approx36{,}89$ (ví dụ 1).`,
    R`Lớp B: $n=40$, tích luỹ $2;\ 12;\ 30;\ 38;\ 40$. $Q_1$ thuộc $[20;40)$: $Q_1=20+\dfrac{10-2}{10}\cdot20=36$. $Q_3$ thuộc $[40;60)$: $Q_3=40+\dfrac{30-12}{18}\cdot20=60$.`,
    R`Lớp B: $\Delta_Q=60-36=24$.`,
    R`**Kết luận.** $24<36{,}89$ nên thời gian tập của lớp B đồng đều hơn lớp A.`
   ] }
 ] },

"C3-B10-D01": {
 pp: [
  R`Lấy **giá trị đại diện** $x_i$ của mỗi nhóm là trung điểm của nhóm; $n_i$ là tần số, $n$ là cỡ mẫu.`,
  R`Số trung bình $\overline x=\dfrac{n_1x_1+n_2x_2+\dots+n_kx_k}{n}$.`,
  R`Phương sai $s^2=\dfrac{n_1x_1^2+\dots+n_kx_k^2}{n}-\overline x^2$ (hoặc $\dfrac1n\sum n_i(x_i-\overline x)^2$). Độ lệch chuẩn $s=\sqrt{s^2}$.`
 ],
 luuY: [
  R`Quên trừ $\overline x^2$, hoặc lấy đầu mút nhóm thay cho giá trị đại diện.`
 ],
 vd: [
 { muc: "NB", de: R`Tính thời gian tập thể dục trung bình của học sinh lớp A:` + BANG1,
   giai: [
    R`Giá trị đại diện: $10;\ 30;\ 50;\ 70;\ 90$.`,
    R`$\overline x=\dfrac{5\cdot10+9\cdot30+12\cdot50+10\cdot70+4\cdot90}{40}=\dfrac{50+270+600+700+360}{40}=\dfrac{1980}{40}=49{,}5$ (phút).`
   ] },
 { muc: "TH", de: R`Tính phương sai và độ lệch chuẩn của mẫu số liệu ở ví dụ 1.`,
   giai: [
    R`$\sum n_ix_i^2=5\cdot100+9\cdot900+12\cdot2500+10\cdot4900+4\cdot8100=500+8100+30000+49000+32400=120\,000$.`,
    R`$s^2=\dfrac{120\,000}{40}-49{,}5^2=3000-2450{,}25=549{,}75$.`,
    R`$s=\sqrt{549{,}75}\approx23{,}45$ (phút).`
   ] },
 { muc: "VD", de: R`Tính cân nặng trung bình và độ lệch chuẩn của mẫu số liệu sau:` + BANG2,
   giai: [
    R`Giá trị đại diện: $42{,}5;\ 47{,}5;\ 52{,}5;\ 57{,}5;\ 62{,}5$; $n=50$.`,
    R`$\overline x=\dfrac{6\cdot42{,}5+14\cdot47{,}5+18\cdot52{,}5+8\cdot57{,}5+4\cdot62{,}5}{50}=\dfrac{255+665+945+460+250}{50}=\dfrac{2575}{50}=51{,}5$ (kg).`,
    R`$\sum n_ix_i^2=6\cdot1806{,}25+14\cdot2256{,}25+18\cdot2756{,}25+8\cdot3306{,}25+4\cdot3906{,}25=134\,112{,}5$.`,
    R`$s^2=\dfrac{134\,112{,}5}{50}-51{,}5^2=2682{,}25-2652{,}25=30$; $s=\sqrt{30}\approx5{,}48$ (kg).`
   ] }
 ] },

"C3-B10-D02": {
 pp: [
  R`Độ lệch chuẩn (phương sai) càng **nhỏ** thì số liệu càng **tập trung** quanh số trung bình, tức càng ổn định, đồng đều.`,
  R`Trong đầu tư, độ lệch chuẩn của lợi nhuận dùng để đo **rủi ro**: cùng lợi nhuận trung bình, độ lệch chuẩn lớn hơn thì rủi ro cao hơn.`,
  R`So sánh hai mẫu cùng đơn vị: tính (hoặc đọc) độ lệch chuẩn của mỗi mẫu rồi so sánh.`
 ],
 luuY: [
  R`Kết luận "ổn định hơn" dựa vào số trung bình lớn hơn.`
 ],
 vd: [
 { muc: "NB", de: R`Hai xạ thủ có điểm trung bình bằng nhau; độ lệch chuẩn điểm của xạ thủ thứ nhất là $1{,}2$, của xạ thủ thứ hai là $2{,}5$. Xạ thủ nào bắn ổn định hơn?`,
   giai: [
    R`Độ lệch chuẩn nhỏ hơn thì điểm tập trung quanh trung bình hơn.`,
    R`$1{,}2<2{,}5$ nên xạ thủ thứ nhất bắn ổn định hơn.`
   ] },
 { muc: "TH", de: R`Hai mã cổ phiếu X và Y có lợi nhuận trung bình hằng tháng cùng là $8\%$; độ lệch chuẩn lợi nhuận lần lượt là $3\%$ và $6\%$. Nên chọn mã nào nếu muốn ít rủi ro?`,
   giai: [
    R`Cùng lợi nhuận trung bình, mã có độ lệch chuẩn nhỏ hơn thì lợi nhuận ít dao động, rủi ro thấp hơn.`,
    R`$3\%<6\%$ nên chọn mã X.`
   ] },
 { muc: "VD", de: R`Dùng độ lệch chuẩn để so sánh mức độ đồng đều về thời gian tập thể dục của hai lớp A và B:` + BANGB,
   giai: [
    R`Lớp A: $s_A\approx23{,}45$ phút (xem Dạng 1).`,
    R`Lớp B: $\overline x_B=\dfrac{2\cdot10+10\cdot30+18\cdot50+8\cdot70+2\cdot90}{40}=\dfrac{1960}{40}=49$.`,
    R`$\sum n_ix_i^2=2\cdot100+10\cdot900+18\cdot2500+8\cdot4900+2\cdot8100=109\,600$; $s_B^2=\dfrac{109\,600}{40}-49^2=2740-2401=339$; $s_B\approx18{,}41$.`,
    R`**Kết luận.** $s_B<s_A$ nên thời gian tập của lớp B đồng đều hơn (cùng kết luận với khoảng tứ phân vị).`
   ] }
 ] },

"C3-B10-D03": {
 pp: [
  R`Nếu mỗi số liệu biến đổi theo $y=ax+b$ thì $\overline y=a\overline x+b$, $s_y^2=a^2s_x^2$, $s_y=|a|\,s_x$. Cộng thêm một hằng số không làm đổi độ lệch chuẩn.`,
  R`**Tìm tần số chưa biết:** viết công thức số trung bình (hoặc tứ phân vị) theo ẩn, cho bằng giá trị đề cho rồi giải phương trình.`
 ],
 luuY: [
  R`Cho rằng cộng thêm $5$ vào mỗi số liệu thì độ lệch chuẩn cũng tăng $5$.`
 ],
 vd: [
 { muc: "TH", de: R`Nhiệt độ trung bình các ngày trong tháng ở một thành phố là $25^\circ$C với độ lệch chuẩn $2^\circ$C. Đổi sang độ F theo công thức $F=1{,}8C+32$. Tính nhiệt độ trung bình và độ lệch chuẩn theo độ F.`,
   giai: [
    R`$\overline F=1{,}8\cdot25+32=45+32=77$ (°F).`,
    R`$s_F=|1{,}8|\cdot s_C=1{,}8\cdot2=3{,}6$ (°F).`
   ] },
 { muc: "TH", de: R`Một lớp có điểm trung bình môn Toán là $6{,}2$, độ lệch chuẩn $1{,}5$. Thầy cộng thêm $0{,}5$ điểm cho mọi học sinh. Điểm trung bình và độ lệch chuẩn mới là bao nhiêu?`,
   giai: [
    R`Biến đổi $y=x+0{,}5$ ($a=1$, $b=0{,}5$).`,
    R`$\overline y=6{,}2+0{,}5=6{,}7$; $s_y=1\cdot1{,}5=1{,}5$ (không đổi).`
   ] },
 { muc: "VD", de: R`Cho mẫu số liệu ghép nhóm: $[0;10)$: $3$; $[10;20)$: $x$; $[20;30)$: $5$; $[30;40)$: $2$. Biết số trung bình của mẫu bằng $19$. Tìm $x$.`,
   giai: [
    R`Giá trị đại diện $5;\ 15;\ 25;\ 35$; cỡ mẫu $n=10+x$.`,
    R`$\overline x=\dfrac{3\cdot5+15x+5\cdot25+2\cdot35}{10+x}=\dfrac{210+15x}{10+x}$.`,
    R`$\dfrac{210+15x}{10+x}=19\Leftrightarrow210+15x=190+19x\Leftrightarrow4x=20\Leftrightarrow x=5$.`,
    R`Thử lại: $n=15$, $\overline x=\dfrac{15+75+125+70}{15}=\dfrac{285}{15}=19$ ✓.`
   ] }
 ] }
});
/* ---------- Chương IV · Nguyên hàm và tích phân ---------- */
const TRUC = (x0, x1, y0, y1, khongO) => R`\draw[->] (${x0},0)--(${x1},0) node[below]{$x$};
\draw[->] (0,${y0})--(0,${y1}) node[left]{$y$};
` + (khongO ? "" : R`
\node[below left] at (0,0){$O$};`);
Object.assign(D, {
"C4-B11-D01": {
 pp: [
  R`$F(x)$ là **một nguyên hàm** của $f(x)$ trên khoảng $K$ khi và chỉ khi $F'(x)=f(x)$ với mọi $x\in K$.`,
  R`Nếu $F(x)$ là một nguyên hàm của $f(x)$ thì mọi nguyên hàm của $f(x)$ đều có dạng $F(x)+C$. Kí hiệu **họ nguyên hàm**: $\displaystyle\int f(x)\,dx=F(x)+C$.`,
  R`**Cách kiểm tra:** tính đạo hàm $F'(x)$ rồi so sánh với $f(x)$. Bằng nhau thì đúng, khác nhau thì sai.`,
  R`Hai tính chất cần nhớ: $\left(\displaystyle\int f(x)\,dx\right)'=f(x)$ và $\displaystyle\int f'(x)\,dx=f(x)+C$.`
 ],
 luuY: [
  R`Quên hằng số $C$ khi viết họ nguyên hàm.`,
  R`Nhầm dấu khi đạo hàm $\cos$: $(\cos x)'=-\sin x$, nên $(-\cos x)'=\sin x$.`
 ],
 vd: [
 { muc: "NB", de: R`Hàm số $F(x)=x^3+2x-5$ có phải là một nguyên hàm của hàm số $f(x)=3x^2+2$ trên $\mathbb R$ không?`,
   giai: [
    R`Tính đạo hàm: $F'(x)=3x^2+2-0=3x^2+2$.`,
    R`Ta thấy $F'(x)=f(x)$ với mọi $x\in\mathbb R$.`,
    R`**Kết luận.** $F(x)$ là một nguyên hàm của $f(x)$ trên $\mathbb R$.`
   ] },
 { muc: "TH", de: R`Chứng minh rằng $F(x)=x\,e^x$ là một nguyên hàm của $f(x)=(x+1)e^x$ trên $\mathbb R$.`,
   giai: [
    R`Dùng quy tắc đạo hàm của tích: $F'(x)=(x)'\cdot e^x+x\cdot(e^x)'=1\cdot e^x+x\,e^x$.`,
    R`Đặt nhân tử chung: $F'(x)=(x+1)e^x=f(x)$ với mọi $x\in\mathbb R$.`,
    R`Vậy $F(x)$ là một nguyên hàm của $f(x)$ trên $\mathbb R$.`
   ] },
 { muc: "TH", de: R`Hàm số nào sau đây là một nguyên hàm của $f(x)=\sin 2x$?
**A.** $\cos 2x$. **B.** $-\tfrac12\cos 2x$. **C.** $2\cos 2x$. **D.** $\tfrac12\cos 2x$.`,
   giai: [
    R`Nhớ công thức $(\cos 2x)'=-\sin 2x\cdot(2x)'=-2\sin 2x$.`,
    R`Phương án A: $(\cos2x)'=-2\sin2x\ne\sin2x$. Loại.`,
    R`Phương án B: $\left(-\tfrac12\cos2x\right)'=-\tfrac12\cdot(-2\sin2x)=\sin2x$. Đúng.`,
    R`Phương án C: $(2\cos2x)'=-4\sin2x$; phương án D: $\left(\tfrac12\cos2x\right)'=-\sin2x$. Đều loại.`,
    R`**Kết luận.** Chọn **B**.`
   ] },
 { muc: "VD", de: R`Tìm các số thực $a$, $b$ để $F(x)=(ax+b)e^x$ là một nguyên hàm của $f(x)=(2x+3)e^x$ trên $\mathbb R$.`,
   giai: [
    R`$F'(x)=a\cdot e^x+(ax+b)e^x=(ax+a+b)e^x$.`,
    R`$F$ là nguyên hàm của $f$ khi $F'(x)=f(x)$ với mọi $x$, tức là $(ax+a+b)e^x=(2x+3)e^x$ với mọi $x$.`,
    R`Vì $e^x>0$ nên ta đồng nhất hệ số: $a=2$ và $a+b=3$.`,
    R`Suy ra $a=2$, $b=1$. Thử lại: $F(x)=(2x+1)e^x$ có $F'(x)=2e^x+(2x+1)e^x=(2x+3)e^x$ ✓.`
   ] }
 ] },
"C4-B11-D02": {
 pp: [
  R`**Bảng nguyên hàm cơ bản:** $\displaystyle\int x^\alpha dx=\dfrac{x^{\alpha+1}}{\alpha+1}+C\ (\alpha\ne-1)$; $\displaystyle\int\dfrac1x\,dx=\ln|x|+C$; $\displaystyle\int k\,dx=kx+C$.`,
  R`**Tính chất:** $\displaystyle\int k f(x)\,dx=k\int f(x)\,dx\ (k\ne0)$; $\displaystyle\int[f(x)\pm g(x)]\,dx=\int f(x)\,dx\pm\int g(x)\,dx$.`,
  R`**Căn thức:** đổi sang luỹ thừa: $\sqrt x=x^{\frac12}$, $\sqrt[3]{x^2}=x^{\frac23}$, $\dfrac1{\sqrt x}=x^{-\frac12}$, $\dfrac1{x^2}=x^{-2}$.`,
  R`**Phân thức tách được:** chia từng hạng tử của tử số cho mẫu số để được tổng các luỹ thừa của $x$; khai triển nếu tử là hằng đẳng thức.`
 ],
 luuY: [
  R`$\displaystyle\int\dfrac{1}{x^2}dx=-\dfrac1x+C$, không phải $\ln x^2+C$. Chỉ có $\dfrac1x$ (tức $\alpha=-1$) mới cho $\ln|x|$.`,
  R`Không có quy tắc "nguyên hàm của tích bằng tích các nguyên hàm": $\displaystyle\int f\,g\,dx\ne\int f\,dx\cdot\int g\,dx$.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm $\displaystyle\int(3x^2-4x+5)\,dx$.`,
   giai: [
    R`Tách thành từng hạng tử: $\displaystyle\int3x^2dx-\int4x\,dx+\int5\,dx$.`,
    R`$\displaystyle\int3x^2dx=3\cdot\dfrac{x^3}{3}=x^3$; $\displaystyle\int4x\,dx=4\cdot\dfrac{x^2}{2}=2x^2$; $\displaystyle\int5\,dx=5x$.`,
    R`**Kết quả.** $\displaystyle\int(3x^2-4x+5)\,dx=x^3-2x^2+5x+C$.`
   ] },
 { muc: "TH", de: R`Tìm $\displaystyle\int\left(\sqrt x+\dfrac1{x^2}\right)dx$ trên khoảng $(0;+\infty)$.`,
   giai: [
    R`Viết dưới dạng luỹ thừa: $\sqrt x+\dfrac1{x^2}=x^{\frac12}+x^{-2}$.`,
    R`$\displaystyle\int x^{\frac12}dx=\dfrac{x^{\frac32}}{\frac32}=\dfrac23x^{\frac32}=\dfrac23x\sqrt x$.`,
    R`$\displaystyle\int x^{-2}dx=\dfrac{x^{-1}}{-1}=-\dfrac1x$.`,
    R`**Kết quả.** $\displaystyle\int\left(\sqrt x+\dfrac1{x^2}\right)dx=\dfrac23x\sqrt x-\dfrac1x+C$.`
   ] },
 { muc: "TH", de: R`Tìm $\displaystyle\int\dfrac{x^2-2x+3}{x}\,dx$ trên khoảng $(0;+\infty)$.`,
   giai: [
    R`Chia từng hạng tử cho $x$: $\dfrac{x^2-2x+3}{x}=x-2+\dfrac3x$.`,
    R`$\displaystyle\int\left(x-2+\dfrac3x\right)dx=\dfrac{x^2}2-2x+3\ln|x|+C$.`,
    R`Trên $(0;+\infty)$ ta có $|x|=x$. **Kết quả.** $\dfrac{x^2}{2}-2x+3\ln x+C$.`
   ] },
 { muc: "VD", de: R`Tìm $\displaystyle\int\dfrac{(x+1)^2}{\sqrt x}\,dx$ trên khoảng $(0;+\infty)$.`,
   giai: [
    R`Khai triển tử số: $(x+1)^2=x^2+2x+1$.`,
    R`Chia từng hạng tử cho $\sqrt x=x^{\frac12}$: $\dfrac{x^2+2x+1}{x^{\frac12}}=x^{\frac32}+2x^{\frac12}+x^{-\frac12}$.`,
    R`Lấy nguyên hàm từng hạng tử: $\displaystyle\int x^{\frac32}dx=\dfrac25x^{\frac52}$; $\displaystyle\int2x^{\frac12}dx=2\cdot\dfrac23x^{\frac32}=\dfrac43x^{\frac32}$; $\displaystyle\int x^{-\frac12}dx=\dfrac{x^{\frac12}}{\frac12}=2x^{\frac12}$.`,
    R`**Kết quả.** $\displaystyle\int\dfrac{(x+1)^2}{\sqrt x}dx=\dfrac25x^2\sqrt x+\dfrac43x\sqrt x+2\sqrt x+C$.`,
    R`Kiểm tra lại bằng đạo hàm: $\left(\dfrac25x^{\frac52}\right)'=x^{\frac32}$, $\left(\dfrac43x^{\frac32}\right)'=2x^{\frac12}$, $\left(2x^{\frac12}\right)'=x^{-\frac12}$ ✓.`
   ] }
 ] },
"C4-B11-D03": {
 pp: [
  R`**Hàm số mũ:** $\displaystyle\int e^x dx=e^x+C$; $\displaystyle\int a^x dx=\dfrac{a^x}{\ln a}+C\ (0<a\ne1)$.`,
  R`**Lượng giác:** $\displaystyle\int\sin x\,dx=-\cos x+C$; $\displaystyle\int\cos x\,dx=\sin x+C$; $\displaystyle\int\dfrac{dx}{\cos^2x}=\tan x+C$; $\displaystyle\int\dfrac{dx}{\sin^2x}=-\cot x+C$.`,
  R`**Biến đổi trước khi lấy nguyên hàm:** $a^{2x}=(a^2)^x$, $e^{x+1}=e\cdot e^x$; $\sin^2\dfrac x2=\dfrac{1-\cos x}2$, $\cos^2\dfrac x2=\dfrac{1+\cos x}2$; $\tan^2x=\dfrac1{\cos^2x}-1$; $1=\sin^2x+\cos^2x$.`
 ],
 luuY: [
  R`Sai dấu: $\displaystyle\int\sin x\,dx=-\cos x+C$ (có dấu trừ), còn $\displaystyle\int\cos x\,dx=\sin x+C$.`,
  R`$\displaystyle\int a^x dx$ phải **chia** cho $\ln a$, không phải nhân.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm $\displaystyle\int(2e^x-3\cos x)\,dx$.`,
   giai: [
    R`$\displaystyle\int2e^xdx=2e^x$; $\displaystyle\int3\cos x\,dx=3\sin x$.`,
    R`**Kết quả.** $\displaystyle\int(2e^x-3\cos x)\,dx=2e^x-3\sin x+C$.`
   ] },
 { muc: "TH", de: R`Tìm $\displaystyle\int2^{2x+1}dx$.`,
   giai: [
    R`Biến đổi: $2^{2x+1}=2\cdot2^{2x}=2\cdot(2^2)^x=2\cdot4^x$.`,
    R`$\displaystyle\int2\cdot4^xdx=2\cdot\dfrac{4^x}{\ln4}+C$.`,
    R`Vì $\ln4=2\ln2$ nên $2\cdot\dfrac{4^x}{2\ln2}=\dfrac{4^x}{\ln2}$. **Kết quả.** $\dfrac{4^x}{\ln2}+C$.`
   ] },
 { muc: "TH", de: R`Tìm $\displaystyle\int\sin^2\dfrac x2\,dx$.`,
   giai: [
    R`Hạ bậc: $\sin^2\dfrac x2=\dfrac{1-\cos x}{2}=\dfrac12-\dfrac12\cos x$.`,
    R`$\displaystyle\int\left(\dfrac12-\dfrac12\cos x\right)dx=\dfrac x2-\dfrac12\sin x+C$.`
   ] },
 { muc: "VD", de: R`Tìm $\displaystyle\int\tan^2x\,dx$ trên khoảng $\left(-\dfrac\pi2;\dfrac\pi2\right)$.`,
   giai: [
    R`Ta có $1+\tan^2x=\dfrac1{\cos^2x}$ nên $\tan^2x=\dfrac1{\cos^2x}-1$.`,
    R`$\displaystyle\int\left(\dfrac1{\cos^2x}-1\right)dx=\tan x-x+C$.`
   ] },
 { muc: "VD", de: R`Tìm $\displaystyle\int\dfrac{dx}{\sin^2x\cos^2x}$ trên khoảng $\left(0;\dfrac\pi2\right)$.`,
   giai: [
    R`Thay $1=\sin^2x+\cos^2x$ ở tử: $\dfrac{1}{\sin^2x\cos^2x}=\dfrac{\sin^2x+\cos^2x}{\sin^2x\cos^2x}$.`,
    R`Tách thành hai phân số: $=\dfrac{\sin^2x}{\sin^2x\cos^2x}+\dfrac{\cos^2x}{\sin^2x\cos^2x}=\dfrac1{\cos^2x}+\dfrac1{\sin^2x}$.`,
    R`**Kết quả.** $\displaystyle\int\dfrac{dx}{\sin^2x\cos^2x}=\tan x-\cot x+C$.`
   ] }
 ] },
"C4-B11-D04": {
 pp: [
  R`**Bước 1.** Tìm họ nguyên hàm $F(x)=G(x)+C$.`,
  R`**Bước 2.** Thay điều kiện $F(x_0)=y_0$ để tìm $C$, rồi viết $F(x)$ cụ thể.`,
  R`**Bài toán thực tế:** vận tốc là nguyên hàm của gia tốc ($v'(t)=a(t)$), quãng đường (toạ độ) là nguyên hàm của vận tốc ($s'(t)=v(t)$). Biết tốc độ thay đổi $Q'(t)$ thì $Q(t)$ là một nguyên hàm của $Q'(t)$; giá trị ban đầu cho ta $C$.`
 ],
 luuY: [
  R`Quên $+C$, hoặc có $C$ nhưng không dùng điều kiện ban đầu để tìm.`,
  R`Thay điều kiện vào $f$ thay vì vào $F$.`
 ],
 vd: [
 { muc: "TH", de: R`Biết $F(x)$ là một nguyên hàm của $f(x)=3x^2-2x$ và $F(1)=4$. Tính $F(2)$.`,
   giai: [
    R`$F(x)=\displaystyle\int(3x^2-2x)\,dx=x^3-x^2+C$.`,
    R`$F(1)=1-1+C=C$. Từ $F(1)=4$ suy ra $C=4$, nên $F(x)=x^3-x^2+4$.`,
    R`$F(2)=8-4+4=8$.`
   ] },
 { muc: "TH", de: R`Tìm nguyên hàm $F(x)$ của $f(x)=e^x+2x$ thoả mãn $F(0)=3$.`,
   giai: [
    R`$F(x)=e^x+x^2+C$.`,
    R`$F(0)=e^0+0+C=1+C$. Từ $F(0)=3$ suy ra $C=2$.`,
    R`**Kết quả.** $F(x)=e^x+x^2+2$.`
   ] },
 { muc: "VD", de: R`Một vật chuyển động với gia tốc $a(t)=6t$ (m/s²), trong đó $t$ là thời gian tính bằng giây. Vận tốc ban đầu là $2$ m/s và lúc $t=0$ vật ở vị trí gốc ($s(0)=0$). Tính vận tốc của vật tại $t=3$ và quãng đường vật đi được trong $3$ giây đầu.`,
   giai: [
    R`**Vận tốc.** $v(t)=\displaystyle\int6t\,dt=3t^2+C_1$. Từ $v(0)=2$ suy ra $C_1=2$, nên $v(t)=3t^2+2$.`,
    R`Tại $t=3$: $v(3)=27+2=29$ (m/s).`,
    R`**Quãng đường.** $s(t)=\displaystyle\int(3t^2+2)\,dt=t^3+2t+C_2$. Từ $s(0)=0$ suy ra $C_2=0$, nên $s(t)=t^3+2t$.`,
    R`Vì $v(t)>0$ nên vật chỉ đi theo một chiều; quãng đường trong $3$ giây đầu là $s(3)=27+6=33$ (m).`
   ] },
 { muc: "VD", de: R`Một quần thể vi khuẩn lúc đầu có $500$ con. Tốc độ tăng số lượng là $N'(t)=300\sqrt t$ (con/giờ), $t$ tính bằng giờ. Sau $4$ giờ quần thể có bao nhiêu con?`,
   giai: [
    R`$N(t)=\displaystyle\int300t^{\frac12}dt=300\cdot\dfrac23t^{\frac32}+C=200t\sqrt t+C$.`,
    R`Lúc đầu $N(0)=500$ nên $C=500$, tức là $N(t)=200t\sqrt t+500$.`,
    R`$N(4)=200\cdot4\cdot2+500=1600+500=2100$.`,
    R`**Kết luận.** Sau $4$ giờ có $2100$ con vi khuẩn.`
   ] }
 ] },
"C4-B12-D01": {
 pp: [
  R`**Định nghĩa.** Nếu $F$ là một nguyên hàm của $f$ trên $[a;b]$ thì $\displaystyle\int_a^bf(x)\,dx=F(x)\Big|_a^b=F(b)-F(a)$.`,
  R`**Tính chất:** $\displaystyle\int_a^af=0$; $\displaystyle\int_a^bf=-\int_b^af$; $\displaystyle\int_a^bkf=k\int_a^bf$; $\displaystyle\int_a^b(f\pm g)=\int_a^bf\pm\int_a^bg$.`,
  R`**Cộng đoạn:** $\displaystyle\int_a^bf(x)\,dx+\int_b^cf(x)\,dx=\int_a^cf(x)\,dx$.`,
  R`Tích phân không phụ thuộc tên biến: $\displaystyle\int_a^bf(x)\,dx=\int_a^bf(t)\,dt$.`
 ],
 luuY: [
  R`$\displaystyle\int_a^bf\,g\,dx\ne\int_a^bf\,dx\cdot\int_a^bg\,dx$.`,
  R`Đổi chỗ hai cận thì tích phân đổi dấu. Hằng số $1$ trong biểu thức cũng phải lấy tích phân: $\displaystyle\int_a^b1\,dx=b-a$, không phải $1$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $\displaystyle\int_0^2f(x)\,dx=3$ và $\displaystyle\int_0^2g(x)\,dx=-1$. Tính $\displaystyle\int_0^2\big[2f(x)-3g(x)+1\big]dx$.`,
   giai: [
    R`Tách theo tính chất: $\displaystyle\int_0^2[2f-3g+1]dx=2\int_0^2f\,dx-3\int_0^2g\,dx+\int_0^21\,dx$.`,
    R`$\displaystyle\int_0^21\,dx=x\Big|_0^2=2$.`,
    R`Thay số: $2\cdot3-3\cdot(-1)+2=6+3+2=11$.`
   ] },
 { muc: "TH", de: R`Cho $\displaystyle\int_1^3f(x)\,dx=5$ và $\displaystyle\int_1^5f(x)\,dx=2$. Tính $\displaystyle\int_3^5f(x)\,dx$.`,
   giai: [
    R`Cộng đoạn: $\displaystyle\int_1^5f=\int_1^3f+\int_3^5f$.`,
    R`Suy ra $\displaystyle\int_3^5f(x)\,dx=2-5=-3$.`
   ] },
 { muc: "TH", de: R`Cho $F(x)$ là một nguyên hàm của $f(x)$ trên $\mathbb R$, $F(1)=2$, $F(4)=11$. Tính $\displaystyle\int_1^4f(x)\,dx$ và $\displaystyle\int_4^1f(t)\,dt$.`,
   giai: [
    R`Theo định nghĩa: $\displaystyle\int_1^4f(x)\,dx=F(4)-F(1)=11-2=9$.`,
    R`Đổi biến $x$ thành $t$ không làm thay đổi giá trị; đổi chỗ hai cận thì đổi dấu: $\displaystyle\int_4^1f(t)\,dt=-9$.`
   ] },
 { muc: "VD", de: R`Cho hàm số $f$ liên tục trên $\mathbb R$, $\displaystyle\int_0^1f(x)\,dx=2$ và $\displaystyle\int_0^3f(x)\,dx=6$. Tính $I=\displaystyle\int_1^3\big[3f(x)-2x\big]dx$.`,
   giai: [
    R`Tìm $\displaystyle\int_1^3f$: vì $\displaystyle\int_0^3f=\int_0^1f+\int_1^3f$ nên $\displaystyle\int_1^3f(x)\,dx=6-2=4$.`,
    R`$\displaystyle\int_1^32x\,dx=x^2\Big|_1^3=9-1=8$.`,
    R`$I=3\cdot4-8=4$.`
   ] }
 ] },
"C4-B12-D02": {
 pp: [
  R`**Bước 1.** Biến đổi biểu thức dưới dấu tích phân thành tổng các hàm có trong bảng nguyên hàm (khai triển, chia, hạ bậc...).`,
  R`**Bước 2.** Tìm một nguyên hàm $F(x)$ (không cần $+C$).`,
  R`**Bước 3.** Tính $F(b)-F(a)$: thay cận trên trừ thay cận dưới. Đặt cả biểu thức thay cận trong ngoặc để không sai dấu.`
 ],
 luuY: [
  R`Thay cận dưới trừ cận trên (ngược dấu).`,
  R`Máy tính để chế độ độ (D) khi tính tích phân lượng giác; phải để chế độ radian (R).`
 ],
 vd: [
 { muc: "NB", de: R`Tính $\displaystyle\int_1^2(3x^2+2x)\,dx$.`,
   giai: [
    R`Một nguyên hàm: $F(x)=x^3+x^2$.`,
    R`$\displaystyle\int_1^2(3x^2+2x)\,dx=(x^3+x^2)\Big|_1^2=(8+4)-(1+1)=10$.`
   ] },
 { muc: "TH", de: R`Tính $\displaystyle\int_0^{\frac\pi2}(2\cos x-\sin x)\,dx$.`,
   giai: [
    R`Một nguyên hàm: $\displaystyle\int(2\cos x-\sin x)dx=2\sin x+\cos x$ (vì $\displaystyle\int-\sin x\,dx=\cos x$).`,
    R`$(2\sin x+\cos x)\Big|_0^{\frac\pi2}=\left(2\cdot1+0\right)-\left(2\cdot0+1\right)=2-1=1$.`
   ] },
 { muc: "TH", de: R`Tính $\displaystyle\int_1^e\dfrac{x+1}{x}\,dx$.`,
   giai: [
    R`Chia: $\dfrac{x+1}{x}=1+\dfrac1x$.`,
    R`$\displaystyle\int_1^e\left(1+\dfrac1x\right)dx=(x+\ln x)\Big|_1^e=(e+1)-(1+0)=e$.`
   ] },
 { muc: "VD", de: R`Tính $\displaystyle\int_1^4\dfrac{x-1}{\sqrt x}\,dx$.`,
   giai: [
    R`Chia từng hạng tử: $\dfrac{x-1}{\sqrt x}=x^{\frac12}-x^{-\frac12}$.`,
    R`Một nguyên hàm: $F(x)=\dfrac23x^{\frac32}-2x^{\frac12}=\dfrac23x\sqrt x-2\sqrt x$.`,
    R`$F(4)=\dfrac23\cdot8-4=\dfrac{16}3-4=\dfrac43$; $F(1)=\dfrac23-2=-\dfrac43$.`,
    R`$\displaystyle\int_1^4\dfrac{x-1}{\sqrt x}dx=\dfrac43-\left(-\dfrac43\right)=\dfrac83$.`
   ] },
 { muc: "VD", de: R`Tính $\displaystyle\int_0^1(e^x+2^x)\,dx$.`,
   giai: [
    R`Một nguyên hàm: $F(x)=e^x+\dfrac{2^x}{\ln2}$.`,
    R`$F(1)-F(0)=\left(e+\dfrac2{\ln2}\right)-\left(1+\dfrac1{\ln2}\right)=e-1+\dfrac1{\ln2}$.`,
    R`Giá trị gần đúng: $\approx2{,}718-1+1{,}443\approx3{,}16$.`
   ] }
 ] },
"C4-B12-D03": {
 pp: [
  R`**Trị tuyệt đối** $\displaystyle\int_a^b|g(x)|\,dx$: giải $g(x)=0$, lập bảng xét dấu $g(x)$ trên $[a;b]$; tách tích phân tại các nghiệm; trên khoảng $g\ge0$ thì bỏ dấu giá trị tuyệt đối, trên khoảng $g\le0$ thì thay $|g|=-g$.`,
  R`**Hàm từng khúc:** tách tích phân tại điểm chuyển công thức, mỗi đoạn dùng đúng công thức của đoạn đó.`,
  R`**Ý nghĩa hình học:** nếu $f(x)\ge0$ liên tục trên $[a;b]$ thì $\displaystyle\int_a^bf(x)\,dx$ là diện tích hình thang cong giới hạn bởi đồ thị $y=f(x)$, trục $Ox$ và hai đường $x=a$, $x=b$. Có thể dùng diện tích hình quen thuộc (tam giác, hình tròn...) để tính.`
 ],
 luuY: [
  R`$\displaystyle\int_a^b|g(x)|dx\ne\left|\int_a^bg(x)dx\right|$ khi $g$ đổi dấu trên $[a;b]$.`,
  R`Bỏ dấu giá trị tuyệt đối mà không xét dấu.`
 ],
 vd: [
 { muc: "TH", de: R`Tính $\displaystyle\int_0^3|x-1|\,dx$.`,
   giai: [
    R`$x-1=0\Leftrightarrow x=1$. Trên $[0;1]$: $x-1\le0$ nên $|x-1|=1-x$. Trên $[1;3]$: $|x-1|=x-1$.`,
    R`$\displaystyle\int_0^1(1-x)\,dx=\left(x-\dfrac{x^2}2\right)\Big|_0^1=\dfrac12$.`,
    R`$\displaystyle\int_1^3(x-1)\,dx=\left(\dfrac{x^2}2-x\right)\Big|_1^3=\left(\dfrac92-3\right)-\left(\dfrac12-1\right)=\dfrac32+\dfrac12=2$.`,
    R`**Kết quả.** $\displaystyle\int_0^3|x-1|\,dx=\dfrac12+2=\dfrac52$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1,>=stealth]
\fill[blue!20] (0,0)--(0,1)--(1,0)--(3,2)--(3,0)--cycle;
\draw[thick,blue] (0,1)--(1,0)--(3.3,2.3);
${TRUC(-0.6,3.8,-0.4,2.8)}
\draw[dashed] (3,0)--(3,2);
\node[below] at (1,0){$1$}; \node[below] at (3,0){$3$};
\node[left] at (0,1){$1$}; \node[left] at (0,2){$2$}; \draw[dashed] (0,2)--(3,2);
\end{tikzpicture}`,
   chuThich: R`Tích phân bằng tổng diện tích hai tam giác tô màu: $\dfrac12\cdot1\cdot1+\dfrac12\cdot2\cdot2=\dfrac52$ (khớp kết quả).` },
 { muc: "TH", de: R`Tính $\displaystyle\int_{-1}^{2}|x^2-1|\,dx$.`,
   giai: [
    R`$x^2-1=0\Leftrightarrow x=\pm1$. Bảng xét dấu trên $[-1;2]$:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=2.2,espcl=2.4]{$x$/0.8,$x^2-1$/0.8}{$-1$,$1$,$2$}
\tkzTabLine{0,-,0,+,}
\end{tikzpicture}\end{center}`,
    R`Trên $[-1;1]$: $|x^2-1|=1-x^2$. $\displaystyle\int_{-1}^1(1-x^2)\,dx=\left(x-\dfrac{x^3}3\right)\Big|_{-1}^1=\dfrac23-\left(-\dfrac23\right)=\dfrac43$.`,
    R`Trên $[1;2]$: $|x^2-1|=x^2-1$. $\displaystyle\int_1^2(x^2-1)\,dx=\left(\dfrac{x^3}3-x\right)\Big|_1^2=\dfrac23-\left(-\dfrac23\right)=\dfrac43$.`,
    R`**Kết quả.** $\dfrac43+\dfrac43=\dfrac83$.`
   ] },
 { muc: "VD", de: R`Cho hàm số $f(x)=\begin{cases}2x&\text{khi }x\le1\\3-x^2&\text{khi }x>1\end{cases}$. Tính $\displaystyle\int_0^2f(x)\,dx$.`,
   giai: [
    R`Hàm số liên tục tại $x=1$ vì $2\cdot1=2$ và $3-1^2=2$. Tách tại $x=1$: $\displaystyle\int_0^2f=\int_0^12x\,dx+\int_1^2(3-x^2)\,dx$.`,
    R`$\displaystyle\int_0^12x\,dx=x^2\Big|_0^1=1$.`,
    R`$\displaystyle\int_1^2(3-x^2)\,dx=\left(3x-\dfrac{x^3}3\right)\Big|_1^2=\left(6-\dfrac83\right)-\left(3-\dfrac13\right)=\dfrac{10}3-\dfrac83=\dfrac23$.`,
    R`**Kết quả.** $\displaystyle\int_0^2f(x)\,dx=1+\dfrac23=\dfrac53$.`
   ] },
 { muc: "TH", de: R`Dùng ý nghĩa hình học, tính $\displaystyle\int_0^2\sqrt{4-x^2}\,dx$.`,
   giai: [
    R`Đặt $y=\sqrt{4-x^2}$ thì $y\ge0$ và $x^2+y^2=4$: đồ thị là nửa trên của đường tròn tâm $O$, bán kính $2$.`,
    R`Với $0\le x\le2$, hình phẳng dưới đồ thị là một phần tư hình tròn bán kính $2$ (hình dưới).`,
    R`Tích phân bằng diện tích phần đó: $\dfrac14\pi\cdot2^2=\pi$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1,>=stealth]
\fill[blue!20] (0,0)--(2,0) arc (0:90:2)--cycle;
\draw[thick,blue] (2,0) arc (0:90:2);
${TRUC(-0.5,2.7,-0.4,2.7)}
\node[below] at (2,0){$2$}; \node[left] at (0,2){$2$};
\end{tikzpicture}`,
   chuThich: R`Phần tô màu là một phần tư hình tròn bán kính $2$.` }
 ] },
"C4-B12-D04": {
 pp: [
  R`**Chuyển động:** nếu $v(t)\ge0$ trên $[a;b]$ thì quãng đường đi được là $s=\displaystyle\int_a^bv(t)\,dt$. Nếu $v$ đổi dấu, quãng đường là $\displaystyle\int_a^b|v(t)|\,dt$, còn độ dịch chuyển là $\displaystyle\int_a^bv(t)\,dt$.`,
  R`**Lượng thay đổi:** biết tốc độ thay đổi $Q'(t)$ thì lượng thay đổi từ $t=a$ đến $t=b$ là $Q(b)-Q(a)=\displaystyle\int_a^bQ'(t)\,dt$.`,
  R`Đọc kĩ đơn vị và tìm đúng hai cận (ví dụ thời điểm dừng: $v(t)=0$).`
 ],
 luuY: [
  R`Lấy $\displaystyle\int v\,dt$ khi vận tốc đổi dấu rồi gọi đó là quãng đường.`,
  R`Tìm sai cận: thời điểm xe dừng phải giải $v(t)=0$.`
 ],
 vd: [
 { muc: "TH", de: R`Một ô tô đang chạy với vận tốc $20$ m/s thì phanh. Từ lúc phanh, ô tô chuyển động chậm dần đều với $v(t)=20-5t$ (m/s). Hỏi từ lúc phanh đến khi dừng, ô tô đi thêm bao nhiêu mét?`,
   giai: [
    R`Ô tô dừng khi $v(t)=0\Leftrightarrow20-5t=0\Leftrightarrow t=4$ (giây).`,
    R`Trên $[0;4]$ ta có $v(t)\ge0$, nên quãng đường là $s=\displaystyle\int_0^4(20-5t)\,dt$.`,
    R`$s=\left(20t-\dfrac{5t^2}2\right)\Big|_0^4=80-40=40$ (m).`
   ] },
 { muc: "TH", de: R`Nước chảy vào một bể với tốc độ $r(t)=2t+10$ (lít/phút), $t$ tính bằng phút. Trong $10$ phút đầu có bao nhiêu lít nước chảy vào bể?`,
   giai: [
    R`Lượng nước chảy vào là $\displaystyle\int_0^{10}(2t+10)\,dt$.`,
    R`$=\left(t^2+10t\right)\Big|_0^{10}=100+100=200$ (lít).`
   ] },
 { muc: "VD", de: R`Một chất điểm chuyển động thẳng với vận tốc $v(t)=t^2-4t+3$ (m/s). Tính độ dịch chuyển và quãng đường chất điểm đi được trong khoảng thời gian $0\le t\le3$.`,
   giai: [
    R`$v(t)=0\Leftrightarrow t=1$ hoặc $t=3$. Bảng xét dấu:
\begin{center}\begin{tikzpicture}
\tkzTabInit[lgt=1.4,espcl=2.4]{$t$/0.8,$v(t)$/0.8}{$0$,$1$,$3$}
\tkzTabLine{,+,0,-,0}
\end{tikzpicture}\end{center}`,
    R`Một nguyên hàm: $F(t)=\dfrac{t^3}3-2t^2+3t$. Ta có $F(0)=0$, $F(1)=\dfrac13-2+3=\dfrac43$, $F(3)=9-18+9=0$.`,
    R`**Độ dịch chuyển:** $\displaystyle\int_0^3v(t)\,dt=F(3)-F(0)=0$ (chất điểm quay về vị trí ban đầu).`,
    R`**Quãng đường:** $\displaystyle\int_0^1v\,dt+\left|\int_1^3v\,dt\right|=\dfrac43+\left|0-\dfrac43\right|=\dfrac83$ (m).`
   ] }
 ] },
"C4-B13-D01": {
 pp: [
  R`Hình phẳng giới hạn bởi đồ thị $y=f(x)$, trục $Ox$ và hai đường $x=a$, $x=b$ có diện tích $S=\displaystyle\int_a^b|f(x)|\,dx$.`,
  R`**Bước 1.** Giải $f(x)=0$ để tìm các nghiệm trong $[a;b]$. Nếu đề không cho $x=a$, $x=b$ thì hai cận là nghiệm nhỏ nhất và lớn nhất.`,
  R`**Bước 2.** Tách tích phân tại các nghiệm. Trên mỗi đoạn $f$ không đổi dấu nên $\displaystyle\int|f|=\left|\int f\right|$.`,
  R`**Bước 3.** Cộng các kết quả. Vẽ phác đồ thị để thấy phần nào nằm dưới trục $Ox$.`
 ],
 luuY: [
  R`Tính thẳng $\displaystyle\int_a^bf(x)\,dx$ khi $f$ đổi dấu: phần trên và phần dưới trục triệt tiêu nhau, kết quả sai.`,
  R`Diện tích luôn dương; ra số âm là đã quên dấu giá trị tuyệt đối.`
 ],
 vd: [
 { muc: "NB", de: R`Tính diện tích hình phẳng giới hạn bởi đồ thị $y=x^2$, trục hoành và hai đường thẳng $x=0$, $x=2$.`,
   giai: [
    R`Trên $[0;2]$ ta có $x^2\ge0$ nên $S=\displaystyle\int_0^2x^2\,dx$.`,
    R`$S=\dfrac{x^3}3\Big|_0^2=\dfrac83$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1,>=stealth]
\fill[blue!20] (0,0) plot[domain=0:2,samples=60](\x,{\x*\x})--(2,0)--cycle;
\draw[thick,blue,domain=-1.2:2.2,samples=80] plot(\x,{\x*\x});
${TRUC(-1.5,3,-0.5,5)}
\draw[dashed] (2,0)--(2,4); \node[below] at (2,0){$2$};
\node[right] at (2.2,4.6){$y=x^2$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Tính diện tích hình phẳng giới hạn bởi đồ thị $y=x^2-2x$ và trục hoành.`,
   giai: [
    R`$x^2-2x=0\Leftrightarrow x=0$ hoặc $x=2$. Đề không cho đường thẳng nên hai cận là $0$ và $2$.`,
    R`Trên $[0;2]$, $x^2-2x\le0$ (đồ thị nằm dưới trục $Ox$). $\displaystyle\int_0^2(x^2-2x)\,dx=\left(\dfrac{x^3}3-x^2\right)\Big|_0^2=\dfrac83-4=-\dfrac43$.`,
    R`$S=\left|-\dfrac43\right|=\dfrac43$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1.3,>=stealth]
\fill[blue!20] (0,0) plot[domain=0:2,samples=60](\x,{\x*\x-2*\x})--cycle;
\draw[thick,blue,domain=-0.6:2.6,samples=80] plot(\x,{\x*\x-2*\x});
${TRUC(-1,3.2,-1.6,2.2)}
\node[above left] at (2,0){$2$}; \node[right] at (2.6,1.4){$y=x^2-2x$};
\end{tikzpicture}`,
   chuThich: R`Phần tô màu nằm dưới trục $Ox$ nên tích phân âm, diện tích là giá trị tuyệt đối.` },
 { muc: "VD", de: R`Tính diện tích hình phẳng giới hạn bởi đồ thị $y=x^3-x$ và trục hoành.`,
   giai: [
    R`$x^3-x=0\Leftrightarrow x(x-1)(x+1)=0\Leftrightarrow x\in\{-1;0;1\}$.`,
    R`$S=\left|\displaystyle\int_{-1}^0(x^3-x)\,dx\right|+\left|\int_0^1(x^3-x)\,dx\right|$.`,
    R`Một nguyên hàm $F(x)=\dfrac{x^4}4-\dfrac{x^2}2$: $F(-1)=F(1)=-\dfrac14$, $F(0)=0$.`,
    R`$\displaystyle\int_{-1}^0=F(0)-F(-1)=\dfrac14$; $\displaystyle\int_0^1=F(1)-F(0)=-\dfrac14$.`,
    R`$S=\dfrac14+\dfrac14=\dfrac12$. (Nếu tính thẳng $\displaystyle\int_{-1}^1(x^3-x)dx=0$ là sai.)`
   ],
   hinh: R`\begin{tikzpicture}[scale=2,>=stealth]
\fill[blue!20] (-1,0) plot[domain=-1:1,samples=80](\x,{\x*\x*\x-\x})--cycle;
\draw[thick,blue,domain=-1.25:1.25,samples=80] plot(\x,{\x*\x*\x-\x});
${TRUC(-1.6,1.7,-0.8,0.9)}
\node[below right] at (-1,0){$-1$}; \node[above left] at (1,0){$1$};
\end{tikzpicture}`,
   chuThich: R`Hai phần tô màu đối xứng qua $O$, mỗi phần có diện tích $\tfrac14$.` }
 ] },
"C4-B13-D02": {
 pp: [
  R`Hình phẳng giới hạn bởi hai đồ thị $y=f(x)$, $y=g(x)$ và hai đường $x=a$, $x=b$ có diện tích $S=\displaystyle\int_a^b|f(x)-g(x)|\,dx$.`,
  R`**Bước 1.** Giải $f(x)=g(x)$ để tìm hoành độ giao điểm (thường cũng là hai cận khi đề không cho $x=a$, $x=b$).`,
  R`**Bước 2.** Trên mỗi đoạn giữa hai nghiệm liên tiếp, lấy hàm ở trên trừ hàm ở dưới (hoặc lấy giá trị tuyệt đối của tích phân).`,
  R`Nếu hình phẳng có nhiều "ranh giới" khác nhau (ví dụ một bên là đồ thị, một bên là trục $Ox$), chia hình thành từng phần rồi cộng.`
 ],
 luuY: [
  R`Quên tìm giao điểm và lấy nhầm cận.`,
  R`Lấy hàm dưới trừ hàm trên mà không lấy giá trị tuyệt đối.`
 ],
 vd: [
 { muc: "TH", de: R`Tính diện tích hình phẳng giới hạn bởi parabol $y=x^2$ và đường thẳng $y=x+2$.`,
   giai: [
    R`Hoành độ giao điểm: $x^2=x+2\Leftrightarrow x^2-x-2=0\Leftrightarrow x=-1$ hoặc $x=2$.`,
    R`Trên $[-1;2]$ đường thẳng nằm trên parabol (thử $x=0$: $2>0$), nên $S=\displaystyle\int_{-1}^2(x+2-x^2)\,dx$.`,
    R`$S=\left(\dfrac{x^2}2+2x-\dfrac{x^3}3\right)\Big|_{-1}^2=\left(2+4-\dfrac83\right)-\left(\dfrac12-2+\dfrac13\right)=\dfrac{10}3+\dfrac76=\dfrac92$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.9,>=stealth]
\fill[blue!20] (-1,1) plot[domain=-1:2,samples=60](\x,{\x*\x})--cycle;
\draw[thick,blue,domain=-1.6:2.3,samples=80] plot(\x,{\x*\x});
\draw[thick,red] (-1.8,0.2)--(2.4,4.4);
${TRUC(-2,3,-0.6,5.6,1)}
\fill (-1,1) circle (2pt); \fill (2,4) circle (2pt);
\node[below] at (-1,0){$-1$}; \node[below] at (2,0){$2$};
\draw[dashed] (-1,0)--(-1,1); \draw[dashed] (2,0)--(2,4);
\end{tikzpicture}`,
   chuThich: R`Đường màu đỏ $y=x+2$ nằm trên parabol màu xanh $y=x^2$ giữa hai giao điểm.` },
 { muc: "TH", de: R`Tính diện tích hình phẳng giới hạn bởi hai đồ thị $y=x^3$ và $y=x$.`,
   giai: [
    R`$x^3=x\Leftrightarrow x(x^2-1)=0\Leftrightarrow x\in\{-1;0;1\}$.`,
    R`$S=\left|\displaystyle\int_{-1}^0(x^3-x)dx\right|+\left|\int_0^1(x^3-x)dx\right|$.`,
    R`Như ví dụ ở dạng trước: hai tích phân lần lượt bằng $\dfrac14$ và $-\dfrac14$.`,
    R`$S=\dfrac14+\dfrac14=\dfrac12$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1.8,>=stealth]
\fill[blue!20] (-1,-1) plot[domain=-1:1,samples=80](\x,{\x*\x*\x})--(1,1)--cycle;
\draw[thick,blue,domain=-1.15:1.15,samples=80] plot(\x,{\x*\x*\x});
\draw[thick,red] (-1.2,-1.2)--(1.2,1.2);
${TRUC(-1.5,1.6,-1.5,1.6,1)}
\node[right] at (1,0.9){$y=x$}; \node[right] at (-1,-1.45){$y=x^3$};
\end{tikzpicture}`,
   chuThich: R`Hai miền tô màu nằm giữa đường thẳng (đỏ) và đường bậc ba (xanh).` },
 { muc: "VD", de: R`Tính diện tích hình phẳng giới hạn bởi đồ thị $y=\sqrt x$, đường thẳng $y=2-x$ và trục hoành.`,
   giai: [
    R`Giao điểm của $y=\sqrt x$ và $y=2-x$: $\sqrt x=2-x$ ($x\le2$) $\Rightarrow x=4-4x+x^2\Leftrightarrow x^2-5x+4=0\Leftrightarrow x=1$ hoặc $x=4$. Loại $x=4$ (vì $x\le2$). Giao điểm $(1;1)$.`,
    R`$y=\sqrt x$ cắt $Ox$ tại $x=0$; $y=2-x$ cắt $Ox$ tại $x=2$.`,
    R`Nhìn hình: trên $[0;1]$ hình phẳng nằm dưới $y=\sqrt x$; trên $[1;2]$ nằm dưới $y=2-x$. Chia làm hai phần.`,
    R`$S=\displaystyle\int_0^1\sqrt x\,dx+\int_1^2(2-x)\,dx=\dfrac23x\sqrt x\Big|_0^1+\left(2x-\dfrac{x^2}2\right)\Big|_1^2=\dfrac23+\left(2-\dfrac32\right)=\dfrac23+\dfrac12=\dfrac76$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1.6,>=stealth]
\fill[blue!20] (0,0) plot[domain=0:1,samples=60](\x,{sqrt(\x)})--(2,0)--cycle;
\draw[thick,blue,domain=0:2.4,samples=80] plot(\x,{sqrt(\x)});
\draw[thick,red] (0.4,1.6)--(2.3,-0.3);
${TRUC(-0.4,2.7,-0.4,1.9)}
\fill (1,1) circle (1.5pt); \draw[dashed] (1,0)--(1,1);
\node[below] at (1,0){$1$}; \node[below left] at (2,0){$2$};
\node[right] at (2.4,1.55){$y=\sqrt x$}; \node[left] at (0.4,1.6){$y=2-x$};
\end{tikzpicture}`,
   chuThich: R`Đường thẳng $x=1$ (nét đứt) chia hình phẳng thành hai phần.` }
 ] },
"C4-B13-D03": {
 pp: [
  R`**Thể tích vật thể:** cắt vật thể bởi mặt phẳng vuông góc với $Ox$ tại $x$ ($a\le x\le b$), thiết diện có diện tích $S(x)$. Khi đó $V=\displaystyle\int_a^bS(x)\,dx$.`,
  R`**Khối tròn xoay:** quay hình phẳng giới hạn bởi $y=f(x)$, trục $Ox$, $x=a$, $x=b$ quanh trục $Ox$: thiết diện là hình tròn bán kính $|f(x)|$, nên $V=\pi\displaystyle\int_a^bf^2(x)\,dx$.`,
  R`Nếu đề không cho $x=a$, $x=b$ thì giải $f(x)=0$ để tìm cận.`
 ],
 luuY: [
  R`Quên $\pi$ hoặc quên bình phương $f(x)$.`,
  R`Quay hình giữa hai đồ thị $f\ge g\ge0$: $V=\pi\displaystyle\int_a^b(f^2-g^2)\,dx$, không phải $\pi\displaystyle\int_a^b(f-g)^2dx$.`
 ],
 vd: [
 { muc: "NB", de: R`Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=\sqrt x$, trục $Ox$ và đường thẳng $x=4$ quanh trục $Ox$.`,
   giai: [
    R`$\sqrt x=0\Leftrightarrow x=0$, nên hai cận là $0$ và $4$.`,
    R`$V=\pi\displaystyle\int_0^4\left(\sqrt x\right)^2dx=\pi\int_0^4x\,dx=\pi\cdot\dfrac{x^2}2\Big|_0^4=8\pi$.`
   ] },
 { muc: "TH", de: R`Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=2x-x^2$ và trục $Ox$ quanh trục $Ox$.`,
   giai: [
    R`$2x-x^2=0\Leftrightarrow x=0$ hoặc $x=2$.`,
    R`Bình phương: $(2x-x^2)^2=4x^2-4x^3+x^4$.`,
    R`$V=\pi\displaystyle\int_0^2(4x^2-4x^3+x^4)\,dx=\pi\left(\dfrac{4x^3}3-x^4+\dfrac{x^5}5\right)\Big|_0^2=\pi\left(\dfrac{32}3-16+\dfrac{32}5\right)$.`,
    R`Quy đồng mẫu $15$: $\dfrac{160-240+96}{15}=\dfrac{16}{15}$. **Kết quả.** $V=\dfrac{16\pi}{15}$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1.4,>=stealth]
\fill[blue!20] (0,0) plot[domain=0:2,samples=60](\x,{2*\x-\x*\x})--cycle;
\fill[blue!8] (0,0) plot[domain=0:2,samples=60](\x,{-(2*\x-\x*\x)})--cycle;
\draw[thick,blue,domain=0:2,samples=60] plot(\x,{2*\x-\x*\x});
\draw[dashed,blue,domain=0:2,samples=60] plot(\x,{-(2*\x-\x*\x)});
\draw[dashed] (1,0) ellipse (0.18 and 1);
${TRUC(-0.4,2.6,-1.2,1.4)}
\node[below right] at (2,0){$2$};
\end{tikzpicture}`,
   chuThich: R`Quay phần tô đậm quanh $Ox$; mỗi lát cắt tại $x$ là hình tròn bán kính $2x-x^2$ (elip nét đứt).` },
 { muc: "TH", de: R`Một vật thể nằm giữa hai mặt phẳng $x=0$ và $x=3$. Cắt vật thể bởi mặt phẳng vuông góc với $Ox$ tại $x$ ($0\le x\le3$), thiết diện là hình vuông cạnh $\sqrt{9-x^2}$. Tính thể tích vật thể.`,
   giai: [
    R`Diện tích thiết diện: $S(x)=\left(\sqrt{9-x^2}\right)^2=9-x^2$.`,
    R`$V=\displaystyle\int_0^3(9-x^2)\,dx=\left(9x-\dfrac{x^3}3\right)\Big|_0^3=27-9=18$.`
   ] },
 { muc: "VD", de: R`Dùng tích phân, chứng minh thể tích khối cầu bán kính $R$ là $V=\dfrac43\pi R^3$.`,
   giai: [
    R`Đặt khối cầu tâm $O$. Khối cầu được tạo khi quay nửa hình tròn giới hạn bởi $y=\sqrt{R^2-x^2}$ và trục $Ox$ quanh $Ox$, với $-R\le x\le R$.`,
    R`$V=\pi\displaystyle\int_{-R}^R\left(R^2-x^2\right)dx=\pi\left(R^2x-\dfrac{x^3}3\right)\Big|_{-R}^R$.`,
    R`$=\pi\left[\left(R^3-\dfrac{R^3}3\right)-\left(-R^3+\dfrac{R^3}3\right)\right]=\pi\cdot\dfrac{4R^3}3=\dfrac43\pi R^3$.`
   ] }
 ] },
"C4-B13-D04": {
 pp: [
  R`**Bước 1.** Gắn hệ trục toạ độ hợp lí (thường lấy trục đối xứng làm trục $Oy$ hoặc trục quay làm trục $Ox$).`,
  R`**Bước 2.** Viết phương trình đường biên (parabol $y=ax^2+c$, đường thẳng, đường tròn...) từ các số đo đã cho.`,
  R`**Bước 3.** Dùng công thức diện tích $\displaystyle\int|f-g|$ hoặc thể tích $\pi\displaystyle\int f^2$, rồi đổi đơn vị theo yêu cầu (ví dụ $1\text{ dm}^3=1$ lít).`
 ],
 luuY: [
  R`Đặt hệ trục xong nhưng viết sai phương trình parabol: luôn thử lại bằng các điểm đã biết.`,
  R`Quên đổi đơn vị hoặc làm tròn quá sớm.`
 ],
 vd: [
 { muc: "VD", de: R`Một cổng có dạng parabol, chiều cao $4$ m, khoảng cách giữa hai chân cổng là $4$ m. Tính diện tích mặt cổng.`,
   giai: [
    R`Đặt hệ trục: $Ox$ trùng mặt đất, $Oy$ là trục đối xứng của cổng. Hai chân cổng là $(-2;0)$, $(2;0)$, đỉnh là $(0;4)$.`,
    R`Parabol có dạng $y=ax^2+4$. Đi qua $(2;0)$: $4a+4=0\Rightarrow a=-1$. Vậy $y=4-x^2$.`,
    R`$S=\displaystyle\int_{-2}^2(4-x^2)\,dx=\left(4x-\dfrac{x^3}3\right)\Big|_{-2}^2=\left(8-\dfrac83\right)-\left(-8+\dfrac83\right)=\dfrac{32}3\approx10{,}67$ (m²).`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.7,>=stealth]
\fill[blue!20] (-2,0) plot[domain=-2:2,samples=60](\x,{4-\x*\x})--cycle;
\draw[thick,blue,domain=-2:2,samples=60] plot(\x,{4-\x*\x});
${TRUC(-3,3,-0.5,5)}
\node[below] at (-2,0){$-2$}; \node[below] at (2,0){$2$}; \node[above right] at (0,4){$4$};
\end{tikzpicture}` },
 { muc: "VD", de: R`Một chậu cây có dạng khối tròn xoay, tạo thành khi quay hình phẳng giới hạn bởi đường thẳng $y=\dfrac x4+1$, trục $Ox$, $x=0$ và $x=4$ quanh trục $Ox$ (đơn vị dm). Chậu chứa được bao nhiêu lít đất (làm tròn đến hàng phần trăm)?`,
   giai: [
    R`$V=\pi\displaystyle\int_0^4\left(\dfrac x4+1\right)^2dx=\pi\int_0^4\left(\dfrac{x^2}{16}+\dfrac x2+1\right)dx$.`,
    R`$=\pi\left(\dfrac{x^3}{48}+\dfrac{x^2}4+x\right)\Big|_0^4=\pi\left(\dfrac{64}{48}+4+4\right)=\pi\left(\dfrac43+8\right)=\dfrac{28\pi}3$ (dm³).`,
    R`Đổi đơn vị: $1$ dm³ $=1$ lít, nên $V=\dfrac{28\pi}3\approx29{,}32$ lít.`,
    R`Kiểm tra: chậu là khối nón cụt bán kính đáy $1$ và $2$, cao $4$: $V=\dfrac{\pi\cdot4}3(1^2+1\cdot2+2^2)=\dfrac{28\pi}3$ ✓.`
   ] },
 { muc: "VD", de: R`Một mảnh vườn hình elip có trục lớn $8$ m, trục nhỏ $4$ m. Elip có phương trình $\dfrac{x^2}{16}+\dfrac{y^2}4=1$. Tính diện tích mảnh vườn.`,
   giai: [
    R`Phần elip ở góc phần tư thứ nhất nằm dưới đồ thị $y=\dfrac12\sqrt{16-x^2}$, $0\le x\le4$. Do đối xứng: $S=4\displaystyle\int_0^4\dfrac12\sqrt{16-x^2}\,dx=2\int_0^4\sqrt{16-x^2}\,dx$.`,
    R`Theo ý nghĩa hình học, $\displaystyle\int_0^4\sqrt{16-x^2}\,dx$ là diện tích một phần tư hình tròn bán kính $4$: $\dfrac14\pi\cdot16=4\pi$.`,
    R`$S=2\cdot4\pi=8\pi\approx25{,}13$ (m²). (Khớp công thức $S=\pi ab=\pi\cdot4\cdot2$.)`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.6,>=stealth]
\fill[blue!20] (0,0) ellipse (4 and 2);
\draw[thick,blue] (0,0) ellipse (4 and 2);
${TRUC(-4.8,4.9,-2.6,2.8)}
\node[below right] at (4,0){$4$}; \node[above right] at (0,2){$2$};
\end{tikzpicture}` }
 ] }
});
})(window);
