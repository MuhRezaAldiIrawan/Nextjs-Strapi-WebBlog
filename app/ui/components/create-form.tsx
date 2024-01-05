"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export default function CreateForm() {

    const [date, setDate] = React.useState<Date>()

    return (
        <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mb-4">
            <div className="flex justify-between">
                <p className="dark:text-slate-200">
                    <span className="font-medium border-b border-dashed border-pink-400">
                        Create Blog
                    </span>
                </p>
                <p className="dark:text-slate-200">
                    <span className="font-medium">Today </span>: 21 Augest 2023
                </p>
            </div>

            <div className="grid-cols-2 gap-4 flex no-wrap">
                <div className="w-full max-w-sm items-center gap-1.5 mt-5">
                    <Label htmlFor="email" className="mb-3">Title</Label>
                    <Input type="email" id="email" placeholder="title" />
                </div>
                <div className=" w-full  items-center gap-1.5 mt-5">
                    <Label htmlFor="email" className="mb-3">Genre</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Genre" />
                        </SelectTrigger>
                        <SelectContent className="w-full hover:bg-slate-900 ">
                            <SelectGroup style={{ width: "591px",  padding: "7px" }} className="bg-white" >
                                <SelectItem value="1">One</SelectItem>
                                <SelectItem value="2">Two</SelectItem>
                                <SelectItem value="3">Three</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid-cols-2 gap-4 flex no-wrap">
                <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                    <Label htmlFor="email" className="mb-3">Author</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                    <Label htmlFor="email" className="mb-3">Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="h-4 w-4" style={{ marginRight: "10px", marginLeft: "10px" }} />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                className="bg-white w-full " style={{ width: "591px",  padding: "7px" }} 

                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            <div className="grid w-full gap-1.5 mt-5">
                <Label htmlFor="message" className="mb-3">Content</Label>
                <Textarea placeholder="Type your message here." id="message" />
            </div>





        </div>
    );
}