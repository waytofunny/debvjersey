import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardContentProps {
  className?: string
  children: ReactNode
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={clsx('p-4', className)}>{children}</div>
}
