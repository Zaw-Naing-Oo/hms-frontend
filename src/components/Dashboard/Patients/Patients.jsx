import { getAllPatients } from "@/db/patient";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "react-router-dom";
import DashDataTable from "../shared/DashDataTable";
import DashboardHeader from "../shared/DashboardHeader";
import PatientListDownload from "./PatientsListDownload";


const Patients = () => {
  const navigate = useNavigate();

  const patientsQuery = useQuery({
    queryKey: ["patients"],
    queryFn: () => getAllPatients(),
  });

  const patients = patientsQuery.data?.data?.patients || []



  const defaultPhotoUrl = "/doctor-avatar.jpg"; // Path to the default photo in the public folder
   const ImageCell = ({ row }) => {
    const photoUrl = row?.photo || defaultPhotoUrl;
    return <img src={photoUrl} alt="Patient Photo" style={{ width: '50px', height: '50px' }} />;
  };

  

  const columns = [
    {
      accessorKey: "name",
      header: "Patient Name",
      enableHiding: false,
    },
    {
      accessorFn: (row) => row?.gender || "N/A",
      header: "Gender",
      enableHiding: false,
    },
    {
      accessorFn: (row) => row?.age || "N/A",
      header: "Age",
      enableHiding: false,
    },
    {
      accessorFn: (row) => row?.bloodGroup || "N/A",
      header: "Blood Group",
      enableHiding: false,
    },
    {
      accessorFn: (row) => row?.address || "N/A",
      header: "Address",
    },
    {
      accessorFn: (row) => row,
      header: "photo",
      cell: ImageCell,
    },
  ];

  return (
    <>
      <DashboardHeader title="Patients" desc="Observe all patients" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <Outlet />
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Patients List</h2>
            <PatientListDownload patients={patients} />
          </div>
          <div className="">
            <DashDataTable
              columns={columns}
              data={patients}
              isLoading={patientsQuery.isFetching}
              filterPlaceholder={"Search patients..."}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Patients;
