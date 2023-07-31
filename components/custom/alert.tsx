import { Terminal, Waves } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "../ui/button"

export function AlertDemo({children,index,deleteItem}) {
  return (
    <Alert>
      <AlertTitle>Heads up! {index}</AlertTitle>
      <AlertDescription>
        <div className="flex justify-between">
        {children}
        <Button onClick={deleteItem}>x</Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
