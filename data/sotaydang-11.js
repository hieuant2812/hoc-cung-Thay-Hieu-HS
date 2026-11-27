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
    R`**Phân tích.** Hai chiều đổi đều dựa vào một đẳng thức duy nhất $180^\circ=\pi$ rad. Đổi độ sang radian thì **nhân với $\dfrac\pi{180}$**, đổi radian sang độ thì **nhân với $\dfrac{180^\circ}\pi$**.`,
    R`**Bước 1.** Đổi $135^\circ$ sang radian: $135^\circ=\dfrac{135\pi}{180}$ rad.`,
    R`**Bước 2.** Rút gọn phân số (chia cả tử và mẫu cho $45$): $\dfrac{135}{180}=\dfrac34$, nên $135^\circ=\dfrac{3\pi}4$ rad.`,
    R`**Bước 3.** Đổi $\dfrac{7\pi}6$ rad sang độ: thay $\pi$ bằng $180^\circ$, được $\dfrac{7\cdot180^\circ}{6}=7\cdot30^\circ=210^\circ$.`,
    R`**Kết luận.** $135^\circ=\dfrac{3\pi}4$ rad; $\dfrac{7\pi}6$ rad $=210^\circ$.`,
    R`**Thử lại.** $\dfrac{3\pi}4\cdot\dfrac{180^\circ}\pi=135^\circ$ ✓.`
   ] },
 { muc: "TH", de: R`Kim phút của một đồng hồ dài $10$ cm. Trong $20$ phút, đầu kim phút vạch nên một cung tròn dài bao nhiêu (làm tròn đến hàng phần trăm)?`,
   giai: [
    R`**Phân tích.** Độ dài cung $l=R\alpha$ chỉ đúng khi $\alpha$ đo bằng **radian**. Việc đầu tiên là tìm góc (radian) mà kim phút quay được trong $20$ phút.`,
    R`**Bước 1.** $60$ phút kim phút quay một vòng ($2\pi$ rad), nên $20$ phút quay $\dfrac{20}{60}\cdot2\pi=\dfrac{2\pi}3$ rad.`,
    R`**Bước 2.** $l=R\alpha=10\cdot\dfrac{2\pi}3=\dfrac{20\pi}3\approx20{,}94$ (cm).`,
    R`**Kết luận.** Đầu kim phút vạch cung dài khoảng $20{,}94$ cm.`,
    R`**Nhận xét.** Nếu dùng nhầm số đo độ $120^\circ$ thì được $l=1200$ cm, vô lí: luôn đổi sang radian trước.`
   ] },
 { muc: "TH", de: R`Xác định điểm biểu diễn trên đường tròn lượng giác của các góc $1125^\circ$ và $-765^\circ$.`,
   giai: [
    R`**Phân tích.** Góc lớn hơn $360^\circ$ (hoặc âm) có cùng điểm biểu diễn với góc sau khi bớt đi (thêm vào) một số vòng $360^\circ$. Chia số đo cho $360$ để biết bớt bao nhiêu vòng.`,
    R`**Bước 1.** $1125^\circ=45^\circ+3\cdot360^\circ$, nên có cùng điểm biểu diễn với góc $45^\circ$ (điểm chính giữa cung phần tư thứ nhất).`,
    R`**Bước 2.** $-765^\circ=-45^\circ-2\cdot360^\circ$, nên có cùng điểm biểu diễn với góc $-45^\circ$ (điểm chính giữa cung phần tư thứ tư).`,
    R`**Kết luận.** Góc $1125^\circ$ biểu diễn bởi cùng điểm với $45^\circ$; góc $-765^\circ$ cùng điểm với $-45^\circ$.`
   ] },
 { muc: "VD", de: R`Biểu diễn trên đường tròn lượng giác các góc $\alpha=\dfrac\pi4+k\dfrac\pi2$ ($k\in\mathbb Z$). Các điểm đó tạo thành hình gì?`,
   giai: [
    R`**Phân tích.** Họ góc $\alpha+k\dfrac\pi2$ cứ thêm $\dfrac\pi2$ lại sang một điểm mới; sau $4$ lần thì đủ một vòng $2\pi$ và lặp lại. Liệt kê với $k=0,1,2,3$ là đủ.`,
    R`**Bước 1.** Cho $k=0,1,2,3$: $\alpha=\dfrac\pi4,\ \dfrac{3\pi}4,\ \dfrac{5\pi}4,\ \dfrac{7\pi}4$. Với $k=4$ ta được $\dfrac\pi4+2\pi$, trùng điểm với $k=0$; các $k$ khác cũng lặp lại.`,
    R`**Bước 2.** Có đúng $4$ điểm, hai điểm liên tiếp cách nhau một góc $\dfrac\pi2$ nên chúng là bốn đỉnh của một **hình vuông** nội tiếp đường tròn lượng giác.`,
    R`**Kết luận.** Các điểm biểu diễn là bốn đỉnh của một hình vuông nội tiếp đường tròn lượng giác.`
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
    R`**Phân tích.** Biết $\sin\alpha$, tìm $\cos\alpha$ bằng $\sin^2\alpha+\cos^2\alpha=1$. Khai căn được hai giá trị trái dấu, **góc phần tư** chứa $\alpha$ quyết định chọn dấu nào.`,
    R`**Bước 1.** $\cos^2\alpha=1-\sin^2\alpha=1-\dfrac9{25}=\dfrac{16}{25}$.`,
    R`**Bước 2.** Vì $\dfrac\pi2<\alpha<\pi$ (góc phần tư thứ hai) nên $\cos\alpha<0$: $\cos\alpha=-\dfrac45$.`,
    R`**Bước 3.** $\tan\alpha=\dfrac{3/5}{-4/5}=-\dfrac34$; $\cot\alpha=-\dfrac43$.`,
    R`**Kết luận.** $\cos\alpha=-\dfrac45$, $\tan\alpha=-\dfrac34$, $\cot\alpha=-\dfrac43$.`,
    R`**Thử lại.** $\left(\dfrac35\right)^2+\left(-\dfrac45\right)^2=\dfrac{9+16}{25}=1$ ✓.`
   ] },
 { muc: "TH", de: R`Cho $\tan\alpha=2$ với $\pi<\alpha<\dfrac{3\pi}2$. Tính $\cos\alpha$, $\sin\alpha$.`,
   giai: [
    R`**Phân tích.** Biết $\tan\alpha$, đi tới $\cos\alpha$ nhanh nhất qua $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$; sau đó $\sin\alpha=\tan\alpha\cdot\cos\alpha$.`,
    R`**Bước 1.** $\dfrac1{\cos^2\alpha}=1+\tan^2\alpha=5\Rightarrow\cos^2\alpha=\dfrac15$.`,
    R`**Bước 2.** Góc phần tư thứ ba nên $\cos\alpha<0$: $\cos\alpha=-\dfrac1{\sqrt5}$.`,
    R`**Bước 3.** $\sin\alpha=\tan\alpha\cdot\cos\alpha=2\cdot\left(-\dfrac1{\sqrt5}\right)=-\dfrac2{\sqrt5}$ (âm, đúng với góc phần tư thứ ba).`,
    R`**Kết luận.** $\cos\alpha=-\dfrac{\sqrt5}5$, $\sin\alpha=-\dfrac{2\sqrt5}5$.`,
    R`**Thử lại.** $\sin^2\alpha+\cos^2\alpha=\dfrac45+\dfrac15=1$ ✓ và $\dfrac{\sin\alpha}{\cos\alpha}=2$ ✓.`
   ] },
 { muc: "TH", de: R`Rút gọn $A=\sin(\pi-x)+\cos\left(\dfrac\pi2-x\right)-\sin(\pi+x)$.`,
   giai: [
    R`**Phân tích.** Nhận ra từng cặp góc có liên quan đặc biệt (bù, phụ, hơn kém $\pi$) rồi đưa hết về $\sin x$.`,
    R`**Bước 1.** $\sin(\pi-x)=\sin x$ (góc bù); $\cos\left(\dfrac\pi2-x\right)=\sin x$ (góc phụ); $\sin(\pi+x)=-\sin x$ (hơn kém $\pi$).`,
    R`**Bước 2.** $A=\sin x+\sin x-(-\sin x)=3\sin x$.`,
    R`**Kết luận.** $A=3\sin x$.`,
    R`**Thử lại.** Với $x=\dfrac\pi2$: $A=\sin\dfrac\pi2+\cos0-\sin\dfrac{3\pi}2=1+1+1=3=3\sin\dfrac\pi2$ ✓.`
   ] },
 { muc: "VD", de: R`Tính $\sin\dfrac{17\pi}6$, $\cos\left(-\dfrac{11\pi}3\right)$, $\tan\dfrac{13\pi}4$.`,
   giai: [
    R`**Phân tích.** Bớt đi bội của chu kì ($2\pi$ với $\sin,\cos$; $\pi$ với $\tan$) để đưa về góc trong một vòng, rồi dùng giá trị của góc đặc biệt.`,
    R`**Bước 1.** $\dfrac{17\pi}6=\dfrac{5\pi}6+2\pi$ nên $\sin\dfrac{17\pi}6=\sin\dfrac{5\pi}6=\sin\dfrac\pi6=\dfrac12$.`,
    R`**Bước 2.** $\cos\left(-\dfrac{11\pi}3\right)=\cos\dfrac{11\pi}3$; $\dfrac{11\pi}3=-\dfrac\pi3+4\pi$ nên $\cos\dfrac{11\pi}3=\cos\left(-\dfrac\pi3\right)=\dfrac12$.`,
    R`**Bước 3.** $\tan$ có chu kì $\pi$: $\dfrac{13\pi}4=\dfrac\pi4+3\pi$, nên $\tan\dfrac{13\pi}4=\tan\dfrac\pi4=1$.`,
    R`**Kết luận.** $\sin\dfrac{17\pi}6=\dfrac12$; $\cos\left(-\dfrac{11\pi}3\right)=\dfrac12$; $\tan\dfrac{13\pi}4=1$.`
   ] },
 { muc: "VD", de: R`Cho $\tan\alpha=3$. Tính $B=\dfrac{\sin\alpha+\cos\alpha}{\sin\alpha-\cos\alpha}$.`,
   giai: [
    R`**Phân tích.** Tử và mẫu đều là tổng bậc nhất của $\sin\alpha$, $\cos\alpha$: chia cả tử và mẫu cho $\cos\alpha$ để xuất hiện $\tan\alpha$ đã biết.`,
    R`**Bước 1.** $\tan\alpha=3$ nên $\cos\alpha\ne0$. Chia cả tử và mẫu cho $\cos\alpha$: $B=\dfrac{\tan\alpha+1}{\tan\alpha-1}$.`,
    R`**Bước 2.** $B=\dfrac{3+1}{3-1}=2$.`,
    R`**Kết luận.** $B=2$.`,
    R`**Thử lại.** $\tan\alpha=3$ nghĩa là $\sin\alpha=3\cos\alpha$, nên $B=\dfrac{3\cos\alpha+\cos\alpha}{3\cos\alpha-\cos\alpha}=\dfrac42=2$ ✓.`
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
    R`**Phân tích.** $75^\circ$ không phải góc đặc biệt nhưng $75^\circ=45^\circ+30^\circ$ là tổng hai góc đặc biệt: dùng công thức cộng của $\cos$ (chú ý dấu **trừ** ở giữa).`,
    R`**Bước 1.** $\cos75^\circ=\cos(45^\circ+30^\circ)=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ$.`,
    R`**Bước 2.** $=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2-\dfrac{\sqrt2}2\cdot\dfrac12=\dfrac{\sqrt6-\sqrt2}4$.`,
    R`**Kết luận.** $\cos75^\circ=\dfrac{\sqrt6-\sqrt2}4$.`,
    R`**Thử lại.** $\dfrac{2{,}449-1{,}414}4\approx0{,}259$, khớp với máy tính $\cos75^\circ\approx0{,}259$ ✓.`
   ] },
 { muc: "TH", de: R`Cho $\sin\alpha=\dfrac45$, $0<\alpha<\dfrac\pi2$. Tính $\sin2\alpha$ và $\cos2\alpha$.`,
   giai: [
    R`**Phân tích.** Công thức nhân đôi cần cả $\sin\alpha$ và $\cos\alpha$. Tìm $\cos\alpha$ trước (chọn dấu theo góc phần tư), rồi thay vào.`,
    R`**Bước 1.** $\cos\alpha>0$ nên $\cos\alpha=\sqrt{1-\dfrac{16}{25}}=\dfrac35$.`,
    R`**Bước 2.** $\sin2\alpha=2\cdot\dfrac45\cdot\dfrac35=\dfrac{24}{25}$.`,
    R`**Bước 3.** $\cos2\alpha=1-2\sin^2\alpha=1-\dfrac{32}{25}=-\dfrac7{25}$.`,
    R`**Kết luận.** $\sin2\alpha=\dfrac{24}{25}$, $\cos2\alpha=-\dfrac7{25}$.`,
    R`**Thử lại.** $\left(\dfrac{24}{25}\right)^2+\left(\dfrac7{25}\right)^2=\dfrac{576+49}{625}=1$ ✓.`
   ] },
 { muc: "TH", de: R`Cho $\tan\alpha=\dfrac12$. Tính $\tan\left(\alpha+\dfrac\pi4\right)$.`,
   giai: [
    R`**Phân tích.** Góc $\alpha+\dfrac\pi4$ là tổng của hai góc, một góc đã biết $\tan$, góc kia đặc biệt ($\tan\dfrac\pi4=1$): dùng **công thức cộng** của $\tan$.`,
    R`**Bước 1.** Viết công thức: $\tan\left(\alpha+\dfrac\pi4\right)=\dfrac{\tan\alpha+\tan\frac\pi4}{1-\tan\alpha\tan\frac\pi4}=\dfrac{\tan\alpha+1}{1-\tan\alpha}$.`,
    R`**Bước 2.** Thay $\tan\alpha=\dfrac12$: tử $=\dfrac12+1=\dfrac32$, mẫu $=1-\dfrac12=\dfrac12$.`,
    R`**Bước 3.** Chia: $\dfrac{3/2}{1/2}=3$.`,
    R`**Kết luận.** $\tan\left(\alpha+\dfrac\pi4\right)=3$.`,
    R`**Nhận xét.** Công thức $\tan\left(\alpha+\dfrac\pi4\right)=\dfrac{1+\tan\alpha}{1-\tan\alpha}$ hay gặp, nên nhớ.`
   ] },
 { muc: "VD", de: R`Rút gọn $C=\dfrac{1-\cos2x}{\sin2x}$ (với $\sin2x\ne0$).`,
   giai: [
    R`**Phân tích.** Thấy $1-\cos2x$ thì nghĩ đến **hạ bậc** $1-\cos2x=2\sin^2x$; mẫu $\sin2x$ dùng nhân đôi. Sau đó rút gọn nhân tử chung.`,
    R`**Bước 1.** $1-\cos2x=2\sin^2x$; $\sin2x=2\sin x\cos x$.`,
    R`**Bước 2.** $C=\dfrac{2\sin^2x}{2\sin x\cos x}=\dfrac{\sin x}{\cos x}=\tan x$.`,
    R`**Kết luận.** $C=\tan x$.`,
    R`**Thử lại.** Với $x=\dfrac\pi4$: $C=\dfrac{1-\cos\frac\pi2}{\sin\frac\pi2}=1=\tan\dfrac\pi4$ ✓.`
   ] },
 { muc: "VD", de: R`Tính $\cos^2\dfrac\pi8$ và $\cos\dfrac\pi8$.`,
   giai: [
    R`**Phân tích.** $\dfrac\pi8$ là nửa của góc đặc biệt $\dfrac\pi4$: dùng công thức **hạ bậc** $\cos^2a=\dfrac{1+\cos2a}2$ với $a=\dfrac\pi8$.`,
    R`**Bước 1.** Hạ bậc: $\cos^2\dfrac\pi8=\dfrac{1+\cos\frac\pi4}2=\dfrac{1+\frac{\sqrt2}2}2=\dfrac{2+\sqrt2}4$.`,
    R`**Bước 2.** Vì $0<\dfrac\pi8<\dfrac\pi2$ nên $\cos\dfrac\pi8>0$: $\cos\dfrac\pi8=\dfrac{\sqrt{2+\sqrt2}}2$.`,
    R`**Kết luận.** $\cos^2\dfrac\pi8=\dfrac{2+\sqrt2}4$; $\cos\dfrac\pi8=\dfrac{\sqrt{2+\sqrt2}}2\approx0{,}924$.`
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
    R`**Phân tích.** Tích hai $\cos$ của các góc không đặc biệt, nhưng tổng và hiệu của chúng ($90^\circ$, $60^\circ$) lại đặc biệt: dùng công thức **tích thành tổng**.`,
    R`**Bước 1.** Công thức: $\cos a\cos b=\dfrac12[\cos(a-b)+\cos(a+b)]$ với $a=75^\circ$, $b=15^\circ$.`,
    R`**Bước 2.** $a-b=60^\circ$, $a+b=90^\circ$, nên $\cos75^\circ\cos15^\circ=\dfrac12[\cos60^\circ+\cos90^\circ]$.`,
    R`**Bước 3.** Thay giá trị: $=\dfrac12\left(\dfrac12+0\right)=\dfrac14$.`,
    R`**Kết luận.** $\cos75^\circ\cos15^\circ=\dfrac14$.`,
    R`**Thử lại.** Cách khác: $\cos15^\circ=\sin75^\circ$ nên tích $=\sin75^\circ\cos75^\circ=\dfrac12\sin150^\circ=\dfrac14$ ✓.`
   ] },
 { muc: "TH", de: R`Tính $\sin75^\circ+\sin15^\circ$.`,
   giai: [
    R`**Phân tích.** Tổng hai $\sin$ có nửa tổng ($45^\circ$) và nửa hiệu ($30^\circ$) đều đặc biệt: dùng công thức **tổng thành tích**.`,
    R`**Bước 1.** $=2\sin\dfrac{75^\circ+15^\circ}2\cos\dfrac{75^\circ-15^\circ}2=2\sin45^\circ\cos30^\circ$.`,
    R`**Bước 2.** $=2\cdot\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2=\dfrac{\sqrt6}2$.`,
    R`**Kết luận.** $\sin75^\circ+\sin15^\circ=\dfrac{\sqrt6}2$.`,
    R`**Thử lại.** Dùng công thức cộng: $\sin75^\circ=\dfrac{\sqrt6+\sqrt2}4$, $\sin15^\circ=\dfrac{\sqrt6-\sqrt2}4$, tổng bằng $\dfrac{\sqrt6}2$ ✓.`
   ] },
 { muc: "TH", de: R`Rút gọn $E=\dfrac{\sin x+\sin3x}{\cos x+\cos3x}$.`,
   giai: [
    R`**Phân tích.** Ghép $\sin3x$ với $\sin x$, $\cos3x$ với $\cos x$ rồi biến thành tích: tử và mẫu sẽ cùng có nhân tử $2\cos x$ để rút gọn.`,
    R`**Bước 1.** Tử: $\sin3x+\sin x=2\sin2x\cos x$. Mẫu: $\cos3x+\cos x=2\cos2x\cos x$.`,
    R`**Bước 2.** $E=\dfrac{2\sin2x\cos x}{2\cos2x\cos x}=\tan2x$ (với các giá trị $x$ làm mẫu khác $0$).`,
    R`**Kết luận.** $E=\tan2x$.`
   ] },
 { muc: "VD", de: R`Chứng minh $\cos20^\circ\cos40^\circ\cos80^\circ=\dfrac18$.`,
   giai: [
    R`**Phân tích.** Tích các $\cos$ của góc **gấp đôi nhau** ($20^\circ,40^\circ,80^\circ$): nhân thêm $\sin$ của góc nhỏ nhất rồi dùng $\sin a\cos a=\dfrac12\sin2a$ liên tiếp.`,
    R`**Bước 1.** Gọi $P=\cos20^\circ\cos40^\circ\cos80^\circ$. Nhân hai vế với $\sin20^\circ\ (\ne0)$ và dùng $\sin a\cos a=\dfrac12\sin2a$ liên tiếp:`,
    R`**Bước 2.** $P\sin20^\circ=\dfrac12\sin40^\circ\cos40^\circ\cos80^\circ=\dfrac14\sin80^\circ\cos80^\circ=\dfrac18\sin160^\circ$.`,
    R`**Bước 3.** $\sin160^\circ=\sin(180^\circ-20^\circ)=\sin20^\circ$, nên $P\sin20^\circ=\dfrac18\sin20^\circ\Rightarrow P=\dfrac18$.`,
    R`**Kết luận.** $\cos20^\circ\cos40^\circ\cos80^\circ=\dfrac18$ (điều phải chứng minh).`
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
    R`**Phân tích.** $\tan u$ xác định khi $\cos u\ne0$, tức $u\ne\dfrac\pi2+k\pi$. Ở đây $u=2x-\dfrac\pi3$; giải điều kiện theo $x$, nhớ chia cả $k\pi$ cho $2$.`,
    R`**Bước 1.** Điều kiện: $2x-\dfrac\pi3\ne\dfrac\pi2+k\pi\Leftrightarrow2x\ne\dfrac{5\pi}6+k\pi\Leftrightarrow x\ne\dfrac{5\pi}{12}+k\dfrac\pi2$.`,
    R`**Bước 2.** $D=\mathbb R\setminus\left\{\dfrac{5\pi}{12}+k\dfrac\pi2\mid k\in\mathbb Z\right\}$.`,
    R`**Kết luận.** $D=\mathbb R\setminus\left\{\dfrac{5\pi}{12}+k\dfrac\pi2\mid k\in\mathbb Z\right\}$.`
   ] },
 { muc: "TH", de: R`Tìm tập xác định của $y=\dfrac{1}{\sin x-1}$ và $y=\sqrt{1-\cos x}$.`,
   giai: [
    R`**Phân tích.** Phân thức cần mẫu khác $0$; căn bậc hai cần biểu thức dưới căn không âm. Dùng $-1\le\sin x,\cos x\le1$ để xét từng điều kiện.`,
    R`**Bước 1.** $y=\dfrac1{\sin x-1}$: cần $\sin x\ne1\Leftrightarrow x\ne\dfrac\pi2+k2\pi$. $D=\mathbb R\setminus\left\{\dfrac\pi2+k2\pi\mid k\in\mathbb Z\right\}$.`,
    R`**Bước 2.** $y=\sqrt{1-\cos x}$: cần $1-\cos x\ge0$, luôn đúng vì $\cos x\le1$. $D=\mathbb R$.`,
    R`**Kết luận.** Hàm thứ nhất có $D=\mathbb R\setminus\left\{\dfrac\pi2+k2\pi\right\}$; hàm thứ hai có $D=\mathbb R$.`
   ] },
 { muc: "TH", de: R`Xét tính chẵn, lẻ của: a) $f(x)=x^2\cos x$; b) $g(x)=\sin x+\tan x$; c) $h(x)=\sin x+\cos x$.`,
   giai: [
    R`**Phân tích.** Hai việc theo thứ tự: kiểm tra tập xác định **đối xứng**, rồi tính $f(-x)$ và so với $f(x)$, $-f(x)$.`,
    R`**Bước 1.** a) $D=\mathbb R$ đối xứng; $f(-x)=(-x)^2\cos(-x)=x^2\cos x=f(x)$: hàm chẵn.`,
    R`**Bước 2.** b) $D=\mathbb R\setminus\left\{\frac\pi2+k\pi\right\}$ đối xứng; $g(-x)=-\sin x-\tan x=-g(x)$: hàm lẻ.`,
    R`**Bước 3.** c) $h\left(\frac\pi4\right)=\sqrt2$, $h\left(-\frac\pi4\right)=-\frac{\sqrt2}2+\frac{\sqrt2}2=0$. Giá trị này khác $h\left(\frac\pi4\right)$ và khác $-h\left(\frac\pi4\right)$: hàm không chẵn, không lẻ.`,
    R`**Kết luận.** a) chẵn; b) lẻ; c) không chẵn, không lẻ.`
   ] },
 { muc: "VD", de: R`Tìm chu kì của các hàm số $y=\sin3x$ và $y=\cos\dfrac x2$.`,
   giai: [
    R`**Phân tích.** Hàm $\sin(ax)$, $\cos(ax)$ có chu kì $T=\dfrac{2\pi}{|a|}$. Tính $T$ rồi kiểm tra lại bằng định nghĩa $f(x+T)=f(x)$.`,
    R`**Bước 1.** $y=\sin3x$: $T=\dfrac{2\pi}3$. Thật vậy, $\sin\left(3\left(x+\frac{2\pi}3\right)\right)=\sin(3x+2\pi)=\sin3x$.`,
    R`**Bước 2.** $y=\cos\dfrac x2$: $T=\dfrac{2\pi}{1/2}=4\pi$. Thật vậy, $\cos\dfrac{x+4\pi}2=\cos\left(\dfrac x2+2\pi\right)=\cos\dfrac x2$.`,
    R`**Kết luận.** Chu kì của $y=\sin3x$ là $\dfrac{2\pi}3$; của $y=\cos\dfrac x2$ là $4\pi$.`,
    R`**Nhận xét.** Hệ số $a$ càng lớn thì đồ thị "dao động" càng nhanh, chu kì càng ngắn.`
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
    R`**Phân tích.** Bắt đầu từ $-1\le\cos x\le1$, rồi nhân, cộng dần để dựng lên biểu thức $3-2\cos x$. Khi nhân với số âm phải **đổi chiều** bất đẳng thức.`,
    R`**Bước 1.** $-1\le\cos x\le1\Rightarrow-2\le-2\cos x\le2$ (nhân $-2$, đổi chiều) $\Rightarrow1\le y\le5$.`,
    R`**Bước 2.** $y=5$ khi $\cos x=-1\Leftrightarrow x=\pi+k2\pi$; $y=1$ khi $\cos x=1\Leftrightarrow x=k2\pi$.`,
    R`**Kết luận.** $\max y=5$, $\min y=1$.`
   ] },
 { muc: "TH", de: R`Tìm tập giá trị của $y=\sin x+\sqrt3\cos x$.`,
   giai: [
    R`**Phân tích.** Dạng $a\sin x+b\cos x$: đưa ra ngoài $\sqrt{a^2+b^2}=\sqrt{1+3}=2$, phần trong ngoặc là công thức cộng của $\sin$.`,
    R`**Bước 1.** $y=2\left(\dfrac12\sin x+\dfrac{\sqrt3}2\cos x\right)=2\left(\sin x\cos\dfrac\pi3+\cos x\sin\dfrac\pi3\right)=2\sin\left(x+\dfrac\pi3\right)$.`,
    R`**Bước 2.** Vì $-1\le\sin\left(x+\frac\pi3\right)\le1$ nên $-2\le y\le2$. Tập giá trị $[-2;2]$.`,
    R`**Bước 3.** Ví dụ $y=2$ khi $x+\dfrac\pi3=\dfrac\pi2$, tức $x=\dfrac\pi6$: thử lại $\dfrac12+\sqrt3\cdot\dfrac{\sqrt3}2=2$ ✓.`,
    R`**Kết luận.** Tập giá trị của hàm số là $[-2;2]$.`
   ] },
 { muc: "VD", de: R`Tìm GTLN, GTNN của $y=\cos^2x-2\sin x$.`,
   giai: [
    R`**Phân tích.** Có cả $\cos^2x$ và $\sin x$: đổi $\cos^2x=1-\sin^2x$ để chỉ còn một ẩn $\sin x$, rồi đặt $t=\sin x$ với $t\in[-1;1]$.`,
    R`**Bước 1.** $\cos^2x=1-\sin^2x$. Đặt $t=\sin x$, $t\in[-1;1]$: $y=1-t^2-2t=2-(t+1)^2$.`,
    R`**Bước 2.** Trên $[-1;1]$: $(t+1)^2$ nhỏ nhất bằng $0$ khi $t=-1$, lớn nhất bằng $4$ khi $t=1$.`,
    R`**Bước 3.** $\max y=2$ khi $\sin x=-1\Leftrightarrow x=-\dfrac\pi2+k2\pi$; $\min y=2-4=-2$ khi $\sin x=1\Leftrightarrow x=\dfrac\pi2+k2\pi$.`,
    R`**Kết luận.** $\max y=2$, $\min y=-2$.`,
    R`**Thử lại.** $x=-\dfrac\pi2$: $y=0-2\cdot(-1)=2$ ✓; $x=\dfrac\pi2$: $y=0-2=-2$ ✓.`
   ] },
 { muc: "VD", de: R`Độ cao (mét) của một cabin vòng quay so với mặt đất sau $t$ phút là $h(t)=30-25\cos\dfrac{\pi t}{15}$. Cabin lên cao nhất là bao nhiêu mét và lần đầu tiên đạt độ cao đó sau bao nhiêu phút?`,
   giai: [
    R`**Phân tích.** Độ cao lớn nhất khi $-25\cos\dfrac{\pi t}{15}$ lớn nhất, tức $\cos\dfrac{\pi t}{15}=-1$. Sau đó giải phương trình và chọn $t>0$ nhỏ nhất.`,
    R`**Bước 1.** $-1\le\cos\dfrac{\pi t}{15}\le1\Rightarrow5\le h(t)\le55$.`,
    R`**Bước 2.** $h=55$ khi $\cos\dfrac{\pi t}{15}=-1\Leftrightarrow\dfrac{\pi t}{15}=\pi+k2\pi\Leftrightarrow t=15+30k$.`,
    R`**Bước 3.** Lần đầu ($t>0$ nhỏ nhất): $t=15$ phút. **Kết luận.** Cao nhất $55$ m, sau $15$ phút. (Lúc $t=0$, cabin ở thấp nhất $5$ m; một vòng mất $30$ phút.)`
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
    R`**Phân tích.** Tìm góc đặc biệt có $\sin$ bằng $\dfrac12$ (đó là $\dfrac\pi6$), rồi viết **đủ hai họ nghiệm** của phương trình $\sin x=\sin\alpha$.`,
    R`**Bước 1.** $\dfrac12=\sin\dfrac\pi6$, nên $\sin x=\sin\dfrac\pi6$.`,
    R`**Bước 2.** $\Leftrightarrow x=\dfrac\pi6+k2\pi$ hoặc $x=\pi-\dfrac\pi6+k2\pi=\dfrac{5\pi}6+k2\pi$ ($k\in\mathbb Z$).`,
    R`**Kết luận.** $x=\dfrac\pi6+k2\pi$ hoặc $x=\dfrac{5\pi}6+k2\pi$ ($k\in\mathbb Z$).`,
    R`**Thử lại.** $\sin\dfrac{5\pi}6=\sin\left(\pi-\dfrac\pi6\right)=\dfrac12$ ✓.`
   ] },
 { muc: "TH", de: R`Giải phương trình $\cos\left(2x-\dfrac\pi3\right)=-\dfrac{\sqrt2}2$.`,
   giai: [
    R`**Phân tích.** Coi $u=2x-\dfrac\pi3$ là một ẩn: giải $\cos u=-\dfrac{\sqrt2}2$ như phương trình cơ bản, rồi mới tìm $x$.`,
    R`**Bước 1.** $-\dfrac{\sqrt2}2=\cos\dfrac{3\pi}4$. Phương trình $\Leftrightarrow2x-\dfrac\pi3=\pm\dfrac{3\pi}4+k2\pi$.`,
    R`**Bước 2.** $\Leftrightarrow2x=\dfrac\pi3\pm\dfrac{3\pi}4+k2\pi\Leftrightarrow x=\dfrac\pi6\pm\dfrac{3\pi}8+k\pi$.`,
    R`**Kết quả.** $x=\dfrac{13\pi}{24}+k\pi$ hoặc $x=-\dfrac{5\pi}{24}+k\pi$ ($k\in\mathbb Z$).`,
    R`**Thử lại.** $x=-\dfrac{5\pi}{24}$: $2x-\dfrac\pi3=-\dfrac{5\pi}{12}-\dfrac{4\pi}{12}=-\dfrac{3\pi}4$ và $\cos\left(-\dfrac{3\pi}4\right)=-\dfrac{\sqrt2}2$ ✓.`
   ] },
 { muc: "TH", de: R`Giải phương trình $\sin3x=\sin x$.`,
   giai: [
    R`**Phân tích.** Hai vế cùng là $\sin$: dùng ngay $\sin u=\sin v\Leftrightarrow u=v+k2\pi$ hoặc $u=\pi-v+k2\pi$, với $u=3x$, $v=x$. Đừng quên họ thứ hai.`,
    R`**Bước 1.** Họ thứ nhất: $3x=x+k2\pi\Leftrightarrow2x=k2\pi\Leftrightarrow x=k\pi$.`,
    R`**Bước 2.** Họ thứ hai: $3x=\pi-x+k2\pi\Leftrightarrow4x=\pi+k2\pi\Leftrightarrow x=\dfrac\pi4+k\dfrac\pi2$ (chia cả $k2\pi$ cho $4$).`,
    R`**Kết luận.** $x=k\pi$ hoặc $x=\dfrac\pi4+k\dfrac\pi2$ ($k\in\mathbb Z$).`,
    R`**Thử lại.** $x=\dfrac\pi4$: $\sin\dfrac{3\pi}4=\dfrac{\sqrt2}2=\sin\dfrac\pi4$ ✓; $x=\pi$: $\sin3\pi=0=\sin\pi$ ✓.`
   ] },
 { muc: "VD", de: R`Tìm các nghiệm thuộc đoạn $[0;\pi]$ của phương trình $\sin2x=\cos x$.`,
   giai: [
    R`**Phân tích.** Một vế $\sin$, một vế $\cos$: đổi $\cos x=\sin\left(\dfrac\pi2-x\right)$ để đưa về dạng $\sin u=\sin v$. Giải xong mới chọn nghiệm trong $[0;\pi]$.`,
    R`**Bước 1.** $\cos x=\sin\left(\dfrac\pi2-x\right)$. Phương trình $\Leftrightarrow\sin2x=\sin\left(\dfrac\pi2-x\right)$.`,
    R`**Bước 2.** $2x=\dfrac\pi2-x+k2\pi\Leftrightarrow x=\dfrac\pi6+k\dfrac{2\pi}3$; hoặc $2x=\pi-\dfrac\pi2+x+k2\pi\Leftrightarrow x=\dfrac\pi2+k2\pi$.`,
    R`**Bước 3.** Trong $[0;\pi]$: họ thứ nhất cho $x=\dfrac\pi6$ ($k=0$), $x=\dfrac{5\pi}6$ ($k=1$); họ thứ hai cho $x=\dfrac\pi2$.`,
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
    R`**Phân tích.** Phương trình cơ bản của $\tan$: tìm góc đặc biệt có $\tan$ bằng $\sqrt3$. Nhớ $\tan$ có chu kì $\pi$ nên nghiệm có dạng $\alpha+k\pi$.`,
    R`**Bước 1.** Điều kiện: $\cos x\ne0\Leftrightarrow x\ne\dfrac\pi2+k\pi$.`,
    R`**Bước 2.** $\tan\dfrac\pi3=\sqrt3$, nên phương trình $\Leftrightarrow\tan x=\tan\dfrac\pi3\Leftrightarrow x=\dfrac\pi3+k\pi$. Các nghiệm này thoả điều kiện.`,
    R`**Kết luận.** $x=\dfrac\pi3+k\pi$ ($k\in\mathbb Z$).`,
    R`**Thử lại.** $x=\dfrac{4\pi}3$ ($k=1$): $\tan\dfrac{4\pi}3=\tan\dfrac\pi3=\sqrt3$ ✓.`
   ] },
 { muc: "TH", de: R`Giải phương trình $\cot\left(x+\dfrac\pi6\right)=-1$.`,
   giai: [
    R`**Phân tích.** Coi $u=x+\dfrac\pi6$: giải $\cot u=-1$ như phương trình cơ bản, rồi trừ $\dfrac\pi6$ để ra $x$.`,
    R`**Bước 1.** Điều kiện: $\sin\left(x+\dfrac\pi6\right)\ne0$.`,
    R`**Bước 2.** $\cot\dfrac{3\pi}4=\dfrac{\cos\frac{3\pi}4}{\sin\frac{3\pi}4}=\dfrac{-\sqrt2/2}{\sqrt2/2}=-1$, nên phương trình $\Leftrightarrow x+\dfrac\pi6=\dfrac{3\pi}4+k\pi$.`,
    R`**Bước 3.** $x=\dfrac{3\pi}4-\dfrac\pi6+k\pi=\dfrac{9\pi-2\pi}{12}+k\pi=\dfrac{7\pi}{12}+k\pi$. Khi đó $\sin\left(x+\frac\pi6\right)=\sin\left(\frac{3\pi}4+k\pi\right)\ne0$, thoả điều kiện.`,
    R`**Kết luận.** $x=\dfrac{7\pi}{12}+k\pi$ ($k\in\mathbb Z$).`
   ] },
 { muc: "TH", de: R`Giải phương trình $\sin2x-\cos x=0$.`,
   giai: [
    R`**Phân tích.** Viết $\sin2x=2\sin x\cos x$ thì cả hai số hạng có nhân tử chung $\cos x$: đặt nhân tử chung, đưa về **phương trình tích**. Không chia cho $\cos x$ vì sẽ mất nghiệm.`,
    R`**Bước 1.** $2\sin x\cos x-\cos x=0\Leftrightarrow\cos x(2\sin x-1)=0$.`,
    R`**Bước 2.** $\cos x=0\Leftrightarrow x=\dfrac\pi2+k\pi$.`,
    R`**Bước 3.** $\sin x=\dfrac12\Leftrightarrow x=\dfrac\pi6+k2\pi$ hoặc $x=\dfrac{5\pi}6+k2\pi$.`,
    R`**Kết luận.** $x=\dfrac\pi2+k\pi$, $x=\dfrac\pi6+k2\pi$ hoặc $x=\dfrac{5\pi}6+k2\pi$ ($k\in\mathbb Z$).`
   ] },
 { muc: "VD", de: R`Giải phương trình $2\sin^2x-3\sin x+1=0$.`,
   giai: [
    R`**Phân tích.** Phương trình bậc hai theo $\sin x$: đặt $t=\sin x$ (điều kiện $-1\le t\le1$), giải bậc hai, loại nghiệm $t$ ngoài $[-1;1]$.`,
    R`**Bước 1.** Đặt $t=\sin x$, $-1\le t\le1$: $2t^2-3t+1=0\Leftrightarrow t=1$ hoặc $t=\dfrac12$ (đều thoả mãn).`,
    R`**Bước 2.** $\sin x=1\Leftrightarrow x=\dfrac\pi2+k2\pi$.`,
    R`**Bước 3.** $\sin x=\dfrac12\Leftrightarrow x=\dfrac\pi6+k2\pi$ hoặc $x=\dfrac{5\pi}6+k2\pi$.`,
    R`**Kết luận.** $x=\dfrac\pi2+k2\pi$, $x=\dfrac\pi6+k2\pi$ hoặc $x=\dfrac{5\pi}6+k2\pi$ ($k\in\mathbb Z$).`,
    R`**Thử lại.** $x=\dfrac\pi6$: $2\cdot\dfrac14-3\cdot\dfrac12+1=0$ ✓.`
   ] },
 { muc: "VD", de: R`Giải phương trình $\tan2x=\tan x$.`,
   giai: [
    R`**Phân tích.** Hai vế cùng là $\tan$: $\tan u=\tan v\Leftrightarrow u=v+k\pi$. Có $\tan$ nên **đặt điều kiện trước, đối chiếu sau**.`,
    R`**Bước 1.** Điều kiện: $\cos2x\ne0$ và $\cos x\ne0$.`,
    R`**Bước 2.** $\tan2x=\tan x\Leftrightarrow2x=x+k\pi\Leftrightarrow x=k\pi$.`,
    R`**Bước 3.** Kiểm tra điều kiện: $\cos(k\pi)=\pm1\ne0$, $\cos(2k\pi)=1\ne0$: thoả mãn.`,
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
    R`**Phân tích.** Số hạng $u_n$ có công thức theo $n$: thay $n=1,2,3$. Câu hỏi "là số hạng thứ mấy" nghĩa là giải phương trình $u_k=\dfrac74$ tìm $k$, và $k$ phải **nguyên dương**.`,
    R`**Bước 1.** $u_1=\dfrac12$, $u_2=\dfrac33=1$, $u_3=\dfrac54$.`,
    R`**Bước 2.** $\dfrac{2k-1}{k+1}=\dfrac74\Leftrightarrow8k-4=7k+7\Leftrightarrow k=11$ (nguyên dương, nhận).`,
    R`**Thử lại.** $u_{11}=\dfrac{21}{12}=\dfrac74$ ✓. Đó là số hạng thứ $11$.`,
    R`**Kết luận.** $u_1=\dfrac12$, $u_2=1$, $u_3=\dfrac54$; số $\dfrac74$ là số hạng thứ $11$.`
   ] },
 { muc: "TH", de: R`Cho dãy số $u_1=2$, $u_{n+1}=2u_n-1$. Tính $5$ số hạng đầu và dự đoán công thức $u_n$.`,
   giai: [
    R`**Phân tích.** Dãy cho bằng hệ thức truy hồi: tính lần lượt từng số hạng từ số hạng trước. Muốn dự đoán công thức, so các số hạng với một dãy quen thuộc (ở đây là luỹ thừa của $2$).`,
    R`**Bước 1.** $u_2=2\cdot2-1=3$; $u_3=5$; $u_4=9$; $u_5=17$.`,
    R`**Nhận xét.** $u_n-1$ lần lượt là $1,2,4,8,16$, tức $2^{n-1}$.`,
    R`**Bước 2.** Dự đoán $u_n=2^{n-1}+1$. (Thử với truy hồi: $2(2^{n-1}+1)-1=2^n+1=u_{n+1}$ ✓.)`,
    R`**Kết luận.** Năm số hạng đầu là $2,3,5,9,17$; dự đoán $u_n=2^{n-1}+1$.`,
    R`**Nhận xét.** Dự đoán từ vài số hạng chỉ là phỏng đoán; muốn khẳng định chắc chắn phải chứng minh bằng quy nạp.`
   ] },
 { muc: "TH", de: R`Xét tính tăng, giảm và bị chặn của dãy $u_n=\dfrac{2n-1}{n+1}$.`,
   giai: [
    R`**Phân tích.** Xét dấu hiệu $u_{n+1}-u_n$ để biết tăng hay giảm. Tách phần nguyên $u_n=2-\dfrac3{n+1}$ giúp tính hiệu gọn và thấy ngay chặn trên.`,
    R`**Bước 1.** Tách: $u_n=\dfrac{2(n+1)-3}{n+1}=2-\dfrac3{n+1}$.`,
    R`**Bước 2.** $u_{n+1}-u_n=\dfrac3{n+1}-\dfrac3{n+2}=\dfrac{3}{(n+1)(n+2)}>0$ với mọi $n\ge1$: dãy **tăng**.`,
    R`**Bước 3.** Vì dãy tăng nên $u_n\ge u_1=\dfrac12$; vì $\dfrac3{n+1}>0$ nên $u_n<2$. Vậy $\dfrac12\le u_n<2$: dãy **bị chặn**.`,
    R`**Kết luận.** Dãy tăng và bị chặn: $\dfrac12\le u_n<2$ với mọi $n\ge1$.`
   ] },
 { muc: "VD", de: R`Chứng minh dãy $u_n=\dfrac{n}{3^n}$ là dãy giảm và bị chặn.`,
   giai: [
    R`**Phân tích.** Số hạng có luỹ thừa $3^n$ và mọi $u_n>0$: xét **thương** $\dfrac{u_{n+1}}{u_n}$ so với $1$ sẽ gọn hơn xét hiệu.`,
    R`**Bước 1.** $u_n>0$ với mọi $n$. Xét thương: $\dfrac{u_{n+1}}{u_n}=\dfrac{n+1}{3^{n+1}}\cdot\dfrac{3^n}{n}=\dfrac{n+1}{3n}$.`,
    R`**Bước 2.** $\dfrac{n+1}{3n}<1\Leftrightarrow n+1<3n\Leftrightarrow n>\dfrac12$, đúng với mọi $n\ge1$. Vậy $u_{n+1}<u_n$: dãy giảm.`,
    R`**Bước 3.** Dãy giảm nên $u_n\le u_1=\dfrac13$; lại có $u_n>0$. Vậy $0<u_n\le\dfrac13$: dãy bị chặn.`,
    R`**Kết luận.** Dãy $u_n=\dfrac n{3^n}$ giảm và bị chặn: $0<u_n\le\dfrac13$.`
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
    R`**Phân tích.** Đã có đủ $u_1$ và $d$: dùng thẳng hai công thức $u_n=u_1+(n-1)d$ và $S_n=\dfrac{n(u_1+u_n)}2$.`,
    R`**Bước 1.** Số hạng thứ $10$: $u_{10}=u_1+9d=3+9\cdot4=39$.`,
    R`**Bước 2.** Tổng $10$ số hạng đầu: $S_{10}=\dfrac{10\,(u_1+u_{10})}2=\dfrac{10\cdot(3+39)}2=5\cdot42=210$.`,
    R`**Kết luận.** $u_{10}=39$, $S_{10}=210$.`,
    R`**Thử lại.** Dùng công thức thứ hai $S_n=nu_1+\dfrac{n(n-1)}2d$: $S_{10}=30+45\cdot4=210$ ✓.`
   ] },
 { muc: "TH", de: R`Cho CSC có $u_3=7$, $u_8=22$. Tìm $u_1$, $d$ và tính $S_{20}$.`,
   giai: [
    R`**Phân tích.** Cho hai số hạng bất kì: viết cả hai theo $u_1$ và $d$, được hệ hai phương trình bậc nhất. Trừ vế để khử $u_1$.`,
    R`**Bước 1.** $\begin{cases}u_1+2d=7\\u_1+7d=22\end{cases}$. Trừ vế: $5d=15\Rightarrow d=3$, suy ra $u_1=1$.`,
    R`**Bước 2.** $u_{20}=1+19\cdot3=58$; $S_{20}=\dfrac{20\,(1+58)}2=590$.`,
    R`**Kết luận.** $u_1=1$, $d=3$, $S_{20}=590$.`,
    R`**Thử lại.** $u_3=1+2\cdot3=7$ ✓; $u_8=1+7\cdot3=22$ ✓.`
   ] },
 { muc: "TH", de: R`Tìm $x$ để ba số $x-1$, $x+3$, $3x+1$ theo thứ tự lập thành cấp số cộng.`,
   giai: [
    R`**Phân tích.** Ba số $a,b,c$ theo thứ tự lập CSC khi và chỉ khi $a+c=2b$ (số giữa là trung bình cộng hai số bên).`,
    R`**Bước 1.** Điều kiện: $(x-1)+(3x+1)=2(x+3)\Leftrightarrow4x=2x+6\Leftrightarrow x=3$.`,
    R`**Thử lại.** ba số $2,6,10$ có công sai $4$ ✓.`,
    R`**Kết luận.** $x=3$.`
   ] },
 { muc: "VD", de: R`Một hội trường có $20$ hàng ghế. Hàng đầu có $15$ ghế, mỗi hàng sau nhiều hơn hàng trước $2$ ghế. Hỏi hàng cuối có bao nhiêu ghế và cả hội trường có bao nhiêu ghế?`,
   giai: [
    R`**Phân tích.** "Mỗi hàng sau nhiều hơn hàng trước $2$ ghế": lượng tăng không đổi, nên số ghế các hàng là một **cấp số cộng**.`,
    R`**Bước 1.** Số ghế các hàng lập CSC với $u_1=15$, $d=2$.`,
    R`**Bước 2.** Hàng cuối: $u_{20}=15+19\cdot2=53$ ghế.`,
    R`**Bước 3.** Tổng: $S_{20}=\dfrac{20\,(15+53)}2=680$ ghế.`,
    R`**Kết luận.** Hàng cuối có $53$ ghế; cả hội trường có $680$ ghế.`,
    R`**Thử lại.** $S_{20}=20\cdot15+\dfrac{20\cdot19}2\cdot2=300+380=680$ ✓.`
   ] },
 { muc: "VD", de: R`Tổng của bao nhiêu số lẻ đầu tiên $1+3+5+\dots$ bằng $225$?`,
   giai: [
    R`**Phân tích.** Các số lẻ liên tiếp cách đều nhau $2$ đơn vị nên lập CSC. Tính $S_n$ theo $n$, cho bằng $225$ rồi giải.`,
    R`**Bước 1.** Các số lẻ lập CSC $u_1=1$, $d=2$. $S_n=\dfrac{n\,[2+(n-1)\cdot2]}2=n^2$.`,
    R`**Bước 2.** $n^2=225\Leftrightarrow n=15$ ($n>0$).`,
    R`**Kết luận.** $15$ số lẻ đầu tiên (từ $1$ đến $29$).`,
    R`**Thử lại.** $1+3+\dots+29$ có $15$ số hạng, tổng $\dfrac{15\cdot(1+29)}2=225$ ✓.`
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
    R`**Phân tích.** Đã có $u_1$ và $q$: dùng $u_n=u_1q^{n-1}$ và $S_n=\dfrac{u_1(1-q^n)}{1-q}$ ($q\ne1$).`,
    R`**Bước 1.** Số hạng thứ $5$: $u_5=u_1q^4=2\cdot3^4=2\cdot81=162$.`,
    R`**Bước 2.** Tổng $5$ số hạng đầu: $S_5=\dfrac{2\,(1-3^5)}{1-3}=\dfrac{2\cdot(1-243)}{-2}=242$.`,
    R`**Kết luận.** $u_5=162$, $S_5=242$.`,
    R`**Thử lại.** Năm số hạng là $2,6,18,54,162$; cộng lại được $242$ ✓.`
   ] },
 { muc: "TH", de: R`Cho CSN có $u_2=6$, $u_5=162$. Tìm $u_1$, $q$ và tính $S_6$.`,
   giai: [
    R`**Phân tích.** Viết hai số hạng theo $u_1$ và $q$. Với CSN, **chia** hai phương trình (thay cho trừ ở CSC) để khử $u_1$, còn lại phương trình theo $q$.`,
    R`**Bước 1.** $\begin{cases}u_1q=6\\u_1q^4=162\end{cases}$. Chia vế: $q^3=27\Rightarrow q=3$, $u_1=2$.`,
    R`**Bước 2.** $S_6=\dfrac{2\,(1-3^6)}{1-3}=3^6-1=728$.`,
    R`**Kết luận.** $u_1=2$, $q=3$, $S_6=728$.`,
    R`**Thử lại.** $u_2=2\cdot3=6$ ✓; $u_5=2\cdot3^4=162$ ✓.`
   ] },
 { muc: "TH", de: R`Tìm $x$ để ba số $2$, $x$, $18$ theo thứ tự lập thành cấp số nhân.`,
   giai: [
    R`**Phân tích.** Ba số $a,b,c$ (khác $0$) theo thứ tự lập CSN khi và chỉ khi $b^2=ac$. Khai căn nhớ lấy **cả hai dấu**.`,
    R`**Bước 1.** $x^2=2\cdot18=36\Leftrightarrow x=6$ hoặc $x=-6$.`,
    R`**Bước 2.** Thử: $2,6,18$ ($q=3$) và $2,-6,18$ ($q=-3$) ✓.`,
    R`**Kết luận.** $x=6$ hoặc $x=-6$.`
   ] },
 { muc: "VD", de: R`Gửi tiết kiệm $100$ triệu đồng với lãi suất $6\%$/năm, lãi nhập gốc mỗi năm (lãi kép). Sau $5$ năm, số tiền cả gốc lẫn lãi là bao nhiêu (làm tròn đến hàng phần trăm triệu đồng)?`,
   giai: [
    R`**Phân tích.** Lãi kép: mỗi năm số tiền nhân thêm $1+6\%=1{,}06$, nên số tiền qua các năm lập **cấp số nhân** công bội $1{,}06$.`,
    R`**Bước 1.** Số tiền sau mỗi năm gấp $1{,}06$ lần năm trước: lập CSN với $u_0=100$, $q=1{,}06$.`,
    R`**Bước 2.** Sau $n$ năm: $A_n=100\cdot1{,}06^n$.`,
    R`**Bước 3.** $A_5=100\cdot1{,}06^5\approx100\cdot1{,}338226\approx133{,}82$ (triệu đồng).`,
    R`**Kết luận.** Sau $5$ năm có khoảng $133{,}82$ triệu đồng.`,
    R`**Nhận xét.** Nếu lãi đơn (không nhập gốc) thì chỉ được $100+5\cdot6=130$ triệu; lãi kép nhiều hơn khoảng $3{,}82$ triệu.`
   ] },
 { muc: "VD", de: R`Thả một quả bóng từ độ cao $10$ m. Mỗi lần chạm đất, bóng nảy lên bằng một nửa độ cao trước đó. Tính độ cao lần nảy thứ $5$ và tổng quãng đường bóng đi được đến lúc chạm đất lần thứ $5$.`,
   giai: [
    R`**Phân tích.** Độ cao mỗi lần nảy bằng nửa lần trước: CSN công bội $\dfrac12$. Quãng đường gồm lần rơi đầu và các lần **lên rồi xuống** (mỗi lần đi hai chiều).`,
    R`**Bước 1.** Độ cao các lần nảy lập CSN: $u_1=5$, $q=\dfrac12$. Lần nảy thứ $5$: $u_5=5\cdot\left(\dfrac12\right)^4=0{,}3125$ m.`,
    R`**Bước 2.** Đến lần chạm đất thứ $5$: rơi $10$ m, rồi bốn lần nảy lên và rơi xuống ($u_1$ đến $u_4$), mỗi lần đi hai chiều.`,
    R`**Bước 3.** $u_1+u_2+u_3+u_4=\dfrac{5\left(1-\frac1{16}\right)}{1-\frac12}=9{,}375$.`,
    R`**Bước 4.** Quãng đường: $10+2\cdot9{,}375=28{,}75$ (m).`,
    R`**Kết luận.** Lần nảy thứ $5$ cao $0{,}3125$ m; tổng quãng đường đến lần chạm đất thứ $5$ là $28{,}75$ m.`
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
 { muc: "NB", de: R`Thời gian đi từ nhà đến trường của một nhóm học sinh được ghi lại như sau:$$\begin{array}{|c|c|c|c|c|c|}\hline \text{Thời gian (phút)}&[0;10)&[10;20)&[20;30)&[30;40)&[40;50)\\\hline \text{Số học sinh}&5&12&15&6&2\\\hline\end{array}$$Tìm cỡ mẫu, nhóm có nhiều học sinh nhất và giá trị đại diện của nhóm đó.`,
   giai: [
    R`**Phân tích.** Cỡ mẫu là **tổng các tần số**. Giá trị đại diện của nhóm $[a;b)$ là trung điểm $\dfrac{a+b}2$.`,
    R`**Bước 1.** Cỡ mẫu $n=5+12+15+6+2=40$.`,
    R`**Bước 2.** Nhóm có tần số lớn nhất ($15$) là $[20;30)$.`,
    R`**Bước 3.** Giá trị đại diện: $\dfrac{20+30}2=25$ (phút).`,
    R`**Kết luận.** Cỡ mẫu $40$; nhóm đông nhất là $[20;30)$ với giá trị đại diện $25$ phút.`
   ] },
 { muc: "TH", de: R`Với bảng ở ví dụ 1, có bao nhiêu phần trăm học sinh đi đến trường mất dưới $20$ phút?`,
   giai: [
    R`**Phân tích.** "Dưới $20$ phút" là các nhóm có đầu mút phải $\le20$. Cộng tần số các nhóm đó rồi chia cho cỡ mẫu $n=40$.`,
    R`**Bước 1.** "Dưới $20$ phút" gồm hai nhóm $[0;10)$ và $[10;20)$: $5+12=17$ học sinh.`,
    R`**Bước 2.** Tỉ lệ: $\dfrac{17}{40}=0{,}425=42{,}5\%$.`,
    R`**Kết luận.** Có $42{,}5\%$ học sinh đi đến trường mất dưới $20$ phút.`
   ] },
 { muc: "TH", de: R`Chiều cao (cm) của $20$ học sinh: $152$, $155$, $158$, $160$, $161$, $163$, $163$, $165$, $166$, $167$, $168$, $168$, $170$, $171$, $172$, $173$, $175$, $176$, $178$, $180$. Lập bảng tần số ghép nhóm với các nhóm có độ dài $5$, bắt đầu từ $150$.`,
   giai: [
    R`**Phân tích.** Lập các nhóm $[150;155)$, $[155;160)$, … đến khi chứa giá trị lớn nhất $180$. Mỗi nhóm **chứa đầu mút trái, không chứa đầu mút phải**, nên giá trị đúng bằng đầu mút thuộc nhóm phía sau.`,
    R`**Bước 1.** Các nhóm: $[150;155)$, $[155;160)$, $[160;165)$, $[165;170)$, $[170;175)$, $[175;180)$, $[180;185)$.`,
    R`**Bước 2.** Đếm: $[150;155)$: $152$ → $1$. $[155;160)$: $155,158$ → $2$. $[160;165)$: $160,161,163,163$ → $4$. $[165;170)$: $165,166,167,168,168$ → $5$.`,
    R`**Bước 3.** $[170;175)$: $170,171,172,173$ → $4$. $[175;180)$: $175,176,178$ → $3$. $[180;185)$: $180$ → $1$. (Chú ý $155$, $160$, $165$, $170$, $175$, $180$ được xếp vào nhóm có đầu mút trái là chính nó.)`,
    R`**Bước 4.** Bảng tần số ghép nhóm: $$\begin{array}{|c|c|}\hline \text{Chiều cao (cm)}&\text{Tần số}\\\hline [150;155)&1\\\hline [155;160)&2\\\hline [160;165)&4\\\hline [165;170)&5\\\hline [170;175)&4\\\hline [175;180)&3\\\hline [180;185)&1\\\hline\end{array}$$`,
    R`**Kiểm tra.** $1+2+4+5+4+3+1=20$ ✓.`,
    R`**Kết luận.** Bảng tần số ghép nhóm có $7$ nhóm như trên; nhóm đông nhất là $[165;170)$ với $5$ học sinh.`
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
 { muc: "NB", de: R`Với bảng thời gian đến trường ở dạng trước:$$\begin{array}{|c|c|c|c|c|c|}\hline \text{Thời gian (phút)}&[0;10)&[10;20)&[20;30)&[30;40)&[40;50)\\\hline \text{Số học sinh}&5&12&15&6&2\\\hline\end{array}$$Tính thời gian trung bình.`,
   giai: [
    R`**Phân tích.** Mẫu ghép nhóm không biết từng số liệu, nên mỗi nhóm được thay bằng **giá trị đại diện** (trung điểm). Sau đó tính $\overline x=\dfrac{\sum n_ix_i}n$.`,
    R`**Bước 1.** Giá trị đại diện: $5$, $15$, $25$, $35$, $45$.`,
    R`**Bước 2.** $\overline x=\dfrac{5\cdot5+12\cdot15+15\cdot25+6\cdot35+2\cdot45}{40}=\dfrac{25+180+375+210+90}{40}=\dfrac{880}{40}=22$ (phút).`,
    R`**Kết luận.** Thời gian đến trường trung bình là $22$ phút.`,
    R`**Nhận xét.** $\overline x=22$ nằm trong nhóm đông nhất $[20;30)$, hợp lí với bảng số liệu.`
   ] },
 { muc: "TH", de: R`Với bảng trên, tìm trung vị của mẫu số liệu.`,
   giai: [
    R`**Phân tích.** Trung vị: lập dòng **tần số tích luỹ**, tìm nhóm đầu tiên có tích luỹ $\ge\dfrac n2$, rồi dùng $M_e=u_m+\dfrac{\frac n2-C}{n_m}(u_{m+1}-u_m)$ với $C$ là tích luỹ của nhóm **ngay trước**.`,
    R`**Bước 1.** Tần số tích luỹ: $5$; $17$; $32$; $38$; $40$.`,
    R`**Bước 2.** $\dfrac n2=20$. Nhóm đầu tiên có tần số tích luỹ $\ge20$ là $[20;30)$ (tích luỹ $32$); nhóm trước có $C=17$; $n_m=15$.`,
    R`**Bước 3.** $M_e=20+\dfrac{20-17}{15}\cdot10=20+2=22$ (phút).`,
    R`**Kết luận.** Trung vị $M_e=22$ phút: khoảng một nửa số học sinh đi mất dưới $22$ phút.`
   ] },
 { muc: "TH", de: R`Với bảng trên, tìm các tứ phân vị $Q_1$, $Q_3$.`,
   giai: [
    R`**Phân tích.** Cùng quy trình như trung vị, chỉ thay $\dfrac n2$ bằng $\dfrac n4$ (cho $Q_1$) và $\dfrac{3n}4$ (cho $Q_3$).`,
    R`**Bước 1.** $\dfrac n4=10$: nhóm chứa $Q_1$ là $[10;20)$ (tích luỹ $17\ge10$), $C=5$, $n_m=12$. $Q_1=10+\dfrac{10-5}{12}\cdot10=10+\dfrac{25}6=\dfrac{85}6\approx14{,}17$.`,
    R`**Bước 2.** $\dfrac{3n}4=30$: nhóm chứa $Q_3$ là $[20;30)$ (tích luỹ $32\ge30$), $C=17$, $n_m=15$. $Q_3=20+\dfrac{30-17}{15}\cdot10=20+\dfrac{26}3=\dfrac{86}3\approx28{,}67$.`,
    R`**Kết luận.** $Q_1\approx14{,}17$ phút; $Q_3\approx28{,}67$ phút.`,
    R`**Thử lại.** Phải có $Q_1<M_e<Q_3$: $14{,}17<22<28{,}67$ ✓.`
   ] },
 { muc: "VD", de: R`Với bảng trên, tìm mốt của mẫu số liệu và giải thích ý nghĩa.`,
   giai: [
    R`**Phân tích.** Mốt nằm trong nhóm có **tần số lớn nhất**. Công thức cần tần số của nhóm đó và của hai nhóm kề hai bên.`,
    R`**Bước 1.** Nhóm có tần số lớn nhất: $[20;30)$ với $n_m=15$; nhóm trước có $12$, nhóm sau có $6$.`,
    R`**Bước 2.** $M_o=20+\dfrac{15-12}{(15-12)+(15-6)}\cdot10=20+\dfrac3{12}\cdot10=22{,}5$ (phút).`,
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
    R`**Phân tích.** Muốn tìm giao tuyến của hai mặt phẳng, tìm **hai điểm chung**. $S$ hiển nhiên chung; điểm chung thứ hai thường là giao điểm của hai đường thẳng nằm trong cùng mặt đáy, mỗi đường thuộc một mặt phẳng.`,
    R`**Bước 1.** $S$ là điểm chung thứ nhất.`,
    R`**Bước 2.** $O=AC\cap BD$, mà $AC\subset(SAC)$, $BD\subset(SBD)$, nên $O$ là điểm chung thứ hai.`,
    R`**Kết luận.** $(SAC)\cap(SBD)=SO$.`
   ] },
 { muc: "TH", de: R`Cho hình chóp $S.ABCD$ có đáy là tứ giác $ABCD$ với $AB$ và $CD$ không song song. Tìm giao tuyến của $(SAB)$ và $(SCD)$.`,
   giai: [
    R`**Phân tích.** Vẫn tìm hai điểm chung. Trong mặt đáy, $AB$ thuộc $(SAB)$, $CD$ thuộc $(SCD)$; hai đường này không song song nên cắt nhau, và giao điểm đó là điểm chung thứ hai.`,
    R`**Bước 1.** $S$ là một điểm chung.`,
    R`**Bước 2.** $AB$, $CD$ cùng nằm trong $(ABCD)$ và không song song, nên chúng cắt nhau tại $I$. $I\in AB\subset(SAB)$ và $I\in CD\subset(SCD)$: $I$ là điểm chung thứ hai.`,
    R`**Kết luận.** $(SAB)\cap(SCD)=SI$.`
   ] },
 { muc: "VD", de: R`Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$, $M$ là trung điểm $SC$. Tìm giao điểm $G$ của $AM$ với mặt phẳng $(SBD)$. Tính tỉ số $\dfrac{SG}{SO}$.`,
   giai: [
    R`**Phân tích.** Tìm giao điểm của đường thẳng $AM$ với mặt phẳng $(SBD)$: chọn **mặt phẳng phụ** chứa $AM$, tìm giao tuyến của nó với $(SBD)$; giao điểm của $AM$ với giao tuyến đó là điểm cần tìm.`,
    R`**Bước 1.** Chọn mặt phẳng phụ chứa $AM$ là $(SAC)$.`,
    R`**Bước 2.** $(SAC)\cap(SBD)=SO$ (ví dụ 1).`,
    R`**Bước 3.** Trong $(SAC)$, $AM$ cắt $SO$ tại $G$. Vì $G\in SO\subset(SBD)$ nên $G=AM\cap(SBD)$.`,
    R`**Bước 4.** Trong tam giác $SAC$: $SO$ là trung tuyến (vì $O$ là trung điểm $AC$), $AM$ cũng là trung tuyến. Vậy $G$ là trọng tâm tam giác $SAC$, suy ra $\dfrac{SG}{SO}=\dfrac23$.`,
    R`**Kết luận.** $G=AM\cap SO$ là trọng tâm tam giác $SAC$ và $\dfrac{SG}{SO}=\dfrac23$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
\draw[thick] (0,0)--(3,0)--(4,1.3);
\draw[dashed] (4,1.3)--(1,1.3)--(0,0);
\draw[thick] (1.6,3.8)--(0,0);
\draw[thick] (1.6,3.8)--(3,0);
\draw[thick] (1.6,3.8)--(4,1.3);
\draw[dashed] (1.6,3.8)--(1,1.3);
\node[above] at (1.6,3.8){$S$};
\node[below left] at (0,0){$A$};
\node[below right] at (3,0){$B$};
\node[right] at (4,1.3){$C$};
\node[above left] at (1,1.3){$D$};
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
    R`**Phân tích.** Thiết diện là đa giác tạo bởi các **đoạn giao tuyến** của $(MCD)$ với các mặt của hình chóp. Mặt $(SAB)$ chứa $AB\parallel CD$ nên giao tuyến với $(SAB)$ song song với $AB$.`,
    R`**Bước 1.** $(MCD)$ và $(SAB)$ có điểm chung $M$; lại có $CD\subset(MCD)$, $AB\subset(SAB)$, $CD\parallel AB$.`,
    R`**Bước 2.** Nên giao tuyến của chúng là đường thẳng qua $M$ song song với $AB$, cắt $SB$ tại $N$. Vì $M$ là trung điểm $SA$ nên $N$ là trung điểm $SB$ (đường trung bình).`,
    R`**Bước 3.** Các đoạn giao tuyến với các mặt: $MN$ (mặt $SAB$), $NC$ (mặt $SBC$), $CD$ (đáy), $DM$ (mặt $SAD$).`,
    R`**Thiết diện** là tứ giác $MNCD$ có $MN\parallel CD$ (cùng song song $AB$) và $MN=\dfrac12AB=\dfrac12CD$: đó là **hình thang**.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
\draw[thick] (0,0)--(3,0)--(4,1.3);
\draw[dashed] (4,1.3)--(1,1.3)--(0,0);
\draw[thick] (1.6,3.8)--(0,0);
\draw[thick] (1.6,3.8)--(3,0);
\draw[thick] (1.6,3.8)--(4,1.3);
\draw[dashed] (1.6,3.8)--(1,1.3);
\node[above] at (1.6,3.8){$S$};
\node[below left] at (0,0){$A$};
\node[below right] at (3,0){$B$};
\node[right] at (4,1.3){$C$};
\node[above left] at (1,1.3){$D$};
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
    R`**Phân tích.** Hai mặt phẳng có một điểm chung $S$ và lần lượt chứa hai đường thẳng **song song** $AB$, $CD$. Khi đó giao tuyến đi qua $S$ và song song với hai đường thẳng đó, không cần tìm điểm chung thứ hai.`,
    R`**Bước 1.** $S$ là điểm chung của hai mặt phẳng.`,
    R`**Bước 2.** $AB\subset(SAB)$, $CD\subset(SCD)$ và $AB\parallel CD$.`,
    R`**Bước 3.** Theo định lí về giao tuyến: $(SAB)\cap(SCD)$ là đường thẳng $d$ qua $S$ và song song với $AB$ (và $CD$).`,
    R`**Kết luận.** $(SAB)\cap(SCD)$ là đường thẳng qua $S$, song song với $AB$ và $CD$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
\draw[thick] (0,0)--(3,0)--(4,1.3);
\draw[dashed] (4,1.3)--(1,1.3)--(0,0);
\draw[thick] (1.6,3.8)--(0,0);
\draw[thick] (1.6,3.8)--(3,0);
\draw[thick] (1.6,3.8)--(4,1.3);
\draw[dashed] (1.6,3.8)--(1,1.3);
\node[above] at (1.6,3.8){$S$};
\node[below left] at (0,0){$A$};
\node[below right] at (3,0){$B$};
\node[right] at (4,1.3){$C$};
\node[above left] at (1,1.3){$D$};
\draw[thick,red] (0.1,3.8)--(3.1,3.8) node[right]{$d$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Cho tứ diện $ABCD$. Gọi $M$, $N$, $P$, $Q$ lần lượt là trung điểm $AB$, $BC$, $CD$, $DA$. Chứng minh $MNPQ$ là hình bình hành.`,
   giai: [
    R`**Phân tích.** Trung điểm các cạnh gợi ý **đường trung bình**. Chứng minh một cặp cạnh đối của $MNPQ$ vừa song song vừa bằng nhau (cùng song song và bằng nửa $AC$).`,
    R`**Bước 1.** Trong tam giác $ABC$: $MN$ là đường trung bình nên $MN\parallel AC$ và $MN=\dfrac12AC$.`,
    R`**Bước 2.** Trong tam giác $ACD$: $QP$ là đường trung bình nên $QP\parallel AC$ và $QP=\dfrac12AC$.`,
    R`**Bước 3.** Suy ra $MN\parallel QP$ và $MN=QP$: tứ giác $MNPQ$ là hình bình hành.`,
    R`**Kết luận.** $MNPQ$ là hình bình hành.`,
    R`**Nhận xét.** Làm tương tự với $BD$ cũng được $MQ\parallel NP\parallel BD$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
\draw[thick] (4,0)--(1.8,3.6)--(0,0);
\draw[dashed] (0,0)--(4,0);
\draw[thick] (4,0)--(2.6,-1.2)--(0,0);
\draw[thick] (2.6,-1.2)--(1.8,3.6);
\node[above] at (1.8,3.6){$A$};
\node[left] at (0,0){$B$};
\node[below] at (2.6,-1.2){$C$};
\node[right] at (4,0){$D$};
\draw[blue,thick] (0.9,1.8)--(1.3,-0.6)--(3.3,-0.6)--(2.9,1.8)--cycle;
\node[left] at (0.9,1.8){$M$}; \node[below] at (1.3,-0.6){$N$}; \node[below right] at (3.3,-0.6){$P$}; \node[right] at (2.9,1.8){$Q$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Cho tứ diện $ABCD$. Chứng minh $AB$ và $CD$ chéo nhau.`,
   giai: [
    R`**Phân tích.** Hai đường thẳng chéo nhau khi chúng **không cùng nằm trong một mặt phẳng**. Chứng minh bằng phản chứng: giả sử đồng phẳng rồi dẫn tới mâu thuẫn.`,
    R`**Bước 1.** Giả sử $AB$ và $CD$ không chéo nhau, tức là chúng cùng nằm trong một mặt phẳng $(P)$.`,
    R`**Bước 2.** Khi đó bốn điểm $A$, $B$, $C$, $D$ cùng thuộc $(P)$, mâu thuẫn với việc $ABCD$ là tứ diện (bốn đỉnh không đồng phẳng).`,
    R`**Bước 3.** Vậy $AB$ và $CD$ chéo nhau.`,
    R`**Kết luận.** $AB$ và $CD$ chéo nhau. Tương tự, mọi cặp cạnh đối của tứ diện đều chéo nhau.`
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
    R`**Phân tích.** Đường thẳng $a$ song song với $(P)$ khi $a$ **không nằm trong** $(P)$ và $a$ **song song với một đường thẳng nằm trong** $(P)$. Kiểm tra đủ cả hai ý.`,
    R`**Bước 1.** $CD\not\subset(SAB)$ (vì $C\notin(SAB)$).`,
    R`**Bước 2.** $CD\parallel AB$ và $AB\subset(SAB)$.`,
    R`**Bước 3.** Vậy $CD\parallel(SAB)$.`,
    R`**Kết luận.** $CD\parallel(SAB)$.`
   ] },
 { muc: "TH", de: R`Cho hình chóp $S.ABCD$ đáy hình bình hành; $M$, $N$ lần lượt là trung điểm $SA$, $SB$. Chứng minh $MN\parallel(ABCD)$ và $MN\parallel(SCD)$.`,
   giai: [
    R`**Phân tích.** $MN$ là đường trung bình nên $MN\parallel AB$. Tìm trong mỗi mặt phẳng một đường thẳng song song với $MN$: trong $(ABCD)$ là $AB$, trong $(SCD)$ là $CD$.`,
    R`**Bước 1.** $MN$ là đường trung bình của tam giác $SAB$ nên $MN\parallel AB$.`,
    R`**Bước 2.** $AB\subset(ABCD)$, $MN\not\subset(ABCD)$ nên $MN\parallel(ABCD)$.`,
    R`**Bước 3.** $MN\parallel AB\parallel CD$ và $CD\subset(SCD)$; $MN\not\subset(SCD)$ (vì $M\notin(SCD)$). Vậy $MN\parallel(SCD)$.`,
    R`**Kết luận.** $MN\parallel(ABCD)$ và $MN\parallel(SCD)$.`
   ] },
 { muc: "VD", de: R`Cho tứ diện $ABCD$; $G_1$, $G_2$ lần lượt là trọng tâm các tam giác $ACD$ và $BCD$. Chứng minh $G_1G_2\parallel(ABC)$ và tính $\dfrac{G_1G_2}{AB}$.`,
   giai: [
    R`**Phân tích.** Trọng tâm nằm trên trung tuyến và chia nó theo tỉ số $2:1$. Hai trung tuyến $AM$, $BM$ chung điểm $M$ (trung điểm $CD$), nên dùng **Thalès đảo** trong tam giác $MAB$.`,
    R`**Bước 1.** Gọi $M$ là trung điểm $CD$. Vì $G_1$, $G_2$ là trọng tâm nên $G_1\in AM$, $G_2\in BM$ và $\dfrac{MG_1}{MA}=\dfrac{MG_2}{MB}=\dfrac13$.`,
    R`**Bước 2.** Trong tam giác $MAB$, theo định lí Thalès đảo: $G_1G_2\parallel AB$ và $\dfrac{G_1G_2}{AB}=\dfrac13$.`,
    R`**Bước 3.** $AB\subset(ABC)$ và $G_1G_2\not\subset(ABC)$ nên $G_1G_2\parallel(ABC)$.`,
    R`**Kết luận.** $G_1G_2\parallel(ABC)$ và $\dfrac{G_1G_2}{AB}=\dfrac13$.`
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
    R`**Phân tích.** Hai mặt phẳng song song khi một mặt chứa **hai đường thẳng cắt nhau** cùng song song với mặt kia. Trong $(MNP)$ chọn $MN$ và $MP$ (đường trung bình).`,
    R`**Bước 1.** $MN$ là đường trung bình tam giác $SAB$: $MN\parallel AB$, nên $MN\parallel(ABCD)$.`,
    R`**Bước 2.** $MP$ là đường trung bình tam giác $SAD$: $MP\parallel AD$, nên $MP\parallel(ABCD)$.`,
    R`**Bước 3.** $MN$ và $MP$ cắt nhau tại $M$, cùng nằm trong $(MNP)$. Vậy $(MNP)\parallel(ABCD)$.`,
    R`**Kết luận.** $(MNP)\parallel(ABCD)$.`
   ] },
 { muc: "TH", de: R`Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $(BDA')\parallel(B'D'C)$.`,
   giai: [
    R`**Phân tích.** Trong $(BDA')$ chọn hai đường cắt nhau $BD$ và $A'B$; chứng minh mỗi đường song song với một đường của $(B'D'C)$ bằng các hình bình hành có trong hình hộp.`,
    R`**Bước 1.** $BDD'B'$ là hình bình hành (vì $BB'\parallel DD'$, $BB'=DD'$), nên $BD\parallel B'D'$; suy ra $BD\parallel(B'D'C)$.`,
    R`**Bước 2.** $A'BCD'$ là hình bình hành (vì $A'D'\parallel BC$, $A'D'=BC$), nên $A'B\parallel D'C$; suy ra $A'B\parallel(B'D'C)$.`,
    R`**Bước 3.** $BD$ và $A'B$ cắt nhau tại $B$ và nằm trong $(BDA')$. Vậy $(BDA')\parallel(B'D'C)$.`,
    R`**Kết luận.** $(BDA')\parallel(B'D'C)$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
\draw[thick] (0,0)--(3,0)--(4,1.2);
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
\node[above left] at (1,3.7){$D'$};
\draw[red,thick,dashed] (3,0)--(1,1.2); \draw[red,thick] (3,0)--(0,2.5); \draw[red,dashed,thick] (1,1.2)--(0,2.5);
\draw[blue,thick] (3,2.5)--(1,3.7); \draw[blue,thick] (3,2.5)--(4,1.2); \draw[blue,thick] (1,3.7)--(4,1.2);
\end{tikzpicture}`,
   chuThich: R`Tam giác $BDA'$ (đỏ) và tam giác $B'D'C$ (xanh) nằm trên hai mặt phẳng song song.` },
 { muc: "VD", de: R`Cho hình lăng trụ $ABC.A'B'C'$. Gọi $G$, $G'$ lần lượt là trọng tâm tam giác $ABC$ và $A'B'C'$. Chứng minh $GG'\parallel AA'$ và $GG'=AA'$.`,
   giai: [
    R`**Phân tích.** Muốn có $GG'\parallel AA'$ và $GG'=AA'$, chứng minh $AGG'A'$ là **hình bình hành**: cần $AG\parallel A'G'$ và $AG=A'G'$. Đi qua trung điểm $M$, $M'$ của $BC$, $B'C'$.`,
    R`**Bước 1.** Gọi $M$, $M'$ là trung điểm $BC$, $B'C'$. $BCC'B'$ là hình bình hành nên $MM'\parallel BB'\parallel AA'$ và $MM'=AA'$. Do đó $AMM'A'$ là hình bình hành, $AM=A'M'$ và $AM\parallel A'M'$.`,
    R`**Bước 2.** $G\in AM$ với $AG=\dfrac23AM$; $G'\in A'M'$ với $A'G'=\dfrac23A'M'$. Vậy $AG\parallel A'G'$ và $AG=A'G'$.`,
    R`**Bước 3.** Tứ giác $AGG'A'$ là hình bình hành, suy ra $GG'\parallel AA'$ và $GG'=AA'$.`,
    R`**Kết luận.** $GG'\parallel AA'$ và $GG'=AA'$.`
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
    R`**Phân tích.** Phép chiếu song song **giữ tính song song** của hai đường thẳng, nhưng không giữ góc và độ dài. Xét xem hình vuông còn giữ được tính chất nào.`,
    R`**Bước 1.** Hình vuông có hai cặp cạnh đối song song. Phép chiếu song song biến hai đường song song thành hai đường song song, nên hình biểu diễn phải có hai cặp cạnh đối song song: là hình bình hành.`,
    R`**Kết luận.** Chọn **B**.`
   ] },
 { muc: "TH", de: R`Tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Qua phép chiếu song song, $A,B,C,M,G$ có hình chiếu lần lượt là $A',B',C',M',G'$ (tam giác $A'B'C'$ không suy biến). Chứng minh $M'$ là trung điểm $B'C'$ và $G'$ là trọng tâm tam giác $A'B'C'$.`,
   giai: [
    R`**Phân tích.** Phép chiếu song song **giữ tỉ số độ dài** của hai đoạn thẳng nằm trên cùng một đường thẳng. Trung điểm và trọng tâm đều được xác định bằng tỉ số như vậy.`,
    R`**Bước 1.** $M$ là trung điểm $BC$: $\dfrac{MB}{MC}=1$. Phép chiếu song song giữ tỉ số trên cùng một đường thẳng nên $\dfrac{M'B'}{M'C'}=1$: $M'$ là trung điểm $B'C'$.`,
    R`**Bước 2.** $G\in AM$ với $\dfrac{AG}{AM}=\dfrac23$, nên $G'\in A'M'$ với $\dfrac{A'G'}{A'M'}=\dfrac23$.`,
    R`**Bước 3.** $A'M'$ là trung tuyến của tam giác $A'B'C'$ và $G'$ chia nó theo tỉ số $\dfrac23$ từ đỉnh: $G'$ là trọng tâm tam giác $A'B'C'$.`,
    R`**Kết luận.** $M'$ là trung điểm $B'C'$ và $G'$ là trọng tâm tam giác $A'B'C'$.`
   ] },
 { muc: "TH", de: R`Mỗi khẳng định sau đúng hay sai đối với phép chiếu song song? a) Hình chiếu của hai đường thẳng cắt nhau luôn là hai đường thẳng cắt nhau. b) Hình chiếu của một góc vuông là một góc vuông. c) Hình chiếu của trung điểm một đoạn thẳng là trung điểm của hình chiếu đoạn thẳng đó.`,
   giai: [
    R`**Phân tích.** Nhớ ba tính chất phép chiếu song song giữ được: thẳng hàng, song song, tỉ số trên cùng một đường thẳng. Điều gì không thuộc ba tính chất đó thì tìm phản ví dụ.`,
    R`**Bước 1.** a) **Sai.** Nếu mặt phẳng chứa hai đường thẳng đó song song với phương chiếu thì cả hai có cùng một hình chiếu (trùng nhau).`,
    R`**Bước 2.** b) **Sai.** Phép chiếu song song không giữ góc (ví dụ hình vuông có thể biểu diễn bằng hình bình hành không có góc vuông).`,
    R`**Bước 3.** c) **Đúng.** Phép chiếu song song giữ tỉ số độ dài trên cùng một đường thẳng.`,
    R`**Kết luận.** a) Sai; b) Sai; c) Đúng.`
   ] }
 ] }
});
/* ---------- Chương V · Giới hạn. Hàm số liên tục ---------- */
Object.assign(D, {
"C5-B15-D19": {
 pp: [
  R`**Giới hạn cơ bản:** $\lim\dfrac1{n^k}=0$ ($k>0$); $\lim q^n=0$ khi $|q|<1$; $\lim c=c$.`,
  R`**Phân thức theo $n$:** chia cả tử và mẫu cho $n^k$ với $k$ là bậc cao nhất của mẫu, rồi dùng $\lim\dfrac1{n^k}=0$.`,
  R`**Biểu thức chứa căn dạng $\infty-\infty$:** nhân và chia với biểu thức liên hợp.`,
  R`**Biểu thức chứa luỹ thừa $a^n$:** chia cả tử và mẫu cho luỹ thừa có cơ số lớn nhất.`,
  R`**Cấp số nhân lùi vô hạn** ($|q|<1$): $S=u_1+u_1q+u_1q^2+\dots=\dfrac{u_1}{1-q}$. Dùng để đổi số thập phân vô hạn tuần hoàn ra phân số.`
 ],
 luuY: [
  R`Viết $\lim(\sqrt{n^2+n}-n)=\infty-\infty=0$: sai, dạng này phải nhân liên hợp.`,
  R`Dùng công thức $\dfrac{u_1}{1-q}$ khi $|q|\ge1$.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $\lim\dfrac{3n^2+n-1}{2n^2+5}$.`,
   giai: [
    R`Chia tử và mẫu cho $n^2$: $\dfrac{3+\frac1n-\frac1{n^2}}{2+\frac5{n^2}}$.`,
    R`Khi $n\to+\infty$: $\dfrac1n\to0$, $\dfrac1{n^2}\to0$. Giới hạn bằng $\dfrac32$.`
   ] },
 { muc: "TH", de: R`Tính $\lim\left(\sqrt{n^2+n}-n\right)$.`,
   giai: [
    R`Nhân liên hợp: $\sqrt{n^2+n}-n=\dfrac{(n^2+n)-n^2}{\sqrt{n^2+n}+n}=\dfrac{n}{\sqrt{n^2+n}+n}$.`,
    R`Chia tử và mẫu cho $n$: $\dfrac{1}{\sqrt{1+\frac1n}+1}\to\dfrac1{1+1}=\dfrac12$.`
   ] },
 { muc: "TH", de: R`Tính $\lim\dfrac{2^n+3^n}{3^{n+1}-2^n}$.`,
   giai: [
    R`Chia tử và mẫu cho $3^n$ (cơ số lớn nhất): $\dfrac{\left(\frac23\right)^n+1}{3-\left(\frac23\right)^n}$.`,
    R`$\left(\frac23\right)^n\to0$, nên giới hạn bằng $\dfrac{0+1}{3-0}=\dfrac13$.`
   ] },
 { muc: "VD", de: R`Tính tổng $S=1+\dfrac13+\dfrac19+\dots$ và viết số $0{,}272727\dots$ dưới dạng phân số.`,
   giai: [
    R`$S$ là tổng CSN lùi vô hạn với $u_1=1$, $q=\dfrac13$: $S=\dfrac{1}{1-\frac13}=\dfrac32$.`,
    R`$0{,}2727\ldots=0{,}27+0{,}0027+0{,}000027+\dots$: CSN lùi vô hạn với $u_1=0{,}27$, $q=0{,}01$.`,
    R`$=\dfrac{0{,}27}{1-0{,}01}=\dfrac{0{,}27}{0{,}99}=\dfrac{27}{99}=\dfrac3{11}$.`
   ] },
 { muc: "VD", de: R`Thả một quả bóng từ độ cao $10$ m; mỗi lần chạm đất bóng nảy lên bằng một nửa độ cao trước đó, cứ như vậy mãi. Tính tổng quãng đường bóng đi được.`,
   giai: [
    R`Lần rơi đầu: $10$ m. Sau đó mỗi lần nảy lên rồi rơi xuống cùng một độ cao $h_k$, với $h_1=5$, $q=\dfrac12$.`,
    R`Tổng các độ cao nảy: $\dfrac{5}{1-\frac12}=10$ m.`,
    R`Tổng quãng đường: $10+2\cdot10=30$ (m).`
   ] }
 ] },
"C5-B16-D20": {
 pp: [
  R`**Thay trực tiếp:** nếu $f$ là hàm đa thức, phân thức, căn thức... xác định tại $x_0$ thì $\lim\limits_{x\to x_0}f(x)=f(x_0)$.`,
  R`**Dạng $\dfrac00$:** phân tích tử và mẫu thành nhân tử có chung $(x-x_0)$ rồi rút gọn; nếu có căn thì nhân liên hợp.`,
  R`**Khi $x\to\pm\infty$:** chia tử và mẫu cho $x^k$ ($k$ là bậc cao nhất của mẫu). Chú ý $\sqrt{x^2}=|x|$: khi $x\to-\infty$ thì $\sqrt{x^2}=-x$.`
 ],
 luuY: [
  R`Thay $x_0$ vào được $\dfrac00$ rồi kết luận giới hạn bằng $0$ hoặc không tồn tại.`,
  R`Khi $x\to-\infty$ đưa $x$ ra ngoài căn mà quên dấu trừ.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $\lim\limits_{x\to2}(x^2+3x-1)$.`,
   giai: [
    R`Hàm đa thức nên thay trực tiếp: $2^2+3\cdot2-1=9$.`
   ] },
 { muc: "TH", de: R`Tính $\lim\limits_{x\to1}\dfrac{x^2-3x+2}{x-1}$.`,
   giai: [
    R`Thay $x=1$ được $\dfrac00$. Phân tích: $x^2-3x+2=(x-1)(x-2)$.`,
    R`Với $x\ne1$: $\dfrac{(x-1)(x-2)}{x-1}=x-2$.`,
    R`$\lim\limits_{x\to1}(x-2)=-1$.`
   ] },
 { muc: "TH", de: R`Tính $\lim\limits_{x\to0}\dfrac{\sqrt{x+4}-2}{x}$.`,
   giai: [
    R`Dạng $\dfrac00$, có căn: nhân tử và mẫu với $\sqrt{x+4}+2$.`,
    R`$\dfrac{(x+4)-4}{x\left(\sqrt{x+4}+2\right)}=\dfrac{1}{\sqrt{x+4}+2}$ (với $x\ne0$).`,
    R`Giới hạn bằng $\dfrac1{2+2}=\dfrac14$.`
   ] },
 { muc: "VD", de: R`Tính $\lim\limits_{x\to+\infty}\dfrac{2x^2-x+1}{x^2+3}$ và $\lim\limits_{x\to-\infty}\dfrac{\sqrt{x^2+1}}{x-1}$.`,
   giai: [
    R`Chia cho $x^2$: $\dfrac{2-\frac1x+\frac1{x^2}}{1+\frac3{x^2}}\to2$.`,
    R`Khi $x<0$: $\sqrt{x^2+1}=|x|\sqrt{1+\frac1{x^2}}=-x\sqrt{1+\frac1{x^2}}$.`,
    R`$\dfrac{-x\sqrt{1+\frac1{x^2}}}{x\left(1-\frac1x\right)}=\dfrac{-\sqrt{1+\frac1{x^2}}}{1-\frac1x}\to-1$.`
   ] },
 { muc: "VD", de: R`Chi phí trung bình để sản xuất mỗi sản phẩm khi làm $x$ sản phẩm là $C(x)=\dfrac{200+5x}{x}$ (nghìn đồng). Tính $\lim\limits_{x\to+\infty}C(x)$ và nêu ý nghĩa.`,
   giai: [
    R`$C(x)=\dfrac{200}x+5\to0+5=5$.`,
    R`**Ý nghĩa.** Khi sản xuất rất nhiều sản phẩm, chi phí trung bình mỗi sản phẩm tiến gần đến $5$ nghìn đồng (chi phí cố định $200$ nghìn được chia nhỏ dần).`
   ] }
 ] },
"C5-B16-D21": {
 pp: [
  R`**Giới hạn một phía:** $\lim\limits_{x\to x_0^+}$ (với $x>x_0$), $\lim\limits_{x\to x_0^-}$ (với $x<x_0$). Hàm có nhiều công thức: mỗi phía dùng công thức của phía đó.`,
  R`$\lim\limits_{x\to x_0}f(x)=L\Leftrightarrow\lim\limits_{x\to x_0^+}f(x)=\lim\limits_{x\to x_0^-}f(x)=L$.`,
  R`**Giới hạn vô cực dạng $\dfrac{L}{0}$** ($L\ne0$): xét dấu của mẫu khi $x$ dần tới $x_0$ từ phía đang xét; cùng dấu với $L$ thì $+\infty$, trái dấu thì $-\infty$.`,
  R`**Đa thức khi $x\to\pm\infty$:** có cùng giới hạn với hạng tử bậc cao nhất.`
 ],
 luuY: [
  R`Xét dấu mẫu sai khi $x\to x_0^-$ (ví dụ $x\to2^-$ thì $x-2<0$).`
 ],
 vd: [
 { muc: "NB", de: R`Cho $f(x)=\begin{cases}2x&\text{khi }x<1\\x+2&\text{khi }x\ge1\end{cases}$. Tính các giới hạn một phía tại $x=1$. Hàm số có giới hạn tại $x=1$ không?`,
   giai: [
    R`$\lim\limits_{x\to1^-}f(x)=\lim\limits_{x\to1^-}2x=2$.`,
    R`$\lim\limits_{x\to1^+}f(x)=\lim\limits_{x\to1^+}(x+2)=3$.`,
    R`$2\ne3$ nên hàm số **không** có giới hạn tại $x=1$ (đồ thị bị "nhảy").`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.9,>=stealth]
\draw[->] (-1,0)--(3,0) node[below]{$x$};
\draw[->] (0,-1.2)--(0,5) node[left]{$y$};
\draw[thick,blue] (-0.6,-1.2)--(1,2);
\draw[thick,blue] (1,3)--(2.5,4.5);
\draw[blue] (1,2) circle (2.5pt);
\fill[blue] (1,3) circle (2.5pt);
\draw[dashed] (1,0)--(1,3); \draw[dashed] (0,2)--(1,2); \draw[dashed] (0,3)--(1,3);
\node[below] at (1,0){$1$}; \node[left] at (0,2){$2$}; \node[left] at (0,3){$3$};
\node[below right] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Bên trái $x=1$ đồ thị tiến tới độ cao $2$, bên phải bắt đầu từ độ cao $3$.` },
 { muc: "TH", de: R`Tính $\lim\limits_{x\to2^+}\dfrac{x+1}{x-2}$ và $\lim\limits_{x\to2^-}\dfrac{x+1}{x-2}$.`,
   giai: [
    R`Tử: $x+1\to3>0$. Mẫu: $x-2\to0$.`,
    R`Khi $x\to2^+$: $x-2>0$, nên giới hạn là $+\infty$.`,
    R`Khi $x\to2^-$: $x-2<0$, nên giới hạn là $-\infty$.`
   ] },
 { muc: "TH", de: R`Tính $\lim\limits_{x\to+\infty}(x^3-2x^2+1)$ và $\lim\limits_{x\to-\infty}(x^3-2x^2+1)$.`,
   giai: [
    R`$x^3-2x^2+1=x^3\left(1-\dfrac2x+\dfrac1{x^3}\right)$, trong ngoặc dần tới $1$.`,
    R`$x\to+\infty$: $x^3\to+\infty$, giới hạn là $+\infty$. $x\to-\infty$: $x^3\to-\infty$, giới hạn là $-\infty$.`
   ] },
 { muc: "VD", de: R`Tìm $m$ để hàm số $f(x)=\begin{cases}x^2+m&\text{khi }x<1\\2x+1&\text{khi }x\ge1\end{cases}$ có giới hạn tại $x=1$.`,
   giai: [
    R`$\lim\limits_{x\to1^-}f(x)=1+m$; $\lim\limits_{x\to1^+}f(x)=3$.`,
    R`Có giới hạn $\Leftrightarrow1+m=3\Leftrightarrow m=2$.`
   ] }
 ] },
"C5-B17-D22": {
 pp: [
  R`$f$ **liên tục tại $x_0$** $\Leftrightarrow$ $f$ xác định tại $x_0$ và $\lim\limits_{x\to x_0}f(x)=f(x_0)$.`,
  R`Hàm đa thức, phân thức, lượng giác, căn thức liên tục trên từng khoảng của tập xác định. Hàm nhiều công thức: chỉ cần kiểm tra tại các điểm "nối".`,
  R`**Tìm tham số để liên tục:** tính giới hạn (hoặc hai giới hạn một phía) tại điểm nối, cho bằng giá trị hàm số tại đó.`,
  R`**Chứng minh phương trình có nghiệm:** nếu $f$ liên tục trên $[a;b]$ và $f(a)\cdot f(b)<0$ thì phương trình $f(x)=0$ có ít nhất một nghiệm trong $(a;b)$.`
 ],
 luuY: [
  R`Quên kiểm tra $f$ xác định tại $x_0$, hoặc chỉ tính một phía.`,
  R`Dùng định lí nghiệm khi hàm không liên tục trên đoạn (ví dụ có mẫu bằng $0$ trong đoạn).`
 ],
 vd: [
 { muc: "TH", de: R`Xét tính liên tục tại $x=2$ của $f(x)=\begin{cases}\dfrac{x^2-4}{x-2}&\text{khi }x\ne2\\4&\text{khi }x=2\end{cases}$.`,
   giai: [
    R`$f(2)=4$.`,
    R`$\lim\limits_{x\to2}\dfrac{(x-2)(x+2)}{x-2}=\lim\limits_{x\to2}(x+2)=4$.`,
    R`Giới hạn bằng $f(2)$ nên $f$ liên tục tại $x=2$.`
   ] },
 { muc: "TH", de: R`Tìm $m$ để $f(x)=\begin{cases}\dfrac{x^2-1}{x-1}&\text{khi }x\ne1\\m&\text{khi }x=1\end{cases}$ liên tục tại $x=1$.`,
   giai: [
    R`$\lim\limits_{x\to1}\dfrac{(x-1)(x+1)}{x-1}=\lim\limits_{x\to1}(x+1)=2$.`,
    R`Liên tục tại $1\Leftrightarrow f(1)=2\Leftrightarrow m=2$.`
   ] },
 { muc: "VD", de: R`Chứng minh phương trình $x^3-3x+1=0$ có đúng ba nghiệm phân biệt thuộc khoảng $(-2;2)$.`,
   giai: [
    R`$f(x)=x^3-3x+1$ là đa thức nên liên tục trên $\mathbb R$.`,
    R`$f(-2)=-1$, $f(0)=1$, $f(1)=-1$, $f(2)=3$.`,
    R`$f(-2)f(0)<0$: có nghiệm trong $(-2;0)$; $f(0)f(1)<0$: có nghiệm trong $(0;1)$; $f(1)f(2)<0$: có nghiệm trong $(1;2)$. Ba khoảng rời nhau nên có ít nhất ba nghiệm phân biệt.`,
    R`Phương trình bậc ba có không quá ba nghiệm, nên có **đúng ba** nghiệm phân biệt trong $(-2;2)$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8,>=stealth]
\draw[->] (-2.6,0)--(2.7,0) node[below]{$x$};
\draw[->] (0,-1.8)--(0,3.6) node[left]{$y$};
\draw[thick,blue,domain=-2.1:2.05,samples=100] plot(\x,{\x*\x*\x-3*\x+1});
\fill (-2,-1) circle (2pt); \fill (0,1) circle (2pt); \fill (1,-1) circle (2pt); \fill (2,3) circle (2pt);
\draw[dashed] (-2,0)--(-2,-1); \draw[dashed] (1,0)--(1,-1); \draw[dashed] (2,0)--(2,3);
\node[above left] at (-2,0){$-2$}; \node[above] at (1,0){$1$}; \node[below right] at (2,0){$2$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Đồ thị đổi dấu ba lần nên cắt trục hoành tại ba điểm.` },
 { muc: "NB", de: R`Hàm số $f(x)=\dfrac{1}{x-1}$ liên tục trên những khoảng nào?`,
   giai: [
    R`Tập xác định $D=\mathbb R\setminus\{1\}$. Hàm phân thức liên tục trên từng khoảng của tập xác định.`,
    R`**Kết luận.** $f$ liên tục trên $(-\infty;1)$ và $(1;+\infty)$.`
   ] }
 ] }
});
/* ---------- Chương VI · Hàm số mũ và hàm số lôgarit ---------- */
Object.assign(D, {
"C6-B18-D23": {
 pp: [
  R`**Quy tắc** (với $a,b>0$; $m,n$ thực): $a^m\cdot a^n=a^{m+n}$; $\dfrac{a^m}{a^n}=a^{m-n}$; $(a^m)^n=a^{mn}$; $(ab)^n=a^nb^n$; $a^{\frac mn}=\sqrt[n]{a^m}$; $a^{-n}=\dfrac1{a^n}$.`,
  R`**Rút gọn:** đổi mọi căn thức về luỹ thừa với số mũ hữu tỉ, rồi cộng, trừ số mũ.`,
  R`**So sánh:** với $a>1$: $a^m>a^n\Leftrightarrow m>n$; với $0<a<1$: $a^m>a^n\Leftrightarrow m<n$.`,
  R`**Lãi kép:** gửi $P$, lãi suất $r$ mỗi kì, lãi nhập gốc; sau $n$ kì: $A=P(1+r)^n$. **Tăng trưởng mũ:** $N(t)=N_0\cdot a^{t/T}$ (mỗi khoảng $T$ tăng gấp $a$ lần).`
 ],
 luuY: [
  R`$a^m+a^n\ne a^{m+n}$ (chỉ có quy tắc cho tích).`,
  R`So sánh hai luỹ thừa cơ số nhỏ hơn $1$ mà quên đổi chiều.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $A=8^{\frac23}-27^{-\frac13}$.`,
   giai: [
    R`$8^{\frac23}=\left(2^3\right)^{\frac23}=2^2=4$.`,
    R`$27^{-\frac13}=\left(3^3\right)^{-\frac13}=3^{-1}=\dfrac13$.`,
    R`$A=4-\dfrac13=\dfrac{11}3$.`
   ] },
 { muc: "TH", de: R`Rút gọn $P=\dfrac{a^{\frac13}\cdot\sqrt a}{\sqrt[6]a}$ với $a>0$.`,
   giai: [
    R`$\sqrt a=a^{\frac12}$, $\sqrt[6]a=a^{\frac16}$.`,
    R`$P=a^{\frac13+\frac12-\frac16}=a^{\frac{2+3-1}6}=a^{\frac23}$.`
   ] },
 { muc: "TH", de: R`So sánh: a) $3^{\sqrt2}$ và $3^{1{,}4}$; b) $(0{,}5)^{\sqrt3}$ và $(0{,}5)^{1{,}7}$.`,
   giai: [
    R`a) $\sqrt2\approx1{,}414>1{,}4$ và cơ số $3>1$, nên $3^{\sqrt2}>3^{1{,}4}$.`,
    R`b) $\sqrt3\approx1{,}732>1{,}7$ nhưng cơ số $0<0{,}5<1$, nên $(0{,}5)^{\sqrt3}<(0{,}5)^{1{,}7}$.`
   ] },
 { muc: "VD", de: R`Gửi tiết kiệm $50$ triệu đồng, lãi suất $0{,}5\%$/tháng, lãi nhập gốc hằng tháng. Sau $24$ tháng có bao nhiêu tiền (làm tròn đến hàng phần trăm triệu đồng)?`,
   giai: [
    R`$P=50$, $r=0{,}005$, $n=24$.`,
    R`$A=50\cdot(1{,}005)^{24}\approx50\cdot1{,}12716\approx56{,}36$ (triệu đồng).`
   ] },
 { muc: "VD", de: R`Số vi khuẩn sau $t$ giờ là $N(t)=500\cdot2^{\frac t3}$. Sau $12$ giờ có bao nhiêu vi khuẩn? Sau bao lâu số vi khuẩn gấp $8$ lần ban đầu?`,
   giai: [
    R`$N(12)=500\cdot2^{4}=8000$ (con).`,
    R`Gấp $8$ lần: $2^{\frac t3}=8=2^3\Leftrightarrow\dfrac t3=3\Leftrightarrow t=9$ (giờ).`
   ] }
 ] },
"C6-B19-D24": {
 pp: [
  R`**Định nghĩa:** với $0<a\ne1$, $b>0$: $\log_ab=\alpha\Leftrightarrow a^\alpha=b$. Kí hiệu $\log b=\log_{10}b$, $\ln b=\log_eb$.`,
  R`**Tính chất:** $\log_a1=0$; $\log_aa=1$; $a^{\log_ab}=b$; $\log_aa^\alpha=\alpha$.`,
  R`**Quy tắc** ($b,c>0$): $\log_a(bc)=\log_ab+\log_ac$; $\log_a\dfrac bc=\log_ab-\log_ac$; $\log_ab^\alpha=\alpha\log_ab$; **đổi cơ số** $\log_ab=\dfrac{\log_cb}{\log_ca}$, đặc biệt $\log_ab=\dfrac1{\log_ba}$.`,
  R`**Ứng dụng:** độ pH $=-\log[\text{H}^+]$; độ Richter $M=\log\dfrac{A}{A_0}$ (biên độ gấp $10^k$ lần thì tăng $k$ độ).`
 ],
 luuY: [
  R`$\log_a(b+c)\ne\log_ab+\log_ac$.`,
  R`Quên điều kiện cơ số $0<a\ne1$ và biểu thức trong lôgarit dương.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $\log_232$, $\log_3\dfrac19$, $\log_{\frac12}8$.`,
   giai: [
    R`$32=2^5$ nên $\log_232=5$.`,
    R`$\dfrac19=3^{-2}$ nên $\log_3\dfrac19=-2$.`,
    R`$8=2^3=\left(\dfrac12\right)^{-3}$ nên $\log_{\frac12}8=-3$.`
   ] },
 { muc: "TH", de: R`Tính $A=\log_212-\log_23+\log_2\sqrt2$.`,
   giai: [
    R`$\log_212-\log_23=\log_2\dfrac{12}3=\log_24=2$.`,
    R`$\log_2\sqrt2=\log_22^{\frac12}=\dfrac12$.`,
    R`$A=2+\dfrac12=\dfrac52$.`
   ] },
 { muc: "TH", de: R`Cho $\log_23=a$. Tính $\log_218$, $\log_32$ và $\log_618$ theo $a$.`,
   giai: [
    R`$\log_218=\log_2(2\cdot3^2)=1+2\log_23=1+2a$.`,
    R`$\log_32=\dfrac1{\log_23}=\dfrac1a$.`,
    R`$\log_618=\dfrac{\log_218}{\log_26}=\dfrac{1+2a}{\log_2(2\cdot3)}=\dfrac{1+2a}{1+a}$.`
   ] },
 { muc: "VD", de: R`a) Một dung dịch có nồng độ $[\text{H}^+]=10^{-3}$ mol/L. Tính pH. b) Một dung dịch có pH $=5{,}5$. Tính $[\text{H}^+]$. c) Biên độ trận động đất A gấp $100$ lần trận B. Độ Richter của A lớn hơn của B bao nhiêu?`,
   giai: [
    R`a) $\text{pH}=-\log10^{-3}=3$.`,
    R`b) $-\log[\text{H}^+]=5{,}5\Leftrightarrow[\text{H}^+]=10^{-5{,}5}\approx3{,}16\cdot10^{-6}$ (mol/L).`,
    R`c) $M_A-M_B=\log\dfrac{A_A}{A_0}-\log\dfrac{A_B}{A_0}=\log\dfrac{A_A}{A_B}=\log100=2$ (độ).`
   ] }
 ] },
"C6-B20-D25": {
 pp: [
  R`**Hàm số mũ** $y=a^x$ ($0<a\ne1$): tập xác định $\mathbb R$, tập giá trị $(0;+\infty)$; đồng biến khi $a>1$, nghịch biến khi $0<a<1$; đồ thị đi qua $(0;1)$ và $(1;a)$, luôn nằm trên trục hoành.`,
  R`**Hàm số lôgarit** $y=\log_ax$: tập xác định $(0;+\infty)$, tập giá trị $\mathbb R$; đồng biến khi $a>1$, nghịch biến khi $0<a<1$; đồ thị đi qua $(1;0)$ và $(a;1)$, nằm bên phải trục tung.`,
  R`**Tập xác định của $y=\log_au(x)$:** giải $u(x)>0$ (kết hợp điều kiện của căn, mẫu nếu có).`,
  R`Đồ thị $y=a^x$ và $y=\log_ax$ đối xứng nhau qua đường thẳng $y=x$.`
 ],
 luuY: [
  R`Nhận xét tính đơn điệu theo dấu của số mũ thay vì theo cơ số.`,
  R`Đặt điều kiện $u(x)\ge0$ cho lôgarit (phải là $u(x)>0$).`
 ],
 vd: [
 { muc: "NB", de: R`Trong các hàm số $y=\left(\dfrac\pi4\right)^x$, $y=\left(\sqrt3\right)^x$, $y=\log_{0{,}5}x$, $y=\log_{\frac e2}x$, hàm số nào đồng biến trên tập xác định?`,
   giai: [
    R`$\dfrac\pi4\approx0{,}785<1$: nghịch biến. $\sqrt3>1$: đồng biến.`,
    R`$0{,}5<1$: nghịch biến. $\dfrac e2\approx1{,}36>1$: đồng biến.`,
    R`**Kết luận.** $y=\left(\sqrt3\right)^x$ và $y=\log_{\frac e2}x$.`
   ] },
 { muc: "TH", de: R`Tìm tập xác định của $y=\log_2(x^2-4x+3)$.`,
   giai: [
    R`Điều kiện $x^2-4x+3>0\Leftrightarrow(x-1)(x-3)>0\Leftrightarrow x<1$ hoặc $x>3$.`,
    R`$D=(-\infty;1)\cup(3;+\infty)$.`
   ] },
 { muc: "TH", de: R`Tìm tập xác định của $y=\log_3(4-x)+\sqrt{x-1}$.`,
   giai: [
    R`Điều kiện: $4-x>0$ và $x-1\ge0$, tức $x<4$ và $x\ge1$.`,
    R`$D=[1;4)$.`
   ] },
 { muc: "VD", de: R`Vẽ đồ thị các hàm số $y=2^x$ và $y=\log_2x$ trên cùng một hệ trục. Nhận xét.`,
   giai: [
    R`Bảng giá trị $y=2^x$: $x=-1,0,1,2$ cho $y=\dfrac12,1,2,4$.`,
    R`Bảng giá trị $y=\log_2x$: $x=\dfrac12,1,2,4$ cho $y=-1,0,1,2$ (đổi chỗ $x$, $y$ của bảng trên).`,
    R`**Nhận xét.** Cả hai hàm đồng biến (cơ số $2>1$); hai đồ thị đối xứng nhau qua đường thẳng $y=x$; $y=2^x$ luôn nằm trên trục hoành, $y=\log_2x$ luôn nằm bên phải trục tung.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.8,>=stealth]
