import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 ' : '🌞 '}

      {theme === 'light' ? 'Modo escuro' : 'Modo claro'}
    </button>
  )
}
