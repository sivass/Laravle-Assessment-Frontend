import React from "react";

const CardLoader = () => {
  return (
    <>
      {(() => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push(
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return arr;
      })()}
    </>
  );
};

export default CardLoader;
