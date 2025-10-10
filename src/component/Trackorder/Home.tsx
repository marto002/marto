"use client";

import { useForm } from "react-hook-form";
import { useQuoteStore } from "./useTrackorder";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStoree } from "../Ustestore";

interface FormValues {
  from: string;
  to: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  isResidential: boolean;
  deliveryDate: string;
  comment: string;
}

export default function Home() {
  const router = useRouter();

  // const { isLoggedIn } = useAuthStore();
  const { isLoggedIn, currentUser } = useAuthStoree.getState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      from: "",
      to: "",
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      isResidential: false,
      deliveryDate: "",
      comment: "",
    },
  });

  const { setData } = useQuoteStore();

  const onSubmit = async (data: FormValues) => {
    if (!isLoggedIn || !currentUser?.email) {
      localStorage.setItem("redirectAfterLogin", "/getaquote");
      router.push("/login");
      return;
    }

    setData(data);
    console.log("Form Data:", data);

    try {
      const res = await fetch("/api/users/update-parcel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentUser.email,
          parcel: data,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Update failed");

      alert("Parcel info saved successfully ✅");
      router.push("/trackorder");
    } catch (error: any) {
      console.error(error);
      alert("Failed to update parcel info ❌");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-white bg-[#445370] border-2 shadow-lg rounded-md p-8 w-full md:max-w-5xl"
      >
        <p className="text-sm text-[#A1AFC9] mb-4">
          Do you have a discount on your account?
          <Link
            href={"/login"}
            className="text-white cursor-pointer hover:underline"
          >
            Log in
          </Link>
        </p>

        {/* FROM + TO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              From*
            </label>
            <input
              {...register("from", {
                required: "Please enter a starting location.",
              })}
              placeholder="Lagos, Nigeria"
              className={`border rounded-md p-2 w-full  text-white ${
                errors.from
                  ? "border-white focus:ring-red-400"
                  : "border-white "
              }`}
            />
            {errors.from && (
              <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              To*
            </label>
            <input
              {...register("to", { required: "Please enter a destination." })}
              placeholder="Abuja, Nigeria"
              className={`border rounded-md p-2 w-full text-white ${
                errors.to ? "border-white focus:ring-red-400" : "border-white "
              }`}
            />
            {errors.to && (
              <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1 text-white">
            Delivery Date*
          </label>
          <input
            type="date"
            {...register("deliveryDate", { required: true })}
            className="border border-white rounded-md p-2 w-full text-white"
          />
          {errors.deliveryDate && (
            <p className="text-red-500 text-sm mt-1">Date is required</p>
          )}
        </div>

        {/* CHECKBOX */}
        <label className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            {...register("isResidential")}
            className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-500"
          />
          <span className="text-white text-sm">
            This is a residential address.
          </span>
        </label>

        <h3 className="text-white font-semibold mb-4">Parcel Information</h3>

        {/* PARCEL INFO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Weight (kg).*
            </label>
            <input
              type="number"
              {...register("weight", {
                required: "Weight is required.",
                min: { value: 1, message: "Weight must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.weight
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.weight && (
              <p className="text-red-500 text-sm mt-1">
                {errors.weight.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Length (cm).*
            </label>
            <input
              type="number"
              {...register("length", {
                required: "Length is required.",
                min: { value: 1, message: "Length must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.length
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.length && (
              <p className="text-red-500 text-sm mt-1">
                {errors.length.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Width (cm).*
            </label>
            <input
              type="number"
              {...register("width", {
                required: "Width is required.",
                min: { value: 1, message: "Width must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.width
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.width && (
              <p className="text-red-500 text-sm mt-1">
                {errors.width.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-white">
              Height (cm).*
            </label>
            <input
              type="number"
              {...register("height", {
                required: "Height is required.",
                min: { value: 1, message: "Height must be greater than 0." },
              })}
              className={`border rounded-md p-2 w-full text-white ${
                errors.height
                  ? "border-white focus:ring-red-400"
                  : "border-white focus:ring-yellow-500"
              }`}
            />
            {errors.height && (
              <p className="text-red-500 text-sm mt-1">
                {errors.height.message}
              </p>
            )}
          </div>
        </div>
        <div className=" w-full pb-10">
          <label className="block text-sm font-semibold mb-1 text-white">
            Comment*
          </label>
          <textarea
            {...register("comment", { required: "Comment is required" })}
            rows={4}
            placeholder="Write your comment here..."
            className="border border-white text-white rounded-md p-3 w-full  resize-none"
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">
              {errors.comment.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-[#33accc] text-white font-semibold px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2"
        >
          Get Quotes →
        </button>
      </form>
    </main>
  );
}
