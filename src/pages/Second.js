import React from 'react'

export default function Second() {
  return (
    <div className="w-96 h-96 relative bg-violet-300 rounded-3xl">
  <div className="h-96 left-[24px] top-[80px] absolute flex-col justify-start items-start gap-4 inline-flex">
    <div className="w-80 h-96 relative rounded-xl">
      <div className="w-9 h-9 px-2 pt-2.5 pb-1.5 left-[315px] top-[12px] absolute origin-top-left rotate-180 bg-white rounded-full justify-center items-center inline-flex">
        <div className="w-5 h-5 relative origin-top-left rotate-180 flex-col justify-start items-start flex" />
      </div>
      <img className="w-80 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/327x372" />
    </div>
    <div className="self-stretch h-14 flex-col justify-start items-start flex">
      <div className="self-stretch justify-between items-center gap-2 inline-flex">
        <div className="text-black text-5xl font-normal leading-10">Iris Reticulata</div>
        <div className="pb-1 justify-start items-start gap-2.5 flex">
          <div className="w-9 h-9 p-2 origin-top-left rotate-180 rounded-full border border-black justify-center items-center flex">
            <div className="w-5 h-5 relative origin-top-left rotate-180 flex-col justify-start items-start flex" />
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
  <div className="h-24 left-[24px] top-[578px] absolute flex-col justify-start items-start gap-4 inline-flex">
    <div className="self-stretch justify-between items-center gap-2 inline-flex">
      <div className="justify-start items-center gap-3 flex">
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
      <div className="text-black text-base font-medium leading-relaxed">$1.99/ea</div>
    </div>
    <div className="self-stretch h-12 px-6 py-3 bg-purple-800 rounded-xl justify-between items-center gap-2 inline-flex">
      <div className="text-white text-base font-normal leading-relaxed">Add to basket</div>
      <div className="w-5 h-5 relative">
        <img className="w-4 h-4 left-[1px] top-[1px] absolute" src="https://via.placeholder.com/18x18" />
      </div>
    </div>
  </div>
</div>
  )
}
