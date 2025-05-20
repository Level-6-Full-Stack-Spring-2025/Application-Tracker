import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { GripVertical } from "lucide-react";
import { Badge } from "./ui/badge";
import { ColumnId } from "./KanBanBoard";
import { Tag } from "./NewJobCard";

export interface Task {
  id: UniqueIdentifier;
  columnId: ColumnId;
  content: string;
  status: Tag;
}


interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

export type TaskType = "Task";

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

export function TaskCard({ task, isOverlay }: TaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    } satisfies TaskDragData,
    attributes: {
      roleDescription: "Task",
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva("", {
    variants: {
      dragging: {
        over: "ring-2 opacity-30",
        overlay: "ring-2 ring-primary",
      },
    },
  });

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
      })}
    >
      <CardHeader className="px-3 pb-2 space-between flex flex-row border-b-2 border-primary relative">
        <Button
          variant={"ghost"}
          {...attributes}
          {...listeners}
          className="text-primary-foreground ml-1 h-auto cursor-grab"
        >
          <span className="sr-only">Move task</span>
          <GripVertical />
        </Button>
        <Badge variant={task.status.variant} className="ml-auto font-semibold">
          {task.status.title}
        </Badge>
      </CardHeader>
      <CardContent className="pt-4 text-left whitespace-pre-wrap text-sidebar font-lalezar">
        {task.content}
      </CardContent>
    </Card>
  );
}