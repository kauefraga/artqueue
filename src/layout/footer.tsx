export function Footer() {
  return (
    <footer className="fixed left-0 bottom-0 bg-zinc-950 text-white w-full px-8 py-3">
      <div className="flex justify-between">
        <a href="https://github.com/kauefraga/artqueue" target="_blank" className="px-5 py-2 border-2 rounded-lg border-zinc-950 hover:border-2 hover:border-amber-400 active:border-dashed">
          Contribua no GitHub
        </a>
        <a href="https://kauefraga.dev/" target="_blank" className="px-5 py-2 border-2 rounded-lg border-zinc-950 hover:border-2 hover:border-amber-400 active:border-dashed">
          Feito por Kauê
        </a>
      </div>
    </footer>
  );
}
