import Link from "next/link";
import clsx from "clsx";
import { FaBook, FaCheckCircle, FaUserAlt } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { IconButton, Tooltip } from "@mui/material";




interface Props {
  aproved: boolean,
  userEmail: string,
  certificationName: string,
  certificationUid: string,
  actionDelete: Function,
  actionApproved: Function
}


export function CardReservationUI({
  aproved,
  certificationName,
  certificationUid,
  userEmail,
  actionApproved,
  actionDelete
}: Props) {




  return (

    <div
      className={clsx('bg-[#1d1d1d] max-w-[300px] min-w-[250px] border rounded-xl shadow m-5 cardAnimate',
        {
          'border-[#338735]': aproved,
          'border-[#9f3a33]': !aproved
        }
      )}
    >

      <div
        className={clsx('p-4 rounded-t-xl',
          {
            'bg-[#338735]': aproved,
            'bg-[#9f3a33]': !aproved
          }
        )
        }
      >
        <h2 className="text-lg text-center underline mb-2">Reservacióm</h2>
      </div>

      <div className="px-4 pb-4">


        <div className="flex my-6">
          < FaUserAlt
            size={20}
            className="mr-3"
          />
          <p>{userEmail}</p>
        </div>

        <div className="flex my-6">
          <FaBook
            size={20}
            className="mr-3"
          />

          <Link
            href={`/certification/${certificationUid}`}
          >
            {certificationName}
          </Link>

        </div>


        <div className="flex justify-between mt-6">

          <Tooltip title="Eliminar">
            <IconButton
              className="px-4 py-2 bg-[#9f3a33] text-white rounded-lg hover:bg-[#851414] flex items-center justify-center transition-colors"
              aria-label="Eliminar"
              onClick={() => actionDelete()}
            >
              <IoTrash size={24} />
            </IconButton>
          </Tooltip>

          {
            !aproved &&
            <Tooltip title="Aprobar">
              <IconButton
                className="px-4 py-2 bg-[#338735] text-white rounded-lg hover:bg-[#1e561f] flex items-center justify-center transition-colors"
                aria-label="Aprobar"
                onClick={() => actionApproved()}
              >
                <FaCheckCircle size={24} />
              </IconButton>
            </Tooltip>
          }
        </div>

      </div>


    </div>




  );
}
