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
})(window);
