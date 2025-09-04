import React from 'react'


import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Form = ({ open, setOpen }) => {
  return (
    <div>

           <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline outline-1 -outline-offset-1 outline-white/10 transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
     

  <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg">
      {/* الهيدر */}
      <div className="bg-[#243773] text-white text-center py-4 rounded-t-2xl">
        <h2 className="font-bold text-lg">
          لمزيد من المعلومات، الرجاء التواصل معنا.
        </h2>
        <p className="text-sm mt-1">
          نحن هنا للمساعدة والإجابة على أي سؤال قد يكون لديك
        </p>
      </div>

      {/* الفورم */}
      <form className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="الاسم"
            className="border rounded-md px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-[#243773]"
          />
          <input
            type="email"
            placeholder="البريد الالكتروني"
            className="border rounded-md px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-[#243773]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="الدولة"
            className="border rounded-md px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-[#243773]"
          />
          <input
            type="text"
            placeholder="رقم الهاتف"
            className="border rounded-md px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-[#243773]"
          />
        </div>

        <textarea
          placeholder="ملاحظتك....."
          rows="4"
          className="border rounded-md px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-[#243773]"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#F97316] hover:bg-[#ea580c] text-white font-medium py-2 rounded-lg shadow-md transition"
        >
          إرسال
        </button>
      </form>
    </div>


            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Form