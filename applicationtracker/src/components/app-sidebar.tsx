import {
  ClipboardPenLine,
  Home,
  FileUser,
  ChartLine,
  Settings,
  User,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  } catch (err) {
    console.error("Invalid token:", err);
    return null;
  }
}

export function AppSidebar() {
  const user = getUserFromToken();

 
  const items = user
    ? [
        {
          title: "Logout",
          url: "#",
          icon: null,
          action: () => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          },
        },
        {
          title: user.email,
          url: "/profile",
          icon: null,
        },
        {
          title: "Home",
          url: "/",
          icon: Home,
        },
        {
          title: "Applications",
          url: "/applications",
          icon: ClipboardPenLine,
        },
        {
          title: "Stats",
          url: "/stats",
          icon: ChartLine,
        },
        {
          title: "Resume Builder",
          url: "/resumebuilder",
          icon: FileUser,
        },
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
        },
      ]
    : [
        {
          title: "Login",
          url: "/login",
          icon: User,
        },
        {
          title: "Home",
          url: "/",
          icon: Home,
        },
        {
          title: "Applications",
          url: "/applications",
          icon: ClipboardPenLine,
        },
        {
          title: "Stats",
          url: "/stats",
          icon: ChartLine,
        },
        {
          title: "Resume Builder",
          url: "/resumebuilder",
          icon: FileUser,
        },
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
        },
      ]

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application Tracker</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      onClick={(e) => {
                        if (item.action) {
                          e.preventDefault();
                          item.action();
                        }
                      }}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
