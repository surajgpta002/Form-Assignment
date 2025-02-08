import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaCircleInfo } from "react-icons/fa6";
import { PiPlus } from "react-icons/pi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const Mainform = () => {
  const NgoSchema = z.object({
    ngoName: z
      .string()
      .min(5, "NGO Name should have more than 5 characters")
      .max(30, "NGO Name cannot exceed 30 characters"),
    description: z
      .string()
      .min(10, "Description should have more than 5 characters"),
    website: z.string().optional(),
    YearOfCommencement: z.string().min(1, "required"),
    spocName: z
      .string()
      .min(5, "SPOC Name should have more than 5 characters")
      .max(30, "SPOC Name cannot exceed 30 characters"),
    contactNumber: z.coerce
      .number()
      .min(10, "contact Number should mininum 10 Digit"),

    beneficialOwner: z
      .string()
      .min(5, "beneficial Owner should have more than 5 characters")
      .max(30, "beneficial Owner cannot exceed 30 characters"),

    socialMedia: z
      .string()
      .min(5, "should have more than 5 characters")
      .max(30, "cannot exceed 30 characters")
      .optional(),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(NgoSchema),
  });

  let onSubmit = (data: any) => {
    console.log("Submming the form data", data);
    axios
      .post("http://localhost:8080/form", data)
      .then(() => {
        console.log("data Created");
      })
      .catch((err) => {
        console.log(err.message);
      });
    localStorage.clear();
    reset();
  };

  useEffect(() => {
    let convertedData = JSON.parse(localStorage.getItem("NgoData"));
    if (convertedData) {
      let arrayData = Object.entries(convertedData);
      arrayData.map((val) => {
        setValue(val[0], val[1]);
      });
    }
  }, []);

  useEffect(() => {
    const allFields = watch((value) => {
      localStorage.setItem("NgoData", JSON.stringify(value));
    });
    return () => allFields.unsubscribe();
  }, [watch]);

  return (
    <div className="flex flex-col justify-start w-[30vw]">
      <h1 className="text-[14px]">NGO Details</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-1 gap-2 mx-auto w-full "
      >
        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            NGO Name <span className="text-red-600 ">*</span>
          </label>
          <input
            {...register("ngoName")}
            placeholder="Type here"
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.ngoName && (
            <small className="text-red-600">{errors.ngoName.message}</small>
          )}
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            Description <span className="text-red-600 ">*</span>
          </label>
          <textarea
            {...register("description")}
            placeholder="A short description of your NGO"
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.description && (
            <small className="text-red-600">{errors.description.message}</small>
          )}
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            Year Of Commencement <span className="text-red-600 ">*</span>
          </label>
          <select
            {...register("YearOfCommencement")}
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            Website(optional)
          </label>
          <input
            {...register("website")}
            type="text"
            placeholder="www.website.com"
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.website && (
            <small className="text-red-600">{errors.website.message}</small>
          )}
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            SPOC Name <span className="text-red-600 ">*</span>
          </label>
          <input
            {...register("spocName")}
            type="text"
            placeholder="Type Here"
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.spocName && (
            <small className="text-red-600">{errors.spocName.message}</small>
          )}
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            Contact Number<span className="text-red-600 ">*</span>
          </label>
          <input
            {...register("contactNumber")}
            type="number"
            placeholder="Type Here"
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.contactNumber && (
            <small className="text-red-600">
              {errors.contactNumber.message}
            </small>
          )}
        </div>
        <div className="flex gap-2 text-sm items-center">
          <h1 className="">Beneficial Owners</h1>
          <FaCircleInfo />
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            Beneficial Owner <span className="text-red-600 ">*</span>
          </label>
          <input
            {...register("beneficialOwner")}
            type="text"
            placeholder="Type Here"
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.beneficialOwner && (
            <small className="text-red-600">
              {errors.beneficialOwner.message}
            </small>
          )}
        </div>

        <div className="col-span-2">
          <div className="flex gap-2 text-gray-500 items-center mt-3">
            <PiPlus />
            <h1 className="text-xs">Add beneficial Owner</h1>
          </div>
        </div>

        <h1>Social Media handles</h1>

        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            Social Media
          </label>
          <input
            {...register("socialMedia")}
            type="text"
            placeholder="Add link here"
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.instagram && (
            <small className="text-red-600">{errors.instagram.message}</small>
          )}
        </div>

        <div className="col-span-2">
          <div className="flex gap-2 text-gray-500 items-center mt-3">
            <PiPlus />
            <h1 className="text-xs">Add Social Media links</h1>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex gap-3 items-center">
            <button className="underline">Cancel</button>
            <button
              type="submit"
              className="w-72 bg-blue-600 rounded-md py-1 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Mainform;
