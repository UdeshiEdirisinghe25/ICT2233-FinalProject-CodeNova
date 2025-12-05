"use client";

import { useRouter } from "next/navigation";
import AdminSidebar from "@/app/components/AdminSidebar";

export default function AddMenuPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-100">

     
      {/* Form card */}

      <div className="flex-1 flex justify-center items-start p-10">
        <div className="bg-white rounded-xl shadow-md p-10 w-[450px] mt-8">

          <h1 className="text-2xl font-bold text-center mb-8 text-black">
            ADD Menu Items
          </h1>

          {/* Form */}

          <form className="flex flex-col gap-6 text-black">

            <input
              type="text"
              placeholder="ID"
              className="border rounded-lg px-4 py-2 w-full text-black placeholder-gray-700"
            />

            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg px-4 py-2 w-full text-black placeholder-gray-700"
            />

            <textarea
              placeholder="Description"
              className="border rounded-lg px-4 py-2 w-full h-24 text-black placeholder-gray-700"
            ></textarea>

            <input
              type="text"
              placeholder="Price"
              className="border rounded-lg px-4 py-2 w-full text-black placeholder-gray-700"
            />

            {/* Img*/}

            <div className="border rounded-lg h-40 flex justify-center items-center bg-gray-200">
              <span className="text-gray-700 text-sm font-medium">
                Upload Image
              </span>
            </div>

            {/* Category */}

            <select className="border rounded-lg px-4 py-2 w-full text-black">
              <option>Select Category</option>
              <option>Appetizers</option>
              <option>Salads</option>
              <option>Burgers</option>
              <option>Pizza</option>
              <option>Pasta</option>
              <option>Desserts</option>

              <option>Beverages</option>
            </select>

            {/* Buttons */}

            <div className="flex justify-between mt-6">

              {/* Cancel button */}

              <button
                type="button"
                onClick={() => router.push("/admin/menu")}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>

              {/* Clear button */}

              <button
                type="reset"
                className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
              >
                Clear
              </button>

              {/* Submit button */}
              
              <button
                type="submit"
                className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
              >
                Submit
              </button>

            </div>

          </form>

        </div>
      </div>

    </div>
  );
}
