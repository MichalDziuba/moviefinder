import { useRouter } from "next/router"
import {MdArrowBack} from 'react-icons/md'
export const ButtonBack = () => {
    const router = useRouter()
    const handleBack = () => {
        router.back();
    }

    return (
      <button
        onClick={handleBack}
        className="flex h-fit w-fit text-base items-center gap-2 rounded-tl-xl rounded-br-xl border-2 border-secondary border-t-0 border-b-0 border-l-transparent p-2"
      >
        <MdArrowBack /> return
      </button>
    );
}