\draw[->] (-2.5,0)--(4.8,0) node[below]{$x$};
\draw[->] (0,-2.5)--(0,4.8) node[left]{$y$};
\draw[thick,blue,domain=-2.5:2.2,samples=80] plot(\x,{pow(2,\x)});
\draw[thick,red,domain=0.18:4.6,samples=80] plot(\x,{ln(\x)/ln(2)});
\draw[dashed,gray] (-2.3,-2.3)--(4.5,4.5);
\fill (0,1) circle (2pt); \fill (1,0) circle (2pt); \fill (1,2) circle (2pt); \fill (2,1) circle (2pt);
\node[left] at (0,1){$1$}; \node[below] at (1,0){$1$};
\node[right] at (2.05,4.1){$y=2^x$}; \node[right] at (3.6,1.5){$y=\log_2x$}; \node[right] at (4.3,4.3){$y=x$};
\node[below left] at (0,0){$O$};
\end{tikzpicture}`,
   chuThich: R`Đồ thị $y=2^x$ (xanh) và $y=\log_2x$ (đỏ) đối xứng qua đường $y=x$ (nét đứt).` },
 { muc: "TH", de: R`So sánh $\log_{0{,}3}5$ và $\log_{0{,}3}7$.`,
   giai: [
    R`Cơ số $0<0{,}3<1$ nên hàm $y=\log_{0{,}3}x$ nghịch biến.`,
    R`$5<7$ nên $\log_{0{,}3}5>\log_{0{,}3}7$.`
   ] }
 ] },
"C6-B21-D26": {
 pp: [
  R`**Phương trình mũ cơ bản:** $a^x=b$ có nghiệm $x=\log_ab$ khi $b>0$, vô nghiệm khi $b\le0$.`,
  R`**Đưa về cùng cơ số:** $a^{u(x)}=a^{v(x)}\Leftrightarrow u(x)=v(x)$.`,
  R`**Phương trình lôgarit:** $\log_au(x)=b\Leftrightarrow u(x)=a^b$; $\log_au=\log_av\Leftrightarrow u=v>0$. Luôn đặt điều kiện trước, đối chiếu sau.`,
  R`**Đặt ẩn phụ:** ví dụ $t=a^x$ (điều kiện $t>0$), $t=\log_ax$, đưa về phương trình bậc hai.`
 ],
 luuY: [
  R`Quên điều kiện xác định của lôgarit nên nhận nghiệm ngoại lai.`,
  R`Đặt $t=3^x$ nhưng nhận cả nghiệm $t\le0$.`
 ],
 vd: [
 { muc: "NB", de: R`Giải phương trình $2^{x+1}=8$.`,
   giai: [
    R`$8=2^3$: $2^{x+1}=2^3\Leftrightarrow x+1=3\Leftrightarrow x=2$.`
   ] },
 { muc: "TH", de: R`Giải phương trình $9^x-4\cdot3^x+3=0$.`,
   giai: [
    R`$9^x=(3^x)^2$. Đặt $t=3^x>0$: $t^2-4t+3=0\Leftrightarrow t=1$ hoặc $t=3$ (đều dương).`,
    R`$3^x=1\Leftrightarrow x=0$; $3^x=3\Leftrightarrow x=1$.`,
    R`**Kết quả.** $x\in\{0;1\}$.`
   ] },
 { muc: "TH", de: R`Giải phương trình $\log_2(x-1)=3$.`,
   giai: [
    R`Điều kiện $x>1$.`,
    R`$x-1=2^3=8\Leftrightarrow x=9$ (thoả mãn).`
   ] },
 { muc: "VD", de: R`Giải phương trình $\log_2x+\log_2(x-2)=3$.`,
   giai: [
    R`Điều kiện: $x>0$ và $x>2$, tức $x>2$.`,
    R`$\log_2[x(x-2)]=3\Leftrightarrow x^2-2x=8\Leftrightarrow x^2-2x-8=0\Leftrightarrow x=4$ hoặc $x=-2$.`,
    R`Đối chiếu điều kiện: loại $x=-2$. **Kết quả.** $x=4$.`
   ] },
 { muc: "VD", de: R`Dân số một tỉnh là $90$ vạn người, tăng đều $1\%$ mỗi năm. Sau ít nhất bao nhiêu năm dân số đạt $100$ vạn người?`,
   giai: [
    R`Sau $n$ năm: $90\cdot1{,}01^n$. Cần $90\cdot1{,}01^n=100\Leftrightarrow1{,}01^n=\dfrac{10}9$.`,
    R`$n=\log_{1{,}01}\dfrac{10}9=\dfrac{\ln\frac{10}9}{\ln1{,}01}\approx10{,}59$.`,
    R`$n$ là số nguyên nên cần ít nhất $11$ năm.`
   ] }
 ] },
"C6-B21-D27": {
 pp: [
  R`**Bất phương trình mũ:** nếu $a>1$: $a^u>a^v\Leftrightarrow u>v$ (giữ chiều); nếu $0<a<1$: $a^u>a^v\Leftrightarrow u<v$ (**đổi chiều**).`,
  R`**Bất phương trình lôgarit:** nếu $a>1$: $\log_au>\log_av\Leftrightarrow u>v>0$; nếu $0<a<1$: $\log_au>\log_av\Leftrightarrow0<u<v$.`,
  R`Đưa hai vế về cùng cơ số; luôn kèm điều kiện biểu thức trong lôgarit dương.`,
  R`Bài thực tế "sau ít nhất bao nhiêu năm thì vượt...": lập bất phương trình mũ, lấy lôgarit, chọn số nguyên nhỏ nhất thoả mãn.`
 ],
 luuY: [
  R`Quên đổi chiều khi cơ số nhỏ hơn $1$.`,
  R`Quên điều kiện $u>0$ ở bất phương trình lôgarit.`
 ],
 vd: [
 { muc: "NB", de: R`Giải bất phương trình $2^x>8$.`,
   giai: [
    R`$2^x>2^3$, cơ số $2>1$ nên $x>3$.`
   ] },
 { muc: "TH", de: R`Giải bất phương trình $\left(\dfrac13\right)^{x-1}\ge9$.`,
   giai: [
    R`$9=\left(\dfrac13\right)^{-2}$, nên bất phương trình là $\left(\dfrac13\right)^{x-1}\ge\left(\dfrac13\right)^{-2}$.`,
    R`Cơ số $\dfrac13<1$, đổi chiều: $x-1\le-2\Leftrightarrow x\le-1$.`
   ] },
 { muc: "TH", de: R`Giải bất phương trình $\log_2(x-3)<2$.`,
   giai: [
    R`Cơ số $2>1$: $0<x-3<2^2\Leftrightarrow3<x<7$.`,
    R`Tập nghiệm $S=(3;7)$.`
   ] },
 { muc: "VD", de: R`Giải bất phương trình $\log_{0{,}5}(2x-1)\ge\log_{0{,}5}(x+2)$.`,
   giai: [
    R`Cơ số $0<0{,}5<1$ nên bất phương trình $\Leftrightarrow0<2x-1\le x+2$.`,
    R`$2x-1>0\Leftrightarrow x>\dfrac12$; $2x-1\le x+2\Leftrightarrow x\le3$.`,
    R`Tập nghiệm $S=\left(\dfrac12;3\right]$.`
   ] },
 { muc: "VD", de: R`Gửi $100$ triệu đồng với lãi suất $7\%$/năm, lãi nhập gốc. Sau ít nhất bao nhiêu năm số tiền vượt $150$ triệu đồng?`,
   giai: [
    R`Cần $100\cdot1{,}07^n>150\Leftrightarrow1{,}07^n>1{,}5\Leftrightarrow n>\log_{1{,}07}1{,}5=\dfrac{\ln1{,}5}{\ln1{,}07}\approx5{,}99$.`,
    R`Số nguyên nhỏ nhất là $n=6$. Kiểm tra: $1{,}07^5\approx1{,}403<1{,}5$; $1{,}07^6\approx1{,}501>1{,}5$ ✓.`,
    R`**Kết luận.** Sau ít nhất $6$ năm.`
   ] }
 ] }
});
/* ---------- Chương VII · Quan hệ vuông góc trong không gian ---------- */
const CHOPV = R`\draw[thick] (0,0)--(2.5,0)--(3.5,1.2);
\draw[dashed] (3.5,1.2)--(1,1.2)--(0,0);
\draw[thick] (0,3)--(0,0);
\draw[thick] (0,3)--(2.5,0);
\draw[thick] (0,3)--(3.5,1.2);
\draw[dashed] (0,3)--(1,1.2);
\node[above] at (0,3){$S$};
\node[below left] at (0,0){$A$};
\node[below right] at (2.5,0){$B$};
\node[right] at (3.5,1.2){$C$};
\node[above right] at (1,1.2){$D$};`;
Object.assign(D, {
"C7-B22-D28": {
 pp: [
  R`**Góc giữa hai đường thẳng** $a$, $b$ trong không gian: lấy $a'\parallel a$ sao cho $a'$ cắt $b$; góc giữa $a$ và $b$ bằng góc giữa $a'$ và $b$, thuộc $[0^\circ;90^\circ]$.`,
  R`Cách làm: dời một đường thẳng song song (dùng hình bình hành, đường trung bình) để hai đường cắt nhau, rồi tính góc trong một tam giác (định lí côsin, tam giác đặc biệt).`,
  R`$a\perp b$ khi góc giữa chúng bằng $90^\circ$. Hai đường vuông góc có thể chéo nhau.`
 ],
 luuY: [
  R`Định lí côsin cho góc tù ($\cos<0$) mà lấy luôn làm góc giữa hai đường thẳng: phải lấy góc bù.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa $AB$ và $B'C'$; góc giữa $AC$ và $A'D'$.`,
   giai: [
    R`$B'C'\parallel BC$ nên góc $(AB,B'C')=(AB,BC)=90^\circ$.`,
    R`$A'D'\parallel AD$ nên góc $(AC,A'D')=(AC,AD)=\widehat{CAD}=45^\circ$ (đường chéo hình vuông).`
   ] },
 { muc: "TH", de: R`Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa $A'C'$ và $BD$; góc giữa $AB'$ và $BC'$.`,
   giai: [
    R`$A'C'\parallel AC$ và $AC\perp BD$ (hai đường chéo hình vuông), nên góc $(A'C',BD)=90^\circ$.`,
    R`$BC'\parallel AD'$ (vì $ABC'D'$ là hình bình hành), nên góc $(AB',BC')=(AB',AD')=\widehat{B'AD'}$.`,
    R`$AB'$, $AD'$, $B'D'$ đều là đường chéo của các mặt hình vuông nên bằng nhau: tam giác $AB'D'$ đều. Góc cần tìm bằng $60^\circ$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + HOP11 + R`
\draw[thick,red] (0,0)--(3,2.5); \draw[thick,blue,dashed] (0,0)--(1,3.7); \draw[thick] (3,2.5)--(1,3.7);
\end{tikzpicture}`,
   chuThich: R`Tam giác $AB'D'$ có ba cạnh là ba đường chéo mặt, nên là tam giác đều.` },
 { muc: "VD", de: R`Cho tứ diện $ABCD$ có $AB=CD=2a$. Gọi $M$, $N$ lần lượt là trung điểm $BC$, $AD$, biết $MN=a\sqrt3$. Tính góc giữa $AB$ và $CD$.`,
   giai: [
    R`Gọi $P$ là trung điểm $AC$. $PM$ là đường trung bình tam giác $ABC$: $PM\parallel AB$, $PM=a$. $PN$ là đường trung bình tam giác $ACD$: $PN\parallel CD$, $PN=a$.`,
    R`Góc $(AB,CD)=(PM,PN)$.`,
    R`Trong tam giác $PMN$: $\cos\widehat{MPN}=\dfrac{a^2+a^2-3a^2}{2\cdot a\cdot a}=-\dfrac12$, nên $\widehat{MPN}=120^\circ$.`,
    R`Góc giữa hai đường thẳng không quá $90^\circ$: $(AB,CD)=180^\circ-120^\circ=60^\circ$.`
   ] }
 ] },
"C7-B23-D29": {
 pp: [
  R`**Điều kiện:** nếu $d$ vuông góc với hai đường thẳng **cắt nhau** nằm trong $(P)$ thì $d\perp(P)$.`,
  R`**Tính chất:** $d\perp(P)$ thì $d$ vuông góc với mọi đường thẳng nằm trong $(P)$. Dùng để chứng minh hai đường thẳng vuông góc: chứng minh đường này vuông góc với một mặt phẳng chứa đường kia.`,
  R`**Mô hình hay gặp:** hình chóp có $SA\perp$ đáy. Khi đó $SA$ vuông góc với mọi đường trong đáy; nếu đáy là hình vuông/chữ nhật thì $BC\perp(SAB)$, $CD\perp(SAD)$, $BD\perp(SAC)$ (đáy hình vuông).`
 ],
 luuY: [
  R`Chỉ chứng minh $d$ vuông góc với **một** đường thẳng trong $(P)$, hoặc với hai đường song song.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA\perp(ABCD)$. Chứng minh $BC\perp(SAB)$.`,
   giai: [
    R`$BC\perp AB$ (hai cạnh kề của hình vuông).`,
    R`$SA\perp(ABCD)$, $BC\subset(ABCD)$ nên $BC\perp SA$.`,
    R`$AB$ và $SA$ cắt nhau tại $A$, cùng nằm trong $(SAB)$. Vậy $BC\perp(SAB)$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + CHOPV + R`
\end{tikzpicture}` },
 { muc: "TH", de: R`Với hình chóp ở ví dụ 1, chứng minh $BD\perp(SAC)$, từ đó suy ra $BD\perp SC$.`,
   giai: [
    R`$BD\perp AC$ (hai đường chéo hình vuông) và $BD\perp SA$ (vì $SA\perp$ đáy).`,
    R`$AC$, $SA$ cắt nhau tại $A$ trong $(SAC)$, nên $BD\perp(SAC)$.`,
    R`$SC\subset(SAC)$, nên $BD\perp SC$.`
   ] },
 { muc: "VD", de: R`Với hình chóp ở ví dụ 1, gọi $AH$ là đường cao của tam giác $SAB$ ($H\in SB$). Chứng minh $AH\perp SC$.`,
   giai: [
    R`Theo ví dụ 1, $BC\perp(SAB)$, mà $AH\subset(SAB)$ nên $AH\perp BC$.`,
    R`Lại có $AH\perp SB$. $SB$, $BC$ cắt nhau tại $B$ trong $(SBC)$, nên $AH\perp(SBC)$.`,
    R`$SC\subset(SBC)$, suy ra $AH\perp SC$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + CHOPV + R`
\draw[thick,red] (0,0)--(1.15,1.62);
\fill[red] (1.15,1.62) circle (1.5pt) node[above right]{$H$};
\end{tikzpicture}` },
 { muc: "TH", de: R`Cho tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc. Chứng minh $OA\perp BC$.`,
   giai: [
    R`$OA\perp OB$ và $OA\perp OC$; $OB$, $OC$ cắt nhau tại $O$ nên $OA\perp(OBC)$.`,
    R`$BC\subset(OBC)$ nên $OA\perp BC$.`
   ] }
 ] },
"C7-B24-D30": {
 pp: [
  R`**Góc giữa đường thẳng $d$ và mặt phẳng $(P)$** (khi $d$ không vuông góc với $(P)$): bằng góc giữa $d$ và hình chiếu vuông góc $d'$ của nó trên $(P)$.`,
  R`**Cách tìm hình chiếu:** $d$ cắt $(P)$ tại $O$; lấy điểm $M\in d$, tìm hình chiếu $H$ của $M$ trên $(P)$ (thường có sẵn đường vuông góc). Góc cần tìm là $\widehat{MOH}$, tính trong tam giác vuông $MHO$: $\tan=\dfrac{MH}{OH}$, $\sin=\dfrac{MH}{MO}$.`,
  R`Hình chóp có $SA\perp$ đáy: góc giữa $SX$ (với $X$ trong đáy) và đáy là $\widehat{SXA}$.`
 ],
 luuY: [
  R`Lấy nhầm góc giữa $d$ và một đường bất kì trong $(P)$, không phải hình chiếu.`
 ],
 vd: [
 { muc: "TH", de: R`Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA\perp(ABCD)$, $SA=a\sqrt2$. Tính góc giữa $SC$ và mặt phẳng đáy.`,
   giai: [
    R`$SA\perp$ đáy nên hình chiếu của $SC$ trên đáy là $AC$. Góc cần tìm là $\widehat{SCA}$.`,
    R`$AC=a\sqrt2$ (đường chéo hình vuông). Tam giác $SAC$ vuông tại $A$: $\tan\widehat{SCA}=\dfrac{SA}{AC}=\dfrac{a\sqrt2}{a\sqrt2}=1$.`,
    R`**Kết luận.** Góc giữa $SC$ và đáy bằng $45^\circ$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + CHOPV + R`
\draw[dashed,red] (0,0)--(3.5,1.2); \draw[thick,red] (0,3)--(3.5,1.2);
\end{tikzpicture}`,
   chuThich: R`Góc giữa $SC$ và đáy là góc $\widehat{SCA}$ ($AC$ là hình chiếu của $SC$).` },
 { muc: "TH", de: R`Với hình chóp ở ví dụ 1, tính góc giữa $SB$ và đáy (làm tròn đến hàng phần mười của độ).`,
   giai: [
    R`Hình chiếu của $SB$ trên đáy là $AB$; góc cần tìm là $\widehat{SBA}$.`,
    R`$\tan\widehat{SBA}=\dfrac{SA}{AB}=\dfrac{a\sqrt2}{a}=\sqrt2$, nên $\widehat{SBA}\approx54{,}7^\circ$.`
   ] },
 { muc: "VD", de: R`Với hình chóp ở ví dụ 1, tính góc giữa $SC$ và mặt phẳng $(SAB)$.`,
   giai: [
    R`$BC\perp(SAB)$ (chứng minh như dạng trước), nên hình chiếu của $C$ trên $(SAB)$ là $B$; hình chiếu của $SC$ là $SB$. Góc cần tìm là $\widehat{CSB}$.`,
    R`$SB=\sqrt{SA^2+AB^2}=\sqrt{2a^2+a^2}=a\sqrt3$.`,
    R`Tam giác $SBC$ vuông tại $B$: $\tan\widehat{CSB}=\dfrac{BC}{SB}=\dfrac{a}{a\sqrt3}=\dfrac1{\sqrt3}$, nên góc bằng $30^\circ$.`
   ] }
 ] },
"C7-B25-D31": {
 pp: [
  R`**Hai mặt phẳng vuông góc:** nếu $(P)$ chứa một đường thẳng vuông góc với $(Q)$ thì $(P)\perp(Q)$.`,
  R`**Góc nhị diện** $[P,d,Q]$: lấy điểm $O$ trên cạnh $d$, kẻ $Ox\subset(P)$, $Oy\subset(Q)$ cùng vuông góc với $d$; góc $\widehat{xOy}$ là góc phẳng nhị diện.`,
  R`**Góc giữa mặt bên $(SBC)$ và đáy** của hình chóp có hình chiếu của đỉnh là $H$: kẻ $HK\perp BC$ ($K\in BC$); khi đó $SK\perp BC$ và góc cần tìm là $\widehat{SKH}$.`,
  R`Hình chóp đều: $H$ là tâm đáy; $K$ là trung điểm cạnh đáy.`
 ],
 luuY: [
  R`Lấy góc giữa hai đường không cùng vuông góc với giao tuyến.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình chóp $S.ABCD$ đáy hình vuông, $SA\perp(ABCD)$. Chứng minh $(SAB)\perp(ABCD)$ và $(SBC)\perp(SAB)$.`,
   giai: [
    R`$(SAB)$ chứa $SA$ mà $SA\perp(ABCD)$, nên $(SAB)\perp(ABCD)$.`,
    R`$BC\perp(SAB)$ (vì $BC\perp AB$, $BC\perp SA$), mà $BC\subset(SBC)$, nên $(SBC)\perp(SAB)$.`
   ] },
 { muc: "TH", de: R`Với hình chóp trên, cạnh đáy $a$, $SA=a\sqrt3$. Tính số đo góc nhị diện $[S,BC,A]$.`,
   giai: [
    R`$AB\perp BC$ và $SB\perp BC$ (vì $BC\perp(SAB)$). Vậy góc phẳng nhị diện là $\widehat{SBA}$.`,
    R`$\tan\widehat{SBA}=\dfrac{SA}{AB}=\sqrt3$, nên $\widehat{SBA}=60^\circ$.`
   ] },
 { muc: "VD", de: R`Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy $a$, chiều cao $SO=\dfrac a2$. Tính góc giữa mặt bên $(SCD)$ và mặt đáy.`,
   giai: [
    R`$O$ là tâm hình vuông $ABCD$. Gọi $M$ là trung điểm $CD$: $OM\perp CD$ và $OM=\dfrac a2$.`,
    R`$SO\perp$ đáy, $OM\perp CD$ nên $SM\perp CD$ (tam giác $SCD$ cân tại $S$). Góc cần tìm là $\widehat{SMO}$.`,
    R`$\tan\widehat{SMO}=\dfrac{SO}{OM}=\dfrac{a/2}{a/2}=1$, nên góc bằng $45^\circ$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
\draw[thick] (0,0)--(3,0)--(4,1.2);
\draw[dashed] (4,1.2)--(1,1.2)--(0,0);
\draw[thick] (2,3.4)--(0,0); \draw[thick] (2,3.4)--(3,0); \draw[thick] (2,3.4)--(4,1.2); \draw[dashed] (2,3.4)--(1,1.2);
\draw[dashed] (0,0)--(4,1.2); \draw[dashed] (3,0)--(1,1.2);
\draw[dashed,red] (2,3.4)--(2,0.6)--(2.5,1.2); \draw[red,dashed,thick] (2,3.4)--(2.5,1.2);
\fill (2,0.6) circle (1.5pt) node[below]{$O$}; \fill (2.5,1.2) circle (1.5pt) node[above right]{$M$};
\node[above] at (2,3.4){$S$}; \node[below left] at (0,0){$A$}; \node[below right] at (3,0){$B$}; \node[right] at (4,1.2){$C$}; \node[above left] at (1,1.2){$D$};
\end{tikzpicture}`,
   chuThich: R`Góc giữa $(SCD)$ và đáy là $\widehat{SMO}$.` }
 ] },
"C7-B26-D32": {
 pp: [
  R`**Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$** là $MH$, với $H$ là hình chiếu vuông góc của $M$ trên $(P)$.`,
  R`**Kĩ thuật với hình chóp có $SA\perp$ đáy:** $d\big(A,(SBC)\big)=AH$ với $AH\perp SB$ (đáy vuông tại $B$). Trong tam giác $SAB$ vuông tại $A$: $\dfrac1{AH^2}=\dfrac1{SA^2}+\dfrac1{AB^2}$.`,
  R`**Đường thẳng song song với mặt phẳng / hai mặt phẳng song song:** khoảng cách bằng khoảng cách từ một điểm bất kì trên đường (mặt) này đến mặt kia. Chọn điểm "dễ tính" (thường là chân đường cao).`,
  R`**Hai đường thẳng chéo nhau $a$, $b$:** nếu $(P)\supset b$ và $(P)\parallel a$ thì $d(a,b)=d\big(a,(P)\big)$.`,
  R`**Tứ diện vuông** $OABC$ ($OA,OB,OC$ đôi một vuông góc): $\dfrac1{d^2}=\dfrac1{OA^2}+\dfrac1{OB^2}+\dfrac1{OC^2}$ với $d=d\big(O,(ABC)\big)$.`
 ],
 luuY: [
  R`Nhầm $d\big(A,(SBC)\big)$ với $AB$ hoặc $AS$.`,
  R`Quên chứng minh $AH\perp(SBC)$ trước khi kết luận.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình chóp $S.ABCD$ đáy hình vuông cạnh $a$, $SA\perp(ABCD)$. Tính $d\big(B,(SAD)\big)$.`,
   giai: [
    R`$BA\perp AD$ và $BA\perp SA$ nên $BA\perp(SAD)$.`,
    R`Vậy $A$ là hình chiếu của $B$ trên $(SAD)$, $d\big(B,(SAD)\big)=BA=a$.`
   ] },
 { muc: "TH", de: R`Với hình chóp trên và $SA=a$, tính $d\big(A,(SBC)\big)$.`,
   giai: [
    R`Kẻ $AH\perp SB$ ($H\in SB$). Ta có $BC\perp(SAB)$ nên $BC\perp AH$. Vậy $AH\perp(SBC)$ và $d\big(A,(SBC)\big)=AH$.`,
    R`$\dfrac1{AH^2}=\dfrac1{SA^2}+\dfrac1{AB^2}=\dfrac1{a^2}+\dfrac1{a^2}=\dfrac2{a^2}$.`,
    R`$AH=\dfrac{a}{\sqrt2}=\dfrac{a\sqrt2}2$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=1]
` + CHOPV + R`
\draw[thick,red] (0,0)--(1.25,1.5);
\fill[red] (1.25,1.5) circle (1.5pt) node[above right]{$H$};
\end{tikzpicture}` },
 { muc: "VD", de: R`Với hình chóp ở ví dụ 2, tính khoảng cách giữa hai đường thẳng chéo nhau $AD$ và $SB$.`,
   giai: [
    R`$AD\parallel BC$ và $BC\subset(SBC)$ nên $AD\parallel(SBC)$; mặt phẳng $(SBC)$ chứa $SB$.`,
    R`Do đó $d(AD,SB)=d\big(AD,(SBC)\big)=d\big(A,(SBC)\big)$.`,
    R`Theo ví dụ 2: $d(AD,SB)=\dfrac{a\sqrt2}2$.`
   ] },
 { muc: "VD", de: R`Cho tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc và $OA=OB=OC=a$. Tính khoảng cách từ $O$ đến $(ABC)$.`,
   giai: [
    R`Áp dụng công thức tứ diện vuông: $\dfrac1{d^2}=\dfrac1{a^2}+\dfrac1{a^2}+\dfrac1{a^2}=\dfrac3{a^2}$.`,
    R`$d=\dfrac a{\sqrt3}=\dfrac{a\sqrt3}3$.`,
    R`(Giải thích công thức: kẻ $OK\perp BC$, $OH\perp AK$; khi đó $OH\perp(ABC)$ và $\dfrac1{OH^2}=\dfrac1{OA^2}+\dfrac1{OK^2}=\dfrac1{OA^2}+\dfrac1{OB^2}+\dfrac1{OC^2}$.)`
   ] }
 ] },
"C7-B27-D33": {
 pp: [
  R`**Khối chóp:** $V=\dfrac13B\cdot h$ ($B$: diện tích đáy, $h$: chiều cao). **Khối lăng trụ:** $V=B\cdot h$. **Khối hộp chữ nhật:** $V=abc$; **lập phương:** $V=a^3$.`,
  R`**Tìm chiều cao:** cạnh bên vuông góc với đáy (chính là chiều cao); hình chóp đều thì chân đường cao là tâm đáy, dùng Pythagore $h=\sqrt{\text{cạnh bên}^2-R^2}$ ($R$: bán kính đường tròn ngoại tiếp đáy).`,
  R`**Diện tích hay dùng:** tam giác đều cạnh $a$: $\dfrac{a^2\sqrt3}4$; hình vuông: $a^2$.`,
  R`**Tỉ số thể tích** (cùng đỉnh $S$, $A',B',C'$ nằm trên $SA,SB,SC$): $\dfrac{V_{S.A'B'C'}}{V_{S.ABC}}=\dfrac{SA'}{SA}\cdot\dfrac{SB'}{SB}\cdot\dfrac{SC'}{SC}$.`
 ],
 luuY: [
  R`Quên hệ số $\dfrac13$ của khối chóp (hoặc thêm $\dfrac13$ cho lăng trụ).`,
  R`Lấy cạnh bên làm chiều cao khi cạnh bên không vuông góc với đáy.`
 ],
 vd: [
 { muc: "NB", de: R`Cho hình chóp $S.ABCD$ đáy hình vuông cạnh $a$, $SA\perp(ABCD)$, $SA=a\sqrt3$. Tính thể tích khối chóp.`,
   giai: [
    R`$B=a^2$, $h=SA=a\sqrt3$.`,
    R`$V=\dfrac13\cdot a^2\cdot a\sqrt3=\dfrac{a^3\sqrt3}3$.`
   ] },
 { muc: "TH", de: R`Cho lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác đều cạnh $a$, $AA'=2a$. Tính thể tích khối lăng trụ.`,
   giai: [
    R`$B=\dfrac{a^2\sqrt3}4$; lăng trụ đứng nên $h=AA'=2a$.`,
    R`$V=\dfrac{a^2\sqrt3}4\cdot2a=\dfrac{a^3\sqrt3}2$.`
   ] },
 { muc: "VD", de: R`Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy $a$, cạnh bên $a\sqrt2$. Tính thể tích khối chóp.`,
   giai: [
    R`$O$ là tâm hình vuông, $SO\perp$ đáy; $OA=\dfrac{AC}2=\dfrac{a\sqrt2}2$.`,
    R`$SO=\sqrt{SA^2-OA^2}=\sqrt{2a^2-\dfrac{a^2}2}=\sqrt{\dfrac{3a^2}2}=\dfrac{a\sqrt6}2$.`,
    R`$V=\dfrac13\cdot a^2\cdot\dfrac{a\sqrt6}2=\dfrac{a^3\sqrt6}6$.`
   ] },
 { muc: "VD", de: R`Cho hình chóp $S.ABC$; $M$, $N$ lần lượt là trung điểm $SB$, $SC$. Tính tỉ số thể tích của khối chóp $S.AMN$ và khối chóp $S.ABC$.`,
   giai: [
    R`$\dfrac{V_{S.AMN}}{V_{S.ABC}}=\dfrac{SA}{SA}\cdot\dfrac{SM}{SB}\cdot\dfrac{SN}{SC}=1\cdot\dfrac12\cdot\dfrac12=\dfrac14$.`
   ] },
 { muc: "VD", de: R`Một kim tự tháp có dạng hình chóp tứ giác đều, cạnh đáy $230$ m, chiều cao $147$ m. Tính thể tích của kim tự tháp.`,
   giai: [
    R`$B=230^2=52\,900$ (m²), $h=147$ m.`,
    R`$V=\dfrac13\cdot52\,900\cdot147=52\,900\cdot49=2\,592\,100$ (m³).`
   ] }
 ] }
});
/* ---------- Chương VIII · Các quy tắc tính xác suất ---------- */
Object.assign(D, {
"C8-B28-D34": {
 pp: [
  R`**Biến cố hợp** $A\cup B$: "$A$ hoặc $B$ xảy ra" (ít nhất một trong hai). **Biến cố giao** $AB$ (hay $A\cap B$): "cả $A$ và $B$ cùng xảy ra".`,
  R`**Xung khắc:** $A$, $B$ không thể cùng xảy ra ($AB=\varnothing$). **Biến cố đối** $\overline A$: "$A$ không xảy ra".`,
  R`**Độc lập:** việc $A$ xảy ra hay không không làm thay đổi xác suất của $B$ (và ngược lại). Thường gặp: các lần thử lặp lại độc lập (tung đồng xu nhiều lần, lấy có hoàn lại, hai người làm việc riêng rẽ). Nếu $A$, $B$ độc lập thì các cặp $\overline A$ và $B$, $A$ và $\overline B$, $\overline A$ và $\overline B$ cũng độc lập.`,
  R`**Diễn đạt bằng kí hiệu:** "ít nhất một" là hợp; "cả hai" là giao; "không ... nào" là giao các biến cố đối; "chỉ $A$" là $A\overline B$.`
 ],
 luuY: [
  R`Nhầm "xung khắc" với "độc lập".`,
  R`Lấy không hoàn lại nhưng coi các lần lấy là độc lập.`
 ],
 vd: [
 { muc: "NB", de: R`Gieo một con xúc xắc. $A$: "số chấm chẵn", $B$: "số chấm không nhỏ hơn $4$", $C$: "xuất hiện mặt $1$ chấm". Mô tả $A\cup B$, $AB$; hỏi $A$ và $C$ có xung khắc không?`,
   giai: [
    R`$A=\{2;4;6\}$, $B=\{4;5;6\}$, $C=\{1\}$.`,
    R`$A\cup B=\{2;4;5;6\}$; $AB=\{4;6\}$.`,
    R`$AC=\varnothing$ nên $A$ và $C$ xung khắc.`
   ] },
 { muc: "TH", de: R`Hai xạ thủ bắn mỗi người một viên vào bia. Gọi $A$: "người thứ nhất bắn trúng", $B$: "người thứ hai bắn trúng". Biểu diễn theo $A$, $B$ các biến cố: a) ít nhất một người bắn trúng; b) cả hai đều trượt; c) chỉ người thứ nhất bắn trúng; d) đúng một người bắn trúng.`,
   giai: [
    R`a) $A\cup B$.`,
    R`b) $\overline A\,\overline B$.`,
    R`c) $A\overline B$.`,
    R`d) $A\overline B\cup\overline AB$ (hai biến cố này xung khắc).`
   ] },
 { muc: "TH", de: R`Xét xem hai biến cố sau có độc lập không: a) Tung một đồng xu hai lần; $A$: "lần $1$ sấp", $B$: "lần $2$ sấp". b) Hộp có $3$ bi đỏ, $2$ bi xanh, lấy lần lượt $2$ bi **không hoàn lại**; $A$: "lần $1$ đỏ", $B$: "lần $2$ đỏ".`,
   giai: [
    R`a) Kết quả lần $1$ không ảnh hưởng lần $2$: $A$, $B$ độc lập. Kiểm tra: $P(AB)=\dfrac14=\dfrac12\cdot\dfrac12=P(A)P(B)$.`,
    R`b) Nếu lần $1$ đỏ, lần $2$ đỏ với xác suất $\dfrac24$; nếu lần $1$ xanh, xác suất là $\dfrac34$. Xác suất của $B$ phụ thuộc vào $A$: **không** độc lập.`
   ] }
 ] },
"C8-B29-D35": {
 pp: [
  R`**Công thức cộng:** $P(A\cup B)=P(A)+P(B)-P(AB)$.`,
  R`Nếu $A$, $B$ **xung khắc**: $P(A\cup B)=P(A)+P(B)$.`,
  R`**Biến cố đối:** $P(\overline A)=1-P(A)$. Dùng khi đề hỏi "ít nhất một": thường tính phần bù "không ... nào" dễ hơn.`
 ],
 luuY: [
  R`Cộng $P(A)+P(B)$ khi $A$, $B$ không xung khắc (đếm trùng phần giao).`
 ],
 vd: [
 { muc: "NB", de: R`Lớp có $40$ học sinh: $20$ em thích bóng đá, $15$ em thích cầu lông, $8$ em thích cả hai. Chọn ngẫu nhiên một em. Tính xác suất em đó thích ít nhất một trong hai môn.`,
   giai: [
    R`$P(A)=\dfrac{20}{40}$, $P(B)=\dfrac{15}{40}$, $P(AB)=\dfrac8{40}$.`,
    R`$P(A\cup B)=\dfrac{20+15-8}{40}=\dfrac{27}{40}$.`
   ] },
 { muc: "TH", de: R`Hộp có $5$ bi đỏ, $4$ bi xanh, $3$ bi vàng. Lấy ngẫu nhiên một viên. Tính xác suất lấy được bi đỏ hoặc bi xanh.`,
   giai: [
    R`"Lấy được bi đỏ" và "lấy được bi xanh" xung khắc.`,
    R`$P=\dfrac5{12}+\dfrac4{12}=\dfrac9{12}=\dfrac34$.`
   ] },
 { muc: "TH", de: R`Chọn ngẫu nhiên một số nguyên từ $1$ đến $30$. Tính xác suất số đó chia hết cho $2$ hoặc cho $3$.`,
   giai: [
    R`$A$: "chia hết cho $2$": $15$ số. $B$: "chia hết cho $3$": $10$ số. $AB$: "chia hết cho $6$": $5$ số.`,
    R`$P(A\cup B)=\dfrac{15+10-5}{30}=\dfrac{20}{30}=\dfrac23$.`
   ] },
 { muc: "VD", de: R`Gieo hai con xúc xắc cân đối. Tính xác suất có ít nhất một con xuất hiện mặt $6$ chấm.`,
   giai: [
    R`**Cách 1 (biến cố đối).** "Không con nào ra mặt $6$" có xác suất $\dfrac56\cdot\dfrac56=\dfrac{25}{36}$. Vậy $P=1-\dfrac{25}{36}=\dfrac{11}{36}$.`,
    R`**Cách 2 (công thức cộng).** $P(A\cup B)=\dfrac16+\dfrac16-\dfrac1{36}=\dfrac{11}{36}$ ✓.`
   ] }
 ] },
"C8-B30-D36": {
 pp: [
  R`**Công thức nhân cho hai biến cố độc lập:** $P(AB)=P(A)\cdot P(B)$. Mở rộng cho nhiều biến cố độc lập.`,
  R`**Các bài "đúng $k$ lần", "ít nhất một lần":** tách thành các trường hợp xung khắc, mỗi trường hợp là tích các xác suất; "ít nhất một" $=1-$ "không lần nào".`,
  R`**Hệ thống nối tiếp** (hoạt động khi mọi bộ phận hoạt động): nhân các độ tin cậy. **Song song** (hoạt động khi ít nhất một bộ phận hoạt động): $1-$ tích các xác suất hỏng.`
 ],
 luuY: [
  R`Dùng $P(AB)=P(A)P(B)$ khi $A$, $B$ không độc lập.`,
  R`Tính "đúng một người" mà quên một trong hai trường hợp.`
 ],
 vd: [
 { muc: "NB", de: R`Hai xạ thủ bắn độc lập với xác suất trúng lần lượt $0{,}8$ và $0{,}7$. Tính xác suất cả hai cùng bắn trúng.`,
   giai: [
    R`$P(AB)=0{,}8\cdot0{,}7=0{,}56$.`
   ] },
 { muc: "TH", de: R`Với hai xạ thủ trên, tính xác suất: a) có ít nhất một người bắn trúng; b) có đúng một người bắn trúng.`,
   giai: [
    R`a) Cả hai trượt: $0{,}2\cdot0{,}3=0{,}06$. Ít nhất một người trúng: $1-0{,}06=0{,}94$.`,
    R`b) $P(A\overline B)+P(\overline AB)=0{,}8\cdot0{,}3+0{,}2\cdot0{,}7=0{,}24+0{,}14=0{,}38$.`
   ] },
 { muc: "VD", de: R`Một học sinh làm $4$ câu trắc nghiệm, mỗi câu có $4$ phương án và chỉ $1$ phương án đúng; học sinh chọn ngẫu nhiên. Tính xác suất: a) đúng cả $4$ câu; b) đúng ít nhất một câu.`,
   giai: [
    R`Mỗi câu đúng với xác suất $\dfrac14$, sai với xác suất $\dfrac34$; các câu độc lập.`,
    R`a) $\left(\dfrac14\right)^4=\dfrac1{256}$.`,
    R`b) $1-\left(\dfrac34\right)^4=1-\dfrac{81}{256}=\dfrac{175}{256}\approx0{,}684$.`
   ] },
 { muc: "VD", de: R`Một hệ thống gồm hai bộ phận hoạt động độc lập, độ tin cậy (xác suất hoạt động tốt) lần lượt $0{,}9$ và $0{,}95$. Tính xác suất hệ thống hoạt động nếu hai bộ phận mắc a) nối tiếp; b) song song.`,
   giai: [
    R`a) Nối tiếp: cả hai phải hoạt động. $P=0{,}9\cdot0{,}95=0{,}855$.`,
    R`b) Song song: chỉ hỏng khi cả hai cùng hỏng, xác suất $0{,}1\cdot0{,}05=0{,}005$. $P=1-0{,}005=0{,}995$.`
   ] }
 ] }
});
/* ---------- Chương IX · Đạo hàm ---------- */
Object.assign(D, {
"C9-B31-D37": {
 pp: [
  R`**Định nghĩa:** $f'(x_0)=\lim\limits_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}$ (nếu giới hạn tồn tại, hữu hạn).`,
  R`**Cách tính bằng định nghĩa:** lập tỉ số $\dfrac{f(x)-f(x_0)}{x-x_0}$, rút gọn để khử dạng $\dfrac00$, rồi tính giới hạn.`,
  R`**Ý nghĩa hình học:** $f'(x_0)$ là hệ số góc của tiếp tuyến của đồ thị tại điểm $(x_0;f(x_0))$.`,
  R`**Ý nghĩa vật lí:** nếu $s(t)$ là quãng đường (toạ độ) thì $v(t_0)=s'(t_0)$ là vận tốc tức thời tại thời điểm $t_0$.`
 ],
 luuY: [
  R`Thay $x_0$ vào ngay tỉ số được $\dfrac00$ rồi kết luận không có đạo hàm.`
 ],
 vd: [
 { muc: "NB", de: R`Dùng định nghĩa, tính đạo hàm của $f(x)=x^2$ tại $x_0=3$.`,
   giai: [
    R`$\dfrac{f(x)-f(3)}{x-3}=\dfrac{x^2-9}{x-3}=x+3$ (với $x\ne3$).`,
    R`$f'(3)=\lim\limits_{x\to3}(x+3)=6$.`
   ] },
 { muc: "TH", de: R`Dùng định nghĩa, tính đạo hàm của $f(x)=\dfrac1x$ tại $x_0=2$.`,
   giai: [
    R`$f(x)-f(2)=\dfrac1x-\dfrac12=\dfrac{2-x}{2x}$.`,
    R`$\dfrac{f(x)-f(2)}{x-2}=\dfrac{2-x}{2x(x-2)}=-\dfrac1{2x}$ (với $x\ne2$).`,
    R`$f'(2)=\lim\limits_{x\to2}\left(-\dfrac1{2x}\right)=-\dfrac14$.`
   ] },
 { muc: "TH", de: R`Một vật rơi tự do có quãng đường $s(t)=5t^2$ (m), $t$ tính bằng giây. Tính vận tốc tức thời của vật tại $t=2$.`,
   giai: [
    R`$\dfrac{s(t)-s(2)}{t-2}=\dfrac{5t^2-20}{t-2}=5(t+2)$ (với $t\ne2$).`,
    R`$v(2)=s'(2)=\lim\limits_{t\to2}5(t+2)=20$ (m/s).`
   ] },
 { muc: "VD", de: R`Tìm hệ số góc của tiếp tuyến của đồ thị $y=x^3$ tại điểm có hoành độ $x_0=1$.`,
   giai: [
    R`$\dfrac{x^3-1}{x-1}=x^2+x+1$ (với $x\ne1$).`,
    R`$y'(1)=\lim\limits_{x\to1}(x^2+x+1)=3$. Hệ số góc tiếp tuyến bằng $3$.`
   ] }
 ] },
"C9-B32-D38": {
 pp: [
  R`**Bảng đạo hàm:** $(c)'=0$; $(x^n)'=nx^{n-1}$; $\left(\dfrac1x\right)'=-\dfrac1{x^2}$; $(\sqrt x)'=\dfrac1{2\sqrt x}$.`,
  R`**Quy tắc:** $(u\pm v)'=u'\pm v'$; $(uv)'=u'v+uv'$; $(ku)'=ku'$; $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$.`,
  R`**Hàm hợp:** $(u^n)'=n\,u^{n-1}\cdot u'$; $(\sqrt u)'=\dfrac{u'}{2\sqrt u}$; $\left(\dfrac1u\right)'=-\dfrac{u'}{u^2}$.`,
  R`Với phân thức bậc nhất trên bậc nhất: $\left(\dfrac{ax+b}{cx+d}\right)'=\dfrac{ad-bc}{(cx+d)^2}$.`
 ],
 luuY: [
  R`$(uv)'\ne u'v'$; $\left(\dfrac uv\right)'$ có dấu **trừ** ở tử theo thứ tự $u'v-uv'$.`,
  R`Quên nhân $u'$ khi đạo hàm hàm hợp.`
 ],
 vd: [
 { muc: "NB", de: R`Tính đạo hàm của $y=x^3-2x^2+5x-1$.`,
   giai: [
    R`$y'=3x^2-4x+5$.`
   ] },
 { muc: "TH", de: R`Tính đạo hàm của $y=\dfrac{2x+1}{x-1}$.`,
   giai: [
    R`$y'=\dfrac{(2x+1)'(x-1)-(2x+1)(x-1)'}{(x-1)^2}=\dfrac{2(x-1)-(2x+1)}{(x-1)^2}$.`,
    R`$=\dfrac{-3}{(x-1)^2}$. (Kiểm tra bằng công thức nhanh: $ad-bc=2\cdot(-1)-1\cdot1=-3$ ✓.)`
   ] },
 { muc: "TH", de: R`Tính đạo hàm của $y=\sqrt{x^2+1}$.`,
   giai: [
    R`$u=x^2+1$, $u'=2x$.`,
    R`$y'=\dfrac{2x}{2\sqrt{x^2+1}}=\dfrac{x}{\sqrt{x^2+1}}$.`
   ] },
 { muc: "VD", de: R`Tính đạo hàm của $y=(x^2-3x)^5$.`,
   giai: [
    R`$u=x^2-3x$, $u'=2x-3$.`,
    R`$y'=5(x^2-3x)^4\cdot(2x-3)$.`
   ] },
 { muc: "VD", de: R`Tính đạo hàm của $y=x\sqrt{1-x}$ trên $(-\infty;1)$.`,
   giai: [
    R`$y'=(x)'\sqrt{1-x}+x\left(\sqrt{1-x}\right)'=\sqrt{1-x}+x\cdot\dfrac{-1}{2\sqrt{1-x}}$.`,
    R`Quy đồng: $y'=\dfrac{2(1-x)-x}{2\sqrt{1-x}}=\dfrac{2-3x}{2\sqrt{1-x}}$.`
   ] }
 ] },
"C9-B32-D39": {
 pp: [
  R`**Lượng giác:** $(\sin x)'=\cos x$; $(\cos x)'=-\sin x$; $(\tan x)'=\dfrac1{\cos^2x}$; $(\cot x)'=-\dfrac1{\sin^2x}$.`,
  R`**Mũ, lôgarit:** $(e^x)'=e^x$; $(a^x)'=a^x\ln a$; $(\ln x)'=\dfrac1x$; $(\log_ax)'=\dfrac1{x\ln a}$.`,
  R`**Hàm hợp:** $(\sin u)'=u'\cos u$; $(\cos u)'=-u'\sin u$; $(\tan u)'=\dfrac{u'}{\cos^2u}$; $(e^u)'=u'e^u$; $(a^u)'=u'a^u\ln a$; $(\ln u)'=\dfrac{u'}u$.`
 ],
 luuY: [
  R`Sai dấu: $(\cos x)'=-\sin x$.`,
  R`$(a^x)'$ phải **nhân** $\ln a$ (khác với nguyên hàm phải chia).`
 ],
 vd: [
 { muc: "NB", de: R`Tính đạo hàm của $y=2\sin x-3\cos x$.`,
   giai: [
    R`$y'=2\cos x-3(-\sin x)=2\cos x+3\sin x$.`
   ] },
 { muc: "TH", de: R`Tính đạo hàm của $y=\sin\left(3x-\dfrac\pi4\right)$ và $y=\cos^2x$.`,
   giai: [
    R`$y=\sin u$ với $u=3x-\dfrac\pi4$, $u'=3$: $y'=3\cos\left(3x-\dfrac\pi4\right)$.`,
    R`$y=u^2$ với $u=\cos x$: $y'=2\cos x\cdot(-\sin x)=-2\sin x\cos x=-\sin2x$.`
   ] },
 { muc: "TH", de: R`Tính đạo hàm của $y=e^{2x+1}$ và $y=\ln(x^2+1)$.`,
   giai: [
    R`$y'=(2x+1)'e^{2x+1}=2e^{2x+1}$.`,
    R`$y'=\dfrac{(x^2+1)'}{x^2+1}=\dfrac{2x}{x^2+1}$.`
   ] },
 { muc: "VD", de: R`Tính đạo hàm của $y=x\,e^x$ và $y=\log_2(3x)$ (với $x>0$).`,
   giai: [
    R`$y'=1\cdot e^x+x\,e^x=(x+1)e^x$.`,
    R`$y'=\dfrac{(3x)'}{3x\ln2}=\dfrac{3}{3x\ln2}=\dfrac1{x\ln2}$.`
   ] },
 { muc: "VD", de: R`Tính đạo hàm của $y=\tan(x^2)$.`,
   giai: [
    R`$u=x^2$, $u'=2x$: $y'=\dfrac{2x}{\cos^2(x^2)}$.`
   ] }
 ] },
"C9-B32-D40": {
 pp: [
  R`**Tiếp tuyến tại $M(x_0;y_0)$** thuộc đồ thị $y=f(x)$: $y=f'(x_0)(x-x_0)+y_0$.`,
  R`**Biết hoành độ $x_0$:** tính $y_0=f(x_0)$ và $f'(x_0)$. **Biết tung độ $y_0$:** giải $f(x_0)=y_0$ tìm $x_0$.`,
  R`**Biết hệ số góc $k$:** giải $f'(x_0)=k$ tìm $x_0$. Tiếp tuyến song song với $y=ax+b$: $k=a$ (loại trường hợp trùng); vuông góc với $y=ax+b$ ($a\ne0$): $k=-\dfrac1a$.`
 ],
 luuY: [
  R`Viết $y=f'(x)(x-x_0)+y_0$ (phải thay số $f'(x_0)$).`,
  R`Bài "song song" quên kiểm tra tiếp tuyến tìm được có trùng với đường thẳng đã cho không.`
 ],
 vd: [
 { muc: "NB", de: R`Viết phương trình tiếp tuyến của đồ thị $y=x^3-3x+1$ tại điểm có hoành độ $x_0=2$.`,
   giai: [
    R`$y_0=8-6+1=3$. $y'=3x^2-3$, $y'(2)=9$.`,
    R`Tiếp tuyến: $y=9(x-2)+3\Leftrightarrow y=9x-15$.`
   ] },
 { muc: "TH", de: R`Viết phương trình tiếp tuyến của đồ thị $y=x^2-4x+3$, biết tiếp tuyến song song với đường thẳng $y=2x+5$.`,
   giai: [
    R`Hệ số góc $k=2$: $y'(x_0)=2x_0-4=2\Leftrightarrow x_0=3$; $y_0=9-12+3=0$.`,
    R`Tiếp tuyến: $y=2(x-3)+0=2x-6$. Khác $y=2x+5$ nên thoả mãn.`
   ] },
 { muc: "VD", de: R`Viết phương trình tiếp tuyến của đồ thị $y=\dfrac{2x+1}{x-1}$ tại giao điểm của đồ thị với trục tung.`,
   giai: [
    R`Giao với trục tung: $x_0=0$, $y_0=\dfrac{1}{-1}=-1$.`,
    R`$y'=\dfrac{-3}{(x-1)^2}$, $y'(0)=-3$.`,
    R`Tiếp tuyến: $y=-3(x-0)-1\Leftrightarrow y=-3x-1$.`
   ] },
 { muc: "TH", de: R`Viết phương trình tiếp tuyến của parabol $y=x^2$ tại điểm $M(1;1)$ và vẽ hình.`,
   giai: [
    R`$y'=2x$, $y'(1)=2$.`,
    R`Tiếp tuyến: $y=2(x-1)+1\Leftrightarrow y=2x-1$.`
   ],
   hinh: R`\begin{tikzpicture}[scale=0.9,>=stealth]
\draw[->] (-2,0)--(2.6,0) node[below]{$x$};
\draw[->] (0,-1.6)--(0,4.4) node[left]{$y$};
\draw[thick,blue,domain=-2:2,samples=80] plot(\x,{\x*\x});
\draw[thick,red] (-0.3,-1.6)--(2.5,4);
\fill (1,1) circle (2pt) node[below right]{$M(1;1)$};
\node[below left] at (0,0){$O$};
\node[right] at (2.5,4){$y=2x-1$};
\end{tikzpicture}`,
   chuThich: R`Tiếp tuyến (đỏ) chạm parabol tại đúng một điểm $M$.` }
 ] },
"C9-B33-D41": {
 pp: [
  R`**Đạo hàm cấp hai:** $f''(x)=\big(f'(x)\big)'$. Tính $f'$ trước, rồi đạo hàm thêm một lần.`,
  R`**Ý nghĩa cơ học:** nếu $s(t)$ là phương trình chuyển động thì $v(t)=s'(t)$ là vận tốc, $a(t)=v'(t)=s''(t)$ là **gia tốc tức thời**.`
 ],
 luuY: [
  R`Đạo hàm cấp hai không phải là bình phương của đạo hàm cấp một.`
 ],
 vd: [
 { muc: "NB", de: R`Tính $y''$ của $y=x^4-3x^2+2$.`,
   giai: [
    R`$y'=4x^3-6x$.`,
    R`$y''=12x^2-6$.`
   ] },
 { muc: "TH", de: R`Cho $y=\sin2x$. Chứng minh $y''+4y=0$.`,
   giai: [
    R`$y'=2\cos2x$; $y''=2\cdot(-2\sin2x)=-4\sin2x$.`,
    R`$y''+4y=-4\sin2x+4\sin2x=0$.`
   ] },
 { muc: "TH", de: R`Tính đạo hàm cấp hai của $y=\ln x$ và $y=e^{-x}$.`,
   giai: [
    R`$y=\ln x$: $y'=\dfrac1x$, $y''=-\dfrac1{x^2}$.`,
    R`$y=e^{-x}$: $y'=-e^{-x}$, $y''=e^{-x}$.`
   ] },
 { muc: "VD", de: R`Một chất điểm chuyển động theo phương trình $s(t)=t^3-6t^2+9t$ (m), $t$ tính bằng giây. Tính vận tốc và gia tốc tại $t=3$. Tại thời điểm gia tốc bằng $0$, vận tốc là bao nhiêu?`,
   giai: [
    R`$v(t)=s'(t)=3t^2-12t+9$; $a(t)=v'(t)=6t-12$.`,
    R`Tại $t=3$: $v(3)=27-36+9=0$ (m/s), $a(3)=6$ (m/s²).`,
    R`$a(t)=0\Leftrightarrow t=2$; $v(2)=12-24+9=-3$ (m/s) (chất điểm đang chuyển động theo chiều âm).`
   ] }
 ] }
});
})(window);
