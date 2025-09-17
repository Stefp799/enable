import type { ReactNode } from "react";

type Props = {
  title: string;
  number?: number;
  children?: ReactNode;
};

export default function Block({ title, number, children }: Props) {
  return (
    <div className="relative rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
      {typeof number === "number" && (
        <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow">
          {number}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      {children && <p className="text-gray-600 text-sm leading-6">{children}</p>}
    </div>
  );
}

