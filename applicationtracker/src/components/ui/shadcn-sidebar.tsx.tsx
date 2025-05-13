// src/components/ui/sidebar.tsx
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

// Context to manage collapsed state
const SidebarContext = React.createContext<{ collapsed: boolean }>({ collapsed: false })

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <aside
      data-collapsed={collapsed}
      className={cn(
        "group/sidebar h-screen bg-muted text-muted-foreground flex flex-col transition-all duration-300 data-[collapsed=true]:w-14 w-64",
        className
      )}
      {...props}
    />
  )
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1", className)} {...props} />
  )
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-2 py-2", className)} {...props} />
  )
}

export function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-2 py-1 text-xs font-semibold", className)} {...props} />
  )
}

export function SidebarGroupContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("grid gap-1", className)} {...props} />
  )
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("grid", className)} {...props} />
  )
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full", className)} {...props} />
  )
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function SidebarMenuButton({
  asChild,
  className,
  ...props
}: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors",
        className
      )}
      {...props}
    />
  )
}
