import { Button } from "@/components/ui/button";
import { deleteDoctor, getAllDoctors, getHospitalDoctors } from "@/db/doctor";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LuEye } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import DashDataTable from "../shared/DashDataTable";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";

const HospitalDoctorsTable = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Default number of rows per page

  const { user } = useAuth();
  const hospitalId = user?.profile?._id;

 


  const doctorsQuery = useQuery({
    queryKey: ["doctors"],
    // queryFn: () => getAllDoctors(),
    queryFn: () => getHospitalDoctors(),

    keepPreviousData: true, // Helps maintain UI stability during refetching
  });
  const doctors = doctorsQuery.data?.data?.doctors || [];

  console.log(doctorsQuery.data?.data)
  console.log(doctors)

  const deleteMutation = useMutation({
    mutationFn: (doctorId) => deleteDoctor(doctorId),
    onSuccess: () => {
      toast("Doctor deleted successfully", { type: "success" });
      doctorsQuery.refetch();
    },
    onError: (error) => {
      console.log(error);
      toast("Failed to delete doctor", { type: "fail" });
      console.error(error);
    },
  });

  const handleDeleteDoctor = (doctorId) => {
    toast("Are you sure you want to delete this doctor?", {
      description:
        "This action cannot be undone and will permanently delete the doctor.",
      cancel: (
        <Button onClick={() => toast.dismiss()} size="sm" variant="outline">
          Cancel
        </Button>
      ),
      action: (
        <Button
          onClick={() => {
            deleteMutation.mutate(doctorId);
            toast.dismiss();
          }}
          size="sm"
          variant="destructive"
        >
          Delete
        </Button>
      ),
      position: "top-center",
      classNames: {
        toast: "flex-wrap [&_[data-content]]:w-full justify-end",
        title: "text-sm",
        description: "mb-2",
      },
    });
  };

  const columns = [
    {
      accessorKey: "photo",
      header: "Photo",
      cell: (props) => {
        return (
          <img
            src={props.getValue() || "/doctor-avatar.jpg"}
            alt={props.row.original.name}
            className="size-12 rounded-full object-cover"
          />
        );
      },
      enableHiding: false,
      enableFiltering: false,
    },
    {
      accessorKey: "name",
      header: "Name",
      enableHiding: false,
    },
    {
      accessorKey: "qualifications",
      header: "Qualifications",
    },
    // {
    //   accessorKey: "designation",
    //   header: "Designation",
    // },
    {
      accessorKey: "department",
      header: "Department",
    },
    {
      accessorFn: (row) => row.chamberTime || "-",
      header: "Chamber Time",
    },
    {
      accessorFn: (row) => row.offDays?.join(", "),
      header: "Off Days",
    },
    {
      accessorFn: (row) => row._id,
      header: "View",
      cell: (props) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button
            className="text-gray-600"
            variant="outline"
            size="icon"
            asChild
          >
            <Link target="_blank" to={`/doctors/${props.getValue()}`}>
              <LuEye className="text-lg" />
            </Link>
          </Button>
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorFn: (row) => row._id,
      header: "Edit",
      cell: (props) => ( 
        // console.log(props?.row?.original?.hospital === hospitalId),
        props?.row?.original?.hospital === hospitalId && (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button className="text-blue" variant="outline" size="icon" asChild>
            <Link to={`edit/${props.getValue()}`}>
              <TbEdit className="text-lg" />
            </Link>
          </Button>
        </div>
        )
      ),
      enableHiding: false,
    },
    // {
    //   accessorFn: (row) => row._id,
    //   header: "Delete",
    //   cell: (props) => (
    //     props?.row?.original?.hospital?._id === hospitalId && (
    //     <div className="flex max-w-[200px] items-center gap-x-2">
    //       <Button
    //         className="text-[#FF5556]"
    //         onClick={() => handleDeleteDoctor(props.getValue())}
    //         variant="outline"
    //         size="icon"
    //       >
    //         <MdDeleteOutline className="text-lg" />
    //       </Button>
    //     </div>
    //     )
    //   ),
    //   enableHiding: false,
    // },
  ];

  return (
    <div>
      <DashDataTable
        columns={columns}
        data={doctors}
        isLoading={doctorsQuery.isFetching}
        filterPlaceholder={"Search doctors..."}
      />
    </div>
  );
};

export default HospitalDoctorsTable;
