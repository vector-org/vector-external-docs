import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/widgets/theme-toggle'


export function CustomFooter() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className={cn(
        'flex justify-center items-center gap-[2px]',
        'max-sm:flex-col max-sm:gap-5 max-sm:pb-10',
        'tracking-wide text-[15px] text-center group',
        'text-gray-500/[0.8] dark:text-zinc-300/[0.8]',
      )}
      >
        <Separator
          orientation="vertical"
          className="max-sm:hidden h-5 mx-2"
        />
        <div className="flex justify-center h-5 items-center space-x-2 text-sm">
          <ThemeToggle />
        </div>

      </div>
    </div>
  )
}
