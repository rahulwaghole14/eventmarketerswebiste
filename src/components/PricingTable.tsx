import CTAButton from "./CTAButton";

export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="border border-white/10 rounded-2xl p-6">
        <div className="text-xl font-semibold">Free</div>
        <div className="text-3xl mt-2">₹0</div>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>✅ Limited templates</li>
          <li>⚠️ Watermark included</li>
          <li>✅ 5 designs/month</li>
        </ul>
        <div className="mt-6"><CTAButton href="/#start" label="Start Free" /></div>
      </div>
      <div className="border border-[var(--mb-accent)] rounded-2xl p-6 shadow-[0_0_0_2px_var(--mb-accent)] relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[var(--mb-accent)] text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
        <div className="text-xl font-semibold">Pro</div>
        <div className="mt-2">
          <div className="text-3xl">₹499<span className="text-base text-slate-400">/month</span></div>
          <div className="text-sm text-slate-400 mt-1">or ₹4,999/year (Save 17%)</div>
        </div>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>✅ Unlimited posters & videos</li>
          <li>✅ No watermark</li>
          <li>✅ All categories unlocked</li>
          <li>✅ Priority support</li>
          <li>✅ Commercial license</li>
        </ul>
        <div className="mt-6"><CTAButton href="/#start" label="Start Pro Trial" /></div>
      </div>
      <div className="border border-white/10 rounded-2xl p-6">
        <div className="text-xl font-semibold">Enterprise</div>
        <div className="text-3xl mt-2">Custom</div>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>Bulk downloads</li>
          <li>Team collaboration</li>
          <li>API access</li>
        </ul>
        <div className="mt-6"><CTAButton href="/contact" label="Contact Sales" variant="outline" /></div>
      </div>
    </div>
  );
}
