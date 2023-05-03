import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface props {
  type: String;
  status: any;
  complaintID: String;
  submitedOn: String;
  address: String;
  garbage: any;
}

const Complaint = ({
  type,
  status,
  complaintID,
  submitedOn,
  address,
  garbage,
}: props) => {
  const navigate = useRouter();

  const handleClick = (id: any) => {
    navigate.push(`/complaint/timeline/${id}`);
  };
  return (
    <div
      onClick={() => handleClick(complaintID)}
      className="flex items-center justify-between rounded-lg border-2 border-gray-100 p-4 shadow-lg relative overflow-hidden"
    >
      <div className="flex flex-col justify-center ml-1">
        <h3 className="text-lg font-bold text-gray-600">{type}</h3>
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
          <p>Status:</p>
          <span
            className={`font-bold ${
              status[status.length - 1].state === "Initiated"
                ? "text-initiatedColor"
                : ""
            }  ${
              status[status.length - 1].state === "InProgress"
                ? "text-inprogessColor"
                : ""
            } ${
              status[status.length - 1].state === "Completed"
                ? "text-completedColor"
                : ""
            } ${
              status[status.length - 1].state === "Closed"
                ? "text-closedColor"
                : ""
            }`}
          >
            {status[status.length - 1].state}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <p>Compliant ID:</p>
          <span>{complaintID.slice(-8)}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <p>Submited On:</p>
          <span>{submitedOn.split("T")[0]}</span>
        </div>
        <div className="flex  gap-3 text-sm text-gray-600">
          <p>Address:</p>
          <span>{address}</span>
        </div>
      </div>
      <Image src={garbage} className="h-70% w-[30%]" alt="" />
      <div
        className={`h-[100%] w-2 top-0 left-0 absolute ${
          status[status.length - 1].state === "Initiated"
            ? "bg-initiatedColor"
            : ""
        }  ${
          status[status.length - 1].state === "InProgress"
            ? "bg-inprogessColor"
            : ""
        } ${
          status[status.length - 1].state === "Completed"
            ? "bg-completedColor"
            : ""
        } ${
          status[status.length - 1].state === "Closed" ? "bg-closedColor" : ""
        }`}
      ></div>
    </div>
  );
};

export default Complaint;