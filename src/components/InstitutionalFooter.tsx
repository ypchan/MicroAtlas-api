import { Mail, MapPin, QrCode } from "lucide-react";

export function InstitutionalFooter() {
  return (
    <div className="border-t border-slate-200/80 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_1.2fr_0.8fr] lg:px-8">
        <section>
          <h2 className="text-lg font-semibold">友情链接</h2>
          <div className="mt-8 space-y-3 text-sm leading-7 text-white/90">
            <p>深圳大学</p>
            <p>深圳大学高等研究院</p>
            <p>深圳市海洋微生物组工程重点实验室</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold">联系我们</h2>
          <div className="mt-8 space-y-3 text-sm leading-7 text-white/90">
            <p className="flex gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              地址：广东省深圳市南山区粤海街道深圳大学沧海校区致知楼
            </p>
            <p>邮编：518061</p>
            <p className="flex gap-2">
              <Mail className="mt-1 h-4 w-4 shrink-0" />
              邮箱：limeng848@szu.edu.cn
            </p>
            <p>电话：0755-26979250</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold">欢迎关注中心公众号</h2>
          <div className="mt-8 flex h-36 w-36 items-center justify-center bg-white p-3 shadow-2xl shadow-black/20">
            <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-1">
              {Array.from({ length: 49 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    [
                      0, 1, 2, 7, 14, 15, 16, 4, 5, 6, 13, 20, 18, 19, 42, 43, 44, 35, 28, 29, 30, 46, 47, 48, 41, 34,
                      32, 33, 10, 12, 22, 24, 26, 31, 37, 39
                    ].includes(index)
                      ? "bg-slate-950"
                      : "bg-white"
                  }
                />
              ))}
            </div>
          </div>
          <p className="mt-3 flex items-center gap-2 text-xs text-white/75">
            <QrCode className="h-4 w-4" />
            QR placeholder for center account
          </p>
        </section>
      </div>
      <div className="border-t border-white/10 bg-black/20 px-6 py-4 text-sm text-white/80">
        版权所有 © 深圳大学古菌生物学研究中心
      </div>
    </div>
  );
}
