'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function VideoCard() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="space-y-3">
        <div className="relative">
          <img
            alt="Video thumbnail"
            className="w-full aspect-video object-cover rounded-xl"
            height="200"
            src="/placeholder.svg?height=200&width=360"
            width="360"
          />
          <div className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">
            10:35
          </div>
        </div>
        <div className="flex space-x-3">
          <Avatar className="w-9 h-9">
            <AvatarImage alt="Channel avatar" src="/placeholder.svg?height=36&width=36" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-base font-semibold leading-tight">
              How to Build a YouTube Clone with React and Tailwind CSS
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Code With Antonio</p>
              <p>1.2M views • 3 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}