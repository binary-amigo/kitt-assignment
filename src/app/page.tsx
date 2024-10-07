import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/ui/datepicker"

export default function Home() {
  return (
    <div className='mt-20'>
      <div className='flex justify-center mb-8'>
        <h1 className='text-4xl'>Good afternoon, Brian</h1>
      </div>
      <div className='flex justify-center'>
        <Card className='w-[50%]'>
          <CardHeader>
            <CardTitle className='px-8 bg-slate-100 w-fit py-2 rounded-md'>
              Flights
              </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-8'>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Where From?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Where To?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <DatePicker placeholder='Departure' />

            <DatePicker placeholder='Return' />

          </CardContent>

          <CardFooter className='flex justify-end'>
            <Button className='bg-[#003E39]'>Search flights</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
