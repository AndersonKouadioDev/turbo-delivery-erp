import { Progress } from "@heroui/react"

  const progresseBare =(progression:number)=>{
            if(progression==100){
            return <Progress label={progression +'%'}   color="success" className="max-w-md"  value={100} />
            }
            if(progression<100 && progression>=65){
                return <Progress label={progression +'%'}   color="warning" className="max-w-md"  value={65} />
                }
            if(progression<65){
                
                return <Progress label={progression +'%'}   color="danger" className="max-w-md"  value={20} />
                }
        }


export default progresseBare