import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="hover:cursor-pointer">
      {theme === 'light' ? <SunIcon fill="#ffe460" /> : <MoonIcon fill="#202020" />}
    </button>
  );
}
