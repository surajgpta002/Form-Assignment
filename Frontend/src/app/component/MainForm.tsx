import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaCircleInfo } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

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

  socialMedia: z.string().max(30, "cannot exceed 30 characters").optional(),
});

const Mainform: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([""]);

  const addInputField = () => {
    setInputs([...inputs, ""]);
  };

  // Defining TypeScript type for the form data
  type FormData = z.infer<typeof NgoSchema>;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(NgoSchema),
  });

  let onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Submming the form data", data);
    try {
      await axios.post("http://localhost:8080/forms", data);
      console.log("Data Created");
      localStorage.clear();
      reset();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("NgoData");
    if (storedData) {
      const convertedData: Partial<FormData> = JSON.parse(storedData);

      Object.entries(convertedData).forEach(([key, value]) => {
        setValue(key as keyof FormData, value as any);
      });
    }
  }, [setValue]);

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

        {/* Beneficial Owner */}

        <div className="flex gap-2 text-sm items-center">
          <h1 className="">Beneficial Owners</h1>
          <FaCircleInfo />
        </div>

        <div className="col-span-2">
          <label htmlFor="" className="text-[10px] block">
            Beneficial Owner 1 <span className="text-red-600 ">*</span>
          </label>

          <input
            {...register("beneficialOwner")}
            type="text"
            placeholder={`Beneficial Owner`}
            className="text-[10px] p-2 w-full border rounded-sm leading-tight"
          />
          {errors.beneficialOwner && (
            <small className="text-red-600">
              {errors.beneficialOwner.message}
            </small>
          )}

          {/* mapping the inputs */}

          {inputs.map((_, index) => (
            <div key={index} className="col-span-2">
              <label htmlFor="" className="text-[10px] block">
                Beneficial Owner {index + 2}
              </label>

              <input
                type="text"
                placeholder={`Beneficial Owner ${index + 1}`}
                className="text-[10px] p-2 w-full border rounded-sm leading-tight"
              />
            </div>
          ))}
        </div>

        <div className="col-span-2">
          <div className="flex gap-2 text-gray-500 items-center mt-1">
            <p onClick={addInputField}>
              <big>+</big>
              <small> Add Beneficial Owner</small>
            </p>
          </div>
        </div>

        <h1>Social Media Handles</h1>

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
          {errors.socialMedia && (
            <small className="text-red-600">{errors.socialMedia.message}</small>
          )}
        </div>

        <div className="col-span-2">
          <div className="flex gap-2 text-gray-500 items-center mt-1">
            <p>
              <big>+</big>
              <small> Add Social Media links</small>
            </p>
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
