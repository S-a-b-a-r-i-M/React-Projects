import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Pointer, Send } from "lucide-react"
import Imported from '../assets/imported.svg'
import PropTypes from "prop-types"

const assigneesFullDetails = [
  { 
    user_id: 1, 
    name: "Sachin", 
    img_url: "https://github.com/shadcn.png", 
    email: "Sachin.doe.dev@hire10x.ai", 
    contacted: 20, 
    imported: 30, 
    applied: 30 
  },
  { 
    user_id: 2, 
    name: "Dwyne Doe", 
    img_url: "https://github.com/shadcn.png", 
    email: "Sachin.doe.dev@hire10x.ai", 
    contacted: 20, 
    imported: 30, 
    applied: 30 
  },
]

const UserJdStats = ({ children, data, title }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="rounded-full bg-[#E5EFFD] p-[7px]">
      {children}
    </div>
    <p className="text-sm">{data}</p>
    <p className="text-xs text-[#828282]">{title}</p>
  </div>
)

UserJdStats.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

const AssigneeCard = () => {
  return (
    <Card>
      <CardContent className="md:w-[270px] lg:w-[300px] flex flex-col items-center py-4 px-1 md:px-5 md:py-6">
        <Avatar className="w-11 h-11 lg:w-[52px] lg:h-[52px] mb-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
          <AvatarFallback>Sh</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">John Doe</p>
        <p className="text-sm text-[#828282]">john.doe.dev@hire10x.ai</p>
        <p className="text-sm text-[#BDBDBD] my-2">Assigned by John Doe on 02 April 2024</p>
        <div className="w-full flex justify-between mt-1 px-2 lg:px-3">
          <UserJdStats icon={Send} data={20} title="Contacted">
            <Send className="w-5 h-5 text-[#005BE6]"/>
          </UserJdStats>
          <UserJdStats icon={Send} data={20} title="Contacted">
            <img src={Imported} alt="" className="w-5 h-5 text-[#005BE6]"/>
          </UserJdStats>
          <UserJdStats icon={Send} data={20} title="Contacted">
            <Pointer className="w-5 h-5 text-[#005BE6]"/>
          </UserJdStats>
        </div>
      </CardContent>
    </Card>
  )
}

export default AssigneeCard