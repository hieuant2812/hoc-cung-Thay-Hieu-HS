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
})(window);
