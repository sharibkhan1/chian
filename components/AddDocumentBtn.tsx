'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { createDocument } from "@/lib/actions/room.actions"


const AddDocumentBtn = ({userId,email}:AddDocumentBtnProps) => {
    const router = useRouter();

    const addDocumentHandler = async() =>{
        try{
            const room = await createDocument({userId,email});
            if (room) router.push(`/documents/${room.id}`)
        } catch(e){
            console.log(e);
        }
    }

  return (
    <Button type="submit" onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md">
        <Image
            src="/assets/icons/add.svg"
            alt='add'
            width={24}
            height={24}
        />
        <p>Start a blank document</p>
    </Button>
  )
}

export default AddDocumentBtn