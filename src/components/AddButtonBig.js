import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import SimpleCard from "./SimpleCard";

function AddButtonBig({ className, href, ...props }) {
  return (
    <SimpleCard
      className={`text-8xl w-80 h-48 text-neutral-500 flex justify-center items-center cursor-pointer hover:bg-slate-50 ${className}`}
      {...props}
    >
      <Link href={href}>
        <AddIcon fontSize={"inherit"} />
      </Link>
    </SimpleCard>
  );
}

export default AddButtonBig;
