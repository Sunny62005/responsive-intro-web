
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value as "light" | "dark")}>
      <ToggleGroupItem value="light" aria-label="Light mode">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light Mode</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark mode">
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark Mode</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
