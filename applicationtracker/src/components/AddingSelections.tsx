import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

type inputProps = {
  buttonText: string
  limit: number
}

//TODO: EDIT TO MAKE IT REPEATEDLY USEABLE THROUGHOUT RESUME FORM
export default function AddingSelections({buttonText, limit}: inputProps) {
  const [items, setItems] = useState<string[]>([""]);

  const handleItemChange = (index: number, value: string) => {
    const updated = [...items];
    updated[index] = value;
    setItems(updated);
  };

  const removeItem = (index: number) => {
    if(items.length !== 1) {
      const updated = [...items];
      updated.splice(index, 1);
      setItems(updated);
    }
  };

  const moveItem = (from: number, to: number) => {
    const updated = [...items];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setItems(updated);
  };

  const addItem = () => {
    if(items.length < limit) {
      setItems([...items, ""]);
    } else {
      const addButton = document.getElementById("addButton")!;
      addButton.style.color = "bg-muted";
    }
  };

  return (
    <form className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <Select
            value={String(index)}
            onValueChange={(newIndex) => moveItem(index, Number(newIndex))}
          >
            <SelectTrigger className="w-28">
              <SelectValue placeholder={`# ${index + 1}`} />
            </SelectTrigger>
            <SelectContent>
              {items.map((_, i) => (
                <SelectItem key={i} value={String(i)}>
                  # {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="text"
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
          />

          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="removeButton"
            onClick={() => removeItem(index)}
          >
            <X />
          </Button>
        </div>
      ))}
      <Button type="button" variant="outline" id="addButton" onClick={addItem}> 
        {buttonText}
      </Button>
    </form>
  );
}
