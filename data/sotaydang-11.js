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
})(window);
