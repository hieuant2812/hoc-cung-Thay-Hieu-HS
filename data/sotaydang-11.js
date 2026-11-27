/* Sổ tay theo DẠNG ngân hàng – Toán 11. SOTAYDANG["11"][dkey] = {
     pp: [các bước phương pháp], luuY: [sai lầm thường gặp],
     vd: [{ muc: NB|TH|VD|VDC, de: đề, giai: [từng bước giải], hinh: tikzpicture (tuỳ chọn), chuThich }] }
   Viết bằng LaTeX như ngân hàng: $...$, $$...$$, BBT bằng \tkzTabInit/\tkzTabLine/\tkzTabVar, hình bằng tikzpicture.
   Mọi đáp số đã được kiểm lại bằng máy. Tên dạng lấy ở data/sotaydang-ten.js. */
(function (G) {
const D = (G.SOTAYDANG = G.SOTAYDANG || {})["11"] = (G.SOTAYDANG["11"] || {});
const R = String.raw;
/* ---------- Chương I · Hàm số lượng giác và phương trình lượng giác ---------- */
Object.assign(D, {
"C1-B1-D01": {
 pp: [
  R`**Đổi đơn vị:** $180^\circ=\pi$ rad. Vậy $a^\circ=\dfrac{a\pi}{180}$ rad và $\alpha$ rad $=\left(\dfrac{180\alpha}{\pi}\right)^\circ$.`,
  R`**Độ dài cung** có số đo $\alpha$ rad trên đường tròn bán kính $R$: $l=R\alpha$ (nhớ đổi sang radian trước).`,
  R`**Số đo góc lượng giác** $(Ou,Ov)$ có dạng $\alpha+k2\pi$ (hoặc $a^\circ+k360^\circ$), $k\in\mathbb Z$. Hai góc hơn kém nhau một số nguyên lần $2\pi$ có cùng điểm biểu diễn trên đường tròn lượng giác.`,
  R`Muốn tìm điểm biểu diễn của góc lớn: trừ đi (hoặc cộng thêm) bội của $2\pi$ (hay $360^\circ$) để đưa về góc quen thuộc.`
 ],
 luuY: [
  R`Dùng số đo độ trong công thức $l=R\alpha$ (phải dùng radian).`,
  R`Kim đồng hồ quay theo chiều âm (cùng chiều kim đồng hồ), nên số đo góc lượng giác của nó mang dấu âm.`
 ],
 vd: [
 { muc: "NB", de: R`Đổi $135^\circ$ sang radian và đổi $\dfrac{7\pi}{6}$ sang độ.`,
   giai: [
    R`$135^\circ=\dfrac{135\pi}{180}=\dfrac{3\pi}4$ rad.`,
    R`$\dfrac{7\pi}6$ rad $=\dfrac{7\cdot180^\circ}{6}=210^\circ$.`
   ] },
 { muc: "TH", de: R`Kim phút của một đồng hồ dài $10$ cm. Trong $20$ phút, đầu kim phút vạch nên một cung tròn dài bao nhiêu (làm tròn đến hàng phần trăm)?`,
   giai: [
    R`$60$ phút kim phút quay một vòng ($2\pi$ rad), nên $20$ phút quay $\dfrac{20}{60}\cdot2\pi=\dfrac{2\pi}3$ rad.`,
    R`$l=R\alpha=10\cdot\dfrac{2\pi}3=\dfrac{20\pi}3\approx20{,}94$ (cm).`
   ] },
 { muc: "TH", de: R`Xác định điểm biểu diễn trên đường tròn lượng giác của các góc $1125^\circ$ và $-765^\circ$.`,
   giai: [
    R`$1125^\circ=45^\circ+3\cdot360^\circ$, nên có cùng điểm biểu diễn với góc $45^\circ$ (điểm chính giữa cung phần tư thứ nhất).`,
    R`$-765^\circ=-45^\circ-2\cdot360^\circ$, nên có cùng điểm biểu diễn với góc $-45^\circ$ (điểm chính giữa cung phần tư thứ tư).`
   ] },
 { muc: "VD", de: R`Biểu diễn trên đường tròn lượng giác các góc $\alpha=\dfrac\pi4+k\dfrac\pi2$ ($k\in\mathbb Z$). Các điểm đó tạo thành hình gì?`,
   giai: [
    R`Cho $k=0,1,2,3$: $\alpha=\dfrac\pi4,\ \dfrac{3\pi}4,\ \dfrac{5\pi}4,\ \dfrac{7\pi}4$. Với $k=4$ ta được $\dfrac\pi4+2\pi$, trùng điểm với $k=0$; các $k$ khác cũng lặp lại.`,
    R`Có đúng $4$ điểm, hai điểm liên tiếp cách nhau một góc $\dfrac\pi2$ nên chúng là bốn đỉnh của một **hình vuông** nội tiếp đường tròn lượng giác.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1.6,>=stealth]
\draw[->] (-1.4,0)--(1.5,0) node[below]{$x$};
\draw[->] (0,-1.4)--(0,1.5) node[left]{$y$};
\draw (0,0) circle (1);
\draw[thick,blue] (0.707,0.707)--(-0.707,0.707)--(-0.707,-0.707)--(0.707,-0.707)--cycle;
\fill (0.707,0.707) circle (1.2pt) node[above right]{$\frac\pi4$};
\fill (-0.707,0.707) circle (1.2pt) node[above left]{$\frac{3\pi}4$};
\fill (-0.707,-0.707) circle (1.2pt) node[below left]{$\frac{5\pi}4$};
\fill (0.707,-0.707) circle (1.2pt) node[below right]{$\frac{7\pi}4$};
\node[below right] at (1,0){$A$};
\end{tikzpicture}`,
   chuThich: R`Bốn điểm biểu diễn là bốn đỉnh của hình vuông.` }
 ] },
"C1-B1-D02": {
 pp: [
  R`Trên đường tròn lượng giác, điểm $M$ biểu diễn góc $\alpha$ có toạ độ $(\cos\alpha;\sin\alpha)$. $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$, $\cot\alpha=\dfrac{\cos\alpha}{\sin\alpha}$.`,
  R`**Hệ thức cơ bản:** $\sin^2\alpha+\cos^2\alpha=1$; $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$; $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$; $\tan\alpha\cdot\cot\alpha=1$.`,
  R`**Dấu:** xác định góc phần tư chứa điểm $M$ rồi xét dấu hoành độ ($\cos$) và tung độ ($\sin$).`,
  R`**Góc có liên quan đặc biệt:** góc đối ($-\alpha$): $\cos$ bằng nhau; góc bù ($\pi-\alpha$): $\sin$ bằng nhau; hơn kém $\pi$: $\tan$, $\cot$ bằng nhau; góc phụ ($\frac\pi2-\alpha$): $\sin$ góc này bằng $\cos$ góc kia. Các giá trị còn lại đối nhau ("cos đối, sin bù, phụ chéo, hơn kém $\pi$ tan, cot").`
 ],
 luuY: [
  R`Khai căn mà quên xét dấu theo góc phần tư.`,
  R`Nhớ nhầm: $\sin(\pi+\alpha)=-\sin\alpha$, $\cos(\pi-\alpha)=-\cos\alpha$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho $\sin\alpha=\dfrac35$ với $\dfrac\pi2<\alpha<\pi$. Tính $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.`,
   giai: [
    R`$\cos^2\alpha=1-\sin^2\alpha=1-\dfrac9{25}=\dfrac{16}{25}$.`,
    R`Vì $\dfrac\pi2<\alpha<\pi$ (góc phần tư thứ hai) nên $\cos\alpha<0$: $\cos\alpha=-\dfrac45$.`,
    R`$\tan\alpha=\dfrac{3/5}{-4/5}=-\dfrac34$; $\cot\alpha=-\dfrac43$.`
   ] },
 { muc: "TH", de: R`Cho $\tan\alpha=2$ với $\pi<\alpha<\dfrac{3\pi}2$. Tính $\cos\alpha$, $\sin\alpha$.`,
   giai: [
    R`$\dfrac1{\cos^2\alpha}=1+\tan^2\alpha=5\Rightarrow\cos^2\alpha=\dfrac15$.`,
    R`Góc phần tư thứ ba nên $\cos\alpha<0$: $\cos\alpha=-\dfrac1{\sqrt5}$.`,
    R`$\sin\alpha=\tan\alpha\cdot\cos\alpha=2\cdot\left(-\dfrac1{\sqrt5}\right)=-\dfrac2{\sqrt5}$ (âm, đúng với góc phần tư thứ ba).`
   ] },
 { muc: "TH", de: R`Rút gọn $A=\sin(\pi-x)+\cos\left(\dfrac\pi2-x\right)-\sin(\pi+x)$.`,
   giai: [
    R`$\sin(\pi-x)=\sin x$ (góc bù); $\cos\left(\dfrac\pi2-x\right)=\sin x$ (góc phụ); $\sin(\pi+x)=-\sin x$ (hơn kém $\pi$).`,
    R`$A=\sin x+\sin x-(-\sin x)=3\sin x$.`
   ] },
 { muc: "VD", de: R`Tính $\sin\dfrac{17\pi}6$, $\cos\left(-\dfrac{11\pi}3\right)$, $\tan\dfrac{13\pi}4$.`,
   giai: [
    R`$\dfrac{17\pi}6=\dfrac{5\pi}6+2\pi$ nên $\sin\dfrac{17\pi}6=\sin\dfrac{5\pi}6=\sin\dfrac\pi6=\dfrac12$.`,
    R`$\cos\left(-\dfrac{11\pi}3\right)=\cos\dfrac{11\pi}3$; $\dfrac{11\pi}3=-\dfrac\pi3+4\pi$ nên $\cos\dfrac{11\pi}3=\cos\left(-\dfrac\pi3\right)=\dfrac12$.`,
    R`$\tan$ có chu kì $\pi$: $\dfrac{13\pi}4=\dfrac\pi4+3\pi$, nên $\tan\dfrac{13\pi}4=\tan\dfrac\pi4=1$.`
   ] },
 { muc: "VD", de: R`Cho $\tan\alpha=3$. Tính $B=\dfrac{\sin\alpha+\cos\alpha}{\sin\alpha-\cos\alpha}$.`,
   giai: [
    R`$\tan\alpha=3$ nên $\cos\alpha\ne0$. Chia cả tử và mẫu cho $\cos\alpha$: $B=\dfrac{\tan\alpha+1}{\tan\alpha-1}$.`,
    R`$B=\dfrac{3+1}{3-1}=2$.`
   ] }
 ] },
"C1-B2-D03": {
 pp: [
  R`**Công thức cộng:** $\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$; $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$; $\tan(a\pm b)=\dfrac{\tan a\pm\tan b}{1\mp\tan a\tan b}$.`,
  R`**Nhân đôi:** $\sin2a=2\sin a\cos a$; $\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a$; $\tan2a=\dfrac{2\tan a}{1-\tan^2a}$.`,
  R`**Hạ bậc:** $\cos^2a=\dfrac{1+\cos2a}2$; $\sin^2a=\dfrac{1-\cos2a}2$.`,
  R`Tính giá trị góc "lạ" (như $15^\circ$, $75^\circ$, $\frac\pi8$): viết thành tổng/hiệu các góc đặc biệt, hoặc dùng hạ bậc.`
 ],
 luuY: [
  R`Nhầm dấu: $\cos(a+b)$ có dấu **trừ** ở giữa.`,
  R`$\sin2a\ne2\sin a$.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $\cos75^\circ$.`,
   giai: [
    R`$\cos75^\circ=\cos(45^\circ+30^\circ)=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ$.`,
    R`$=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2-\dfrac{\sqrt2}2\cdot\dfrac12=\dfrac{\sqrt6-\sqrt2}4$.`
   ] },
 { muc: "TH", de: R`Cho $\sin\alpha=\dfrac45$, $0<\alpha<\dfrac\pi2$. Tính $\sin2\alpha$ và $\cos2\alpha$.`,
   giai: [
    R`$\cos\alpha>0$ nên $\cos\alpha=\sqrt{1-\dfrac{16}{25}}=\dfrac35$.`,
    R`$\sin2\alpha=2\cdot\dfrac45\cdot\dfrac35=\dfrac{24}{25}$.`,
    R`$\cos2\alpha=1-2\sin^2\alpha=1-\dfrac{32}{25}=-\dfrac7{25}$.`
   ] },
 { muc: "TH", de: R`Cho $\tan\alpha=\dfrac12$. Tính $\tan\left(\alpha+\dfrac\pi4\right)$.`,
   giai: [
    R`$\tan\left(\alpha+\dfrac\pi4\right)=\dfrac{\tan\alpha+1}{1-\tan\alpha\cdot1}=\dfrac{\frac12+1}{1-\frac12}=\dfrac{3/2}{1/2}=3$.`
   ] },
 { muc: "VD", de: R`Rút gọn $C=\dfrac{1-\cos2x}{\sin2x}$ (với $\sin2x\ne0$).`,
   giai: [
    R`$1-\cos2x=2\sin^2x$; $\sin2x=2\sin x\cos x$.`,
    R`$C=\dfrac{2\sin^2x}{2\sin x\cos x}=\dfrac{\sin x}{\cos x}=\tan x$.`
   ] },
 { muc: "VD", de: R`Tính $\cos^2\dfrac\pi8$ và $\cos\dfrac\pi8$.`,
   giai: [
    R`Hạ bậc: $\cos^2\dfrac\pi8=\dfrac{1+\cos\frac\pi4}2=\dfrac{1+\frac{\sqrt2}2}2=\dfrac{2+\sqrt2}4$.`,
    R`Vì $0<\dfrac\pi8<\dfrac\pi2$ nên $\cos\dfrac\pi8>0$: $\cos\dfrac\pi8=\dfrac{\sqrt{2+\sqrt2}}2$.`
   ] }
 ] },
"C1-B2-D04": {
 pp: [
  R`**Tích thành tổng:** $\cos a\cos b=\dfrac12[\cos(a-b)+\cos(a+b)]$; $\sin a\sin b=\dfrac12[\cos(a-b)-\cos(a+b)]$; $\sin a\cos b=\dfrac12[\sin(a-b)+\sin(a+b)]$.`,
  R`**Tổng thành tích:** $\cos a+\cos b=2\cos\dfrac{a+b}2\cos\dfrac{a-b}2$; $\cos a-\cos b=-2\sin\dfrac{a+b}2\sin\dfrac{a-b}2$; $\sin a+\sin b=2\sin\dfrac{a+b}2\cos\dfrac{a-b}2$; $\sin a-\sin b=2\cos\dfrac{a+b}2\sin\dfrac{a-b}2$.`,
  R`Dùng khi tính giá trị tích/tổng các góc không đặc biệt, rút gọn phân thức (tử và mẫu cùng xuất hiện nhân tử chung), hoặc chứng minh đẳng thức.`
 ],
 luuY: [
  R`Quên dấu trừ ở công thức $\cos a-\cos b$.`,
  R`Quên hệ số $\dfrac12$ khi chuyển tích thành tổng.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $\cos75^\circ\cos15^\circ$.`,
   giai: [
    R`$\cos75^\circ\cos15^\circ=\dfrac12[\cos60^\circ+\cos90^\circ]=\dfrac12\left(\dfrac12+0\right)=\dfrac14$.`
   ] },
 { muc: "TH", de: R`Tính $\sin75^\circ+\sin15^\circ$.`,
   giai: [
    R`$=2\sin\dfrac{75^\circ+15^\circ}2\cos\dfrac{75^\circ-15^\circ}2=2\sin45^\circ\cos30^\circ$.`,
    R`$=2\cdot\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2=\dfrac{\sqrt6}2$.`
   ] },
 { muc: "TH", de: R`Rút gọn $E=\dfrac{\sin x+\sin3x}{\cos x+\cos3x}$.`,
   giai: [
    R`Tử: $\sin3x+\sin x=2\sin2x\cos x$. Mẫu: $\cos3x+\cos x=2\cos2x\cos x$.`,
    R`$E=\dfrac{2\sin2x\cos x}{2\cos2x\cos x}=\tan2x$ (với các giá trị $x$ làm mẫu khác $0$).`
   ] },
 { muc: "VD", de: R`Chứng minh $\cos20^\circ\cos40^\circ\cos80^\circ=\dfrac18$.`,
   giai: [
    R`Gọi $P=\cos20^\circ\cos40^\circ\cos80^\circ$. Nhân hai vế với $\sin20^\circ\ (\ne0)$ và dùng $\sin a\cos a=\dfrac12\sin2a$ liên tiếp:`,
    R`$P\sin20^\circ=\dfrac12\sin40^\circ\cos40^\circ\cos80^\circ=\dfrac14\sin80^\circ\cos80^\circ=\dfrac18\sin160^\circ$.`,
    R`$\sin160^\circ=\sin(180^\circ-20^\circ)=\sin20^\circ$, nên $P\sin20^\circ=\dfrac18\sin20^\circ\Rightarrow P=\dfrac18$.`
   ] }
 ] },
"C1-B3-D05": {
 pp: [
  R`**Tập xác định:** $y=\sin x$, $y=\cos x$: $D=\mathbb R$; $y=\tan x$: $x\ne\dfrac\pi2+k\pi$; $y=\cot x$: $x\ne k\pi$. Với biểu thức có mẫu, căn: thêm điều kiện mẫu khác $0$, biểu thức dưới căn không âm.`,
  R`**Chẵn, lẻ:** kiểm tra $D$ đối xứng ($x\in D\Rightarrow-x\in D$); tính $f(-x)$. Bằng $f(x)$: hàm chẵn; bằng $-f(x)$: hàm lẻ. Nhớ: $\cos$ chẵn; $\sin$, $\tan$, $\cot$ lẻ.`,
  R`**Tuần hoàn:** $\sin$, $\cos$ có chu kì $2\pi$; $\tan$, $\cot$ có chu kì $\pi$. Hàm $y=\sin(ax+b)$, $y=\cos(ax+b)$ có chu kì $\dfrac{2\pi}{|a|}$; $y=\tan(ax+b)$, $y=\cot(ax+b)$ có chu kì $\dfrac\pi{|a|}$.`,
  R`Muốn chứng tỏ hàm số không chẵn, không lẻ: chỉ ra một giá trị $x_0$ cụ thể để $f(-x_0)\ne f(x_0)$ và $f(-x_0)\ne-f(x_0)$.`
 ],
 luuY: [
  R`Quên điều kiện $D$ đối xứng khi xét chẵn lẻ.`,
  R`Viết chu kì của $\sin3x$ là $3\cdot2\pi$ (phải là $\dfrac{2\pi}3$).`
 ],
 vd: [
 { muc: "NB", de: R`Tìm tập xác định của hàm số $y=\tan\left(2x-\dfrac\pi3\right)$.`,
   giai: [
    R`Điều kiện: $2x-\dfrac\pi3\ne\dfrac\pi2+k\pi\Leftrightarrow2x\ne\dfrac{5\pi}6+k\pi\Leftrightarrow x\ne\dfrac{5\pi}{12}+k\dfrac\pi2$.`,
    R`$D=\mathbb R\setminus\left\{\dfrac{5\pi}{12}+k\dfrac\pi2\mid k\in\mathbb Z\right\}$.`
   ] },
 { muc: "TH", de: R`Tìm tập xác định của $y=\dfrac{1}{\sin x-1}$ và $y=\sqrt{1-\cos x}$.`,
   giai: [
    R`$y=\dfrac1{\sin x-1}$: cần $\sin x\ne1\Leftrightarrow x\ne\dfrac\pi2+k2\pi$. $D=\mathbb R\setminus\left\{\dfrac\pi2+k2\pi\mid k\in\mathbb Z\right\}$.`,
    R`$y=\sqrt{1-\cos x}$: cần $1-\cos x\ge0$, luôn đúng vì $\cos x\le1$. $D=\mathbb R$.`
   ] },
 { muc: "TH", de: R`Xét tính chẵn, lẻ của: a) $f(x)=x^2\cos x$; b) $g(x)=\sin x+\tan x$; c) $h(x)=\sin x+\cos x$.`,
   giai: [
    R`a) $D=\mathbb R$ đối xứng; $f(-x)=(-x)^2\cos(-x)=x^2\cos x=f(x)$: hàm chẵn.`,
    R`b) $D=\mathbb R\setminus\left\{\frac\pi2+k\pi\right\}$ đối xứng; $g(-x)=-\sin x-\tan x=-g(x)$: hàm lẻ.`,
    R`c) $h\left(\frac\pi4\right)=\sqrt2$, $h\left(-\frac\pi4\right)=-\frac{\sqrt2}2+\frac{\sqrt2}2=0$. Giá trị này khác $h\left(\frac\pi4\right)$ và khác $-h\left(\frac\pi4\right)$: hàm không chẵn, không lẻ.`
   ] },
 { muc: "VD", de: R`Tìm chu kì của các hàm số $y=\sin3x$ và $y=\cos\dfrac x2$.`,
   giai: [
    R`$y=\sin3x$: $T=\dfrac{2\pi}3$. Thật vậy, $\sin\left(3\left(x+\frac{2\pi}3\right)\right)=\sin(3x+2\pi)=\sin3x$.`,
    R`$y=\cos\dfrac x2$: $T=\dfrac{2\pi}{1/2}=4\pi$. Thật vậy, $\cos\dfrac{x+4\pi}2=\cos\left(\dfrac x2+2\pi\right)=\cos\dfrac x2$.`
   ] }
 ] },
"C1-B3-D06": {
 pp: [
  R`Dùng bất đẳng thức cơ bản: $-1\le\sin x\le1$, $-1\le\cos x\le1$, $0\le\sin^2x\le1$, $0\le\cos^2x\le1$. Biến đổi dần để chặn $y$.`,
  R`**Dạng $a\sin x+b\cos x$:** viết thành $\sqrt{a^2+b^2}\sin(x+\varphi)$, nên tập giá trị là $\left[-\sqrt{a^2+b^2};\sqrt{a^2+b^2}\right]$.`,
  R`**Dạng bậc hai theo $\sin x$ (hoặc $\cos x$):** đặt $t=\sin x$, $t\in[-1;1]$, tìm GTLN, GTNN của hàm bậc hai trên đoạn $[-1;1]$.`,
  R`Luôn chỉ ra giá trị $x$ để dấu "=" xảy ra.`
 ],
 luuY: [
  R`Nhân bất đẳng thức với số âm mà không đổi chiều.`,
  R`Đặt $t=\sin x$ nhưng quên điều kiện $t\in[-1;1]$.`
 ],
 vd: [
 { muc: "NB", de: R`Tìm GTLN, GTNN của $y=3-2\cos x$.`,
   giai: [
    R`$-1\le\cos x\le1\Rightarrow-2\le-2\cos x\le2$ (nhân $-2$, đổi chiều) $\Rightarrow1\le y\le5$.`,
    R`$y=5$ khi $\cos x=-1\Leftrightarrow x=\pi+k2\pi$; $y=1$ khi $\cos x=1\Leftrightarrow x=k2\pi$.`,
    R`**Kết luận.** $\max y=5$, $\min y=1$.`
   ] },
 { muc: "TH", de: R`Tìm tập giá trị của $y=\sin x+\sqrt3\cos x$.`,
   giai: [
    R`$y=2\left(\dfrac12\sin x+\dfrac{\sqrt3}2\cos x\right)=2\left(\sin x\cos\dfrac\pi3+\cos x\sin\dfrac\pi3\right)=2\sin\left(x+\dfrac\pi3\right)$.`,
    R`Vì $-1\le\sin\left(x+\frac\pi3\right)\le1$ nên $-2\le y\le2$. Tập giá trị $[-2;2]$.`,
    R`Ví dụ $y=2$ khi $x+\dfrac\pi3=\dfrac\pi2$, tức $x=\dfrac\pi6$: thử lại $\dfrac12+\sqrt3\cdot\dfrac{\sqrt3}2=2$ ✓.`
   ] },
 { muc: "VD", de: R`Tìm GTLN, GTNN của $y=\cos^2x-2\sin x$.`,
   giai: [
    R`$\cos^2x=1-\sin^2x$. Đặt $t=\sin x$, $t\in[-1;1]$: $y=1-t^2-2t=2-(t+1)^2$.`,
    R`Trên $[-1;1]$: $(t+1)^2$ nhỏ nhất bằng $0$ khi $t=-1$, lớn nhất bằng $4$ khi $t=1$.`,
    R`$\max y=2$ khi $\sin x=-1\Leftrightarrow x=-\dfrac\pi2+k2\pi$; $\min y=2-4=-2$ khi $\sin x=1\Leftrightarrow x=\dfrac\pi2+k2\pi$.`
   ] },
 { muc: "VD", de: R`Độ cao (mét) của một cabin vòng quay so với mặt đất sau $t$ phút là $h(t)=30-25\cos\dfrac{\pi t}{15}$. Cabin lên cao nhất là bao nhiêu mét và lần đầu tiên đạt độ cao đó sau bao nhiêu phút?`,
   giai: [
    R`$-1\le\cos\dfrac{\pi t}{15}\le1\Rightarrow5\le h(t)\le55$.`,
    R`$h=55$ khi $\cos\dfrac{\pi t}{15}=-1\Leftrightarrow\dfrac{\pi t}{15}=\pi+k2\pi\Leftrightarrow t=15+30k$.`,
    R`Lần đầu ($t>0$ nhỏ nhất): $t=15$ phút. **Kết luận.** Cao nhất $55$ m, sau $15$ phút. (Lúc $t=0$, cabin ở thấp nhất $5$ m; một vòng mất $30$ phút.)`
   ],
   hinh: R`\begin{tikzpicture}[xscale=0.1,yscale=0.04,>=stealth]
\draw[->] (0,0)--(66,0) node[below]{$t$};
\draw[->] (0,0)--(0,72) node[left]{$h$};
\draw[thick,blue,domain=0:60,samples=120] plot(\x,{30-25*cos(12*\x)});
\draw[dashed] (15,0)--(15,55)--(0,55);
\node[left] at (0,55){$55$}; \node[left] at (0,5){$5$};
\node[below] at (15,0){$15$}; \node[below] at (30,0){$30$}; \node[below] at (45,0){$45$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Đồ thị $h(t)$ trong $60$ phút đầu (hai vòng quay).` }
 ] },
"C1-B4-D07": {
 pp: [
  R`**Phương trình $\sin x=a$:** nếu $|a|>1$ thì vô nghiệm. Nếu $|a|\le1$, tìm $\alpha$ với $\sin\alpha=a$: $\sin x=\sin\alpha\Leftrightarrow\left[\begin{array}{l}x=\alpha+k2\pi\\x=\pi-\alpha+k2\pi\end{array}\right.$`,
  R`**Phương trình $\cos x=a$:** nếu $|a|>1$ vô nghiệm. Nếu $|a|\le1$, tìm $\alpha$ với $\cos\alpha=a$: $\cos x=\cos\alpha\Leftrightarrow x=\pm\alpha+k2\pi$.`,
  R`**Trường hợp đặc biệt:** $\sin x=0\Leftrightarrow x=k\pi$; $\sin x=\pm1\Leftrightarrow x=\pm\dfrac\pi2+k2\pi$; $\cos x=0\Leftrightarrow x=\dfrac\pi2+k\pi$; $\cos x=1\Leftrightarrow x=k2\pi$; $\cos x=-1\Leftrightarrow x=\pi+k2\pi$.`,
  R`**Dạng $\sin u=\sin v$**, $\cos u=\cos v$: áp dụng công thức trên với $u$, $v$ là biểu thức. Dạng $\sin u=\cos v$: đổi $\cos v=\sin\left(\frac\pi2-v\right)$.`
 ],
 luuY: [
  R`Thiếu họ nghiệm thứ hai $x=\pi-\alpha+k2\pi$ của phương trình $\sin x=a$.`,
  R`Chia cả hai vế cho hệ số của $x$ nhưng quên chia cả $k2\pi$.`
 ],
 vd: [
 { muc: "NB", de: R`Giải phương trình $\sin x=\dfrac12$.`,
   giai: [
    R`$\dfrac12=\sin\dfrac\pi6$, nên $\sin x=\sin\dfrac\pi6$.`,
    R`$\Leftrightarrow x=\dfrac\pi6+k2\pi$ hoặc $x=\pi-\dfrac\pi6+k2\pi=\dfrac{5\pi}6+k2\pi$ ($k\in\mathbb Z$).`
   ] },
 { muc: "TH", de: R`Giải phương trình $\cos\left(2x-\dfrac\pi3\right)=-\dfrac{\sqrt2}2$.`,
   giai: [
    R`$-\dfrac{\sqrt2}2=\cos\dfrac{3\pi}4$. Phương trình $\Leftrightarrow2x-\dfrac\pi3=\pm\dfrac{3\pi}4+k2\pi$.`,
    R`$\Leftrightarrow2x=\dfrac\pi3\pm\dfrac{3\pi}4+k2\pi\Leftrightarrow x=\dfrac\pi6\pm\dfrac{3\pi}8+k\pi$.`,
    R`**Kết quả.** $x=\dfrac{13\pi}{24}+k\pi$ hoặc $x=-\dfrac{5\pi}{24}+k\pi$ ($k\in\mathbb Z$).`
   ] },
 { muc: "TH", de: R`Giải phương trình $\sin3x=\sin x$.`,
   giai: [
    R`$\sin3x=\sin x\Leftrightarrow\left[\begin{array}{l}3x=x+k2\pi\\3x=\pi-x+k2\pi\end{array}\right.\Leftrightarrow\left[\begin{array}{l}x=k\pi\\x=\dfrac\pi4+k\dfrac\pi2\end{array}\right.$ ($k\in\mathbb Z$).`
   ] },
 { muc: "VD", de: R`Tìm các nghiệm thuộc đoạn $[0;\pi]$ của phương trình $\sin2x=\cos x$.`,
   giai: [
    R`$\cos x=\sin\left(\dfrac\pi2-x\right)$. Phương trình $\Leftrightarrow\sin2x=\sin\left(\dfrac\pi2-x\right)$.`,
    R`$2x=\dfrac\pi2-x+k2\pi\Leftrightarrow x=\dfrac\pi6+k\dfrac{2\pi}3$; hoặc $2x=\pi-\dfrac\pi2+x+k2\pi\Leftrightarrow x=\dfrac\pi2+k2\pi$.`,
    R`Trong $[0;\pi]$: họ thứ nhất cho $x=\dfrac\pi6$ ($k=0$), $x=\dfrac{5\pi}6$ ($k=1$); họ thứ hai cho $x=\dfrac\pi2$.`,
    R`**Kết quả.** $x\in\left\{\dfrac\pi6;\dfrac\pi2;\dfrac{5\pi}6\right\}$. Thử $x=\dfrac{5\pi}6$: $\sin\dfrac{5\pi}3=-\dfrac{\sqrt3}2=\cos\dfrac{5\pi}6$ ✓.`
   ] }
 ] },
"C1-B4-D08": {
 pp: [
  R`**$\tan x=a$** (điều kiện $x\ne\frac\pi2+k\pi$): tìm $\alpha$ với $\tan\alpha=a$, khi đó $x=\alpha+k\pi$. **$\cot x=a$** (điều kiện $x\ne k\pi$): $x=\alpha+k\pi$ với $\cot\alpha=a$.`,
  R`**Quy về phương trình cơ bản:** đặt nhân tử chung đưa về phương trình tích; dùng công thức nhân đôi, hạ bậc; hoặc đặt ẩn phụ $t=\sin x$ ($|t|\le1$), $t=\cos x$, $t=\tan x$ để được phương trình bậc hai.`,
  R`Với phương trình có $\tan$, $\cot$ hoặc mẫu số: đặt điều kiện trước, kiểm tra nghiệm sau.`
 ],
 luuY: [
  R`Chu kì của $\tan$ là $\pi$: viết $x=\alpha+k2\pi$ là thiếu nghiệm.`,
  R`Chia hai vế cho $\cos x$ (hoặc $\sin x$) làm mất nghiệm $\cos x=0$.`
 ],
 vd: [
 { muc: "NB", de: R`Giải phương trình $\tan x=\sqrt3$.`,
   giai: [
    R`$\sqrt3=\tan\dfrac\pi3$, nên $x=\dfrac\pi3+k\pi$ ($k\in\mathbb Z$).`
   ] },
 { muc: "TH", de: R`Giải phương trình $\cot\left(x+\dfrac\pi6\right)=-1$.`,
   giai: [
    R`$-1=\cot\dfrac{3\pi}4$. Phương trình $\Leftrightarrow x+\dfrac\pi6=\dfrac{3\pi}4+k\pi\Leftrightarrow x=\dfrac{7\pi}{12}+k\pi$ ($k\in\mathbb Z$).`
   ] },
 { muc: "TH", de: R`Giải phương trình $\sin2x-\cos x=0$.`,
   giai: [
    R`$2\sin x\cos x-\cos x=0\Leftrightarrow\cos x(2\sin x-1)=0$.`,
    R`$\cos x=0\Leftrightarrow x=\dfrac\pi2+k\pi$.`,
    R`$\sin x=\dfrac12\Leftrightarrow x=\dfrac\pi6+k2\pi$ hoặc $x=\dfrac{5\pi}6+k2\pi$.`
   ] },
 { muc: "VD", de: R`Giải phương trình $2\sin^2x-3\sin x+1=0$.`,
   giai: [
    R`Đặt $t=\sin x$, $-1\le t\le1$: $2t^2-3t+1=0\Leftrightarrow t=1$ hoặc $t=\dfrac12$ (đều thoả mãn).`,
    R`$\sin x=1\Leftrightarrow x=\dfrac\pi2+k2\pi$.`,
    R`$\sin x=\dfrac12\Leftrightarrow x=\dfrac\pi6+k2\pi$ hoặc $x=\dfrac{5\pi}6+k2\pi$.`
   ] },
 { muc: "VD", de: R`Giải phương trình $\tan2x=\tan x$.`,
   giai: [
    R`Điều kiện: $\cos2x\ne0$ và $\cos x\ne0$.`,
    R`$\tan2x=\tan x\Leftrightarrow2x=x+k\pi\Leftrightarrow x=k\pi$.`,
    R`Kiểm tra điều kiện: $\cos(k\pi)=\pm1\ne0$, $\cos(2k\pi)=1\ne0$: thoả mãn.`,
    R`**Kết quả.** $x=k\pi$ ($k\in\mathbb Z$).`
   ] }
 ] }
});
/* ---------- Chương II · Dãy số, cấp số cộng, cấp số nhân ---------- */
Object.assign(D, {
"C2-B5-D09": {
 pp: [
  R`**Cách cho dãy số:** bằng công thức số hạng tổng quát $u_n=f(n)$ (thay $n$ để tính), bằng hệ thức truy hồi (tính lần lượt từ số hạng đầu), hoặc bằng mô tả.`,
  R`**Tăng, giảm:** xét hiệu $u_{n+1}-u_n$. Luôn dương: dãy tăng; luôn âm: dãy giảm. Nếu $u_n>0$ với mọi $n$, có thể xét thương $\dfrac{u_{n+1}}{u_n}$ so với $1$.`,
  R`**Bị chặn:** bị chặn trên nếu có $M$ để $u_n\le M$ với mọi $n$; bị chặn dưới nếu có $m$ để $u_n\ge m$; bị chặn nếu vừa bị chặn trên vừa bị chặn dưới.`,
  R`Mẹo: với phân thức, tách phần nguyên (ví dụ $\dfrac{2n-1}{n+1}=2-\dfrac3{n+1}$) để thấy ngay tính tăng giảm và giới hạn chặn.`
 ],
 luuY: [
  R`Chỉ kiểm tra vài số hạng đầu rồi kết luận dãy tăng: phải chứng minh với mọi $n$.`,
  R`Tìm số hạng thứ $k$ có giá trị cho trước nhưng không kiểm tra $k$ nguyên dương.`
 ],
 vd: [
 { muc: "NB", de: R`Cho dãy số $u_n=\dfrac{2n-1}{n+1}$. Tính $u_1$, $u_2$, $u_3$. Số $\dfrac74$ là số hạng thứ mấy?`,
   giai: [
    R`$u_1=\dfrac12$, $u_2=\dfrac33=1$, $u_3=\dfrac54$.`,
    R`$\dfrac{2k-1}{k+1}=\dfrac74\Leftrightarrow8k-4=7k+7\Leftrightarrow k=11$ (nguyên dương, nhận).`,
    R`Thử lại: $u_{11}=\dfrac{21}{12}=\dfrac74$ ✓. Đó là số hạng thứ $11$.`
   ] },
 { muc: "TH", de: R`Cho dãy số $u_1=2$, $u_{n+1}=2u_n-1$. Tính $5$ số hạng đầu và dự đoán công thức $u_n$.`,
   giai: [
    R`$u_2=2\cdot2-1=3$; $u_3=5$; $u_4=9$; $u_5=17$.`,
    R`Nhận xét: $u_n-1$ lần lượt là $1,2,4,8,16$, tức $2^{n-1}$.`,
    R`Dự đoán $u_n=2^{n-1}+1$. (Thử với truy hồi: $2(2^{n-1}+1)-1=2^n+1=u_{n+1}$ ✓.)`
   ] },
 { muc: "TH", de: R`Xét tính tăng, giảm và bị chặn của dãy $u_n=\dfrac{2n-1}{n+1}$.`,
   giai: [
    R`Tách: $u_n=\dfrac{2(n+1)-3}{n+1}=2-\dfrac3{n+1}$.`,
    R`$u_{n+1}-u_n=\dfrac3{n+1}-\dfrac3{n+2}=\dfrac{3}{(n+1)(n+2)}>0$ với mọi $n\ge1$: dãy **tăng**.`,
    R`Vì dãy tăng nên $u_n\ge u_1=\dfrac12$; vì $\dfrac3{n+1}>0$ nên $u_n<2$. Vậy $\dfrac12\le u_n<2$: dãy **bị chặn**.`
   ] },
 { muc: "VD", de: R`Chứng minh dãy $u_n=\dfrac{n}{3^n}$ là dãy giảm và bị chặn.`,
   giai: [
    R`$u_n>0$ với mọi $n$. Xét thương: $\dfrac{u_{n+1}}{u_n}=\dfrac{n+1}{3^{n+1}}\cdot\dfrac{3^n}{n}=\dfrac{n+1}{3n}$.`,
    R`$\dfrac{n+1}{3n}<1\Leftrightarrow n+1<3n\Leftrightarrow n>\dfrac12$, đúng với mọi $n\ge1$. Vậy $u_{n+1}<u_n$: dãy giảm.`,
    R`Dãy giảm nên $u_n\le u_1=\dfrac13$; lại có $u_n>0$. Vậy $0<u_n\le\dfrac13$: dãy bị chặn.`
   ] }
 ] },
"C2-B6-D10": {
 pp: [
  R`**Cấp số cộng** (CSC) công sai $d$: $u_{n+1}=u_n+d$. Số hạng tổng quát $u_n=u_1+(n-1)d$.`,
  R`**Tổng $n$ số hạng đầu:** $S_n=\dfrac{n(u_1+u_n)}2=\dfrac{n\,[2u_1+(n-1)d]}2$.`,
  R`**Ba số $a,b,c$ theo thứ tự lập CSC** $\Leftrightarrow a+c=2b$.`,
  R`Bài toán cho hai số hạng: viết mỗi số hạng theo $u_1$ và $d$, giải hệ hai ẩn.`,
  R`Bài toán thực tế: "mỗi lần tăng (giảm) thêm một lượng không đổi" là dấu hiệu của CSC.`
 ],
 luuY: [
  R`Viết $u_n=u_1+nd$ (phải là $(n-1)d$).`,
  R`Nhầm số hạng cuối với số số hạng khi tính tổng.`
 ],
 vd: [
 { muc: "NB", de: R`Cho CSC có $u_1=3$, $d=4$. Tính $u_{10}$ và $S_{10}$.`,
   giai: [
    R`$u_{10}=3+9\cdot4=39$.`,
    R`$S_{10}=\dfrac{10\,(3+39)}2=210$.`
   ] },
 { muc: "TH", de: R`Cho CSC có $u_3=7$, $u_8=22$. Tìm $u_1$, $d$ và tính $S_{20}$.`,
   giai: [
    R`$\begin{cases}u_1+2d=7\\u_1+7d=22\end{cases}$. Trừ vế: $5d=15\Rightarrow d=3$, suy ra $u_1=1$.`,
    R`$u_{20}=1+19\cdot3=58$; $S_{20}=\dfrac{20\,(1+58)}2=590$.`
   ] },
 { muc: "TH", de: R`Tìm $x$ để ba số $x-1$, $x+3$, $3x+1$ theo thứ tự lập thành cấp số cộng.`,
   giai: [
    R`Điều kiện: $(x-1)+(3x+1)=2(x+3)\Leftrightarrow4x=2x+6\Leftrightarrow x=3$.`,
    R`Thử lại: ba số $2,6,10$ có công sai $4$ ✓.`
   ] },
 { muc: "VD", de: R`Một hội trường có $20$ hàng ghế. Hàng đầu có $15$ ghế, mỗi hàng sau nhiều hơn hàng trước $2$ ghế. Hỏi hàng cuối có bao nhiêu ghế và cả hội trường có bao nhiêu ghế?`,
   giai: [
    R`Số ghế các hàng lập CSC với $u_1=15$, $d=2$.`,
    R`Hàng cuối: $u_{20}=15+19\cdot2=53$ ghế.`,
    R`Tổng: $S_{20}=\dfrac{20\,(15+53)}2=680$ ghế.`
   ] },
 { muc: "VD", de: R`Tổng của bao nhiêu số lẻ đầu tiên $1+3+5+\dots$ bằng $225$?`,
   giai: [
    R`Các số lẻ lập CSC $u_1=1$, $d=2$. $S_n=\dfrac{n\,[2+(n-1)\cdot2]}2=n^2$.`,
    R`$n^2=225\Leftrightarrow n=15$ ($n>0$).`,
    R`**Kết luận.** $15$ số lẻ đầu tiên (từ $1$ đến $29$).`
   ] }
 ] },
"C2-B7-D11": {
 pp: [
  R`**Cấp số nhân** (CSN) công bội $q$: $u_{n+1}=u_n\cdot q$. Số hạng tổng quát $u_n=u_1\cdot q^{n-1}$.`,
  R`**Tổng $n$ số hạng đầu** ($q\ne1$): $S_n=\dfrac{u_1(1-q^n)}{1-q}$. Nếu $q=1$ thì $S_n=nu_1$.`,
  R`**Ba số $a,b,c$ theo thứ tự lập CSN** $\Leftrightarrow b^2=ac$.`,
  R`Bài toán cho hai số hạng: chia hai phương trình để khử $u_1$, tìm $q$.`,
  R`Bài toán thực tế: "mỗi lần tăng (giảm) theo cùng một tỉ lệ phần trăm" (lãi kép, dân số, phân rã) là CSN với $q=1\pm r$.`
 ],
 luuY: [
  R`Viết $u_n=u_1q^n$ (phải là $q^{n-1}$).`,
  R`Từ $b^2=ac$ quên nghiệm âm $b=-\sqrt{ac}$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho CSN có $u_1=2$, $q=3$. Tính $u_5$ và $S_5$.`,
   giai: [
    R`$u_5=2\cdot3^4=162$.`,
    R`$S_5=\dfrac{2\,(1-3^5)}{1-3}=\dfrac{2\cdot(-242)}{-2}=242$.`
   ] },
 { muc: "TH", de: R`Cho CSN có $u_2=6$, $u_5=162$. Tìm $u_1$, $q$ và tính $S_6$.`,
   giai: [
    R`$\begin{cases}u_1q=6\\u_1q^4=162\end{cases}$. Chia vế: $q^3=27\Rightarrow q=3$, $u_1=2$.`,
    R`$S_6=\dfrac{2\,(1-3^6)}{1-3}=3^6-1=728$.`
   ] },
 { muc: "TH", de: R`Tìm $x$ để ba số $2$, $x$, $18$ theo thứ tự lập thành cấp số nhân.`,
   giai: [
    R`$x^2=2\cdot18=36\Leftrightarrow x=6$ hoặc $x=-6$.`,
    R`Thử: $2,6,18$ ($q=3$) và $2,-6,18$ ($q=-3$) ✓.`
   ] },
 { muc: "VD", de: R`Gửi tiết kiệm $100$ triệu đồng với lãi suất $6\%$/năm, lãi nhập gốc mỗi năm (lãi kép). Sau $5$ năm, số tiền cả gốc lẫn lãi là bao nhiêu (làm tròn đến hàng phần trăm triệu đồng)?`,
   giai: [
    R`Số tiền sau mỗi năm gấp $1{,}06$ lần năm trước: lập CSN với $u_0=100$, $q=1{,}06$.`,
    R`Sau $n$ năm: $A_n=100\cdot1{,}06^n$.`,
    R`$A_5=100\cdot1{,}06^5\approx100\cdot1{,}338226\approx133{,}82$ (triệu đồng).`
   ] },
 { muc: "VD", de: R`Thả một quả bóng từ độ cao $10$ m. Mỗi lần chạm đất, bóng nảy lên bằng một nửa độ cao trước đó. Tính độ cao lần nảy thứ $5$ và tổng quãng đường bóng đi được đến lúc chạm đất lần thứ $5$.`,
   giai: [
    R`Độ cao các lần nảy lập CSN: $u_1=5$, $q=\dfrac12$. Lần nảy thứ $5$: $u_5=5\cdot\left(\dfrac12\right)^4=0{,}3125$ m.`,
    R`Đến lần chạm đất thứ $5$: rơi $10$ m, rồi bốn lần nảy lên và rơi xuống ($u_1$ đến $u_4$), mỗi lần đi hai chiều.`,
    R`$u_1+u_2+u_3+u_4=\dfrac{5\left(1-\frac1{16}\right)}{1-\frac12}=9{,}375$.`,
    R`Quãng đường: $10+2\cdot9{,}375=28{,}75$ (m).`
   ] }
 ] }
});
/* ---------- Chương III · Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm ---------- */
const BANG11 = R`$$\begin{array}{|c|c|c|c|c|c|}\hline \text{Thời gian (phút)}&[0;10)&[10;20)&[20;30)&[30;40)&[40;50)\\\hline \text{Số học sinh}&5&12&15&6&2\\\hline\end{array}$$`;
Object.assign(D, {
"C3-B8-D12": {
 pp: [
  R`**Mẫu số liệu ghép nhóm:** số liệu được chia vào các nhóm $[a_1;a_2),[a_2;a_3),\dots$; tần số $n_i$ là số giá trị thuộc nhóm thứ $i$; cỡ mẫu $n=n_1+n_2+\dots+n_k$.`,
  R`**Giá trị đại diện** của nhóm $[a_i;a_{i+1})$: $x_i=\dfrac{a_i+a_{i+1}}2$ (trung điểm).`,
  R`**Ghép nhóm từ dữ liệu:** chọn độ dài nhóm bằng nhau, đầu mút trái thuộc nhóm, đầu mút phải không thuộc nhóm; đếm cẩn thận, kiểm tra tổng tần số bằng số dữ liệu.`,
  R`Tỉ lệ phần trăm của một (vài) nhóm $=\dfrac{\text{tổng tần số các nhóm đó}}{n}\cdot100\%$.`
 ],
 luuY: [
  R`Đếm giá trị đúng bằng đầu mút phải vào nhóm đó (phải đưa sang nhóm sau).`,
  R`Lấy đầu mút trái làm giá trị đại diện.`
 ],
 vd: [
 { muc: "NB", de: R`Thời gian đi từ nhà đến trường của một nhóm học sinh được ghi lại như sau:` + BANG11 + R`Tìm cỡ mẫu, nhóm có nhiều học sinh nhất và giá trị đại diện của nhóm đó.`,
   giai: [
    R`Cỡ mẫu $n=5+12+15+6+2=40$.`,
    R`Nhóm có tần số lớn nhất ($15$) là $[20;30)$.`,
    R`Giá trị đại diện: $\dfrac{20+30}2=25$ (phút).`
   ] },
 { muc: "TH", de: R`Với bảng ở ví dụ 1, có bao nhiêu phần trăm học sinh đi đến trường mất dưới $20$ phút?`,
   giai: [
    R`"Dưới $20$ phút" gồm hai nhóm $[0;10)$ và $[10;20)$: $5+12=17$ học sinh.`,
    R`Tỉ lệ: $\dfrac{17}{40}=0{,}425=42{,}5\%$.`
   ] },
 { muc: "TH", de: R`Chiều cao (cm) của $20$ học sinh: $152$, $155$, $158$, $160$, $161$, $163$, $163$, $165$, $166$, $167$, $168$, $168$, $170$, $171$, $172$, $173$, $175$, $176$, $178$, $180$. Lập bảng tần số ghép nhóm với các nhóm có độ dài $5$, bắt đầu từ $150$.`,
   giai: [
    R`Các nhóm: $[150;155)$, $[155;160)$, $[160;165)$, $[165;170)$, $[170;175)$, $[175;180)$, $[180;185)$.`,
    R`Đếm: $[150;155)$: $152$ → $1$. $[155;160)$: $155,158$ → $2$. $[160;165)$: $160,161,163,163$ → $4$. $[165;170)$: $165,166,167,168,168$ → $5$.`,
    R`$[170;175)$: $170,171,172,173$ → $4$. $[175;180)$: $175,176,178$ → $3$. $[180;185)$: $180$ → $1$. (Chú ý $155$, $160$, $165$, $170$, $175$, $180$ được xếp vào nhóm có đầu mút trái là chính nó.)`,
    R`Bảng tần số ghép nhóm: $$\begin{array}{|c|c|}\hline \text{Chiều cao (cm)}&\text{Tần số}\\\hline [150;155)&1\\\hline [155;160)&2\\\hline [160;165)&4\\\hline [165;170)&5\\\hline [170;175)&4\\\hline [175;180)&3\\\hline [180;185)&1\\\hline\end{array}$$`,
    R`Kiểm tra: $1+2+4+5+4+3+1=20$ ✓.`
   ] }
 ] },
"C3-B9-D13": {
 pp: [
  R`**Số trung bình:** $\overline x=\dfrac{n_1x_1+n_2x_2+\dots+n_kx_k}{n}$, với $x_i$ là giá trị đại diện.`,
  R`**Trung vị** $M_e$: tìm nhóm $[u_m;u_{m+1})$ đầu tiên có tần số tích luỹ $\ge\dfrac n2$. $M_e=u_m+\dfrac{\frac n2-C}{n_m}\cdot(u_{m+1}-u_m)$, với $C$ là tần số tích luỹ của nhóm **ngay trước**, $n_m$ là tần số nhóm đó.`,
  R`**Tứ phân vị:** $Q_2=M_e$; $Q_1$ và $Q_3$ tính như trên, thay $\dfrac n2$ bằng $\dfrac n4$ và $\dfrac{3n}4$.`,
  R`**Mốt** $M_o$: nhóm $[u_m;u_{m+1})$ có tần số lớn nhất $n_m$; $M_o=u_m+\dfrac{n_m-n_{m-1}}{(n_m-n_{m-1})+(n_m-n_{m+1})}\cdot(u_{m+1}-u_m)$ (nhóm trước, sau không có thì lấy tần số $0$).`
 ],
 luuY: [
  R`Dùng tần số tích luỹ **của chính nhóm chứa trung vị** làm $C$ (phải là của nhóm ngay trước).`,
  R`Tính số trung bình bằng đầu mút nhóm thay vì giá trị đại diện.`
 ],
 vd: [
 { muc: "NB", de: R`Với bảng thời gian đến trường ở dạng trước:` + BANG11 + R`Tính thời gian trung bình.`,
   giai: [
    R`Giá trị đại diện: $5$, $15$, $25$, $35$, $45$.`,
    R`$\overline x=\dfrac{5\cdot5+12\cdot15+15\cdot25+6\cdot35+2\cdot45}{40}=\dfrac{25+180+375+210+90}{40}=\dfrac{880}{40}=22$ (phút).`
   ] },
 { muc: "TH", de: R`Với bảng trên, tìm trung vị của mẫu số liệu.`,
   giai: [
    R`Tần số tích luỹ: $5$; $17$; $32$; $38$; $40$.`,
    R`$\dfrac n2=20$. Nhóm đầu tiên có tần số tích luỹ $\ge20$ là $[20;30)$ (tích luỹ $32$); nhóm trước có $C=17$; $n_m=15$.`,
    R`$M_e=20+\dfrac{20-17}{15}\cdot10=20+2=22$ (phút).`
   ] },
 { muc: "TH", de: R`Với bảng trên, tìm các tứ phân vị $Q_1$, $Q_3$.`,
   giai: [
    R`$\dfrac n4=10$: nhóm chứa $Q_1$ là $[10;20)$ (tích luỹ $17\ge10$), $C=5$, $n_m=12$. $Q_1=10+\dfrac{10-5}{12}\cdot10=10+\dfrac{25}6=\dfrac{85}6\approx14{,}17$.`,
    R`$\dfrac{3n}4=30$: nhóm chứa $Q_3$ là $[20;30)$ (tích luỹ $32\ge30$), $C=17$, $n_m=15$. $Q_3=20+\dfrac{30-17}{15}\cdot10=20+\dfrac{26}3=\dfrac{86}3\approx28{,}67$.`
   ] },
 { muc: "VD", de: R`Với bảng trên, tìm mốt của mẫu số liệu và giải thích ý nghĩa.`,
   giai: [
    R`Nhóm có tần số lớn nhất: $[20;30)$ với $n_m=15$; nhóm trước có $12$, nhóm sau có $6$.`,
    R`$M_o=20+\dfrac{15-12}{(15-12)+(15-6)}\cdot10=20+\dfrac3{12}\cdot10=22{,}5$ (phút).`,
    R`**Ý nghĩa.** Thời gian đến trường hay gặp nhất là khoảng $22{,}5$ phút.`
   ] }
 ] }
});
/* ---------- Chương IV · Quan hệ song song trong không gian ---------- */
const CHOP = R`\draw[thick] (0,0)--(3,0)--(4,1.3);
\draw[dashed] (4,1.3)--(1,1.3)--(0,0);
\draw[thick] (1.6,3.8)--(0,0);
\draw[thick] (1.6,3.8)--(3,0);
\draw[thick] (1.6,3.8)--(4,1.3);
\draw[dashed] (1.6,3.8)--(1,1.3);
\node[above] at (1.6,3.8){$S$};
\node[below left] at (0,0){$A$};
\node[below right] at (3,0){$B$};
\node[right] at (4,1.3){$C$};
\node[above left] at (1,1.3){$D$};`;
const TUDIEN = R`\draw[thick] (4,0)--(1.8,3.6)--(0,0);
\draw[dashed] (0,0)--(4,0);
\draw[thick] (4,0)--(2.6,-1.2)--(0,0);
\draw[thick] (2.6,-1.2)--(1.8,3.6);
\node[above] at (1.8,3.6){$A$};
\node[left] at (0,0){$B$};
\node[below] at (2.6,-1.2){$C$};
\node[right] at (4,0){$D$};`;
const HOP11 = R`\draw[thick] (0,0)--(3,0)--(4,1.2);
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
\node[above left] at (3,2.5){$B'$};
\node[above right] at (4,3.7){$C'$};
\node[above left] at (1,3.7){$D'$};`;
Object.assign(D, {
"C4-B10-D14": {
 pp: [
  R`**Giao tuyến của hai mặt phẳng:** tìm **hai điểm chung** phân biệt; giao tuyến là đường thẳng qua hai điểm đó. Điểm chung thường là đỉnh chung, hoặc giao điểm của hai đường thẳng lần lượt nằm trong hai mặt phẳng (và hai đường đó cùng nằm trong một mặt phẳng thứ ba).`,
  R`**Giao điểm của đường thẳng $d$ và mặt phẳng $(P)$:** chọn mặt phẳng phụ $(Q)$ chứa $d$; tìm giao tuyến $\Delta=(P)\cap(Q)$; giao điểm cần tìm là $d\cap\Delta$.`,
  R`**Thiết diện:** lần lượt tìm đoạn giao tuyến của mặt phẳng cắt với từng mặt của hình chóp, đến khi được một đa giác khép kín.`,
  R`**Ba điểm thẳng hàng:** chứng minh chúng cùng thuộc hai mặt phẳng phân biệt (nên cùng nằm trên giao tuyến).`
 ],
 luuY: [
  R`Lấy giao điểm của hai đường thẳng không đồng phẳng (chéo nhau): hai đường đó không cắt nhau.`,
  R`Vẽ nét liền cho cạnh bị che: cạnh khuất phải vẽ nét đứt.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Tìm giao tuyến của $(SAC)$ và $(SBD)$.`,
   giai: [
    R`$S$ là điểm chung thứ nhất.`,
    R`$O=AC\cap BD$, mà $AC\subset(SAC)$, $BD\subset(SBD)$, nên $O$ là điểm chung thứ hai.`,
    R`**Kết luận.** $(SAC)\cap(SBD)=SO$.`
   ] },
 { muc: "TH", de: R`Cho hình chóp $S.ABCD$ có đáy là tứ giác $ABCD$ với $AB$ và $CD$ không song song. Tìm giao tuyến của $(SAB)$ và $(SCD)$.`,
   giai: [
    R`$S$ là một điểm chung.`,
    R`$AB$, $CD$ cùng nằm trong $(ABCD)$ và không song song, nên chúng cắt nhau tại $I$. $I\in AB\subset(SAB)$ và $I\in CD\subset(SCD)$: $I$ là điểm chung thứ hai.`,
    R`**Kết luận.** $(SAB)\cap(SCD)=SI$.`
   ] },
 { muc: "VD", de: R`Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$, $M$ là trung điểm $SC$. Tìm giao điểm $G$ của $AM$ với mặt phẳng $(SBD)$. Tính tỉ số $\dfrac{SG}{SO}$.`,
   giai: [
    R`Chọn mặt phẳng phụ chứa $AM$ là $(SAC)$.`,
    R`$(SAC)\cap(SBD)=SO$ (ví dụ 1).`,
    R`Trong $(SAC)$, $AM$ cắt $SO$ tại $G$. Vì $G\in SO\subset(SBD)$ nên $G=AM\cap(SBD)$.`,
    R`Trong tam giác $SAC$: $SO$ là trung tuyến (vì $O$ là trung điểm $AC$), $AM$ cũng là trung tuyến. Vậy $G$ là trọng tâm tam giác $SAC$, suy ra $\dfrac{SG}{SO}=\dfrac23$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + CHOP + R`
\draw[dashed] (0,0)--(4,1.3); \draw[dashed] (3,0)--(1,1.3);
\draw[dashed] (1.6,3.8)--(2,0.65);
\draw[dashed,red] (0,0)--(2.8,2.55);
\fill (2,0.65) circle (1.5pt) node[below]{$O$};
\fill (2.8,2.55) circle (1.5pt) node[right]{$M$};
\fill[red] (1.87,1.7) circle (1.5pt) node[left]{$G$};
\end{tikzpicture}`,
   chuThich: R`$G$ là giao điểm của hai trung tuyến $AM$ và $SO$ của tam giác $SAC$.` },
 { muc: "VD", de: R`Cho hình chóp $S.ABCD$ có đáy là hình bình hành, $M$ là trung điểm $SA$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(MCD)$. Thiết diện là hình gì?`,
   giai: [
    R`$(MCD)$ và $(SAB)$ có điểm chung $M$; lại có $CD\subset(MCD)$, $AB\subset(SAB)$, $CD\parallel AB$.`,
    R`Nên giao tuyến của chúng là đường thẳng qua $M$ song song với $AB$, cắt $SB$ tại $N$. Vì $M$ là trung điểm $SA$ nên $N$ là trung điểm $SB$ (đường trung bình).`,
    R`Các đoạn giao tuyến với các mặt: $MN$ (mặt $SAB$), $NC$ (mặt $SBC$), $CD$ (đáy), $DM$ (mặt $SAD$).`,
    R`**Thiết diện** là tứ giác $MNCD$ có $MN\parallel CD$ (cùng song song $AB$) và $MN=\dfrac12AB=\dfrac12CD$: đó là **hình thang**.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + CHOP + R`
\fill[blue!15] (0.8,1.9)--(2.3,1.9)--(4,1.3)--(1,1.3)--cycle;
\draw[thick,blue] (0.8,1.9)--(2.3,1.9)--(4,1.3);
\draw[dashed,blue] (4,1.3)--(1,1.3)--(0.8,1.9);
\fill (0.8,1.9) circle (1.5pt) node[above left]{$M$};
\fill (2.3,1.9) circle (1.5pt) node[right]{$N$};
\end{tikzpicture}`,
   chuThich: R`Thiết diện $MNCD$ (tô màu) là hình thang.` }
 ] },
"C4-B11-D15": {
 pp: [
  R`**Hai đường thẳng song song:** đồng phẳng và không có điểm chung. **Chéo nhau:** không cùng nằm trong mặt phẳng nào.`,
  R`**Cách chứng minh song song:** dùng đường trung bình, tính chất hình bình hành, định lí Thalès trong một mặt phẳng; hoặc hai đường cùng song song với đường thứ ba.`,
  R`**Định lí về giao tuyến:** nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song $a$, $b$ thì giao tuyến của chúng (nếu có) song song với $a$ và $b$ (hoặc trùng với một trong hai đường).`,
  R`**Chứng minh chéo nhau:** giả sử hai đường đồng phẳng, suy ra bốn điểm đồng phẳng, mâu thuẫn với giả thiết (thường là hình chóp/tứ diện).`
 ],
 luuY: [
  R`Cho rằng hai đường thẳng không cắt nhau thì song song (trong không gian còn có thể chéo nhau).`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Tìm giao tuyến của $(SAB)$ và $(SCD)$.`,
   giai: [
    R`$S$ là điểm chung của hai mặt phẳng.`,
    R`$AB\subset(SAB)$, $CD\subset(SCD)$ và $AB\parallel CD$.`,
    R`Theo định lí về giao tuyến: $(SAB)\cap(SCD)$ là đường thẳng $d$ qua $S$ và song song với $AB$ (và $CD$).`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + CHOP + R`
\draw[thick,red] (0.1,3.8)--(3.1,3.8) node[right]{$d$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Cho tứ diện $ABCD$. Gọi $M$, $N$, $P$, $Q$ lần lượt là trung điểm $AB$, $BC$, $CD$, $DA$. Chứng minh $MNPQ$ là hình bình hành.`,
   giai: [
    R`Trong tam giác $ABC$: $MN$ là đường trung bình nên $MN\parallel AC$ và $MN=\dfrac12AC$.`,
    R`Trong tam giác $ACD$: $QP$ là đường trung bình nên $QP\parallel AC$ và $QP=\dfrac12AC$.`,
    R`Suy ra $MN\parallel QP$ và $MN=QP$: tứ giác $MNPQ$ là hình bình hành.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + TUDIEN + R`
\draw[blue,thick] (0.9,1.8)--(1.3,-0.6)--(3.3,-0.6)--(2.9,1.8)--cycle;
\node[left] at (0.9,1.8){$M$}; \node[below] at (1.3,-0.6){$N$}; \node[below right] at (3.3,-0.6){$P$}; \node[right] at (2.9,1.8){$Q$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Cho tứ diện $ABCD$. Chứng minh $AB$ và $CD$ chéo nhau.`,
   giai: [
    R`Giả sử $AB$ và $CD$ không chéo nhau, tức là chúng cùng nằm trong một mặt phẳng $(P)$.`,
    R`Khi đó bốn điểm $A$, $B$, $C$, $D$ cùng thuộc $(P)$, mâu thuẫn với việc $ABCD$ là tứ diện (bốn đỉnh không đồng phẳng).`,
    R`Vậy $AB$ và $CD$ chéo nhau.`
   ] }
 ] },
"C4-B12-D16": {
 pp: [
  R`**Điều kiện:** nếu $d\not\subset(P)$ và $d$ song song với một đường thẳng $d'$ nằm trong $(P)$ thì $d\parallel(P)$.`,
  R`**Tính chất:** nếu $d\parallel(P)$ và mặt phẳng $(Q)$ chứa $d$ cắt $(P)$ theo giao tuyến $a$ thì $a\parallel d$. Dùng để tìm giao tuyến hoặc thiết diện.`,
  R`Cách tìm $d'$: thường là cạnh đáy, đường trung bình, hoặc đường thẳng tạo bởi các điểm chia cạnh theo cùng tỉ số (Thalès).`
 ],
 luuY: [
  R`Quên chứng minh $d\not\subset(P)$.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Chứng minh $CD\parallel(SAB)$.`,
   giai: [
    R`$CD\not\subset(SAB)$ (vì $C\notin(SAB)$).`,
    R`$CD\parallel AB$ và $AB\subset(SAB)$.`,
    R`Vậy $CD\parallel(SAB)$.`
   ] },
 { muc: "TH", de: R`Cho hình chóp $S.ABCD$ đáy hình bình hành; $M$, $N$ lần lượt là trung điểm $SA$, $SB$. Chứng minh $MN\parallel(ABCD)$ và $MN\parallel(SCD)$.`,
   giai: [
    R`$MN$ là đường trung bình của tam giác $SAB$ nên $MN\parallel AB$.`,
    R`$AB\subset(ABCD)$, $MN\not\subset(ABCD)$ nên $MN\parallel(ABCD)$.`,
    R`$MN\parallel AB\parallel CD$ và $CD\subset(SCD)$; $MN\not\subset(SCD)$ (vì $M\notin(SCD)$). Vậy $MN\parallel(SCD)$.`
   ] },
 { muc: "VD", de: R`Cho tứ diện $ABCD$; $G_1$, $G_2$ lần lượt là trọng tâm các tam giác $ACD$ và $BCD$. Chứng minh $G_1G_2\parallel(ABC)$ và tính $\dfrac{G_1G_2}{AB}$.`,
   giai: [
    R`Gọi $M$ là trung điểm $CD$. Vì $G_1$, $G_2$ là trọng tâm nên $G_1\in AM$, $G_2\in BM$ và $\dfrac{MG_1}{MA}=\dfrac{MG_2}{MB}=\dfrac13$.`,
    R`Trong tam giác $MAB$, theo định lí Thalès đảo: $G_1G_2\parallel AB$ và $\dfrac{G_1G_2}{AB}=\dfrac13$.`,
    R`$AB\subset(ABC)$ và $G_1G_2\not\subset(ABC)$ nên $G_1G_2\parallel(ABC)$.`
   ] }
 ] },
"C4-B13-D17": {
 pp: [
  R`**Điều kiện:** nếu $(P)$ chứa hai đường thẳng **cắt nhau** cùng song song với $(Q)$ thì $(P)\parallel(Q)$.`,
  R`**Tính chất:** nếu $(P)\parallel(Q)$ thì mọi mặt phẳng cắt $(P)$ cũng cắt $(Q)$ và hai giao tuyến song song. Mọi đường thẳng trong $(P)$ đều song song với $(Q)$.`,
  R`**Hình lăng trụ:** các cạnh bên song song và bằng nhau, các mặt bên là hình bình hành, hai đáy nằm trên hai mặt phẳng song song. **Hình hộp:** lăng trụ có đáy là hình bình hành; các mặt đối diện song song; bốn đường chéo cắt nhau tại trung điểm mỗi đường.`
 ],
 luuY: [
  R`Chỉ chứng minh $(P)$ chứa **một** đường thẳng song song với $(Q)$ rồi kết luận hai mặt phẳng song song.`,
  R`Lấy hai đường thẳng song song (không cắt nhau) trong $(P)$.`
 ],
 vd: [
 { muc: "TH", de: R`Cho hình chóp $S.ABCD$ đáy hình bình hành; $M$, $N$, $P$ lần lượt là trung điểm $SA$, $SB$, $SD$. Chứng minh $(MNP)\parallel(ABCD)$.`,
   giai: [
    R`$MN$ là đường trung bình tam giác $SAB$: $MN\parallel AB$, nên $MN\parallel(ABCD)$.`,
    R`$MP$ là đường trung bình tam giác $SAD$: $MP\parallel AD$, nên $MP\parallel(ABCD)$.`,
    R`$MN$ và $MP$ cắt nhau tại $M$, cùng nằm trong $(MNP)$. Vậy $(MNP)\parallel(ABCD)$.`
   ] },
 { muc: "TH", de: R`Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $(BDA')\parallel(B'D'C)$.`,
   giai: [
    R`$BDD'B'$ là hình bình hành (vì $BB'\parallel DD'$, $BB'=DD'$), nên $BD\parallel B'D'$; suy ra $BD\parallel(B'D'C)$.`,
    R`$A'BCD'$ là hình bình hành (vì $A'D'\parallel BC$, $A'D'=BC$), nên $A'B\parallel D'C$; suy ra $A'B\parallel(B'D'C)$.`,
    R`$BD$ và $A'B$ cắt nhau tại $B$ và nằm trong $(BDA')$. Vậy $(BDA')\parallel(B'D'C)$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + HOP11 + R`
\draw[red,thick,dashed] (3,0)--(1,1.2); \draw[red,thick] (3,0)--(0,2.5); \draw[red,dashed,thick] (1,1.2)--(0,2.5);
\draw[blue,thick] (3,2.5)--(1,3.7); \draw[blue,thick] (3,2.5)--(4,1.2); \draw[blue,thick] (1,3.7)--(4,1.2);
\end{tikzpicture}`,
   chuThich: R`Tam giác $BDA'$ (đỏ) và tam giác $B'D'C$ (xanh) nằm trên hai mặt phẳng song song.` },
 { muc: "VD", de: R`Cho hình lăng trụ $ABC.A'B'C'$. Gọi $G$, $G'$ lần lượt là trọng tâm tam giác $ABC$ và $A'B'C'$. Chứng minh $GG'\parallel AA'$ và $GG'=AA'$.`,
   giai: [
    R`Gọi $M$, $M'$ là trung điểm $BC$, $B'C'$. $BCC'B'$ là hình bình hành nên $MM'\parallel BB'\parallel AA'$ và $MM'=AA'$. Do đó $AMM'A'$ là hình bình hành, $AM=A'M'$ và $AM\parallel A'M'$.`,
    R`$G\in AM$ với $AG=\dfrac23AM$; $G'\in A'M'$ với $A'G'=\dfrac23A'M'$. Vậy $AG\parallel A'G'$ và $AG=A'G'$.`,
    R`Tứ giác $AGG'A'$ là hình bình hành, suy ra $GG'\parallel AA'$ và $GG'=AA'$.`
   ] }
 ] },
"C4-B14-D18": {
 pp: [
  R`**Phép chiếu song song** (phương chiếu $l$ không song song với mặt phẳng chiếu): biến đường thẳng thành đường thẳng (nếu không cùng phương $l$); biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau.`,
  R`**Giữ nguyên** tỉ số độ dài hai đoạn thẳng nằm trên cùng một đường thẳng (hoặc hai đường song song): do đó giữ trung điểm, trọng tâm.`,
  R`**Không giữ** độ dài, góc. Vì vậy: tam giác bất kì có thể là hình biểu diễn của tam giác đều, vuông, cân; hình bình hành là hình biểu diễn của hình vuông, hình chữ nhật, hình thoi; hình elip là hình biểu diễn của đường tròn.`
 ],
 luuY: [
  R`Vẽ hình vuông trong không gian thành hình vuông (thường phải vẽ thành hình bình hành để thấy chiều sâu).`,
  R`Cho rằng góc vuông vẫn được giữ nguyên.`
 ],
 vd: [
 { muc: "NB", de: R`Hình nào sau đây có thể là hình biểu diễn của một hình vuông? **A.** Hình thang không là hình bình hành. **B.** Hình bình hành. **C.** Tứ giác bất kì. **D.** Tam giác.`,
   giai: [
    R`Hình vuông có hai cặp cạnh đối song song. Phép chiếu song song biến hai đường song song thành hai đường song song, nên hình biểu diễn phải có hai cặp cạnh đối song song: là hình bình hành.`,
    R`**Kết luận.** Chọn **B**.`
   ] },
 { muc: "TH", de: R`Tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Qua phép chiếu song song, $A,B,C,M,G$ có hình chiếu lần lượt là $A',B',C',M',G'$ (tam giác $A'B'C'$ không suy biến). Chứng minh $M'$ là trung điểm $B'C'$ và $G'$ là trọng tâm tam giác $A'B'C'$.`,
   giai: [
    R`$M$ là trung điểm $BC$: $\dfrac{MB}{MC}=1$. Phép chiếu song song giữ tỉ số trên cùng một đường thẳng nên $\dfrac{M'B'}{M'C'}=1$: $M'$ là trung điểm $B'C'$.`,
    R`$G\in AM$ với $\dfrac{AG}{AM}=\dfrac23$, nên $G'\in A'M'$ với $\dfrac{A'G'}{A'M'}=\dfrac23$.`,
    R`$A'M'$ là trung tuyến của tam giác $A'B'C'$ và $G'$ chia nó theo tỉ số $\dfrac23$ từ đỉnh: $G'$ là trọng tâm tam giác $A'B'C'$.`
   ] },
 { muc: "TH", de: R`Mỗi khẳng định sau đúng hay sai đối với phép chiếu song song? a) Hình chiếu của hai đường thẳng cắt nhau luôn là hai đường thẳng cắt nhau. b) Hình chiếu của một góc vuông là một góc vuông. c) Hình chiếu của trung điểm một đoạn thẳng là trung điểm của hình chiếu đoạn thẳng đó.`,
   giai: [
    R`a) **Sai.** Nếu mặt phẳng chứa hai đường thẳng đó song song với phương chiếu thì cả hai có cùng một hình chiếu (trùng nhau).`,
    R`b) **Sai.** Phép chiếu song song không giữ góc (ví dụ hình vuông có thể biểu diễn bằng hình bình hành không có góc vuông).`,
    R`c) **Đúng.** Phép chiếu song song giữ tỉ số độ dài trên cùng một đường thẳng.`
   ] }
 ] }
});
})(window);
