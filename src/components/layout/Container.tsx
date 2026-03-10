interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean; // 680px max — for body text columns
}

export function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div
      className={`w-full mx-auto px-10 ${narrow ? "max-w-[680px]" : "max-w-[1200px]"} ${className}`}
    >
      {children}
    </div>
  );
}
