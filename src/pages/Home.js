import React from 'react'

export default function Home() {
  return (
    <div className="w-96 h-96 relative bg-white rounded-3xl">
  <div className="left-[188px] top-[189px] absolute flex-col justify-start items-start gap-4 inline-flex">
    <div />
  </div>
  <div className="h-36 px-6 pb-6 left-0 top-[550px] absolute bg-white flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-px bg-black" />
    <div className="self-stretch justify-between items-start gap-48 inline-flex">
      <div className="text-black text-base font-normal leading-relaxed">Subtotal</div>
      <div className="text-right text-black text-base font-medium leading-relaxed">$29.76</div>
    </div>
    <div className="self-stretch h-12 px-6 py-3 bg-black rounded-xl justify-between items-center gap-2 inline-flex">
      <div className="text-white text-base font-normal leading-relaxed">Schedule a pick-up</div>
      <div className="w-5 h-5 relative">
        <img className="w-4 h-4 left-[1px] top-[1px] absolute" src="https://via.placeholder.com/18x18" />
      </div>
    </div>
  </div>
  <div className="w-80 left-[24px] top-[72px] absolute text-center text-black text-5xl font-normal leading-10">My cart</div>
  <div className="w-96 h-96 px-6 left-0 top-[150px] absolute flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch justify-start items-start gap-4 inline-flex">
      <img className="w-32 h-32 relative rounded-xl" src="https://via.placeholder.com/124x124" />
      <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start gap-4 inline-flex">
        <div className="self-stretch h-12 flex-col justify-start items-start flex">
          <div className="self-stretch text-black text-base font-medium leading-relaxed">Hellebore</div>
          <div className="self-stretch text-black text-base font-normal leading-relaxed">$0.89/lb</div>
        </div>
        <div className="justify-start items-center gap-3 inline-flex">
          <div className="w-14 h-8 px-2 rounded-2xl border border-black justify-center items-center gap-2 flex">
            <div className="grow shrink basis-0 text-center text-black text-base font-normal leading-relaxed">2</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-6 h-6 rounded-2xl border border-black justify-center items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <img className="w-2 h-px left-[6px] top-[9.50px] absolute" src="https://via.placeholder.com/8x1" />
              </div>
            </div>
            <div className="w-6 h-6 rounded-2xl border border-black justify-center items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <img className="w-2 h-2 left-[6px] top-[6px] absolute" src="https://via.placeholder.com/8x8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch justify-start items-start gap-4 inline-flex">
      <img className="w-32 h-32 relative rounded-xl" src="https://via.placeholder.com/124x124" />
      <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start gap-4 inline-flex">
        <div className="self-stretch h-12 flex-col justify-start items-start flex">
          <div className="self-stretch text-black text-base font-medium leading-relaxed">Daisy</div>
          <div className="self-stretch text-black text-base font-normal leading-relaxed">$8.99/lb</div>
        </div>
        <div className="justify-start items-center gap-3 inline-flex">
          <div className="w-14 h-8 px-2 rounded-2xl border border-black justify-center items-center gap-2 flex">
            <div className="grow shrink basis-0 text-center text-black text-base font-normal leading-relaxed">1</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-6 h-6 rounded-2xl border border-black justify-center items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <img className="w-2 h-px left-[6px] top-[9.50px] absolute" src="https://via.placeholder.com/8x1" />
              </div>
            </div>
            <div className="w-6 h-6 rounded-2xl border border-black justify-center items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <img className="w-2 h-2 left-[6px] top-[6px] absolute" src="https://via.placeholder.com/8x8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch justify-start items-start gap-4 inline-flex">
      <img className="w-32 h-32 relative rounded-xl" src="https://via.placeholder.com/124x124" />
      <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start gap-4 inline-flex">
        <div className="self-stretch h-12 flex-col justify-start items-start flex">
          <div className="self-stretch text-black text-base font-medium leading-relaxed">Tulip</div>
          <div className="self-stretch text-black text-base font-normal leading-relaxed">$1.99/ea</div>
        </div>
        <div className="justify-start items-center gap-3 inline-flex">
          <div className="w-14 h-8 px-2 rounded-2xl border border-black justify-center items-center gap-2 flex">
            <div className="grow shrink basis-0 text-center text-black text-base font-normal leading-relaxed">1</div>
          </div>
          <div className="justify-start items-start gap-2 flex">
            <div className="w-6 h-6 rounded-2xl border border-black justify-center items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <img className="w-2 h-px left-[6px] top-[9.50px] absolute" src="https://via.placeholder.com/8x1" />
              </div>
            </div>
            <div className="w-6 h-6 rounded-2xl border border-black justify-center items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <img className="w-2 h-2 left-[6px] top-[6px] absolute" src="https://via.placeholder.com/8x8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-96 h-16 px-6 py-3.5 left-0 top-0 absolute justify-between items-center gap-16 inline-flex">
    <div className="w-5 h-5 relative">
      <img className="w-4 h-2 left-[1px] top-[6px] absolute" src="https://via.placeholder.com/18x8" />
    </div>
    <div className="w-28 h-5 relative" />
    <div className="w-5 h-5 relative">
      <img className="w-4 h-4 left-[1px] top-[1px] absolute" src="https://via.placeholder.com/18x18" />
    </div>
  </div>
</div>
  )
}
